
import React from 'react';
import { Moon, ListChecks, Target, AlertTriangle, Wind, SlidersHorizontal, CheckCircle, Lungs, User } from './icons';
import { Accordion } from './Accordion';

const KeyPointsCard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg shadow-sm">
        <h3 className="font-bold text-lg text-indigo-800 flex items-center mb-3">
            <ListChecks className="w-6 h-6 mr-2" />
            Éléments Clés à Retenir
        </h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700 text-base">
            {children}
        </ul>
    </div>
);

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; variant: 'blue' | 'green' | 'red' | 'amber' }> = ({ title, children, icon, variant }) => {
    const colors = {
        blue: 'border-blue-500 bg-blue-50 text-blue-800',
        green: 'border-green-500 bg-green-50 text-green-800',
        red: 'border-red-500 bg-red-50 text-red-800',
        amber: 'border-amber-500 bg-amber-50 text-amber-800'
    };
    return (
        <div className={`p-4 rounded-lg border-l-4 ${colors[variant]} h-full shadow-sm`}>
            <h4 className="font-semibold text-lg flex items-center mb-2">
                {icon}
                <span className="ml-3">{title}</span>
            </h4>
            <div className="text-slate-700 space-y-2 text-base">{children}</div>
        </div>
    );
};

const SettingsCard: React.FC<{title: string, items: {label: string, value: string}[]}> = ({title, items}) => (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
        <h5 className="font-bold text-lg text-slate-800 mb-3 text-center">{title}</h5>
        <ul className="space-y-2 text-sm">
            {items.map(item => (
                <li key={item.label} className="flex justify-between items-center border-b pb-1">
                    <span className="text-slate-600">{item.label}</span>
                    <span className="font-semibold text-slate-900">{item.value}</span>
                </li>
            ))}
        </ul>
    </div>
);

