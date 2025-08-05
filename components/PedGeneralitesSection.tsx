
import React from 'react';
import { ListChecks, AlertTriangle, CheckCircle, XCircle, Wrench } from './icons';
import { Accordion } from './Accordion';

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

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; variant: 'blue' | 'green' | 'amber' | 'red' }> = ({ title, children, icon, variant }) => {
    const colors = {
        blue: 'border-blue-500 bg-blue-50 text-blue-800',
        green: 'border-green-500 bg-green-50 text-green-800',
        amber: 'border-amber-500 bg-amber-50 text-amber-800',
        red: 'border-red-500 bg-red-50 text-red-800'
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

export const PedGeneralitesSection: React.FC = () => {
    return (
        <div className="space-y-6 pt-8">
            <p className="text-slate-700 text-base">
                L'utilisation de la VNI au long cours chez l'enfant est en constante augmentation. Elle a révolutionné la prise en charge de nombreuses pathologies respiratoires chroniques, améliorant la qualité de vie et le pronostic.
            </p>
            
            <KeyPointsCard>
                <li>Les indications principales sont l'obstruction des voies aériennes supérieures (ex: SAOS) et l'hypoventilation alvéolaire (ex: maladies neuromusculaires).</li>
                <li>Le but est de restaurer des échanges gazeux normaux pendant le sommeil pour permettre une croissance et un développement neurocognitif optimaux.</li>
                <li>Les défis sont nombreux : choix du matériel adapté à la morphologie de l'enfant, coopération, gestion de la croissance et surveillance à long terme.</li>
                <li>L'initiation de la VNI est une décision multidisciplinaire impliquant pneumo-pédiatres, techniciens, psychologues et la famille.</li>
            </KeyPointsCard>
            
            <Accordion title="Indications Principales (Long Cours)" icon={<CheckCircle className="w-6 h-6"/>} variant="primary">
                <p className="text-slate-700 mb-4 text-base">Les indications peuvent être classées en deux grandes catégories, basées sur les recommandations de l'ERS (Fauroux et al., 2022).</p>
                <div className="grid md:grid-cols-2 gap-6">
                    <InfoCard title="Obstruction des Voies Aériennes Supérieures" icon={<Wrench className="w-5 h-5"/>} variant="blue">
                        <p className="font-semibold">C'est l'indication la plus fréquente.</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li><strong>SAOS persistant :</strong> Après échec du traitement de première ligne (ex: adéno-amygdalectomie).</li>
                            <li><strong>Malformations craniofaciales :</strong> (ex: Syndrome de Pierre Robin, achondroplasie).</li>
                            <li><strong>Obésité.</strong></li>
                            <li><strong>Laryngo/trachéomalacie.</strong></li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Hypoventilation Alvéolaire" icon={<Wrench className="w-5 h-5"/>} variant="green">
                        <p className="font-semibold">Toute pathologie entraînant une faiblesse des muscles respiratoires ou un défaut de commande.</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li><strong>Maladies neuromusculaires :</strong> Dystrophie de Duchenne, amyotrophie spinale.</li>
                            <li><strong>Pathologies de la paroi thoracique :</strong> Cyphoscoliose sévère.</li>
                            <li><strong>Anomalies de la commande centrale :</strong> Syndrome d'Ondine.</li>
                            <li><strong>Maladies pulmonaires chroniques :</strong> Mucoviscidose (en attente de greffe), dysplasie bronchopulmonaire.</li>
                        </ul>
                    </InfoCard>
                </div>
                <div className="border-t border-slate-200 pt-3 mt-4">
                    <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                    <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                        <li>Fauroux B, et al. Eur Respir J. 2022.</li>
                        <li>Praud JP. Front Pediatr. 2020.</li>
                    </ul>
                </div>
            </Accordion>
            
            <Accordion title="Contre-indications" icon={<XCircle className="w-6 h-6"/>} variant="danger">
                 <p className="text-slate-700 mb-4 text-base">Les contre-indications sont similaires à celles de l'adulte mais avec une attention particulière à l'anatomie et à la coopération de l'enfant.</p>
                 <InfoCard title="Contre-indications Relatives ou Absolues" icon={<AlertTriangle className="w-5 h-5"/>} variant="red">
                    <ul className="list-disc list-inside space-y-2">
                        <li>Incapacité à protéger les voies aériennes (troubles de déglutition sévères non gérés).</li>
                        <li>Instabilité hémodynamique non contrôlée.</li>
                        <li>Obstruction fixe et sévère des voies aériennes supérieures.</li>
                        <li>Traumatisme facial majeur ou chirurgie récente.</li>
                        <li>Refus de coopération de l'enfant (après tentative de désensibilisation) ou de la famille.</li>
                    </ul>
                </InfoCard>
                 <div className="border-t border-slate-200 pt-3 mt-4">
                    <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                    <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                        <li>Haut C. J Pediatr Intensive Care. 2015.</li>
                    </ul>
                </div>
            </Accordion>
        </div>
    );
};
