import React from 'react';
import { MessageSquareText } from './icons';

interface FloatingActionButtonProps {
  onClick: () => void;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onClick }) => {
  const buttonStyle = {
    background: 'linear-gradient(to right top, #6366f1, #8b5cf6, #ec4899)',
  };

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-300 z-40"
      style={{ ...buttonStyle, animation: 'pulse-glow 2.5s infinite' }}
      aria-label="Ouvrir l'assistant expert"
    >
      <MessageSquareText className="w-8 h-8" />
    </button>
  );
};