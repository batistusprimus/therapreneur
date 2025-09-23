import { Metadata } from 'next';
import Link from 'next/link';
import { TargetIcon, RocketIcon, StarIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Méthode Thérapreneur | Parcours de Transformation en 3 Actes',
  description: 'Découvrez notre méthode éprouvée en 3 actes : Germination (1-30j), Floraison (31-60j), Rayonnement (61-90j). Transformez votre expertise thérapeutique en empire digital éthique avec notre framework exclusif.',
  keywords: 'méthode thérapreneur, transformation digitale thérapie, parcours 3 actes, germination floraison rayonnement, framework thérapeute entrepreneur, savoir-faire thérapreneur',
  openGraph: {
    title: 'Notre Méthode | Le Parcours de Transformation en 3 Actes',
    description: 'De l\'expertise cachée à l\'empire digital : découvrez notre méthode exclusive pour thérapeutes entrepreneurs. 90 jours pour transformer votre pratique.',
  },
};

export default function SavoirFairePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#DCB253] via-[#F5F5F5] to-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-black mb-6 text-[#1A1A1A]">
              Notre Méthode :{' '}
              <span className="text-[#DCB253]">Le Parcours de Transformation en 3 Actes</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
              Notre framework exclusif pour transformer votre expertise thérapeutique en empire digital éthique. 
              <strong> 90 jours pour révolutionner votre pratique.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Acte 1 : Germination */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="text-6xl mr-4 text-[#DCB253]">
                  <StarIcon size={36} />
                </div>
                <div>
                  <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A]">
                    Acte 1 : <span className="text-[#DCB253]">Germination</span>
                  </h2>
                  <p className="text-xl text-gray-600">Jours 1-30</p>
                </div>
              </div>
              
              <blockquote className="text-2xl font-bold text-gray-700 mb-8 border-l-4 border-[#DCB253] pl-6">
                &quot;De l&apos;expertise cachée à l&apos;offre signature&quot;
              </blockquote>
              
              <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A]">Objectif</h3>
              <p className="text-lg text-gray-700 mb-8">
                Cristalliser votre expertise en offre high-ticket irrésistible. 
                Cette phase pose les fondations de votre transformation digitale.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#DCB253]/10 to-[#DCB253]/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A]">Livrables Clés</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-[#DCB253]/20">
                  <h4 className="font-bold text-[#DCB253] mb-2">Positionnement unique</h4>
                  <p className="text-sm text-gray-600">Votre singularité thérapeutique clarifiée</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-[#DCB253]/20">
                  <h4 className="font-bold text-[#DCB253] mb-2">Offre transformationnelle</h4>
                  <p className="text-sm text-gray-600">Programme 3-6 mois à 2000-5000€</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-[#DCB253]/20">
                  <h4 className="font-bold text-[#DCB253] mb-2">Écosystème digital</h4>
                  <p className="text-sm text-gray-600">Outils et structure en place</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acte 2 : Floraison */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-[#DCB253]/10 to-[#DCB253]/5 rounded-2xl p-8 order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A]">🚀 Livrables Clés</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-[#DCB253]/20">
                  <h4 className="font-bold text-[#DCB253] mb-2">🌐 Tunnel de transformation</h4>
                  <p className="text-sm text-gray-600">Landing page + séquence nurturing</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-[#DCB253]/20">
                  <h4 className="font-bold text-[#DCB253] mb-2">📝 Machine à contenu</h4>
                  <p className="text-sm text-gray-600">30 pièces de contenu haute valeur</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-[#DCB253]/20">
                  <h4 className="font-bold text-[#DCB253] mb-2">💰 Premiers clients high-ticket</h4>
                  <p className="text-sm text-gray-600">3-5 signatures visées</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
              <div className="text-6xl mr-4 text-[#DCB253]">
                <RocketIcon size={36} />
              </div>
                <div>
                  <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A]">
                    Acte 2 : <span className="text-[#DCB253]">Floraison</span>
                  </h2>
                  <p className="text-xl text-gray-600">Jours 31-60</p>
                </div>
              </div>
              
              <blockquote className="text-2xl font-bold text-gray-700 mb-8 border-l-4 border-[#DCB253] pl-6">
                &quot;Du cabinet local à l&apos;expert digital&quot;
              </blockquote>
              
              <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A]">Objectif</h3>
              <p className="text-lg text-gray-700 mb-8">
                Lancer votre présence digitale et signer vos premiers clients online. 
                Phase d&apos;activation et de mise en marché.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Acte 3 : Rayonnement */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="text-6xl mr-4">🌟</div>
                <div>
                  <h2 className="text-4xl lg:text-5xl font-black text-white">
                    Acte 3 : <span className="text-[#DCB253]">Rayonnement</span>
                  </h2>
                  <p className="text-xl text-gray-300">Jours 61-90</p>
                </div>
              </div>
              
              <blockquote className="text-2xl font-bold text-gray-300 mb-8 border-l-4 border-[#DCB253] pl-6">
                &quot;Du praticien solo à l&apos;écosystème scalable&quot;
              </blockquote>
              
              <h3 className="text-2xl font-bold mb-6 text-white">🎯 Objectif</h3>
              <p className="text-lg text-gray-300 mb-8">
                Optimiser, déléguer et préparer le scaling. 
                Phase de consolidation et d&apos;expansion.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#DCB253]/20 to-[#DCB253]/10 rounded-2xl p-8 border border-[#DCB253]/30">
              <h3 className="text-2xl font-bold mb-6 text-white">Livrables Clés</h3>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-[#DCB253]/20">
                  <h4 className="font-bold text-[#DCB253] mb-2">Optimisation conversions</h4>
                  <p className="text-sm text-gray-300">+30% taux de transformation</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-[#DCB253]/20">
                  <h4 className="font-bold text-[#DCB253] mb-2">Automation maximale</h4>
                  <p className="text-sm text-gray-300">80% du process automatisé</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-[#DCB253]/20">
                  <h4 className="font-bold text-[#DCB253] mb-2">Vision 12 mois</h4>
                  <p className="text-sm text-gray-300">Roadmap scaling définie</p>
                </div>
              </div>
        </div>
      </div>
    </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#DCB253]">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-[#1A1A1A]">
            Prêt à démarrer votre transformation ?
          </h2>
          <p className="text-xl text-[#1A1A1A] mb-8 max-w-3xl mx-auto">
            90 jours pour passer de thérapeute local à expert digital reconnu.
          </p>
          <Link 
            href="/services" 
            className="bg-[#1A1A1A] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1A1A1A]/90 transition-all shadow-lg"
          >
            Découvrir nos accompagnements
          </Link>
        </div>
      </section>
    </>
  );
}



