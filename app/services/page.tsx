import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Offres Thérapreneur | DIY, DWY, DFY - Transformation digitale thérapeute',
  description: 'Découvrez nos 3 niveaux d\'accompagnement pour thérapeutes : DIY 5000€, DWY 10500€, DFY 21000€. De l\'autonomie guidée au service clé en main pour transformer votre expertise en empire digital éthique.',
  keywords: 'offres thérapreneur, accompagnement thérapeute, DIY DWY DFY, transformation digitale thérapie, coaching thérapeute entrepreneur, formation business thérapeute',
  openGraph: {
    title: 'Nos Offres | Du DIY au Full Service pour thérapeutes entrepreneurs',
    description: 'Choisissez votre niveau d\'accompagnement : DIY (5000€), DWY (10500€) ou DFY (21000€). Méthode éprouvée pour scaler votre cabinet sans perdre vos valeurs.',
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#DCB253] via-[#F5F5F5] to-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-black mb-6 text-[#1A1A1A]">
              L&apos;Écosystème de Transformation Digitale{' '}
              <span className="text-[#DCB253]">Thérapeutique</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
              &quot;Nous transformons votre expertise thérapeutique en empire digital éthique 
              – sans jamais trahir vos valeurs humaines.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Nos 3 Offres */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Niveaux d&apos;Accompagnement :{' '}
              <span className="text-[#DCB253]">Du DIY au Full Service</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choisissez le niveau d&apos;accompagnement qui correspond à votre situation, vos besoins et votre budget
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* DIY - L'Autonomie Guidée */}
            <div className="bg-gradient-to-br from-[#DCB253]/10 to-[#DCB253]/5 rounded-2xl p-8 border border-[#DCB253]/30 relative">
              <div className="bg-[#DCB253] text-[#1A1A1A] px-4 py-2 rounded-full text-sm font-bold inline-block mb-6">
                POPULAIRE
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-3xl font-black mb-2 text-[#DCB253]">DIY</h3>
                <p className="text-lg text-gray-300 mb-4">&quot;L&apos;Autonomie Guidée&quot;</p>
                <div className="text-5xl font-black text-[#DCB253] mb-2">5.000€</div>
                <p className="text-sm text-gray-400">Nous vous donnons les clés, vous conduisez</p>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-bold text-[#DCB253] mb-3">✅ Inclus :</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Masterclass Complète</strong> (15.000€ de valeur)</li>
                    <li>• Tous les frameworks Therapreneur</li>
                    <li>• Module &quot;Vente Éthique pour Thérapeutes&quot;</li>
                    <li>• Templates et outils prêts à l&apos;emploi</li>
                    <li>• <strong>52 Coaching de Groupe/an</strong> avec les fondateurs</li>
                    <li>• <strong>Communauté privée</strong> d&apos;entraide</li>
                    <li>• <strong>Mises à jour</strong> à vie</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#DCB253] mb-3">👥 Pour qui ?</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• Thérapeutes autonomes et motivés</li>
                    <li>• Budget limité mais temps disponible</li>
                    <li>• Envie d&apos;apprendre en faisant</li>
                    <li>• Capacité d&apos;exécution confirmée</li>
                  </ul>
                </div>
              </div>

              <button className="w-full bg-[#DCB253] text-[#1A1A1A] py-4 rounded-lg font-bold text-lg hover:bg-[#DCB253]/90 transition-all">
                Choisir DIY
              </button>
            </div>

            {/* DWY - La Co-Création */}
            <div className="bg-gradient-to-br from-[#DCB253]/20 to-[#DCB253]/10 rounded-2xl p-8 border-2 border-[#DCB253] relative transform scale-105">
              <div className="bg-[#DCB253] text-[#1A1A1A] px-4 py-2 rounded-full text-sm font-bold inline-block mb-6">
                RECOMMANDÉ
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-3xl font-black mb-2 text-[#DCB253]">DWY</h3>
                <p className="text-lg text-gray-300 mb-4">&quot;La Co-Création&quot;</p>
                <div className="text-5xl font-black text-[#DCB253] mb-2">10.500€</div>
                <p className="text-sm text-gray-400">Main dans la main vers votre transformation</p>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-bold text-[#DCB253] mb-3">✅ Inclus :</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Tout le DIY</strong> +</li>
                    <li>• <strong>12 Sessions Individuelles</strong> (6.000€ de valeur)</li>
                    <li>• Stratégie personnalisée</li>
                    <li>• Feedback direct des fondateurs</li>
                    <li>• Support entre sessions illimité</li>
                    <li>• <strong>Mise en relation experts</strong> (2.000€ d&apos;économies)</li>
                    <li>• Media buyer dédié + Copywriter santé</li>
                    <li>• <strong>Lancement Media Buying</strong> inclus (750€)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#DCB253] mb-3">👥 Pour qui ?</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• Cabinet déjà rentable (50-100k€/an)</li>
                    <li>• Prêts à co-construire activement</li>
                    <li>• 5-10h/semaine disponibles</li>
                    <li>• Veulent aller vite avec guidance</li>
                  </ul>
                </div>
              </div>

              <button className="w-full bg-[#DCB253] text-[#1A1A1A] py-4 rounded-lg font-bold text-lg hover:bg-[#DCB253]/90 transition-all">
                Choisir DWY
              </button>
            </div>

            {/* DFY - La Transformation Clé en Main */}
            <div className="bg-gradient-to-br from-[#DCB253]/10 to-[#DCB253]/5 rounded-2xl p-8 border border-[#DCB253]/30 relative">
              <div className="bg-gradient-to-r from-[#DCB253] to-[#DCB253]/80 text-[#1A1A1A] px-4 py-2 rounded-full text-sm font-bold inline-block mb-6">
                PREMIUM
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-3xl font-black mb-2 text-[#DCB253]">DFY</h3>
                <p className="text-lg text-gray-300 mb-4">&quot;La Transformation Clé en Main&quot;</p>
                <div className="text-5xl font-black text-[#DCB253] mb-2">21.000€</div>
                <p className="text-sm text-gray-400">Concentrez-vous sur vos patients, on s&apos;occupe du reste</p>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-bold text-[#DCB253] mb-3">✅ Inclus :</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Tout le DWY</strong> +</li>
                    <li>• <strong>Exécution Complète</strong></li>
                    <li>• Copywriting VSL + tunnel complet (3.000€)</li>
                    <li>• Design professionnel (1.500€)</li>
                    <li>• Campagnes gérées 3 mois</li>
                    <li>• Setting des RDV qualifiés</li>
                    <li>• <strong>Supervision Totale</strong> (15.000€ de valeur)</li>
                    <li>• Chef de projet dédié + Reporting hebdomadaire</li>
                    <li>• <strong>Garantie de résultats</strong></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#DCB253] mb-3">👥 Pour qui ?</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• Influenceurs santé (20k+ followers)</li>
                    <li>• Revenus 100k€+/an</li>
                    <li>• Zéro temps disponible</li>
                    <li>• Veulent déléguer totalement</li>
                  </ul>
                </div>
        </div>

              <button className="w-full bg-[#DCB253] text-[#1A1A1A] py-4 rounded-lg font-bold text-lg hover:bg-[#DCB253]/90 transition-all">
                Choisir DFY
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#DCB253]">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-[#1A1A1A]">
            Prêt à choisir votre transformation ?
          </h2>
          <p className="text-xl text-[#1A1A1A] mb-8 max-w-3xl mx-auto">
            Quel que soit votre niveau, nous avons l&apos;accompagnement qui vous correspond. 
            Transparence totale, éthique préservée, résultats garantis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-[#1A1A1A] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1A1A1A]/90 transition-all shadow-lg"
            >
              Réserver un diagnostic gratuit
            </Link>
            <Link 
              href="/savoir-faire" 
              className="border-2 border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1A1A1A] hover:text-white transition-all"
            >
              Découvrir la méthode
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD pour les services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Thérapreneur - Transformation Digitale Thérapeutique",
            "description": "Écosystème de transformation digitale pour thérapeutes entrepreneurs",
            "provider": {
              "@type": "Organization",
              "name": "Thérapreneur"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Offres d'accompagnement thérapeutes",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "name": "DIY - L'Autonomie Guidée",
                  "description": "Masterclass complète avec coaching de groupe",
                  "price": "5000",
                  "priceCurrency": "EUR"
                },
                {
                  "@type": "Offer",
                  "name": "DWY - La Co-Création",
                  "description": "Accompagnement personnalisé avec sessions individuelles",
                  "price": "10500",
                  "priceCurrency": "EUR"
                },
                {
                  "@type": "Offer",
                  "name": "DFY - Clé en Main",
                  "description": "Service complet avec exécution totale",
                  "price": "21000",
                  "priceCurrency": "EUR"
                }
              ]
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "Thérapeutes entrepreneurs",
              "geographicArea": "France"
            }
          })
        }}
      />
    </>
  );
}



