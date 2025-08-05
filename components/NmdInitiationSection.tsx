
import React from 'react';
import { SlidersHorizontal, ListChecks, User, Wind, Activity, CheckCircle, AlertTriangle, Home } from './icons';
import { Accordion } from './Accordion';

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; variant: 'blue' | 'green' | 'amber' }> = ({ title, children, icon, variant }) => {
    const colors = {
        blue: 'border-blue-500 bg-blue-50 text-blue-800',
        green: 'border-green-500 bg-green-50 text-green-800',
        amber: 'border-amber-500 bg-amber-50 text-amber-800'
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

export const NmdInitiationSection: React.FC = () => (
    <div className="space-y-6 pt-8">
        <p className="text-slate-700 text-base">
            L'initiation de la VNI est une étape critique qui conditionne l'acceptation et le succès à long terme du traitement. Une approche structurée et centrée sur le patient est essentielle.
        </p>

        <Accordion title="Sélection Initiale des Composants" icon={<ListChecks className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">
                La décision d'initier la VNI nocturne implique plusieurs choix préparatoires pour optimiser l'acceptation et le succès.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
                <InfoCard title="Lieu d'Initiation" icon={<Home className="w-5 h-5"/>} variant="blue">
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>Domicile/Ambulatoire :</strong> Le plus courant. Idéal pour les patients stables avec une insuffisance respiratoire légère à modérée.</li>
                        <li><strong>Laboratoire du sommeil :</strong> Recommandé si suspicion de SAOS associé pour titrer la PEP.</li>
                        <li><strong>Hôpital :</strong> Pour les patients plus sévères ou pour une accoutumance sur plusieurs jours.</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Interfaces" icon={<User className="w-5 h-5"/>} variant="green">
                    <p className="font-semibold">Le masque nasal est l'interface de premier choix.</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li><strong>Alternatives :</strong> Masques narinaires, oronasaux, faciaux totaux, ou buccaux si intolérance.</li>
                        <li><strong>Sécurité :</strong> Assurer la possibilité pour le patient de retirer le masque rapidement en cas d'urgence.</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Ventilateurs" icon={<Wind className="w-5 h-5"/>} variant="amber">
                    <p className="font-semibold">Les ventilateurs à pression limitée (barométriques) sont préférés.</p>
                     <ul className="list-disc list-inside mt-2 space-y-1">
                        <li><strong>Pression :</strong> Plus confortables, meilleure compensation des fuites.</li>
                        <li><strong>Volume :</strong> Alternative si intolérance ou besoin d'un volume courant garanti.</li>
                        <li><strong>Hybride (VAPS) :</strong> Pour les patients très dépendants ou avec des besoins complexes.</li>
                    </ul>
                </InfoCard>
            </div>
             <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Hill NS, et al. UpToDate. 2024.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="L'Essai Initial : Protocole Pratique" icon={<Activity className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">
                L'essai initial, d'une durée de 1 à 2 heures, se déroule de préférence en journée pour acclimater le patient.
            </p>
            <ol className="list-decimal list-inside space-y-4 text-slate-700">
                <li><strong>Position du patient :</strong> Confortablement installé en position semi-assise (supérieur ou égal à 30°).</li>
                <li><strong>Mesures de base :</strong> Monitorage de la SpO₂. Si possible, tcCO₂ ou GDS avant et après l'essai pour objectiver une amélioration.</li>
                <li><strong>Réglages initiaux (Start Low, Go Slow) :</strong> Commencer avec des pressions basses pour favoriser la tolérance. Le mode S/T (spontané/temporisé) est le plus utilisé.
                    <ul className="list-['-_'] list-inside pl-5 mt-2 text-sm">
                        <li><strong>IPAP :</strong> 8 à 10 cmH₂O</li>
                        <li><strong>EPAP :</strong> 4 à 5 cmH₂O</li>
                        <li><strong>Fréquence de sécurité :</strong> 2-4 cycles/min en dessous de la FR spontanée du patient.</li>
                        <li><strong>Sensibilité du trigger :</strong> Élevée pour faciliter le déclenchement.</li>
                        <li><strong>Temps inspiratoire (Ti) :</strong> Souvent plus long pour les MNM (33-50% du cycle).</li>
                    </ul>
                </li>
                <li><strong>Titration progressive :</strong> Augmenter l'IPAP par paliers de 1-2 cmH₂O. L'objectif est d'améliorer la dyspnée et d'atteindre un VTe de 6-10 ml/kg (poids idéal) tout en maintenant le confort.</li>
                <li><strong>Ajustements continus :</strong> Ajuster la pente, les sangles du masque et l'humidification. Rassurer le patient constamment.</li>
            </ol>
             <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-6 rounded-r-md">
                <h5 className="font-bold text-amber-800 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Focus sur l'Humidification
                </h5>
                <p className="text-sm text-amber-700 mt-2">
                    L'humidification chauffée est maintenant standard sur la plupart des appareils. Elle est essentielle pour le confort, réduit la sécheresse nasale et diminue la résistance des voies aériennes.
                </p>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Hill NS, et al. UpToDate. 2024.</li>
                </ul>
            </div>
        </Accordion>
    </div>
);
