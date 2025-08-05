

import React, { useState, useMemo } from 'react';

// GCS options
const gcsEyeOptions = [
  { value: 4, label: 'Spontanée (4 pts)' },
  { value: 3, label: 'À la parole (3 pts)' },
  { value: 2, label: 'À la douleur (2 pts)' },
  { value: 1, label: 'Aucune (1 pt)' }
];
const gcsVerbalOptions = [
  { value: 5, label: 'Orientée (5 pts)' },
  { value: 4, label: 'Confuse (4 pts)' },
  { value: 3, label: 'Mots inappropriés (3 pts)' },
  { value: 2, label: 'Sons incompréhensibles (2 pts)' },
  { value: 1, label: 'Aucune (1 pt)' }
];
const gcsMotorOptions = [
  { value: 6, label: 'Obéit aux ordres (6 pts)' },
  { value: 5, label: 'Localise la douleur (5 pts)' },
  { value: 4, label: 'Retrait à la douleur (4 pts)' },
  { value: 3, label: 'Flexion anormale (décortication) (3 pts)' },
  { value: 2, label: 'Extension anormale (décérébration) (2 pts)' },
  { value: 1, label: 'Aucune (1 pt)' }
];

const InputField = ({ label, value, onChange, unit, points, type = "number", step = "any" }) => (
  <div className="space-y-1">
    <label className="text-sm font-medium text-slate-700 flex justify-between items-center">
      <span>{label}</span>
      {points !== null && <span className="text-xs font-bold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full">{points} pts</span>}
    </label>
    <div className="flex items-center">
      <input
        type={type}
        step={step}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full p-2 border border-slate-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base"
        placeholder={unit}
      />
      {unit && <span className="ml-2 text-slate-500 text-sm hidden sm:inline">{unit}</span>}
    </div>
  </div>
);

