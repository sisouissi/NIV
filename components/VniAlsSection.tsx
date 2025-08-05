
import React from 'react';
import { BrainCircuit, Activity, ListChecks, Target, CheckCircle, Wind, Wrench, AlertTriangle, Home, User, SlidersHorizontal, Users } from './icons';
import { Accordion } from './Accordion';

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

export const VniAlsSection: React.FC = () => {
  return (
    <div className="space-y-6 pt-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
             <h3 className="text-2xl font-bold text-slate-900 flex items-center">
                <User className="w-7 h-7 mr-3 text-indigo-600"/>
                Focus sur la Sclérose Latérale Amyotrophique (SLA)
            </h3>
            <p className="mt-2 text-slate-600 text-base">
                La VNI est le traitement le plus efficace pour l'insuffisance respiratoire dans la SLA, améliorant significativement la survie et la qualité de vie.
            </p>
        </div>
        
        <KeyPointsCard>
            <li>La VNI est le traitement de référence, même avec un support de pression faible, elle prolonge la survie.</li>
            <li>La détection précoce de l'hypoventilation nocturne est cruciale pour une initiation opportune.</li>
            <li>L'initiation se base sur les symptômes et des mesures objectives (CVF inférieur à 80%, SNIP inférieur à 40 cmH₂O).</li>
            <li>La gestion de la toux et des sécrétions (ex: toux assistée, MI-E) est aussi vitale que le support ventilatoire.</li>
            <li>Avec la progression, c'est la durée d'utilisation de la VNI qui augmente, plus que les niveaux de pression.</li>
        </KeyPointsCard>

        <Accordion title="Évaluation & Critères d'Initiation" icon={<Activity className="w-6 h-6"/>} variant="primary">
            <div className="grid md:grid-cols-3 gap-4">
                <InfoCard title="Signes d'Atteinte Respiratoire" icon={<AlertTriangle className="w-5 h-5"/>} variant="amber">
                    <ul className="list-disc list-inside">
                        <li>Dyspnée d'effort</li>
                        <li>Orthopnée</li>
                        <li>Sommeil de mauvaise qualité</li>
                        <li>Céphalées matinales</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Tests Fonctionnels Clés" icon={<ListChecks className="w-5 h-5"/>} variant="blue">
                     <ul className="list-disc list-inside">
                        <li><strong>CVF (assis/couché) :</strong> Corrélation avec la survie.</li>
                        <li><strong>SNIP :</strong> Bon reflet de la force diaphragmatique (un SNIP inférieur à 40 cmH₂O est prédictif d'hypoxémie nocturne).</li>
                        <li><strong>PCF (Débit de Toux) :</strong> PCF inférieur à 2.7 L/s indique une toux inefficace.</li>
                        <li><strong>Oxymétrie nocturne :</strong> Détecte l'hypoventilation précoce.</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Critères d'Initiation de la VNI" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                    <p className="font-bold">Initiation si symptômes OU un des critères suivants :</p>
                    <ul className="list-disc list-inside mt-2">
                        <li>CVF inférieur ou égal à 80%</li>
                        <li>SNIP inférieur ou égal à 40 cmH₂O</li>
                        <li>Désaturation nocturne</li>
                        <li>PaCO₂ matinale supérieur à 6.5 kPa (49 mmHg)</li>
                    </ul>
                </InfoCard>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Khan A, et al. Chest. 2023.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Réglages de la VNI et Progression" icon={<BrainCircuit className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">
                La titration des pressions est un sujet de débat, mais les données suggèrent une approche centrée sur le patient.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
                <InfoCard title="Titration des Pressions" icon={<SlidersHorizontal className="w-5 h-5"/>} variant="blue">
                    <p>La plupart des études montrent que la majorité des patients tolérants à la VNI utilisent un support de pression (IPAP-EPAP) <strong>inférieur à 10 cmH₂O</strong>.</p>
                    <p className="mt-2">L'objectif est d'améliorer le confort respiratoire. Même de faibles niveaux de support ont prouvé leur efficacité sur la survie.</p>
                </InfoCard>
                <InfoCard title="Évolution avec la Maladie" icon={<Home className="w-5 h-5"/>} variant="green">
                    <p>La progression de la faiblesse musculaire se traduit par une <strong>augmentation de la durée d'utilisation</strong> de la VNI (passage du nocturne au continu) plutôt que par une augmentation marquée des pressions.</p>
                    <p className="mt-2">La plupart des ajustements de pression ont lieu durant la première année de traitement.</p>
                </InfoCard>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Khan A, et al. Chest. 2023.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Gestion de la Toux et des Sécrétions" icon={<Wrench className="w-6 h-6"/>} variant="primary">
             <p className="text-slate-700 mb-4 text-base">
                La faiblesse des muscles expiratoires rend la toux inefficace, augmentant le risque de pneumonie, cause majeure de mortalité.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
                <InfoCard title="Toux Manuellement Assistée" icon={<Users className="w-5 h-5"/>} variant="amber">
                    <p>Application d'une poussée abdominale ou thoracique synchronisée avec l'effort de toux pour augmenter l'efficacité.</p>
                </InfoCard>
                <InfoCard title="Insufflation-Exsufflation Mécanique (MI-E)" icon={<Wind className="w-5 h-5"/>} variant="amber">
                    <p>Le "Cough Assist" est un complément essentiel. Il simule une toux en appliquant une pression positive suivie d'une pression négative.</p>
                    <p className="font-semibold mt-2">Remarque : Son efficacité peut être réduite en cas d'atteinte bulbaire sévère (risque de collapsus des voies aériennes supérieures).</p>
                </InfoCard>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Khan A, et al. Chest. 2023.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Prise en Charge de Support" icon={<Target className="w-6 h-6"/>} variant="default">
            <p className="text-slate-700 mb-4 text-base">
                Une approche globale est indispensable pour la qualité de vie et la prévention des complications.
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li><strong>Gestion de la sialorrhée (hypersalivation) :</strong> Utilisation de médicaments (ex: amitriptyline) ou injections de toxine botulique pour réduire le risque d'inhalation.</li>
                <li><strong>Support nutritionnel :</strong> La mise en place précoce d'une gastrostomie percutanée (PEG) est cruciale pour éviter la dénutrition lorsque la dysphagie apparaît.</li>
                <li><strong>Directives anticipées :</strong> Il est vital de discuter précocement avec le patient et sa famille des options de fin de vie et de la transition éventuelle vers une trachéotomie, lorsque la VNI ne sera plus suffisante.</li>
            </ul>
             <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Khan A, et al. Chest. 2023.</li>
                </ul>
            </div>
        </Accordion>
    </div>
  );
};
