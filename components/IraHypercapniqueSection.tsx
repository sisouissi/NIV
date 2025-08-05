
import React from 'react';
import { Wind, ListChecks, Target, Activity, AlertTriangle, CheckCircle, XCircle, Siren, User, Heart } from './icons';
import { Accordion } from './Accordion';

const KeyPointsCard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm">
        <h3 className="font-bold text-lg text-amber-800 flex items-center mb-3">
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


export const IraHypercapniqueSection: React.FC = () => {
  return (
    <div className="space-y-6 pt-8 text-base">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
             <h3 className="text-2xl font-bold text-slate-900 flex items-center">
                <Wind className="w-7 h-7 mr-3 text-red-600" />
                Focus sur l'Insuffisance Respiratoire Aiguë Hypercapnique
            </h3>
            <p className="mt-2 text-slate-600 text-base">
                Synthèse pratique des recommandations (BTS/ICS, UpToDate) pour la prise en charge de l'IRA hypercapnique. L'objectif est de fournir un guide clair, de l'évaluation initiale à l'escalade thérapeutique, pour optimiser les résultats et éviter les retards préjudiciables.
            </p>
        </div>
        
        <KeyPointsCard>
            <li>La VNI est le <strong>traitement de première intention</strong> pour la plupart des IRA hypercapniques, surtout l'exacerbation de BPCO.</li>
            <li>L'objectif principal est de corriger l'<strong>acidose respiratoire</strong> (pH inférieur à 7.35) et de diminuer le travail respiratoire.</li>
            <li>La gestion de l'oxygène est cruciale : viser une SpO₂ de <strong>88-92%</strong> pour éviter d'aggraver l'hypercapnie.</li>
            <li>Le succès ou l'échec de la VNI se juge dans les <strong>1 à 2 premières heures</strong> sur des critères cliniques et gazométriques.</li>
            <li><strong>Ne pas retarder l'intubation</strong> en cas d'échec avéré de la VNI ; c'est un facteur de surmortalité.</li>
        </KeyPointsCard>

        <Accordion title="Suspicion Diagnostique" icon={<User className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">
                Identifier rapidement les patients à risque d'IRA hypercapnique est la première étape.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
                <InfoCard title="Facteurs de Risque" icon={<ListChecks className="w-5 h-5"/>} variant="amber">
                    <ul className="list-disc list-inside">
                        <li>BPCO (cause la plus fréquente)</li>
                        <li>Syndrome obésité-hypoventilation (SOH)</li>
                        <li>Maladies neuromusculaires (SLA, myopathies)</li>
                        <li>Déformations thoraciques (cyphoscoliose)</li>
                        <li>Prise de sédatifs (opiacés, benzodiazépines)</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Signes Cliniques" icon={<Activity className="w-5 h-5"/>} variant="blue">
                     <ul className="list-disc list-inside">
                        <li>Dyspnée, tachypnée</li>
                        <li>Altération de la conscience (somnolence, confusion, coma)</li>
                        <li>Sueurs, céphalées matinales</li>
                        <li>Astérixis (flapping tremor)</li>
                        <li>Respiration paradoxale abdominale</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Biologie" icon={<Heart className="w-5 h-5"/>} variant="red">
                     <ul className="list-disc list-inside">
                        <li><strong>GDS :</strong> PaCO₂ supérieur à 45 mmHg (6.5 kPa)</li>
                        <li><strong>Bicarbonates :</strong> Élevés (supérieur à 28 mmol/L) suggèrent une hypercapnie chronique sous-jacente.</li>
                    </ul>
                </InfoCard>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>BTS/ICS Guidelines for the ventilatory management of acute hypercapnic respiratory failure in adults. 2016.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Gestion d'Urgence Initiale (ABC)" icon={<Siren className="w-6 h-6"/>} variant="primary">
            <ol className="list-decimal list-inside space-y-3 text-slate-700 text-base">
                <li><strong>Airway (Voies aériennes) :</strong> Assurer la liberté des voies aériennes. Une obstruction peut être la cause de l'hypercapnie.</li>
                <li><strong>Breathing (Respiration) :</strong> Appliquer de l'oxygène contrôlé pour viser <strong>SpO₂ 88-92%</strong>. Préparer la VNI.</li>
                <li><strong>Circulation :</strong> Sécuriser un accès intraveineux, monitorer la pression artérielle et le rythme cardiaque.</li>
            </ol>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Zimnoch M, et al. J Clin Med. 2024.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Le Réglage Crucial de l'Oxygène : Cible 88-92%" icon={<Target className="w-6 h-6"/>} variant="default">
             <InfoCard title="Pourquoi cette cible est-elle VITALE ?" icon={<AlertTriangle className="w-5 h-5"/>} variant="amber">
                <p>Chez les patients "rétentionnistes" chroniques, une hyperoxie (SpO₂ supérieur à 92-93%) peut :</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><strong>Supprimer le drive hypoxique :</strong> Le principal stimulant respiratoire chez ces patients.</li>
                    <li><strong>Aggraver les troubles V/Q :</strong> Lève la vasoconstriction pulmonaire hypoxique dans les zones mal ventilées, augmentant l'effet shunt.</li>
                    <li><strong>Effet Haldane :</strong> L'hémoglobine mieux oxygénée libère du CO₂, augmentant la PaCO₂.</li>
                </ul>
                <p className="font-bold mt-2">Conséquence : Narcose au CO₂, arrêt respiratoire et décès.</p>
            </InfoCard>
             <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>BTS/ICS Guidelines for the ventilatory management of acute hypercapnic respiratory failure in adults. 2016.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Protocole d'Initiation de la VNI (Mode S/T)" icon={<Activity className="w-6 h-6"/>} variant="default">
             <p className="text-slate-700 mb-4 text-base">
                L'approche "Start Low, Go Slow" est recommandée. Le mode barométrique (pression) en S/T est le standard.
            </p>
            <div className="overflow-x-auto my-4">
                <table className="w-full text-left border-collapse text-sm">
                    <thead className="bg-slate-100 text-slate-700 text-xs uppercase">
                        <tr>
                            <th className="p-3 border">Paramètre</th>
                            <th className="p-3 border">Réglage Initial</th>
                            <th className="p-3 border">Objectifs de Titration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white"><td className="p-2 border font-semibold">EPAP (PEP)</td><td className="p-2 border"><strong>4 - 5 cmH₂O</strong></td><td className="p-2 border">Contrebalancer l'auto-PEEP intrinsèque.</td></tr>
                        <tr className="bg-slate-50"><td className="p-2 border font-semibold">IPAP</td><td className="p-2 border"><strong>10 - 15 cmH₂O</strong></td><td className="p-2 border">Augmenter progressivement jusqu'à <strong>20-30 cmH₂O</strong> pour obtenir un VTe de 6-8 ml/kg et une diminution de la FR.</td></tr>
                         <tr className="bg-white"><td className="p-2 border font-semibold">Fréq. de Sécurité</td><td className="p-2 border"><strong>12 - 16 /min</strong></td><td className="p-2 border">Juste en dessous de la FR spontanée du patient.</td></tr>
                    </tbody>
                </table>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Zimnoch M, et al. J Clin Med. 2024.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Surveillance et Critères de Succès/Échec (H1-H2)" icon={<Heart className="w-6 h-6"/>} variant="default">
            <p className="text-slate-700 mb-4 text-base">L'amélioration doit être visible dans les <strong>1 à 2 premières heures</strong>.</p>
            <div className="grid md:grid-cols-2 gap-6">
                <InfoCard title="Marqueurs de Succès" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                    <ul className="list-disc list-inside">
                        <li><strong>Amélioration du pH</strong> et de la PaCO₂.</li>
                        <li><strong>Diminution de la FR</strong> (inférieur à 25/min).</li>
                        <li>Amélioration clinique : patient moins dyspnéique, moins de tirage.</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Signes d'Échec" icon={<XCircle className="w-5 h-5"/>} variant="red">
                     <ul className="list-disc list-inside">
                        <li>Pas d'amélioration ou aggravation des GDS.</li>
                        <li>FR supérieur à 30/min persistante.</li>
                        <li>Agitation, épuisement.</li>
                        <li>Instabilité hémodynamique.</li>
                    </ul>
                </InfoCard>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Ouellette DR, et al. Chest. 2017.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Critères d'Escalade vers la Ventilation Invasive" icon={<Siren className="w-6 h-6"/>} variant="danger">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h4 className="font-bold text-lg text-red-800 flex items-center mb-3">
                    <AlertTriangle className="w-6 h-6 mr-2" />
                    Ne pas retarder l'intubation !
                </h4>
                <ul className="list-disc list-inside space-y-2 text-red-700 font-semibold text-base">
                    <li>Acidose persistante (pH inférieur à 7.25) ou qui s'aggrave.</li>
                    <li>Épuisement respiratoire, détresse persistante.</li>
                    <li>Altération de la conscience (GCS inférieur à 8).</li>
                    <li>Arrêt respiratoire imminent.</li>
                </ul>
            </div>
             <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Ouellette DR, et al. Chest. 2017.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Critères d'Admission en Soins Intensifs" icon={<CheckCircle className="w-6 h-6"/>} variant="default">
             <p className="text-slate-700 text-base">L'admission en USI/HDU est recommandée si :</p>
             <ul className="list-disc list-inside space-y-2 mt-3 text-slate-700 text-base">
                <li>Le patient présente des caractéristiques d'échec de la VNI.</li>
                <li>Nécessité de sédation ou surveillance rapprochée.</li>
                <li>Acidose sévère (pH inférieur à 7.25).</li>
                <li>Instabilité hémodynamique.</li>
            </ul>
             <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>BTS/ICS Guidelines for the ventilatory management of acute hypercapnic respiratory failure in adults. 2016.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Thérapies à Éviter" icon={<XCircle className="w-6 h-6"/>} variant="danger">
            <ul className="list-disc list-inside space-y-2 text-slate-700 text-base">
                <li><strong>Stimulants respiratoires (ex: acetazolamide) :</strong> Non recommandés en routine en aigu.</li>
                <li><strong>Bicarbonates :</strong> Inefficaces pour l'acidose respiratoire, peuvent même l'aggraver.</li>
            </ul>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>BTS/ICS Guidelines for the ventilatory management of acute hypercapnic respiratory failure in adults. 2016.</li>
                </ul>
            </div>
        </Accordion>
    </div>
  );
};
