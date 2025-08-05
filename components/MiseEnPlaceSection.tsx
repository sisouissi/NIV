

import React from 'react';
import { Activity, Users, Wind, Heart, Target, ListChecks, AlertTriangle } from './icons/index.ts';
import { Accordion } from './Accordion.tsx';

export const MiseEnPlaceSection: React.FC = () => (
  <div className="space-y-8 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-3xl font-bold text-slate-900 flex items-center">
        <Activity className="w-8 h-8 mr-4 text-indigo-600" />
        Mise en Place
      </h2>
       <p className="mt-2 text-slate-600 text-base">Guide étape par étape pour l'initiation, le réglage et la surveillance de la VNI.</p>
    </div>

    <Accordion title="Étape 1 : Préparation du Patient et de l'Environnement" icon={<Users className="w-6 h-6"/>} variant="primary">
        <div className="space-y-4 text-slate-700">
            <div>
                <h4 className="font-semibold text-slate-800">1. Information, Éducation et Adhésion</h4>
                <p className="mt-1">Le succès de la VNI dépend fortement de la coopération du patient. Une communication claire et rassurante est l'étape la plus importante.</p>
                <ul className="list-disc list-inside pl-4 mt-2 text-base">
                    <li>Expliquer le déroulement, les bénéfices attendus (amélioration de la respiration) et les sensations (pression d'air, bruit).</li>
                    <li>L'encouragement et la motivation continus par l'équipe soignante sont des facteurs essentiels de réussite.</li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-slate-800">2. Positionnement du Patient</h4>
                <p className="mt-1">Installer le patient en <strong>position semi-assise à 45°</strong>. Cette position est cruciale car elle :</p>
                <ul className="list-disc list-inside pl-4 mt-2 text-base">
                    <li>Favorise la respiration spontanée en réduisant la pression abdominale.</li>
                    <li>Augmente la capacité résiduelle fonctionnelle (CRF).</li>
                    <li>Facilite la toux et le drainage des sécrétions, améliorant ainsi la clairance des voies aériennes.</li>
                    <li>Réduit le risque d'obstruction des voies aériennes supérieures.</li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-slate-800">3. Préparation du Matériel</h4>
                <p className="mt-1">Avant chaque utilisation, il est impératif de :</p>
                <ul className="list-disc list-inside pl-4 mt-2 text-base">
                    <li>Vérifier le ventilateur, y compris ses alarmes et systèmes de sécurité.</li>
                    <li>Préparer les réglages initiaux et mettre le ventilateur en mode veille ("Standby").</li>
                    <li>Inspecter le masque pour s'assurer de son intégrité.</li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-slate-800">4. Premiers Pas et Adaptation au Masque</h4>
                <p className="mt-1">L'accoutumance progressive est la clé pour éviter l'anxiété et l'intolérance.</p>
                <ul className="list-disc list-inside pl-4 mt-2 text-base">
                    <li>Permettre au patient de tenir et de sentir le masque.</li>
                    <li>Appliquer le masque sur le visage <strong>sans fixer les sangles</strong> et le tenir manuellement.</li>
                    <li>Laisser le patient prendre 5 à 10 respirations pour qu'il s'habitue au flux d'air et au support du ventilateur avant de fixer le harnais.</li>
                </ul>
            </div>
        </div>
        <div className="border-t border-slate-200 pt-3 mt-4">
            <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
            <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                <li>Zimnoch M, et al. J Clin Med. 2024.</li>
                <li>Groupe assistance ventilatoire & oxygène (GAVO2). SPLF. 2025.</li>
            </ul>
        </div>
    </Accordion>

    <Accordion title="Étape 2 : Titration Progressive des Réglages" icon={<Target className="w-6 h-6"/>} variant="primary">
        <p className="mb-4 text-slate-700">L'approche recommandée est de commencer avec des réglages bas et de les augmenter progressivement pour garantir l'adaptation et le confort du patient. C'est la stratégie du <strong>"start low, go slow"</strong>.</p>
        
        <div className="space-y-4">
            <div>
                <h4 className="text-lg font-semibold text-slate-800">1. Titration de la PEP / EPAP (Pression Expiratoire)</h4>
                <ul className="list-disc list-inside space-y-2 pl-4 mt-2 text-slate-700">
                    <li>Débuter à un niveau bas : <strong>2-3 cmH₂O</strong>.</li>
                    <li>Augmenter par paliers de <strong>1-2 cmH₂O</strong> toutes les 10 minutes environ.</li>
                    <li><strong>Objectifs :</strong> Atteindre un niveau confortable, assurer un bon déclenchement et, chez le BPCO, contrebalancer l'auto-PEEP (cible souvent 4-6 cmH₂O).</li>
                </ul>
            </div>

            <div>
                <h4 className="text-lg font-semibold text-slate-800">2. Titration de l'Aide Inspiratoire / PS (Pression d'Aide)</h4>
                <ul className="list-disc list-inside space-y-2 pl-4 mt-2 text-slate-700">
                    <li>Débuter avec une aide faible : <strong>4-6 cmH₂O</strong>.</li>
                    <li>Augmenter par paliers de <strong>2-3 cmH₂O</strong> jusqu'à l'obtention des effets désirés.</li>
                    <li><strong>Objectifs :</strong> Volume courant expiré (VTe) de <strong>6-8 ml/kg</strong> de poids idéal, FR inférieur à 25/min, et diminution visible du travail respiratoire.</li>
                </ul>
            </div>

            <div>
                <h4 className="text-lg font-semibold text-slate-800">3. Optimisation du Confort et de la Synchronisation</h4>
                <ul className="list-disc list-inside space-y-2 pl-4 mt-2 text-slate-700">
                    <li><strong>Pente (Rise Time) :</strong> Ajuster la vitesse d'insufflation. Plus rapide pour les patients très dyspnéiques, plus lente pour le confort.</li>
                    <li><strong>Trigger & Cyclage :</strong> Affiner la sensibilité de début et de fin de cycle inspiratoire.</li>
                    <li><strong>Communication :</strong> Demander au patient son ressenti après chaque modification. Le confort prime.</li>
                </ul>
            </div>

            <div>
                <h4 className="text-lg font-semibold text-slate-800">4. Réglage de la Ventilation de Secours</h4>
                 <p className="text-slate-700 mt-1">Configurer une ventilation d'apnée avec une fréquence et un volume courant minimums en cas d'arrêt de la respiration spontanée du patient.</p>
            </div>
        </div>
        
        <div className="mt-6">
             <h4 className="text-xl font-bold text-slate-800 mb-3 text-center">Objectifs de Réglages Cibles par Pathologie</h4>
            <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">BPCO (Hypercapnie)</h4>
                    <ul className="space-y-1 text-slate-700 text-sm">
                        <li><strong>AI Cible :</strong> 15-20 cmH₂O.</li>
                        <li><strong>PEP Cible :</strong> 4-6 cmH₂O.</li>
                        <li><strong>FiO₂ :</strong> Pour SpO₂ 88-92%.</li>
                    </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">OAP (Hypoxémie)</h4>
                    <ul className="space-y-1 text-slate-700 text-sm">
                        <li><strong>CPAP Cible :</strong> 8-12 cmH₂O.</li>
                        <li><strong>Si VNI :</strong> AI 5-10 cmH₂O.</li>
                        <li><strong>FiO₂ :</strong> Pour SpO₂ supérieur à 92%.</li>
                    </ul>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-2">IRA Hypoxémique (non-OAP)</h4>
                    <ul className="space-y-1 text-slate-700 text-sm">
                        <li><strong>AI Cible :</strong> 10-15 cmH₂O.</li>
                        <li><strong>PEP Cible :</strong> 8-12 cmH₂O.</li>
                        <li><strong>FiO₂ :</strong> Pour SpO₂ supérieur à 92%.</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6 rounded-r-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-red-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-base font-medium text-red-800">Alerte Sécurité : Pression Maximale</h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>La pression inspiratoire totale (PEP + AI) ne doit pas dépasser <strong>20-25 cmH₂O</strong> pour minimiser le risque d'insufflation gastrique.</p>
                </div>
              </div>
            </div>
        </div>
        <div className="border-t border-slate-200 pt-3 mt-4">
            <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
            <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                <li>Zimnoch M, et al. J Clin Med. 2024.</li>
                <li>Groupe assistance ventilatoire & oxygène (GAVO2). SPLF. 2025.</li>
            </ul>
        </div>
    </Accordion>

    <Accordion title="Étape 3 : Surveillance et Ajustements Continus" icon={<Heart className="w-6 h-6"/>} variant="primary">
        <p className="mb-4 text-slate-700">La surveillance est la clé du succès et de la sécurité. Son niveau dépend de l'état du patient et du contexte. Elle doit être rapprochée la première heure, puis adaptée.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Monitorage Essentiel</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                    <li>Gaz du Sang (GDS) initiaux puis à 1-2h</li>
                    <li>SpO₂ en continu</li>
                    <li>Pression des voies aériennes</li>
                    <li>Volume minute</li>
                    <li>Fréquence respiratoire</li>
                    <li>Confort et tolérance du patient</li>
                </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">Monitorage Étendu (si risque d'échec)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                    <li>Courbes de débit et de pression</li>
                    <li>Monitorage ECG</li>
                    <li>Pression artérielle non invasive (PNI)</li>
                    <li>Température</li>
                    <li>FiO₂ délivrée (si possible)</li>
                </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">Objectifs Thérapeutiques Cibles</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                    <li><strong>SpO₂ :</strong> ≥ 92% (Objectif ≥ 88% pour BPCO)</li>
                    <li><strong>pH :</strong> 7.35 - 7.45</li>
                    <li><strong>FR :</strong> 14 - 25 /min</li>
                    <li><strong>PaCO₂ :</strong> 4.6 - 6.0 kPa (35-45 mmHg)</li>
                    <li><strong>Vt :</strong> 6 - 8 ml/kg poids idéal</li>
                </ul>
            </div>
        </div>

        <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-3">Signes d'Amélioration & Dépannage</h4>
            <ul className="list-disc list-inside space-y-3 text-slate-700">
                <li>
                    <strong>Amélioration clinique :</strong> Rechercher une diminution de la FR (inférieur à 25/min), une réduction du tirage, et une amélioration de l'état de conscience.
                </li>
                <li>
                    <strong>Amélioration gazométrique :</strong> Confirmer l'amélioration de la SpO₂, du pH et de la PaCO₂ après 1-2 heures.
                </li>
                 <li>
                    <strong>Analyse des courbes :</strong> S'assurer que le débit expiratoire revient à zéro avant l'inspiration suivante pour éviter l'auto-PEEP. Si ce n'est pas le cas, réduire la FR ou le Ti.
                </li>
                <li>
                    <strong>Gestion des fuites :</strong> Monitorer les fuites et viser un volume de fuite minute inférieur à 20-25 L/min pour un adulte.
                </li>
                <li>
                    <strong>Dépannage à 1 heure :</strong>
                    <ul className="list-['-_'] list-inside pl-4 mt-1 text-sm">
                        <li>Si <strong>PaO₂ trop basse :</strong> Augmenter la FiO₂ ou la PEP.</li>
                        <li>Si <strong>PaCO₂ trop haute :</strong> Augmenter l'Aide Inspiratoire (pour augmenter le Vt) ou la Fréquence Respiratoire.</li>
                    </ul>
                </li>
                 <li>
                    <strong>Absence d'amélioration :</strong> Si aucun signe d'amélioration n'est visible après 1-2 heures, il faut reconsidérer la VNI et envisager une intubation.
                </li>
            </ul>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6 rounded-r-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-red-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-base font-medium text-red-800">Alerte Sécurité</h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>En cas de risque d'échec de la VNI, un ventilateur de réanimation doit être prêt et disponible pour permettre une transition rapide et sécuritaire vers la ventilation invasive si nécessaire.</p>
                </div>
              </div>
            </div>
        </div>
        <div className="border-t border-slate-200 pt-3 mt-4">
            <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
            <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                <li>Zimnoch M, et al. J Clin Med. 2024.</li>
                <li>Ouellette DR, et al. Chest. 2017.</li>
            </ul>
        </div>
    </Accordion>
  </div>
);