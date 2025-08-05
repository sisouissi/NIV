
import React from 'react';
import { Lungs, BrainCircuit, ShieldX, User, TrendingUp, AlertTriangle, CheckCircle, Target, XCircle, ListChecks, Activity, Wind, TrendingDown } from './icons';
import { Accordion } from './Accordion';

const KeyPointsCard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg shadow-sm">
        <h3 className="font-bold text-lg text-blue-800 flex items-center mb-3">
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

const StrategyComparisonCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; variant: 'good' | 'bad' }> = ({ title, children, icon, variant }) => {
    const colors = {
        good: 'border-green-500 bg-green-50 text-green-800',
        bad: 'border-red-500 bg-red-50 text-red-800'
    };

    return (
         <div className={`p-4 rounded-lg border-l-4 ${colors[variant]} h-full shadow-sm`}>
            <h4 className="font-semibold text-lg flex items-center mb-3">
                {icon}
                <span className="ml-2">{title}</span>
            </h4>
            <div className="text-slate-700 space-y-2 text-base">{children}</div>
        </div>
    );
};

export const IraHypoxiqueSection: React.FC = () => {
  return (
    <div className="space-y-6 pt-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center">
                <Lungs className="w-7 h-7 mr-3 text-blue-600" />
                Focus sur l'Insuffisance Respiratoire Aiguë Hypoxémique
            </h3>
            <p className="mt-2 text-slate-600 text-base">
                La VNI dans l'IRA hypoxémique (IRA-H) est un sujet controversé avec un taux d'échec élevé. Son succès dépend d'une sélection rigoureuse des patients, du choix de l'interface et d'une stratégie de ventilation adaptée.
            </p>
        </div>

        <KeyPointsCard>
            <li>L'IRA-H est une urgence vitale nécessitant une stabilisation et une oxygénation immédiates.</li>
            <li>Pour le support respiratoire avancé, l'<strong>Oxygénothérapie à Haut Débit (OHD/HFNC)</strong> est souvent préférée en première intention à la VNI pour l'IRA-H <i>de novo</i> en raison de sa meilleure tolérance.</li>
            <li>L'objectif principal est d'éviter le <strong>P-SILI</strong> (Patient-Self Inflicted Lung Injury), une lésion pulmonaire auto-infligée par des efforts respiratoires excessifs.</li>
            <li>Si la VNI est choisie, le <strong>casque (helmet)</strong> a montré sa supériorité sur le masque facial pour réduire le taux d'intubation.</li>
            <li>L'échec doit être reconnu très tôt (<strong>dans les 1-2 premières heures</strong>) pour ne pas retarder une intubation, ce qui augmente la mortalité. La cible de SpO₂ est de <strong>90-96%</strong>.</li>
        </KeyPointsCard>

        <Accordion title="Prise en Charge Initiale (Triage & Traitement)" icon={<Activity className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">
                Face à une hypoxémie aiguë, une action simultanée et rapide est nécessaire pour stabiliser le patient, l'oxygéner et initier un traitement empirique.
            </p>
            <ol className="list-decimal list-inside space-y-3 text-slate-700 text-base">
                <li><strong>Évaluer et stabiliser l'ABC (Airway, Breathing, Circulation) :</strong> Assurer la liberté des voies aériennes, évaluer la respiration, stabiliser la tension artérielle et le rythme cardiaque.</li>
                <li><strong>Administrer immédiatement de l'oxygène :</strong> L'objectif initial est une SpO₂ supérieur à 90%. La méthode d'administration dépend de la gravité (voir ci-dessous).</li>
                <li><strong>Traiter la cause présumée :</strong> Initier un traitement empirique (ex: diurétiques pour un OAP, antibiotiques pour une pneumonie) sans attendre la confirmation diagnostique complète.</li>
            </ol>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Zimnoch M, et al. J Clin Med. 2024.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Stratégie de Support Respiratoire : OHD vs VNI" icon={<Wind className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">
                Pour les patients nécessitant un support avancé, le choix se porte principalement entre l'Oxygénothérapie à Haut Débit (OHD, ou HFNC) et la VNI.
            </p>
             <div className="grid md:grid-cols-2 gap-6">
                <InfoCard title="OHD (HFNC) en Première Ligne" icon={<CheckCircle className="w-5 h-5 text-green-600"/>} variant="green">
                    <p className="font-semibold">L'OHD est souvent préférée en première intention pour l'IRA-H *de novo*.</p>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><strong>Avantages :</strong> Mieux tolérée, confortable, permet de parler/manger, réduit l'espace mort anatomique, fournit une PEEP modeste mais efficace.</li>
                        <li><strong>Efficacité :</strong> Améliore l'oxygénation et le confort. Plusieurs méta-analyses montrent une réduction du besoin d'intubation par rapport à l'oxygénothérapie standard.</li>
                    </ul>
                </InfoCard>
                 <InfoCard title="VNI en Seconde Ligne ou Indications Spécifiques" icon={<Target className="w-5 h-5 text-amber-600"/>} variant="amber">
                    <p className="font-semibold">La VNI est indiquée s'il existe un bénéfice connu et pas de contre-indications.</p>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><strong>Indications :</strong> OAP cardiogénique, exacerbation de BPCO avec hypercapnie associée, ou échec de l'OHD.</li>
                        <li><strong>Recommandation :</strong> Un essai de VNI doit être court (1-2h) avec une surveillance très stricte pour ne pas retarder une intubation si nécessaire.</li>
                    </ul>
                </InfoCard>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Aswanetmanee P, et al. Sci Rep. 2023.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Physiopathologie et Enjeux : Le P-SILI" icon={<BrainCircuit className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">
                Contrairement à l'IRA hypercapnique, l'IRA-H est caractérisée par un <strong>drive respiratoire très élevé</strong>. Cet effort intense peut aggraver les lésions pulmonaires, un concept connu sous le nom de <strong>P-SILI (Patient-Self Inflicted Lung Injury)</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
                <InfoCard title="Le Mécanisme du P-SILI" icon={<AlertTriangle className="w-5 h-5"/>} variant="amber">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Le patient génère de fortes pressions négatives pleurales.</li>
                        <li>Ceci mène à des volumes courants (Vt) très élevés et à une distribution hétérogène de la ventilation.</li>
                        <li><strong>Conséquence :</strong> Volotraumatisme, barotraumatisme et atélectotraumatisme, aggravant l'œdème et l'inflammation. Un <strong>Vt supérieur à 9 ml/kg</strong> est un facteur de risque majeur d'échec de la VNI.</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Le Risque de l'Intubation Retardée" icon={<ShieldX className="w-5 h-5"/>} variant="red">
                     <p>La VNI peut masquer les signes de détérioration. Si elle échoue et que l'intubation est retardée, la <strong>mortalité augmente de façon significative</strong>. L'objectif est donc d'identifier très tôt les non-répondeurs.</p>
                </InfoCard>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Criner GJ, et al. Eur Respir J. 2024.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Le Choix Crucial de l'Interface" icon={<User className="w-6 h-6"/>} variant="primary">
            <p className="mb-4 text-slate-700 text-base">Dans l'IRA-H, le choix de l'interface est peut-être le facteur le plus déterminant du succès.</p>
            <div className="grid lg:grid-cols-2 gap-6">
                 <InfoCard title="Casque (Helmet)" icon={<CheckCircle className="w-5 h-5 text-green-600"/>} variant="green">
                    <p className="font-semibold">Supérieur au masque dans plusieurs études pour l'IRA-H.</p>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><strong>Avantages :</strong> Meilleure tolérance, moins de fuites, pas de lésions cutanées, permet une <strong>PEEP plus élevée</strong>. Associé à une <strong>réduction du taux d'intubation</strong>.</li>
                        <li><strong>Inconvénients :</strong> Espace mort important (nécessite un débit de gaz élevé supérieur à 40-60 L/min pour éviter la réinhalation de CO₂), bruit, asynchronie.</li>
                    </ul>
                </InfoCard>
                 <InfoCard title="Masque Naso-buccal" icon={<AlertTriangle className="w-5 h-5 text-amber-600"/>} variant="amber">
                    <p className="font-semibold">Utilisation plus délicate dans l'IRA-H "de novo".</p>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><strong>Avantages :</strong> Mise en place rapide, largement disponible.</li>
                        <li><strong>Inconvénients :</strong> Fuites fréquentes, inconfort, lésions cutanées, limitation de la PEEP applicable. Dans l'étude FLORALI, le masque était associé à une mortalité plus élevée que l'oxygénothérapie à haut débit (OHD).</li>
                    </ul>
                </InfoCard>
            </div>
             <p className="text-sm text-center mt-4 text-slate-500 italic">L'oxygénothérapie à haut débit (OHD) est une alternative de premier plan, souvent mieux tolérée et parfois plus efficace que le masque facial.</p>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Aswanetmanee P, et al. Sci Rep. 2023.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Un Nouveau Paradigme pour les Réglages" icon={<TrendingUp className="w-6 h-6"/>} variant="primary">
            <p className="mb-4 text-slate-700 text-base">L'approche classique de "protection" pulmonaire en VNI (faible aide inspiratoire pour limiter le Vt) est remise en cause dans l'IRA-H, car elle peut être délétère.</p>
            <div className="grid md:grid-cols-2 gap-6">
                <StrategyComparisonCard title="Stratégie à Éviter : Faible Aide Inspiratoire" icon={<XCircle className="w-6 h-6"/>} variant="bad">
                    <p>Appliquer une faible Aide Inspiratoire (inférieur ou égal à 5 cmH₂O) pour cibler un "petit" Vt est souvent contre-productif.</p>
                    <p className="mt-2">Le patient, avec son drive élevé, compense en augmentant son propre effort, ce qui maintient un Vt élevé et de fortes pressions transpulmonaires, aggravant le P-SILI.</p>
                </StrategyComparisonCard>
                <StrategyComparisonCard title="Stratégie à Privilégier : Un Soutien Actif" icon={<CheckCircle className="w-6 h-6"/>} variant="good">
                    <p><strong>Objectif : Mettre au repos les muscles respiratoires.</strong></p>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><strong>AI plus élevée (10-15 cmH₂O) :</strong> Pour décharger le travail respiratoire du patient et réduire son effort.</li>
                        <li><strong>PEEP plus élevée (10-12 cmH₂O) :</strong> Pour recruter les alvéoles, homogénéiser la ventilation et rendre l'effort du patient moins "lésionnel".</li>
                    </ul>
                </StrategyComparisonCard>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Criner GJ, et al. Eur Respir J. 2024.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Surveillance de l'Échec : La Règle de la Première Heure" icon={<Target className="w-6 h-6"/>} variant="primary">
            <p className="mb-4 text-slate-700 text-base">L'échec doit être anticipé et détecté précocement. La première heure de VNI est pronostique.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                <InfoCard title="Objectifs de Surveillance" icon={<Target className="w-5 h-5"/>} variant="blue">
                    <p>Pour la population générale en IRA-H, la cible de SpO₂ est de <strong>90 à 96%</strong>. L'hyperoxie doit être évitée.</p>
                </InfoCard>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                        <AlertTriangle className="w-5 h-5 mr-2" />
                        Signes d'Alarme = Intubation
                    </h4>
                    <ul className="space-y-2 text-red-700 text-base">
                        <li className="flex items-start"><ShieldX className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"/><span>Absence d'amélioration de la FR ou de la dyspnée.</span></li>
                        <li className="flex items-start"><ShieldX className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"/><span>Score HACOR supérieur à 5 après 1h.</span></li>
                        <li className="flex items-start"><ShieldX className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"/><span>Persistance d'un Vt élevé (supérieur à 9 ml/kg).</span></li>
                        <li className="flex items-start"><ShieldX className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"/><span>Désaturation ou aggravation du rapport P/F ou S/F.</span></li>
                        <li className="flex items-start"><ShieldX className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"/><span>Instabilité hémodynamique.</span></li>
                        <li className="flex items-start"><ShieldX className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"/><span>Altération de la conscience.</span></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Zimnoch M, et al. J Clin Med. 2024.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Méta-analyse Clé (Aswanetmanee et al., 2023)" icon={<ListChecks className="w-6 h-6"/>} variant="default">
            <div className="space-y-4">
                <p className="text-slate-700 text-base">
                    Cette méta-analyse de 17 essais contrôlés randomisés (1738 patients) a évalué l'efficacité de la VNI comparée à l'oxygénothérapie conventionnelle ou à haut débit (OHD) dans l'IRA-H.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-green-50 border-green-500 border-l-4 p-4 rounded-r-lg">
                        <div className="flex items-center text-green-800 mb-2">
                            <TrendingDown className="w-6 h-6 mr-2"/>
                            <h4 className="font-bold">Baisse de l'Intubation</h4>
                        </div>
                        <p className="text-base text-slate-600">La VNI réduit le risque d'intubation (RR 0.68), bien qu'avec une faible certitude de preuve.</p>
                    </div>
                     <div className="bg-amber-50 border-amber-500 border-l-4 p-4 rounded-r-lg">
                        <div className="flex items-center text-amber-800 mb-2">
                           <XCircle className="w-6 h-6 mr-2"/>
                            <h4 className="font-bold">Pas d'Effet sur la Mortalité</h4>
                        </div>
                        <p className="text-base text-slate-600">Aucune différence significative sur la mortalité en USI ou à l'hôpital n'a été démontrée.</p>
                    </div>
                     <div className="bg-purple-50 border-purple-500 border-l-4 p-4 rounded-r-lg">
                         <div className="flex items-center text-purple-800 mb-2">
                           <User className="w-6 h-6 mr-2"/>
                            <h4 className="font-bold">Supériorité du Casque</h4>
                        </div>
                        <p className="text-base text-slate-600">Le casque est significativement plus efficace que le masque facial pour éviter l'intubation.</p>
                    </div>
                </div>
                <div className="bg-slate-100 p-4 mt-4 rounded-lg border border-slate-200">
                    <h4 className="font-semibold text-slate-800">Conclusion Clinique</h4>
                    <p className="text-slate-700 mt-2 text-base">
                        La VNI, en particulier avec un <strong>casque</strong>, est une stratégie prometteuse pour éviter l'intubation trachéale chez les patients en IRA hypoxémique. Cependant, elle n'a pas d'effet démontré sur la mortalité. La sélection des patients et de l'interface reste donc primordiale.
                    </p>
                </div>
            </div>
             <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Aswanetmanee P, et al. Sci Rep. 2023.</li>
                </ul>
            </div>
        </Accordion>
    </div>
  );
};
