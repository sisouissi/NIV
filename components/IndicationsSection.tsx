
import React from 'react';
import { SectionId } from '../types';
import { ListChecks, CheckCircle, XCircle, AlertTriangle, Shield, Heart, Lungs, ShieldX, Users, BookOpen, SlidersHorizontal, ChevronRight, Activity, Calculator, Wrench } from './icons';
import { Accordion } from './Accordion';

interface IndicationsSectionProps {
  setActiveSection: (section: SectionId) => void;
}

const LinkButton: React.FC<{ onClick: () => void; children: React.ReactNode; icon: React.ReactNode }> = ({ onClick, children, icon }) => (
    <button onClick={onClick} className="inline-flex items-center space-x-1.5 text-sm text-indigo-600 hover:text-indigo-800 hover:underline font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-300 rounded">
        {icon}
        <span>{children}</span>
    </button>
);

const Recommendation: React.FC<{ title: string, strength: string, details: string, icon: React.ReactNode, variant: 'strong' | 'conditional' | 'not-recommended', links?: React.ReactNode }> = ({ title, strength, details, icon, variant, links }) => {
    const colors = {
        strong: 'border-green-500 bg-green-50',
        conditional: 'border-blue-500 bg-blue-50',
        'not-recommended': 'border-amber-500 bg-amber-50'
    };
    const strengthColors = {
        strong: 'bg-green-100 text-green-800',
        conditional: 'bg-blue-100 text-blue-800',
        'not-recommended': 'bg-amber-100 text-amber-800'
    }

    return (
        <div className={`p-4 rounded-lg border-l-4 ${colors[variant]}`}>
            <div className="flex items-start">
                <div className="flex-shrink-0">{icon}</div>
                <div className="ml-4 w-full">
                    <h4 className="text-lg font-semibold text-slate-800">{title}</h4>
                    <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-full mt-1 mb-2 ${strengthColors[variant]}`}>{strength}</span>
                    <p className="text-slate-700 text-base" dangerouslySetInnerHTML={{ __html: details }}></p>
                    {links && <div className="mt-3 pt-3 border-t border-slate-200 flex flex-wrap gap-x-4 gap-y-2">{links}</div>}
                </div>
            </div>
        </div>
    );
};


const ContraindicationList: React.FC<{ title: string, items: string[], icon: React.ReactNode, variant: 'danger' | 'warning' }> = ({ title, items, icon, variant }) => {
    const colors = {
        danger: { text: 'text-red-800' },
        warning: { text: 'text-amber-800' }
    };
    return (
        <div>
            <h4 className={`font-semibold text-lg flex items-center mb-3 ${colors[variant].text}`}>
                {icon}
                <span className="ml-2">{title}</span>
            </h4>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-700">
                {items.map((item, index) => <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>)}
            </ul>
        </div>
    );
};

export const IndicationsSection: React.FC<IndicationsSectionProps> = ({ setActiveSection }) => (
  <div className="space-y-8 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-3xl font-bold text-slate-900 flex items-center">
        <ListChecks className="w-8 h-8 mr-4 text-indigo-600" />
        Indications & Contre-indications
      </h2>
      <p className="mt-2 text-slate-600 text-base">
        Identifier les bons candidats pour la VNI, basé sur les dernières recommandations ERS/ATS.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg flex items-center space-x-4">
            <Activity className="w-10 h-10 text-blue-500 flex-shrink-0"/>
            <div>
                <h3 className="font-bold text-blue-800">Prêt à commencer ?</h3>
                <p className="text-sm text-slate-600 mt-1 mb-2">Consultez notre guide étape par étape pour une initiation réussie.</p>
                <LinkButton onClick={() => setActiveSection('mise-en-place')} icon={<ChevronRight className="w-4 h-4"/>}>
                    Aller au guide de Mise en Place
                </LinkButton>
            </div>
        </div>
        <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg flex items-center space-x-4">
            <Calculator className="w-10 h-10 text-purple-500 flex-shrink-0"/>
            <div>
                <h3 className="font-bold text-purple-800">Évaluer le risque d'échec ?</h3>
                <p className="text-sm text-slate-600 mt-1 mb-2">Utilisez nos calculateurs pour estimer le pronostic de la VNI.</p>
                <LinkButton onClick={() => setActiveSection('sevrage')} icon={<ChevronRight className="w-4 h-4"/>}>
                    Calculer le score HACOR & l'index ROX
                </LinkButton>
            </div>
        </div>
    </div>

    <Accordion title="Indications Fortement Recommandées" icon={<CheckCircle className="w-6 h-6"/>} variant="success">
        <div className="space-y-4">
            <Recommendation
                title="BPCO en Acidose Respiratoire"
                strength="Recommandation Forte - Haute certitude"
                details="La VNI Bi-niveau est le traitement de choix pour l'insuffisance respiratoire aiguë (IRA) hypercapnique (<strong>pH inférieur à 7.35</strong>) sur BPCO. Elle réduit le besoin d'intubation et la mortalité. La recommandation est encore plus forte pour les pH entre 7.25 et 7.35."
                icon={<Lungs className="w-8 h-8 text-green-600"/>}
                variant="strong"
                links={
                    <>
                        <LinkButton onClick={() => setActiveSection('vni-bpco')} icon={<BookOpen className="w-4 h-4"/>}>En savoir plus sur la BPCO</LinkButton>
                        <LinkButton onClick={() => setActiveSection('recommandations-gavo2')} icon={<SlidersHorizontal className="w-4 h-4"/>}>Voir réglages GAVO2</LinkButton>
                    </>
                }
            />
            <Recommendation
                title="Œdème Aigu du Poumon Cardiogénique"
                strength="Recommandation Forte - Certitude modérée"
                details="La CPAP ou la VNI Bi-niveau sont fortement recommandées. Ces modes améliorent la dyspnée et les paramètres physiologiques en diminuant la pré-charge et la post-charge VG."
                icon={<Heart className="w-8 h-8 text-green-600"/>}
                variant="strong"
                 links={<LinkButton onClick={() => setActiveSection('oap')} icon={<BookOpen className="w-4 h-4"/>}>En savoir plus sur l'OAP</LinkButton>}
            />
             <Recommendation
                title="Syndrome Obésité-Hypoventilation (SOH) en décompensation aiguë"
                strength="Recommandation Forte - Haute certitude"
                details="Pour les patients présentant une insuffisance respiratoire aiguë hypercapnique dans un contexte de SOH, la VNI Bi-niveau est le traitement de première intention. Elle améliore rapidement les échanges gazeux, réduit le travail respiratoire et, initiée lors de l'hospitalisation, <strong>diminue drastiquement la mortalité et les réadmissions</strong>."
                icon={<Lungs className="w-8 h-8 text-green-600"/>}
                variant="strong"
                links={
                    <>
                        <LinkButton onClick={() => setActiveSection('vni-tos')} icon={<BookOpen className="w-4 h-4"/>}>En savoir plus sur le SOH</LinkButton>
                        <LinkButton onClick={() => setActiveSection('recommandations-gavo2')} icon={<SlidersHorizontal className="w-4 h-4"/>}>Voir réglages GAVO2</LinkButton>
                    </>
                }
            />
        </div>
        <div className="border-t border-slate-200 pt-3 mt-4">
            <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
            <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                <li>Ergan B, et al. Eur Respir J. 2019. (BPCO)</li>
                <li>Mokhlesi B, et al. Am J Respir Crit Care Med. 2019. (SOH)</li>
                <li>Bellone A, et al. Chest. 2018. (OAP)</li>
            </ul>
        </div>
    </Accordion>

    <Accordion title="Indications Conditionnelles (Bénéfice variable)" icon={<AlertTriangle className="w-6 h-6"/>} variant="default">
        <div className="space-y-4">
             <Recommendation
                title="Post-extubation (Prévention chez patients à haut risque)"
                strength="Recommandation Conditionnelle"
                details="La VNI est suggérée pour <strong>prévenir</strong> l'échec d'extubation chez les patients à haut risque (ex: supérieur à 65 ans, comorbidités cardiaques, hypercapnie, toux inefficace). Elle réduit l'incidence de l'IRA post-extubation et la mortalité en USI dans ce groupe."
                icon={<Shield className="w-8 h-8 text-blue-600"/>}
                variant="conditional"
                links={<LinkButton onClick={() => setActiveSection('post-extubation')} icon={<BookOpen className="w-4 h-4"/>}>En savoir plus</LinkButton>}
            />
            <Recommendation
                title="IRA Post-opératoire"
                strength="Recommandation Conditionnelle - Certitude modérée"
                details="La VNI peut être utilisée pour traiter l'IRA hypoxémique après une chirurgie thoracique ou abdominale pour réduire le taux d'intubation et la mortalité hospitalière."
                icon={<Shield className="w-8 h-8 text-blue-600"/>}
                variant="conditional"
                links={<LinkButton onClick={() => setActiveSection('post-operatoire')} icon={<BookOpen className="w-4 h-4"/>}>En savoir plus</LinkButton>}
            />
            <Recommendation
                title="Patients Immunodéprimés"
                strength="Recommandation Conditionnelle - Certitude modérée"
                details="La VNI précoce peut être une option pour éviter l'intubation et ses complications infectieuses, bien que les études récentes ne montrent pas toujours un avantage clair par rapport à l'oxygénothérapie standard."
                icon={<Users className="w-8 h-8 text-blue-600"/>}
                variant="conditional"
            />
            <Recommendation
                title="Traumatisme Thoracique"
                strength="Recommandation Conditionnelle - Certitude modérée"
                details="La VNI peut être utilisée chez les patients victimes de traumatisme thoracique pour améliorer l'oxygénation et potentiellement réduire la durée de séjour en soins intensifs."
                icon={<Shield className="w-8 h-8 text-blue-600"/>}
                variant="conditional"
            />
             <Recommendation
                title="Soins Palliatifs"
                strength="Recommandation Conditionnelle - Certitude modérée"
                details="La VNI peut être proposée pour soulager la dyspnée chez les patients en fin de vie (cancer ou autres maladies terminales), si elle est bien tolérée."
                icon={<Heart className="w-8 h-8 text-blue-600"/>}
                variant="conditional"
            />
        </div>
        <div className="border-t border-slate-200 pt-3 mt-4">
            <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
            <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                <li>Ouellette DR, et al. Chest. 2017. (Post-extubation)</li>
                <li>Leone M, et al. Intensive Care Med. 2020. (Post-opératoire)</li>
            </ul>
        </div>
    </Accordion>

    <Accordion title="Utilisations Non Recommandées ou Incertaines" icon={<XCircle className="w-6 h-6"/>} variant="danger">
         <div className="space-y-4">
            <Recommendation
                title="Prévention de l'Échec d'Extubation (tous venants)"
                strength="Non recommandé"
                details="L'utilisation de la VNI est <strong>déconseillée</strong> pour prévenir systématiquement l'échec d'extubation chez les patients non sélectionnés ou à faible risque."
                icon={<ShieldX className="w-8 h-8 text-amber-600"/>}
                variant="not-recommended"
            />
            <Recommendation
                title="Traitement de l'Échec d'Extubation"
                strength="Non recommandé"
                details="L'utilisation de la VNI est <strong>déconseillée</strong> pour traiter une insuffisance respiratoire post-extubation déjà installée. La réintubation ne doit pas être retardée, car l'échec de la VNI dans ce contexte augmente la mortalité."
                icon={<ShieldX className="w-8 h-8 text-amber-600"/>}
                variant="not-recommended"
            />
             <Recommendation
                title="Crise d'Asthme Aiguë"
                strength="Recommandation non formulée"
                details="Les données actuelles sont insuffisantes pour formuler une recommandation. Son utilisation reste à la discrétion du clinicien avec une surveillance très étroite."
                icon={<AlertTriangle className="w-8 h-8 text-amber-600"/>}
                variant="not-recommended"
            />
        </div>
        <div className="border-t border-slate-200 pt-3 mt-4">
            <h5 className="font-semibold text-sm text-slate-600 mb-2">Références</h5>
            <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                <li>Ouellette DR, et al. Chest. 2017. (Échec d'extubation)</li>
            </ul>
        </div>
    </Accordion>
    
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Contre-indications Générales</h3>
        <div className="grid md:grid-cols-2 gap-8">
            <ContraindicationList 
                title="Contre-indications Absolues"
                icon={<XCircle className="w-6 h-6"/>}
                variant="danger"
                items={[
                    "Arrêt cardiaque ou respiratoire.",
                    "Instabilité hémodynamique sévère (choc, arythmies ventriculaires...).",
                    "Coma, encéphalopathie sévère (incapacité à protéger les voies aériennes).",
                    "Obstruction des voies aériennes supérieures.",
                    "Traumatisme facial majeur ou chirurgie récente empêchant l'ajustement du masque.",
                    "Hémorragie digestive haute active ou vomissements incoercibles."
                ]}
            />
            <ContraindicationList 
                title="Contre-indications Relatives"
                icon={<AlertTriangle className="w-6 h-6"/>}
                variant="warning"
                items={[
                    "Agitation ou anxiété extrêmes.",
                    "Patient non coopératif.",
                    "Sécrétions bronchiques abondantes et difficiles à gérer.",
                    "Chirurgie œsophagienne ou gastrique recente."
                ]}
            />
        </div>
        <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-lg">
            <h4 className="font-semibold text-slate-800 mb-2">Besoin d'aide pour gérer une complication ?</h4>
            <p className="text-sm text-slate-600 mb-3">Une contre-indication relative comme l'agitation ou l'encombrement peut souvent être gérée. Consultez notre guide de dépannage pour des stratégies pratiques.</p>
            <LinkButton onClick={() => setActiveSection('complications')} icon={<Wrench className="w-4 h-4"/>}>
                Voir la section Complications & Dépannage
            </LinkButton>
        </div>
    </div>
  </div>
);