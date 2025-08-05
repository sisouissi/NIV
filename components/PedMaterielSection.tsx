
import React from 'react';
import { User, Wrench, CheckCircle, AlertTriangle, Home } from './icons';
import { Accordion } from './Accordion';

const InterfaceTable: React.FC = () => (
    <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-slate-500">
            <thead className="text-xs text-slate-700 uppercase bg-slate-100">
                <tr>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Avantages</th>
                    <th className="px-4 py-3">Inconvénients</th>
                    <th className="px-4 py-3">Effets Secondaires</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b"><th className="px-4 py-2 font-medium">Masque Nasal</th><td className="px-4 py-2">Petit volume, permet de parler/manger, autorise la sucette.</td><td className="px-4 py-2">Inutilisable si fuites buccales importantes.</td><td className="px-4 py-2">Escarres (arête nasale), déformation maxillaire.</td></tr>
                <tr className="bg-slate-50 border-b"><th className="px-4 py-2 font-medium">Masque Oronasal</th><td className="px-4 py-2">Prévient les fuites buccales, moins de risque d'hypoplasie midfaciale.</td><td className="px-4 py-2">Grand volume, risque d'asphyxie, limite la parole.</td><td className="px-4 py-2">Escarres, risque d'inhalation.</td></tr>
                <tr className="bg-white border-b"><th className="px-4 py-2 font-medium">Masque Facial Total</th><td className="px-4 py-2">Prévient les fuites buccales, prévient la déformation maxillaire.</td><td className="px-4 py-2">Grand volume, claustrophobie, risque d'asphyxie.</td><td className="px-4 py-2">Escarres, risque d'inhalation.</td></tr>
                <tr className="bg-slate-50 border-b"><th className="px-4 py-2 font-medium">Canules Narinaires</th><td className="px-4 py-2">Petit, léger, pas d'escarres, permet de parler/manger.</td><td className="px-4 py-2">Non disponible pour nourrissons, inutilisable si fuites buccales.</td><td className="px-4 py-2">Irritation nasale, douleur.</td></tr>
                <tr className="bg-white"><th className="px-4 py-2 font-medium">Embout Buccal</th><td className="px-4 py-2">Utilisable à la demande en journée.</td><td className="px-4 py-2">Non utilisable pendant le sommeil, difficile pour les jeunes enfants.</td><td className="px-4 py-2">Aucun.</td></tr>
            </tbody>
        </table>
    </div>
);

const VentilatorCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; }> = ({ title, children, icon }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 h-full">
        <h5 className="font-bold text-lg text-slate-800 mb-3 flex items-center">
            {icon}
            <span className="ml-2">{title}</span>
        </h5>
        <div className="text-sm text-slate-700 space-y-2">
            {children}
        </div>
    </div>
);


