import React from 'react';
import { BookOpen, Activity, Lungs, BrainCircuit, ListChecks, Wrench } from './icons';
import { Accordion } from './Accordion';
import { NivIntoleranceTool } from './NivIntoleranceTool';

const KeyPointsCard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg shadow-sm">
        <h3 className="font-bold text-lg text-indigo-800 flex items-center mb-3">
            <ListChecks className="w-6 h-6 mr-2" />
            Éléments Clés à Retenir
        </h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700 text-base">
            {children}
        </ul>
    </div>
);


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

const DiseaseTable: React.FC = () => {
    const data = {
        Cortex: ["AVC", "Néoplasme"],
        Tronc_cérébral: ["AVC", "Poliomyélite", "Sclérose en plaques", "Atrophie multisystématisée"],
        Noyaux_gris_centraux: ["Maladie de Parkinson", "Chorée", "Dyskinésies"],
        Moelle_épinière: ["Traumatisme", "Myélite transverse", "Abcès épidural"],
        Nerfs_moteurs: ["Sclérose latérale amyotrophique", "Guillain-Barré", "Vascularite", "Neuropathie de réanimation"],
        Jonction_NM: ["Myasthénie grave", "Médicaments (bloquants)", "Botulisme"],
        Myopathies: ["Dystrophies musculaires", "Diabète", "Polymyosite"]
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-500">
                <thead className="text-xs text-slate-700 uppercase bg-slate-100">
                    <tr>
                        <th className="px-4 py-3 border">Cortex</th>
                        <th className="px-4 py-3 border">Tronc Cérébral</th>
                        <th className="px-4 py-3 border">Noyaux Gris Centraux</th>
                        <th className="px-4 py-3 border">Moelle Épinière</th>
                        <th className="px-4 py-3 border">Nerfs Moteurs</th>
                        <th className="px-4 py-3 border">Jonction NM</th>
                        <th className="px-4 py-3 border">Myopathies</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b">
                        <td className="px-4 py-2 border">{data.Cortex.join(", ")}</td>
                        <td className="px-4 py-2 border">{data.Tronc_cérébral.join(", ")}</td>
                        <td className="px-4 py-2 border">{data.Noyaux_gris_centraux.join(", ")}</td>
                        <td className="px-4 py-2 border">{data.Moelle_épinière.join(", ")}</td>
                        <td className="px-4 py-2 border">{data.Nerfs_moteurs.join(", ")}</td>
                        <td className="px-4 py-2 border">{data.Jonction_NM.join(", ")}</td>
                        <td className="px-4 py-2 border">{data.Myopathies.join(", ")}</td>
                    </tr>
                </tbody>
            </table>
             <p className="text-xs text-slate-500 mt-2 italic">Adapté de Carmona et al. (2023)</p>
        </div>
    );
};

export const NmdGeneralitesSection: React.FC = () => (
    <div className="space-y-6 pt-8">
        <KeyPointsCard>
            <li>L'insuffisance respiratoire chronique est une complication fréquente et grave des maladies neuromusculaires (MNM) et des pathologies de la paroi thoracique.</li>
            <li>La physiopathologie commune est une <strong>hypoventilation alvéolaire</strong>, initialement nocturne, due à la faiblesse des muscles inspiratoires (en particulier le diaphragme).</li>
            <li>L'évaluation clinique doit se concentrer sur trois fonctions clés : <strong>la ventilation, la toux, et la déglutition/protection des voies aériennes</strong>.</li>
            <li>La <strong>spirométrie</strong> (Capacité Vitale en position assise et couchée), la <strong>mesure des pressions maximales</strong> (PIM, PEM) et le <strong>débit de pointe de toux</strong> (PCF) sont les outils essentiels du suivi.</li>
        </KeyPointsCard>

        <Accordion title="Introduction & Physiopathologie" icon={<BookOpen className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">
                L'insuffisance respiratoire dans les MNM résulte de la faiblesse des muscles respiratoires et/ou d'anomalies de la cage thoracique. L'hypercapnie par hypoventilation est le problème principal, bien que l'hypoxémie puisse survenir en raison d'atélectasies.
            </p>
            <InfoCard title="La Cascade de l'Hypoventilation Nocturne" icon={<Lungs className="w-5 h-5"/>} variant="blue">
                <ol className="list-decimal list-inside space-y-2">
                    <li>L'atonie musculaire normale du sommeil paradoxal affecte les muscles inspiratoires accessoires.</li>
                    <li>Chez un patient avec un diaphragme déjà faible, cette perte de contribution musculaire est suffisante pour provoquer une hypoventilation nocturne.</li>
                    <li>Les épisodes fréquents d'élévation de la PaCO₂ nocturne entraînent une compensation rénale avec augmentation des bicarbonates.</li>
                    <li>Ce "recalibrage" du seuil des chémorécepteurs conduit à une hypercapnie diurne permanente.</li>
                    <li>S'y ajoutent des symptômes de sommeil de mauvaise qualité : réveils fréquents, céphalées matinales, fatigue et somnolence diurne.</li>
                </ol>
            </InfoCard>
        </Accordion>

        <Accordion title="Maladies Concernées" icon={<BrainCircuit className="w-6 h-6"/>} variant="default">
             <p className="text-slate-700 mb-4 text-base">De nombreuses pathologies peuvent affecter le système nerveux à différents niveaux, conduisant à une insuffisance respiratoire.</p>
             <DiseaseTable />
        </Accordion>

        <Accordion title="Évaluation Clinique : Les 3 Piliers" icon={<Activity className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">L'évaluation clinique d'un patient atteint de MNM doit systématiquement explorer trois domaines fonctionnels.</p>
            <div className="grid md:grid-cols-3 gap-4">
                <InfoCard title="1. Fonction Ventilatoire" icon={<Lungs className="w-5 h-5"/>} variant="blue">
                    <p className="font-semibold">Dépend des muscles inspiratoires.</p>
                    <ul className="list-disc list-inside mt-2">
                        <li><strong>CVF (Capacité Vitale Forcée) :</strong> La mesure de base pour le suivi. Une chute de supérieur à 20% en position couchée signe une faiblesse diaphragmatique.</li>
                        <li><strong>PIM (Pression Inspiratoire Maximale) :</strong> Évalue la force des muscles inspiratoires.</li>
                    </ul>
                </InfoCard>
                <InfoCard title="2. Fonction de Toux" icon={<Activity className="w-5 h-5"/>} variant="green">
                     <p className="font-semibold">Dépend des muscles inspiratoires ET expiratoires.</p>
                     <ul className="list-disc list-inside mt-2">
                        <li><strong>PEM (Pression Expiratoire Maximale) :</strong> Évalue la force des muscles expiratoires.</li>
                        <li><strong>PCF (Peak Cough Flow) :</strong> Mesure l'efficacité de la toux. Un PCF inférieur à 270 L/min est un seuil de risque, nécessitant l'initiation d'une aide à la toux.</li>
                    </ul>
                </InfoCard>
                 <InfoCard title="3. Déglutition & Protection des Voies Aériennes" icon={<Activity className="w-5 h-5"/>} variant="amber">
                    <p className="font-semibold">Dépend des muscles bulbaires (glotte).</p>
                    <p>L'évaluation est principalement clinique (fausses routes, voix nasonnée). C'est le facteur limitant pour la VNI.</p>
                </InfoCard>
            </div>
        </Accordion>

        <Accordion title="Outil d'Aide à la Décision : Intolérance à la VNI" icon={<Wrench className="w-6 h-6"/>} variant="default">
            <NivIntoleranceTool />
        </Accordion>
    </div>
);