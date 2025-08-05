
import React, { useState } from 'react';
import { Siren, Target, CheckCircle, XCircle, User, Wrench, Heart, Activity, AlertTriangle, Shield, Users, ListChecks, Wind, Lungs } from './icons';
import { Accordion } from './Accordion';
import { IraHypoxiqueSection } from './IraHypoxiqueSection';
import { IraHypercapniqueSection } from './IraHypercapniqueSection';

const KeyPointsCard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
        <h3 className="font-bold text-lg text-indigo-800 flex items-center mb-3">
            <ListChecks className="w-6 h-6 mr-2" />
            Éléments Clés à Retenir
        </h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700 text-base">
            {children}
        </ul>
    </div>
);

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; variant: 'blue' | 'green' | 'red' | 'amber' | 'purple' }> = ({ title, children, icon, variant }) => {
    const colors = {
        blue: 'border-blue-500 bg-blue-50 text-blue-800',
        green: 'border-green-500 bg-green-50 text-green-800',
        red: 'border-red-500 bg-red-50 text-red-800',
        amber: 'border-amber-500 bg-amber-50 text-amber-800',
        purple: 'border-purple-500 bg-purple-50 text-purple-800'
    };
    return (
        <div className={`p-4 rounded-lg border-l-4 ${colors[variant]} h-full shadow-sm`}>
            <h4 className="font-semibold text-lg flex items-center mb-2">
                {icon}
                <span className="ml-3">{title}</span>
            </h4>
            <div className="text-slate-700 space-y-2 text-base">{children}</div>
        </div>
    );
};

const SubSection: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => (
    <div className="mt-4">
        <h4 className="font-semibold text-xl text-slate-800 mb-2 border-b pb-2">{title}</h4>
        <div className="space-y-3 text-base">{children}</div>
    </div>
);

const SettingsTable: React.FC = () => (
    <div className="overflow-x-auto my-4">
        <table className="w-full text-left border-collapse text-sm">
            <thead>
                <tr className="bg-slate-100">
                    <th className="border p-3 font-semibold text-slate-700">Paramètre</th>
                    <th className="border p-3 font-semibold text-slate-700">Bi-level PAP (Mode VS-AI / S/T)</th>
                    <th className="border p-3 font-semibold text-slate-700">CPAP</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white"><td className="border p-3 font-bold">Mode initial</td><td className="border p-3">Le plus courant est le mode <strong>S/T (Spontané/Temporisé)</strong>.</td><td className="border p-3">Mode CPAP.</td></tr>
                <tr className="bg-slate-50"><td className="border p-3 font-bold">Pression Expiratoire (EPAP/PEEP)</td><td className="border p-3">Débuter à <strong>3-5 cmH₂O</strong>. Augmenter pour améliorer l'oxygénation ou contrer l'auto-PEEP.</td><td className="border p-3">Débuter à <strong>5-8 cmH₂O</strong>. Titrer jusqu'à 20 cmH₂O si toléré.</td></tr>
                <tr className="bg-white"><td className="border p-3 font-bold">Pression Inspiratoire (IPAP)</td><td className="border p-3">Débuter à <strong>8-12 cmH₂O</strong>. Titrer par paliers de 2 cmH₂O pour viser une FR diminuée, un VTe de 6-8 ml/kg et un meilleur confort. Max <strong>~20-25 cmH₂O</strong>.</td><td className="border p-3">Non applicable.</td></tr>
                <tr className="bg-slate-50"><td className="border p-3 font-bold">FiO₂</td><td colSpan={2} className="border p-3">Titrer pour une <strong>SpO₂ cible supérieur à 90%</strong> (ou 88-92% pour la BPCO).</td></tr>
                <tr className="bg-white"><td className="border p-3 font-bold">Fréquence de Secours</td><td className="border p-3">Régler à <strong>8-12 /min</strong>, soit quelques cycles en dessous de la FR spontanée du patient.</td><td className="border p-3">Non applicable.</td></tr>
                <tr className="bg-slate-50"><td className="border p-3 font-bold">Pente (Rise Time)</td><td colSpan={2} className="border p-3">Ajuster pour le confort du patient. <strong>Rapide</strong> pour les patients "affamés d'air", <strong>plus lente</strong> pour le confort.</td></tr>
            </tbody>
        </table>
    </div>
);

