import React, { useState, useEffect } from 'react';
import { Bot, CheckCircle, XCircle, RefreshCw } from './icons';
import { generateClinicalCase, ClinicalCase } from '../services/gemini';
import { marked } from 'marked';

const CaseSkeleton: React.FC = () => (
    <div className="space-y-6 animate-pulse">
        <div>
            <div className="h-4 bg-slate-200 rounded-md w-1/4 mb-3"></div>
            <div className="h-6 bg-slate-200 rounded-md w-1/3 mb-3"></div>
            <div className="space-y-2 bg-slate-100 p-4 rounded-md">
                <div className="h-4 bg-slate-200 rounded w-full"></div>
                <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                <div className="h-4 bg-slate-200 rounded w-3/4"></div>
            </div>
        </div>
        <div>
            <div className="h-5 bg-slate-200 rounded-md w-2/3 mb-4"></div>
            <div className="space-y-3">
                <div className="h-14 bg-slate-200 rounded-lg w-full"></div>
                <div className="h-14 bg-slate-200 rounded-lg w-full"></div>
                <div className="h-14 bg-slate-200 rounded-lg w-full"></div>
                <div className="h-14 bg-slate-200 rounded-lg w-full"></div>
            </div>
        </div>
        <div className="flex justify-center pt-4 border-t border-slate-200">
            <div className="h-12 bg-slate-200 rounded-lg w-48"></div>
        </div>
    </div>
);

const ErrorDisplay: React.FC<{ message: string; onRetry: () => void }> = ({ message, onRetry }) => (
    <div className="text-center p-8 bg-red-50 border border-red-200 rounded-lg">
        <XCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <p className="text-red-700 font-semibold">{message}</p>
        <button onClick={onRetry} className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center mx-auto">
            <RefreshCw className="w-4 h-4 mr-2"/>
            Réessayer
        </button>
    </div>
);

export const ClinicalCaseSimulator: React.FC = () => {
    const [caseData, setCaseData] = useState<ClinicalCase | null>(null);
    const [userAnswer, setUserAnswer] = useState<string | null>(null);
    const [showFeedback, setShowFeedback] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateCase = async () => {
        setIsLoading(true);
        setCaseData(null);
        setUserAnswer(null);
        setShowFeedback(false);
        setError(null);
        try {
            const newCase = await generateClinicalCase();
            setCaseData(newCase);
        } catch (e) {
            console.error("Error generating clinical case:", e);
            setError("Une erreur est survenue lors de la génération du cas. Veuillez réessayer.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        handleGenerateCase();
    }, []);

    const handleAnswerSelect = (optionId: string) => {
        if (!showFeedback) {
            setUserAnswer(optionId);
        }
    };
    
    const handleSubmit = () => {
        if (userAnswer) {
            setShowFeedback(true);
        }
    };

    const getOptionStyle = (optionId: string) => {
        if (!showFeedback) {
            return userAnswer === optionId 
                ? 'border-indigo-500 bg-indigo-50 ring-2 ring-indigo-300' 
                : 'border-slate-300 bg-white hover:bg-slate-50';
        }

        const isCorrect = caseData?.correctAnswerId === optionId;
        const isSelected = userAnswer === optionId;

        if (isCorrect) return 'border-green-500 bg-green-50 text-green-800 font-bold';
        if (isSelected && !isCorrect) return 'border-red-500 bg-red-50 text-red-800 line-through';
        return 'border-slate-200 bg-slate-100 text-slate-500';
    };

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h2 className="text-3xl font-bold text-slate-900 flex items-center">
                    <Bot className="w-8 h-8 mr-4 text-indigo-600" />
                    Simulateur de Cas Cliniques Interactif
                </h2>
                <p className="mt-2 text-slate-600 text-base">
                    Testez vos connaissances avec des scénarios générés par l'IA et recevez un feedback instantané.
                </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 min-h-[400px]">
                {isLoading && <CaseSkeleton />}
                {error && <ErrorDisplay message={error} onRetry={handleGenerateCase} />}
                {caseData && !isLoading && (
                    <div className="space-y-6">
                        {/* Case Scenario */}
                        <div>
                             {caseData.category && (
                                <p className="text-sm font-semibold text-indigo-600 bg-indigo-100 inline-block px-2 py-1 rounded-md mb-3">
                                    Catégorie : {caseData.category}
                                </p>
                            )}
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">Scénario Clinique</h3>
                            <p className="text-slate-700 bg-slate-50 p-4 rounded-md border border-slate-200 whitespace-pre-wrap">{caseData.case}</p>
                        </div>

                        {/* Question and Options */}
                        <div>
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">{caseData.question}</h3>
                            <div className="space-y-3">
                                {(caseData.options || []).map(option => {
                                    const isCorrect = caseData.correctAnswerId === option.id;
                                    const isSelected = userAnswer === option.id;
                                    return (
                                        <button 
                                            key={option.id} 
                                            onClick={() => handleAnswerSelect(option.id)}
                                            disabled={showFeedback}
                                            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-center space-x-4 ${getOptionStyle(option.id)}`}
                                        >
                                            <span className="font-bold">{option.id}.</span>
                                            <span>{option.text}</span>
                                            {showFeedback && isCorrect && <CheckCircle className="w-6 h-6 ml-auto text-green-600 flex-shrink-0"/>}
                                            {showFeedback && isSelected && !isCorrect && <XCircle className="w-6 h-6 ml-auto text-red-600 flex-shrink-0"/>}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Feedback */}
                        {showFeedback && (
                            <div className={`p-4 rounded-lg border-l-4 animate-fade-in-fast ${userAnswer === caseData.correctAnswerId ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}>
                                <h3 className="text-lg font-bold flex items-center">
                                    {userAnswer === caseData.correctAnswerId ? 
                                        <><CheckCircle className="w-6 h-6 mr-2 text-green-600"/>Bonne réponse !</> : 
                                        <><XCircle className="w-6 h-6 mr-2 text-red-600"/>Réponse incorrecte</>
                                    }
                                </h3>
                                <div 
                                    className="mt-2 prose prose-sm max-w-none text-slate-700"
                                    dangerouslySetInnerHTML={{ __html: marked.parse(caseData.explanation || '') as string }}
                                />
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex justify-center pt-4 border-t">
                             {showFeedback ? (
                                <button onClick={handleGenerateCase} className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors flex items-center">
                                    <RefreshCw className="w-5 h-5 mr-2"/>
                                    Nouveau Cas Clinique
                                </button>
                            ) : (
                                <button onClick={handleSubmit} disabled={!userAnswer} className="px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg shadow-md hover:bg-slate-800 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed">
                                    Valider la Réponse
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};