
import React from 'react';
import { Target, ListChecks, CheckCircle, XCircle, AlertTriangle, Wind, Activity, Users, Shield, Heart, ShieldX } from './icons';
import { Accordion } from './Accordion';

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

export const NmdSelectionSection: React.FC = () => (
    <div className="space-y-6 pt-8">
        <p className="text-slate-700 text-base">
            La VNI par pression positive est la méthode de choix pour le soutien ventilatoire des patients atteints d'insuffisance respiratoire chronique due à une maladie neuromusculaire ou à une pathologie de la paroi thoracique. La sélection rigoureuse des patients est la première étape vers le succès.
        </p>

        <Accordion title="Indications pour la VNI Chronique" icon={<Target className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">La décision d'initier la VNI est basée sur une combinaison de symptômes cliniques et de tests physiologiques objectifs.</p>
            <InfoCard title="Critères d'Initiation" icon={<ListChecks className="w-5 h-5"/>} variant="blue">
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Symptômes d'hypoventilation :</strong> C'est l'indication la plus fréquente. Inclut fatigue, céphalées matinales, dyspnée, hypersomnolence diurne.
                    </li>
                    <li>
                        <strong>Évidence physiologique d'hypoventilation nocturne/diurne :</strong>
                        <ul className="list-['-_'] list-inside pl-4 mt-1 font-semibold">
                            <li>PaCO₂ diurne supérieur ou égal à 45 mmHg</li>
                            <li>OU Hypoventilation nocturne avec désaturation en oxygène (ex: SpO₂ inférieur ou égal à 88% pendant supérieur à 5 minutes en continu) ET symptômes.</li>
                        </ul>
                    </li>
                     <li>
                        <strong>Faiblesse musculaire respiratoire significative :</strong> Surtout dans les maladies progressives comme la SLA, des signes précoces justifient une évaluation.
                        <ul className="list-['-_'] list-inside pl-4 mt-1 font-semibold">
                             <li>CVF inférieur à 50% de la prédite.</li>
                             <li>PIM inférieur à –60 cmH₂O.</li>
                             <li>SNIP inférieur à 40 cmH₂O.</li>
                        </ul>
                    </li>
                </ul>
            </InfoCard>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Khan A, et al. Chest. 2023.</li>
                    <li>Hill NS, et al. UpToDate. 2025.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Contre-indications" icon={<XCircle className="w-6 h-6"/>} variant="danger">
            <p className="text-slate-700 mb-4 text-base">La plupart des contre-indications sont relatives et doivent être évaluées au cas par cas.</p>
             <InfoCard title="Contre-indications Relatives" icon={<AlertTriangle className="w-5 h-5"/>} variant="red">
                <ul className="list-disc list-inside space-y-2">
                    <li>Incapacité à protéger les voies aériennes (troubles de déglutition majeurs, toux inefficace malgré l'assistance).</li>
                    <li>Déformations faciales sévères empêchant l'ajustement d'un masque (des masques sur mesure peuvent être une option).</li>
                    <li>État mental altéré, patient non-coopérant.</li>
                    <li>Sécrétions abondantes et incontrôlables.</li>
                </ul>
            </InfoCard>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                     <li>Hill NS, et al. UpToDate. 2025.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Discussion avec le Patient & Alternatives" icon={<Users className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">Une discussion ouverte sur les avantages, les inconvénients et l'évolution de la maladie est essentielle.</p>
            <div className="grid md:grid-cols-2 gap-4">
                 <InfoCard title="Messages Clés pour le Patient" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Pour les maladies progressives (SLA), la VNI est une <strong>thérapie palliative</strong> qui prolonge la survie et retarde le besoin de trachéotomie.</li>
                        <li>Pour les maladies stables (ex: séquelle de polio), la VNI peut être un traitement <strong>à vie</strong> permettant une bonne qualité de vie.</li>
                        <li>La VNI permet de voyager, parler et manger plus facilement qu'avec une trachéotomie.</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Alternatives à la VNI" icon={<ListChecks className="w-5 h-5"/>} variant="amber">
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>Trachéotomie avec ventilation invasive :</strong> L'alternative principale lorsque la VNI n'est pas possible ou plus suffisante.</li>
                        <li><strong>Stimulation phrénique :</strong> Option très rare, réservée à des cas sélectionnés de paralysie diaphragmatique avec nerf phrénique intact.</li>
                        <li><strong>Ventilation à pression négative :</strong> D'intérêt historique, rarement utilisée aujourd'hui (moins portable, moins efficace).</li>
                        <li><strong>Thérapies de support sans VNI :</strong> Traitement conservateur et soins palliatifs.</li>
                    </ul>
                </InfoCard>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                     <li>Hill NS, et al. UpToDate. 2025.</li>
                </ul>
            </div>
        </Accordion>
    </div>
);
