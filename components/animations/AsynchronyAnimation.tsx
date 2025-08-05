
import React, { useState } from 'react';
import { RefreshCw, Sync, Unplug } from '../icons';

type AsynchronyType = 'initial' | 'sync' | 'ineffective' | 'double' | 'late';

const explanations: Record<AsynchronyType, { title: string; points: string[]; solutions: string[] }> = {
  initial: {
    title: 'Visualisez les Asynchronies',
    points: [
      'Cette animation montre un écran de ventilateur simplifié avec 3 courbes :',
      '- **Effort Patient (en bas):** Ce que le patient tente de faire.',
      '- **Pression (milieu):** Ce que le ventilateur délivre.',
      '- **Débit (en haut):** Le flux d\'air entrant et sortant.',
      'Choisissez un scénario pour voir la différence entre une respiration synchronisée et les principales asynchronies.'
    ],
    solutions: [],
  },
  sync: {
    title: 'Synchronie Parfaite',
    points: ['Le ventilateur détecte l\'effort du patient et délivre une insufflation de pression qui correspond parfaitement en timing et en durée.'],
    solutions: ['C\'est le cycle de référence idéal.'],
  },
  ineffective: {
    title: 'Efforts Inefficaces',
    points: ['Le patient fait un effort (visible sur la courbe d\'effort), mais il est trop faible pour déclencher le ventilateur.', 'Ceci est souvent dû à l\'auto-PEEP ou à un trigger mal réglé.'],
    solutions: ['Augmenter la PEP externe pour contrer l\'auto-PEEP.', 'Augmenter la sensibilité du trigger inspiratoire.'],
  },
  double: {
    title: 'Double Déclenchement',
    points: ['Pour un seul effort inspiratoire prolongé du patient, le ventilateur délivre deux cycles successifs.', 'Le temps inspiratoire (Ti) de la machine est trop court par rapport à la demande du patient.'],
    solutions: ['Augmenter le niveau d\'aide inspiratoire.', 'Allonger le temps inspiratoire (Ti) du ventilateur.'],
  },
  late: {
    title: 'Cyclage Tardif',
    points: ['Le ventilateur continue d\'insuffler alors que le patient a déjà commencé son expiration.', 'C\'est une asynchronie très inconfortable, souvent causée par des fuites importantes ou un cyclage expiratoire mal réglé.'],
    solutions: ['Corriger les fuites.', 'Rendre le cyclage expiratoire plus sensible (ex: passer de 25% à 40% du pic de débit).'],
  },
};

