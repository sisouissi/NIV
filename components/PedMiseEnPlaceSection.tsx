
import React from 'react';
import { Target, Home, CheckCircle, SlidersHorizontal, Users, Activity, AlertTriangle, Wind } from './icons';
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

export const PedMiseEnPlaceSection: React.FC = () => {
  return (
    <div className="space-y-6 pt-8">
        <p className="text-slate-700 text-base">
            L'initiation de la VNI en pédiatrie est une étape délicate qui repose sur des critères objectifs, une sélection rigoureuse du patient, un choix judicieux du lieu, et des réglages initiaux prudents.
        </p>
        
        <Accordion title="Sélection du Patient : Les 4 Conditions du Succès" icon={<Users className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">Une sélection appropriée du patient est essentielle au succès. Les conditions suivantes doivent être évaluées avant toute initiation :</p>
            <div className="grid md:grid-cols-2 gap-4">
                <InfoCard title="Absence de Contre-indications" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                    <p>Vérifier qu'aucune contre-indication absolue n'est présente.</p>
                </InfoCard>
                <InfoCard title="Tolérance Probable" icon={<Users className="w-5 h-5"/>} variant="blue">
                    <p>L'enfant est-il susceptible de tolérer l'interface et le mode de support prévus ?</p>
                </InfoCard>
                <InfoCard title="Adéquation du Support" icon={<Target className="w-5 h-5"/>} variant="blue">
                    <p>La VNI sera-t-elle suffisante pour stabiliser ou inverser l'état respiratoire actuel ?</p>
                </InfoCard>
                <InfoCard title="Risque en cas d'Échec" icon={<AlertTriangle className="w-5 h-5"/>} variant="amber">
                    <p>Évaluer le risque de complications si la VNI échoue et qu'une intubation est nécessaire (ex: risque d'inhalation élevé).</p>
                </InfoCard>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Fauroux B, et al. Eur Respir J. 2022.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Critères d'Initiation (Long Cours)" icon={<Target className="w-6 h-6"/>} variant="primary">
             <p className="text-slate-700 mb-4 text-base">
                La décision d'initier un support chronique est généralement basée sur des critères objectifs, après avoir exploré les autres alternatives thérapeutiques (chirurgie, etc.).
            </p>
            <InfoCard title="Critères Objectifs (ERS)" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Hypercapnie nocturne :</strong> C'est le critère principal pour la VNI. Définie par une PtcCO₂ supérieur à 50 mmHg pendant supérieur ou égal à 2% du temps de sommeil ou pendant plus de 5 minutes consécutives.</li>
                    <li><strong>SAOS sévère persistant :</strong> Indication principale pour la CPAP. Défini par un IAH obstructif supérieur à 5 ou supérieur à 10/h avec des anomalies des échanges gazeux nocturnes.</li>
                    <li><strong>Autres critères associés :</strong> Symptômes cliniques, anomalies des gaz du sang diurnes, altération de la fonction pulmonaire (CVF basse), hypertension pulmonaire.</li>
                </ul>
            </InfoCard>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Fauroux B, et al. Eur Respir J. 2022.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Lieu de l'Initiation" icon={<Home className="w-6 h-6"/>} variant="primary">
            <InfoCard title="Options de Mise en Place" icon={<Home className="w-5 h-5"/>} variant="blue">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>En aigu :</strong> Unité de soins intensifs (USI), unité de surveillance continue, ou service d'urgence.</li>
                    <li><strong>En chronique :</strong> Le plus souvent en hospitalisation pour une surveillance et une éducation complètes. L'initiation en ambulatoire ou à domicile est une tendance croissante pour les cas stables.</li>
                </ul>
            </InfoCard>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Fauroux B, et al. Eur Respir J. 2022.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Réglages Initiaux en Aigu" icon={<SlidersHorizontal className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">
                Les réglages de départ sont prudents et seront progressivement augmentés en fonction de la réponse clinique et physiologique. L'approche est "start low, go slow".
            </p>
             <div className="grid md:grid-cols-2 gap-4">
                <InfoCard title="CPAP" icon={<SlidersHorizontal className="w-5 h-5"/>} variant="amber">
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>Pression de départ :</strong> ~5 cmH₂O.</li>
                        <li><strong>Titration :</strong> Augmenter rapidement jusqu'à 8-10 cmH₂O, puis ajuster selon la SpO₂ (cible 92-95%). Pression max ~20 cmH₂O.</li>
                    </ul>
                </InfoCard>
                <InfoCard title="VNI (Bi-level)" icon={<SlidersHorizontal className="w-5 h-5"/>} variant="amber">
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>EPAP de départ :</strong> ~5 cmH₂O.</li>
                        <li><strong>IPAP de départ :</strong> 8-10 cmH₂O.</li>
                        <li><strong>Titration :</strong> Augmenter selon la tolérance et la réponse clinique. IPAP finale souvent entre 15 et 22 cmH₂O.</li>
                        <li><strong>Fréquence de sécurité :</strong> Pour les apnées/hypopnées, de 10/min (enfants plus âgés) à 20/min (nourrissons).</li>
                    </ul>
                </InfoCard>
            </div>
             <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Nagler J, et al. UpToDate. 2024.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Monitorage & Sédation en Aigu" icon={<Activity className="w-6 h-6"/>} variant="primary">
             <InfoCard title="Surveillance et Confort" icon={<Activity className="w-5 h-5"/>} variant="blue">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Monitorage :</strong> Le niveau de surveillance doit être identique à celui d'une ventilation invasive (cardio-respiratoire continu, SpO₂, PNI, et GDS/tcCO₂ fréquents).</li>
                    <li><strong>Sédation :</strong> L'anxiété ou l'agitation peuvent faire échouer la VNI. La sédation peut faciliter l'initiation.
                        <ul className="list-['-_'] list-inside pl-4 mt-1 font-semibold">
                            <li><strong>Dexmedetomidine :</strong> Bon choix car préserve le drive respiratoire.</li>
                            <li><strong>Benzodiazépines (ex: midazolam) :</strong> Alternative possible en petites doses titrées.</li>
                        </ul>
                    </li>
                </ul>
            </InfoCard>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Nagler J, et al. UpToDate. 2024.</li>
                </ul>
            </div>
        </Accordion>
    </div>
  );
};
