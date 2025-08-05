
import React from 'react';
import { ListChecks, Siren, Home } from './icons';
import { Accordion } from './Accordion';

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

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; variant: 'red' | 'blue' }> = ({ title, children, icon, variant }) => {
    const colors = {
        red: 'border-red-500 bg-red-50 text-red-800',
        blue: 'border-blue-500 bg-blue-50 text-blue-800'
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

export const BpcoGeneralites: React.FC = () => {
  return (
    <div className="space-y-6 pt-8">
      <p className="text-slate-700 text-base">
        La VNI est une pierre angulaire de la prise en charge de la BPCO, à la fois dans les situations d'urgence et dans la gestion chronique des formes sévères. Son utilisation appropriée peut changer radicalement le pronostic.
      </p>
      
      <KeyPointsCard>
        <li><strong>En aigu :</strong> La VNI est le traitement de première intention pour l'exacerbation avec <strong>acidose respiratoire (pH inférieur à 7.35)</strong>. Elle doit être débutée précocement pour réduire la mortalité et le besoin d'intubation.</li>
        <li><strong>En chronique :</strong> Indiquée pour l'hypercapnie diurne persistante (<strong>PaCO₂ supérieur ou égal à 52 mmHg</strong>). Vise à améliorer la <strong>survie</strong> chez les patients stables et à réduire les <strong>réadmissions</strong> chez ceux en post-exacerbation.</li>
        <li><strong>La cible d'oxygénation</strong> est fondamentale : <strong>88-92% de SpO₂</strong>. L'hyperoxie est dangereuse et aggrave l'hypercapnie.</li>
        <li>Les réglages de la VNI doivent être <strong>actifs ("haute intensité")</strong> pour être efficaces, visant à corriger l'hypercapnie.</li>
      </KeyPointsCard>

      <Accordion title="Les Deux Grands Contextes d'Utilisation" icon={<ListChecks className="w-6 h-6"/>} variant="default">
        <div className="grid md:grid-cols-2 gap-6">
            <InfoCard title="En Poussée Aiguë" icon={<Siren className="w-6 h-6"/>} variant="red">
                <p>Pour les exacerbations de BPCO avec insuffisance respiratoire aiguë hypercapnique, la VNI est le traitement de première intention.</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>Objectif :</strong> Éviter l'intubation, corriger l'acidose, réduire le travail respiratoire.</li>
                    <li><strong>Bénéfice :</strong> Réduction prouvée de la mortalité et du besoin de ventilation invasive.</li>
                </ul>
            </InfoCard>
            <InfoCard title="En Stable au Long Cours" icon={<Home className="w-6 h-6"/>} variant="blue">
                <p>Pour les patients avec une BPCO stable mais sévère, présentant une hypercapnie chronique significative, la VNI nocturne à domicile est une option thérapeutique majeure.</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>Objectif :</strong> Améliorer la survie, réduire la fréquence des hospitalisations.</li>
                    <li><strong>Bénéfice :</strong> Dépend de réglages intensifs visant à corriger l'hypercapnie.</li>
                </ul>
            </InfoCard>
        </div>
        <div className="border-t border-slate-200 pt-3 mt-4">
            <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
            <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                <li>Ergan B, et al. Eur Respir J. 2019.</li>
                <li>Kaminska M, et al. Can J Respir Crit Care Sleep Med. 2021.</li>
            </ul>
        </div>
      </Accordion>
    </div>
  );
};
