'use client';

import React from 'react';
import { ZapIcon, CheckCircleIcon, TargetIcon } from './Icons';

interface POVPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function POVPopup({ isOpen, onClose }: POVPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#DCB253] to-[#DCB253]/80 p-6 text-white rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ZapIcon size={24} />
              <h3 className="text-xl font-bold">Méthode POV Gratuite</h3>
            </div>
            <button 
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <p className="text-white/90 mt-2">
            Découvrez comment 300+ thérapeutes ont doublé leurs revenus en 90 jours
          </p>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-gray-900 mb-2 inline-flex items-center gap-2 justify-center">
              <TargetIcon size={22} />
              <span>Masterclass Gratuite</span>
            </h4>
            <p className="text-gray-600">
              La méthode complète pour transformer votre expertise en revenus récurrents
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircleIcon className="text-green-500 mt-1" size={20} />
              <span className="text-gray-700">Comment créer 5k€ à 15k€ de revenus récurrents/mois</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircleIcon className="text-green-500 mt-1" size={20} />
              <span className="text-gray-700">La méthode POV étape par étape</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircleIcon className="text-green-500 mt-1" size={20} />
              <span className="text-gray-700">Exemples concrets de transformations</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircleIcon className="text-green-500 mt-1" size={20} />
              <span className="text-gray-700">Templates et outils gratuits</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[#DCB253]/10 to-[#DCB253]/5 rounded-lg p-4">
            <p className="text-sm text-gray-700 text-center">
              <strong>100% Gratuit</strong> - Aucune carte bancaire requise
            </p>
          </div>
          
          <div className="space-y-3">
            <a
              href="https://www.boosttoncabinet.fr/68b2fde43c8c0a003cd695c0/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-[#DCB253] to-[#DCB253]/80 text-white py-4 px-6 rounded-xl font-bold text-center hover:from-[#DCB253]/90 hover:to-[#DCB253]/70 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 block"
              onClick={onClose}
            >
              <span className="inline-flex items-center gap-2 justify-center">
                <TargetIcon size={20} />
                <span>Accéder à la Méthode POV Gratuite</span>
              </span>
            </a>
            
            <button
              onClick={onClose}
              className="w-full text-gray-500 hover:text-gray-700 transition-colors text-sm"
            >
              Peut-être plus tard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}