
import React from 'react';
import { ShieldCheck, Users, AlertTriangle, Wind, CheckCircle, TrendingUp, XCircle } from './icons';
import { Accordion } from './Accordion';

const KeyPointsCard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg shadow-sm">
        <h3 className="font-bold text-lg text-indigo-800 flex items-center mb-3">
            <ShieldCheck className="w-6 h-6 mr-2" />
            Éléments Clés à Retenir
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

export const PostExtubationSection: React.FC = () => (
    <div className="space-y-8 animate-fade-in">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center">
                <ShieldCheck className="w-8 h-8 mr-4 text-indigo-600" />
                VNI en Post-Extubation
            </h2>
            <p className="mt-2 text-slate-600 text-base">
                Utilisation de la VNI pour prévenir ou traiter l'insuffisance respiratoire après une ventilation mécanique invasive.
            </p>
        </div>

        <KeyPointsCard>
            <li>La VNI en <strong>prévention</strong> est recommandée chez les <strong>patients à haut risque</strong> d'échec d'extubation pour réduire le risque de réintubation.</li>
            <li>La VNI en <strong>traitement</strong> d'une insuffisance respiratoire post-extubation <strong>déjà installée est déconseillée</strong> car elle retarde la réintubation et augmente la mortalité.</li>
            <li>L'identification des patients à haut risque est cruciale (âge supérieur à 65 ans, BPCO, insuffisance cardiaque, toux inefficace, etc.).</li>
            <li>L'oxygénothérapie à haut débit (OHD) est une alternative de plus en plus utilisée et étudiée dans ce contexte.</li>
        </KeyPointsCard>

        <Accordion title="VNI en Prévention de l'Échec d'Extubation" icon={<Users className="w-6 h-6"/>} variant="success">
            <p className="text-slate-700 mb-4 text-base">
                C'est l'indication principale de la VNI dans ce contexte. Elle est appliquée immédiatement après l'extubation chez des patients sélectionnés.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
                <InfoCard title="Qui sont les patients à haut risque ?" icon={<Users className="w-5 h-5"/>} variant="amber">
                    <ul className="list-disc list-inside">
                        <li>Âge supérieur à 65 ans.</li>
                        <li>Insuffisance cardiaque sous-jacente (cause de l'intubation).</li>
                        <li>Pathologie respiratoire chronique (BPCO modérée à sévère).</li>
                        <li>Toux inefficace ou sécrétions abondantes.</li>
                        <li>Échec d'une première épreuve de sevrage.</li>
                        <li>Score APACHE II supérieur à 12 à l'admission.</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Bénéfices Démontrés" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                     <p>Chez les patients à haut risque, la VNI préventive a montré :</p>
                    <ul className="list-disc list-inside mt-2">
                        <li>Une <strong>réduction du risque de réintubation</strong>.</li>
                        <li>Une <strong>diminution de la mortalité</strong> en soins intensifs.</li>
                        <li>Une durée de séjour en soins intensifs plus courte.</li>
                    </ul>
                </InfoCard>
            </div>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Ouellette DR, et al. Chest. 2017.</li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="VNI en Traitement de l'IRA Post-Extubation Installée" icon={<XCircle className="w-6 h-6"/>} variant="danger">
            <p className="text-slate-700 mb-4 text-base">
                C'est une situation à haut risque. L'utilisation de la VNI pour "sauver" une extubation qui a déjà échoué est fortement déconseillée.
            </p>
            <InfoCard title="Pourquoi est-ce déconseillé ?" icon={<AlertTriangle className="w-5 h-5"/>} variant="red">
                <p>
                    Plusieurs études et méta-analyses ont montré que l'utilisation de la VNI pour traiter une IRA post-extubation déjà établie, par rapport à une réintubation immédiate :
                </p>
                <ul className="list-disc list-inside mt-2 font-bold">
                    <li>Ne réduit pas le besoin de réintubation.</li>
                    <li>Retarde une réintubation finalement inévitable.</li>
                    <li>Est associée à une <strong>augmentation significative de la mortalité</strong> en soins intensifs.</li>
                </ul>
                <p className="mt-2">
                    L'exception peut être les patients BPCO, où un essai de VNI peut être tenté, mais avec une surveillance extrêmement rapprochée.
                </p>
            </InfoCard>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Ouellette DR, et al. Chest. 2017.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Réglages et Modalités Pratiques" icon={<Wind className="w-6 h-6"/>} variant="default">
             <p className="text-slate-700 mb-4 text-base">Les réglages visent à fournir un support confortable pour réduire le travail respiratoire.</p>
             <InfoCard title="Réglages Typiques en Préventif" icon={<Wind className="w-5 h-5"/>} variant="blue">
                <ul className="list-disc list-inside">
                    <li><strong>Mode :</strong> VNI (Bi-level) en mode S/T (Spontané/Temporisé).</li>
                    <li><strong>EPAP / PEEP :</strong> <strong>5 à 8 cmH₂O</strong> pour contrer l'atélectasie et l'œdème glottique.</li>
                    <li><strong>Aide Inspiratoire (AI) :</strong> <strong>8 à 12 cmH₂O</strong> pour décharger les muscles respiratoires.</li>
                    <li><strong>FiO₂ :</strong> Pour SpO₂ supérieur à 92%.</li>
                    <li><strong>Durée :</strong> Appliquée de manière intermittente ou continue pendant les premières 24-48 heures.</li>
                </ul>
            </InfoCard>
            <div className="border-t border-slate-200 pt-3 mt-4">
                <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                    <li>Ouellette DR, et al. Chest. 2017.</li>
                </ul>
            </div>
        </Accordion>
    </div>
);