const SelectField = ({ label, value, onChange, options }) => (
    <div className="space-y-1">
        <label className="text-sm font-medium text-slate-700">{label}</label>
        <select value={value} onChange={e => onChange(e.target.value)} className="w-full p-2 border border-slate-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base bg-white">
            <option value="0">Sélectionner...</option>
            {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
    </div>
);

export const HacorScoreCalculator: React.FC = () => {
    // State for inputs
    const [heartRate, setHeartRate] = useState('');
    const [ph, setPh] = useState('');
    const [respRate, setRespRate] = useState('');
    const [spo2, setSpo2] = useState('');
    const [fio2, setFio2] = useState('');
    const [gcsEye, setGcsEye] = useState('0');
    const [gcsVerbal, setGcsVerbal] = useState('0');
    const [gcsMotor, setGcsMotor] = useState('0');

    // Calculations for points
    const heartRatePoints = useMemo(() => {
        const hr = parseInt(heartRate);
        if (isNaN(hr)) return 0;
        return hr >= 121 ? 1 : 0;
    }, [heartRate]);

    const phPoints = useMemo(() => {
        const phVal = parseFloat(ph);
        if (isNaN(phVal)) return 0;
        if (phVal < 7.25) return 4;
        if (phVal <= 7.29) return 3;
        if (phVal <= 7.34) return 2;
        return 0;
    }, [ph]);

    const gcsScore = useMemo(() => {
        const eye = parseInt(gcsEye);
        const verbal = parseInt(gcsVerbal);
        const motor = parseInt(gcsMotor);
        if (eye === 0 || verbal === 0 || motor === 0) return null;
        return eye + verbal + motor;
    }, [gcsEye, gcsVerbal, gcsMotor]);

    const gcsPoints = useMemo(() => {
        if (gcsScore === null) return 0;
        if (gcsScore <= 10) return 10;
        if (gcsScore <= 12) return 5;
        if (gcsScore <= 14) return 2;
        return 0;
    }, [gcsScore]);

    const oxygenationRatio = useMemo(() => {
        const sp = parseFloat(spo2);
        const fi = parseFloat(fio2);
        if (isNaN(sp) || isNaN(fi) || fi === 0) return null;
        return sp / (fi / 100);
    }, [spo2, fio2]);

    const oxygenationPoints = useMemo(() => {
        if (oxygenationRatio === null) return 0;
        if (oxygenationRatio <= 100) return 6;
        if (oxygenationRatio <= 125) return 5;
        if (oxygenationRatio <= 150) return 4;
        if (oxygenationRatio <= 175) return 3;
        if (oxygenationRatio <= 200) return 2;
        return 0;
    }, [oxygenationRatio]);

    const respRatePoints = useMemo(() => {
        const rr = parseInt(respRate);
        if (isNaN(rr)) return 0;
        if (rr >= 46) return 4;
        if (rr >= 41) return 3;
        if (rr >= 36) return 2;
        if (rr >= 31) return 1;
        return 0;
    }, [respRate]);
    
    const totalHacorScore = useMemo(() => {
        return heartRatePoints + phPoints + gcsPoints + oxygenationPoints + respRatePoints;
    }, [heartRatePoints, phPoints, gcsPoints, oxygenationPoints, respRatePoints]);

    const allInputsFilledForHacor = useMemo(() => {
      return !!(heartRate && ph && respRate && spo2 && fio2 && gcsScore !== null);
    }, [heartRate, ph, respRate, spo2, fio2, gcsScore]);

    const roxIndex = useMemo(() => {
      const rr = parseInt(respRate);
      if (oxygenationRatio === null || isNaN(rr) || rr === 0) return null;
      return oxygenationRatio / rr;
    }, [oxygenationRatio, respRate]);

    const resetForm = () => {
        setHeartRate('');
        setPh('');
        setRespRate('');
        setSpo2('');
        setFio2('');
        setGcsEye('0');
        setGcsVerbal('0');
        setGcsMotor('0');
    };

    return (
        <div className="space-y-6 p-4 bg-slate-50 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InputField label="Fréquence Cardiaque" value={heartRate} onChange={setHeartRate} unit="bpm" points={heartRatePoints} />
                <InputField label="pH artériel" value={ph} onChange={setPh} unit="" points={phPoints} step="0.01" />
                <InputField label="Fréquence Respiratoire" value={respRate} onChange={setRespRate} unit="/min" points={respRatePoints} step="1" />
            </div>

            <div className="p-4 border border-slate-200 rounded-md bg-white">
                <h4 className="font-semibold text-slate-800 mb-2 flex justify-between items-center">
                    <span>Niveau de Conscience (GCS)</span>
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full">{gcsPoints} pts</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <SelectField label="Ouverture des yeux (E)" value={gcsEye} onChange={setGcsEye} options={gcsEyeOptions} />
                    <SelectField label="Réponse verbale (V)" value={gcsVerbal} onChange={setGcsVerbal} options={gcsVerbalOptions} />
                    <SelectField label="Réponse motrice (M)" value={gcsMotor} onChange={setGcsMotor} options={gcsMotorOptions} />
                </div>
                {gcsScore !== null && <p className="text-right mt-2 text-sm font-bold text-slate-600">Score GCS Total : {gcsScore}</p>}
            </div>
            
            <div className="p-4 border border-slate-200 rounded-md bg-white">
                <h4 className="font-semibold text-slate-800 mb-2 flex justify-between items-center">
                    <span>Oxygénation</span>
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full">{oxygenationPoints} pts</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <InputField label="SpO₂" value={spo2} onChange={setSpo2} unit="%" points={null} />
                    <InputField label="FiO₂" value={fio2} onChange={setFio2} unit="%" points={null} />
                </div>
                {oxygenationRatio !== null && <p className="text-right mt-2 text-sm font-bold text-slate-600">Rapport SpO₂/(FiO₂/100) : {oxygenationRatio.toFixed(1)}</p>}
                <div className="mt-3 text-xs text-slate-500 bg-slate-100 p-2 rounded">
                    <p><strong>Note :</strong> Le score HACOR original utilise le rapport PaO₂/FiO₂. Ce calculateur utilise le rapport SpO₂/FiO₂ comme substitut, une pratique courante lorsque les gaz du sang ne sont pas disponibles. L'interprétation doit être prudente.</p>
                </div>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-slate-100 border border-slate-200 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* HACOR Score */}
                    <div className="flex flex-col items-center justify-between p-4 rounded-lg bg-white border border-slate-200">
                        <h3 className="text-lg font-semibold text-slate-700">Score HACOR</h3>
                        <p className={`text-5xl font-bold my-2 ${totalHacorScore > 5 ? 'text-red-600' : 'text-green-600'}`}>
                            {allInputsFilledForHacor ? totalHacorScore : '-'}
                        </p>
                        <div className={`p-2 rounded-md text-center w-full ${!allInputsFilledForHacor ? 'bg-slate-100 text-slate-600' : totalHacorScore > 5 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                            <p className="text-base font-semibold">
                                {allInputsFilledForHacor 
                                    ? (totalHacorScore > 5 ? "Risque élevé d'échec" : "Faible risque d'échec")
                                    : 'Toutes les données requises'
                                }
                            </p>
                        </div>
                    </div>
                    
                    {/* ROX Index */}
                    <div className="flex flex-col items-center justify-between p-4 rounded-lg bg-white border border-slate-200">
                        <h3 className="text-lg font-semibold text-slate-700">Index ROX</h3>
                        <p className={`text-5xl font-bold my-2 ${roxIndex !== null && roxIndex < 4.88 ? 'text-red-600' : 'text-green-600'}`}>
                            {roxIndex !== null ? roxIndex.toFixed(2) : '-'}
                        </p>
                        <div className={`p-2 rounded-md text-center w-full ${roxIndex === null ? 'bg-slate-100 text-slate-600' : roxIndex < 4.88 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                            <p className="text-base font-semibold">
                                {roxIndex !== null 
                                    ? (roxIndex < 4.88 ? "Risque élevé d'échec" : "Faible risque d'échec")
                                    : 'SpO₂, FiO₂, FR requises'
                                }
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pt-2">
                    <button onClick={resetForm} className="px-6 py-2 border border-slate-300 text-slate-700 rounded-md hover:bg-slate-200 transition-colors text-sm font-medium">
                        Réinitialiser
                    </button>
                </div>
            </div>

        </div>
    );
};