import React from 'react';
import { Wrench, Wind, Activity, Shield, ListChecks } from './icons';
import { Accordion } from './Accordion';

export const TechnologieSection: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center">
                <Wrench className="w-8 h-8 mr-4 text-indigo-600" />
                Technologie & Matériel
            </h2>
            <p className="mt-2 text-slate-600 text-base">
                Les aspects techniques des ventilateurs qui influencent directement la performance et la sécurité de la VNI.
            </p>
        </div>

        <Accordion title="Source de Gaz et Apport d'Oxygène" icon={<Wind className="w-6 h-6" />} variant="primary">
            <div className="space-y-4 text-slate-700">
                <p>La manière dont l'air et l'oxygène sont fournis au patient diffère grandement entre les types de ventilateurs.</p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
                        <h4 className="font-semibold text-blue-800 mb-2">Ventilateurs de Réanimation/Intermédiaires</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Utilisent des sources d'air et d'oxygène à haute pression.</li>
                            <li>Intègrent un mélangeur (blender) qui permet un contrôle précis et stable de la FiO₂.</li>
                            <li><strong>Avantage :</strong> Idéal pour les patients hypoxémiques nécessitant une FiO₂ exacte.</li>
                        </ul>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-md border border-amber-200">
                        <h4 className="font-semibold text-amber-800 mb-2">Ventilateurs de Domicile (Bi-niveaux)</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Une turbine interne pressurise l'air ambiant.</li>
                            <li>L'oxygène est ajouté via une source à bas débit, connectée au circuit ou au masque.</li>
                            <li><strong>Inconvénient :</strong> La FiO₂ réelle délivrée est imprévisible et variable, dépendant des réglages, du débit d'O₂, des fuites et de la ventilation du patient.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Zimnoch M, et al. J Clin Med. 2024.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Circuits et Gestion de la Réinhalation de CO₂" icon={<ListChecks className="w-6 h-6" />} variant="primary">
            <div className="space-y-4 text-slate-700">
                <p>La conception du circuit détermine comment l'air expiré par le patient est évacué, un point critique pour éviter la réinhalation de CO₂.</p>
                <div>
                    <h4 className="text-lg font-semibold text-slate-800">Circuit mono-branche à fuite</h4>
                    <p>Le plus courant en VNI. L'expiration se fait par une fuite intentionnelle (calibrée) située sur le masque ou le circuit (ex: "whisper swivel").</p>
                    <ul className="list-disc list-inside pl-4 mt-2 text-sm">
                        <li><strong>Risque :</strong> Réinhalation de CO₂ (rebreathing), particulièrement si le débit expiratoire du patient est élevé et que la PEP est basse.</li>
                        <li><strong>Prévention :</strong> Maintenir une PEP/EPAP d'au moins 4-5 cmH₂O pour "laver" le circuit du CO₂ expiré.</li>
                    </ul>
                </div>
                <div className="border-t pt-4">
                    <h4 className="text-lg font-semibold text-slate-800">Circuit mono-branche avec valve expiratoire</h4>
                    <p>Utilisé par certains ventilateurs de domicile/transport. Une valve active s'ouvre pour l'expiration.</p>
                     <ul className="list-disc list-inside pl-4 mt-2 text-sm">
                        <li><strong>Avantage :</strong> Moins de risque de réinhalation de CO₂.</li>
                        <li><strong>Inconvénient :</strong> Peut ajouter une résistance expiratoire.</li>
                    </ul>
                </div>
                 <div className="border-t pt-4">
                    <h4 className="text-lg font-semibold text-slate-800">Circuit double-branche</h4>
                    <p>Sépare complètement les gaz inspirés et expirés. Standard sur les ventilateurs de réanimation.</p>
                    <ul className="list-disc list-inside pl-4 mt-2 text-sm">
                        <li><strong>Avantage :</strong> Aucun risque de réinhalation. Permet une mesure précise du volume courant expiré (VTe).</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Zimnoch M, et al. J Clin Med. 2024.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Synchronisation : Trigger, Cyclage et Débit" icon={<Activity className="w-6 h-6" />} variant="primary">
            <p className="mb-4 text-slate-700">L'optimisation de l'interaction patient-ventilateur est la clé du confort et du succès.</p>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg border">
                    <h5 className="font-semibold text-slate-800">Déclenchement (Trigger)</h5>
                    <p className="text-sm mt-1">Le signal qui démarre l'inspiration du ventilateur.</p>
                    <ul className="list-disc list-inside mt-2 space-y-2 text-sm">
                        <li><strong>En débit (flow trigger) :</strong> Le plus courant et le plus sensible.</li>
                        <li><strong>En pression :</strong> Moins sensible, demande plus d'effort au patient.</li>
                        <li><strong>Réglage :</strong> Doit être le plus sensible possible sans causer d'auto-déclenchement (cycles fantômes).</li>
                    </ul>
                </div>
                 <div className="bg-slate-50 p-4 rounded-lg border">
                    <h5 className="font-semibold text-slate-800">Cyclage (Fin d'inspiration)</h5>
                    <p className="text-sm mt-1">Le signal qui arrête l'inspiration.</p>
                     <ul className="list-disc list-inside mt-2 space-y-2 text-sm">
                        <li><strong>En débit (% du débit de pointe) :</strong> Le plus courant.</li>
                        <li><strong>Les fuites</strong> peuvent empêcher le débit de chuter, prolongeant l'inspiration ("hang-up") et causant une asynchronie majeure.</li>
                        <li><strong>Solution :</strong> Algorithmes avancés (ex: Auto-Trak) ou réglage d'un temps inspiratoire maximal (Ti Max) de sécurité.</li>
                    </ul>
                </div>
            </div>
             <div className="bg-slate-50 p-4 rounded-lg border mt-4">
                <h5 className="font-semibold text-slate-800">Débit Inspiratoire (Pente / Rise Time)</h5>
                <p className="text-sm mt-1">Vitesse à laquelle la pression inspiratoire est atteinte.</p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-sm">
                    <li><strong>Pente rapide :</strong> Pour les patients très dyspnéiques (ex: BPCO) qui ont "soif d'air".</li>
                    <li><strong>Pente lente :</strong> Pour améliorer le confort et réduire les fuites chez les patients moins demandeurs (ex: neuromusculaires).</li>
                </ul>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Criner GJ, et al. Eur Respir J. 2024.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Sécurité et Monitorage" icon={<Shield className="w-6 h-6" />} variant="primary">
             <div className="space-y-4 text-slate-700">
                <p>La sécurité du patient en VNI repose sur des systèmes d'alarme et un monitorage adapté.</p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                    <li><strong>Compensation des fuites :</strong> L'algorithme clé de la VNI. Les ventilateurs modernes estiment en continu les fuites pour ajuster le débit et maintenir les pressions cibles. L'efficacité de cette compensation varie grandement d'un modèle à l'autre.</li>
                    <li><strong>Fréquence de sécurité :</strong> Indispensable pour prévenir les apnées chez les patients à risque (drive instable, sédation).</li>
                    <li><strong>Batterie interne :</strong> Cruciale pour la sécurité des patients dépendants, que ce soit à l'hôpital ou à domicile.</li>
                     <li><strong>Systèmes d'alarme :</strong> Doivent être sophistiqués en milieu aigu (pression basse/haute, apnée, VTe bas) mais peuvent être simplifiés à domicile pour ne pas perturber le sommeil.</li>
                    <li><strong>Monitorage :</strong> La surveillance du <strong>volume courant expiré (VTe)</strong> est essentielle pour évaluer l'efficacité de la ventilation, mais sa mesure est souvent rendue imprécise par les fuites sur les circuits mono-branche.</li>
                </ul>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Zimnoch M, et al. J Clin Med. 2024.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Technologies de VNI Avancées et Spécifiques" icon={<ListChecks className="w-6 h-6" />} variant="primary">
            <p className="mb-4 text-slate-700">Au-delà du CPAP et du BiPAP standard, plusieurs technologies émergentes ou spécifiques offrent des options thérapeutiques pour des situations cliniques particulières, comme décrit par Criner et al. (2024).</p>
            
            <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left text-slate-500">
                    <thead className="text-xs text-slate-700 uppercase bg-slate-100">
                        <tr>
                            <th scope="col" className="px-4 py-3">Technologie</th>
                            <th scope="col" className="px-4 py-3">Auto-titration ?</th>
                            <th scope="col" className="px-4 py-3">Usage Domiciliaire ?</th>
                            <th scope="col" className="px-4 py-3">Intégration O₂ sup.</th>
                            <th scope="col" className="px-4 py-3">Usages Courants</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b"><th className="px-4 py-2 font-medium">CPAP</th><td>Non</td><td>Oui</td><td>Oui</td><td>SAOS</td></tr>
                        <tr className="bg-slate-50 border-b"><th className="px-4 py-2 font-medium">BiPAP (VS-AI)</th><td>Non</td><td>Oui</td><td>Oui</td><td>SAOS & SOH; maladie pulmonaire obstructive; IRA</td></tr>
                        <tr className="bg-white border-b"><th className="px-4 py-2 font-medium">VAPS (AVAPS, iVAPS)</th><td>Oui (PS ou SV)</td><td>Oui</td><td>Oui</td><td>IRC (fréquemment avec hypoventilation nocturne)</td></tr>
                        <tr className="bg-slate-50 border-b"><th className="px-4 py-2 font-medium">Haut Débit Nasal (NHF)</th><td>Non</td><td>Essais cliniques</td><td>Oui</td><td>IRA</td></tr>
                        <tr className="bg-white border-b"><th className="px-4 py-2 font-medium">NIOV</th><td>Oui</td><td>Oui</td><td>Oui</td><td>BPCO; MNM; cyphoscoliose</td></tr>
                        <tr className="bg-slate-50"><th className="px-4 py-2 font-medium">Ventilation Pression Négative</th><td>Non</td><td>Oui</td><td>Non</td><td>MNM; cyphoscoliose</td></tr>
                    </tbody>
                </table>
            </div>
            
            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold text-lg text-slate-800">Modes à Pression de Support à Volume Garanti (VAPS)</h4>
                    <p className="text-sm text-slate-600">Combine les avantages des modes barométriques (confort) et volumétriques (volume stable). Le ventilateur ajuste le niveau d'aide inspiratoire pour atteindre un volume courant cible.</p>
                    <ul className="list-disc list-inside pl-4 mt-2 text-sm text-slate-700">
                        <li><strong>AVAPS :</strong> Le clinicien définit une plage de pression de support (ex: 6-16 cmH₂O) pour atteindre un volume tidal cible (ex: 6-8 ml/kg).</li>
                        <li><strong>iVAPS :</strong> Mode plus "intelligent" qui apprend la ventilation du patient et cible une ventilation alvéolaire en compensant l'espace mort.</li>
                        <li><strong>Utilité :</strong> Très efficace pour l'hypoventilation nocturne chez les patients avec une mécanique respiratoire variable.</li>
                    </ul>
                </div>
                <div className="border-t pt-4">
                    <h4 className="font-semibold text-lg text-slate-800">Oxygénothérapie Nasale à Haut Débit (NHF)</h4>
                    <p className="text-sm text-slate-600">Bien que techniquement distincte de la VNI, la NHF partage des bénéfices physiologiques. Elle délivre un flux élevé d'air et d'oxygène humidifié et chauffé.</p>
                     <ul className="list-disc list-inside pl-4 mt-2 text-sm text-slate-700">
                        <li><strong>Mécanismes :</strong> Réduction de l'espace mort anatomique, effet PEEP modeste, diminution du travail respiratoire.</li>
                        <li><strong>Utilité :</strong> Principalement pour l'IRA hypoxémique. Peut servir d'alternative au BiPAP dans certaines situations de BPCO hypercapnique.</li>
                    </ul>
                </div>
                <div className="border-t pt-4">
                    <h4 className="font-semibold text-lg text-slate-800">Ventilation Ouverte Non Invasive (NIOV)</h4>
                    <p className="text-sm text-slate-600">Système portable pneumatique qui délivre des volumes augmentés via une canule nasale avec des ports Venturi. Nécessite une source d'oxygène.</p>
                     <ul className="list-disc list-inside pl-4 mt-2 text-sm text-slate-700">
                        <li><strong>Concept :</strong> Améliore la ventilation pendant l'effort (support ambulatoire).</li>
                        <li><strong>Utilité :</strong> Patients BPCO sévères lors de l'exercice ou des activités quotidiennes pour améliorer l'endurance.</li>
                    </ul>
                </div>
                <div className="border-t pt-4">
                    <h4 className="font-semibold text-lg text-slate-800">Ventilation à Pression Négative (NPV)</h4>
                    <p className="text-sm text-slate-600">Méthode historique qui assiste la ventilation en créant une pression négative autour du thorax.</p>
                     <ul className="list-disc list-inside pl-4 mt-2 text-sm text-slate-700">
                        <li><strong>Principe :</strong> L'expansion thoracique est passive, induite par la dépression externe.</li>
                        <li><strong>Utilité :</strong> Option de dernier recours en cas de contre-indications absolues à la ventilation par masque.</li>
                    </ul>
                </div>
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