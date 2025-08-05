import React from 'react';
import { Lungs, CheckCircle, Users, Wind, Heart, BrainCircuit, TrendingUp, ShieldX, Target, AlertTriangle, TrendingDown, BookOpen, PlayCircle } from './icons';
import { Accordion } from './Accordion';
import { AutoPeepAnimation } from './animations/AutoPeepAnimation';

const InfoCard: React.FC<{ 
  title: string; 
  children: React.ReactNode; 
  icon: React.ReactNode; 
  color: 'indigo' | 'violet' | 'sky' 
}> = ({ title, children, icon, color }) => {
    const colors = {
        indigo: 'border-indigo-500 bg-indigo-50 text-indigo-800',
        violet: 'border-violet-500 bg-violet-50 text-violet-800',
        sky: 'border-sky-500 bg-sky-50 text-sky-800'
    };
    return (
        <div className={`p-5 rounded-lg border-l-4 ${colors[color]} shadow-sm h-full`}>
            <h4 className={`font-semibold text-lg flex items-center mb-3`}>
                {icon}
                <span className="ml-3">{title}</span>
            </h4>
            <div className="text-slate-700 space-y-2 text-base">{children}</div>
        </div>
    );
};

const PredictorCard: React.FC<{ title: string, value: string, success?: boolean }> = ({ title, value, success = true }) => {
    const colorClass = success ? 'bg-green-100 border-green-400 text-green-800' : 'bg-red-100 border-red-400 text-red-800';
    return (
        <div className={`p-3 rounded-lg border ${colorClass} text-center`}>
            <p className="text-sm font-medium text-slate-600">{title}</p>
            <p className="text-lg font-bold">{value}</p>
        </div>
    );
};

export const DefinitionSection: React.FC = () => (
  <div className="space-y-8 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-3xl font-bold text-slate-900 flex items-center">
        <BrainCircuit className="w-8 h-8 mr-4 text-indigo-600" />
        Fondamentaux de la VNI
      </h2>
      <p className="mt-2 text-slate-600 text-base">
        Les concepts clés, bénéfices démontrés et défis de la ventilation non invasive.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
        <InfoCard title="Le Rôle Central de la VNI" icon={<Target className="w-6 h-6 text-indigo-600"/>} color="indigo">
            <p>Une alternative de premier plan à l'intubation, offrant un support respiratoire efficace sans les risques de la ventilation invasive.</p>
        </InfoCard>
        <InfoCard title="Bénéfices Démontrés" icon={<CheckCircle className="w-6 h-6 text-sky-600"/>} color="sky">
            <ul className="list-disc list-inside space-y-1">
                <li>Réduction de la mortalité</li>
                <li>Diminution des infections</li>
                <li>Amélioration du confort</li>
                <li>Raccourcissement des séjours</li>
            </ul>
        </InfoCard>
        <InfoCard title="Défis et Clés du Succès" icon={<AlertTriangle className="w-6 h-6 text-violet-600"/>} color="violet">
            <p>Le succès repose sur l'adhésion du patient et la gestion de l'interface. L'intolérance au masque est la principale cause d'échec.</p>
        </InfoCard>
    </div>
    
    <Accordion title="Qu'est-ce que la VNI ?" icon={<Lungs className="w-6 h-6"/>} variant="primary">
        <p className="text-slate-700 text-base mb-4">
            La Ventilation Non Invasive (VNI) est une technique d'assistance respiratoire qui ne nécessite pas de voie aérienne artificielle (intubation ou trachéotomie). Elle est devenue une pierre angulaire dans la gestion de l'insuffisance respiratoire aiguë et chronique, offrant un soutien critique sans les risques associés à la ventilation invasive.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4 text-base">
            <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Objectifs Principaux</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                    <li>Éviter l'intubation trachéale et ses complications.</li>
                    <li>Réduire le travail respiratoire du patient.</li>
                    <li>Améliorer les échanges gazeux (oxygénation et ventilation).</li>
                    <li>Faciliter le sevrage de la ventilation invasive.</li>
                </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-md border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">Bénéfices Démontrés</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                    <li>Réduction de la mortalité dans certaines indications.</li>
                    <li>Diminution des infections nosocomiales.</li>
                    <li>Raccourcissement de la durée de séjour en réanimation.</li>
                    <li>Amélioration du confort et de la survie du patient.</li>
                </ul>
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
    
    <Accordion title="Bénéfices Physiologiques & Cliniques" icon={<BrainCircuit className="w-6 h-6"/>} variant="primary">
        <div className="p-4 bg-slate-50 rounded-lg">
            <div className="text-center mb-6">
                <span className="inline-block px-4 py-2 rounded-lg bg-indigo-600 text-white font-bold text-xl shadow-md">VNI</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                {/* Neurological */}
                <div className="text-center space-y-2">
                    <h4 className="font-semibold text-lg text-slate-800">Neurologique</h4>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm">Amélioration de l'encéphalopathie<br/>(dû à l'hypercapnie)</div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm">Évite la sédation continue<br/>(requise pour la VMI)</div>
                </div>

                {/* Cardiovascular */}
                <div className="text-center space-y-2">
                    <h4 className="font-semibold text-lg text-slate-800">Cardiovasculaire</h4>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm">Augmentation de la pression intrathoracique</div>
                    <div className="flex justify-center text-2xl text-slate-400">↓</div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm">Diminution de la précharge VG</div>
                        <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm">Diminution de la pression transmyocardique</div>
                        <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm col-span-2">Diminution de la postcharge VG</div>
                    </div>
                    <div className="flex justify-center text-2xl text-slate-400">↓</div>
                     <div className="p-3 bg-green-100 rounded-lg border border-green-300 shadow-sm font-semibold text-green-800">Amélioration du débit cardiaque</div>
                </div>

                {/* Pulmonary */}
                <div className="text-center space-y-2">
                    <h4 className="font-semibold text-lg text-slate-800">Pulmonaire</h4>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm">Contre-balance l'auto-PEEP</div>
                     <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm">Décharge des muscles inspiratoires</div>
                    <div className="flex justify-center text-2xl text-slate-400">↓</div>
                     <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm">Recrutement alvéolaire</div>
                        <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm">Augmentation CRF & compliance</div>
                        <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm col-span-2">Amélioration du rapport V/Q</div>
                    </div>
                     <div className="flex justify-center text-2xl text-slate-400">↓</div>
                     <div className="grid grid-cols-2 gap-2">
                        <div className="p-3 bg-green-100 rounded-lg border border-green-300 shadow-sm font-semibold text-green-800">Amélioration des échanges gazeux</div>
                        <div className="p-3 bg-green-100 rounded-lg border border-green-300 shadow-sm font-semibold text-green-800">Diminution du shunt</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="border-t border-slate-200 pt-3 mt-4">
            <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
            <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                <li>Criner GJ, et al. Eur Respir J. 2024.</li>
            </ul>
        </div>
    </Accordion>
    
    <Accordion title="Animation Interactive : Comprendre l'Auto-PEEP" icon={<PlayCircle className="w-6 h-6"/>} variant="default">
        <AutoPeepAnimation />
    </Accordion>
    
  </div>
);