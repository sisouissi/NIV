
import React, { useState } from 'react';
import { RefreshCw } from '../icons';

type AnimationStep = 'initial' | 'normal' | 'copd' | 'niv';

const explanations: Record<AnimationStep, { title: string; points: string[] }> = {
  initial: {
    title: 'Choisissez un scénario',
    points: ['Utilisez les boutons pour voir la différence entre une respiration normale, une respiration avec BPCO, et l\'effet de la VNI.'],
  },
  normal: {
    title: 'Respiration Normale',
    points: [
      'Le diaphragme s\'abaisse, créant une pression négative qui remplit les poumons.',
      'À l\'expiration, les poumons se vident complètement, revenant à la pression de base (zéro).',
      'Le patient n\'a qu\'à fournir un petit effort pour atteindre le seuil de déclenchement (trigger) du ventilateur.',
    ],
  },
  copd: {
    title: 'Respiration avec BPCO (Auto-PEEP)',
    points: [
      'L\'obstruction des bronches ralentit l\'expiration.',
      'Les poumons n\'ont pas le temps de se vider complètement avant la prochaine inspiration, ce qui piège de l\'air.',
      'Cela crée une pression positive résiduelle dans les poumons : l\'<strong>auto-PEEP</strong>.',
      'Le patient doit fournir un <strong>effort beaucoup plus important</strong> pour vaincre l\'auto-PEEP ET atteindre le seuil de déclenchement.',
    ],
  },
  niv: {
    title: 'Effet de la VNI (PEP externe)',
    points: [
      'Le ventilateur applique une Pression Expiratoire Positive (PEP), aussi appelée EPAP.',
      'Cette PEP externe <strong>contrebalance</strong> l\'auto-PEEP interne.',
      'L\'effort que le patient doit fournir pour déclencher le ventilateur est <strong>drastiquement réduit</strong>.',
      'Le travail respiratoire diminue, le patient est soulagé.',
    ],
  },
};

