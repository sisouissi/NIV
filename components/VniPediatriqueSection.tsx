
import React, { useState } from 'react';
import { Child, BookOpen, SlidersHorizontal, Wrench, ListChecks } from './icons';
import { PedGeneralitesSection } from './PedGeneralitesSection';
import { PedMiseEnPlaceSection } from './PedMiseEnPlaceSection';
import { PedMaterielSection } from './PedMaterielSection';
import { PedSuiviSection } from './PedSuiviSection';

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

export const VniPediatriqueSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'generalites' | 'mise-en-place' | 'materiel' | 'suivi'>('generalites');

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h2 className="text-3xl font-bold text-slate-900 flex items-center">
                    <Child className="w-8 h-8 mr-4 text-indigo-600" />
                    VNI en Pédiatrie
                </h2>
                <p className="mt-2 text-slate-600 text-base">
                    Un domaine spécifique avec ses propres défis et recommandations, basé sur les dernières publications de l'ERS.
                </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-slate-200">
                <div className="flex border-b border-slate-200 overflow-x-auto no-scrollbar">
                    <TabButton onClick={() => setActiveTab('generalites')} isActive={activeTab === 'generalites'}>
                        <BookOpen className="w-5 h-5" />
                        <span>Généralités & Indications</span>
                    </TabButton>
                    <TabButton onClick={() => setActiveTab('mise-en-place')} isActive={activeTab === 'mise-en-place'}>
                         <SlidersHorizontal className="w-5 h-5" />
                        <span>Mise en Place & Réglages</span>
                    </TabButton>
                    <TabButton onClick={() => setActiveTab('materiel')} isActive={activeTab === 'materiel'}>
                        <Wrench className="w-5 h-5"/>
                        <span>Matériel & Interfaces</span>
                    </TabButton>
                    <TabButton onClick={() => setActiveTab('suivi')} isActive={activeTab === 'suivi'}>
                        <ListChecks className="w-5 h-5"/>
                        <span>Suivi & Adhérence</span>
                    </TabButton>
                </div>
                <div className="p-2 sm:p-6">
                    {activeTab === 'generalites' && <PedGeneralitesSection />}
                    {activeTab === 'mise-en-place' && <PedMiseEnPlaceSection />}
                    {activeTab === 'materiel' && <PedMaterielSection />}
                    {activeTab === 'suivi' && <PedSuiviSection />}
                </div>
            </div>
        </div>
    );
};
