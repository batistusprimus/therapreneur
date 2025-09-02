'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-primary bg-opacity-90 backdrop-blur-md shadow-lg">
      <div className="container-custom py-3 md:py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src="/logo blanc.png" alt="Thérapreneur" className="h-12 md:h-16 transition-all duration-300" />
        </Link>

        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          <Link href="/" className="text-contrast hover:text-title transition-colors text-sm lg:text-base">Accueil</Link>
          <Link href="/services" className="text-contrast hover:text-title transition-colors text-sm lg:text-base">Services</Link>
          <Link href="/equipe" className="text-contrast hover:text-title transition-colors text-sm lg:text-base">Équipe</Link>
          <Link href="/savoir-faire" className="text-contrast hover:text-title transition-colors text-sm lg:text-base">Savoir‑faire</Link>
          <Link href="/blog" className="text-contrast hover:text-title transition-colors text-sm lg:text-base">Blog</Link>
        </nav>

        <button 
          className="md:hidden text-contrast p-2 hover:bg-white/10 rounded-lg transition-colors"
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
        <nav className="container-custom py-4 flex flex-col space-y-3 bg-primary">
          <Link href="/" className="text-contrast hover:text-title transition-colors py-3 px-4 hover:bg-white/5 rounded-lg" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
          <Link href="/services" className="text-contrast hover:text-title transition-colors py-3 px-4 hover:bg-white/5 rounded-lg" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link href="/equipe" className="text-contrast hover:text-title transition-colors py-3 px-4 hover:bg-white/5 rounded-lg" onClick={() => setIsMenuOpen(false)}>Équipe</Link>
          <Link href="/savoir-faire" className="text-contrast hover:text-title transition-colors py-3 px-4 hover:bg-white/5 rounded-lg" onClick={() => setIsMenuOpen(false)}>Savoir‑faire</Link>
          <Link href="/blog" className="text-contrast hover:text-title transition-colors py-3 px-4 hover:bg-white/5 rounded-lg" onClick={() => setIsMenuOpen(false)}>Blog</Link>
        </nav>
      </div>
    </header>
  );
}



