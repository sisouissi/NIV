import React from 'react';
import { User, Wind, Wrench, CheckCircle, AlertTriangle, XCircle, Shield } from './icons/index.ts';
import { Accordion } from './Accordion.tsx';

const InterfaceCard: React.FC<{
    title: string;
    description: string;
    pros: string[];
    cons: string[];
    idealFor: string;
    stats?: string;
}> = ({ title, description, pros, cons, idealFor, stats }) => (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 flex flex-col h-full">
        <div className="p-4 border-b bg-slate-50">
            <div className="flex justify-between items-start">
                <h4 className="font-bold text-slate-800 text-lg">{title}</h4>
                {stats && <span className="text-xs font-semibold text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">{stats}</span>}
            </div>
            <p className="text-sm text-slate-600 mt-1">{description}</p>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
            <div>
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
            <div>
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
        <div className="p-4 bg-slate-100 border-t">
            <h5 className="font-semibold text-slate-800">Idéal pour...</h5>
            <p className="text-sm text-slate-700 mt-1">{idealFor}</p>
        </div>
    </div>
);

export const InterfacesSection: React.FC = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h2 className="text-3xl font-bold text-slate-900 flex items-center">
                    <User className="w-8 h-8 mr-4 text-indigo-600" />
                    Interfaces : Le Point de Contact Crucial
                </h2>
                <p className="mt-2 text-slate-600 text-base">
                    Le choix de l'interface est aussi important que celui du ventilateur. Une interface inadaptée est une cause majeure d'échec de la VNI.
                </p>
            </div>

            <Accordion title="Les 5 Types d'Interfaces" icon={<User className="w-6 h-6" />} variant="primary">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                    <InterfaceCard
                        title="Naso-buccal (Full-face)"
                        description="Couvre le nez et la bouche. Le plus utilisé en situation aiguë."
                        stats="63% en aigu"
                        pros={["Efficace même si respiration buccale", "Moins de fuites globales qu'un masque nasal mal utilisé"]}
                        cons={["Claustrophobie", "Risque d'inhalation", "Difficulté à parler/tousser", "Escarres sur l'arête nasale"]}
                        idealFor="Situation d'urgence, patients peu coopératifs ou respirant par la bouche."
                    />
                    <InterfaceCard
                        title="Nasal"
                        description="Couvre uniquement le nez. Le plus utilisé en chronique."
                        stats="73% en chronique"
                        pros={["Mieux toléré", "Permet de parler, boire, tousser", "Moins de claustrophobie et d'espace mort"]}
                        cons={["Fuites buccales fréquentes", "Irritation et obstruction nasale"]}
                        idealFor="Insuffisance respiratoire chronique, patients coopératifs."
                    />
                    <InterfaceCard
                        title="Narinaire (Nasal Pillows)"
                        description="Inserts en silicone placés directement dans les narines."
                        pros={["Similaire au masque nasal", "Encore moins de contact avec le visage"]}
                        cons={["Similaire au masque nasal", "Peut irriter les narines"]}
                        idealFor="Alternative au masque nasal pour le long cours."
                    />
                    <InterfaceCard
                        title="Facial Total (Total-face)"
                        description="Couvre la totalité du visage, y compris les yeux."
                        pros={["Aucune pression sur l'arête nasale", "Moins de fuites", "Champ de vision dégagé", "Permet la communication verbale"]}
                        cons={["Espace mort important", "Irritation oculaire possible", "Plus complexe à installer"]}
                        idealFor="Patients avec anomalies faciales, escarres nasales, ou intolérance aux autres masques."
                    />
                     <InterfaceCard
                        title="Casque (Helmet)"
                        description="Cylindre transparent couvrant toute la tête, scellé au niveau du cou."
                        pros={["Excellente tolérance", "Pas de contact facial, pas de lésions cutanées", "Permet de parler et de boire librement"]}
                        cons={["Espace mort très important (risque de réinhalation de CO₂)", "Asynchronie patient-ventilateur", "Bruit", "Nécessite des hauts débits de gaz"]}
                        idealFor="IRA hypoxémique, patients intolérants aux masques, situations à haut risque de contagion."
                    />
                </div>
                <div className="border-t border-slate-200 pt-3 mt-4">
                    <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                    <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                        <li>Criner GJ, et al. Eur Respir J. 2024.</li>
                    </ul>
                </div>
            </Accordion>

            <Accordion title="Systèmes Ventés vs. Non-Ventés : une distinction critique" icon={<Shield className="w-6 h-6" />} variant="primary">
                 <p className="mb-4 text-slate-700">Le choix entre un masque venté et non-venté dépend exclusivement du type de circuit du ventilateur. Une erreur d'association peut avoir des conséquences graves.</p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-800 mb-2">Masques Non-Ventés</h4>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                            <li><strong>Caractéristiques :</strong> Pas de trou d'expiration. Le coude est souvent bleu pour signalement.</li>
                            <li><strong>Utilisation :</strong> Exclusivement avec des circuits double-branche ou mono-branche dotés d'une valve expiratoire. C'est le ventilateur qui gère l'expiration.</li>
                            <li><strong>Typique de :</strong> Ventilateurs de réanimation.</li>
                        </ul>
                    </div>
                     <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-800 mb-2">Masques Ventés</h4>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                             <li><strong>Caractéristiques :</strong> Présence de trous (fuite intentionnelle) pour l'évacuation du CO₂. Inclut souvent une valve anti-asphyxie. Le coude est transparent/blanc.</li>
                            <li><strong>Utilisation :</strong> Exclusivement avec des circuits mono-branche simples (sans valve expiratoire). C'est le masque qui assure le "lavage" du CO₂.</li>
                            <li><strong>Typique de :</strong> Ventilateurs de domicile type BiPAP.</li>
                        </ul>
                    </div>
                 </div>
                 <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6 rounded-r-md">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <AlertTriangle className="h-5 w-5 text-red-400" aria-hidden="true" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-base font-medium text-red-800">Risque vital</h3>
                        <div className="mt-2 text-sm text-red-700">
                          <p>Utiliser un masque non-venté sur un circuit mono-branche simple entraîne une asphyxie par réinhalation massive de CO₂. La compatibilité doit toujours être vérifiée.</p>
                        </div>
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
            
            <Accordion title="Défis Majeurs et Solutions" icon={<Wrench className="w-6 h-6" />} variant="default">
                <div className="space-y-4">
                    <div>
                        <h4 className="font-semibold text-lg text-slate-800">1. Minimiser les Fuites</h4>
                        <p className="text-sm text-slate-600 mt-1">Impact : Réduction de la ventilation alvéolaire, asynchronie. Solutions : Choisir la bonne taille, ajuster les sangles sans excès, améliorer le sceau, envisager un autre type de masque.</p>
                    </div>
                    <div className="border-t pt-4">
                        <h4 className="font-semibold text-lg text-slate-800">2. Maximiser le Confort & Prévenir les Lésions Cutanées</h4>
                        <p className="text-sm text-slate-600 mt-1">Impact : Inconfort, douleur, escarres (surtout arête nasale) menant à l'arrêt de la VNI. Solutions : Pansements préventifs (hydrocolloïde), masques avec coussinets en gel, alternance des interfaces pour varier les points de pression.</p>
                    </div>
                    <div className="border-t pt-4">
                        <h4 className="font-semibold text-lg text-slate-800">3. Minimiser l'Espace Mort</h4>
                        <p className="text-sm text-slate-600 mt-1">Impact : Réinhalation de CO₂, surtout avec les masques faciaux totaux et les casques. Solutions : Assurer une PEP suffisante (supérieur ou égal à 4-5 cmH₂O) pour "laver" le CO₂ du circuit, utiliser des ventilateurs avec un débit continu si nécessaire.</p>
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