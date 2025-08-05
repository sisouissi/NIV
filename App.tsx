

import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar.tsx';
import { ContentArea } from './components/ContentArea.tsx';
import { SectionId } from './types.ts';
import { AbbreviationsModal } from './components/AbbreviationsModal.tsx';
import { ReferencesModal } from './components/ReferencesModal.tsx';
import { FloatingActionButton } from './components/FloatingActionButton.tsx';
import { ExpertChatModal } from './components/ExpertChatModal.tsx';

// Configuration de l'essai
const TRIAL_DURATION_DAYS = 5;
const ACCESS_CODES = [
  'PNEUMO2025',
  'RESPIR2025', 
  'MEDIC2025',
  'TRIAL2025',
  'ACCESS2025'
]; // Codes d'accès valides

// Interface pour les données d'essai
interface TrialData {
  startDate: string;
  lastAccess: string;
  usedDays: number;
  isExpired: boolean;
  hasAccessCode: boolean;
  fingerprint: string;
}

// Fonction pour générer une empreinte unique du navigateur/machine
const generateFingerprint = (): string => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('Fingerprint test', 2, 2);
  }
  
  const fingerprint = [
    navigator.userAgent,
    navigator.language,
    screen.width + 'x' + screen.height,
    new Date().getTimezoneOffset(),
    canvas.toDataURL()
  ].join('|');
  
  return btoa(fingerprint).substring(0, 32);
};

// Fonction pour obtenir la date locale (suppression de l'API externe)
const getRealDate = async (): Promise<Date> => {
  // On retourne directement la date système dans une promesse résolue
  // pour maintenir la structure asynchrone sans appel réseau.
  return Promise.resolve(new Date());
};

// Fonction pour chiffrer les données (simple obfuscation)
const encryptData = (data: string): string => {
  return btoa(encodeURIComponent(data)).split('').reverse().join('');
};

// Fonction pour déchiffrer les données
const decryptData = (encryptedData: string): string => {
  try {
    return decodeURIComponent(atob(encryptedData.split('').reverse().join('')));
  } catch {
    return '';
  }
};

// Gestionnaire du système d'essai
class TrialManager {
  private static readonly STORAGE_KEY = '_app_trial_data_';
  
  static initializeTrial(realDate: Date): TrialData {
    const fingerprint = generateFingerprint();
    const existingData = this.getTrialData();
    
    // Si données existantes avec même empreinte, les utiliser
    if (existingData && existingData.fingerprint === fingerprint) {
      return existingData;
    }
    
    // Nouvelle installation
    const trialData: TrialData = {
      startDate: realDate.toISOString(),
      lastAccess: realDate.toISOString(),
      usedDays: 0,
      isExpired: false,
      hasAccessCode: false,
      fingerprint
    };
    
    this.saveTrialData(trialData);
    return trialData;
  }
  
