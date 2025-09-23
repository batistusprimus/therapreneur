'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from './Icons';

export default function POVBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Vérifier si le banner a été fermé précédemment
    const dismissed = localStorage.getItem('pov-banner-dismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Afficher le banner après 5 secondes
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('pov-banner-dismissed', 'true');
  };

  const handleRedirect = () => {
    window.open('https://www.boosttoncabinet.fr/68b2fde43c8c0a003cd695c0/', '_blank');
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 right-4 z-50 max-w-sm"
        >
          <div className="bg-gradient-to-r from-[#DCB253] to-[#DCB253]/80 text-white rounded-2xl shadow-2xl p-4 relative overflow-hidden">
            {/* Animation background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse"></div>
            
            {/* Bouton fermer */}
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors"
            >
              <XMarkIcon size={20} />
            </button>

            {/* Contenu */}
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🎯</span>
                <h3 className="font-bold text-lg">Méthode POV Gratuite</h3>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                  🆓 GRATUIT
                </span>
              </div>
              
              <p className="text-sm text-white/90 mb-4">
                Comment <strong>300+ thérapeutes</strong> ont doublé leurs revenus en 90 jours
              </p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Positionnement de niche</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Offre digitale hybride</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Visibilité automatisée</span>
                </div>
              </div>
              
              <button
                onClick={handleRedirect}
                className="w-full bg-white text-[#DCB253] py-3 px-4 rounded-lg font-bold text-sm hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                🚀 Accéder Maintenant
              </button>
              
              <p className="text-xs text-white/70 text-center mt-2">
                ⏰ Accès gratuit - Temps limité
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
