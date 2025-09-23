import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services Thérapreneur | L\'Écosystème de Transformation Digitale Thérapeutique',
  description: 'Découvrez nos 3 niveaux d\'accompagnement : DIY (5.000€), DWY (10.500€), DFY (21.000€). L\'écosystème complet pour transformer votre expertise thérapeutique en empire digital éthique.',
  keywords: 'écosystème transformation digitale thérapeutique, services thérapreneur, DIY DWY DFY, accompagnement thérapeute entrepreneur, empire digital éthique',
  openGraph: {
    title: 'L\'Écosystème Thérapreneur | Du DIY au Full Service',
    description: 'Nos 3 niveaux d\'accompagnement pour transformer votre expertise thérapeutique en empire digital tout en préservant vos valeurs.',
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container-custom py-20 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#DCB253]/10 to-[#DCB253]/5 px-4 py-2 rounded-full border border-[#DCB253]/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#DCB253]">
                  <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm font-medium text-gray-700">L'Écosystème de Transformation Digitale</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black leading-tight text-gray-900">
                Du DIY au{' '}
                <span className="bg-gradient-to-r from-[#DCB253] to-[#DCB253]/80 bg-clip-text text-transparent">Full Service</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                <strong>L'écosystème complet</strong> pour transformer votre expertise thérapeutique en empire digital éthique. 
                3 niveaux d'accompagnement, de l'autonomie guidée au service clé en main.
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#DCB253] mx-auto mb-3">
                  <path d="M17 21V19C17 17.9 16.1 17 15 17H9C7.9 17 7 17.9 7 19V21" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Thérapeutes transformés</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#DCB253] mx-auto mb-3">
                  <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <div className="text-3xl font-bold text-gray-900">150k€/mois</div>
                <div className="text-sm text-gray-600">CA clients documenté</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#DCB253] mx-auto mb-3">
                  <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <div className="text-3xl font-bold text-gray-900">90 jours</div>
                <div className="text-sm text-gray-600">Transformation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Promesse */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              Notre Promesse{' '}
              <span className="bg-gradient-to-r from-[#DCB253] to-[#DCB253]/80 bg-clip-text text-transparent">Centrale</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8 leading-relaxed">
                &quot;Nous transformons votre expertise thérapeutique en empire digital éthique 
                – sans jamais trahir vos valeurs humaines.&quot;
              </blockquote>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center bg-red-50 rounded-2xl p-6">
                  <div className="text-4xl mb-4">❌</div>
                  <h3 className="font-bold text-red-600 mb-2">L'anti-formation business</h3>
                  <p className="text-sm text-gray-600">Qui vous pousse à devenir "vendeur"</p>
                </div>
                <div className="text-center bg-red-50 rounded-2xl p-6">
                  <div className="text-4xl mb-4">❌</div>
                  <h3 className="font-bold text-red-600 mb-2">L'anti-agence marketing</h3>
                  <p className="text-sm text-gray-600">Qui ignore votre éthique thérapeutique</p>
                </div>
                <div className="text-center bg-red-50 rounded-2xl p-6">
                  <div className="text-4xl mb-4">❌</div>
                  <h3 className="font-bold text-red-600 mb-2">L'anti-gourou mindset</h3>
                  <p className="text-sm text-gray-600">Déconnecté de votre réalité terrain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les 3 Niveaux */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#DCB253] text-white px-4 py-2 rounded-full mb-6">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <polygon points="12,2 2,7 12,12 22,7 12,2" stroke="currentColor" strokeWidth="2"/>
                <polyline points="2,17 12,22 22,17" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className="text-sm font-medium">Niveaux d'Accompagnement</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              Du DIY au{' '}
              <span className="bg-gradient-to-r from-[#DCB253] to-[#DCB253]/80 bg-clip-text text-transparent">Full Service</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Choisissez le niveau d'accompagnement qui correspond à votre situation, 
              vos besoins et votre budget dans notre écosystème de transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* DIY - L'Autonomie Guidée */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white text-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mx-auto mb-4">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="currentColor"/>
                </svg>
                <h3 className="text-2xl font-bold mb-2">DIY</h3>
                <p className="text-blue-100 mb-4">"L'Autonomie Guidée"</p>
                <div className="text-4xl font-black mb-2">5.000€</div>
                <p className="text-sm text-blue-100">Nous vous donnons les clés, vous conduisez</p>
              </div>
              
              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="3"/>
                      </svg>
                    </div>
                    <span className="text-gray-700"><strong>Masterclass Complète</strong> (15.000€ de valeur)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="3"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">Tous les frameworks Thérapreneur</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="3"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">52 Coaching de Groupe/an avec les fondateurs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="3"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">Communauté privée d'entraide</span>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    <strong>Idéal pour :</strong> Thérapeutes autonomes et motivés, 
                    budget limité mais temps disponible.
                  </p>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all">
                  Choisir DIY
                </button>
              </div>
            </div>

            {/* DWY - La Co-Création - Highlighted */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all relative border-2 border-[#DCB253] transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-[#DCB253] text-white px-6 py-2 rounded-full text-sm font-bold">POPULAIRE</span>
              </div>
              
              <div className="bg-gradient-to-br from-[#DCB253] to-[#DCB253]/80 p-6 text-white text-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mx-auto mb-4">
                  <polygon points="12,2 2,7 12,12 22,7 12,2" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="2,17 12,22 22,17" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <h3 className="text-2xl font-bold mb-2">DWY</h3>
                <p className="text-[#DCB253]/80 mb-4">"La Co-Création"</p>
                <div className="text-4xl font-black mb-2">10.500€</div>
                <p className="text-sm text-[#DCB253]/80">Main dans la main vers votre transformation</p>
              </div>
              
              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="3"/>
                      </svg>
                    </div>
                    <span className="text-gray-700"><strong>Tout le DIY inclus</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="3"/>
                      </svg>
                    </div>
                    <span className="text-gray-700"><strong>12 Sessions Individuelles</strong> (6.000€ de valeur)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="3"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">Stratégie personnalisée</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="3"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">Mise en relation experts (2.000€ d'économies)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="3"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">Lancement Media Buying inclus (750€)</span>
                  </div>
                </div>
                
                <div className="bg-[#DCB253]/10 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    <strong>Idéal pour :</strong> Cabinet déjà rentable (50-100k€/an), 
                    prêts à co-construire activement.
                  </p>
                </div>
                
                <button className="w-full bg-[#DCB253] text-white py-4 rounded-xl font-bold hover:bg-[#DCB253]/90 transition-all">
                  Choisir DWY
                </button>
              </div>
            </div>

            {/* DFY - La Transformation Clé en Main */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-6 text-white text-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mx-auto mb-4">
                  <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M21 12V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H16" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <h3 className="text-2xl font-bold mb-2">DFY</h3>
                <p className="text-purple-100 mb-4">"La Transformation Clé en Main"</p>
                <div className="text-4xl font-black mb-2">21.000€</div>
                <p className="text-sm text-purple-100">Concentrez-vous sur vos patients, on s'occupe du reste</p>
              </div>
              
              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="3"/>
                      </svg>
                    </div>
                    <span className="text-gray-700"><strong>Tout le DWY inclus</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="3"/>
                      </svg>
                    </div>
                    <span className="text-gray-700"><strong>Exécution Complète</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="3"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">Copywriting VSL + tunnel complet (3.000€)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="3"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">Chef de projet dédié</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="3"/>
                      </svg>
                    </div>
                    <span className="text-gray-700"><strong>Garantie de résultats</strong></span>
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    <strong>Idéal pour :</strong> Influenceurs santé (20k+ followers), 
                    revenus 100k€+/an, zéro temps disponible.
                  </p>
                </div>
                
                <button className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold hover:bg-purple-700 transition-all">
                  Choisir DFY
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-r from-[#DCB253] to-[#DCB253]/80">
        <div className="container-custom text-center">
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
                🎯 Méthode POV Gratuite 🆓
              </a>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#DCB253] transition-all hover:shadow-lg transform hover:scale-105"
              >
                Réserver un audit gratuit
              </Link>
            </div>
            <p className="text-sm text-white/80 max-w-3xl mx-auto">
              <strong>Satisfaction garantie :</strong> Si vous n'êtes pas satisfait dans les 30 premiers jours, 
              nous vous remboursons intégralement, sans question.
            </p>
      </div>
    </div>
      </section>
    </>
  );
}