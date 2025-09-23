import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thérapreneur | De 0 à 150k€/mois - Transparence totale business thérapeute',
  description: 'L\'intérieur d\'un business qui est passé de 0 à 150k€/mois en 12 mois. Découvrez les stratégies, chiffres et coulisses pour transformer votre expertise thérapeutique en empire digital éthique.',
  keywords: 'thérapreneur, thérapeute entrepreneur, transformation digitale thérapie, scaling cabinet, offre high-ticket thérapeute, business thérapeute, marketing éthique santé',
  openGraph: {
    title: 'Thérapreneur | L\'intérieur d\'un business de 0 à 150k€/mois',
    description: 'Transparence totale sur la transformation de thérapeutes en entrepreneurs. Méthodes testées, chiffres réels, erreurs assumées.',
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#DCB253] via-[#F5F5F5] to-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent"></div>
        <div className="container-custom py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-black leading-tight text-[#1A1A1A]">
                  L&apos;intérieur d&apos;un business qui est passé de{' '}
                  <span className="text-[#DCB253]">0 à 150k€/mois</span>{' '}
                  en 12 mois
                </h1>
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                  Nous documentons en temps réel la transformation de thérapeutes en entrepreneurs, 
                  avec une <strong>transparence totale</strong> sur les stratégies, les chiffres et les coulisses.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/services" 
                  className="bg-[#DCB253] text-[#1A1A1A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#DCB253]/90 transition-all shadow-lg text-center"
                >
                  Découvrir nos offres
                </a>
                <a 
                  href="/blog" 
                  className="border-2 border-[#DCB253] text-[#DCB253] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#DCB253] hover:text-[#1A1A1A] transition-all text-center"
                >
                  Voir les résultats
                </a>
              </div>

              {/* Social Proof */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#DCB253]">150k€+</div>
                  <div className="text-sm text-gray-600">CA mensuel atteint</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#DCB253]">500+</div>
                  <div className="text-sm text-gray-600">Thérapeutes transformés</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#DCB253]">12 mois</div>
                  <div className="text-sm text-gray-600">De croissance documentée</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-[#DCB253]/20">
                <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A]">🎯 Notre Mission</h3>
                <div className="space-y-4 text-gray-700">
                  <p><strong>Pour qui :</strong> Thérapeutes expérimentés + entrepreneurs en devenir</p>
                  <p><strong>Problème résolu :</strong> Comment scaler sans perdre son âme</p>
                  <p><strong>Notre solution :</strong> Méthodes testées, chiffres réels, erreurs assumées</p>
                  <p><strong>Différenciation :</strong> Le seul qui montre VRAIMENT l&apos;intérieur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proposition de valeur */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-[#1A1A1A]">
              Nous transformons votre expertise thérapeutique en 
              <span className="text-[#DCB253]"> empire digital éthique</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Sans jamais trahir vos valeurs humaines. L&apos;anti-formation business + L&apos;anti-agence marketing + L&apos;anti-gourou mindset.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#DCB253]/10">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]">Pédagogie</h3>
              <p className="text-gray-700">Chaque vidéo = une leçon applicable immédiatement. Du concret, pas du théorique.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#DCB253]/10">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]">Transparence</h3>
              <p className="text-gray-700">Les vrais chiffres, les vraies galères, les vrais wins. Rien n&apos;est caché.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#DCB253]/10">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]">Clarté</h3>
              <p className="text-gray-700">Complexe rendu simple, sans bullshit. Direct au but, toujours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black mb-8 text-[#1A1A1A]">
                De thérapeute épuisé à{' '}
                <span className="text-[#DCB253]">expert digital reconnu</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 rounded-full p-2 mt-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#1A1A1A] mb-2">AVANT</h4>
                    <p className="text-gray-700">Cabinet saturé, plafond de verre atteint, 1:1 uniquement, épuisement constant</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-full p-2 mt-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#1A1A1A] mb-2">APRÈS</h4>
                    <p className="text-gray-700">Expert digital reconnu, impact démultiplié, revenus scalables, méthode qui rayonne</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#DCB253]/10 to-[#DCB253]/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A]">📊 Résultats Documentés</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-[#DCB253] mb-2">x10</div>
                  <div className="text-sm text-gray-600">Ticket moyen</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#DCB253] mb-2">x100</div>
                  <div className="text-sm text-gray-600">Impact potentiel</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#DCB253] mb-2">-30%</div>
                  <div className="text-sm text-gray-600">Temps cabinet</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#DCB253] mb-2">+50%</div>
                  <div className="text-sm text-gray-600">Revenus min</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Méthode en 3 actes */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Le Parcours de Transformation en{' '}
              <span className="text-[#DCB253]">3 Actes</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Notre méthode éprouvée pour transformer votre expertise en empire digital éthique
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#DCB253]/20 to-[#DCB253]/10 rounded-xl p-8 border border-[#DCB253]/30">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold mb-4 text-[#DCB253]">Acte 1 : Germination</h3>
              <p className="text-sm text-[#DCB253] mb-4">Jours 1-30</p>
              <p className="text-gray-300 mb-6">De l&apos;expertise cachée à l&apos;offre signature</p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Positionnement unique clarifié</li>
                <li>• Offre transformationnelle 2-5k€</li>
                <li>• Écosystème digital en place</li>
                <li>• Message signature puissant</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-[#DCB253]/20 to-[#DCB253]/10 rounded-xl p-8 border border-[#DCB253]/30">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-[#DCB253]">Acte 2 : Floraison</h3>
              <p className="text-sm text-[#DCB253] mb-4">Jours 31-60</p>
              <p className="text-gray-300 mb-6">Du cabinet local à l&apos;expert digital</p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Tunnel de transformation</li>
                <li>• Machine à contenu activée</li>
                <li>• Premiers clients high-ticket</li>
                <li>• Système de vente éthique</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-[#DCB253]/20 to-[#DCB253]/10 rounded-xl p-8 border border-[#DCB253]/30">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold mb-4 text-[#DCB253]">Acte 3 : Rayonnement</h3>
              <p className="text-sm text-[#DCB253] mb-4">Jours 61-90</p>
              <p className="text-gray-300 mb-6">Du praticien solo à l&apos;écosystème scalable</p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Optimisation conversions +30%</li>
                <li>• Délégation cabinet</li>
                <li>• Automation maximale 80%</li>
                <li>• Trajectoire 150-300k€/an</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/savoir-faire" 
              className="bg-[#DCB253] text-[#1A1A1A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#DCB253]/90 transition-all shadow-lg"
            >
              Découvrir la méthode complète
            </Link>
          </div>
        </div>
      </section>

      {/* Personas / Témoignages */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-[#1A1A1A]">
              Qui nous fait confiance ?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Thérapeutes confirmés, prêts à créer une offre premium et impacter plus largement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#DCB253]/10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#DCB253]/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">👩‍⚕️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">Claire Moreau</h3>
                  <p className="text-[#DCB253]">Sophrologue, 38 ans</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                &quot;Cabinet plein depuis 3 ans, je voulais créer un accompagnement de 3 mois à 2500€ 
                pour les femmes en burn-out. Fatiguée des séances à la chaîne.&quot;
              </p>
              <div className="text-sm text-gray-600">
                <strong>Objectif :</strong> Impacter + en travaillant -
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#DCB253]/10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#DCB253]/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">👨‍⚕️</span>
                </div>
        <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">Julien Dupont</h3>
                  <p className="text-[#DCB253]">Ostéopathe, 45 ans</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                &quot;Rêve de lancer une académie en ligne pour transmettre ma méthode. 
                J&apos;ai une communauté Instagram engagée mais n&apos;arrive pas à la monétiser.&quot;
              </p>
              <div className="text-sm text-gray-600">
                <strong>Objectif :</strong> Transformer la visibilité en revenus alternatifs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[#DCB253]">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-[#1A1A1A]">
            Prêt à transformer votre expertise ?
          </h2>
          <p className="text-xl text-[#1A1A1A] mb-8 max-w-3xl mx-auto">
            Rejoignez les thérapeutes qui ont choisi de scaler leur impact sans perdre leur âme. 
            Transparence totale, méthodes testées, résultats documentés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services" 
              className="bg-[#1A1A1A] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1A1A1A]/90 transition-all shadow-lg"
            >
              Découvrir nos accompagnements
            </Link>
            <Link 
              href="/equipe" 
              className="border-2 border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1A1A1A] hover:text-white transition-all"
            >
              Rencontrer l&apos;équipe
            </Link>
          </div>
      </div>
    </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Thérapreneur",
            "description": "Écosystème de transformation digitale thérapeutique",
            "url": "https://therapreneur.fr",
            "logo": "https://therapreneur.fr/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+33-1-23-45-67-89",
              "contactType": "Customer Service",
              "availableLanguage": "French"
            },
            "sameAs": [
              "https://www.linkedin.com/company/therapreneur",
              "https://www.instagram.com/therapreneur",
              "https://www.youtube.com/@therapreneur"
            ],
            "offers": {
              "@type": "Offer",
              "description": "Transformation digitale pour thérapeutes",
              "priceCurrency": "EUR",
              "priceRange": "5000-21000"
            }
          })
        }}
      />
    </>
  );
}