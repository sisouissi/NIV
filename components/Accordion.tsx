import React, { useState } from 'react';
import { ChevronUp } from './icons/ChevronUp';

interface AccordionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  variant?: 'primary' | 'danger' | 'success' | 'default';
}

export const Accordion: React.FC<AccordionProps> = ({ title, icon, children, variant = 'default' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const headerClasses = {
    default: 'bg-gradient-to-r from-slate-800 to-slate-600 hover:from-slate-700 hover:to-slate-500 focus-visible:ring-slate-500',
    primary: 'bg-indigo-600 hover:bg-indigo-700 focus-visible:ring-indigo-500',
    danger: 'bg-red-600 hover:bg-red-700 focus-visible:ring-red-500',
    success: 'bg-green-600 hover:bg-green-700 focus-visible:ring-green-500'
  };

  return (
    <div className="rounded-lg shadow-sm border border-slate-200 overflow-hidden my-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-4 text-left font-semibold text-white ${headerClasses[variant]} focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 shadow-md transition-all duration-200`}
        aria-expanded={isOpen}
      >
        <div className="flex items-center space-x-3">
          {icon}
          <span className="text-lg">{title}</span>
        </div>
        <ChevronUp
          className={`w-6 h-6 text-white/80 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div 
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
            <div className="p-4 pt-0 text-slate-600 bg-white">
                 <div className="border-t border-slate-200 pt-4">
                    {children}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
