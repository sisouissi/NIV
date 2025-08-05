
import React from 'react';
import { FileMedical, ListChecks, Wind, AlertTriangle, Lungs, CheckCircle } from './icons';
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

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; variant: 'blue' | 'green' | 'amber' }> = ({ title, children, icon, variant }) => {
    const colors = {
        blue: 'border-blue-500 bg-blue-50 text-blue-800',
        green: 'border-green-500 bg-green-50 text-green-800',
        amber: 'border-amber-500 bg-amber-50 text-amber-800',
    };
    return (
        <div className={`p-4 rounded-lg border-l-4 ${colors[variant]} shadow-sm overflow-hidden`}>
            <h4 className="font-semibold text-lg flex items-center mb-2">
                {icon}
                <span className="ml-3">{title}</span>
            </h4>
            <div className="text-slate-700 space-y-2 text-base break-words">{children}</div>
        </div>
    );
};

export const PostOperatoireSection: React.FC = () => (
    <div className="space-y-8 animate-fade-in">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center">
                <FileMedical className="w-8 h-8 mr-4 text-indigo-600" />
                Insuffisance Respiratoire Aiguë (IRA) Post-opératoire
            </h2>
            <p className="mt-2 text-slate-600 text-base">
                La VNI est une stratégie efficace pour traiter l'IRA hypoxémique après une chirurgie majeure, en particulier abdominale.
            </p>
        </div>

        <KeyPointsCard>
            <li>La VNI (CPAP ou Bi-level) est <strong>fortement recommandée (Grade 1B)</strong> par l'ESA/ESICM pour améliorer l'oxygénation en post-opératoire par rapport à l'oxygénothérapie standard.</li>
            <li>Utilisée en post-extubation immédiat après <strong>chirurgie abdominale</strong>, elle réduit le risque d'IRA, de pneumonie nosocomiale et de réintubation.</li>
            <li>Le traitement doit être initié précocement dès l'apparition des signes d'IRA ou en préventif chez les patients à risque.</li>
            <li>Une attention particulière doit être portée au risque de lâchage de suture anastomotique, bien que les preuves de ce risque soient limitées.</li>
        </KeyPointsCard>
        
        <Accordion title="Recommandations de la Directive ESA/ESICM (2020)" icon={<ListChecks className="w-6 h-6"/>} variant="default">
            <p className="text-slate-700 mb-4 text-base">
                Les directives conjointes de la Société Européenne d'Anesthésiologie (ESA) et de la Société Européenne de Soins Intensifs (ESICM) fournissent des recommandations détaillées pour des contextes post-opératoires spécifiques.
            </p>
            <div className="space-y-6">
                <div>
                    <h4 className="font-bold text-lg text-slate-800 mb-2">Toutes Chirurgies</h4>
                    <div className="space-y-3">
                        <InfoCard title="Amélioration de l'Oxygénation (Grade 1B - Forte)" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                            <p>De manière générale, chez tout patient hypoxémique en péri-opératoire, la <strong>NIPPV ou la CPAP</strong> sont préférées à l'oxygénothérapie conventionnelle pour améliorer l'oxygénation.</p>
                        </InfoCard>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-lg text-slate-800 mb-2 mt-4">Après Chirurgie Abdominale Haute</h4>
                    <div className="space-y-3">
                        <InfoCard title="Prévention de l'IRA Post-extubation (Grade 1B - Forte)" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                            <p>La VNI (CPAP ou NIPPV) doit être utilisée <strong>immédiatement après l'extubation</strong> chez les patients hypoxémiques à risque de développer une IRA. Cette stratégie réduit le taux de réintubation et les infections nosocomiales.</p>
                        </InfoCard>
                        <InfoCard title="Réduction des Complications Pulmonaires (Grade 2A - Faible)" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                            <p>Il est suggéré d'utiliser la VNI (CPAP ou NIPPV) pour réduire le risque de <strong>pneumonie nosocomiale</strong> et ses complications associées (sepsis, infection).</p>
                        </InfoCard>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-lg text-slate-800 mb-2 mt-4">Après Chirurgie Cardiaque</h4>
                    <div className="space-y-3">
                        <InfoCard title="Prévention de l'Atélectasie (Grade 2C - Faible)" icon={<CheckCircle className="w-5 h-5"/>} variant="amber">
                            <p>Il est suggéré d'utiliser la <strong>NIPPV (Bi-level) plutôt que la CPAP</strong> pour réduire le risque d'atélectasies chez le patient hypoxémique.</p>
                        </InfoCard>
                        <InfoCard title="Prévention de la Détérioration (Grade 2B - Faible)" icon={<CheckCircle className="w-5 h-5"/>} variant="amber">
                            <p>La VNI (CPAP ou NIPPV) peut être considérée pour prévenir une aggravation de la détresse respiratoire chez les patients hypoxémiques.</p>
                        </InfoCard>
                    </div>
                </div>
                
                <div>
                    <h4 className="font-bold text-lg text-slate-800 mb-2 mt-4">Après Chirurgie de Résection Pulmonaire</h4>
                    <div className="space-y-3">
                        <InfoCard title="Prévention de l'Atélectasie (Grade 2C - Faible)" icon={<CheckCircle className="w-5 h-5"/>} variant="amber">
                            <p>La NIPPV peut être considérée pour prévenir les atélectasies. Une étude a montré une réduction de la mortalité et du besoin de réintubation avec la NIPPV dans ce contexte.</p>
                        </InfoCard>
                    </div>
                </div>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Leone M, et al. Intensive Care Med. 2020.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Mécanismes et Facteurs de Risque" icon={<Lungs className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">L'IRA post-opératoire est principalement une insuffisance respiratoire hypoxémique.</p>
             <div className="grid md:grid-cols-2 gap-6">
                <InfoCard title="Mécanismes Physiopathologiques" icon={<Lungs className="w-5 h-5"/>} variant="blue">
                    <ul className="list-disc list-inside">
                        <li><strong>Atélectasies :</strong> La cause principale. Réduction du volume pulmonaire due à l'anesthésie et à la douleur.</li>
                        <li><strong>Dysfonction diaphragmatique :</strong> Inhibition réflexe du diaphragme, surtout après chirurgie abdominale haute.</li>
                        <li><strong>Surcharge liquidienne :</strong> Remplissage péri-opératoire excessif.</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Facteurs de Risque" icon={<AlertTriangle className="w-5 h-5"/>} variant="amber">
                    <ul className="list-disc list-inside">
                        <li>Chirurgie abdominale haute ou thoracique.</li>
                        <li>Obésité.</li>
                        <li>Pathologie respiratoire chronique préexistante (BPCO).</li>
                        <li>Insuffisance cardiaque.</li>
                    </ul>
                </InfoCard>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Leone M, et al. Intensive Care Med. 2020.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Indications et Bénéfices" icon={<CheckCircle className="w-6 h-6"/>} variant="success">
             <p className="text-slate-700 mb-4 text-base">La VNI est recommandée pour les patients développant une IRA hypoxémique après une chirurgie abdominale.</p>
             <InfoCard title="Bénéfices Démontrés" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                <ul className="list-disc list-inside">
                    <li><strong>Réduction du taux de réintubation.</strong></li>
                    <li><strong>Réduction de la mortalité hospitalière.</strong></li>
                    <li>Diminution des infections nosocomiales.</li>
                </ul>
            </InfoCard>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Leone M, et al. Intensive Care Med. 2020.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Réglages et Précautions" icon={<Wind className="w-6 h-6"/>} variant="default">
             <p className="text-slate-700 mb-4 text-base">L'objectif est de recruter les zones atélectasiées avec une pression expiratoire suffisante.</p>
             <div className="grid md:grid-cols-2 gap-6">
                <InfoCard title="Réglages Typiques" icon={<Wind className="w-5 h-5"/>} variant="blue">
                    <ul className="list-disc list-inside">
                        <li><strong>Mode :</strong> CPAP ou VNI (Bi-level). La CPAP est souvent suffisante.</li>
                        <li><strong>EPAP / PEEP :</strong> <strong>5 à 10 cmH₂O</strong>. C'est le paramètre le plus important.</li>
                        <li><strong>Aide Inspiratoire (si VNI) :</strong> <strong>5 à 10 cmH₂O</strong> pour soulager le travail respiratoire.</li>
                        <li><strong>FiO₂ :</strong> Pour SpO₂ supérieur à 92%.</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Précautions" icon={<AlertTriangle className="w-5 h-5"/>} variant="amber">
                    <ul className="list-disc list-inside">
                        <li><strong>Anastomoses digestives :</strong> Risque théorique de lâchage de suture, bien que non démontré dans les études. La prudence est de mise, en limitant les pressions inspiratoires.</li>
                        <li><strong>Distension gastrique :</strong> Peut être problématique après une chirurgie abdominale.</li>
                    </ul>
                </InfoCard>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Leone M, et al. Intensive Care Med. 2020.</li>
                </ul>
            </div>
        </Accordion>

    </div>
);
