import React from 'react';
import { Wind, BookOpen, Activity, Wrench, CheckCircle, XCircle, PlayCircle } from './icons';
import { Accordion } from './Accordion';
import { VentilationModesAnimation } from './animations/VentilationModesAnimation';

const VentilatorCard: React.FC<{
    title: string;
    description: string;
    pros: string[];
    cons: string[];
}> = ({ title, description, pros, cons }) => (
    <div className="bg-white rounded-lg shadow-md border border-slate-200 flex flex-col h-full">
        <div className="p-4 border-b bg-slate-50">
            <h4 className="font-bold text-slate-800 text-lg">{title}</h4>
            <p className="text-sm text-slate-600 mt-1">{description}</p>
        </div>
        <div className="p-4 flex-grow">
            <h5 className="font-semibold text-green-700 mb-2">Avantages</h5>
            <ul className="space-y-1.5 text-sm text-slate-700">
                {pros.map((pro, index) => (
                    <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                        <span>{pro}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="p-4 border-t">
            <h5 className="font-semibold text-red-700 mb-2">Inconvénients</h5>
            <ul className="space-y-1.5 text-sm text-slate-700">
                {cons.map((con, index) => (
                    <li key={index} className="flex items-start">
                        <XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-500 flex-shrink-0" />
                        <span>{con}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);


export const VentilateursModesSection: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center">
                <Wind className="w-8 h-8 mr-4 text-indigo-600" />
                Ventilateurs & Modes Ventilatoires
            </h2>
            <p className="mt-2 text-slate-600 text-base">
                Comprendre le matériel et les réglages pour une VNI efficace et confortable.
            </p>
        </div>

        <Accordion title="Les Grands Types de Ventilateurs" icon={<BookOpen className="w-6 h-6" />} variant="primary">
            <div className="space-y-4 text-slate-700">
                <p>Le choix du ventilateur est crucial pour le succès de la VNI. Bien que tout ventilateur puisse théoriquement être utilisé, le succès dépend de sa capacité à compenser les fuites, à se synchroniser avec le patient et à permettre un monitorage adéquat. On distingue plusieurs grandes catégories :</p>
                
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    <VentilatorCard 
                        title="Ventilateurs Volumétriques de Domicile"
                        description="Délivrent un volume courant prédéfini. Historiquement les premiers, leur usage est désormais limité."
                        pros={["Simples d'utilisation", "Généralement équipés d'alarmes et de batterie."]}
                        cons={["Très mauvaise compensation des fuites.", "Inadaptés aux variations de la mécanique respiratoire du patient."]}
                    />
                    <VentilatorCard 
                        title="Ventilateurs Bi-niveau (1ère Gén.)"
                        description="Appareils simples et peu coûteux, conçus pour gérer les fuites, mais avec des limitations techniques importantes."
                        pros={["Excellente compensation des fuites.", "Très portables et peu coûteux."]}
                        cons={["Risque élevé de réinhalation de CO₂.", "Absence de batterie, d'alarmes et de monitorage."]}
                    />
                    <VentilatorCard 
                        title="Ventilateurs Bi-niveau (Récents)"
                        description="Appareils de domicile/transport très polyvalents, utilisant des modes barométriques (pression) ou parfois volumétriques."
                        pros={["Très bonne gestion des fuites.", "Synchronisation améliorée (triggers, cyclages).", "Alarmes et batterie intégrées."]}
                        cons={["Pas de mélangeur d'O₂ intégré (FiO₂ non contrôlée)."]}
                    />
                     <VentilatorCard 
                        title="Ventilateurs de Réanimation Conventionnels"
                        description="Conçus pour la ventilation invasive sur sonde. Leurs algorithmes sont inadaptés à la VNI."
                        pros={["Monitorage complet des courbes.", "Mélangeur d'O₂ précis pour une FiO₂ stable."]}
                        cons={["Très mauvaise gestion des fuites.", "Provoquent de fréquentes asynchronies en VNI."]}
                    />
                    <VentilatorCard 
                        title="Ventilateurs de Réanimation Modernes"
                        description="Appareils de réanimation équipés de modes VNI dédiés et d'algorithmes de compensation de fuites performants."
                        pros={["Excellente compensation des fuites.", "Monitorage avancé et réglages fins de synchronisation.", "Mélangeur d'O₂ précis."]}
                        cons={["Coûteux et peu transportables."]}
                    />
                     <VentilatorCard 
                        title="Ventilateurs Intermédiaires"
                        description="Hybrides pour un usage hospitalier (hors SI) ou le transport, combinant des fonctionnalités des deux mondes."
                        pros={["Bon compromis de fonctionnalités.", "Circuit double branche souvent possible.", "Bonne gestion des alarmes et batterie."]}
                        cons={["Moins performants que les ventilateurs de réanimation dédiés."]}
                    />
                </div>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Criner GJ, et al. Eur Respir J. 2024.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Les Modes Ventilatoires Expliqués" icon={<Activity className="w-6 h-6" />} variant="primary">
            <div className="space-y-4 text-slate-700">
                <div>
                    <h4 className="text-lg font-semibold text-slate-800">CPAP (Pression Positive Continue)</h4>
                    <p>C'est le mode le plus simple. Le ventilateur délivre une pression positive constante tout au long du cycle respiratoire. Il n'assiste pas l'inspiration mais maintient les voies aériennes ouvertes.</p>
                    <ul className="list-disc list-inside pl-4 mt-2 text-sm">
                        <li><strong>Principe :</strong> Une seule pression (PEEP ou EPAP).</li>
                        <li><strong>Action :</strong> Recrutement alvéolaire, augmentation de la CRF, diminution de la pré- et post-charge cardiaque.</li>
                        <li><strong>Usage principal :</strong> Œdème aigu du poumon, syndrome d'apnées du sommeil.</li>
                    </ul>
                </div>
                <div className="border-t pt-4">
                    <h4 className="text-lg font-semibold text-slate-800">VS-AI-PEP (ou BiPAP)</h4>
                    <p>C'est le mode le plus utilisé en VNI. Il délivre deux niveaux de pression : une pression expiratoire (PEP) et une pression inspiratoire plus élevée (AI + PEP).</p>
                    <ul className="list-disc list-inside pl-4 mt-2 text-sm">
                        <li><strong>PEP (Pression Expiratoire Positive) :</strong> Maintien les alvéoles ouvertes, contrebalance l'auto-PEEP chez les patients BPCO.</li>
                        <li><strong>AI (Aide Inspiratoire) :</strong> Pression ajoutée lors de l'inspiration pour augmenter le volume courant, diminuer le travail respiratoire et l'hypercapnie.</li>
                        <li><strong>IPAP (Pression Inspiratoire) = PEP + AI.</strong></li>
                        <li><strong>Usage principal :</strong> Insuffisance respiratoire hypercapnique (BPCO), détresse respiratoire.</li>
                    </ul>
                </div>
                 <div className="border-t pt-4">
                    <h4 className="text-lg font-semibold text-slate-800">Modes Volumétriques</h4>
                    <p>Le ventilateur délivre un volume courant (Vt) prédéfini. Moins fréquents en VNI aiguë en raison de la difficulté à gérer les fuites, ils sont surtout utilisés pour les patients neuromusculaires au long cours.</p>
                </div>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Zimnoch M, et al. J Clin Med. 2024.</li>
                    <li>Selim BJ, et al. Chest. 2018.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Animation Interactive : Les Modes Ventilatoires Démystifiés" icon={<PlayCircle className="w-6 h-6" />} variant="default">
            <VentilationModesAnimation />
        </Accordion>

        <Accordion title="Le Défi de la Synchronisation Patient-Ventilateur" icon={<Wrench className="w-6 h-6" />} variant="primary">
            <p className="mb-4 text-slate-700">L'asynchronie est une cause majeure d'inconfort et d'échec de la VNI. Elle survient lorsque le cycle du ventilateur ne correspond pas à celui du patient.</p>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg border">
                    <h5 className="font-semibold text-slate-800">Déclenchement (Trigger)</h5>
                    <ul className="list-disc list-inside mt-2 space-y-2 text-sm">
                        <li><strong>Triggers inefficaces (efforts manqués) :</strong> Le patient fait un effort mais le ventilateur ne se déclenche pas. Causes : auto-PEEP, trigger trop peu sensible, fuites majeures.</li>
                        <li><strong>Auto-déclenchement :</strong> Le ventilateur se déclenche sans effort du patient. Causes : fuites, trigger trop sensible, oscillations cardiaques.</li>
                    </ul>
                </div>
                 <div className="bg-slate-50 p-4 rounded-lg border">
                    <h5 className="font-semibold text-slate-800">Cyclage (Fin d'inspiration)</h5>
                     <ul className="list-disc list-inside mt-2 space-y-2 text-sm">
                        <li><strong>Cyclage tardif :</strong> L'inspiration machine se prolonge après la fin de l'inspiration du patient. Cause principale : fuites importantes. Conséquence : inconfort, hyperinflation.</li>
                        <li><strong>Cyclage prématuré :</strong> L'inspiration machine s'arrête avant la fin de l'inspiration du patient. Cause : patient très demandeur, réglage de cyclage trop sensible.</li>
                    </ul>
                </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-4 mt-6 rounded-r-md">
                <h5 className="font-bold">La clé : la gestion des fuites</h5>
                <p className="text-sm">Un ventilateur avec d'excellents algorithmes de compensation des fuites et des réglages de trigger et de cyclage ajustables est essentiel pour une bonne synchronisation.</p>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Criner GJ, et al. Eur Respir J. 2024.</li>
                </ul>
            </div>
        </Accordion>
    </div>
  );
};