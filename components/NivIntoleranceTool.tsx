
import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Heart, RefreshCw, Siren, Wind, Wrench, XCircle } from './icons';

type Step = 'start' | 'askTrach' | 'outcomeImv' | 'outcomeFollowUp';

const signs = [
    "Dégradation de la fonction bulbaire",
    "Aspirations fréquentes",
    "Toux inefficace",
    "Épisodes d'infection pulmonaire",
    "Déclin de la fonction pulmonaire"
];

const followUpActions = [
    "Optimiser les paramètres de VNI (mode, Ti, pressions)",
    "Analyser les données de télésuivi (observance, fuites)",
    "Évaluer et adapter l'interface",
    "Monitorer par oxymétrie/capnographie nocturne",
    "Gérer les sécrétions et le désencombrement",
    "Discuter des objectifs de soins, y compris les soins palliatifs"
];

export const NivIntoleranceTool: React.FC = () => {
    const [step, setStep] = useState<Step>('start');

    const handleDecision = (nextStep: Step) => {
        setStep(nextStep);
    };

    const resetTool = () => {
        setStep('start');
    };

    const renderStep = () => {
        switch (step) {
            case 'start':
                return (
                    <div className="text-center">
                        <p className="text-lg font-semibold text-slate-800 mb-4">Le patient sous VNI présente-t-il l'un des signes d'aggravation suivants ?</p>
                        <div className="max-w-md mx-auto bg-white p-4 border border-slate-200 rounded-lg text-left text-sm mb-6">
                           <ul className="list-disc list-inside space-y-1 text-slate-700">
                                {signs.map((sign, index) => <li key={index}>{sign}</li>)}
                           </ul>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <button onClick={() => handleDecision('askTrach')} className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors">Oui, un ou plusieurs signes</button>
                            <button onClick={() => handleDecision('outcomeFollowUp')} className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors">Non, aucun de ces signes</button>
                        </div>
                    </div>
                );
            case 'askTrach':
                 return (
                    <div className="text-center animate-fade-in-fast">
                        <p className="text-lg font-semibold text-slate-800 mb-4">Le patient est-il d'accord pour une trachéotomie ?</p>
                        <div className="flex justify-center space-x-4">
                            <button onClick={() => handleDecision('outcomeImv')} className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">Oui</button>
                            <button onClick={() => handleDecision('outcomeFollowUp')} className="px-6 py-2 bg-slate-500 text-white font-semibold rounded-lg shadow-md hover:bg-slate-600 transition-colors">Non</button>
                        </div>
                    </div>
                );
            case 'outcomeImv':
                return (
                     <div className="text-center animate-fade-in-fast p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                        <Siren className="w-10 h-10 mx-auto text-red-600 mb-3" />
                        <h4 className="text-xl font-bold text-red-800">Discuter la Ventilation Mécanique Invasive (VMI) par trachéotomie</h4>
                        <p className="text-slate-700 mt-2 text-sm">Cette option doit être envisagée en cas d'échec de la VNI ou d'aggravation, en accord avec les souhaits du patient.</p>
                    </div>
                );
            case 'outcomeFollowUp':
                return (
                    <div className="text-center animate-fade-in-fast p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                        <CheckCircle className="w-10 h-10 mx-auto text-green-600 mb-3" />
                        <h4 className="text-xl font-bold text-green-800">Poursuivre et Optimiser le Suivi Clinique</h4>
                        <div className="max-w-lg mx-auto bg-white p-3 mt-4 border border-slate-200 rounded-lg text-left text-sm">
                           <ul className="list-disc list-inside space-y-1 text-slate-700">
                                {followUpActions.map((action, index) => <li key={index}>{action}</li>)}
                           </ul>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm relative">
            <div className="min-h-[220px] flex items-center justify-center">
                {renderStep()}
            </div>
             {step !== 'start' && (
                <button onClick={resetTool} className="absolute top-3 right-3 flex items-center text-xs text-slate-500 hover:text-slate-700 transition-colors font-medium">
                    <RefreshCw className="w-4 h-4 mr-1"/>
                    Réinitialiser
                </button>
            )}
        </div>
    );
};
