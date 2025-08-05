

import React from 'react';
import { SectionId } from '../types';
import { Footer } from './Footer';

import WelcomeScreen from './WelcomeScreen';
import { DefinitionSection } from './DefinitionSection';
import { IndicationsSection } from './IndicationsSection';
import { VentilateursModesSection } from './VentilateursModesSection';
import { TechnologieSection } from './TechnologieSection';
import { MiseEnPlaceSection } from './MiseEnPlaceSection';
import { ComplicationsSection } from './ComplicationsSection';
import { SevrageSection } from './SevrageSection';
import { NewApplicationsSection } from './NewApplicationsSection';
import { InterfacesSection } from './InterfacesSection';
import { CompensationFuitesSection } from './CompensationFuitesSection';
import { RecommandationsGAVO2Section } from './RecommandationsGAVO2Section';
import { VniAigueSection } from './VniAigueSection';
import { VniBpcoSection } from './VniBpcoSection';
import { VniNmdSection } from './VniNmdSection';
import { VniTosSection } from './VniTosSection';
import { VniPediatriqueSection } from './VniPediatriqueSection';
import { GuidelinesSection } from './GuidelinesSection';
import { OapSection } from './OapSection';
import { PostExtubationSection } from './PostExtubationSection';
import { PostOperatoireSection } from './PostOperatoireSection';
import { ClinicalCaseSimulator } from './ClinicalCaseSimulator';
import { SettingsLab } from './SettingsLab';


interface ContentAreaProps {
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
}

const sectionComponents: Record<SectionId, React.FC<any>> = {
  welcome: WelcomeScreen,
  principes: DefinitionSection,
  'principes-fondamentaux': DefinitionSection,
  indications: IndicationsSection,
  'ventilateurs-modes': VentilateursModesSection,
  interfaces: InterfacesSection,
  technologie: TechnologieSection,
  'new-applications': NewApplicationsSection,
  'aspects-pratiques': MiseEnPlaceSection,
  'mise-en-place': MiseEnPlaceSection,
  complications: ComplicationsSection,
  sevrage: SevrageSection,
  'compensation-fuites': CompensationFuitesSection,
  'recommandations-gavo2': RecommandationsGAVO2Section,
  'vni-aigu': VniAigueSection,
  'vni-bpco': VniBpcoSection,
  'vni-tos': VniTosSection,
  'vni-nmd': VniNmdSection,
  'vni-pediatrique': VniPediatriqueSection,
  guidelines: GuidelinesSection,
  'autres-indications': OapSection,
  oap: OapSection,
  'post-extubation': PostExtubationSection,
  'post-operatoire': PostOperatoireSection,
  'clinical-cases': ClinicalCaseSimulator,
  'settings-lab': SettingsLab,
};

export const ContentArea: React.FC<ContentAreaProps> = ({ activeSection, setActiveSection }) => {
  const ComponentToRender = sectionComponents[activeSection] || WelcomeScreen;

  return (
    <div className="flex-1 overflow-auto bg-white rounded-2xl shadow-lg">
      <div className="p-10 max-w-7xl mx-auto">
        {React.createElement(ComponentToRender as React.ComponentType<{ setActiveSection?: (section: SectionId) => void; }>, { setActiveSection })}
        <Footer />
      </div>
    </div>
  );
};