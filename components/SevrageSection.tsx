
import React from 'react';
import { TrendingDown, CheckCircle, AlertTriangle, Target, Activity, ListChecks, Calculator, Home, Heart, Users } from './icons';
import { Accordion } from './Accordion';
import { HacorScoreCalculator } from './HacorScoreCalculator';

const CriteriaList: React.FC<{ title: string, criteria: string[], icon: React.ReactNode }> = ({ title, criteria, icon }) => (
    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 h-full">
        <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
            {icon}
            <span className="ml-2">{title}</span>
        </h4>
        <ul className="list-disc list-inside space-y-2 text-slate-700">
            {criteria.map((item, index) => <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>)}
        </ul>
    </div>
);

const PredictorCard: React.FC<{ title: string, value: string, success?: boolean, description?: string }> = ({ title, value, success = true, description }) => {
    const colorClass = success ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500';
    const textColor = success ? 'text-green-800' : 'text-red-800';
    return (
        <div className={`p-3 rounded-lg border-l-4 ${colorClass}`}>
            <p className={`text-sm font-semibold ${textColor}`}>{title}</p>
            <p className="text-lg font-bold text-slate-900" dangerouslySetInnerHTML={{ __html: value }}></p>
            {description && <p className="text-xs text-slate-600 mt-1">{description}</p>}
        </div>
    );
};

const LocationCard: React.FC<{ title: string, details: string[], icon: React.ReactNode, variant: 'icu' | 'hdu' | 'ward' }> = ({ title, details, icon, variant }) => {
    const colors = {
        icu: 'border-red-500 bg-red-50',
        hdu: 'border-yellow-500 bg-yellow-50',
        ward: 'border-green-500 bg-green-50'
    };
    const textColors = {
        icu: 'text-red-800',
        hdu: 'text-yellow-800',
        ward: 'text-green-800'
    }

    return (
        <div className={`p-4 rounded-lg border-l-4 ${colors[variant]}`}>
            <h4 className={`font-semibold ${textColors[variant]} flex items-center text-lg mb-2`}>
                {icon}
                <span className="ml-2">{title}</span>
            </h4>
            <ul className="list-disc list-inside space-y-2 text-slate-700 text-sm">
                {details.map((item, index) => <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>)}
            </ul>
        </div>
    );
};


