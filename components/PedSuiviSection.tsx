
import React from 'react';
import { ListChecks, AlertTriangle, CheckCircle, TrendingUp, Home, Users, Heart, Target } from './icons';
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

export const PedSuiviSection: React.FC = () => {
  return (
    <div className="space-y-6 pt-8">
        <p className="text-slate-700 text-base">
            Le suivi en pédiatrie est crucial, que ce soit en situation aiguë pour évaluer la réponse immédiate, ou au long cours pour s'adapter à la croissance et garantir l'adhérence.
        </p>
        
        <Accordion title="Évaluation de l'Efficacité en Aigu (1-2 premières heures)" icon={<Heart className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">
                Toute initiation de VNI en aigu nécessite une réévaluation rapprochée pour juger de son efficacité. Une amélioration clinique et biologique doit être observée rapidement.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
                <InfoCard title="Paramètres Cliniques à Surveiller" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>Fréquence respiratoire et cardiaque :</strong> Une réduction est un signe fiable de réponse positive.</li>
                        <li><strong>Dyspnée :</strong> Amélioration des signes de lutte (tirage, battement des ailes du nez).</li>
                    </ul>
                </InfoCard>
                 <InfoCard title="Paramètres Biologiques" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>Besoin en O₂ :</strong> Une diminution de la FiO₂ nécessaire est attendue dans la première heure.</li>
                        <li><strong>Hypercapnie :</strong> L'absence d'amélioration ou l'aggravation de la PaCO₂ est un signe d'échec.</li>
                    </ul>
                </InfoCard>
            </div>
             <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Nagler J, et al. UpToDate. 2024.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Prédicteurs d'Échec en Aigu" icon={<AlertTriangle className="w-6 h-6"/>} variant="danger">
            <InfoCard title="Identifier les patients à risque" icon={<AlertTriangle className="w-5 h-5"/>} variant="red">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Pathologie sous-jacente :</strong> Le SDRA pédiatrique et la pneumonie sont des facteurs de risque d'échec.</li>
                    <li><strong>Sévérité de la maladie :</strong> Un score de mortalité pédiatrique (PRISM) ou de dysfonction d'organe (PLOD) élevé est associé à un risque plus élevé d'échec.</li>
                    <li><strong>Non-réponse au traitement :</strong> Absence de diminution de la FR, besoin en FiO₂ persistant élevé, ou pH inférieur à 7.25 après 1-2h sont des signes d'alarme.</li>
                </ul>
                <p className="font-bold mt-2">Un patient qui se dégrade malgré une escalade des paramètres de VNI nécessite une intubation urgente.</p>
            </InfoCard>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Nagler J, et al. UpToDate. 2024.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Gestion des Complications en Aigu" icon={<AlertTriangle className="w-6 h-6"/>} variant="danger">
             <div className="grid md:grid-cols-2 gap-4">
                <InfoCard title="Complications Majeures (rares)" icon={<AlertTriangle className="w-5 h-5"/>} variant="red">
                     <ul className="list-disc list-inside space-y-1">
                        <li><strong>Barotraumatisme :</strong> Pneumothorax, pneumomédiastin. Nécessite une surveillance et l'utilisation des pressions les plus basses possibles.</li>
                        <li><strong>Inhalation :</strong> Risque en cas de vomissements sous masque facial.</li>
                        <li><strong>Instabilité hémodynamique :</strong> Peut survenir à l'initiation de la pression positive.</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Complications Mineures (fréquentes)" icon={<AlertTriangle className="w-5 h-5"/>} variant="amber">
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>Lésions cutanées :</strong> Le plus fréquent. À prévenir par un bon choix de masque et des protections cutanées.</li>
                        <li><strong>Traumatisme de la muqueuse nasale :</strong> À prévenir par une humidification chauffée.</li>
                        <li><strong>Distension gastrique :</strong> Survient si les pressions inspiratoires sont trop élevées.</li>
                    </ul>
                </InfoCard>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Nagler J, et al. UpToDate. 2024.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Suivi au Long Cours (Chronique)" icon={<ListChecks className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">
                Le suivi dépend de l'âge, du diagnostic et des ressources locales. Il doit être régulier et proactif.
            </p>
            <InfoCard title="Calendrier et Outils" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>1 à 3 mois après l'initiation/sortie :</strong> Première visite de contrôle.</li>
                    <li><strong>Ensuite, tous les 3-6 mois :</strong> Visites régulières.</li>
                    <li><strong>Outils :</strong> Analyse des données logicielles, monitorage des échanges gazeux à domicile (SpO₂, PtcCO₂), et polysomnographie de contrôle si besoin.</li>
                </ul>
            </InfoCard>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>MacLean JE, et al. Paediatr Respir Rev. 2023.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Transition Hôpital-Domicile & Adhérence" icon={<Home className="w-6 h-6"/>} variant="primary">
             <div className="grid md:grid-cols-2 gap-4">
                 <InfoCard title="Préparation à la Sortie" icon={<Home className="w-5 h-5"/>} variant="blue">
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>Éducation des aidants :</strong> Formation pratique à la gestion de l'équipement et des urgences.</li>
                        <li><strong>Plan de soins complet :</strong> Instructions écrites, contacts, plan de suivi.</li>
                        <li><strong>Soutien adéquat :</strong> Organisation du soutien par les soignants, la famille et l'école.</li>
                    </ul>
                </InfoCard>
                 <InfoCard title="Adhérence au Traitement" icon={<Users className="w-5 h-5"/>} variant="amber">
                    <p>C'est un défi majeur. L'objectif est une utilisation pendant toute la durée du sommeil.</p>
                    <p className="mt-2">L'adhérence est améliorée par l'amélioration perçue des symptômes, le soutien familial et une bonne éducation thérapeutique.</p>
                </InfoCard>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>MacLean JE, et al. Paediatr Respir Rev. 2023.</li>
                </ul>
            </div>
        </Accordion>
    </div>
  );
};
