import React from 'react';
import { TrendingUp, Activity, Home, AlertTriangle } from './icons';
import { Accordion } from './Accordion';

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; }> = ({ title, children, icon }) => (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 h-full">
        <h4 className="font-semibold text-slate-800 flex items-center text-lg mb-2">
            {icon}
            <span className="ml-2">{title}</span>
        </h4>
        <div className="text-slate-700 text-sm space-y-2">{children}</div>
    </div>
);

export const NewApplicationsSection: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center">
                <TrendingUp className="w-8 h-8 mr-4 text-indigo-600" />
                Nouvelles Applications & Télémédecine
            </h2>
            <p className="mt-2 text-slate-600 text-base">
                Explorer les avancées technologiques qui rendent la VNI plus portable, personnalisée et accessible à domicile.
            </p>
        </div>

        <Accordion title="Appareils Portables (Wearable Devices)" icon={<Activity className="w-6 h-6" />} variant="primary">
            <p className="mb-4 text-slate-700">
                L'un des défis pour les patients sous ventilation à domicile est la décondition à l'effort, qui limite l'activité physique et aggrave le pronostic. De nouvelles technologies portables visent à surmonter cet obstacle.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
                <InfoCard title="Le système NIOV" icon={<TrendingUp className="w-6 h-6 text-blue-500" />}>
                    <p>Un ventilateur portable de 0.45 kg avec une interface nasale ouverte. Des études sur des patients BPCO chroniques ont montré des <strong>améliorations significatives de l'endurance, de l'oxygénation, de la dyspnée et du confort</strong> lors des activités de la vie quotidienne par rapport à l'oxygénothérapie seule.</p>
                </InfoCard>
                <InfoCard title="Le VitaBreath" icon={<Activity className="w-6 h-6 text-green-500" />}>
                    <p>Un appareil portatif conçu pour fournir une pression positive via un embout buccal pendant ou après l'exercice. Il a montré une <strong>amélioration de l'échelle de dyspnée de Borg et du test de marche de 6 minutes</strong>. Bien que non disponible cliniquement, il démontre le potentiel de ces thérapies ciblées.</p>
                </InfoCard>
            </div>
             <div className="bg-amber-50 border-l-4 border-amber-500 text-amber-800 p-4 mt-6 rounded-r-md">
                <h5 className="font-bold">Perspective</h5>
                <p className="text-sm">Ces technologies ouvrent la voie à une VNI ambulatoire, permettant un support ventilatoire pendant l'effort pour améliorer la réhabilitation et la qualité de vie.</p>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Criner GJ, et al. Eur Respir J. 2024.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Intégration de la Télémédecine" icon={<Home className="w-6 h-6" />} variant="primary">
             <p className="mb-4 text-slate-700">
                La gestion à distance des patients sous VNI est en plein essor, motivée par la croissance du nombre de patients, leur préférence pour les soins à domicile et la nécessité d'optimiser les ressources hospitalières.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-slate-800">Initiation à Domicile</h4>
                    <p className="text-sm text-slate-600">
                        Des études ont randomisé des patients (BPCO, maladies neuromusculaires) pour une initiation de la VNI à domicile via la télémédecine versus une initiation classique à l'hôpital.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-green-700 font-medium">
                        <li>Non-infériorité en termes d'amélioration des gaz du sang et de la qualité de vie.</li>
                        <li>Réduction des coûts jusqu'à 50%.</li>
                        <li>Meilleure adhérence à la thérapie dans le groupe à domicile.</li>
                    </ul>
                </div>
                 <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-slate-800">Suivi par Télésurveillance</h4>
                     <p className="text-sm text-slate-600">
                        Particulièrement utile pour les patients lourdement handicapés ou atteints de maladies rapidement progressives comme la SLA.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-blue-700 font-medium">
                        <li>Réduction significative des hospitalisations chez les patients SLA suivis par modem.</li>
                        <li>Diminution du nombre et de la durée des hospitalisations chez les jeunes patients atteints de maladies neuromusculaires.</li>
                         <li>Permet une détection précoce des exacerbations chez les patients BPCO.</li>
                    </ul>
                </div>
            </div>
             <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6 rounded-r-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-red-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-base font-medium text-red-800">Le défi de l'hétérogénéité</h3>
                    <div className="mt-2 text-sm text-red-700">
                      <p>
                        Le principal obstacle est qu'il n'existe pas de solution unique. Le succès dépend de l'adaptation des interventions à la pathologie, au statut socio-économique et à l'accès technologique de chaque patient.
                      </p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Criner GJ, et al. Eur Respir J. 2024.</li>
                </ul>
            </div>
        </Accordion>
    </div>
  );
};