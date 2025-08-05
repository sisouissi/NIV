import React, { useState } from 'react';
import { RefreshCw, Wind } from '../icons';

type Mode = 'initial' | 'cpap' | 'bipap' | 'avaps';

const explanations: Record<Mode, { title: string; points: string[] }> = {
  initial: {
    title: 'Démystifiez les Modes Ventilatoires',
    points: [
        'Sélectionnez un mode pour voir comment il interagit avec la respiration du patient.',
        'Observez les courbes de Pression (orange) et de Débit (bleu) pour chaque scénario.'
    ],
  },
  cpap: {
    title: 'CPAP (Pression Positive Continue)',
    points: [
      'Une pression de base constante (EPAP/PEP) est appliquée.',
      'Le ventilateur ne fournit pas d\'aide active à l\'inspiration.',
      'Le patient respire spontanément "au-dessus" de ce niveau de pression.',
      'Idéal pour lever les obstructions (SAOS) ou pour l\'OAP.',
    ],
  },
  bipap: {
    title: 'VS-AI-PEP (Bi-level)',
    points: [
      'Deux niveaux de pression sont utilisés : EPAP (bas) et IPAP (haut).',
      'Le ventilateur détecte l\'effort du patient et augmente la pression à l\'IPAP pour l\'assister (Aide Inspiratoire).',
      'Augmente le volume courant et réduit le travail respiratoire.',
      'Le mode le plus courant pour l\'hypercapnie (BPCO, SOH).',
    ],
  },
  avaps: {
    title: 'AVAPS (Volume Garanti)',
    points: [
      'Le clinicien définit un volume courant (Vt) cible.',
      'Le ventilateur ajuste automatiquement le niveau d\'Aide Inspiratoire (la pression) cycle après cycle pour atteindre ce volume.',
      'La pression varie pour compenser les changements de mécanique respiratoire ou les fuites.',
      'Très utile pour l\'hypoventilation (SOH, maladies neuromusculaires).',
    ],
  },
};

export const VentilationModesAnimation: React.FC = () => {
  const [mode, setMode] = useState<Mode>('initial');

  const ExplanationPanel = () => {
    const current = explanations[mode];
    return (
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg min-h-[220px]">
        <h4 className="font-bold text-lg text-slate-800 flex items-center">
            <Wind className="w-6 h-6 mr-2 text-indigo-600"/>
            {current.title}
        </h4>
        <ul className="list-disc list-inside mt-2 space-y-2 text-sm text-slate-600">
          {current.points.map((point, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <style>{`
        .axis, .grid-line { stroke: #cbd5e1; stroke-width: 1; }
        .label { font-size: 10px; font-family: sans-serif; fill: #475569; }
        
        .flow-curve { stroke: #0ea5e9; stroke-width: 2.5; fill: none; }
        .pressure-curve { stroke: #f59e0b; stroke-width: 2.5; fill: none; }
        .vt-bar { fill: #34d399; opacity: 0.6; }

        @keyframes flow-anim {
          from { d: path('M 0 0 C 20 -60, 60 -60, 80 0 C 100 30, 140 30, 160 0 H 200'); }
          to { d: path('M 0 0 C 20 -60, 60 -60, 80 0 C 100 30, 140 30, 160 0 H 200'); }
        }
        .anim-cpap .pressure-curve { d: path('M -5 -30 H 200'); }
        .anim-cpap .flow-curve { animation: flow-anim 4s infinite ease-in-out; }

        @keyframes pressure-bipap {
            0%, 100% { d: path('M -5 0 H 200'); }
            50% { d: path('M -5 0 H 5 V-50 H 155 V0 H 200'); }
        }
        .anim-bipap .pressure-curve { animation: pressure-bipap 4s infinite ease-in-out; }
        .anim-bipap .flow-curve { animation: flow-anim 4s infinite ease-in-out; }

        @keyframes pressure-avaps {
            0% { d: path('M -5 0 H 5 V-45 H 155 V0 H 200'); }
            25% { d: path('M -5 0 H 5 V-55 H 155 V0 H 200'); }
            50% { d: path('M -5 0 H 5 V-50 H 155 V0 H 200'); }
            75% { d: path('M -5 0 H 5 V-48 H 155 V0 H 200'); }
            100% { d: path('M -5 0 H 5 V-45 H 155 V0 H 200'); }
        }
         @keyframes vt-avaps {
            0%, 100% { height: 70px; }
            50% { height: 70px; }
        }
        .anim-avaps .pressure-curve { animation: pressure-avaps 8s infinite linear; }
        .anim-avaps .flow-curve { animation: flow-anim 4s infinite ease-in-out; }
        .anim-avaps .vt-bar { animation: vt-avaps 8s infinite linear; }

      `}</style>
      
      <div className="bg-slate-100 p-2 rounded-lg border-4 border-slate-200 shadow-lg">
        <svg viewBox="0 0 250 150" className={`w-full h-auto animation-container anim-${mode}`}>
          <rect width="250" height="150" fill="#f1f5f9" rx="4" />
          
          {/* Axes & Labels */}
          <g transform="translate(45, 0)">
            {/* Pressure Axis */}
            <text className="label" x="-33" y="48">Pression</text>
            <line className="axis" x1="0" y1="75" x2="200" y2="75" />
            <text className="label" text-anchor="end" x="-5" y="78">EPAP</text>
            <text className="label" text-anchor="end" x="-5" y="28">IPAP</text>

            {/* Flow Axis */}
            <text className="label" x="-28" y="113">Débit</text>
            <line className="axis" x1="0" y1="125" x2="200" y2="125" />
            <text className="label" text-anchor="end" x="-5" y="128">0</text>
          </g>

          {/* Curves */}
          { mode !== 'initial' &&
            <g className="animate-fade-in-fast">
              <g transform="translate(45, 75)">
                <path className="pressure-curve" />
              </g>
              <g transform="translate(45, 125)">
                <path className="flow-curve" />
              </g>
            </g>
          }
           { mode === 'avaps' &&
            <g transform="translate(20, 5)">
                 <text className="label" x="0" y="8">Vt Cible</text>
                 <rect x="0" y="10" width="10" height="70" className="vt-bar"/>
                 <line x1="0" y1="10" x2="15" y2="10" stroke="#10b981" strokeWidth="2"/>
            </g>
           }

        </svg>
      </div>
       <div className="space-y-4">
        <ExplanationPanel />
        <div className="flex flex-wrap gap-2">
            <button onClick={() => setMode('cpap')} className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${mode === 'cpap' ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}>CPAP</button>
            <button onClick={() => setMode('bipap')} className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${mode === 'bipap' ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}>VS-AI-PEP</button>
            <button onClick={() => setMode('avaps')} className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${mode === 'avaps' ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}>AVAPS</button>
            <button onClick={() => setMode('initial')} className="p-1.5 bg-slate-200 text-slate-600 rounded-md hover:bg-slate-300" aria-label="Réinitialiser"><RefreshCw className="w-5 h-5"/></button>
        </div>
      </div>
    </div>
  );
};