export const SevrageSection: React.FC = () => (
    <div className="space-y-8 animate-fade-in">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center">
                <TrendingDown className="w-8 h-8 mr-4 text-indigo-600" />
                Sevrage de la VNI
            </h2>
            <p className="mt-2 text-slate-600 text-base">
                Quand et comment arrêter la ventilation non invasive : un processus critique basé sur des critères objectifs pour garantir la sécurité du patient.
            </p>
        </div>

        <Accordion title="Critères d'Initiation au Sevrage" icon={<Target className="w-6 h-6" />} variant="primary">
            <p className="mb-4 text-slate-700">Le sevrage ne doit commencer qu'une fois que le patient est jugé capable de respirer de manière autonome. La décision repose sur une combinaison de critères cliniques et objectifs (Zimnoch et al., 2024).</p>
            <div className="grid md:grid-cols-2 gap-6">
                <CriteriaList title="Critères Cliniques" icon={<CheckCircle className="w-5 h-5 text-slate-600" />} criteria={[
                    "Stabilité de la pathologie ayant nécessité la VNI.",
                    "Toux efficace et sécrétions minimales.",
                    "Absence d'infection aiguë.",
                    "État mental adéquat (éveillé, coopératif)."
                ]} />
                <CriteriaList title="Critères Objectifs" icon={<ListChecks className="w-5 h-5 text-slate-600" />} criteria={[
                    "<b>Stabilité hémodynamique :</b> FC inférieur ou égal à 140/min, PAS 90-160 mmHg, vasopresseurs minimes ou absents.",
                    "<b>Oxygénation adéquate :</b> SpO₂ supérieur ou égal à 90% avec FiO₂ inférieur ou égal à 40%, ou PaO₂/FiO₂ supérieur ou égal à 150.",
                    "<b>Support ventilatoire faible :</b> PEEP inférieur ou égal à 8 cmH₂O.",
                    "<b>Mécanique respiratoire :</b> FR inférieur à 35/min, Vt supérieur ou égal à 5 ml/kg.",
                    "Absence d'épisodes d'apnée significatifs."
                ]} />
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Zimnoch M, et al. J Clin Med. 2024.</li>
                    <li>Ouellette DR, et al. Chest. 2017.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Stratégies et Techniques de Sevrage" icon={<Activity className="w-6 h-6" />} variant="primary">
            <p className="mb-4 text-slate-700">Une fois la décision de sevrage prise, deux stratégies principales existent. Les protocoles de sevrage gérés par les équipes paramédicales ont montré une réduction de la durée de la VNI et du séjour en USI par rapport à un sevrage géré uniquement par les médecins.</p>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-slate-800">1. Sevrage Progressif (Gradual Weaning)</h4>
                    <p className="text-slate-700 mt-1">
                        Stratégie de réduction graduelle du support sur plusieurs heures ou jours. Associée à de bons résultats cliniques, surtout dans l'IRA hypercapnique (ex: BPCO).
                    </p>
                    <div className="bg-slate-50 p-3 mt-2 rounded-lg border text-sm">
                        <p className="font-semibold text-slate-700">Exemple de protocole (d'après Faverio et al.) :</p>
                        <ul className="list-decimal list-inside space-y-1 text-slate-600 pl-2 mt-1">
                           <li><b>Évaluation initiale :</b> Déconnexion de la VNI pendant 1h sous O₂ au masque Venturi.</li>
                           <li><b>Jour 1 :</b> Interruption de la session VNI du matin.</li>
                           <li><b>Jour 2 :</b> Interruption des sessions matin et après-midi.</li>
                           <li><b>Jour 3 :</b> Interruption de toutes les sessions.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-slate-800">2. Sevrage Abrupt (Abrupt Discontinuation)</h4>
                    <p className="text-slate-700 mt-1">
                        C'est la méthode la plus utilisée. La VNI est complètement arrêtée une fois que le patient remplit les critères de sevrage. Bien que potentiellement moins bien tolérée, les études ne montrent pas de différence significative en termes de succès par rapport au sevrage progressif.
                    </p>
                </div>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Faverio P, et al. Can Respir J. 2019.</li>
                    <li>Ouellette DR, et al. Chest. 2017.</li>
                </ul>
            </div>
        </Accordion>

         <Accordion title="Surveillance Essentielle Pendant le Sevrage" icon={<ListChecks className="w-6 h-6" />} variant="primary">
            <p className="mb-4 text-slate-700">Une surveillance rapprochée est indispensable pour détecter précocement les signes d'échec.</p>
             <ul className="list-disc list-inside space-y-3 text-slate-700 pl-2">
                <li><b>Facteurs Patient :</b> Augmentation de l'effort respiratoire, utilisation des muscles accessoires, respiration paradoxale, inconfort, altération de la conscience (signe d'hypercapnie).</li>
                <li><b>Paramètres Physiologiques :</b> Instabilité hémodynamique (tachycardie, variation de PA), polypnée, désaturation.</li>
                <li><b>Données du Ventilateur :</b> Monitorer le Vt (cible 4-6 ml/kg), la ventilation minute, les fuites (inférieur à 25 L/min), et les alarmes (apnée, FR élevée).</li>
                <li><b>Échanges Gazeux :</b> Oxymétrie de pouls continue, et GDS artériels ou veineux pour confirmer la stabilité.</li>
            </ul>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Zimnoch M, et al. J Clin Med. 2024.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Prédicteurs Clés de Succès et d'Échec" icon={<Target className="w-6 h-6" />} variant="primary">
             <p className="mb-4 text-slate-700">Plusieurs scores et paramètres cliniques peuvent aider à prédire l'issue du sevrage et guider la décision clinique.</p>
             <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 className="text-lg font-semibold text-green-800 mb-3">Signes de Succès du Sevrage</h4>
                    <div className="space-y-2">
                        <PredictorCard title="Rapport PaO₂/FiO₂" value="supérieur à 200" description="1h après l'initiation de la VNI" />
                        <PredictorCard title="Fréquence Respiratoire" value="inférieur à 20-22 /min" description="Sans signe de détresse" />
                        <PredictorCard title="pH" value="supérieur à 7.33" />
                        <PredictorCard title="Score de Glasgow" value="supérieur à 13" />
                        <PredictorCard title="Index ROX" value="supérieur à 4.88" description="Après 2h de VNI" />
                        <PredictorCard title="Score HACOR" value="inférieur à 5" />
                    </div>
                </div>
                 <div>
                    <h4 className="text-lg font-semibold text-red-800 mb-3">Signes d'Échec du Sevrage</h4>
                     <div className="space-y-2">
                        <PredictorCard title="Rapport PaO₂/FiO₂" value="inférieur ou égal à 200" success={false} description="Baseline ou à 1h" />
                        <PredictorCard title="Fréquence Respiratoire" value="supérieur ou égal à 30 /min" success={false} />
                        <PredictorCard title="Volume Courant (Vt)" value="supérieur à 9 ml/kg" success={false} />
                        <PredictorCard title="Index ROX" value="inférieur à 4.88" success={false} description="À 12h de VNI" />
                        <PredictorCard title="Score HACOR" value="supérieur à 5" success={false} description="Dans la première heure" />
                        <PredictorCard title="Paramètres techniques" value="Mauvais ajustement du masque, fuites importantes, sécrétions excessives" success={false} />
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
        
        <Accordion title="Aide à la Décision : Protocole de Sevrage Progressif" icon={<ListChecks className="w-6 h-6"/>} variant="default">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <div className="space-y-4 font-sans p-2">
                    <div className="p-4 bg-white border-l-4 border-blue-500 rounded-r-lg shadow-sm">
                        <h3 className="font-bold text-blue-700">1. Critères d'Éligibilité au Sevrage</h3>
                        <ul className="mt-2 list-disc list-inside text-sm text-slate-600">
                        <li>PaO₂/FiO₂ supérieur à 200 mmHg avec FiO₂ inférieur à 0.5</li>
                        <li>pH supérieur à 7.35</li>
                        <li>FR inférieur à 25/min sans muscles accessoires</li>
                        <li>Stabilité hémodynamique</li>
                        </ul>
                    </div>

                    <div className="flex justify-center text-3xl font-bold text-slate-400">↓</div>

                    <div className="p-4 bg-white border-l-4 border-indigo-500 rounded-r-lg shadow-sm">
                        <h3 className="font-bold text-indigo-700">2. Épreuve de Sevrage Initiale (1 heure)</h3>
                        <p className="mt-1 text-sm text-slate-600">Le patient est déconnecté de la VNI et mis sous oxygène via un masque Venturi (objectif SpO₂ 88-92%).</p>
                    </div>

                    <div className="flex justify-center text-3xl font-bold text-slate-400">↓</div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        <div className="p-4 bg-white border-l-4 border-green-500 rounded-r-lg h-full shadow-sm">
                        <h3 className="font-bold text-green-700">Succès de l'Épreuve</h3>
                        <p className="mt-1 text-sm font-semibold text-slate-700">SI le patient tolère le masque Venturi :</p>
                        <ul className="mt-2 list-disc list-inside text-sm text-slate-600">
                            <li>Sans détresse respiratoire</li>
                            <li>SpO₂ supérieur à 88% maintenue</li>
                            <li>Reste stable sur le plan hémodynamique et du pH</li>
                        </ul>
                        <div className="flex justify-center text-2xl font-bold text-green-500 mt-3">↓</div>
                        <div className="mt-3 p-3 bg-green-100 text-green-800 rounded-lg text-center font-semibold">
                            Poursuivre le sevrage structuré (interruption d'une session par jour)
                        </div>
                        </div>

                        <div className="p-4 bg-white border-l-4 border-red-500 rounded-r-lg h-full shadow-sm">
                        <h3 className="font-bold text-red-700">Échec de l'Épreuve</h3>
                        <p className="mt-1 text-sm font-semibold text-slate-700">SI le patient présente :</p>
                        <ul className="mt-2 list-disc list-inside text-sm text-slate-600">
                            <li>Instabilité hémodynamique</li>
                            <li>Détresse respiratoire</li>
                            <li>pH inférieur à 7.35</li>
                        </ul>
                        <div className="flex justify-center text-2xl font-bold text-red-500 mt-3">↓</div>
                        <div className="mt-3 p-3 bg-red-100 text-red-800 rounded-lg text-center font-semibold">
                            Échec du sevrage : Reprendre la VNI
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Faverio P, et al. Can Respir J. 2019.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Calculateur de Score HACOR & Index ROX" icon={<Calculator className="w-6 h-6"/>} variant="default">
            <HacorScoreCalculator />
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Zimnoch M, et al. J Clin Med. 2024.</li>
                </ul>
            </div>
        </Accordion>

         <Accordion title="Gestion de l'Échec du Sevrage" icon={<AlertTriangle className="w-6 h-6" />} variant="danger">
            <p className="mb-4 text-slate-700">La reconnaissance précoce de l'échec est cruciale. <strong>Retarder une intubation nécessaire augmente significativement la mortalité en USI et à l'hôpital.</strong></p>
             <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-500">
                    <thead className="text-xs text-slate-700 uppercase bg-slate-100">
                        <tr>
                            <th scope="col" className="px-4 py-3">Chronologie de l'Échec</th>
                            <th scope="col" className="px-4 py-3">Causes Fréquentes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b">
                            <th scope="row" className="px-4 py-4 font-medium text-slate-900">Échec Immédiat (inférieur à 1h)</th>
                            <td className="px-4 py-4">Rétention de sécrétions, encéphalopathie hypercapnique, intolérance/agitation, asynchronie majeure.</td>
                        </tr>
                        <tr className="bg-slate-50 border-b">
                            <th scope="row" className="px-4 py-4 font-medium text-slate-900">Échec Précoce (1-48h)</th>
                            <td className="px-4 py-4">Anomalies persistantes des échanges gazeux, aggravation de la maladie aiguë, détresse respiratoire non soulagée.</td>
                        </tr>
                        <tr className="bg-white">
                            <th scope="row" className="px-4 py-4 font-medium text-slate-900">Échec Tardif (supérieur à 48h)</th>
                            <td className="px-4 py-4">Souvent lié à une perturbation du sommeil, des comorbidités graves.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
             <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6 rounded-r-md">
                <h5 className="font-bold text-red-800">Action immédiate</h5>
                <p className="text-sm text-red-700">En cas d'échec, il faut rapidement identifier et corriger les causes réversibles (ex: ajustement du masque, gestion des sécrétions, adaptation des réglages). Si aucune amélioration n'est observée, l'escalade vers la ventilation invasive ne doit pas être retardée.</p>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Ouellette DR, et al. Chest. 2017.</li>
                    <li>Zimnoch M, et al. J Clin Med. 2024.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Lieu du Sevrage : Où sevrer en toute sécurité ?" icon={<Home className="w-6 h-6" />} variant="primary">
            <p className="mb-4 text-slate-700">Le lieu du sevrage est un facteur déterminant pour la sécurité du patient. Le choix dépend de la gravité du patient et du niveau de surveillance requis.</p>
            <div className="grid md:grid-cols-1 gap-4">
                <LocationCard 
                    title="Soins Intensifs (ICU)"
                    icon={<Heart className="w-6 h-6 text-red-600"/>}
                    variant="icu"
                    details={[
                        "<b>Avantages :</b> Surveillance la plus rapprochée (ratio 1:1 ou 1:2), monitorage continu (SpO₂, EtCO₂, PA, ECG), équipe multidisciplinaire (intensivistes, infirmières, kinés) disponible immédiatement en cas d'échec.",
                        "<b>Inconvénient :</b> Disponibilité des lits limitée, coût élevé."
                    ]} 
                />
                <LocationCard 
                    title="Unités de Surveillance Continue (HDU / Step-down units)"
                    icon={<Users className="w-6 h-6 text-yellow-600"/>}
                    variant="hdu"
                    details={[
                        "<b>Avantages :</b> Bon compromis entre USI et service conventionnel. Surveillance continue (télémétrie), ratio soignant/patient plus élevé qu'en service. Option coût-efficace.",
                        "<b>Indication :</b> Patients nécessitant une surveillance rapprochée mais ne remplissant pas tous les critères d'admission en USI."
                    ]} 
                />
                <LocationCard 
                    title="Unités de Soins Conventionnelles (General Wards)"
                    icon={<Home className="w-6 h-6 text-green-600"/>}
                    variant="ward"
                    details={[
                        "<b>Défis :</b> Ratio soignant/patient beaucoup plus faible, monitorage continu non systématique. Risque de retard dans la reconnaissance de la détérioration.",
                        "<b>Indication :</b> Patients stables avec des conditions chroniques (ex: apnée du sommeil). L'utilisation de la VNI dans ces unités a été catalysée par la pandémie de COVID-19, avec des données émergentes montrant un bénéfice pour prévenir l'aggravation si une surveillance adéquate est mise en place."
                    ]} 
                />
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Zimnoch M, et al. J Clin Med. 2024.</li>
                </ul>
            </div>
        </Accordion>
    </div>
);