export const PedMaterielSection: React.FC = () => {
  return (
    <div className="space-y-6 pt-8">
        <p className="text-slate-700 text-base">
            Le choix de l'interface et du ventilateur est fondamental en pédiatrie en raison des spécificités anatomiques et de la croissance de l'enfant.
        </p>

        <Accordion title="Interfaces : le choix crucial" icon={<User className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">
                Les problèmes d'interface sont la cause la plus fréquente d'échec ou d'intolérance. Le choix initial vise à maximiser le confort et l'efficacité tout en minimisant les risques.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md mb-4">
                <h5 className="font-bold text-blue-800">Approche Typique en Aigu</h5>
                 <ul className="list-disc list-inside space-y-1 text-sm text-blue-700 mt-2">
                   <li><strong>Nourrissons et jeunes enfants :</strong> Interface nasale (canules ou masque) en première intention si le support est adéquat.</li>
                   <li><strong>Enfants plus âgés (maladie moins sévère) :</strong> Masque facial.</li>
                   <li><strong>Hypoxie/hypercapnie sévère (tout âge) :</strong> Masque facial total pour assurer une meilleure étanchéité et délivrance de la PEEP.</li>
                </ul>
            </div>
            
            <InterfaceTable />
            
            <div className="mt-6 space-y-4">
                <h4 className="text-lg font-semibold text-slate-800">Conseils Pratiques pour la Mise en Place</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700 text-sm">
                    <li><strong>Dimensionnement :</strong> Choisir le plus petit masque qui s'adapte correctement pour limiter l'espace mort. Il doit couvrir le nez (ou nez et bouche) sans toucher les yeux.</li>
                    <li><strong>Protection cutanée :</strong> Placer un pansement hydrocolloïde sur l'arête nasale pour prévenir les escarres.</li>
                    <li><strong>Fixation :</strong> 
                        <ul className="list-['-_'] list-inside pl-4 mt-1">
                            <li>Initialement, tenir le masque manuellement pour réduire l'anxiété.</li>
                            <li>Fixer ensuite les sangles doucement, sans serrage excessif, en utilisant un bonnet de fixation chez les nourrissons.</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-6 rounded-r-md">
                <h5 className="font-bold text-amber-800 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Points de Vigilance
                </h5>
                <ul className="list-disc list-inside space-y-1 text-sm text-amber-700 mt-2">
                   <li>Les masques oronasaux augmentent le risque d'inhalation, surtout chez les enfants avec une atteinte neuromusculaire.</li>
                   <li>L'ajustement du harnais est aussi important que le masque pour éviter les déformations crâniennes.</li>
                   <li>Des masques sur mesure ou alternatifs (ex: masque en tissu) peuvent être nécessaires.</li>
                </ul>
            </div>
             <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Fauroux B, et al. Eur Respir J. 2022.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Choix du Ventilateur pour le Domicile" icon={<Home className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">
                La transition vers le domicile nécessite de choisir un appareil adapté. Le choix dépend de la maladie sous-jacente, du poids de l'enfant et de la nécessité d'un monitorage.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <VentilatorCard title="Appareils Standards" icon={<Home className="w-5 h-5 text-green-600"/>}>
                    <p>CPAP/BiPAP simples, petits, portables, avec humidificateur intégré.</p>
                    <p><strong>Pour qui ?</strong> Enfants avec SAOS, maladie pulmonaire chronique légère, ou MNM peu sévère où une interruption n'est pas dangereuse.</p>
                    <p><strong>Limites :</strong> Pas d'alarmes, pas de batterie interne, données logicielles peu fiables pour les petits poids (inférieur à 30kg).</p>
                </VentilatorCard>
                <VentilatorCard title="Appareils Intermédiaires" icon={<Home className="w-5 h-5 text-blue-600"/>}>
                    <p>Pont entre les appareils standards et les supports de vie.</p>
                    <p><strong>Pour qui ?</strong> La plupart des patients. Offrent une meilleure précision, des alarmes et des batteries internes/externes pour les déplacements.</p>
                     <p><strong>Avantages :</strong> Données logicielles plus fiables pour des poids plus faibles.</p>
                </VentilatorCard>
                <VentilatorCard title="Supports de Vie (Life Support)" icon={<Home className="w-5 h-5 text-red-600"/>}>
                    <p>Appareils similaires à ceux utilisés pour la ventilation invasive.</p>
                    <p><strong>Pour qui ?</strong> Enfants très dépendants, ou avec des besoins complexes.</p>
                    <p><strong>Limites :</strong> Moins portables, pas d'humidificateur intégré, téléchargement de données plus complexe.</p>
                </VentilatorCard>
            </div>
             <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Fauroux B, et al. Eur Respir J. 2022.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Ventilateurs : caractéristiques requises" icon={<Wrench className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">
                Le choix du ventilateur dépend des caractéristiques de l'enfant (poids, maladie, capacité à déclencher) et des besoins médicaux (stabilité clinique).
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md">
                 <h5 className="font-bold text-blue-800 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Caractéristiques Requises
                </h5>
                <ul className="list-disc list-inside space-y-1 text-sm text-blue-700 mt-2">
                   <li>Le ventilateur doit être approuvé pour le poids de l'enfant.</li>
                   <li>Des alarmes appropriées et une batterie interne/externe sont obligatoires pour les patients dépendants.</li>
                   <li>Un double interrupteur est une sécurité pour éviter un arrêt accidentel.</li>
                   <li>L'humidification chauffée est associée à un meilleur confort et moins de problèmes de sécrétions.</li>
                </ul>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Fauroux B, et al. Eur Respir J. 2022.</li>
                </ul>
            </div>
        </Accordion>
    </div>
  );
};
