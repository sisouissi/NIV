
import React, { useState } from 'react';
import { BookOpen, CheckCircle, Target, TrendingUp, ListChecks, Calculator, ShieldX, Activity, Users, Wind, AlertTriangle, Wrench, Home, Heart, Download } from './icons';
import { Accordion } from './Accordion';

const AdviceCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode, color: 'blue' | 'green' | 'purple' | 'amber' }> = ({ title, children, icon, color }) => {
    const colorClasses = {
        blue: 'bg-blue-50 border-blue-500',
        green: 'bg-green-50 border-green-500',
        purple: 'bg-purple-50 border-purple-500',
        amber: 'bg-amber-50 border-amber-500'
    };
    const titleColorClasses = {
        blue: 'text-blue-800',
        green: 'text-green-800',
        purple: 'text-purple-800',
        amber: 'text-amber-800'
    }
    return (
        <div className={`p-4 rounded-lg border-l-4 ${colorClasses[color]}`}>
            <h4 className={`font-bold text-lg flex items-center mb-2 ${titleColorClasses[color]}`}>
                {icon}
                <span className="ml-2">{title}</span>
            </h4>
            <div className="text-slate-700 text-base space-y-1">{children}</div>
        </div>
    );
};

const SettingsCard: React.FC<{pathology: string, settings: {param: string, value: string}[], color: 'orange' | 'cyan' | 'teal' | 'lime'}> = ({pathology, settings, color}) => {
    const bgColors = {
        orange: 'bg-orange-500',
        cyan: 'bg-cyan-500',
        teal: 'bg-teal-500',
        lime: 'bg-lime-500'
    }
    return (
        <div className="rounded-lg shadow-md border border-slate-200 overflow-hidden flex flex-col h-full">
            <h4 className={`text-white font-bold p-3 text-lg text-center ${bgColors[color]}`}>{pathology}</h4>
            <div className="p-4 space-y-2 bg-white flex-grow">
                {settings.map(s => (
                    <div key={s.param} className="flex justify-between items-center text-sm border-b pb-1">
                        <span className="font-semibold text-slate-600">{s.param}</span>
                        <span className="font-bold text-slate-800 text-right" dangerouslySetInnerHTML={{ __html: s.value }}></span>
                    </div>
                ))}
            </div>
        </div>
    );
}

const Step: React.FC<{ number: number; title: string; children: React.ReactNode; }> = ({ number, title, children }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xl shadow-md">
            {number}
        </div>
        <div className="ml-4">
            <h4 className="font-bold text-lg text-indigo-700">{title}</h4>
            <p className="text-slate-600 mt-1">{children}</p>
        </div>
    </div>
);

const MarkerCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; }> = ({ title, children, icon }) => (
    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 h-full">
        <h5 className="font-semibold text-slate-800 flex items-center mb-2">
            {icon}
            <span className="ml-2">{title}</span>
        </h5>
        <div className="text-sm text-slate-600 space-y-1">{children}</div>
    </div>
);