export const AsynchronyAnimation: React.FC = () => {
  const [asynchrony, setAsynchrony] = useState<AsynchronyType>('initial');

  const ExplanationPanel = () => {
    const current = explanations[asynchrony];
    return (
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg min-h-[220px]">
        <h4 className="font-bold text-lg text-slate-800 flex items-center">
            {asynchrony === 'sync' ? <Sync className="w-6 h-6 mr-2 text-green-600"/> : asynchrony !== 'initial' ? <Unplug className="w-6 h-6 mr-2 text-red-600"/> : null}
            {current.title}
        </h4>
        <ul className="list-disc list-inside mt-2 space-y-2 text-sm text-slate-600">
          {current.points.map((point, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
          ))}
        </ul>
        {current.solutions.length > 0 && (
            <div className="mt-3 pt-3 border-t border-slate-200">
                <h5 className="font-semibold text-green-700 text-sm">Solutions :</h5>
                <ul className="list-disc list-inside text-sm text-slate-600">
                    {current.solutions.map((sol, i) => <li key={i}>{sol}</li>)}
                </ul>
            </div>
        )}
      </div>
    );
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <style>{`
        .grid-bg { stroke: #e2e8f0; stroke-width: 0.5; }
        .axis { stroke: #94a3b8; stroke-width: 1; }
        .label { font-size: 10px; font-family: sans-serif; fill: #475569; }
        
        .flow-curve { stroke: #0ea5e9; stroke-width: 2; fill: none; }
        .pressure-curve { stroke: #f59e0b; stroke-width: 2; fill: none; }
        .effort-curve { stroke: #8b5cf6; stroke-width: 2; fill: none; }

        @keyframes flow-sync {
          0%, 100% { d: path('M 0 0 H 200'); }
          50% { d: path('M 0 0 C 10 -40, 40 -40, 50 0 C 60 20, 90 20, 100 0 H 200'); }
        }
        @keyframes pressure-sync {
          0%, 100% { d: path('M 0 0 H 200'); }
          50% { d: path('M 0 0 H 5 V-20 H 95 V0 H 200'); }
        }
        @keyframes effort-sync {
          0%, 100% { d: path('M 0 0 H 200'); }
          50% { d: path('M 0 0 C 5 15, 45 15, 50 0 H 200'); }
        }
        
        .anim-sync .flow-curve { animation: flow-sync 4s infinite ease-in-out; }
        .anim-sync .pressure-curve { animation: pressure-sync 4s infinite ease-in-out; }
        .anim-sync .effort-curve { animation: effort-sync 4s infinite ease-in-out; }

        @keyframes effort-ineffective {
          0%, 100% { d: path('M 0 0 H 200'); }
          25% { d: path('M 0 0 C 5 15, 45 15, 50 0 H 200'); }
          75% { d: path('M 0 0 H 100 C 105 10, 145 10, 150 0 H 200'); }
        }
         @keyframes pressure-ineffective {
          0%, 100% { d: path('M 0 0 H 200'); }
          25% { d: path('M 0 0 H 5 V-20 H 95 V0 H 200'); }
        }
        .anim-ineffective .effort-curve { animation: effort-ineffective 4s infinite ease-in-out; }
        .anim-ineffective .pressure-curve { animation: pressure-ineffective 4s infinite ease-in-out; }
        .anim-ineffective .flow-curve { animation: flow-sync 4s infinite ease-in-out 2s; } /* delayed */
        
        @keyframes pressure-double {
          0%, 100% { d: path('M 0 0 H 200'); }
          50% { d: path('M 0 0 H 5 V-20 H 45 V0 H 55 V-20 H 95 V0 H 200'); }
        }
        @keyframes flow-double {
          0%, 100% { d: path('M 0 0 H 200'); }
          50% { d: path('M 0 0 C 10 -40, 15 -40, 25 0 C 30 15, 40 15, 45 0 H 55 C 65 -40, 70 -40, 80 0 C 85 15, 95 15, 100 0 H 200'); }
        }
        .anim-double .effort-curve { animation: effort-sync 4s infinite ease-in-out; }
        .anim-double .pressure-curve { animation: pressure-double 4s infinite ease-in-out; }
        .anim-double .flow-curve { animation: flow-double 4s infinite ease-in-out; }
        
        @keyframes pressure-late {
           0%, 100% { d: path('M 0 0 H 200'); }
           50% { d: path('M 0 0 H 5 V-20 H 115 V0 H 200'); }
        }
        @keyframes effort-late {
            0%, 100% { d: path('M 0 0 H 200'); }
            50% { d: path('M 0 0 C 5 15, 45 15, 50 0 H 200'); }
        }
        .anim-late .effort-curve { animation: effort-late 4s infinite ease-in-out; }
        .anim-late .pressure-curve { animation: pressure-late 4s infinite ease-in-out; }
        .anim-late .flow-curve { animation: flow-sync 4s infinite ease-in-out; }
      `}</style>
      <div className="bg-slate-200 p-2 rounded-lg border-4 border-slate-300 shadow-lg">
        <svg viewBox="0 0 250 150" className={`w-full h-auto animation-container anim-${asynchrony}`}>
            {/* Grid */}
            <g className="grid-bg">
                {[...Array(5)].map((_, i) => <line key={i} x1="0" y1={i * 30 + 15} x2="250" y2={i * 30 + 15} />)}
                {[...Array(8)].map((_, i) => <line key={i} x1={i * 30 + 10} y1="0" x2={i * 30 + 10} y2="150" />)}
            </g>
            
            {/* Axes */}
            <g transform="translate(45, 0)">
                <text className="label" x="-33" y="33">Débit</text>
                <line className="axis" x1="0" y1="30" x2="195" y2="30" />
                
                <text className="label" x="-35" y="83">Pression</text>
                <line className="axis" x1="0" y1="80" x2="195" y2="80" />
                
                <text className="label" x="-35" y="133">Effort P.</text>
                <line className="axis" x1="0" y1="130" x2="195" y2="130" />
            </g>
            
            {/* Curves */}
            { asynchrony !== 'initial' &&
                <g className="animate-fade-in-fast">
                    <path className="flow-curve" transform="translate(45, 30)" />
                    <path className="pressure-curve" transform="translate(45, 80)" />
                    <path className="effort-curve" transform="translate(45, 130)" />
                </g>
            }
        </svg>
      </div>
       <div className="space-y-4">
        <ExplanationPanel />
        <div className="flex flex-wrap gap-2">
            <button onClick={() => setAsynchrony('sync')} className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${asynchrony === 'sync' ? 'bg-green-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}>Synchronie</button>
            <button onClick={() => setAsynchrony('ineffective')} className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${asynchrony === 'ineffective' ? 'bg-red-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}>Efforts Inefficaces</button>
            <button onClick={() => setAsynchrony('double')} className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${asynchrony === 'double' ? 'bg-red-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}>Double Déclenchement</button>
            <button onClick={() => setAsynchrony('late')} className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${asynchrony === 'late' ? 'bg-red-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}>Cyclage Tardif</button>
             <button onClick={() => setAsynchrony('initial')} className="p-1.5 bg-slate-200 text-slate-600 rounded-md hover:bg-slate-300" aria-label="Réinitialiser"><RefreshCw className="w-5 h-5"/></button>
        </div>
      </div>
    </div>
  );
};