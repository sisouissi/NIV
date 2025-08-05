import React from 'react';
import { Shield, BookOpen } from './icons';
import { guidelinesData } from '../data/guidelines';

export const GuidelinesSection: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 flex items-center">
          <Shield className="w-8 h-8 mr-4 text-indigo-600" />
          Guides & Recommandations des Sociétés Savantes
        </h2>
        <p className="mt-2 text-slate-600 text-base">
          Une compilation des principaux guides de pratique clinique sur la ventilation non invasive chez l'adulte, classés par région.
        </p>
      </div>

      <div className="space-y-8">
        {guidelinesData.map((regionData) => (
          <div key={regionData.region} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-slate-200 pb-3 mb-4">
              {regionData.region}
            </h3>
            <ul className="space-y-4">
              {regionData.guidelines.map((guideline, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 pt-1">
                    <BookOpen className="w-5 h-5 text-indigo-500" />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-slate-800">{guideline.title} ({guideline.year})</p>
                    <p className="text-sm text-slate-600">{guideline.society}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
       <div className="text-center text-sm text-slate-500 mt-8">
            Source: UpToDate, "Society guideline links: Noninvasive ventilation in adults", Topic 119337 Version 25.0.
       </div>
    </div>
  );
};
