import React, { useState, useMemo, useEffect } from 'react';
import { SlidersHorizontal, AlertTriangle, BookOpen, BrainCircuit } from './icons';
import { Accordion } from './Accordion';
import { generateExpertAdvice } from '../services/gemini';
import { marked } from 'marked';

type Profile = 'normal' | 'obstructive' | 'restrictive';

const Slider: React.FC<{ label: string; value: number; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; min: number; max: number; step: number; unit: string; }> = ({ label, value, onChange, min, max, step, unit }) => (
    <div className="space-y-2">
        <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-slate-700">{label}</label>
            <span className="text-sm font-bold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full">{value} {unit}</span>
        </div>
        <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={onChange}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
        />
    </div>
);

const ProfileButton: React.FC<{ label: string; isActive: boolean; onClick: () => void; }> = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors w-full ${
            isActive ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
        }`}
    >
        {label}
    </button>
);

const AdviceSkeleton: React.FC = () => (
    <div className="space-y-3 animate-pulse">
        <div className="h-5 bg-slate-200 rounded w-1/3 mb-2"></div>
        <div className="h-4 bg-slate-200 rounded w-full"></div>
        <div className="h-4 bg-slate-200 rounded w-5/6"></div>
        <div className="h-5 bg-slate-200 rounded w-1/4 mt-4 mb-2"></div>
        <div className="h-4 bg-slate-200 rounded w-full"></div>
    </div>
);

export const SettingsLab: React.FC = () => {
    const [profile, setProfile] = useState<Profile>('normal');
    const [pep, setPep] = useState(5);
    const [ps, setPs] = useState(10);
    const [rr, setRr] = useState(12);
    const [riseTime, setRiseTime] = useState(200);

    const [adviceText, setAdviceText] = useState<string>('');
    const [isAdviceLoading, setIsAdviceLoading] = useState<boolean>(true);
    const [adviceError, setAdviceError] = useState<string | null>(null);

    const { pressurePath, flowPath, airTrapping } = useMemo(() => {
        const cycleTime = 60000 / rr; // in ms
        const iTime = cycleTime / 3; // Fixed I:E of 1:2
        const eTime = cycleTime * (2 / 3);

        const profileParams = {
            normal: { resistance: 10, compliance: 50 },
            obstructive: { resistance: 25, compliance: 60 },
            restrictive: { resistance: 15, compliance: 30 },
        };
        const { resistance, compliance } = profileParams[profile];
        const timeConstant = (resistance * compliance) / 1000;

        // Pressure Path
        const p_y_pep = 100;
        const p_y_ipap = p_y_pep - (ps * 4); // Scaling factor
        const p_x_rise = (riseTime / cycleTime) * 400;
        const p_x_i_end = (iTime / cycleTime) * 400;
        const pressurePath = `M 0 ${p_y_pep} L ${p_x_rise} ${p_y_ipap} L ${p_x_i_end} ${p_y_ipap} L ${p_x_i_end + 5} ${p_y_pep} L 400 ${p_y_pep}`;

        // Flow Path
        const f_y_zero = 200;
        const peakInspFlow = ps / resistance * 2; // Simplified
        const f_x_i_peak = p_x_rise / 2;
        const f_x_e_start = p_x_i_end;

        const peakExpFlow = (pep + ps) / resistance * 2.5;
        
        const expFlowAtEnd = peakExpFlow * Math.exp(-eTime / (timeConstant * 1000));
        const airTrapping = profile === 'obstructive' && expFlowAtEnd > 2;
        const finalExpFlow_y = f_y_zero - (airTrapping ? expFlowAtEnd : 0);

        const flowPath = `M 0 ${f_y_zero} C ${f_x_i_peak} ${f_y_zero - peakInspFlow}, ${f_x_i_peak} ${f_y_zero - peakInspFlow}, ${f_x_e_start} ${f_y_zero} C ${f_x_e_start + 30} ${f_y_zero + peakExpFlow}, ${f_x_e_start + eTime/cycleTime*100} ${f_y_zero + peakExpFlow}, 400 ${finalExpFlow_y}`;

        return { pressurePath, flowPath, airTrapping };
    }, [profile, pep, ps, rr, riseTime]);
    
    useEffect(() => {
        const fetchAdvice = async () => {
            setIsAdviceLoading(true);
            setAdviceError(null);
            try {
                const advice = await generateExpertAdvice({ profile, pep, ps, rr, riseTime });
                setAdviceText(advice);
            } catch (e) {
                console.error("Error fetching expert advice:", e);
                setAdviceError("Impossible d'obtenir le conseil de l'expert. Veuillez réessayer plus tard.");
            } finally {
                setIsAdviceLoading(false);
            }
        };

        const timerId = setTimeout(() => {
            fetchAdvice();
        }, 800);

        return () => clearTimeout(timerId);

    }, [profile, pep, ps, rr, riseTime]);

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h2 className="text-3xl font-bold text-slate-900 flex items-center">
                    <SlidersHorizontal className="w-8 h-8 mr-4 text-indigo-600" />
                    Laboratoire de Réglages Visuels
                </h2>
                <p className="mt-2 text-slate-600 text-base">
                    Ajustez les paramètres de VNI et observez en temps réel leur impact sur les courbes de ventilation.
                </p>
            </div>

            <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Settings Panel */}
                    <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-slate-700 mb-2 block">Profil Patient</label>
                                <div className="grid grid-cols-3 gap-2">
                                    <ProfileButton label="Normal" isActive={profile === 'normal'} onClick={() => setProfile('normal')} />
                                    <ProfileButton label="Obstructif" isActive={profile === 'obstructive'} onClick={() => setProfile('obstructive')} />
                                    <ProfileButton label="Restrictif" isActive={profile === 'restrictive'} onClick={() => setProfile('restrictive')} />
                                </div>
                            </div>
                            <Slider label="PEP / EPAP" value={pep} onChange={e => setPep(Number(e.target.value))} min={0} max={20} step={1} unit="cmH₂O" />
                            <Slider label="Aide Inspiratoire (AI)" value={ps} onChange={e => setPs(Number(e.target.value))} min={0} max={25} step={1} unit="cmH₂O" />
                            <Slider label="Fréquence Respiratoire" value={rr} onChange={e => setRr(Number(e.target.value))} min={8} max={30} step={1} unit="/min" />
                            <Slider label="Pente (Temps de montée)" value={riseTime} onChange={e => setRiseTime(Number(e.target.value))} min={100} max={600} step={50} unit="ms" />
                        </div>
                    </div>

                    {/* Curves Display */}
                    <div className="lg:col-span-2 bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                        <svg viewBox="0 0 450 250" className="w-full h-auto">
                            {/* Grid */}
                            <g className="grid-bg" stroke="#e2e8f0" strokeWidth="0.5">
                                {[...Array(9)].map((_, i) => <line key={i} x1="50" y1={25 * i} x2="450" y2={25 * i} />)}
                                {[...Array(17)].map((_, i) => <line key={i} x1={50 + 25 * i} y1="0" x2={50 + 25 * i} y2="250" />)}
                            </g>

                            {/* Y-Axis Labels */}
                            <text x="10" y="15" className="font-sans text-xs font-semibold fill-slate-500">Pression</text>
                            <text x="10" y="103" className="font-sans text-xs fill-slate-500">0 cmH₂O</text>
                            <text x="10" y="140" className="font-sans text-xs font-semibold fill-slate-500">Débit</text>
                            <text x="10" y="203" className="font-sans text-xs fill-slate-500">0 L/min</text>
                            
                            {/* Horizontal axis lines */}
                            <line x1="50" y1="100" x2="450" y2="100" stroke="#94a3b8" strokeWidth="1" />
                            <line x1="50" y1="200" x2="450" y2="200" stroke="#94a3b8" strokeWidth="1" />

                            {/* Curves Container with Translation */}
                            <g transform="translate(50, 0)">
                                <path d={pressurePath} stroke="#f59e0b" strokeWidth="2" fill="none" />
                                <path d={flowPath} stroke="#0ea5e9" strokeWidth="2" fill="none" />
                                {airTrapping && <path d="M390 200 L 390 190 L 400 195 Z" fill="#ef4444" />}
                            </g>
                        </svg>
                        <div className="flex justify-center mt-2 space-x-6 text-xs text-slate-600">
                            <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-[#f59e0b] mr-2"></div>Pression</div>
                            <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-[#0ea5e9] mr-2"></div>Débit</div>
                            {airTrapping && <div className="flex items-center font-bold text-red-600 animate-pulse"><AlertTriangle className="w-4 h-4 mr-1"/>Piégeage d'air</div>}
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                    <style>{`
                        .markdown-content h3 { font-size: 1.1rem; font-weight: 600; color: #1e293b; margin-bottom: 0.5rem; }
                        .markdown-content ul { list-style-type: disc; margin-left: 1.25rem; }
                        .markdown-content li { margin-bottom: 0.25rem; }
                        .markdown-content strong { font-weight: 600; color: #1e293b; }
                    `}</style>
                    <h3 className="text-xl font-bold text-slate-800 flex items-center mb-4">
                        <BrainCircuit className="w-7 h-7 mr-3 text-indigo-600"/>
                        Analyse de l'Expert
                    </h3>
                    <div className="min-h-[120px] p-4 rounded-lg bg-slate-50 border border-slate-200">
                        {isAdviceLoading && <AdviceSkeleton />}
                        {adviceError && (
                            <div className="text-sm text-red-700 flex items-center">
                                <AlertTriangle className="w-4 h-4 mr-2"/> {adviceError}
                            </div>
                        )}
                        {!isAdviceLoading && !adviceError && (
                            <div
                                className="markdown-content text-sm text-slate-700 space-y-2"
                                dangerouslySetInnerHTML={{ __html: marked.parse(adviceText) as string }}
                            />
                        )}
                    </div>
                </div>
            </div>

            <Accordion title="Références Scientifiques et Pédagogiques" icon={<BookOpen className="w-6 h-6"/>} variant="default">
                <p className="mb-4 text-slate-700 text-base">
                    Ce simulateur est fondé sur des principes de physiologie respiratoire et de ventilation mécanique bien établis dans la littérature scientifique. Voici quelques références clés qui valident les concepts illustrés.
                </p>
                <div className="space-y-4 text-sm text-slate-600">
                    <div>
                        <h5 className="font-semibold text-slate-800">1. Mécanique Respiratoire & Courbes Pression/Débit</h5>
                        <p className="mt-1">Les formes des courbes et l'impact de la PEP et de l'Aide Inspiratoire sont basés sur les principes fondamentaux de la mécanique ventilatoire.</p>
                        <p className="text-xs text-slate-500 italic mt-1">
                            <strong>Référence :</strong> Tobin, M. J. (Ed.). (2012). <em>Principles and Practice of Mechanical Ventilation, 3rd Edition</em>. McGraw-Hill.
                        </p>
                    </div>
                    <div>
                        <h5 className="font-semibold text-slate-800">2. Profils Obstructifs vs. Restrictifs</h5>
                        <p className="mt-1">La différence de comportement des courbes entre les profils "Obstructif" (haute résistance) et "Restrictif" (basse compliance) est un concept central en physiologie respiratoire.</p>
                        <p className="text-xs text-slate-500 italic mt-1">
                            <strong>Référence :</strong> West, J. B. (2021). <em>Respiratory Physiology: The Essentials, 11th Edition</em>. Wolters Kluwer.
                        </p>
                    </div>
                    <div>
                        <h5 className="font-semibold text-slate-800">3. Phénomène d'Auto-PEEP (Piégeage d'Air)</h5>
                        <p className="mt-1">La simulation du piégeage d'air (lorsque le débit expiratoire ne revient pas à zéro) chez le patient obstructif est un phénomène clinique majeur, largement documenté comme une cause d'asynchronie.</p>
                        <p className="text-xs text-slate-500 italic mt-1">
                            <strong>Référence :</strong> Vignaux, L., et al. (2009). Patient-Ventilator Asynchrony in Noninvasive Ventilation. <em>American Journal of Respiratory and Critical Care Medicine</em>.
                        </p>
                    </div>
                    <div>
                        <h5 className="font-semibold text-slate-800">4. Apprentissage par la Simulation</h5>
                        <p className="mt-1">L'utilisation de simulateurs interactifs est une méthode pédagogique validée pour améliorer la compréhension et les compétences en ventilation mécanique.</p>
                        <p className="text-xs text-slate-500 italic mt-1">
                            <strong>Référence :</strong> Finan, E., et al. (2012). Use of Simulation in the Teaching of Mechanical Ventilation to Anesthesiology Residents. <em>Anesthesiology</em>.
                        </p>
                    </div>
                </div>
            </Accordion>
        </div>
    );
};