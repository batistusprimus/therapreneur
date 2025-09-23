import { Metadata } from 'next';
import Link from 'next/link';
import { TargetIcon, XMarkIcon, CheckCircleIcon } from '@/components/Icons';
import AnimatedCounter from '@/components/AnimatedCounter';

export const metadata: Metadata = {
  title: 'Thérapreneur | Comment 300 thérapeutes ont doublé leurs revenus en 90 jours',
  description: 'La méthode POV qui transforme votre expertise en programmes digitaux haute valeur. 5k€ à 15k€ de revenus récurrents/mois sans prendre un patient supplémentaire. +300 thérapeutes accompagnés.',
  keywords: 'méthode POV thérapeute, doubler revenus thérapeute 90 jours, revenus récurrents thérapeute digital, transformation digitale thérapie, thérapreneur méthode',
  openGraph: {
    title: 'Méthode POV | 300 thérapeutes ont doublé leurs revenus en 90j',
    description: 'Découvrez comment transformer 1€ de temps en 10€ de revenus digitaux récurrents. Méthode POV testée sur 300+ thérapeutes.',
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-b from-white to-slate-50">
        {/* Decorative halos */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-[48rem] w-[48rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(220,178,83,0.18),transparent_60%)] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[48rem] w-[48rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(220,178,83,0.14),transparent_60%)] blur-3xl" />

        <div className="container-custom py-24 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DCB253]/30 bg-white/60 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md shadow-sm">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#DCB253]">
                    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm font-medium text-gray-700">+300 thérapeutes ont doublé leurs revenus en 90 jours</span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-gray-900 tracking-tight mx-auto">
                  Comment j&apos;ai aidé{' '}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[#DCB253] to-[#DCB253]/80 bg-clip-text text-transparent">300 thérapeutes</span>
                    <span className="absolute -bottom-1 left-0 right-0 h-2 rounded-full bg-[#DCB253]/20" />
                  </span>{' '}
                  à doubler leurs revenus en 90 jours
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Grâce au <strong>digital</strong>, sans prendre un seul patient supplémentaire. La méthode POV
                  transforme votre expertise en programmes digitaux haute valeur et génère
                  <strong> 5 000€ à 15 000€ de revenus récurrents par mois</strong>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.boosttoncabinet.fr/68b2fde43c8c0a003cd695c0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-r from-[#DCB253] to-[#DCB253]/80 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCB253]/50"
                >
                  <span className="relative z-10 flex items-center gap-2 justify-center">
                    <TargetIcon size={20} />
                    <span>Accéder à la Méthode POV Gratuite</span>
                  </span>
                  <span className="absolute inset-0 translate-x-[-120%] bg-white/20 blur-xl transition-transform duration-700 ease-out group-hover:translate-x-[120%]" />
                </a>
                <Link
                  href="/services"
                  className="border-2 border-[#DCB253] text-[#DCB253] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#DCB253] hover:text-white transition-all shadow-sm hover:shadow-lg"
                >
                  Voir nos offres
                </Link>
              </div>

              <div className="pt-2">
                <div className="mx-auto inline-flex items-center gap-3 rounded-full bg-white/80 backdrop-blur px-5 py-2.5 border border-gray-200 shadow-md">
                  <div className="h-8 w-8 rounded-full bg-[#DCB253]/20 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#DCB253]">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">
                    Déjà <strong className="text-gray-900"><AnimatedCounter end={300} suffix="+" /></strong> thérapeutes accompagnés
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="bg-white rounded-xl p-4 text-center shadow-lg border border-[#DCB253]/10 hover:shadow-xl transition-all">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#DCB253] mx-auto mb-2">
                    <path d="M17 21V19C17 17.9 16.1 17 15 17H9C7.9 17 7 17.9 7 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <div className="text-2xl font-bold text-gray-900">300+</div>
                  <div className="text-sm text-gray-600">Thérapeutes aidés</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-lg border border-[#DCB253]/10 hover:shadow-xl transition-all">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#DCB253] mx-auto mb-2">
                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="text-2xl font-bold text-gray-900">15k€/mois</div>
                  <div className="text-sm text-gray-600">Revenus récurrents</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-lg border border-[#DCB253]/10 hover:shadow-xl transition-all">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#DCB253] mx-auto mb-2">
                    <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="text-2xl font-bold text-gray-900">90j</div>
                  <div className="text-sm text-gray-600">Transformation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problème & Solution */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              Êtes-vous pris au piège du{' '}
              <span className="text-red-600">"succès apparent"</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Votre agenda est plein, mais vous êtes dans une prison dorée...
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-800 mb-4 inline-flex items-center gap-2">
                  <XMarkIcon size={18} />
                  <span>Les signes du piège :</span>
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Vous facturez entre 3 000€ et 8 000€/mois mais votre agenda est saturé</li>
                  <li>• Vous refusez 5-10 patients/semaine faute de créneaux (18k€-36k€/an perdus)</li>
                  <li>• Vous ne pouvez plus augmenter vos tarifs sans perdre des patients</li>
                  <li>• Si vous tombez malade ou partez en vacances, vos revenus s'effondrent</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-green-800 mb-4 inline-flex items-center gap-2">
                  <CheckCircleIcon size={18} />
                  <span>La solution Thérapreneur :</span>
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• <strong>Transformer votre expertise</strong> en empire digital éthique</li>
                  <li>• Créer des <strong>revenus scalables</strong> sans perdre vos valeurs</li>
                  <li>• <strong>Impact démultiplié</strong> : aider plus de personnes</li>
                  <li>• <strong>Liberté retrouvée</strong> : business qui fonctionne sans vous</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* L'Écosystème Thérapreneur */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#DCB253] text-white px-4 py-2 rounded-full mb-6">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className="text-sm font-medium">L'Écosystème Complet</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              L'Écosystème{' '}
              <span className="bg-gradient-to-r from-[#DCB253] to-[#DCB253]/80 bg-clip-text text-transparent">Thérapreneur</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Nous transformons votre expertise thérapeutique en empire digital éthique, 
              sans jamais trahir vos valeurs humaines.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* DIY */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#DCB253]/10 hover:shadow-xl transition-all hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
                    <rect x="3" y="4" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M7 8h6M7 12h6M7 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M19 2v14l-3-2-3 2V2h6z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">DIY</h3>
                <p className="text-gray-600 mb-4">"L'Autonomie Guidée"</p>
                {/* Prix retiré */}
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Masterclass Complète (15.000€ de valeur)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>52 Coaching de Groupe/an</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Communauté privée d'entraide</span>
                </div>
              </div>
              
              <Link 
                href="/services"
                className="w-full block bg-blue-600 text-white py-3 rounded-xl font-bold text-center hover:bg-blue-700 transition-all"
              >
                Découvrir DIY
              </Link>
            </div>

            {/* DWY - Highlighted */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#DCB253] hover:shadow-xl transition-all transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#DCB253] text-white px-4 py-2 rounded-full text-sm font-bold">POPULAIRE</span>
              </div>
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#DCB253] to-[#DCB253]/80 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                    <polygon points="12,2 2,7 12,12 22,7 12,2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="2,17 12,22 22,17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">DWY</h3>
                <p className="text-gray-600 mb-4">"La Co-Création"</p>
                {/* Prix retiré */}
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Tout le DIY inclus</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>12 Sessions Individuelles (6.000€)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Mise en relation experts</span>
                </div>
              </div>
              
              <Link 
                href="/services"
                className="w-full block bg-[#DCB253] text-white py-3 rounded-xl font-bold text-center hover:bg-[#DCB253]/90 transition-all"
              >
                Découvrir DWY
              </Link>
            </div>

            {/* DFY */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#DCB253]/10 hover:shadow-xl transition-all hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">DFY</h3>
                <p className="text-gray-600 mb-4">"Transformation Clé en Main"</p>
                {/* Prix retiré */}
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Tout le DWY inclus</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Exécution Complète</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Garantie de résultats</span>
                </div>
              </div>
              
              <Link 
                href="/services"
                className="w-full block bg-purple-600 text-white py-3 rounded-xl font-bold text-center hover:bg-purple-700 transition-all"
              >
                Découvrir DFY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Les 5 Piliers */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              Les 5 Piliers de{' '}
              <span className="bg-gradient-to-r from-[#DCB253] to-[#DCB253]/80 bg-clip-text text-transparent">Notre Approche</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Alignement thérapeutique avant profit. Nous co-créons une évolution naturelle 
              de votre pratique vers le digital.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DCB253] to-[#DCB253]/70 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Éthique Préservée</h3>
              <p className="text-gray-600 text-sm">Vos valeurs thérapeutiques restent au centre</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DCB253] to-[#DCB253]/70 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M3 17l6-6 4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 7v10h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transition Progressive</h3>
              <p className="text-gray-600 text-sm">Cabinet maintenu pendant la transition</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DCB253] to-[#DCB253]/70 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expertise Valorisée</h3>
              <p className="text-gray-600 text-sm">Votre méthode devient un actif scalable</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DCB253] to-[#DCB253]/70 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M17 21V19C17 17.9 16.1 17 15 17H9C7.9 17 7 17.9 7 19V21" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accompagnement Holistique</h3>
              <p className="text-gray-600 text-sm">Support technique ET humain</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DCB253] to-[#DCB253]/70 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                  <line x1="12" y1="20" x2="12" y2="10" stroke="currentColor" strokeWidth="2"/>
                  <line x1="18" y1="20" x2="18" y2="4" stroke="currentColor" strokeWidth="2"/>
                  <line x1="6" y1="20" x2="6" y2="16" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transparence Thérapeutique</h3>
              <p className="text-gray-600 text-sm">Communication dans votre langage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Résultats & Social Proof */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              Nos{' '}
              <span className="text-[#DCB253]">Résultats</span>{' '}
              Documentés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              300+ thérapeutes transformés avec notre écosystème complet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl font-black text-[#DCB253] mb-2">300+</div>
                <p className="text-gray-600">Thérapeutes transformés</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl font-black text-[#DCB253] mb-2">150k€+</div>
                <p className="text-gray-600">CA mensuel clients</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl font-black text-[#DCB253] mb-2">90j</div>
                <p className="text-gray-600">Transformation complète</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl font-black text-[#DCB253] mb-2">3 actes</div>
                <p className="text-gray-600">Méthode exclusive</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#DCB253]/10 to-[#DCB253]/5 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">L'Écosystème de Transformation Digitale Thérapeutique</h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              <strong>Par des thérapeutes, pour des thérapeutes, avec une éthique inébranlable.</strong> 
              Nous transformons votre expertise en empire digital éthique sans trahir vos valeurs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-r from-[#DCB253] to-[#DCB253]/80 relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-black text-white">
              Prêt à transformer votre pratique ?
            </h2>
            <p className="text-xl lg:text-2xl text-white/90">
              Rejoignez l'écosystème Thérapreneur et transformez votre expertise 
              en empire digital éthique.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <a 
                href="https://www.boosttoncabinet.fr/68b2fde43c8c0a003cd695c0/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#DCB253] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <span className="inline-flex items-center gap-2">
                  <TargetIcon size={20} />
                  <span>Méthode POV Gratuite</span>
                </span>
              </a>
              <Link 
                href="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#DCB253] transition-all hover:shadow-lg transform hover:scale-105"
              >
                Découvrir l'écosystème
              </Link>
            </div>
          </div>
      </div>
    </section>
    </>
  );
}