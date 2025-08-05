
import React from 'react';
import { Target, TrendingUp, User, Heart, AlertTriangle, Home, UserCheck, SlidersHorizontal, Wind, XCircle, Wrench, ListChecks, BookOpen, TrendingDown } from './icons';
import { Accordion } from './Accordion';

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; variant: 'blue' | 'green' | 'amber' | 'purple' | 'red' }> = ({ title, children, icon, variant }) => {
    const colors = {
        blue: 'border-blue-500 bg-blue-50 text-blue-800',
        green: 'border-green-500 bg-green-50 text-green-800',
        amber: 'border-amber-500 bg-amber-50 text-amber-800',
        purple: 'border-purple-500 bg-purple-50 text-purple-800',
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

const RecommendationCard: React.FC<{ title: string; details: React.ReactNode; icon: React.ReactNode; reference: string }> = ({ title, details, icon, reference }) => (
    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg shadow-sm">
        <div className="flex items-start">
            <div className="flex-shrink-0 text-blue-600">{icon}</div>
            <div className="ml-4">
                <h4 className="font-bold text-lg text-blue-800">{title}</h4>
                <div className="text-slate-700 mt-2 text-base space-y-2">{details}</div>
                <p className="text-xs text-slate-500 italic mt-3">Référence : {reference}</p>
            </div>
        </div>
    </div>
);

export const BpcoLongCours: React.FC = () => {
    return (
        <div className="space-y-6 pt-8">
            <p className="text-slate-700 text-base">
                La VNI à domicile au long cours est une thérapie qui a démontré son efficacité pour améliorer le pronostic des patients BPCO sévères avec une hypercapnie chronique persistante. Son utilisation représente un changement de paradigme par rapport aux anciennes recommandations et est quasi-exclusivement nocturne.
            </p>

            <Accordion title="Recommandations Officielles (CTS 2021)" icon={<BookOpen className="w-6 h-6"/>} variant="primary">
                 <p className="text-slate-700 mb-4 text-base">Les lignes directrices 2021 de la Société Canadienne de Thoracologie (CTS) ont marqué un tournant, passant d'une recommandation contre la VNI à une recommandation conditionnelle <strong>POUR son utilisation</strong> dans des populations très sélectionnées.</p>
                 <div className="space-y-4">
                    <RecommendationCard 
                        title="Pour les Patients Stables"
                        icon={<UserCheck className="w-8 h-8"/>}
                        reference="Kaminska et al. 2021"
                        details={
                            <>
                                <p>Chez les patients avec une BPCO stable et une insuffisance respiratoire hypercapnique chronique (<strong>PaCO₂ supérieur ou égal à 52 mmHg</strong>), il est suggéré d'utiliser la VNI au long cours pour :</p>
                                <p className="font-bold text-green-700 flex items-center"><Heart className="w-5 h-5 mr-2"/> AMÉLIORER LA SURVIE.</p>
                            </>
                        }
                    />
                    <RecommendationCard 
                        title="Pour les Patients en Post-Exacerbation"
                        icon={<Home className="w-8 h-8"/>}
                        reference="Kaminska et al. 2021"
                        details={
                            <>
                                <p>Chez les patients qui restent significativement hypercapniques (<strong>PaCO₂ supérieur ou égal à 52 mmHg persistant</strong>) <strong>2 à 4 semaines après</strong> une exacerbation aiguë, il est suggéré d'utiliser la VNI au long cours pour :</p>
                                <p className="font-bold text-blue-700 flex items-center"><TrendingDown className="w-5 h-5 mr-2"/> RÉDUIRE LES RÉADMISSIONS HOSPITALIÈRES.</p>
                            </>
                        }
                    />
                 </div>
                 <div className="border-t border-slate-200 pt-3 mt-4">
                    <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                    <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                        <li>Kaminska M, et al. Can J Respir Crit Care Sleep Med. 2021.</li>
                    </ul>
                </div>
            </Accordion>

            <Accordion title="Le Patient Cible : Qui et Quand ?" icon={<UserCheck className="w-6 h-6"/>} variant="default">
                 <p className="text-slate-700 mb-4 text-base">La sélection des patients est la clé du succès. La VNI au long cours est bénéfique pour un groupe spécifique de patients BPCO.</p>
                 <InfoCard title="Critères d'Inclusion (ERS/CTS)" icon={<ListChecks className="w-5 h-5"/>} variant="blue">
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <strong>Critère principal :</strong> Patient BPCO stable avec <strong>hypercapnie diurne chronique et persistante</strong>, définie par :
                            <ul className="list-['-_'] list-inside pl-4 mt-1 font-semibold">
                                <li>PaCO₂ supérieur ou égal à 52 mmHg (7.0 kPa)</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Contexte post-exacerbation :</strong> L'hypercapnie doit persister <strong>2 à 4 semaines après la stabilisation</strong> d'une exacerbation. Une réévaluation gazométrique est indispensable car de nombreux patients normalisent leur PaCO₂ spontanément.
                        </li>
                         <li>
                            <strong>Alternative (PaCO₂ 45-52 mmHg) :</strong> La VNI peut être considérée si le patient présente des <strong>ré-hospitalisations fréquentes</strong> malgré un traitement médical optimal.
                        </li>
                        <li>Patient motivé et capable de gérer le traitement (ou avec un entourage aidant).</li>
                    </ul>
                </InfoCard>
                <div className="border-t border-slate-200 pt-3 mt-4">
                    <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                    <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                        <li>Ergan B, et al. Eur Respir J. 2019.</li>
                        <li>Kaminska M, et al. Can J Respir Crit Care Sleep Med. 2021.</li>
                    </ul>
                </div>
            </Accordion>

            <Accordion title="Principes des Réglages (Viser la Haute Intensité)" icon={<SlidersHorizontal className="w-6 h-6"/>} variant="default">
                <p className="text-slate-700 mb-4 text-base">
                    Pour être efficace au long cours, la VNI doit être "intensive" pour corriger l'hypercapnie. Les réglages de "confort" avec de faibles pressions sont inefficaces.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                     <InfoCard title="Objectifs de la Haute Intensité" icon={<Target className="w-5 h-5"/>} variant="green">
                         <ul className="list-disc list-inside">
                             <li><strong>Normaliser ou réduire significativement la PaCO₂.</strong></li>
                             <li>Viser une réduction d'au moins 20% ou une PaCO₂ inférieur à 48 mmHg.</li>
                             <li>Mettre au repos les muscles respiratoires pendant la nuit.</li>
                         </ul>
                    </InfoCard>
                     <InfoCard title="Réglages Typiques" icon={<Wind className="w-5 h-5"/>} variant="amber">
                         <ul className="list-disc list-inside">
                             <li><strong>IPAP élevée :</strong> Souvent supérieur à 20-25 cmH₂O.</li>
                             <li><strong>EPAP :</strong> 4-5 cmH₂O pour contrer l'auto-PEEP.</li>
                             <li><strong>Fréquence de secours (backup rate) élevée :</strong> Proche de la FR spontanée (ex: 14-18/min) pour assurer le contrôle de la ventilation.</li>
                         </ul>
                    </InfoCard>
                </div>
                <div className="border-t border-slate-200 pt-3 mt-4">
                    <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                    <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                        <li>Ergan B, et al. Eur Respir J. 2019.</li>
                    </ul>
                </div>
            </Accordion>
            
             <Accordion title="Modalités Pratiques et Suivi" icon={<Wrench className="w-6 h-6"/>} variant="default">
                <ul className="list-disc list-inside space-y-3 text-slate-700 text-base">
                    <li><strong>Mode Ventilatoire :</strong> Le mode <strong>barométrique standard (pression de support)</strong> est le mode de choix. Les modes à volume garanti (ex: AVAPS) ne sont pas recommandés en première intention par la CTS car ils n'ont pas montré de supériorité.</li>
                    <li><strong>Lieu d'initiation :</strong> L'initiation se fait le plus souvent en milieu hospitalier ou en laboratoire du sommeil pour une titration progressive et sécurisée des pressions. Un suivi rapproché est essentiel.</li>
                    <li><strong>Interface :</strong> Le choix est basé sur le confort et l'étanchéité. Le masque nasal ou narinaire est souvent préféré pour le long cours pour minimiser l'espace mort et la claustrophobie.</li>
                    <li><strong>Humidification :</strong> L'humidification chauffée améliore le confort et réduit la sécheresse nasale.</li>
                    <li><strong>Adhérence :</strong> Un minimum de <strong>5 heures par nuit</strong> est recommandé pour observer un bénéfice. Une éducation complète et un suivi régulier sont essentiels.</li>
                </ul>
                <div className="border-t border-slate-200 pt-3 mt-4">
                    <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                    <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                        <li>Groupe assistance ventilatoire & oxygène (GAVO2). SPLF. 2025.</li>
                    </ul>
                </div>
            </Accordion>
            
             <Accordion title="Contre-indications et Précautions" icon={<AlertTriangle className="w-6 h-6"/>} variant="danger">
                 <InfoCard title="Éléments à considérer" icon={<XCircle className="w-5 h-5"/>} variant="red">
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Refus du patient</strong> ou incapacité à coopérer.</li>
                        <li><strong>Absence de support social/familial</strong> pour un patient dépendant.</li>
                        <li><strong>Troubles cognitifs sévères</strong> empêchant la gestion de l'appareil.</li>
                        <li><strong>Anomalies anatomiques</strong> empêchant l'ajustement de toute interface.</li>
                        <li><strong>Sécrétions abondantes</strong> et incapacité à tousser efficacement.</li>
                    </ul>
                </InfoCard>
                <div className="border-t border-slate-200 pt-3 mt-4">
                    <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                    <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                        <li>Kaminska M, et al. Can J Respir Crit Care Sleep Med. 2021.</li>
                    </ul>
                </div>
            </Accordion>
        </div>
    );
};
