

import React from 'react';
import { AlertTriangle, Lungs } from './icons/index.ts';

export const WelcomeScreen: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
        
        <div className="text-left bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h1 className="text-3xl font-bold text-slate-900 leading-tight">Guide Pratique de la Ventilation Non Invasive (VNI)</h1>
          <h2 className="text-xl font-semibold text-slate-600 mt-2">Un outil interactif pour la pratique clinique</h2>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 md:p-8 text-slate-700 space-y-4 text-base">
          <h3 className="text-xl font-semibold text-slate-800 border-b pb-2 flex items-center">
            <Lungs className="w-6 h-6 mr-3 text-blue-500" />
            Bienvenue sur le guide de la VNI
          </h3>
          <p>
            Cette application a été conçue comme une ressource pédagogique et un aide-mémoire pour les professionnels de santé impliqués dans la mise en place et la surveillance de la ventilation non invasive.
          </p>
          <p>
            La ventilation non invasive (VNI) est devenue une modalité thérapeutique de première ligne pour de nombreuses formes d'insuffisance respiratoire aiguë et chronique. Ce guide a pour but de synthétiser les connaissances actuelles pour en faciliter l'application clinique.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 pt-4 border-b pb-2">Contenu scientifique</h3>
          <p>
            Le contenu s'appuie sur les recommandations internationales, les revues de la littérature et les guides pratiques publiés par les sociétés savantes pour offrir une information à jour et pertinente.
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6 rounded-r-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-red-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-base font-medium text-red-800">Avertissement important</h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>
                    <strong>Cet outil ne se substitue en aucun cas à la décision du clinicien.</strong>
                  </p>
                  <p className="mt-1">
                    Chaque situation clinique est unique. L'utilisation de ce guide doit être complétée par un jugement clinique éclairé et une évaluation individualisée du patient.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-slate-500 italic py-4">
            <p>Utilisez le menu de navigation pour explorer les différentes sections du guide.</p>
        </div>
      </div>
  );
};

export default WelcomeScreen;