export const TosGeneralites: React.FC = () => {
  return (
    <div className="space-y-8 pt-8">
        <KeyPointsCard>
            <li>La VNI est indiquée en cas d'<strong>échec de la CPAP</strong>, défini par la persistance d'une hypoventilation alvéolaire (hypercapnie) malgré la correction des événements obstructifs.</li>
            <li>Les deux indications phares sont le <strong>Syndrome Obésité-Hypoventilation (SOH)</strong> et le <strong>Syndrome de Chevauchement (Overlap : BPCO + SAOS)</strong>.</li>
            <li>L'objectif de la VNI est double : lever l'obstruction avec la <strong>PEP (EPAP)</strong> et supporter activement la ventilation avec l'<strong>Aide Inspiratoire (AI)</strong>.</li>
            <li>Les réglages pour le SOH sont spécifiques : PEP élevée, Aide Inspiratoire importante, et des temps inspiratoires (Ti) plus longs pour compenser la mécanique restrictive.</li>
        </KeyPointsCard>

        <Accordion title="De la CPAP à la VNI : Quand faire la transition ?" icon={<Target className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">La CPAP est le traitement de première ligne pour le SAOS. Cependant, lorsque le problème n'est pas seulement obstructif mais aussi ventilatoire, la VNI devient nécessaire.</p>
            <div className="grid md:grid-cols-2 gap-6">
                <InfoCard title="Syndrome Obésité-Hypoventilation (SOH)" icon={<User className="w-5 h-5"/>} variant="amber">
                    <p className="font-semibold">La VNI est le traitement de choix en cas d'échec de la CPAP.</p>
                    <p className="mt-2">Environ 60% des patients SOH répondent à la CPAP. Pour les 40% restants, la VNI (BPAP) est nécessaire.</p>
                    <p className="mt-2 font-bold text-amber-700">L'indication de la VNI est posée si, sous CPAP efficace (IAH corrigé), il persiste :</p>
                    <ul className="list-disc list-inside space-y-1 mt-1">
                        <li>Une hypoventilation nocturne.</li>
                        <li>Des désaturations prolongées.</li>
                        <li>Une hypercapnie diurne.</li>
                    </ul>
                </InfoCard>
                 <InfoCard title="Syndrome de Chevauchement (Overlap)" icon={<Lungs className="w-5 h-5"/>} variant="blue">
                    <p className="font-semibold">La VNI s'impose lorsque l'hypercapnie est sévère et non corrigée.</p>
                    <p className="mt-2">La CPAP peut suffire pour les formes légères. La VNI devient nécessaire en cas de :</p>
                     <ul className="list-disc list-inside space-y-1 mt-1">
                        <li>Hypercapnie diurne sévère persistante.</li>
                        <li>Exacerbations fréquentes malgré une CPAP et un traitement de la BPCO optimaux.</li>
                        <li>Intolérance à la CPAP due à la nécessité de pressions élevées mal supportées.</li>
                    </ul>
                </InfoCard>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Mokhlesi B, et al. Am J Respir Crit Care Med. 2019.</li>
                    <li>Masa JF, et al. Eur Respir Rev. 2019.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Physiopathologie : Pourquoi la VNI est supérieure à la CPAP dans ces cas ?" icon={<Wind className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">La différence fondamentale réside dans le mécanisme d'action.</p>
            <div className="grid md:grid-cols-2 gap-6">
                 <InfoCard title="CPAP : une attelle pneumatique passive" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                    <p>La CPAP applique <strong>un seul niveau de pression</strong> continue pour maintenir les voies aériennes supérieures ouvertes. Elle ne fait que lever l'obstacle.</p>
                    <p className="mt-2">Elle ne fournit <strong>aucune assistance active</strong> au travail respiratoire. Si le patient a une commande ventilatoire faible ou des muscles respiratoires fatigués, la CPAP ne l'aidera pas à mieux ventiler.</p>
                </InfoCard>
                <InfoCard title="VNI (BPAP) : un support ventilatoire actif" icon={<Wind className="w-5 h-5"/>} variant="blue">
                    <p>La VNI utilise <strong>deux niveaux de pression</strong> :</p>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><strong>EPAP (PEP) :</strong> Joue le rôle de la CPAP pour garder les voies aériennes ouvertes.</li>
                        <li><strong>IPAP (Pression Inspiratoire) :</strong> La différence (IPAP - EPAP = Aide Inspiratoire) <strong>augmente activement le volume courant</strong>, diminue le travail des muscles respiratoires et "lave" le CO₂.</li>
                    </ul>
                </InfoCard>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Selim BJ, et al. Chest. 2018.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Protocole de Réglages pour le Syndrome Obésité-Hypoventilation" icon={<SlidersHorizontal className="w-6 h-6"/>} variant="default">
             <p className="text-slate-700 mb-4 text-base">Le SOH requiert une approche de réglages spécifique pour contrer à la fois l'obstruction sévère et la mécanique thoracique restrictive liée à l'obésité.</p>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <SettingsCard title="Pression & Volume" items={[
                    { label: 'Objectif Vt', value: '8 ml/kg (poids idéal)' },
                    { label: 'EPAP (PEP)', value: 'Élevée (supérieur à 8-12 cmH₂O)' },
                    { label: 'IPAP / AI', value: 'Élevée pour atteindre le Vt' },
                ]}/>
                 <SettingsCard title="Timing Inspiratoire" items={[
                    { label: 'Temps Inspiratoire (Ti/Ttot)', value: 'Long (~50%)' },
                    { label: 'Temps de montée (Rise Time)', value: 'Lent (500-900ms)' },
                    { label: 'Fréquence de secours', value: '16-20/min' },
                ]}/>
                 <SettingsCard title="Cyclage" items={[
                    { label: 'Sensibilité (Respironics)', value: 'Basse (10-15% du pic)' },
                    { label: 'Sensibilité (ResMed)', value: 'Cycle "Low"' },
                    { label: 'Modes VAPS', value: 'Bonne alternative (AVAPS, iVAPS)' },
                ]}/>
             </div>
             <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-6 rounded-r-md">
                <h5 className="font-bold text-amber-800 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Point de vigilance
                </h5>
                <p className="text-sm text-amber-700 mt-2">
                   Une PEP élevée est nécessaire pour lutter contre l'obstruction, et une Aide Inspiratoire importante est requise pour surmonter la restriction. Les pressions inspiratoires (IPAP) sont donc souvent très élevées.
                </p>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Selim BJ, et al. Chest. 2018.</li>
                    <li>Masa JF, et al. Eur Respir Rev. 2019.</li>
                </ul>
            </div>
        </Accordion>

    </div>
  );
};