  static updateTrialData(realDate: Date): TrialData {
    const trialData = this.getTrialData();
    if (!trialData) {
      return this.initializeTrial(realDate);
    }
    
    const startDate = new Date(trialData.startDate);
    const lastAccess = new Date(trialData.lastAccess);
    const daysSinceStart = Math.floor((realDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    
    // Détection de manipulation de date (recul)
    if (realDate.getTime() < lastAccess.getTime() - (60 * 60 * 1000)) {
      trialData.isExpired = true;
    }
    
    // Mise à jour des jours utilisés
    trialData.usedDays = Math.max(daysSinceStart, trialData.usedDays);
    trialData.lastAccess = realDate.toISOString();
    
    // Vérification d'expiration
    if (trialData.usedDays >= TRIAL_DURATION_DAYS && !trialData.hasAccessCode) {
      trialData.isExpired = true;
    }
    
    this.saveTrialData(trialData);
    return trialData;
  }
  
  static validateAccessCode(code: string): boolean {
    return ACCESS_CODES.includes(code.toUpperCase());
  }
  
  static activateAccessCode(code: string): boolean {
    if (!this.validateAccessCode(code)) {
      return false;
    }
    
    const trialData = this.getTrialData();
    if (trialData) {
      trialData.hasAccessCode = true;
      trialData.isExpired = false;
      this.saveTrialData(trialData);
      return true;
    }
    return false;
  }
  
  private static getTrialData(): TrialData | null {
    try {
      const encryptedData = localStorage.getItem(this.STORAGE_KEY);
      if (!encryptedData) return null;
      
      const decryptedData = decryptData(encryptedData);
      return JSON.parse(decryptedData);
    } catch {
      return null;
    }
  }
  
  private static saveTrialData(data: TrialData): void {
    try {
      const encryptedData = encryptData(JSON.stringify(data));
      localStorage.setItem(this.STORAGE_KEY, encryptedData);
    } catch (error) {
      console.error('Erreur sauvegarde données d\'essai');
    }
  }
}

// Composant pour la demande de code d'accès
const AccessCodeForm: React.FC<{ onCodeSubmit: (code: string) => void }> = ({ onCodeSubmit }) => {
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulation d'une vérification
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (TrialManager.validateAccessCode(accessCode)) {
      onCodeSubmit(accessCode);
    } else {
      setError('Code d\'accès invalide. Veuillez contacter le support.');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <div className="mb-6">
          <svg className="mx-auto h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m0 0a2 2 0 012 2m-2-2h-6m6 0v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2h6z" />
          </svg>
        </div>
        
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Période d'essai terminée
        </h2>
        
        <p className="text-gray-600 mb-6">
          Votre période d'essai de {TRIAL_DURATION_DAYS} jours est expirée. 
          Saisissez votre code d'accès pour continuer à utiliser l'application.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="accessCode" className="block text-sm font-medium text-gray-700 mb-2">
              Code d'accès
            </label>
            <input
              type="text"
              id="accessCode"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value.toUpperCase())}
              placeholder="Entrez votre code"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center font-mono text-lg"
              required
              disabled={isLoading}
              maxLength={20}
            />
          </div>
          
          {error && (
            <div className="text-red-600 text-sm bg-red-50 p-3 rounded border-l-4 border-red-500">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            disabled={isLoading || !accessCode}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Vérification...
              </span>
            ) : (
              'Valider le code'
            )}
          </button>
        </form>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-3">
            Besoin d'un code d'accès ?
          </p>
          <div className="space-y-2">
            <button 
              onClick={() => window.open('mailto:zouhaier.souissi@gmail.com?subject=Demande de code d\'accès', '_blank')}
              className="w-full text-blue-600 hover:text-blue-700 text-sm"
            >
              📧 Contacter par email
            </button>
            <button 
              onClick={() => window.open('tel:+21698313576', '_blank')}
              className="w-full text-green-600 hover:text-green-700 text-sm"
            >
              📞 Appeler le support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant principal
const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('welcome');
  const [isAbbreviationsModalOpen, setIsAbbreviationsModalOpen] = useState(false);
  const [isReferencesModalOpen, setIsReferencesModalOpen] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [trialData, setTrialData] = useState<TrialData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialisation et vérification de l'essai
  useEffect(() => {
    const initializeTrial = async () => {
      try {
        const realDate = await getRealDate();
        const data = TrialManager.updateTrialData(realDate);
        setTrialData(data);
      } catch (error) {
        console.error('Erreur initialisation essai:', error);
        // En cas d'erreur, utiliser la date système
        const data = TrialManager.updateTrialData(new Date());
        setTrialData(data);
      } finally {
        setIsLoading(false);
      }
    };

    initializeTrial();

    // Vérification périodique (toutes les 2 minutes)
    const interval = setInterval(async () => {
      const realDate = await getRealDate();
      const data = TrialManager.updateTrialData(realDate);
      setTrialData(data);
    }, 2 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  // Gestion de la soumission du code d'accès
  const handleAccessCodeSubmit = (code: string) => {
    if (TrialManager.activateAccessCode(code)) {
      const updatedData = TrialManager.updateTrialData(new Date());
      setTrialData(updatedData);
    }
  };

  // Calculer les jours restants
  const getDaysRemaining = (): number => {
    if (!trialData || trialData.hasAccessCode) return TRIAL_DURATION_DAYS;
    return Math.max(0, TRIAL_DURATION_DAYS - trialData.usedDays);
  };

  // Affichage du loader pendant l'initialisation
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="text-center">
          <svg className="animate-spin h-12 w-12 text-blue-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-gray-600">Vérification de la licence...</p>
        </div>
      </div>
    );
  }

  // Si essai expiré et pas de code d'accès, afficher le formulaire
  if (trialData?.isExpired && !trialData?.hasAccessCode) {
    return <AccessCodeForm onCodeSubmit={handleAccessCodeSubmit} />;
  }

  const daysRemaining = getDaysRemaining();

  // Application normale
  return (
    <>
      <div className="h-screen bg-slate-100 font-sans p-4 flex gap-4">
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          onOpenAbbreviations={() => setIsAbbreviationsModalOpen(true)}
          onOpenReferences={() => setIsReferencesModalOpen(true)}
        />
        <ContentArea activeSection={activeSection} setActiveSection={setActiveSection} />
        
        {/* Bannière d'avertissement pour les derniers jours */}
        {!trialData?.hasAccessCode && daysRemaining <= 2 && daysRemaining > 0 && (
          <div className="fixed top-0 left-0 right-0 bg-orange-500 text-white text-center py-2 text-sm z-50">
            ⚠️ Attention : Votre période d'essai expire dans {daysRemaining} jour{daysRemaining > 1 ? 's' : ''} !
          </div>
        )}
        
        {/* Indicateur de statut */}
        <div className="fixed bottom-4 right-24 z-10 shadow-lg animate-fade-in">
          {trialData?.hasAccessCode ? (
            <div className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm">
              ✓ Version complète activée
            </div>
          ) : (
            <div 
              className="text-white px-3 py-1 rounded-lg text-sm"
              style={{ background: 'linear-gradient(to bottom right, #1f2937, #4338ca, #6d28d9)' }}
            >
              🆓 Essai : {daysRemaining} jour{daysRemaining > 1 ? 's' : ''} restant{daysRemaining > 1 ? 's' : ''}
            </div>
          )}
        </div>
      </div>

      <FloatingActionButton onClick={() => setIsChatModalOpen(true)} />
      
      <ExpertChatModal isOpen={isChatModalOpen} onClose={() => setIsChatModalOpen(false)} />
      {isAbbreviationsModalOpen && <AbbreviationsModal onClose={() => setIsAbbreviationsModalOpen(false)} />}
      {isReferencesModalOpen && <ReferencesModal onClose={() => setIsReferencesModalOpen(false)} />}
    </>
  );
};

export default App;