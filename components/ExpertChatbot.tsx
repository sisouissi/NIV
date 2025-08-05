
import React, { useState, useEffect, useRef } from 'react';
import { Chat } from '@google/genai';
import { marked } from 'marked';
import { createChatSession, sendMessageToChatStream } from '../services/gemini';
import { Send, User, Bot, AlertTriangle } from './icons';

interface Message {
    role: 'user' | 'model';
    content: string;
}

const ChatMessage: React.FC<{ message: Message }> = ({ message }) => {
    const isModel = message.role === 'model';
    const Icon = isModel ? Bot : User;
    const bgColor = isModel ? 'bg-slate-100' : 'bg-indigo-50';
    const align = isModel ? 'items-start' : 'items-end';
    const iconColor = isModel ? 'text-slate-500' : 'text-indigo-500';

    return (
        <div className={`flex flex-col ${align} animate-fade-in-fast`}>
            <div className={`flex items-start space-x-3 max-w-full`}>
                {isModel && <Icon className={`w-8 h-8 p-1.5 rounded-full bg-white border ${iconColor} flex-shrink-0 mt-1`} />}
                <div className={`p-4 rounded-xl shadow-sm ${bgColor}`}>
                    <div
                        className="prose prose-sm max-w-none text-slate-800"
                        dangerouslySetInnerHTML={{ __html: marked.parse(message.content) as string }}
                    />
                </div>
                 {!isModel && <Icon className={`w-8 h-8 p-1.5 rounded-full bg-white border ${iconColor} flex-shrink-0 mt-1`} />}
            </div>
        </div>
    );
};

export const ExpertChatbot: React.FC = () => {
    const chatRef = useRef<Chat | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    useEffect(() => {
        try {
            chatRef.current = createChatSession();
            setMessages([
                {
                    role: 'model',
                    content: "Bonjour ! Je suis votre assistant expert en VNI, j'ai le plaisir de répondre à vos questions :"
                }
            ]);
        } catch (e) {
            console.error(e);
            setError("Impossible d'initialiser l'assistant. Veuillez vérifier votre connexion ou réessayer plus tard.");
        }
    }, []);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim() || isLoading) return;

        const newUserMessage: Message = { role: 'user', content: userInput.trim() };
        setMessages(prev => [...prev, newUserMessage, { role: 'model', content: '' }]);
        setUserInput('');
        setIsLoading(true);
        setError(null);

        try {
            if (!chatRef.current) throw new Error("Chat session not initialized.");
            
            const stream = await sendMessageToChatStream(chatRef.current, newUserMessage.content);

            for await (const chunk of stream) {
                const chunkText = chunk.text;
                setMessages(prev => {
                    const newMessages = [...prev];
                    const lastMessage = newMessages[newMessages.length - 1];
                    lastMessage.content += chunkText;
                    return newMessages;
                });
            }

        } catch (e) {
            console.error(e);
            const errorMessage = "Désolé, une erreur est survenue. Impossible de répondre à votre question pour le moment.";
            setMessages(prev => {
                 const newMessages = [...prev];
                 const lastMessage = newMessages[newMessages.length - 1];
                 if (lastMessage.content === '') {
                     lastMessage.content = errorMessage;
                 } else {
                     newMessages.push({ role: 'model', content: errorMessage });
                 }
                 return newMessages;
            });
            setError("Erreur de communication avec l'API. Veuillez réessayer.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-full bg-white">
            <div className="flex-1 p-6 overflow-y-auto space-y-6">
                {messages.map((msg, index) => <ChatMessage key={index} message={msg} />)}
                {isLoading && messages[messages.length - 1]?.content === '' && (
                     <div className="flex items-start space-x-3 max-w-2xl animate-fade-in-fast">
                         <Bot className={`w-8 h-8 p-1.5 rounded-full bg-white border text-slate-500 flex-shrink-0 mt-1`} />
                         <div className="p-4 rounded-xl shadow-sm bg-slate-100 flex items-center space-x-2">
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:0.4s]"></div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            
            {error && (
                <div className="p-4 border-t border-red-200 bg-red-50 text-sm text-red-700 flex items-center flex-shrink-0">
                    <AlertTriangle className="w-4 h-4 mr-2" /> {error}
                </div>
            )}
            
            <div className="p-4 border-t border-slate-200 bg-white flex-shrink-0">
                <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Posez votre question ici..."
                        disabled={isLoading}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-slate-100"
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !userInput.trim()}
                        className="p-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed flex-shrink-0"
                        aria-label="Envoyer"
                    >
                        <Send className="w-6 h-6" />
                    </button>
                </form>
            </div>
             <style>{`
                /* General prose settings for chat */
                .prose p { margin: 0.5rem 0; }
                .prose ul { margin: 0.5rem 0; padding-left: 1.5rem; }
                .prose li { margin: 0.25rem 0; }
                .prose strong { color: #1e293b; }

                /* Specific styling for H3 to make it a prominent heading */
                .prose h3 {
                    font-size: 1.15rem; /* ~18px, larger than prose-sm default */
                    font-weight: 700;
                    color: #1e293b;
                    margin-top: 1.25rem;
                    margin-bottom: 0.5rem;
                    padding-bottom: 0.25rem;
                    border-bottom: 1px solid #e2e8f0; /* a light separator line */
                }
                
                /* Remove top margin for the first element to look clean */
                .prose > :first-child {
                    margin-top: 0;
                }
                .prose h3:first-child {
                    margin-top: 0;
                }
             `}</style>
        </div>
    );
};