
import React from 'react';
import { Heart, ListChecks, Wind, CheckCircle, SlidersHorizontal, AlertTriangle, Lungs, Wrench } from './icons';
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

export const OapSection: React.FC = () => (
    <div className="space-y-8 animate-fade-in">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center">
                <Heart className="w-8 h-8 mr-4 text-indigo-600" />
                Œdème Aigu du Poumon (OAP) Cardiogénique
            </h2>
            <p className="mt-2 text-slate-600 text-base">
                La VNI, et en particulier la CPAP, est une intervention de première ligne qui a transformé le pronostic de l'OAP.
            </p>
        </div>

        <KeyPointsCard>
            <li>La <strong>CPAP est le traitement de référence</strong> et de première intention pour l'OAP (Recommandation Classe IIa, Niveau A).</li>
            <li>Le bénéfice principal est hémodynamique : <strong>réduction de la pré-charge et de la post-charge</strong> du ventricule gauche.</li>
            <li>La VNI (Bi-level) est une <strong>alternative aussi efficace</strong> que la CPAP, surtout en cas d'hypercapnie associée, mais n'a pas montré de supériorité claire.</li>
            <li>Il n'y a <strong>pas de sur-risque démontré d'infarctus du myocarde</strong> avec la VNI par rapport à la CPAP.</li>
        </KeyPointsCard>

        <Accordion title="Physiopathologie et Bénéfices de la Pression Positive" icon={<Wind className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">La pression positive intrathoracique (PPI) a des effets bénéfiques majeurs sur la mécanique cardiaque et pulmonaire dans l'OAP.</p>
            <div className="grid md:grid-cols-2 gap-6">
                <InfoCard title="Effets Pulmonaires" icon={<Lungs className="w-5 h-5"/>} variant="blue">
                    <ul className="list-disc list-inside">
                        <li><strong>Recrutement alvéolaire :</strong> La pression positive ouvre les alvéoles inondées, augmentant la capacité résiduelle fonctionnelle (CRF) et la surface d'échange gazeux.</li>
                        <li><strong>Amélioration de la compliance :</strong> Réduit la rigidité pulmonaire.</li>
                        <li><strong>Diminution du travail respiratoire :</strong> Soulage les muscles respiratoires fatigués.</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Effets Cardiovasculaires (Clés)" icon={<Heart className="w-5 h-5"/>} variant="green">
                    <p>La PPI réduit la pression transmurale du ventricule gauche (VG), ce qui est crucial.</p>
                    <ul className="list-disc list-inside mt-2">
                        <li><strong>Diminution de la pré-charge :</strong> La PPI réduit le retour veineux vers le cœur.</li>
                        <li><strong>Diminution de la post-charge VG :</strong> Effet le plus important. En réduisant les variations négatives de pression intrathoracique, la PPI diminue la pression transmurale du VG, ce qui facilite l'éjection systolique et réduit la congestion pulmonaire.</li>
                    </ul>
                </InfoCard>
            </div>
             <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Bellone A, et al. Chest. 2018.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Le Débat Historique : Risque d'Infarctus du Myocarde" icon={<AlertTriangle className="w-6 h-6"/>} variant="default">
            <p className="text-slate-700 mb-4 text-base">
                Pendant des années, un sur-risque d'infarctus du myocarde (IDM) a été suspecté avec la VNI (Bi-level/nIPSV) par rapport à la CPAP, créant une controverse majeure. Cette section retrace l'historique de ce débat, de sa naissance à sa résolution finale (Ferrari et al., 2010).
            </p>
            <div className="space-y-4">
                 <InfoCard title="L'Origine de la Controverse" icon={<AlertTriangle className="w-5 h-5"/>} variant="amber">
                    <div className="animate-fade-in-fast" data-state="true">
                        <h5 className="font-semibold">Étude de Mehta et al. (1997)</h5>
                        <p className="text-sm mt-1">
                            Une étude précoce a suggéré que la VNI (Bi-level) pouvait augmenter le risque d'IDM. <strong>Hypothèse :</strong> une chute brutale de la pré-charge et/ou de la pression artérielle pouvait compromettre la perfusion coronaire chez les patients avec une sténose critique.
                        </p>
                    </div>
                </InfoCard>
                 <InfoCard title="La Résolution du Débat" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                    <div className="animate-fade-in-fast" data-state="true">
                        <h5 className="font-semibold">Méta-analyses et Études Ultérieures</h5>
                        <p className="text-sm mt-1">
                            Des méta-analyses plus larges et des études observationnelles comme celle de Bellone et al. (2018) ont montré qu'il n'y avait <strong>aucune différence significative</strong> dans l'incidence d'IDM entre les patients traités par CPAP et ceux par VNI. Le risque suspecté initialement n'a pas été confirmé.
                        </p>
                        <p className="text-sm mt-2 font-bold text-green-700">Conclusion actuelle : La VNI est aussi sûre que la CPAP sur le plan du risque d'IDM dans l'OAP.</p>
                    </div>
                </InfoCard>
            </div>
             <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Bellone A, et al. Chest. 2018.</li>
                    <li>Ferrari G, et al. 2010.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="CPAP vs VNI (Bi-level) : Que choisir ?" icon={<SlidersHorizontal className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">
                Les deux modes sont efficaces et recommandés. Le choix dépend du profil du patient et de la réponse clinique.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
                <InfoCard title="CPAP (Continuous Positive Airway Pressure)" icon={<Wind className="w-5 h-5"/>} variant="green">
                    <p className="font-bold">Le standard de soin en première intention.</p>
                    <ul className="list-disc list-inside mt-2">
                        <li><strong>Réglages :</strong> Commencer à <strong>5-8 cmH₂O</strong>, augmenter progressivement jusqu'à <strong>10-12 cmH₂O</strong>.</li>
                        <li><strong>Avantages :</strong> Simple, largement disponible, efficace.</li>
                    </ul>
                </InfoCard>
                <InfoCard title="VNI (Bi-level / nIPSV)" icon={<Wind className="w-5 h-5"/>} variant="blue">
                     <p className="font-bold">Une excellente alternative, surtout si :</p>
                     <ul className="list-disc list-inside mt-2">
                        <li>L'OAP est associé à une <strong>hypercapnie</strong> (ex: patient BPCO).</li>
                        <li>La dyspnée persiste malgré une CPAP bien conduite (besoin d'un support inspiratoire).</li>
                    </ul>
                     <p className="mt-2"><strong>Réglages :</strong> EPAP de 5-8 cmH₂O et IPAP de 10-15 cmH₂O.</p>
                </InfoCard>
            </div>
        </Accordion>

        <Accordion title="Conseils Pratiques et Dépannage" icon={<Wrench className="w-6 h-6"/>} variant="default">
            <ul className="list-disc list-inside space-y-3 text-slate-700">
                <li><strong>Hypotension :</strong> La principale complication à surveiller, surtout chez les patients hypovolémiques ou avec une dysfonction du ventricule droit. Initier le traitement avec prudence et monitorer la pression artérielle.</li>
                <li><strong>Interface :</strong> Le masque facial (oronasal) est le plus utilisé. En cas de claustrophobie sévère, un masque facial total peut être une option.</li>
                <li><strong>Traitement médical :</strong> La VNI/CPAP est un traitement adjuvant. Le traitement de fond de l'OAP (diurétiques, vasodilatateurs) reste la pierre angulaire.</li>
            </ul>
        </Accordion>
    </div>
);