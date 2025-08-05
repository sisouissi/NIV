
import React, { useState } from 'react';
import { BrainCircuit, ClipboardList, Wrench, ListChecks, UserCheck, Activity, SlidersHorizontal, User } from './icons';
import { VniDmdSection } from './VniDmdSection';
import { VniAlsSection } from './VniAlsSection';
import { NmdSelectionSection } from './NmdSelectionSection';
import { NmdInitiationSection } from './NmdInitiationSection';
import { NmdFollowUpSection } from './NmdFollowUpSection';
import { NmdGeneralites } from './NmdGeneralites';

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

export const VniNmdSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'generalites' | 'selection' | 'initiation' | 'adaptation' | 'dmd' | 'als'>('generalites');

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h2 className="text-3xl font-bold text-slate-900 flex items-center">
                    <BrainCircuit className="w-8 h-8 mr-4 text-indigo-600" />
                    Apport de la VNI dans les Maladies Neuromusculaires (MNM)
                </h2>
                <p className="mt-2 text-slate-600 text-base">
                    Guide basé sur les recommandations 2023 de l'American College of Chest Physicians et les revues de la littérature de 2023-2024 pour la prise en charge respiratoire des patients atteints de maladies neuromusculaires.
                </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-slate-200">
                <div className="flex border-b border-slate-200 overflow-x-auto no-scrollbar">
                    <TabButton onClick={() => setActiveTab('generalites')} isActive={activeTab === 'generalites'}>
                        <ClipboardList className="w-5 h-5" />
                        <span>Généralités & Physio.</span>
                    </TabButton>
                    <TabButton onClick={() => setActiveTab('selection')} isActive={activeTab === 'selection'}>
                        <UserCheck className="w-5 h-5" />
                        <span>Principes : Sélection</span>
                    </TabButton>
                    <TabButton onClick={() => setActiveTab('initiation')} isActive={activeTab === 'initiation'}>
                        <SlidersHorizontal className="w-5 h-5" />
                        <span>Principes : Initiation</span>
                    </TabButton>
                    <TabButton onClick={() => setActiveTab('adaptation')} isActive={activeTab === 'adaptation'}>
                        <Activity className="w-5 h-5"/>
                        <span>Principes : Suivi</span>
                    </TabButton>
                    <TabButton onClick={() => setActiveTab('dmd')} isActive={activeTab === 'dmd'}>
                        <User className="w-5 h-5"/>
                        <span>Focus : DMD</span>
                    </TabButton>
                    <TabButton onClick={() => setActiveTab('als')} isActive={activeTab === 'als'}>
                        <User className="w-5 h-5"/>
                        <span>Focus : SLA</span>
                    </TabButton>
                </div>
                <div className="p-2 sm:p-6">
                    {activeTab === 'generalites' && <NmdGeneralites />}
                    {activeTab === 'selection' && <NmdSelectionSection />}
                    {activeTab === 'initiation' && <NmdInitiationSection />}
                    {activeTab === 'adaptation' && <NmdFollowUpSection />}
                    {activeTab === 'dmd' && <VniDmdSection />}
                    {activeTab === 'als' && <VniAlsSection />}
                </div>
            </div>
        </div>
    );
};
