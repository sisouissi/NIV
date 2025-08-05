
import React from 'react';
import { Target, AlertTriangle, Wind, CheckCircle, XCircle, Shield, TrendingDown } from './icons';
import { Accordion } from './Accordion';

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; variant: 'green' | 'red' }> = ({ title, children, icon, variant }) => {
    const colors = {
        green: 'border-green-500 bg-green-50 text-green-800',
        red: 'border-red-500 bg-red-50 text-red-800'
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

export const BpcoPousseeAigue: React.FC = () => {
  return (
    <div className="space-y-6 pt-8">
        <p className="text-slate-700 text-base">
            Dans le cadre d'une exacerbation de BPCO avec insuffisance respiratoire aiguë hypercapnique (IRAH), la VNI est une intervention d'urgence qui a prouvé son efficacité pour réduire la mortalité et le besoin d'intubation.
        </p>

        <Accordion title="Indications & Recommandations (ERS/ATS 2017)" icon={<CheckCircle className="w-6 h-6"/>} variant="success">
            <div className="bg-green-100 border border-green-300 p-4 rounded-lg shadow-sm">
                <p className="font-bold text-green-800">RECOMMANDATION FORTE (faible qualité de preuve)</p>
                <p className="text-slate-700 mt-2">
                    Il est recommandé d'utiliser la VNI chez les patients hospitalisés pour une IRAH due à une exacerbation de BPCO.
                </p>
            </div>
            <div className="mt-4">
                <h4 className="font-semibold text-slate-800 mb-2">Critères d'initiation :</h4>
                <p>La VNI doit être débutée si l'acidose respiratoire persiste malgré un traitement médical optimal bien conduit (oxygénothérapie contrôlée, bronchodilatateurs, corticostéroïdes) :</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-slate-700">
                    <li><strong>pH inférieur à 7.35 ET PaCO₂ supérieur à 45 mmHg (6.5 kPa)</strong></li>
                    <li>Associé à une dyspnée sévère avec signes de fatigue musculaire (respiration paradoxale, utilisation des muscles accessoires).</li>
                </ul>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>ERS/ATS Guideline on management of COPD exacerbations. 2017.</li>
                    <li>Ergan B, et al. Eur Respir J. 2019.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Bénéfices Démontrés (ERS/ATS)" icon={<TrendingDown className="w-6 h-6"/>} variant="default">
             <InfoCard title="La VNI réduit de manière significative :" icon={<Shield className="w-5 h-5"/>} variant="green">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Le besoin d'intubation endotrachéale.</strong></li>
                    <li><strong>La mortalité hospitalière.</strong></li>
                    <li>La durée de séjour à l'hôpital et en soins intensifs.</li>
                    <li>Le risque de complications associées aux soins (ex: pneumonie nosocomiale).</li>
                </ul>
            </InfoCard>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Ergan B, et al. Eur Respir J. 2019.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Contre-indications & Critères d'Exclusion" icon={<XCircle className="w-6 h-6"/>} variant="danger">
            <p className="text-slate-700 mb-4">Basées sur les critères d'exclusion des principaux essais cliniques. La présence d'un de ces critères doit faire discuter l'intubation d'emblée.</p>
             <InfoCard title="Contre-indications Absolues" icon={<XCircle className="w-5 h-5"/>} variant="red">
                <ul className="list-disc list-inside space-y-1">
                    <li>Arrêt respiratoire imminent.</li>
                    <li>Incapacité à protéger ses voies aériennes (coma, troubles de déglutition majeurs).</li>
                    <li>Instabilité hémodynamique sévère (choc non contrôlé, arythmies malignes).</li>
                    <li>Traumatisme facial majeur, chirurgie faciale ou œsophagienne récente.</li>
                    <li>Obstruction des voies aériennes supérieures.</li>
                    <li>Patient non-coopérant ou agité.</li>
                </ul>
            </InfoCard>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Ergan B, et al. Eur Respir J. 2019.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="L'Objectif Crucial de l'Oxygénation : Cible SpO₂ 88-92%" icon={<Target className="w-6 h-6"/>} variant="default">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <h4 className="font-bold text-lg text-amber-800 flex items-center mb-3">
                    <AlertTriangle className="w-6 h-6 mr-2" />
                    La Règle d'Or
                </h4>
                <p className="text-slate-700">
                    L'objectif de saturation en oxygène pour TOUS les patients en AHRF (Acute Hypercapnic Respiratory Failure) est de <strong>88-92%</strong>. L'hyperoxie est délétère et peut aggraver l'hypercapnie et l'acidose, augmentant la mortalité.
                </p>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>GOLD Report. 2025.</li>
                    <li>COPD-X Plan Guidelines. 2024.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Réglages Initiaux et Titration" icon={<Wind className="w-6 h-6"/>} variant="default">
            <div className="overflow-x-auto my-4">
                <table className="w-full text-left border-collapse text-sm">
                    <thead className="bg-slate-100"><tr className="text-xs text-slate-700 uppercase"><th className="p-3 border">Paramètre</th><th className="p-3 border">Réglage Initial</th><th className="p-3 border">Objectifs de Titration</th></tr></thead>
                    <tbody>
                        <tr className="bg-white"><td className="p-2 border font-semibold">EPAP (PEP)</td><td className="p-2 border"><strong>4-5 cmH₂O</strong></td><td className="p-2 border">Contrebalancer l'auto-PEEP intrinsèque.</td></tr>
                        <tr className="bg-slate-50"><td className="p-2 border font-semibold">IPAP</td><td className="p-2 border"><strong>10-15 cmH₂O</strong></td><td className="p-2 border">Augmenter progressivement jusqu'à <strong>20-30 cmH₂O</strong> pour obtenir un VTe de 6-8 ml/kg et une diminution de la FR.</td></tr>
                         <tr className="bg-white"><td className="p-2 border font-semibold">Fréq. de Sécurité</td><td className="p-2 border"><strong>12-16 /min</strong></td><td className="p-2 border">Juste en dessous de la FR spontanée du patient.</td></tr>
                    </tbody>
                </table>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Groupe assistance ventilatoire & oxygène (GAVO2). SPLF. 2025.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Surveillance et Critères d'Échec" icon={<AlertTriangle className="w-6 h-6"/>} variant="danger">
            <p className="text-slate-700 mb-4">Le succès ou l'échec de la VNI se juge dans les <strong>1 à 2 premières heures</strong>. Un échec non reconnu conduit à une intubation retardée et une augmentation de la mortalité.</p>
            <div className="grid md:grid-cols-2 gap-6">
                <InfoCard title="Signes de Succès" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                    <ul className="list-disc list-inside">
                        <li>Amélioration du pH et de la PaCO₂.</li>
                        <li>Diminution de la fréquence respiratoire.</li>
                        <li>Amélioration de la conscience et du confort.</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Signes d'Échec" icon={<XCircle className="w-5 h-5"/>} variant="red">
                     <ul className="list-disc list-inside">
                        <li>Pas d'amélioration ou aggravation des GDS.</li>
                        <li>FR supérieur à 30/min persistante.</li>
                        <li>Agitation, épuisement.</li>
                        <li>Instabilité hémodynamique.</li>
                    </ul>
                </InfoCard>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6 rounded-r-md">
                <h5 className="font-bold text-red-800">Ne pas retarder l'intubation !</h5>
                <p className="text-sm text-red-700">L'échec de la VNI dans ce contexte est un facteur de surmortalité. Si les critères de succès ne sont pas atteints rapidement, l'escalade vers la ventilation invasive ne doit pas être différée.</p>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Ergan B, et al. Eur Respir J. 2019.</li>
                    <li>Ouellette DR, et al. Chest. 2017.</li>
                </ul>
            </div>
        </Accordion>
    </div>
  );
};
