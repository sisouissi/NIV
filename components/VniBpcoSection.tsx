
import React, { useState } from 'react';
import { ClipboardList, BookOpen, Siren, Activity } from './icons';
import { BpcoGeneralites } from './BpcoGeneralites';
import { BpcoPousseeAigue } from './BpcoPousseeAigue';
import { BpcoLongCours } from './BpcoLongCours';

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


export const VniBpcoSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'generalites' | 'poussee-aigue' | 'long-cours'>('generalites');

    return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 flex items-center">
          <ClipboardList className="w-8 h-8 mr-4 text-indigo-600" />
          Apport de la VNI dans la BPCO
        </h2>
        <p className="mt-2 text-slate-600 text-base">
          Guide pratique de la VNI dans la Bronchopneumopathie Chronique Obstructive, de la crise aiguë à la gestion au long cours.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200">
        <div className="flex border-b border-slate-200">
            <TabButton onClick={() => setActiveTab('generalites')} isActive={activeTab === 'generalites'}>
                <BookOpen className="w-5 h-5" />
                <span>Généralités</span>
            </TabButton>
            <TabButton onClick={() => setActiveTab('poussee-aigue')} isActive={activeTab === 'poussee-aigue'}>
                 <Siren className="w-5 h-5" />
                <span>VNI en Poussée Aiguë</span>
            </TabButton>
            <TabButton onClick={() => setActiveTab('long-cours')} isActive={activeTab === 'long-cours'}>
                <Activity className="w-5 h-5"/>
                <span>VNI au Long Cours (Stable)</span>
            </TabButton>
        </div>
        <div className="p-2 sm:p-6">
            {activeTab === 'generalites' && <BpcoGeneralites />}
            {activeTab === 'poussee-aigue' && <BpcoPousseeAigue />}
            {activeTab === 'long-cours' && <BpcoLongCours />}
        </div>
      </div>
    </div>
    );
};
