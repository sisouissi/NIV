
import React from 'react';
import { Activity, Users, CheckCircle, AlertTriangle, TrendingUp, TrendingDown, ShieldX, Wind, Wrench, Heart, User } from './icons';
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

export const NmdFollowUpSection: React.FC = () => (
    <div className="space-y-6 pt-8">
        <p className="text-slate-700 text-base">
            Après l'initiation, une phase d'adaptation de plusieurs semaines est cruciale. Le suivi régulier permet d'optimiser le traitement, de gérer les complications et d'adapter la VNI à l'évolution de la maladie.
        </p>

        <Accordion title="Phase d'Adaptation et Évaluation à 4-6 Semaines" icon={<Users className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">
                Les premières semaines sont les plus difficiles. L'objectif est que le patient utilise la VNI au moins 4-5 heures par nuit.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
                <InfoCard title="Évaluation des Symptômes et de la Tolérance" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>Heures d'utilisation :</strong> Interrogatoire et données du ventilateur.</li>
                        <li><strong>Symptômes d'hypoventilation :</strong> Amélioration de la fatigue, des céphalées matinales, de la dyspnée ?</li>
                        <li><strong>Intolérance/Complications :</strong> Inconfort du masque, sécheresse nasale, fuites, etc.</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Évaluation des Échanges Gazeux" icon={<Activity className="w-5 h-5"/>} variant="blue">
                    <p className="font-semibold">Objectifs cibles :</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li><strong>PaCO₂ diurne :</strong> Normale ou quasi-normale. Une PaCO₂ jusqu'à 60 mmHg peut être acceptée si les symptômes sont bien contrôlés.</li>
                        <li><strong>SpO₂ nocturne :</strong> supérieur ou égal à 90% pendant supérieur ou égal à 95% du temps de sommeil.</li>
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

        <Accordion title="Gestion de l'Intolérance et des Complications Courantes" icon={<Wrench className="w-6 h-6"/>} variant="primary">
            <div className="grid md:grid-cols-2 gap-4">
                <InfoCard title="Inconfort/Ulcérations du Masque" icon={<User className="w-5 h-5"/>} variant="amber">
                    <ul className="list-disc list-inside">
                        <li>Minimiser la tension des sangles.</li>
                        <li>Utiliser des protections cutanées (hydrocolloïde).</li>
                        <li>Changer d'interface (masque en mousse, narinaires).</li>
                        <li>Alterner différents types de masques.</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Sécheresse/Congestion Nasale" icon={<Wind className="w-5 h-5"/>} variant="amber">
                    <ul className="list-disc list-inside">
                        <li>Spray salin ou gels à base d'eau.</li>
                        <li>Utiliser un humidificateur chauffant (standard actuel).</li>
                        <li>Vérifier l'absence de fuites importantes qui aggravent la sécheresse.</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Fuites Buccales" icon={<AlertTriangle className="w-5 h-5"/>} variant="amber">
                    <ul className="list-disc list-inside">
                        <li>Ajuster les sangles du masque nasal.</li>
                        <li>Ajouter une mentonnière.</li>
                        <li>Passer à un masque oronasal (en s'assurant que le patient peut le retirer en urgence).</li>
                    </ul>
                </InfoCard>
                 <InfoCard title="Insufflation Gastrique" icon={<AlertTriangle className="w-5 h-5"/>} variant="amber">
                    <p>Généralement transitoire et tolérable. Si les symptômes sont importants :</p>
                    <ul className="list-disc list-inside mt-2">
                        <li>Réduire la pression inspiratoire.</li>
                        <li>Envisager du siméthicone.</li>
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
        
        <Accordion title="Suivi au Long Cours et Adaptation à la Progression" icon={<TrendingUp className="w-6 h-6"/>} variant="default">
             <div className="grid md:grid-cols-2 gap-4">
                <InfoCard title="Si Amélioration Insuffisante" icon={<TrendingUp className="w-5 h-5"/>} variant="blue">
                    <p>Si les symptômes persistent ou les gaz du sang ne s'améliorent pas malgré une bonne adhérence :</p>
                    <ul className="list-disc list-inside mt-2">
                        <li><strong>Augmenter la ventilation minute :</strong>
                            <ul className="list-['-_'] list-inside pl-4">
                                <li>Augmenter l'IPAP (pression) par paliers de 1-2 cmH₂O.</li>
                                <li>Augmenter le Vt (volume).</li>
                                <li>Augmenter la fréquence de sécurité.</li>
                            </ul>
                        </li>
                        <li>Ajuster le temps inspiratoire pour améliorer le confort et les échanges gazeux.</li>
                    </ul>
                </InfoCard>
                 <InfoCard title="Si Aggravation Secondaire" icon={<TrendingDown className="w-5 h-5"/>} variant="red">
                     <p>Une dégradation après une période de stabilité est souvent due à la progression de la maladie.</p>
                     <ul className="list-disc list-inside mt-2">
                        <li><strong>Action :</strong> Augmenter la ventilation minute et/ou étendre la durée de VNI (siestes, usage diurne).</li>
                        <li><strong>Autres causes à rechercher :</strong> Matériel défectueux, prise de poids, changement de médicaments.</li>
                         <li><strong>Aide à la toux :</strong> Renforcer le désencombrement (toux manuelle/assistée, MI-E).</li>
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
        
        <Accordion title="Transition vers la Ventilation Invasive" icon={<ShieldX className="w-6 h-6"/>} variant="danger">
            <InfoCard title="Quand la VNI ne suffit plus" icon={<ShieldX className="w-5 h-5"/>} variant="red">
                <p>La décision de passer à une ventilation invasive via trachéotomie est une décision partagée avec le patient, basée sur plusieurs facteurs :</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>Intolérance à la VNI.</strong></li>
                    <li><strong>Incapacité à protéger les voies aériennes :</strong> Troubles de déglutition majeurs, inhalations répétées.</li>
                    <li><strong>Hypersécrétion incontrôlable.</strong></li>
                    <li><strong>Besoin d'un support ventilatoire 24h/24</strong> avec échec de la VNI continue.</li>
                    <li><strong>Préférence du patient</strong> après discussion éclairée.</li>
                </ul>
                <p className="mt-2">Une ventilation invasive peut aussi être nécessaire de façon temporaire lors d'un événement aigu (ex: pneumonie sévère).</p>
            </InfoCard>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Khan A, et al. Chest. 2023.</li>
                </ul>
            </div>
        </Accordion>
    </div>
);
