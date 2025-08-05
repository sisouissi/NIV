import React from 'react';
import { Home, Lungs, ListChecks, Activity, Wrench, TrendingDown, BrainCircuit, Wind, TrendingUp, Users, AlertTriangle, User, BookOpen, Siren, ClipboardList, Moon, Child, Shield, PlusCircle, Heart, ShieldCheck, FileMedical, Bot, SlidersHorizontal, MessageSquareText } from './components/icons/index.ts';
import { MenuItem } from './types.ts';

export const MENU_ITEMS: MenuItem[] = [
  { id: 'welcome', title: 'Accueil', icon: Home },
  { 
    id: 'principes', 
    title: 'Bases, Principes & Actualités', 
    icon: Lungs,
    subItems: [
        { id: 'principes-fondamentaux', title: 'Fondamentaux de la VNI', icon: BrainCircuit },
        { id: 'indications', title: 'Indications & Contre-indications', icon: ListChecks },
        { id: 'ventilateurs-modes', title: 'Ventilateurs & Modes', icon: Wind },
        { id: 'interfaces', title: 'Interfaces', icon: User },
        { id: 'technologie', title: 'Technologie & Matériel', icon: Wrench },
        { id: 'new-applications', title: 'Nouvelles Applications', icon: TrendingUp }
    ]
  },
  {
    id: 'aspects-pratiques',
    title: 'Aspects pratiques',
    icon: Users,
    subItems: [
      { id: 'mise-en-place', title: 'Mise en Place', icon: Activity },
      { id: 'complications', title: 'Complications & Dépannage', icon: AlertTriangle },
      { id: 'compensation-fuites', title: 'Compensation des Fuites & Synchronisation', icon: Wrench },
      { id: 'sevrage', title: 'Sevrage de la VNI', icon: TrendingDown }
    ]
  },
  {
    id: 'vni-aigu',
    title: 'Apport de la VNI dans l’Insuffisance Respiratoire Aiguë',
    icon: Siren
  },
  {
    id: 'vni-bpco',
    title: 'Apport de la VNI dans la BPCO',
    icon: ClipboardList
  },
  {
    id: 'vni-tos',
    title: 'VNI & Troubles Obstructifs du Sommeil',
    icon: Moon
  },
  {
    id: 'vni-nmd',
    title: 'Apport de la VNI dans les maladies neuromusculaires',
    icon: BrainCircuit
  },
  {
    id: 'vni-pediatrique',
    title: 'VNI en Pédiatrie',
    icon: Child
  },
  {
    id: 'autres-indications',
    title: 'Autres Indications de la VNI',
    icon: PlusCircle,
    subItems: [
      { id: 'oap', title: 'Œdème Aigu du Poumon', icon: Heart },
      { id: 'post-extubation', title: 'Post-extubation', icon: ShieldCheck },
      { id: 'post-operatoire', title: 'IRA Post-opératoire', icon: FileMedical }
    ]
  },
  { 
    id: 'recommandations-gavo2', 
    title: 'Recommandations GAVO2', 
    icon: BookOpen 
  },
  {
    id: 'guidelines',
    title: 'Guides & Recommandations',
    icon: Shield
  },
  {
    id: 'clinical-cases',
    title: 'Cas Cliniques Interactifs',
    icon: Bot
  },
  {
    id: 'settings-lab',
    title: 'Laboratoire de Réglages',
    icon: SlidersHorizontal
  }
];