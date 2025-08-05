
import React from 'react';
import { Wrench, Wind, AlertTriangle, Heart, UserX } from './icons';
import { Accordion } from './Accordion';

const SolutionCard: React.FC<{ title: string, solutions: string[] }> = ({ title, solutions }) => (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-2">
        <h5 className="font-semibold text-slate-700 mb-2">{title}</h5>
        <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm">
            {solutions.map((sol, index) => <li key={index}>{sol}</li>)}
        </ul>
    </div>
);

const AsynchronyDetailCard: React.FC<{ title: string, causes: string[], solutions: string[] }> = ({ title, causes, solutions }) => (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
        <h5 className="font-semibold text-slate-800 mb-2">{title}</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
                <h6 className="font-medium text-amber-700">Causes fréquentes</h6>
                <ul className="list-disc list-inside space-y-1 text-slate-600 mt-1">
                    {causes.map((cause, index) => <li key={index}>{cause}</li>)}
                </ul>
            </div>
            <div>
                <h6 className="font-medium text-green-700">Solutions possibles</h6>
                <ul className="list-disc list-inside space-y-1 text-slate-600 mt-1">
                    {solutions.map((sol, index) => <li key={index}>{sol}</li>)}
                </ul>
            </div>
        </div>
    </div>
);


export const ComplicationsSection: React.FC = () => (
    <div className="space-y-8 animate-fade-in">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center">
                <Wrench className="w-8 h-8 mr-4 text-indigo-600" />
                Complications & Dépannage
            </h2>
            <p className="mt-2 text-slate-600 text-base">
                Identifier et résoudre les problèmes les plus fréquents pour optimiser la tolérance et l'efficacité de la VNI.
            </p>
        </div>

        <Accordion title="Gestion des Fuites" icon={<Wind className="w-6 h-6" />} variant="primary">
            <p>Les fuites sont inhérentes à la VNI mais doivent être maîtrisées. Des fuites excessives compromettent l'efficacité (perte de PEEP et d'aide inspiratoire) et la synchronisation. Elles sont associées à un taux d'intubation plus élevé et à une fragmentation du sommeil.</p>
            <SolutionCard title="Identifier et Corriger les Fuites" solutions={[
                "Vérifier le positionnement et l'ajustement du masque.",
                "Réajuster les sangles sans serrer excessivement (1 à 2 doigts d'espace).",
                "Essayer une autre taille ou un autre type de masque si les fuites persistent.",
                "En cas de fuite buccale avec un masque nasal, essayer un coussinet narinaire ou une mentonnière, ou passer à un masque facial.",
                "Vérifier le circuit du ventilateur pour des déconnexions."
            ]}/>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Criner GJ, et al. Eur Respir J. 2024.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Gestion de l'Asynchronie Patient-Ventilateur" icon={<AlertTriangle className="w-6 h-6" />} variant="primary">
            <p className="mb-2 text-slate-700">
                L'asynchronie patient-ventilateur (APV) survient lorsque le cycle du ventilateur ne correspond pas à celui du patient. C'est une cause majeure d'inconfort et d'échec de la VNI, associée à une dégradation des échanges gazeux, une augmentation du travail respiratoire et un risque accru d'intubation.
            </p>
            <p className="text-sm text-slate-500 mb-4">L'APV est fréquente, rapportée chez 24% à 43% des patients sous VNI en situation aiguë.</p>

            <div className="space-y-4">
                 <h4 className="text-lg font-semibold text-slate-800 mt-4 border-b pb-2">Types d'Asynchronies et Leurs Solutions</h4>
                 <div className="space-y-4">
                    <AsynchronyDetailCard 
                        title="Efforts Inefficaces"
                        causes={["Auto-PEEP importante (BPCO)", "Fuites majeures", "Trigger inspiratoire peu sensible", "Sédation excessive"]}
                        solutions={["Augmenter la PEP externe pour contrebalancer l'auto-PEEP", "Réduire les fuites au maximum", "Augmenter la sensibilité du trigger (ex: descendre le seuil en L/min)"]}
                    />
                    <AsynchronyDetailCard 
                        title="Auto-déclenchement"
                        causes={["Fuites importantes", "Trigger inspiratoire trop sensible", "Oscillations cardiogéniques"]}
                        solutions={["Corriger les fuites", "Diminuer la sensibilité du trigger", "Utiliser des masques avec moins d'espace mort"]}
                    />
                    <AsynchronyDetailCard 
                        title="Double Déclenchement"
                        causes={["Volume courant (Vt) insuffisant pour la demande du patient", "Temps inspiratoire (Ti) machine trop court (cyclage prématuré)"]}
                        solutions={["Augmenter l'Aide Inspiratoire (AI) pour augmenter le Vt", "Allonger le temps inspiratoire (augmenter Ti max, diminuer % de cyclage)"]}
                    />
                    <AsynchronyDetailCard 
                        title="Cyclage Tardif"
                        causes={["Fuites importantes (le débit ne chute pas assez)", "Patient obstructif (temps expiratoire long)", "Cyclage expiratoire peu sensible"]}
                        solutions={["Réduire les fuites", "Augmenter la sensibilité du cyclage expiratoire (ex: passer de 25% à 40%)", "Utiliser un ventilateur avec un bon algorithme de compensation des fuites"]}
                    />
                 </div>
            </div>

            <div className="mt-6 space-y-4">
                <h4 className="text-lg font-semibold text-slate-800 border-b pb-2">Facteurs Contributifs et Prise en Charge Globale</h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                        <h5 className="font-semibold text-amber-800 mb-2">Facteurs liés au patient</h5>
                        <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                            <li>Détresse respiratoire et anxiété</li>
                            <li>Dyspnée sévère, hyperinflation, hypoxie</li>
                            <li>Maladie sous-jacente (mécanique ventilatoire altérée)</li>
                            <li>Claustrophobie, douleur, inconfort, fièvre</li>
                        </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">Stratégies Clés de Prise en Charge</h5>
                        <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                            <li><strong>Optimisation de l'interface :</strong> Un bon ajustement du masque est la première étape pour minimiser les fuites.</li>
                            <li><strong>Réglages fins du ventilateur :</strong> Ajuster trigger, cyclage et pente pour correspondre au mieux à la respiration du patient.</li>
                            <li><strong>Humidification chauffante :</strong> Améliore le confort, la compliance et réduit la résistance des voies aériennes.</li>
                            <li><strong>Détection précoce :</strong> Surveiller les courbes du ventilateur et le confort du patient. Un diagnostic précoce de l'échec évite de retarder une intubation nécessaire.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Criner GJ, et al. Eur Respir J. 2024.</li>
                    <li>Zimnoch M, et al. J Clin Med. 2024.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Gestion de l'Intolérance du Patient" icon={<UserX className="w-6 h-6" />} variant="primary">
            <p>L'anxiété, la claustrophobie et l'inconfort sont des obstacles fréquents à l'initiation.</p>
            <SolutionCard title="Stratégies d'Adaptation" solutions={[
                "Réassurance et présence continue au début du traitement.",
                "Commencer avec des pressions basses et augmenter très progressivement.",
                "Tenir le masque manuellement sur le visage avant de fixer les sangles.",
                "Proposer des pauses courtes et régulières.",
                "Envisager une sédation légère et prudente (ex: anxiolytique à faible dose) si l'anxiété est majeure et qu'il n'y a pas de contre-indication."
            ]}/>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Zimnoch M, et al. J Clin Med. 2024.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Gestion des Complications Médicales" icon={<Heart className="w-6 h-6" />} variant="primary">
            <div className="grid md:grid-cols-2 gap-4">
                <SolutionCard title="Lésions Cutanées (escarres, rougeurs)" solutions={[
                    "Prévenir en évitant un serrage excessif des sangles.",
                    "Utiliser des pansements hydrocolloïdes préventifs sur l'arête nasale.",
                    "Alterner les types d'interfaces pour varier les points de pression."
                ]}/>
                 <SolutionCard title="Distension Gastrique et Inconfort" solutions={[
                    "Limiter les pressions inspiratoires (inférieur à 20-25 cmH₂O).",
                    "Vérifier et corriger les fuites importantes qui peuvent inciter le patient à déglutir de l'air.",
                    "Rassurer le patient pour qu'il évite d'avaler de l'air."
                ]}/>
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
