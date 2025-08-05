
import React, { useState } from 'react';
import { Moon, BookOpen, User, Wrench } from './icons';
import { TosGeneralites } from './TosGeneralites';
import { VniSohSection } from './VniSohSection';
import { SohPriseEnCharge } from './SohPriseEnCharge';

const TabButton: React.FC<{ onClick: () => void; isActive: boolean; children: React.ReactNode }> = ({ onClick, isActive, children }) => (
    <button
        onClick={onClick}
        className={`px-3 sm:px-4 py-2 text-sm sm:text-base font-semibold transition-colors duration-200 border-b-2 flex items-center space-x-2 ${
            isActive
                ? 'border-indigo-500 text-indigo-600 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
        }`}
        role="tab"
        aria-selected={isActive}
    >
        {children}
    </button>
);

export const VniTosSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'generalites' | 'soh' | 'prise-en-charge'>('generalites');

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h2 className="text-3xl font-bold text-slate-900 flex items-center">
                    <Moon className="w-8 h-8 mr-4 text-indigo-600" />
                    VNI et Troubles Obstructifs du Sommeil (TOS)
                </h2>
                <p className="mt-2 text-slate-600 text-base">
                    Quand et pourquoi la VNI devient-elle indispensable là où la CPAP ne suffit plus ?
                </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-slate-200">
                <div className="flex border-b border-slate-200 overflow-x-auto no-scrollbar">
                    <TabButton onClick={() => setActiveTab('generalites')} isActive={activeTab === 'generalites'}>
                        <BookOpen className="w-5 h-5" />
                        <span>Introduction & Points Clés</span>
                    </TabButton>
                    <TabButton onClick={() => setActiveTab('soh')} isActive={activeTab === 'soh'}>
                         <User className="w-5 h-5" />
                        <span>Syndrome Obésité-Hypoventilation (SOH)</span>
                    </TabButton>
                    <TabButton onClick={() => setActiveTab('prise-en-charge')} isActive={activeTab === 'prise-en-charge'}>
                         <Wrench className="w-5 h-5" />
                        <span>Prise en charge pratique</span>
                    </TabButton>
                </div>
                <div className="p-2 sm:p-6">
                    {activeTab === 'generalites' && <TosGeneralites />}
                    {activeTab === 'soh' && <VniSohSection />}
                    {activeTab === 'prise-en-charge' && <SohPriseEnCharge />}
                </div>
            </div>
        </div>
    );
};
