
import React from 'react';
import { Shield, Activity, Heart, AlertTriangle, Users, BookOpen, Wind, Wrench } from './icons';
import { Accordion } from './Accordion';

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; variant: 'blue' | 'green' | 'amber' | 'red' | 'purple' }> = ({ title, children, icon, variant }) => {
    const colors = {
        blue: 'border-blue-500 bg-blue-50 text-blue-800',
        green: 'border-green-500 bg-green-50 text-green-800',
        amber: 'border-amber-500 bg-amber-50 text-amber-800',
        red: 'border-red-500 bg-red-50 text-red-800',
        purple: 'border-purple-500 bg-purple-50 text-purple-800'
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

const KeyPointsCard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg shadow-sm">
        <h3 className="font-bold text-lg text-indigo-800 flex items-center mb-3">
            <BookOpen className="w-6 h-6 mr-2" />
            Recommandations Clés
        </h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700 text-base">
            {children}
        </ul>
    </div>
);

export const VniDmdSection: React.FC = () => {
  return (
    <div className="space-y-6 pt-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
             <h3 className="text-2xl font-bold text-slate-900 flex items-center">
                La VNI dans la Dystrophie Musculaire de Duchenne (DMD)
            </h3>
            <p className="mt-2 text-slate-600 text-base">
                La DMD est une maladie génétique entraînant une faiblesse musculaire progressive. L'atteinte respiratoire est une cause majeure de morbidité et de mortalité, mais la VNI a transformé le pronostic.
            </p>
        </div>
        
        <KeyPointsCard>
            <li>La prise en charge respiratoire standard, incluant la VNI et l'aide à la toux, combinée au traitement cardiologique, prolonge significativement la longévité.</li>
            <li>La VNI associée à l'aide à la toux réduit la fréquence et la sévérité des infections respiratoires.</li>
            <li>Le "Air Stacking" (empilement d'air) est plus efficace que la simple poussée abdominale pour améliorer le débit de toux.</li>
            <li>Une équipe multidisciplinaire est essentielle pour une prise en charge optimale.</li>
        </KeyPointsCard>
        
        <Accordion title="Gestion Respiratoire" icon={<Activity className="w-6 h-6"/>} variant="primary">
            <div className="grid md:grid-cols-2 gap-4">
                <InfoCard title="VNI pour l'Insuffisance Respiratoire Chronique" icon={<Wind className="w-5 h-5"/>} variant="blue">
                    <p>Une évaluation pulmonaire annuelle est recommandée.</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li><strong>Initiation :</strong> Dès l'apparition de symptômes d'hypoventilation ou si la Capacité Vitale (CV) diminue.</li>
                        <li><strong>Modalités :</strong> Un ventilateur Bi-niveau à haute pression ou un ventilateur volumétrique est utilisé, d'abord la nuit.</li>
                         <li><strong>Évolution :</strong> Le support diurne est ajouté en cas d'hypercapnie symptomatique pendant la journée.</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Désencombrement des Voies Aériennes" icon={<Wrench className="w-5 h-5"/>} variant="green">
                    <p>La toux devient inefficace avec la progression de la maladie.</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                         <li><strong>Indication :</strong> Enseignement de la toux manuellement assistée lorsque le débit de toux de pointe (PCF) est inférieur à 270 L/min.</li>
                         <li><strong>Technique :</strong> La toux est assistée après avoir augmenté le volume pulmonaire par "air stacking" (empilement d'air).</li>
                         <li><strong>En cas de rhume :</strong> L'objectif est de maintenir une SpO₂ supérieur à 94% en intensifiant l'aide à la toux et la VNI.</li>
                    </ul>
                </InfoCard>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Khan A, et al. Chest. 2023.</li>
                    <li>Akpa B, et al. J Thorac Dis. 2024.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Cardioprotection & Anesthésie" icon={<Heart className="w-6 h-6"/>} variant="primary">
             <div className="grid md:grid-cols-2 gap-4">
                <InfoCard title="Protection Cardiaque" icon={<Shield className="w-5 h-5"/>} variant="blue">
                    <p>L'atteinte cardiaque est quasi constante à l'âge adulte.</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                         <li><strong>Suivi :</strong> Échocardiographie, BNP, et ECG 1 à 2 fois par an.</li>
                         <li><strong>Traitement :</strong> La combinaison d'IEC, bêta-bloquants, VNI et aide à la toux améliore significativement la survie. La VNI a un effet cardioprotecteur direct.</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Anesthésie et Sédation" icon={<AlertTriangle className="w-5 h-5"/>} variant="amber">
                    <p>Les patients DMD présentent un risque élevé de complications anesthésiques.</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                         <li><strong>Pré-opératoire :</strong> Évaluation pulmonaire systématique. Si CVF inférieur à 30%, entraînement à la VNI. Si PCF inférieur à 270 L/min, entraînement à l'aide à la toux.</li>
                         <li><strong>Post-opératoire :</strong> Monitorage continu de la SpO₂. Traiter immédiatement toute hypoventilation ou encombrement par VNI et toux assistée. Utiliser l'oxygène avec prudence.</li>
                    </ul>
                </InfoCard>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Akpa B, et al. J Thorac Dis. 2024.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Le Rôle des Parents : 'La Ligne de Vie'" icon={<Users className="w-6 h-6"/>} variant="default">
             <InfoCard title="Un Engagement Total" icon={<Users className="w-5 h-5"/>} variant="purple">
                <p>La prise en charge d'un enfant atteint de DMD sous VNI représente un changement majeur pour la vie de famille et une charge financière et émotionnelle considérable.</p>
                <p className="mt-2">Les parents deviennent des experts de la maladie de leur enfant mais ressentent souvent le poids de la responsabilité. Un soutien accru de la part de la communauté et des professionnels de santé est indispensable pour accompagner ces familles.</p>
            </InfoCard>
        </Accordion>
    </div>
  );
};
