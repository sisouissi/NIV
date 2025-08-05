

import React from 'react';
import { SectionId } from '../types.ts';
import { Footer } from './Footer.tsx';

import WelcomeScreen from './WelcomeScreen.tsx';
import { DefinitionSection } from './DefinitionSection.tsx';
import { IndicationsSection } from './IndicationsSection.tsx';
import { VentilateursModesSection } from './VentilateursModesSection.tsx';
import { TechnologieSection } from './TechnologieSection.tsx';
import { MiseEnPlaceSection } from './MiseEnPlaceSection.tsx';
import { ComplicationsSection } from './ComplicationsSection.tsx';
import { SevrageSection } from './SevrageSection.tsx';
import { NewApplicationsSection } from './NewApplicationsSection.tsx';
import { InterfacesSection } from './InterfacesSection.tsx';
import { CompensationFuitesSection } from './CompensationFuitesSection.tsx';
import { RecommandationsGAVO2Section } from './RecommandationsGAVO2Section.tsx';
import { VniAigueSection } from './VniAigueSection.tsx';
import { VniBpcoSection } from './VniBpcoSection.tsx';
import { VniNmdSection } from './VniNmdSection.tsx';
import { VniTosSection } from './VniTosSection.tsx';
import { VniPediatriqueSection } from './VniPediatriqueSection.tsx';
import { GuidelinesSection } from './GuidelinesSection.tsx';
import { OapSection } from './OapSection.tsx';
import { PostExtubationSection } from './PostExtubationSection.tsx';
import { PostOperatoireSection } from './PostOperatoireSection.tsx';
import { ClinicalCaseSimulator } from './ClinicalCaseSimulator.tsx';
import { SettingsLab } from './SettingsLab.tsx';


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