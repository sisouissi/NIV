import React from 'react';

export type SectionId = 'welcome' | 'principes' | 'principes-fondamentaux' | 'indications' | 'ventilateurs-modes' | 'interfaces' | 'technologie' | 'new-applications' | 'aspects-pratiques' | 'mise-en-place' | 'complications' | 'sevrage' | 'compensation-fuites' | 'recommandations-gavo2' | 'vni-aigu' | 'vni-bpco' | 'vni-tos' | 'vni-nmd' | 'vni-pediatrique' | 'guidelines' | 'autres-indications' | 'oap' | 'post-extubation' | 'post-operatoire' | 'clinical-cases' | 'settings-lab';

export interface MenuItem {
  id: SectionId;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  subItems?: MenuItem[];
}