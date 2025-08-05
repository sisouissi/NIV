
import React from 'react';
import { User, ListChecks, Target, AlertTriangle, Wind, SlidersHorizontal, CheckCircle, Activity, Siren, TrendingUp, Wrench } from './icons';
import { Accordion } from './Accordion';
import { TosDecisionTool } from './TosDecisionTool';

const KeyPointsCard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg shadow-sm">
        <h3 className="font-bold text-lg text-indigo-800 flex items-center mb-3">
            <ListChecks className="w-6 h-6 mr-2" />
            Éléments Clés à Retenir (Recommandations ATS 2019)
        </h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700 text-base">
            {children}
        </ul>
    </div>
);

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; variant: 'blue' | 'green' | 'red' | 'amber' }> = ({ title, children, icon, variant }) => {
    const colors = {
        blue: 'border-blue-500 bg-blue-50 text-blue-800',
        green: 'border-green-500 bg-green-50 text-green-800',
        red: 'border-red-500 bg-red-50 text-red-800',
        amber: 'border-amber-500 bg-amber-50 text-amber-800'
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


export const VniSohSection: React.FC = () => {
  return (
    <div className="space-y-8 pt-8">
        <KeyPointsCard>
            <li>Le SOH est défini par l'obésité (IMC supérieur ou égal à 30), une hypercapnie diurne (PaCO₂ supérieur ou égal à 45 mmHg) et un trouble respiratoire du sommeil, après exclusion d'autres causes.</li>
            <li>Pour les patients ambulatoires stables avec un SOH et un <strong>SAOS sévère (IAH supérieur ou égal à 30), la CPAP est le traitement de première intention</strong>, pas la VNI.</li>
            <li>La <strong>VNI (Bi-level PAP)</strong> est réservée aux patients SOH avec une hypoventilation non-obstructive, en cas d'échec de la CPAP, ou en cas de décompensation aiguë.</li>
            <li>Les patients hospitalisés pour une décompensation aiguë doivent être <strong>systématiquement mis sous VNI et sortis de l'hôpital avec</strong>, en attendant une polysomnographie. Cette stratégie réduit drastiquement la mortalité à 3 mois.</li>
            <li>La <strong>perte de poids</strong> (25-30%) est le seul traitement curatif et doit être systématiquement proposée, incluant la discussion sur la chirurgie bariatrique.</li>
        </KeyPointsCard>

        <Accordion title="Définition, Diagnostic et Physiopathologie" icon={<ListChecks className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">Le SOH est la forme la plus sévère de compromis respiratoire lié à l'obésité. Il est souvent sous-diagnostiqué, avec des conséquences graves en termes de mortalité et de comorbidités (insuffisance cardiaque, HTP).</p>
            <div className="grid md:grid-cols-2 gap-6">
                <InfoCard title="Diagnostic" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                    <p>Le diagnostic repose sur 3 piliers :</p>
                    <ol className="list-decimal list-inside mt-2 space-y-1">
                        <li><strong>Obésité :</strong> IMC supérieur ou égal à 30 kg/m².</li>
                        <li><strong>Hypercapnie diurne :</strong> PaCO₂ supérieur ou égal à 45 mmHg à l'état vigile, confirmée par gazométrie artérielle.</li>
                        <li><strong>Trouble Respiratoire du Sommeil :</strong> Démontré par polysomnographie. Environ 90% des patients ont un SAOS associé (70% ont un SAOS sévère).</li>
                    </ol>
                    <p className="mt-2 font-semibold">Le dosage des bicarbonates sériques est un excellent outil de dépistage : un taux <strong>inférieur à 27 mmol/L</strong> rend le SOH très improbable.</p>
                </InfoCard>
                <InfoCard title="Physiopathologie" icon={<Activity className="w-5 h-5"/>} variant="blue">
                    <p>C'est une maladie multifactorielle :</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li><strong>Mécanique restrictive :</strong> L'obésité réduit les volumes pulmonaires et augmente le travail respiratoire.</li>
                        <li><strong>Altération de la commande centrale :</strong> Une réponse ventilatoire au CO₂ émoussée et une résistance à la leptine (stimulant respiratoire) contribuent à l'hypoventilation.</li>
                        <li><strong>SAOS sévère :</strong> Les apnées/hypopnées répétées durant la nuit entraînent une accumulation de CO₂ qui n'est pas éliminé avant l'événement suivant, menant à une hypercapnie chronique.</li>
                    </ul>
                </InfoCard>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Mokhlesi B, et al. Am J Respir Crit Care Med. 2019.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Le Choix Thérapeutique Initial : CPAP vs VNI (Bi-level)" icon={<Target className="w-6 h-6"/>} variant="primary">
             <p className="text-slate-700 mb-4 text-base">C'est le point central des recommandations. Contrairement aux idées reçues, la VNI n'est pas le traitement de première ligne pour la majorité des patients SOH stables.</p>
             <div className="grid md:grid-cols-2 gap-6">
                <InfoCard title="CPAP en Première Ligne" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                    <p className="font-semibold">Pour les patients SOH stables avec un SAOS sévère concomitant (IAH supérieur ou égal à 30), ce qui représente ~70% des cas.</p>
                    <p className="mt-2">Plusieurs essais randomisés ont montré que la CPAP est <strong>aussi efficace que la VNI</strong> pour améliorer l'hypercapnie, la somnolence et la qualité de vie, avec un coût moindre.</p>
                    <p className="mt-2"><strong>Mécanisme :</strong> En levant l'obstruction, la CPAP permet au patient de "récupérer" et de normaliser sa ventilation, corrigeant l'hypercapnie accumulée.</p>
                </InfoCard>
                <InfoCard title="VNI (Bi-level) en Première Ligne" icon={<Target className="w-5 h-5"/>} variant="amber">
                    <p className="font-semibold">Pour la minorité (~10-30%) de patients SOH qui présentent une hypoventilation nocturne prédominante SANS SAOS sévère, ou pour les patients en décompensation aiguë.</p>
                    <p className="mt-2">Dans ces cas, le problème n'est pas (ou pas seulement) l'obstruction, mais un défaut de commande ou une fatigue musculaire qui nécessite un support ventilatoire <strong>actif</strong>.</p>
                </InfoCard>
            </div>
             <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-6 rounded-r-md">
                <h5 className="font-bold text-amber-800 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Quand passer de la CPAP à la VNI ?
                </h5>
                <p className="text-sm text-amber-700 mt-2">
                   Une VNI (Bi-level) est indiquée en seconde ligne si, malgré une bonne observance de la CPAP et une correction des événements obstructifs, le patient présente une <strong>hypercapnie diurne persistante</strong> ou une <strong>hypoventilation/désaturation nocturne significative</strong> (supérieur à plusieurs minutes à inférieur à 88%).
                </p>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Mokhlesi B, et al. Am J Respir Crit Care Med. 2019.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Protocoles de Traitement et Suivi" icon={<SlidersHorizontal className="w-6 h-6"/>} variant="default">
             <p className="text-slate-700 mb-4 text-base">Les objectifs thérapeutiques sont clairs : normaliser la PaCO₂, éliminer les désaturations et soulager les symptômes.</p>
             <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li><strong>Titration de la CPAP :</strong> Les réglages initiaux sont similaires à ceux du SAOS classique. L'objectif est de normaliser l'IAH. Un suivi gazométrique à 1-3 mois est crucial pour vérifier la correction de l'hypercapnie.</li>
                <li><strong>Titration de la VNI (Bi-level) :</strong> L'EPAP est augmentée pour résoudre l'obstruction. L'IPAP est ensuite augmentée pour augmenter le volume courant et "laver" le CO₂, jusqu'à la résolution des hypopnées et des désaturations. Une fréquence de secours est souvent utilisée.</li>
                <li><strong>Suivi (Assessing Treatment Response) :</strong>
                    <ul className="list-['-_'] list-inside pl-4 mt-1">
                        <li><strong>Clinique :</strong> Évaluation de l'adhérence, des symptômes (somnolence, dyspnée) dans le premier mois.</li>
                        <li><strong>Gazométrique :</strong> Gaz du sang artériels à 1-3 mois pour confirmer l'amélioration de l'hypercapnie. L'échec à améliorer la PaCO₂ doit faire revoir les réglages et l'observance.</li>
                        <li><strong>Polysomnographie de contrôle :</strong> Si des symptômes persistent, pour rechercher des événements résiduels ou une hypoventilation persistante.</li>
                    </ul>
                </li>
             </ul>
             <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Mokhlesi B, et al. Am J Respir Crit Care Med. 2019.</li>
                    <li>Martin TJ, et al. UpToDate. 2025.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Cas Particulier : Le SOH en Décompensation Aiguë" icon={<Siren className="w-6 h-6"/>} variant="danger">
            <p className="text-slate-700 mb-4 text-base">De nombreux patients SOH sont diagnostiqués lors d'une hospitalisation pour insuffisance respiratoire aiguë hypercapnique.</p>
            <InfoCard title="Recommandation Forte : VNI à l'Hôpital ET à la Sortie" icon={<Siren className="w-5 h-5"/>} variant="red">
                <p>La VNI (Bi-level PAP) est le traitement de choix pour la phase aiguë. Plus important encore, les recommandations de l'ATS sont formelles :</p>
                <p className="mt-2 font-bold">"Nous suggérons que les patients hospitalisés avec une insuffisance respiratoire et une suspicion de SOH soient mis sous VNI et soient renvoyés à domicile avec une VNI en attendant une évaluation et une titration ambulatoire."</p>
                <p className="mt-2">Cette stratégie, basée sur une méta-analyse de données individuelles, a montré une <strong>réduction drastique de la mortalité à 3 mois (risque relatif de 0.12)</strong> par rapport aux patients renvoyés sans support ventilatoire.</p>
            </InfoCard>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Mokhlesi B, et al. Am J Respir Crit Care Med. 2019.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Traitement Adjuvant Essentiel : La Perte de Poids" icon={<TrendingUp className="w-6 h-6"/>} variant="default">
            <p className="text-slate-700 mb-4 text-base">La thérapie par pression positive traite les conséquences du SOH, mais la perte de poids traite sa cause.</p>
            <InfoCard title="Objectif : Résolution du SOH" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                <p>Une perte de poids <strong>soutenue de 25% à 30% du poids corporel total</strong> est nécessaire pour obtenir une résolution ou une amélioration cliniquement significative de l'hypoventilation.</p>
                <p className="mt-2">Ce niveau de perte de poids est rarement atteint avec les seules interventions sur le mode de vie. Par conséquent, la <strong>chirurgie bariatrique</strong> doit être considérée comme une option thérapeutique efficace pour les patients SOH éligibles, une fois stabilisés sous PAP.</p>
            </InfoCard>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Mokhlesi B, et al. Am J Respir Crit Care Med. 2019.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Outil d'Aide à la Décision Clinique" icon={<Wrench className="w-6 h-6"/>} variant="default">
            <TosDecisionTool />
        </Accordion>
    </div>
  );
};
