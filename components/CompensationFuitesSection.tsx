

import React from 'react';
import { Wrench, AlertTriangle, CheckCircle, Activity, PlayCircle } from './icons/index.ts';
import { Accordion } from './Accordion.tsx';
import { AsynchronyAnimation } from './animations/AsynchronyAnimation.tsx';

export const CompensationFuitesSection: React.FC = () => (
    <div className="space-y-8 animate-fade-in">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center">
                <Wrench className="w-8 h-8 mr-4 text-indigo-600" />
                Compensation des Fuites & Synchronisation
            </h2>
            <p className="mt-2 text-slate-600 text-base">
                Comprendre les mécanismes techniques qui permettent aux ventilateurs modernes de gérer les fuites pour une VNI efficace.
            </p>
        </div>

        <Accordion title="Animation Interactive : Visualiser les Asynchronies" icon={<PlayCircle className="w-6 h-6"/>} variant="default">
            <AsynchronyAnimation />
        </Accordion>

        <Accordion title="Le Défi Technique des Fuites" icon={<AlertTriangle className="w-6 h-6" />} variant="primary">
            <p className="text-slate-700">
                Les fuites sont le principal défi technique en VNI. Contrairement à la ventilation invasive où le circuit est clos, la VNI tolère des fuites variables au niveau de l'interface. Un ventilateur performant doit être capable de les compenser pour :
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 pl-2 text-slate-700">
                <li>Maintenir la pression expiratoire positive (PEP) pour éviter le dérecrutement alvéolaire.</li>
                <li>Garantir une aide inspiratoire (AI) efficace.</li>
                <li>Assurer une synchronisation patient-ventilateur optimale (déclenchement et cyclage).</li>
                <li>Fournir une surveillance fiable des volumes.</li>
            </ul>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Criner GJ, et al. Eur Respir J. 2024.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Compensation du Déclenchement (Trigger)" icon={<Activity className="w-6 h-6" />} variant="primary">
            <p className="mb-4 text-slate-700">
                Le défi est de différencier une chute de pression due à une fuite de celle due à un effort inspiratoire du patient. Si le trigger est mal réglé, deux problèmes peuvent survenir :
            </p>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">Auto-déclenchement</h4>
                    <p className="text-sm text-slate-700">Le ventilateur interprète la fuite comme un effort patient et déclenche un cycle inutile, entraînant une asynchronie majeure.</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-2">Trigger Inefficace</h4>
                    <p className="text-sm text-slate-700">Pour éviter l'auto-déclenchement, le clinicien rend le trigger moins sensible, ce qui augmente l'effort que le patient doit fournir pour déclencher le ventilateur.</p>
                </div>
            </div>
            <div className="bg-green-50 p-4 mt-6 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2"/>
                    Solution : Trigger Adaptatif
                </h4>
                <p className="text-slate-700 text-sm">
                    Les ventilateurs modernes utilisent des algorithmes intelligents qui mesurent en continu le débit de fuite. Ils ajustent dynamiquement le seuil de déclenchement pour qu'il reste toujours légèrement au-dessus du débit de fuite.
                    <br/><br/>
                    <strong>Exemple :</strong> Un trigger est réglé à 2 L/min. Le ventilateur mesure une fuite de 15 L/min. L'algorithme ajuste alors le seuil de déclenchement réel à 17 L/min (15+2). Pour le patient, l'effort à fournir reste le même que s'il n'y avait pas de fuite, ce qui préserve la synchronisation et le confort.
                </p>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Criner GJ, et al. Eur Respir J. 2024.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Compensation du Cyclage (Fin d'Inspiration)" icon={<Activity className="w-6 h-6" />} variant="primary">
            <p className="mb-4 text-slate-700">
                En mode Aide Inspiratoire (VS-AI), la fin de l'inspiration (cyclage) se produit lorsque le débit inspiratoire du patient chute à un certain pourcentage de son pic (ex: 25%). Les fuites peuvent empêcher cette chute de débit.
            </p>
             <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">Problème : Cyclage Tardif</h4>
                <p className="text-sm text-slate-700">Si le débit de fuite est supérieur au seuil de cyclage (ex: fuite supérieur à 25% du pic de débit), le ventilateur ne s'arrête jamais d'insuffler. Cela crée un inconfort majeur et une hyperinflation dynamique, car le patient tente d'expirer contre le flux inspiratoire.</p>
            </div>
            <div className="bg-green-50 p-4 mt-6 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                     <CheckCircle className="w-5 h-5 mr-2"/>
                    Solution : Cyclage Expiratoire Ajustable
                </h4>
                <p className="text-slate-700 text-sm">
                    Les ventilateurs modernes permettent d'ajuster la sensibilité du cyclage expiratoire (de 5% à 70% par exemple). Cela est essentiel pour compenser les fuites mais aussi pour s'adapter à la pathologie :
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2 pl-2 text-sm text-slate-700">
                    <li><strong>Patient BPCO :</strong> A besoin d'un temps expiratoire long. On réglera un cyclage plus précoce (ex: 40-50%) pour raccourcir l'inspiration.</li>
                    <li><strong>Patient restrictif :</strong> A besoin d'un temps inspiratoire plus long. On réglera un cyclage plus tardif (ex: 15-25%).</li>
                </ul>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Criner GJ, et al. Eur Respir J. 2024.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Maintien de la Pression et du Volume" icon={<CheckCircle className="w-6 h-6" />} variant="primary">
             <p className="mb-4 text-slate-700">
                Au-delà de la synchronisation, la compensation des fuites est vitale pour assurer l'efficacité même de la ventilation.
            </p>
            <ul className="list-disc list-inside space-y-3 pl-2 text-slate-700">
                <li>
                    <strong>Compensation de la PEP :</strong> Le ventilateur doit constamment ajuster son débit de base pour que la PEP définie soit maintenue malgré les fuites, évitant ainsi un dérecrutement alvéolaire à chaque cycle.
                </li>
                <li>
                    <strong>Compensation du Volume :</strong> En mode volumétrique (plus rare en VNI), le ventilateur mesure la fuite inspiratoire et délivre un volume supérieur à celui réglé pour garantir que le volume cible atteigne bien les poumons du patient.
                </li>
            </ul>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Criner GJ, et al. Eur Respir J. 2024.</li>
                </ul>
            </div>
        </Accordion>
    </div>
);