export const AutoPeepAnimation: React.FC = () => {
  const [step, setStep] = useState<AnimationStep>('initial');

  const ExplanationPanel = () => {
    const current = explanations[step];
    return (
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg min-h-[220px]">
        <h4 className="font-bold text-lg text-slate-800">{current.title}</h4>
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
        .lung { fill: #a5b4fc; stroke: #4f46e5; stroke-width: 2; transition: transform 0.5s ease-out; }
        .diaphragm { fill: #f87171; stroke: #b91c1c; stroke-width: 1.5; }
        .pressure-curve { fill: none; stroke: #2563eb; stroke-width: 2.5; stroke-linecap: round; }
        .axis, .trigger-line, .peep-line { stroke: #94a3b8; stroke-width: 1; }
        .trigger-line { stroke-dasharray: 4 4; }
        .peep-line { stroke-dasharray: 4 4; }
        .label { font-size: 10px; font-family: sans-serif; fill: #475569; }
        
        /* Animations */
        @keyframes breathe-normal {
          0%, 100% { d: path('M 60 140 Q 100 130, 140 140'); }
          50% { d: path('M 60 140 Q 100 160, 140 140'); }
        }
        @keyframes pressure-normal {
          0%, 100% { d: path('M 40 120 H 210'); }
          25% { d: path('M 40 120 C 70 140, 80 140, 110 120 H 210'); }
          75% { d: path('M 40 120 H 110 C 140 100, 150 100, 210 120'); }
        }
        
        @keyframes breathe-copd {
          0%, 100% { d: path('M 60 140 Q 100 125, 140 140'); }
          50% { d: path('M 60 140 Q 100 155, 140 140'); }
        }
        @keyframes pressure-copd {
           0%, 100% { d: path('M 40 100 H 210'); }
           25% { d: path('M 40 100 C 70 145, 80 145, 110 100 H 210'); }
           75% { d: path('M 40 100 H 110 C 140 80, 150 80, 210 100'); }
        }
        @keyframes pressure-niv {
           0%, 100% { d: path('M 40 80 H 210'); }
           25% { d: path('M 40 80 C 70 105, 80 105, 110 80 H 210'); }
           75% { d: path('M 40 80 H 110 C 140 60, 150 60, 210 80'); }
        }

        .step-normal .diaphragm-anim { animation: breathe-normal 4s infinite ease-in-out; }
        .step-normal .pressure-anim { animation: pressure-normal 4s infinite ease-in-out; }
        .step-normal .lung-path { transform-origin: 50% 0; animation: lung-inflate-normal 4s infinite ease-in-out; }
        @keyframes lung-inflate-normal { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(1.2); } }

        .step-copd .diaphragm-anim { animation: breathe-copd 4s infinite ease-in-out; }
        .step-copd .pressure-anim { animation: pressure-copd 4s infinite ease-in-out; }
        .step-copd .lung-path { transform-origin: 50% 0; animation: lung-inflate-copd 4s infinite ease-in-out; }
        @keyframes lung-inflate-copd { 0%, 100% { transform: scaleY(1.1); } 50% { transform: scaleY(1.3); } }
        
        .step-niv .diaphragm-anim { animation: breathe-copd 4s infinite ease-in-out; }
        .step-niv .pressure-anim { animation: pressure-niv 4s infinite ease-in-out; }
        .step-niv .lung-path { transform-origin: 50% 0; animation: lung-inflate-copd 4s infinite ease-in-out; }

      `}</style>
      
      <div className="p-2 rounded-lg border-4 border-slate-300 shadow-lg">
        <svg viewBox="0 0 300 200" className={`w-full h-auto animation-container step-${step}`}>
          <rect width="300" height="200" fill="#f8fafc" rx="4" />
          {/* Lungs and Diaphragm */}
          <g transform="translate(40, 0)">
            <path className="lung lung-path" d="M 100 20 C 50 30, 50 120, 100 140 Z" />
            <path className="lung lung-path" d="M 200 20 C 250 30, 250 120, 200 140 Z" transform="scale(-1, 1) translate(-300, 0)" />
            <path className="diaphragm diaphragm-anim" d="M 60 140 Q 150 130, 240 140" />
          </g>

          {/* Pressure Graph */}
          <g transform="translate(50, 20)">
            <text className="label" text-anchor="middle" x="-25" y="90" transform="rotate(-90 -25,90)">Pression</text>
            <text className="label" x="180" y="155">Temps</text>
            {/* Axis */}
            <path className="axis" d="M 40 20 V 150 H 210" />
            
            {/* Initial state text */}
            {step === 'initial' && <text x="60" y="90" className="label" style={{fontSize: '14px', fill: '#64748b'}}>Lancez une animation</text>}
            
            {/* Base Line (0 cmH2O) */}
            <line className="axis" x1="40" y1="120" x2="210" y2="120" />
            <text className="label" text-anchor="end" x="35" y="123">0</text>
            
            {/* Trigger Line */}
            <line className="trigger-line" x1="40" y1="130" x2="210" y2="130" />
            <text className="label" text-anchor="end" x="35" y="133">Trigger</text>
            
            {/* Auto-PEEP Line (visible in COPD and NIV) */}
            {(step === 'copd' || step === 'niv') && (
                 <g className="animate-fade-in-fast">
                    <line className="peep-line" x1="40" y1="100" x2="210" y2="100" />
                    <text className="label" text-anchor="end" x="35" y="103">Auto-PEEP</text>
                </g>
            )}

            {/* EPAP Line (visible in NIV) */}
            {step === 'niv' && (
                <g className="animate-fade-in-fast">
                    <line className="peep-line" x1="40" y1="80" x2="210" y2="80" stroke="#1d4ed8" />
                    <text className="label" text-anchor="end" x="35" y="83" fill="#1d4ed8">EPAP</text>
                </g>
            )}
            
            {/* Animated Pressure Curve */}
            <path className="pressure-curve pressure-anim" d="M 40 120 H 210"/>
          </g>
        </svg>
      </div>

      <div className="space-y-4">
        <ExplanationPanel />
        <div className="flex flex-wrap gap-2">
            <button onClick={() => setStep('normal')} className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${step === 'normal' ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}>Respiration Normale</button>
            <button onClick={() => setStep('copd')} className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${step === 'copd' ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}>BPCO (Auto-PEEP)</button>
            <button onClick={() => setStep('niv')} className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${step === 'niv' ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}>Effet de la VNI</button>
            <button onClick={() => setStep('initial')} className="p-1.5 bg-slate-200 text-slate-600 rounded-md hover:bg-slate-300" aria-label="Réinitialiser"><RefreshCw className="w-5 h-5"/></button>
        </div>
      </div>
    </div>
  );
};
