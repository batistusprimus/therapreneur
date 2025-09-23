import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Équipe Thérapreneur | Fondateurs et experts en transformation digitale thérapeutique',
  description: 'Rencontrez l\'équipe Thérapreneur : des thérapeutes entrepreneurs qui ont transformé leur expertise en empire digital. Découvrez leur histoire, leur vision et leur mission pour révolutionner la thérapie.',
  keywords: 'équipe thérapreneur, fondateurs thérapreneur, experts transformation digitale thérapie, thérapeutes entrepreneurs, leadership thérapreneur',
  openGraph: {
    title: 'Notre Équipe | Les visionnaires de la transformation thérapeutique',
    description: 'Découvrez l\'équipe qui révolutionne la transformation digitale pour thérapeutes. De 0 à 150k€/mois : leur histoire, leur méthode.',
  },
};

export default function EquipePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#DCB253] via-[#F5F5F5] to-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-black mb-6 text-[#1A1A1A]">
              Rencontrez l&apos;équipe{' '}
              <span className="text-[#DCB253]">Thérapreneur</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
              Les visionnaires qui révolutionnent la transformation digitale thérapeutique. 
              <strong>Des thérapeutes, pour des thérapeutes, avec une éthique inébranlable.</strong>
            </p>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 border border-[#DCB253]/20">
              <blockquote className="text-2xl font-bold text-gray-700 border-l-4 border-[#DCB253] pl-6">
                &quot;Nous ne réussissons que si vous transformez plus de vies, avec plus de profondeur, 
                en préservant votre équilibre.&quot;
              </blockquote>
              <p className="text-gray-600 mt-4">— Notre engagement fondamental</p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black mb-8 text-[#1A1A1A]">
                Notre{' '}
                <span className="text-[#DCB253]">Histoire</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  <strong>Thérapreneur est né d&apos;une frustration commune :</strong> voir des thérapeutes 
                  extraordinaires limités par le modèle traditionnel &quot;temps contre argent&quot;.
                </p>
                <p>
                  Nous avons nous-mêmes vécu cette transformation : de praticiens épuisés 
                  à entrepreneurs épanouis, en passant de <strong>0 à 150k€/mois en 12 mois</strong>, 
                  tout en gardant notre âme thérapeutique.
                </p>
                <p>
                  <strong>Notre mission :</strong> documenter cette transformation en temps réel 
                  avec une transparence totale, pour que d&apos;autres thérapeutes puissent 
                  suivre le même chemin sans sacrifier leurs valeurs.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#DCB253]/10 to-[#DCB253]/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A]">📊 Notre Transformation Documentée</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-[#DCB253] mb-2">0€</div>
                  <div className="text-sm text-gray-600">Point de départ</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#DCB253] mb-2">150k€</div>
                  <div className="text-sm text-gray-600">CA mensuel actuel</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#DCB253] mb-2">12</div>
                  <div className="text-sm text-gray-600">Mois de croissance</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#DCB253] mb-2">500+</div>
                  <div className="text-sm text-gray-600">Thérapeutes transformés</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-[#1A1A1A]">
              Nos{' '}
              <span className="text-[#DCB253]">Valeurs</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Les principes qui guident chaque décision, chaque interaction, chaque transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#DCB253] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">Éthique Préservée</h3>
              <p className="text-gray-700 text-sm">Vos valeurs thérapeutiques restent au centre</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#DCB253] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">Transparence Totale</h3>
              <p className="text-gray-700 text-sm">Métriques adaptées à votre pratique</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#DCB253] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">Accompagnement Holistique</h3>
              <p className="text-gray-700 text-sm">Support technique ET humain</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#DCB253] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">Expertise Valorisée</h3>
              <p className="text-gray-700 text-sm">Votre méthode devient un actif scalable</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#DCB253] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">Transition Progressive</h3>
              <p className="text-gray-700 text-sm">Cabinet maintenu pendant la transition</p>
            </div>
          </div>
        </div>
      </section>

      {/* L'Équipe - Profils */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Nos{' '}
              <span className="text-[#DCB253]">Experts</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une équipe pluridisciplinaire unie par la même vision : 
              révolutionner la transformation digitale thérapeutique
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Fondateur 1 */}
            <div className="bg-gradient-to-br from-[#DCB253]/20 to-[#DCB253]/10 rounded-2xl p-8 border border-[#DCB253]/30">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-[#DCB253] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👨‍⚕️</span>
                </div>
                <h3 className="text-2xl font-bold text-[#DCB253] mb-2">Jean-Rémi Tomasini</h3>
                <p className="text-gray-300">Co-Fondateur & Stratégiste</p>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p className="text-sm">
                  <strong>Parcours :</strong> Thérapeute holistique devenu entrepreneur digital. 
                  Expert en transformation de cabinets thérapeutiques.
                </p>
                <p className="text-sm">
                  <strong>Spécialité :</strong> Positionnement unique, création d&apos;offres high-ticket, 
                  stratégie de scaling éthique.
                </p>
                <p className="text-sm">
                  <strong>Mission :</strong> Aider les thérapeutes à valoriser leur expertise 
                  sans perdre leur essence thérapeutique.
                </p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-[#DCB253]/30">
                <p className="text-xs text-gray-400 italic">
                  &quot;Chaque thérapeute possède une méthode unique qui mérite de rayonner.&quot;
                </p>
              </div>
            </div>

            {/* Fondateur 2 */}
            <div className="bg-gradient-to-br from-[#DCB253]/20 to-[#DCB253]/10 rounded-2xl p-8 border border-[#DCB253]/30">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-[#DCB253] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👩‍💼</span>
                </div>
                <h3 className="text-2xl font-bold text-[#DCB253] mb-2">Marie Dubois</h3>
                <p className="text-gray-300">Co-Fondatrice & Experte Marketing</p>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p className="text-sm">
                  <strong>Parcours :</strong> Ancienne cadre marketing reconvertie à l&apos;accompagnement 
                  de thérapeutes. Spécialiste du marketing éthique.
                </p>
                <p className="text-sm">
                  <strong>Spécialité :</strong> Marketing de contenu, automation respectueuse, 
                  conversion alignée avec les valeurs thérapeutiques.
                </p>
                <p className="text-sm">
                  <strong>Mission :</strong> Démontrer que marketing et éthique peuvent 
                  coexister harmonieusement.
                </p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-[#DCB253]/30">
                <p className="text-xs text-gray-400 italic">
                  &quot;L&apos;authenticité est le meilleur des arguments de vente.&quot;
                </p>
              </div>
            </div>

            {/* Expert Technique */}
            <div className="bg-gradient-to-br from-[#DCB253]/20 to-[#DCB253]/10 rounded-2xl p-8 border border-[#DCB253]/30">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-[#DCB253] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👨‍💻</span>
                </div>
                <h3 className="text-2xl font-bold text-[#DCB253] mb-2">Alexandre Martin</h3>
                <p className="text-gray-300">Expert Technique & Automation</p>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p className="text-sm">
                  <strong>Parcours :</strong> Développeur full-stack spécialisé dans les solutions 
                  pour professionnels de santé et du bien-être.
                </p>
                <p className="text-sm">
                  <strong>Spécialité :</strong> Écosystèmes digitaux, tunnels de conversion, 
                  automation marketing et CRM thérapeutique.
                </p>
                <p className="text-sm">
                  <strong>Mission :</strong> Rendre la technologie accessible et au service 
                  de la relation thérapeutique.
                </p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-[#DCB253]/30">
                <p className="text-xs text-gray-400 italic">
                  &quot;La technologie doit simplifier, pas complexifier.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Philosophie */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-[#1A1A1A]">
              Notre{' '}
              <span className="text-[#DCB253]">Philosophie</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ce en quoi nous croyons profondément
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#1A1A1A]">🌟 Nous croyons que :</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#DCB253] pl-4">
                  <p className="text-gray-700">
                    <strong>Chaque thérapeute</strong> possède une méthode unique qui mérite de rayonner
                  </p>
                </div>
                <div className="border-l-4 border-[#DCB253] pl-4">
                  <p className="text-gray-700">
                    <strong>L&apos;impact online</strong> démultiplie le bien sans diluer l&apos;essence
                  </p>
                </div>
                <div className="border-l-4 border-[#DCB253] pl-4">
                  <p className="text-gray-700">
                    <strong>L&apos;éthique et le profit</strong> peuvent coexister harmonieusement
                  </p>
                </div>
                <div className="border-l-4 border-[#DCB253] pl-4">
                  <p className="text-gray-700">
                    <strong>La transformation digitale</strong> est une évolution naturelle, pas une trahison
                  </p>
                </div>
                <div className="border-l-4 border-[#DCB253] pl-4">
                  <p className="text-gray-700">
                    <strong>Le futur de la thérapie</strong> est hybride : humain ET scalable
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#DCB253]/10 to-[#DCB253]/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A]">🎯 Notre Posture</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#DCB253] mb-2">✅ Ce que nous sommes</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Traducteurs :</strong> Business ↔ Thérapeutique</li>
                    <li>• <strong>Architectes :</strong> De votre écosystème digital</li>
                    <li>• <strong>Gardiens :</strong> De vos valeurs éthiques</li>
                    <li>• <strong>Catalyseurs :</strong> De votre potentiel dormant</li>
                    <li>• <strong>Partenaires :</strong> De votre évolution</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-red-500 mb-2">❌ Ce que nous ne sommes pas</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Des &quot;marketeurs agressifs&quot;</li>
                    <li>• Des &quot;vendeurs de rêve&quot;</li>
                    <li>• Des &quot;gourous du mindset&quot;</li>
                    <li>• Des &quot;consultants théoriques&quot;</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rejoindre l'aventure */}
      <section className="py-20 bg-[#DCB253]">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-[#1A1A1A]">
            Rejoignez l&apos;aventure Thérapreneur
          </h2>
          <p className="text-xl text-[#1A1A1A] mb-8 max-w-3xl mx-auto">
            Ensemble, créons le futur éthique de la thérapie digitale. 
            Par des thérapeutes, pour des thérapeutes, avec une éthique inébranlable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services" 
              className="bg-[#1A1A1A] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1A1A1A]/90 transition-all shadow-lg"
            >
              Découvrir nos accompagnements
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1A1A1A] hover:text-white transition-all"
            >
              Réserver un diagnostic gratuit
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
            "foundingDate": "2023",
            "employee": [
              {
                "@type": "Person",
                "name": "Jean-Rémi Tomasini",
                "jobTitle": "Co-Fondateur & Stratégiste",
                "description": "Expert en transformation de cabinets thérapeutiques"
              },
              {
                "@type": "Person",
                "name": "Marie Dubois",
                "jobTitle": "Co-Fondatrice & Experte Marketing",
                "description": "Spécialiste du marketing éthique pour thérapeutes"
              },
              {
                "@type": "Person",
                "name": "Alexandre Martin",
                "jobTitle": "Expert Technique & Automation",
                "description": "Développeur spécialisé solutions professionnels santé"
              }
            ],
            "values": [
              "Éthique préservée",
              "Transparence totale",
              "Accompagnement holistique",
              "Expertise valorisée",
              "Transition progressive"
            ]
          })
        }}
      />
    </>
  );
}