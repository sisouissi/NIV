
import React from 'react';
import { Target, AlertTriangle, Wind, CheckCircle, SlidersHorizontal, Activity, Siren, User, XCircle } from './icons';
import { Accordion } from './Accordion';

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; variant: 'blue' | 'green' | 'amber' | 'red' }> = ({ title, children, icon, variant }) => {
    const colors = {
        blue: 'border-blue-500 bg-blue-50 text-blue-800',
        green: 'border-green-500 bg-green-50 text-green-800',
        amber: 'border-amber-500 bg-amber-50 text-amber-800',
        red: 'border-red-500 bg-red-50 text-red-800'
    };
    return (
        <div className={`p-4 rounded-lg border-l-4 ${colors[variant]} h-full shadow-sm`}>
            <h4 className="font-semibold text-lg flex items-center mb-2">
                {icon}
                <span className="ml-3">{title}</span>
            </h4>
            <div className="text-slate-700 space-y-2 text-sm">{children}</div>
        </div>
    );
};

export const SohPriseEnCharge: React.FC = () => {
  return (
    <div className="space-y-6 pt-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900">Prise en Charge Pratique du SOH</h3>
            <p className="mt-2 text-slate-600 text-base">Basé sur les recommandations de "Noninvasive positive airway pressure therapy for the obesity hypoventilation syndrome" (UpToDate, 2025).</p>
        </div>

        <Accordion title="Choix du Mode de Ventilation (PAP)" icon={<Target className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">La recommandation de base est d'utiliser une thérapie par pression positive (PAP) pendant le sommeil plutôt que les seules modifications du style de vie.</p>
            <div className="grid md:grid-cols-2 gap-4">
                <InfoCard title="CPAP en Première Intention" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                    <p className="font-semibold">Pour ~90% des patients SOH qui ont un SAOS coexistant.</p>
                    <p>La CPAP est le mode de choix initial dans cette population majoritaire.</p>
                </InfoCard>
                <InfoCard title="Bi-level PAP (VNI) en Première Intention" icon={<Wind className="w-5 h-5"/>} variant="blue">
                    <p className="font-semibold">Indications spécifiques :</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>SOH avec hypoventilation nocturne (peu d'événements obstructifs).</li>
                        <li>Patients avec un SOH en décompensation aiguë.</li>
                        <li>Échec ou intolérance à la CPAP.</li>
                    </ul>
                </InfoCard>
            </div>
             <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Martin TJ, et al. UpToDate. 2025.</li>
                    <li>Mokhlesi B, et al. Am J Respir Crit Care Med. 2019.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Prise en Charge du SOH avec SAOS (~90% des cas)" icon={<User className="w-6 h-6"/>} variant="default">
            <div className="grid md:grid-cols-2 gap-6">
                <InfoCard title="Thérapie Initiale : Continuous PAP (CPAP)" icon={<Activity className="w-5 h-5"/>} variant="blue">
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Réglages initiaux :</strong> Similaires à ceux d'un SAOS sans SOH, avec titration en laboratoire. <strong>L'Auto-CPAP ne doit pas être utilisée</strong> car son efficacité est limitée sur l'hypercapnie.</li>
                        <li><strong>Efficacité :</strong> La CPAP améliore la PaCO₂ et la qualité de vie, mais la normalisation n'est pas universelle et des désaturations nocturnes peuvent persister.</li>
                        <li><strong>Objectifs thérapeutiques :</strong> Normalisation de la PaCO₂ (inférieur à 45 mmHg), élimination des désaturations, soulagement des symptômes (hypersomnolence).</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Évaluation de la Réponse et Seconde Ligne" icon={<SlidersHorizontal className="w-5 h-5"/>} variant="amber">
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Évaluation précoce (1 mois) :</strong> Vérifier l'adhérence et l'amélioration des symptômes.</li>
                        <li><strong>Gazométrie de contrôle (1-3 mois) :</strong> Indispensable pour vérifier l'amélioration de l'hypercapnie.</li>
                        <li><strong>Passage en seconde ligne (Bi-level PAP) si :</strong>
                            <ul className="list-['-_'] list-inside pl-4 mt-1 font-semibold">
                                <li>Échec de normalisation de la PaCO₂ diurne malgré une bonne adhérence.</li>
                                <li>Désaturations nocturnes résiduelles importantes (supérieur à plusieurs minutes à inférieur à 88%).</li>
                                <li>Intolérance à la CPAP.</li>
                            </ul>
                        </li>
                    </ul>
                </InfoCard>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Martin TJ, et al. UpToDate. 2025.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Thérapie par VNI (Bi-level PAP)" icon={<Wind className="w-6 h-6"/>} variant="default">
             <InfoCard title="Titration et Réglages" icon={<SlidersHorizontal className="w-5 h-5"/>} variant="blue">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>En cas d'échec de CPAP :</strong> Commencer avec un EPAP/IPAP égal au niveau de CPAP efficace, puis augmenter progressivement l'IPAP par paliers de 1-2 cmH₂O.</li>
                    <li><strong>De novo (sans CPAP préalable) :</strong> Débuter avec IPAP 8 cmH₂O et EPAP 4 cmH₂O, puis augmenter progressivement l'EPAP pour lever l'obstruction, et l'IPAP pour corriger l'hypoventilation.</li>
                    <li><strong>Fréquence de sécurité (mode S/T) :</strong> Une fréquence de sécurité est généralement réglée juste en dessous de la fréquence respiratoire du patient endormi pour gérer les apnées centrales.</li>
                </ul>
            </InfoCard>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Martin TJ, et al. UpToDate. 2025.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Prise en Charge de la Décompensation Aiguë" icon={<Siren className="w-6 h-6"/>} variant="danger">
            <InfoCard title="Protocole d'Urgence" icon={<Siren className="w-5 h-5"/>} variant="red">
                <p className="font-bold">La VNI (Bi-level PAP) doit être initiée en urgence dans un environnement monitoré.</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li><strong>La CPAP ne doit PAS être utilisée</strong> dans ce contexte.</li>
                    <li><strong>Réglages en aigu (patient naïf) :</strong> Débuter avec IPAP/EPAP à 4 cmH₂O. Augmenter l'IPAP toutes les quelques minutes de 2 cmH₂O jusqu'à amélioration du confort, de la FR (inférieur à 30/min), de la SpO₂ (supérieur ou égal à 90%) et du pH (supérieur à 7.3).</li>
                    <li><strong>Sortie d'hôpital :</strong> Tous les patients hospitalisés pour une décompensation de SOH doivent être <strong>renvoyés à domicile sous PAP (généralement Bi-level)</strong>. Cette stratégie réduit de manière drastique la mortalité à 3 mois.</li>
                </ul>
            </InfoCard>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Martin TJ, et al. UpToDate. 2025.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Utilisation de l'Oxygène Supplémentaire" icon={<AlertTriangle className="w-6 h-6"/>} variant="danger">
            <InfoCard title="Règles de Prescription" icon={<XCircle className="w-5 h-5"/>} variant="amber">
                <ul className="list-disc list-inside space-y-2">
                    <li>L'oxygénothérapie doit être administrée <strong>uniquement si la thérapie par PAP seule est insuffisante</strong> pour corriger l'hypoxémie.</li>
                    <li className="font-bold">L'oxygène seul (sans PAP) est un traitement INADÉQUAT pour le SOH et peut aggraver dangereusement l'hypercapnie.</li>
                    <li>Titrer le débit d'oxygène au niveau le plus bas permettant de maintenir une SpO₂ supérieur à 90%.</li>
                    <li>La nécessité d'oxygène diminue souvent après 1 à 3 mois de traitement par PAP efficace. Une réévaluation est donc nécessaire.</li>
                </ul>
            </InfoCard>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Martin TJ, et al. UpToDate. 2025.</li>
                </ul>
            </div>
        </Accordion>
    </div>
  );
};
