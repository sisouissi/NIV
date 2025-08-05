import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, FlaskConical, Heart, ListChecks, Moon, RefreshCw, Siren, User, Wind } from './icons';

type Step = 'start' | 'bicarbonate' | 'abg' | 'psg' | 'cpap_followup' | 'result_cpap' | 'result_niv' | 'result_soh_unlikely' | 'result_saos_simple' | 'result_cpap_success' | 'result_acute_niv';

const QuestionCard: React.FC<{ icon: React.ReactNode; question: string; children: React.ReactNode }> = ({ icon, question, children }) => (
    <div className="text-center">
        <div className="flex items-center justify-center text-indigo-600 mb-4">
            {icon}
            <p className="ml-3 text-lg font-semibold text-slate-800">{question}</p>
        </div>
        <div className="flex justify-center flex-wrap gap-4">
            {children}
        </div>
    </div>
);

const DecisionButton: React.FC<{ onClick: () => void; children: React.ReactNode; color?: 'green' | 'red' | 'blue' | 'amber' }> = ({ onClick, children, color = 'blue' }) => {
    const colorClasses = {
        green: 'bg-green-600 hover:bg-green-700',
        red: 'bg-red-600 hover:bg-red-700',
        blue: 'bg-blue-600 hover:bg-blue-700',
        amber: 'bg-amber-600 hover:bg-amber-700'
    };
    return (
        <button onClick={onClick} className={`px-5 py-2.5 ${colorClasses[color]} text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all text-sm`}>
            {children}
        </button>
    );
};

const ResultCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; variant: 'green' | 'amber' | 'blue' | 'red' }> = ({ icon, title, children, variant }) => {
    const colors = {
        green: 'bg-green-50 border-green-500 text-green-800',
        amber: 'bg-amber-50 border-amber-500 text-amber-800',
        blue: 'bg-blue-50 border-blue-500 text-blue-800',
        red: 'bg-red-50 border-red-500 text-red-800'
    };
    return (
        <div className={`text-center animate-fade-in-fast p-4 sm:p-6 rounded-lg border-l-4 ${colors[variant]}`}>
            <div className="flex items-center justify-center mb-3">
                {icon}
                <h4 className="ml-3 text-xl font-bold">{title}</h4>
            </div>
            <div className={`text-slate-700 text-base space-y-2`}>{children}</div>
        </div>
    );
};

export const TosDecisionTool: React.FC = () => {
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
                    <QuestionCard icon={<Siren className="w-8 h-8"/>} question="Le patient est-il hospitalisé pour une IRA hypercapnique ?">
                        <DecisionButton onClick={() => handleDecision('result_acute_niv')} color="red">Oui, en décompensation aiguë</DecisionButton>
                        <DecisionButton onClick={() => handleDecision('bicarbonate')} color="green">Non, patient stable en ambulatoire</DecisionButton>
                    </QuestionCard>
                );
            case 'bicarbonate':
                return (
                     <QuestionCard icon={<FlaskConical className="w-8 h-8"/>} question="Quel est le taux de bicarbonates sériques ?">
                        <DecisionButton onClick={() => handleDecision('abg')} color="red">supérieur ou égal à 27 mmol/L</DecisionButton>
                        <DecisionButton onClick={() => handleDecision('result_soh_unlikely')} color="green">inférieur à 27 mmol/L</DecisionButton>
                    </QuestionCard>
                );
            case 'abg':
                 return (
                    <QuestionCard icon={<Heart className="w-8 h-8"/>} question="Gazométrie artérielle : Quelle est la PaCO₂ ?">
                        <DecisionButton onClick={() => handleDecision('psg')} color="red">supérieur ou égal à 45 mmHg</DecisionButton>
                        <DecisionButton onClick={() => handleDecision('result_soh_unlikely')} color="green">inférieur à 45 mmHg</DecisionButton>
                    </QuestionCard>
                );
             case 'psg':
                 return (
                    <QuestionCard icon={<Moon className="w-8 h-8"/>} question="Polysomnographie : Quel est l'IAH ?">
                        <DecisionButton onClick={() => handleDecision('result_cpap')} color="red">IAH supérieur ou égal à 30/h (SAOS sévère)</DecisionButton>
                        <DecisionButton onClick={() => handleDecision('result_niv')} color="amber">IAH inférieur à 30/h (pas de SAOS sévère)</DecisionButton>
                    </QuestionCard>
                );
            case 'cpap_followup':
                 return (
                    <QuestionCard icon={<ListChecks className="w-8 h-8"/>} question="Après 1-3 mois de CPAP bien suivie, la PaCO₂ est-elle normalisée ?">
                        <DecisionButton onClick={() => handleDecision('result_cpap_success')} color="green">Oui, PaCO₂ inférieur à 45 mmHg</DecisionButton>
                        <DecisionButton onClick={() => handleDecision('result_niv')} color="red">Non, PaCO₂ persistante supérieur ou égal à 45 mmHg</DecisionButton>
                    </QuestionCard>
                );

            // --- RESULT CARDS ---

            case 'result_acute_niv':
                return (
                     <ResultCard icon={<Siren className="w-10 h-10"/>} title="VNI (Bi-level) Recommandée" variant="red">
                        <p>La VNI est le traitement de choix en aigu. Le patient doit sortir de l'hôpital avec la VNI en attendant une évaluation plus poussée en ambulatoire.</p>
                    </ResultCard>
                );
            case 'result_soh_unlikely':
                return (
                    <ResultCard icon={<CheckCircle className="w-10 h-10"/>} title="Syndrome Obésité-Hypoventilation (SOH) peu probable" variant="green">
                        <p>Le diagnostic de SOH est peu probable. Explorer d'autres causes d'hypercapnie si présente, ou d'autres troubles respiratoires du sommeil.</p>
                    </ResultCard>
                );
            case 'result_saos_simple':
                return (
                     <ResultCard icon={<Wind className="w-10 h-10"/>} title="Traitement du SAOS par CPAP" variant="blue">
                        <p>Le patient a un SAOS. La CPAP est le traitement de première intention.</p>
                    </ResultCard>
                );
            case 'result_cpap':
                 return (
                    <ResultCard icon={<Wind className="w-10 h-10"/>} title="SOH avec SAOS Sévère : CPAP en 1ère intention" variant="blue">
                        <p>Conformément aux recommandations de l'ATS, la CPAP est le traitement initial recommandé.</p>
                        <div className="mt-4">
                            <DecisionButton onClick={() => handleDecision('cpap_followup')} color="blue">Suivi à 1-3 mois →</DecisionButton>
                        </div>
                    </ResultCard>
                );
            case 'result_niv':
                return (
                     <ResultCard icon={<User className="w-10 h-10"/>} title="VNI (Bi-level) Recommandée" variant="amber">
                        <p>La VNI (Bi-level PAP) est indiquée car il existe une composante d'hypoventilation non corrigée par la seule levée de l'obstruction, ou l'obstruction n'est pas l'élément prédominant.</p>
                    </ResultCard>
                );
            case 'result_cpap_success':
                 return (
                     <ResultCard icon={<CheckCircle className="w-10 h-10"/>} title="Succès de la CPAP : Continuer le traitement" variant="green">
                        <p>La CPAP a permis de corriger à la fois le SAOS et l'hypercapnie. C'est le traitement adéquat à long terme pour ce patient.</p>
                    </ResultCard>
                );
        }
    };

    return (
        <div className="bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm relative">
            <h3 className="text-xl font-bold text-center text-slate-800 mb-6">Arbre Décisionnel : SOH - CPAP ou VNI ?</h3>
            <div className="min-h-[180px] flex items-center justify-center">
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