export const RecommandationsGAVO2Section: React.FC = () => {
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

    const handleToggle = (id: string) => {
        setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const efficaciteItems = [
        { id: 'eff_obs', label: "Observance supérieur ou égal à 5h d'affilée ?" },
        { id: 'eff_symp', label: "Amélioration des symptômes ?" },
        { id: 'eff_hypo', label: "Correction de l'hypoventilation ?" },
        { id: 'eff_event', label: "Événements nocturnes (IAH inférieur à 10/h) ?" }
    ];

    const toleranceItems = [
        { id: 'tol_sleep', label: "Bonne qualité de sommeil ?" },
        { id: 'tol_comfort', label: "Absence d'inconfort lié à la VNI ?" },
        { id: 'tol_improv', label: "Perception d'amélioration ?" }
    ];

    const allEfficaciteChecked = efficaciteItems.every(item => !!checkedItems[item.id]);
    const allToleranceChecked = toleranceItems.every(item => !!checkedItems[item.id]);
    const isBienVentile = allEfficaciteChecked && allToleranceChecked;

    const ChecklistItem: React.FC<{
        item: { id: string, label: string };
        isChecked: boolean;
        onToggle: (id: string) => void;
        colorClass: string;
    }> = ({ item, isChecked, onToggle, colorClass }) => (
        <li className="flex">
            <button
                onClick={() => onToggle(item.id)}
                className="w-full text-left flex items-center p-1.5 rounded-md hover:bg-slate-100 transition-colors"
                role="checkbox"
                aria-checked={isChecked}
            >
                {isChecked ? (
                    <CheckCircle className={`w-5 h-5 ${colorClass} mr-2 flex-shrink-0`} />
                ) : (
                    <div className="w-5 h-5 border-2 border-slate-400 rounded-md mr-2 flex-shrink-0 bg-white"></div>
                )}
                <span className={`transition-all ${isChecked ? 'line-through text-slate-500' : 'text-slate-800'}`} dangerouslySetInnerHTML={{ __html: item.label }}>
                </span>
            </button>
        </li>
    );

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h2 className="text-3xl font-bold text-slate-900 flex items-center">
                    <BookOpen className="w-8 h-8 mr-4 text-indigo-600" />
                    Les Conseils du GAVO2 2024-2025
                </h2>
                <p className="mt-2 text-slate-600 text-base">
                    Synthèse des bonnes pratiques pour le réglage, l'adaptation et la surveillance de la VNI à domicile.
                </p>
                <div className="mt-4 border-t pt-4">
                    <a 
                        href="https://docs.splf.fr/docs-groupes/GAVO2/ConseilsGAVO2-2024-2025.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-lg shadow-sm hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <Download className="w-5 h-5" />
                        <span className="font-semibold text-sm">Télécharger le document entier (Ver Mai 2025)</span>
                    </a>
                </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-3">À propos du GAVO2</h3>
                <p className="text-slate-700">
                    Le <strong>Groupe assistance ventilatoire & oxygène (GAVO2)</strong> est un groupe de travail de la Société de Pneumologie de Langue Française (SPLF). Il est composé de pneumologues expérimentés qui émettent des <strong>conseils de bonnes pratiques</strong> sur la VNI et l'oxygénothérapie.
                </p>
                <p className="text-slate-700 mt-2">
                    Leur approche est pragmatique, inspirée de la méthode nord-américaine "choosing wisely", et vise à fournir des recommandations concrètes pour la pratique clinique quotidienne, basées sur les données actuelles de la science et l'expérience de terrain.
                </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <h3 className="font-bold text-lg text-amber-800 flex items-center mb-3">
                    <ListChecks className="w-6 h-6 mr-2" />
                    Éléments Clés à Retenir (Version 2025)
                </h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                    <li><strong>Approche centrée sur le patient :</strong> Le succès repose sur l'équilibre entre l'efficacité clinique (correction des gaz du sang) et la tolérance (confort, qualité de vie).</li>
                    <li><strong>Réglages initiaux :</strong> La stratégie "start low, go slow" reste la norme. Le mode barométrique (pression) semi-contrôlé est le standard en première intention.</li>
                    <li><strong>Suivi rigoureux :</strong> L'évaluation passe par des questions cliniques simples, l'analyse des données logicielles et des bilans complémentaires (gazométrie, capnographie) si nécessaire.</li>
                    <li><strong>Initiation à domicile :</strong> C'est une alternative validée et encouragée à l'hospitalisation pour des patients stables et bien sélectionnés, améliorant l'adhésion et réduisant les coûts.</li>
                    <li><strong>Modes automatiques :</strong> Leur usage est réservé à la <strong>seconde intention</strong>, sous couvert d'une surveillance étroite et par des équipes expérimentées.</li>
                </ul>
            </div>

            <Accordion title="Conseils n°1, 2 & 4 : Principes Clés & Mise en Place Initiale" icon={<Activity className="w-6 h-6" />} variant="primary">
                <div className="grid md:grid-cols-2 gap-4">
                     <AdviceCard title="Conseil n°1 : Une initiation encadrée" icon={<Users className="w-6 h-6" />} color="blue">
                        <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Débuter la VNI en journée.</li>
                            <li>Par une équipe formée et entraînée.</li>
                            <li>Patient bien installé (semi-assis) et informé.</li>
                            <li>Privilégier le masque nasal et un circuit simple.</li>
                        </ul>
                    </AdviceCard>
                     <AdviceCard title="Conseil n°2 : Le bon mode ventilatoire" icon={<Wind className="w-6 h-6" />} color="green">
                        <p className="text-sm">Le mode conseillé est le <strong>mode barométrique (pression)</strong> en mode <strong>semi-contrôlé</strong> (le patient déclenche, avec une fréquence de sécurité).</p>
                    </AdviceCard>
                </div>
                 <div className="mt-4">
                    <AdviceCard title="Conseil n°4 : Trois questions pour l'affinage" icon={<CheckCircle className="w-6 h-6" />} color="purple">
                         <ol className="list-decimal list-inside space-y-1 text-sm">
                            <li><strong>« Avez-vous trop d'air ou pas assez ? »</strong> → pour adapter l'Aide Inspiratoire (AI).</li>
                            <li><strong>« Le ventilateur vous suit-il bien ? »</strong> → pour régler les triggers (déclenchement).</li>
                            <li><strong>« L'air arrive-t-il assez vite ? »</strong> → pour régler la pente (temps de montée).</li>
                        </ol>
                    </AdviceCard>
                 </div>
                 <div className="border-t border-slate-200 pt-3 mt-4">
                    <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                    <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                        <li>Groupe assistance ventilatoire & oxygène (GAVO2). SPLF. 2025.</li>
                    </ul>
                </div>
            </Accordion>

            <Accordion title="Conseil n°3 : Proposition de Réglages Initiaux (Mode ST)" icon={<Target className="w-6 h-6" />} variant="default">
                 <p className="mb-4 text-slate-700 text-sm">Les réglages initiaux sont adaptés à chaque malade et sont fonction de l'atteinte respiratoire. Ils sont une base de départ à adapter à la clinique, la tolérance et la gazométrie.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <SettingsCard pathology="BPCO" color="orange" settings={[
                        {param: 'AI (cmH₂O)', value: '10 → 16-20'},
                        {param: 'PEP (cmH₂O)', value: '4 → 4-6*'},
                        {param: 'FR (/min)', value: '12 → 14-20**'},
                        {param: 'Cyclage', value: 'Précoce'},
                        {param: 'Ti', value: 'inférieur à 1.5s'},
                    ]}/>
                     <SettingsCard pathology="SOH" color="cyan" settings={[
                        {param: 'AI (cmH₂O)', value: '14 → 16-20'},
                        {param: 'PEP (cmH₂O)', value: '4-6 → 8-10'},
                        {param: 'FR (/min)', value: '12 → 16-20'},
                        {param: 'Cyclage', value: 'Intermédiaire'},
                        {param: 'Ti', value: '1.3-1.6s'},
                    ]}/>
                     <SettingsCard pathology="Thoraco-Restrictif" color="teal" settings={[
                        {param: 'AI (cmH₂O)', value: '10 → 14-20'},
                        {param: 'PEP (cmH₂O)', value: '4'},
                        {param: 'FR (/min)', value: '12 → 16-20'},
                        {param: 'Cyclage', value: 'Tardif'},
                        {param: 'Ti', value: '1.3-1.6s'},
                    ]}/>
                     <SettingsCard pathology="Neuro-musculaire" color="lime" settings={[
                        {param: 'AI (cmH₂O)', value: '6 → 10-12'},
                        {param: 'PEP (cmH₂O)', value: '4'},
                        {param: 'FR (/min)', value: '12 → 16-20'},
                        {param: 'Cyclage', value: 'Intermédiaire'},
                        {param: 'Ti', value: '1.3-1.6s'},
                    ]}/>
                 </div>
                 <p className="text-xs text-slate-500 mt-3">* En l'absence de SAOS associé. ** Les études proposent des FR élevées, mais le choix est souvent plus bas pour allonger l'expiration.</p>
                 <div className="border-t border-slate-200 pt-3 mt-4">
                    <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                    <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                        <li>Groupe assistance ventilatoire & oxygène (GAVO2). SPLF. 2025.</li>
                    </ul>
                </div>
            </Accordion>

            <Accordion title="Conseil n°5 : Adaptation Continue et Lentement Progressive" icon={<TrendingUp className="w-6 h-6" />} variant="primary">
                <p className="mb-4 text-slate-700">L'adaptation des réglages ne se fait pas en une fois, mais sur plusieurs jours à semaines.</p>
                <div className="space-y-6">
                    <Step number={1} title="Sur quelques heures : Tolérance">Adapter les réglages pour atteindre une bonne tolérance et une première amélioration des symptômes.</Step>
                    <Step number={2} title="Sur quelques jours : Ventilation nocturne">Utiliser les logiciels pour analyser fuites, événements, VT, et améliorer la ventilation pendant le sommeil.</Step>
                    <Step number={3} title="Sur quelques jours à semaines : Gazométrie">Adapter les réglages pour viser la normalisation de la gazométrie.</Step>
                </div>
                <div className="border-t border-slate-200 pt-3 mt-4">
                    <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                    <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                        <li>Groupe assistance ventilatoire & oxygène (GAVO2). SPLF. 2025.</li>
                    </ul>
                </div>
            </Accordion>

            <Accordion title="Conseil n°6 : Modes Automatiques" icon={<ShieldX className="w-6 h-6" />} variant="danger">
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md">
                     <div className="flex">
                        <div className="flex-shrink-0">
                            <AlertTriangle className="h-5 w-5 text-amber-400" aria-hidden="true" />
                        </div>
                        <div className="ml-3">
                            <h3 className="text-base font-bold text-amber-800">Utilisation en Seconde Intention Uniquement</h3>
                            <p className="mt-1 text-sm text-amber-700">
                                Les modes avec adaptation automatique de pression (dits "hybrides" ou "à VT cible") <strong>peuvent être utilisés en seconde intention</strong>, sous couvert d'une surveillance étroite.
                            </p>
                            <p className="mt-2 text-sm text-amber-700">
                                Leur utilisation n'est <strong>pas recommandée en première intention</strong> car leur efficacité n'est pas supérieure aux modes ST conventionnels, ils peuvent entraîner des variations de pression importantes et leur adaptation est complexe, nécessitant une expertise dans l'analyse des données de ventilation.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-slate-200 pt-3 mt-4">
                    <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                    <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                        <li>Groupe assistance ventilatoire & oxygène (GAVO2). SPLF. 2025.</li>
                    </ul>
                </div>
            </Accordion>

            <Accordion title="Conseils n°7, 8 & 9 : Évaluation, Tolérance et Suivi" icon={<ListChecks className="w-6 h-6" />} variant="default">
                 <p className="mb-4 text-slate-700">Juger si un malade est bien ventilé (Conseil n°7) revient à trouver l'équilibre optimal entre efficacité clinique et tolérance perçue (Conseil n°8).</p>
                <div className="bg-slate-100 p-4 rounded-lg border border-slate-200">
                    <h3 className="text-center font-bold text-xl text-slate-800 mb-4">Patient bien ventilé ?</h3>
                    <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
                        {/* Efficacité */}
                        <div className="w-full md:w-1/2 p-4 bg-white rounded-lg shadow-sm border border-blue-200">
                            <h4 className="font-bold text-lg text-blue-700 mb-3 text-center">Efficacité</h4>
                            <ul className="space-y-2">
                                {efficaciteItems.map(item => (
                                    <ChecklistItem key={item.id} item={item} isChecked={!!checkedItems[item.id]} onToggle={handleToggle} colorClass="text-blue-500" />
                                ))}
                            </ul>
                        </div>
                        {/* Tolérance */}
                         <div className="w-full md:w-1/2 p-4 bg-white rounded-lg shadow-sm border border-green-200">
                            <h4 className="font-bold text-lg text-green-700 mb-3 text-center">Tolérance</h4>
                             <ul className="space-y-2">
                                {toleranceItems.map(item => (
                                    <ChecklistItem key={item.id} item={item} isChecked={!!checkedItems[item.id]} onToggle={handleToggle} colorClass="text-green-500" />
                                ))}
                            </ul>
                        </div>
                    </div>
                     <div className="text-center mt-6">
                         <div className={`p-3 rounded-lg inline-block transition-all duration-300 ${isBienVentile ? 'bg-green-100' : 'bg-slate-200'}`}>
                            <p className="font-semibold">
                                {isBienVentile ? (
                                    <span className="text-green-700 font-bold flex items-center">
                                        <CheckCircle className="w-5 h-5 mr-2"/> OUI, le patient semble bien ventilé !
                                    </span>
                                ) : (
                                    <span className="text-slate-700">
                                        <span className="text-green-600 font-bold">OUI</span> aux deux ? Le patient est bien ventilé. 
                                        <span className="text-red-600 font-bold"> NON</span> ? Investigations complémentaires (voir ci-dessous).
                                    </span>
                                )}
                            </p>
                        </div>
                     </div>
                </div>

                <div className="mt-6 space-y-4">
                    <h4 className="text-xl font-bold text-slate-800 border-b pb-2">
                        Zoom sur les Marqueurs de Correction de l'Hypoventilation Nocturne (Conseil n°7)
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <MarkerCard title="Gaz du Sang (Diurne)" icon={<Activity className="w-5 h-5 text-blue-500" />}>
                            <p>L'objectif est la disparition de l'hypercapnie diurne.</p>
                            <ul className="list-disc list-inside mt-1">
                                <li><b>Cible standard :</b> PaCO₂ inférieur à 45 mmHg.</li>
                                <li><b>Spécificité BPCO :</b> PaCO₂ inférieur à 48 mmHg ou une réduction d'au moins 20% par rapport à la valeur initiale.</li>
                            </ul>
                        </MarkerCard>
                        <MarkerCard title="PtcCO₂ Nocturne" icon={<Calculator className="w-5 h-5 text-purple-500" />}>
                            <p>Permet de suivre efficacement l'hypoventilation nocturne. Sa persistance est un facteur de mauvais pronostic.</p>
                             <p className="mt-1"><b>Exemple de cible :</b> PtcCO₂ supérieur à 49 mmHg pendant inférieur à 10% du temps, et Pic PtcCO₂ inférieur à 55 mmHg.</p>
                        </MarkerCard>
                        <MarkerCard title="Oxymétrie Nocturne" icon={<Heart className="w-5 h-5 text-red-500" />}>
                            <p>Signal indirect et non spécifique. Une désaturation peut être liée à des fuites, des événements obstructifs ou une hypoventilation résiduelle.</p>
                             <p className="mt-1"><b>Critères à surveiller :</b> Temps passé avec SpO₂ inférieur à 90% (cible inférieur à 5% de la nuit), SpO₂ moyenne, nombre de désaturations.</p>
                        </MarkerCard>
                         <MarkerCard title="Index d'Apnées/Hypopnées (IAH)" icon={<Wind className="w-5 h-5 text-teal-500" />}>
                            <p>Cible un index d'événements obstructifs (IEO) résiduel pour s'assurer du contrôle des événements respiratoires nocturnes.</p>
                            <p className="mt-1"><b>Cible :</b> IAH inférieur à 10/h.</p>
                        </MarkerCard>
                    </div>
                </div>

                <div className="mt-6">
                    <AdviceCard title="Conseil n°9 : Investigations en cas de mauvaise ventilation" icon={<Wrench className="w-6 h-6" />} color="amber">
                        <p className="text-sm">Si l'évaluation montre un patient mal ventilé, ne pas le laisser sans investigations complémentaires. Les bilans minimums à envisager sont :</p>
                        <ul className="list-decimal list-inside space-y-1 text-sm mt-2">
                            <li><b>Bilan 1 :</b> Utiliser les <b>données du logiciel machine</b> (avec oxymétrie) pour analyser fuites, obstructions et asynchronismes.</li>
                            <li><b>Bilan 2 :</b> Réaliser une <b>capnie transcutanée nocturne</b> et/ou un dosage sanguin de la <b>réserve alcaline</b>.</li>
                        </ul>
                    </AdviceCard>
                </div>
                <div className="border-t border-slate-200 pt-3 mt-4">
                    <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                    <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                        <li>Groupe assistance ventilatoire & oxygène (GAVO2). SPLF. 2025.</li>
                    </ul>
                </div>
            </Accordion>

            <Accordion title="Conseils n°10 & 11 : Interprétation des Données Logicielles" icon={<Calculator className="w-6 h-6" />} variant="default">
                <p className="mb-4 text-slate-700">L'analyse des données doit toujours être corrélée aux informations cliniques (Conseil n°10) et se faire selon un plan progressif (Conseil n°11).</p>
                <ol className="list-decimal list-inside space-y-2 text-slate-700">
                    <li><b>Identifier le profil d'observance</b> du patient (durée, interruptions).</li>
                    <li><b>Analyser les courbes débit/pression</b> pour rechercher des <b>fuites</b>.</li>
                    <li>Analyser les courbes pour rechercher des <b>événements obstructifs</b>.</li>
                    <li>En l'absence de fuites/obstructions, analyser pour des <b>asynchronies patient-ventilateur</b>.</li>
                    <li>Analyser le <b>tableau des données quantitatives</b> sur une nuit (FR, pressions, VT, % cycles, IAH).</li>
                </ol>
                <div className="border-t border-slate-200 pt-3 mt-4">
                    <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                    <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                        <li>Groupe assistance ventilatoire & oxygène (GAVO2). SPLF. 2025.</li>
                    </ul>
                </div>
            </Accordion>
            
             <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 mt-10">
                <h3 className="text-2xl font-bold text-slate-900 flex items-center">
                    <Home className="w-7 h-7 mr-4 text-indigo-600" />
                    Recommandations Générales : L'Initiation à Domicile
                </h3>
                <p className="mt-2 text-slate-600 text-base">
                   Une évolution majeure des pratiques est la possibilité d'initier la VNI directement au domicile du patient pour certaines indications chroniques stables. Cette approche, non inférieure à l'hospitalisation, réduit les délais, les coûts et est souvent préférée par les patients.
                </p>
                <div className="mt-4 space-y-4">
                    <AdviceCard title="Qui est éligible ?" icon={<Users className="w-6 h-6" />} color="green">
                        <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Patients <strong>stables</strong> (BPCO, SOH, neuromusculaires, restrictifs).</li>
                            <li><strong>Pas d'insuffisance cardiaque sévère</strong> (FEVG inférieur à 45%) ou d'arythmie non contrôlée.</li>
                            <li>Utilisation de la VNI <strong>inférieur à 12h/j</strong>, sans dépendance prévisible d'emblée.</li>
                            <li><strong>Autonomie suffisante</strong> ou présence d'un <strong>aidant motivé et disponible</strong>.</li>
                            <li>Absence de troubles cognitifs majeurs (ou présence d'un aidant).</li>
                        </ul>
                    </AdviceCard>
                    <AdviceCard title="Qui nécessite une vigilance particulière ?" icon={<AlertTriangle className="w-6 h-6" />} color="amber">
                         <p className="text-sm">Une consultation dédiée est nécessaire pour identifier les patients nécessitant une surveillance rapprochée :</p>
                        <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                           <li>Atteinte bulbaire significative.</li>
                           <li>Risque élevé de pneumothorax.</li>
                           <li>Échec antérieur d'une mise en place de PPC ou de VNI.</li>
                           <li>Isolement géographique ou zone sans connectivité.</li>
                        </ul>
                    </AdviceCard>
                    <AdviceCard title="Comment procéder ?" icon={<ListChecks className="w-6 h-6" />} color="blue">
                         <p className="text-sm">La mise en place doit être assurée par un professionnel de santé expert et suivre un protocole standardisé :</p>
                        <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                            <li><strong>Prévoir le temps nécessaire</strong> pour la formation du patient/aidant et les premiers essais.</li>
                            <li><strong>Matériel adapté disponible :</strong> Large gamme d'interfaces, humidificateur, oxymètre, etc.</li>
                            <li><strong>Surveillance rapprochée :</strong> Mettre en place une organisation (ex: télésurveillance) pour adapter les paramètres les premiers jours.</li>
                             <li><strong>Contrôle objectif :</strong> Réaliser une oxymétrie ou capnographie nocturne entre J7 et J15.</li>
                        </ul>
                    </AdviceCard>
                </div>
                 <div className="border-t border-slate-200 pt-3 mt-4">
                    <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                    <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                        <li>Groupe assistance ventilatoire & oxygène (GAVO2). SPLF. 2025.</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}
