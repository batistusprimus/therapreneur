'use client';

import { useState } from 'react';
import Link from 'next/link';
// Suppression du CTA "Méthode POV Gratuite" pour positionnement agence

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container-custom py-3 md:py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#DCB253] rounded-lg flex items-center justify-center">
              <span className="text-[#1A1A1A] font-black text-lg">T</span>
            </div>
            <span className="text-2xl font-black text-[#1A1A1A]">Thérapreneur</span>
          </div>
        </Link>

        <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          <Link href="/" className="text-[#1A1A1A] hover:text-[#DCB253] transition-colors text-sm lg:text-base font-medium">Accueil</Link>
          <Link href="/services" className="text-[#1A1A1A] hover:text-[#DCB253] transition-colors text-sm lg:text-base font-medium">Services</Link>
          <Link href="/equipe" className="text-[#1A1A1A] hover:text-[#DCB253] transition-colors text-sm lg:text-base font-medium">Équipe</Link>
          <Link href="/savoir-faire" className="text-[#1A1A1A] hover:text-[#DCB253] transition-colors text-sm lg:text-base font-medium">Savoir‑faire</Link>
          <Link href="/blog" className="text-[#1A1A1A] hover:text-[#DCB253] transition-colors text-sm lg:text-base font-medium">Blog</Link>
          <a 
            href="https://www.boosttoncabinet.fr/68b2fde43c8c0a003cd695c0/"
            target="_blank"
            rel="noopener noreferrer"
            className="button-gradient text-white px-4 py-2 rounded-lg font-bold text-sm ml-2 shadow-md"
          >
            🎯 Méthode POV Gratuite
          </a>
        </nav>

        <button 
          className="md:hidden text-[#1A1A1A] p-2 hover:bg-[#DCB253]/10 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-[calc(100vh-80px)] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="container-custom py-4 flex flex-col space-y-3 bg-white/95 backdrop-blur-md border-t border-gray-200">
          <Link href="/" className="text-[#1A1A1A] hover:text-[#DCB253] transition-colors py-3 px-4 hover:bg-[#DCB253]/5 rounded-lg font-medium" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
          <Link href="/services" className="text-[#1A1A1A] hover:text-[#DCB253] transition-colors py-3 px-4 hover:bg-[#DCB253]/5 rounded-lg font-medium" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link href="/equipe" className="text-[#1A1A1A] hover:text-[#DCB253] transition-colors py-3 px-4 hover:bg-[#DCB253]/5 rounded-lg font-medium" onClick={() => setIsMenuOpen(false)}>Équipe</Link>
          <Link href="/savoir-faire" className="text-[#1A1A1A] hover:text-[#DCB253] transition-colors py-3 px-4 hover:bg-[#DCB253]/5 rounded-lg font-medium" onClick={() => setIsMenuOpen(false)}>Savoir‑faire</Link>
          <Link href="/blog" className="text-[#1A1A1A] hover:text-[#DCB253] transition-colors py-3 px-4 hover:bg-[#DCB253]/5 rounded-lg font-medium" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <a 
            href="https://www.boosttoncabinet.fr/68b2fde43c8c0a003cd695c0/" 
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="button-gradient text-white px-4 py-3 rounded-lg font-bold text-center transition-all mx-4 mt-2 shadow-md"
          >
            🎯 Méthode POV Gratuite
          </a>
        </nav>
      </div>
    </header>
  );
}