const DecisionSupportTool: React.FC = () => {
    const [arfType, setArfType] = useState<'hypoxemic' | 'hypercapnic' | 'mixed' | null>(null);

    const arfTypesData = {
        hypoxemic: { 
            label: 'Hypoxémique',
            strategy: 'OHD en 1ère intention, ou VNI (CPAP/BPAP)', 
            icon: <Lungs />, 
            color: 'blue',
            goals: [
                "Tenter l'Oxygénothérapie à Haut Débit (OHD) en première intention pour sa meilleure tolérance.",
                "Envisager la VNI (CPAP ou BPAP) si OHD est insuffisante ou en cas d'OAP cardiogénique.",
                "Titrer l'O₂ pour une SpO₂ cible de 90-96%."
            ]
        },
        hypercapnic: {
            label: 'Hypercapnique',
            strategy: 'BPAP',
            icon: <Wind />,
            color: 'red',
            goals: [
                "Titrer la FR et l'IPAP pour l'objectif de CO₂.",
                "Améliorer le travail respiratoire."
            ]
        },
        mixed: {
            label: 'Mixte',
            strategy: 'BPAP',
            icon: <Activity />,
            color: 'purple',
            goals: [
                "Titrer EPAP et FiO₂ pour l'objectif de SpO₂.",
                "Titrer la FR et l'IPAP pour l'objectif de CO₂.",
                "Améliorer le travail respiratoire."
            ]
        }
    };

    const getButtonColor = (type: keyof typeof arfTypesData) => {
        const data = arfTypesData[type];
        if (arfType === type) {
            switch(data.color) {
                case 'blue': return 'bg-blue-600 text-white border-blue-700';
                case 'red': return 'bg-red-600 text-white border-red-700';
                case 'purple': return 'bg-purple-600 text-white border-purple-700';
            }
        }
        return 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50';
    };

    const getResultHeaderColor = (type: keyof typeof arfTypesData) => {
        const data = arfTypesData[type];
        switch(data.color) {
            case 'blue': return 'bg-blue-600';
            case 'red': return 'bg-red-600';
            case 'purple': return 'bg-purple-600';
        }
    };
    
    return (
        <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200 mt-6 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Outil d'Aide à la Décision Clinique</h3>
            
            <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                    <div className="flex-shrink-0 bg-indigo-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-lg">1</div>
                    <p className="ml-3 font-semibold text-slate-700 text-lg">Choisissez le type d'Insuffisance Respiratoire</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {Object.entries(arfTypesData).map(([type, data]) => (
                        <button 
                            key={type} 
                            onClick={() => setArfType(type as any)} 
                            className={`flex flex-col items-center justify-center p-4 rounded-lg font-semibold transition-all duration-200 border-2 shadow-sm ${getButtonColor(type as any)}`}
                        >
                           <div className={`mb-2 ${arfType === type ? 'text-white' : `text-${data.color}-600`}`}>
                               {React.cloneElement(data.icon, { className: 'w-8 h-8' })}
                           </div>
                           <span className="text-base">{data.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {arfType && (
                <div className="mt-8 animate-fade-in-fast">
                    
                    <div className="relative border-t-2 border-dashed border-slate-300 my-8">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-50 px-2">
                           <div className="flex-shrink-0 bg-indigo-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-lg">2</div>
                        </div>
                    </div>

                    <div className={`bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200`}>
                        <div className={`${getResultHeaderColor(arfType)} text-white p-4 text-center`}>
                           <h4 className="text-xl font-bold">Plan d'Action pour IRA <span className="capitalize">{arfTypesData[arfType].label}</span></h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200">
                             <div className="bg-slate-50 p-4 flex flex-col">
                                <h5 className="font-bold text-slate-800 text-lg mb-3 text-center">Stratégie de VNI</h5>
                                <div className="text-center flex-grow flex items-center justify-center">
                                    <div className={`inline-flex items-center space-x-3 bg-white p-4 rounded-lg border border-slate-200`}>
                                        <div className={`text-${arfTypesData[arfType].color}-600`}>{React.cloneElement(arfTypesData[arfType].icon, { className: 'w-8 h-8' })}</div>
                                        <p className={`text-2xl font-bold text-${arfTypesData[arfType].color}-700`}>{arfTypesData[arfType].strategy}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-slate-50 p-4">
                                <h5 className="font-bold text-slate-800 text-lg mb-3 text-center">Objectifs de Titration</h5>
                               <ul className="list-disc list-inside space-y-2 text-slate-700 text-base">
                                   {arfTypesData[arfType].goals.map((goal, i) => <li key={i}>{goal}</li>)}
                               </ul>
                           </div>
                        </div>
                    </div>

                    <div className="relative border-t-2 border-dashed border-slate-300 my-8">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-50 px-2">
                           <div className="flex-shrink-0 bg-indigo-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-lg">3</div>
                        </div>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg shadow-sm">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <AlertTriangle className="h-6 w-6 text-red-500" />
                            </div>
                            <div className="ml-3">
                                <h5 className="font-bold text-red-800 text-lg">Évaluation Finale & Critères d'Échec</h5>
                                <p className="mt-2 font-semibold text-red-700">Procéder à l'intubation et à la ventilation mécanique invasive si :</p>
                                <ul className="list-disc list-inside space-y-1 text-sm mt-2 text-red-700">
                                   <li>Absence d'amélioration clinique ou échec de la VNI (ex: hypoxémie/hypercapnie persistante, altération de la conscience, vomissements).</li>
                                   <li>Et absence de contre-indication (ex: statut DNI - Do Not Intubate).</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Zimnoch M, et al. J Clin Med. 2024.</li>
                    <li>Criner GJ, et al. Eur Respir J. 2024.</li>
                    <li>Aswanetmanee P, et al. Sci Rep. 2023.</li>
                </ul>
            </div>
        </div>
    );
};

const TabButton: React.FC<{ onClick: () => void; isActive: boolean; children: React.ReactNode }> = ({ onClick, isActive, children }) => (
    <button
        onClick={onClick}
        className={`px-3 sm:px-4 py-2 text-sm sm:text-base font-semibold transition-colors duration-200 border-b-2 flex items-center space-x-2 ${
            isActive
                ? 'border-indigo-500 text-indigo-600 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
        }`}
        role="tab"
        aria-selected={isActive}
    >
        {children}
    </button>
);

const GeneralSection: React.FC = () => (
    <div className="space-y-8 pt-8">
        <p className="text-slate-700 text-base">
            La <strong>Ventilation Non Invasive (VNI)</strong> consiste à administrer un support ventilatoire par pression positive via une interface non invasive (masque, etc.) plutôt qu'une voie aérienne artificielle. C'est une technique essentielle pour la prise en charge de l'insuffisance respiratoire aiguë, dont les aspects pratiques sont détaillés ici.
        </p>

        <KeyPointsCard>
            <li>Le <strong>timing est crucial</strong> : la VNI doit être initiée dès que possible.</li>
            <li>Le <strong>succès dépend d'une équipe expérimentée</strong> capable d'assurer un ajustement confortable, des réglages appropriés et une réassurance du patient.</li>
            <li>Le <strong>masque oronasal</strong> est l'interface la plus courante, mais le choix doit être adapté à la tolérance du patient.</li>
            <li>Une <strong>surveillance étroite pendant les 1-2 premières heures</strong> est impérative pour évaluer la réponse et détecter les signes d'échec afin de ne pas retarder une intubation.</li>
            <li>La <strong>dyssynchronie patient-ventilateur</strong> est fréquente et doit être activement recherchée et corrigée.</li>
        </KeyPointsCard>

        <Accordion title="Quand, Où et Par Qui ? Le Cadre de l'Initiation" icon={<Activity className="w-6 h-6"/>} variant="primary">
            <InfoCard title="Timing, Site et Équipe" icon={<Users className="w-6 h-6 text-blue-600"/>} variant="blue">
                <p><strong>Timing :</strong> Initier la VNI <strong>dès que l'indication est posée</strong>. Les retards d'implémentation entraînent une détérioration et augmentent la probabilité d'échec.</p>
                <p><strong>Site :</strong> Le plus souvent initiée aux <strong>urgences</strong>, en <strong>soins intensifs</strong> ou dans une <strong>unité de surveillance continue respiratoire</strong>. Une mise en place en service conventionnel est possible mais requiert une équipe parfaitement formée.</p>
                <p><strong>Équipe :</strong> Le succès repose sur un <strong>personnel compétent et expérimenté</strong>. L'expertise au lit du malade est essentielle pour choisir et ajuster l'interface, définir les réglages initiaux, et rassurer le patient lors des ajustements fréquents.
                </p>
            </InfoCard>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Zimnoch M, et al. J Clin Med. 2024.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Stratégies Thérapeutiques par Type d'IRA" icon={<Target className="w-6 h-6"/>} variant="primary">
            <p className="mb-4 text-slate-700 text-base">La stratégie de VNI doit être adaptée à la physiopathologie de l'insuffisance respiratoire.</p>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
                <InfoCard title="IRA Hypoxémique" icon={<Lungs className="w-6 h-6 text-blue-600"/>} variant="blue">
                    <p><strong>Objectif :</strong> Inverser le shunt, améliorer l'oxygénation.</p>
                    <p><strong>Stratégie :</strong> Utiliser la <strong>CPAP</strong> ou l'<strong>EPAP</strong> du BPAP pour recruter les alvéoles, associée à la <strong>FiO₂</strong>. Le BPAP est préférable si un support inspiratoire est aussi nécessaire (travail respiratoire élevé).</p>
                </InfoCard>
                <InfoCard title="IRA Hypercapnique" icon={<Wind className="w-6 h-6 text-red-600"/>} variant="red">
                    <p><strong>Objectif :</strong> Supporter le travail respiratoire, améliorer la ventilation minute et réduire la PaCO₂.</p>
                    <p><strong>Stratégie :</strong> Utiliser le <strong>BPAP</strong>. La différence entre IPAP et EPAP (l'Aide Inspiratoire) est cruciale pour augmenter le volume courant.</p>
                </InfoCard>
                 <InfoCard title="Situations Mixtes" icon={<Activity className="w-6 h-6 text-purple-600"/>} variant="purple">
                    <p><strong>Objectif :</strong> Gérer à la fois l'oxygénation et la ventilation.</p>
                    <p><strong>Stratégie :</strong> Le <strong>BPAP</strong> est le mode de choix, car il permet de titrer indépendamment l'EPAP pour l'oxygénation et l'IPAP pour la ventilation.</p>
                </InfoCard>
            </div>
             <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Zimnoch M, et al. J Clin Med. 2024.</li>
                    <li>Aswanetmanee P, et al. Sci Rep. 2023.</li>
                    <li>Criner GJ, et al. Eur Respir J. 2024.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Choix du Matériel : Les Composants de la VNI" icon={<Wrench className="w-6 h-6"/>} variant="primary">
            <SubSection title="Type de Ventilateur">
                <p>Choisir un appareil avec un monitoring et des alarmes sophistiqués.</p>
                <ul className="list-disc list-inside pl-4 space-y-1">
                    <li><strong>Ventilateurs à turbine :</strong> Spécifiques à la VNI, ils compensent plus efficacement les fuites.</li>
                    <li><strong>Ventilateurs de réanimation :</strong> Les modèles récents ont des modes VNI dédiés. Le circuit <strong>double-branche</strong> minimise la réinhalation de CO₂.</li>
                </ul>
            </SubSection>

            <SubSection title="Interface (Masque)">
                 <p>Le choix de l'interface est un facteur clé de succès. Le harnais doit être ajusté pour permettre le passage d'un ou deux doigts.</p>
                <table className="w-full text-left border-collapse mt-2 text-sm">
                    <thead><tr className="bg-slate-100"><th className="border p-2 font-semibold">Interface</th><th className="border p-2 font-semibold">Avantages</th><th className="border p-2 font-semibold">Inconvénients</th></tr></thead>
                    <tbody>
                        <tr><td className="border p-2 font-bold">Oronasal</td><td className="border p-2">Le plus utilisé. Bien toléré, élimine le CO₂.</td><td className="border p-2">Claustrophobie, risque d'inhalation.</td></tr>
                        <tr><td className="border p-2 font-bold">Nasal</td><td className="border p-2">Alternative en cas d'inconfort.</td><td className="border p-2">Fuites buccales fréquentes.</td></tr>
                        <tr><td className="border p-2 font-bold">Casque (Helmet)</td><td className="border p-2">Permet de parler/boire, moins de nécrose cutanée.</td><td className="border p-2">Accumulation de CO₂, bruit, asynchronie.</td></tr>
                    </tbody>
                </table>
            </SubSection>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Criner GJ, et al. Eur Respir J. 2024.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Protocoles d'Initiation : Réglages de Départ" icon={<Target className="w-6 h-6"/>} variant="primary">
            <p className="mb-4 text-base">Approche individualisée "<strong>start low, go slow</strong>".</p>
            <SettingsTable />
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Zimnoch M, et al. J Clin Med. 2024.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Surveillance, Échec et Sevrage" icon={<Heart className="w-6 h-6"/>} variant="default">
            <SubSection title="Monitorage et Détection de l'Échec">
                <p>Une surveillance rapprochée pendant <strong>1-2 heures</strong> est impérative. La reconnaissance de l'échec est critique pour éviter de retarder une intubation.</p>
            </SubSection>
            
            <SubSection title="Dépannage de la Dyssynchronie">
                <p>Rechercher et corriger activement l'auto-PEEP, les fuites, et ajuster les triggers pour améliorer le confort et l'efficacité.</p>
            </SubSection>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Ouellette DR, et al. Chest. 2017.</li>
                </ul>
            </div>
        </Accordion>
    </div>
);

export const VniAigueSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'general' | 'hypoxique' | 'hypercapnique'>('general');

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 flex items-center">
          <Siren className="w-8 h-8 mr-4 text-indigo-600" />
          Apport de la VNI dans l’Insuffisance Respiratoire Aiguë
        </h2>
        <p className="mt-2 text-slate-600 text-base">
          Principes, indications et gestion pratique de la VNI dans les situations d'urgence.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200">
        <div className="flex border-b border-slate-200">
            <TabButton onClick={() => setActiveTab('general')} isActive={activeTab === 'general'}>
                <ListChecks className="w-5 h-5" />
                <span>Généralités</span>
            </TabButton>
            <TabButton onClick={() => setActiveTab('hypoxique')} isActive={activeTab === 'hypoxique'}>
                 <Lungs className="w-5 h-5" />
                <span>Focus: IRA Hypoxémique</span>
            </TabButton>
            <TabButton onClick={() => setActiveTab('hypercapnique')} isActive={activeTab === 'hypercapnique'}>
                <Wind className="w-5 h-5"/>
                <span>Focus: IRA Hypercapnique</span>
            </TabButton>
        </div>
        <div className="p-2 sm:p-6">
            {activeTab === 'general' && <GeneralSection />}
            {activeTab === 'hypoxique' && <IraHypoxiqueSection />}
            {activeTab === 'hypercapnique' && <IraHypercapniqueSection />}
        </div>
      </div>
       <DecisionSupportTool />
    </div>
  );
};
