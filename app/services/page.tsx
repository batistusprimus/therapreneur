import { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { XMarkIcon, CheckCircleIcon, TargetIcon, ArrowRightIcon } from '@/components/Icons';

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
            <AnimatedSection className="space-y-8" animation="fade-in-up">
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
            </AnimatedSection>
            <AnimatedSection animation="fade-in-up" delay={150}>
              <nav aria-label="Sommaire" className="mt-10">
                <ul className="flex gap-3 md:gap-4 overflow-x-auto justify-center">
                  <li><a href="#promesse" className="inline-block whitespace-nowrap bg-white/80 backdrop-blur px-3 md:px-4 py-2 rounded-full text-sm border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">Promesse</a></li>
                  <li><a href="#niveaux" className="inline-block whitespace-nowrap bg-white/80 backdrop-blur px-3 md:px-4 py-2 rounded-full text-sm border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">Niveaux</a></li>
                  <li><a href="#process" className="inline-block whitespace-nowrap bg-white/80 backdrop-blur px-3 md:px-4 py-2 rounded-full text-sm border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">Process</a></li>
                  <li><a href="#standards" className="inline-block whitespace-nowrap bg-white/80 backdrop-blur px-3 md:px-4 py-2 rounded-full text-sm border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">Standards</a></li>
                  <li><a href="#indicateurs" className="inline-block whitespace-nowrap bg-white/80 backdrop-blur px-3 md:px-4 py-2 rounded-full text-sm border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">Indicateurs</a></li>
                  <li><a href="#philosophie" className="inline-block whitespace-nowrap bg-white/80 backdrop-blur px-3 md:px-4 py-2 rounded-full text-sm border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">Philosophie</a></li>
                  <li><a href="#culture" className="inline-block whitespace-nowrap bg-white/80 backdrop-blur px-3 md:px-4 py-2 rounded-full text-sm border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">Culture</a></li>
                  <li><a href="#objectif" className="inline-block whitespace-nowrap bg-white/80 backdrop-blur px-3 md:px-4 py-2 rounded-full text-sm border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">Objectif</a></li>
                  <li><a href="#faq" className="inline-block whitespace-nowrap bg-white/80 backdrop-blur px-3 md:px-4 py-2 rounded-full text-sm border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">FAQ</a></li>
                </ul>
              </nav>
            </AnimatedSection>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <AnimatedSection className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all" delay={0}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#DCB253] mx-auto mb-3">
                  <path d="M17 21V19C17 17.9 16.1 17 15 17H9C7.9 17 7 17.9 7 19V21" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Thérapeutes transformés</div>
              </AnimatedSection>
              <AnimatedSection className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all" delay={100}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#DCB253] mx-auto mb-3">
                  <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <div className="text-3xl font-bold text-gray-900">150k€/mois</div>
                <div className="text-sm text-gray-600">CA clients documenté</div>
              </AnimatedSection>
              <AnimatedSection className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all" delay={200}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#DCB253] mx-auto mb-3">
                  <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <div className="text-3xl font-bold text-gray-900">90 jours</div>
                <div className="text-sm text-gray-600">Transformation</div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      

      {/* Philosophie d'Accompagnement CSM */}
      <section id="philosophie" className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <AnimatedSection>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900">Philosophie d'Accompagnement CSM</h2>
            </AnimatedSection>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection className="bg-white rounded-2xl p-8 border border-gray-200" delay={0}>
              <h3 className="text-xl font-bold text-gray-900">Notre Posture</h3>
              <h4 className="mt-4 text-lg font-semibold text-gray-800">✅ Ce que nous sommes</h4>
              <ul className="mt-3 space-y-2 text-gray-700">
                {[
                  'Traducteurs : Business ↔ Thérapeutique',
                  'Architectes : De votre écosystème digital',
                  'Gardiens : De vos valeurs éthiques',
                  'Catalyseurs : De votre potentiel dormant',
                  'Partenaires : De votre évolution',
                ].map((txt, i) => (
                  <li key={i} className="flex items-start gap-3"><span className="text-green-600 mt-0.5"><CheckCircleIcon size={18} /></span><span>{txt}</span></li>
                ))}
              </ul>
              <h4 className="mt-6 text-lg font-semibold text-gray-800">❌ Ce que nous ne sommes pas</h4>
              <ul className="mt-3 space-y-2 text-gray-700">
                {[
                  'Des "marketeurs agressifs"',
                  'Des "vendeurs de rêve"',
                  'Des "gourous du mindset"',
                  'Des "consultants théoriques"',
                  'Des "coachs de vie"',
                ].map((txt, i) => (
                  <li key={i} className="flex items-start gap-3"><span className="text-red-600 mt-0.5"><XMarkIcon size={18} /></span><span dangerouslySetInnerHTML={{ __html: txt }} /></li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection className="bg-white rounded-2xl p-8 border border-gray-200" delay={100}>
              <h3 className="text-xl font-bold text-gray-900">Méthode de Communication</h3>
              <h4 className="mt-4 text-lg font-semibold text-gray-800">Le Framework CARE</h4>
              <div className="mt-3 space-y-2 text-gray-700">
                <p><strong>C</strong>larté : Un message, une action, un résultat</p>
                <p><strong>A</strong>lignement : Toujours avec vos valeurs</p>
                <p><strong>R</strong>espect : De votre rythme et limites</p>
                <p><strong>E</strong>fficacité : Focus sur l'essentiel</p>
              </div>
              <h4 className="mt-6 text-lg font-semibold text-gray-800">Gestion des Résistances</h4>
              <div className="mt-3 space-y-3 text-gray-700">
                <p><strong>Peur du "trop commercial"</strong><br/>→ Montrer des exemples éthiques réussis</p>
                <p><strong>Syndrome de l'imposteur</strong><br/>→ Valoriser l'expertise acquise</p>
                <p><strong>Attachement au présentiel</strong><br/>→ Transition progressive avec filet</p>
                <p><strong>Peur de la technologie</strong><br/>→ Simplification maximale</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Culture d'Innovation Thérapeutique */}
      <section id="culture" className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <AnimatedSection>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900">Culture d'Innovation Thérapeutique</h2>
            </AnimatedSection>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '🎯 Intentionnalité — Chaque action alignée avec la mission thérapeutique',
              '🌱 Progressivité — Petits pas constants vs grands sauts risqués',
              '💫 Authenticité — Rester soi-même dans le digital',
              '🔬 Evidence-Based — Mesurer l\'impact réel sur les patients',
              '🤝 Collaboration — Enrichissement mutuel entre pairs',
              '🚀 Innovation — Moderniser sans dénaturer',
              '❤️ Bienveillance — Envers soi, les patients, la communauté',
            ].map((txt, i) => (
              <AnimatedSection key={i} delay={i * 80} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <p className="text-gray-800 font-medium">{txt}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Objectif Final : L'Héritage Thérapeutique Digital */}
      <section id="objectif" className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <AnimatedSection>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900">Objectif Final : L'Héritage Thérapeutique Digital</h2>
              <p className="mt-4 text-xl text-gray-700 font-semibold">"De thérapeute local à leader d'un mouvement de transformation"</p>
            </AnimatedSection>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection className="bg-white rounded-2xl p-8 border border-gray-200" delay={0}>
              <h3 className="text-xl font-bold text-gray-900">Le Thérapeute 2.0 ressort avec</h3>
              <h4 className="mt-4 text-lg font-semibold text-gray-800">Assets Tangibles</h4>
              <ul className="mt-3 space-y-2 text-gray-700">
                {[
                  'Méthode propriétaire packagée et scalable',
                  'Communauté engagée de 500-1000 personnes',
                  'Système automatisé générant 15-30k€/mois',
                  'Équipe déléguée au cabinet et online',
                ].map((txt, i) => (
                  <li key={i} className="flex items-start gap-3"><span className="text-green-600 mt-0.5"><CheckCircleIcon size={18} /></span><span>{txt}</span></li>
                ))}
              </ul>
              <h4 className="mt-6 text-lg font-semibold text-gray-800">Assets Intangibles</h4>
              <ul className="mt-3 space-y-2 text-gray-700">
                {[
                  'Positionnement unique incontestable',
                  'Confiance en sa valeur premium',
                  'Impact démultiplié x10 à x100',
                  'Vision claire pour les 5 prochaines années',
                ].map((txt, i) => (
                  <li key={i} className="flex items-start gap-3"><span className="text-green-600 mt-0.5"><CheckCircleIcon size={18} /></span><span>{txt}</span></li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection className="bg-white rounded-2xl p-8 border border-gray-200" delay={100}>
              <h3 className="text-xl font-bold text-gray-900">Métriques de Validation</h3>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Succès Client</h4>
                  <ul className="mt-3 space-y-2 text-gray-700">
                    {['NPS > 9/10 : Excellence perçue', 'Rétention 100% : Personne ne part', 'Referrals 50%+ : La moitié recommande', 'Témoignages : Success stories documentées'].map((txt, i) => (
                      <li key={i} className="flex items-start gap-3"><span className="text-green-600 mt-0.5"><CheckCircleIcon size={18} /></span><span>{txt}</span></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Impact Business</h4>
                  <ul className="mt-3 space-y-2 text-gray-700">
                    {['5+ clients high-ticket en 90 jours', '100k€+ générés première année', '30% récurrence installée', '2 canaux acquisition actifs'].map((txt, i) => (
                      <li key={i} className="flex items-start gap-3"><span className="text-green-600 mt-0.5"><CheckCircleIcon size={18} /></span><span>{txt}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-800">Transformation Personnelle</h4>
                <ul className="mt-3 space-y-2 text-gray-700">
                  {['Clarté totale sur la mission', 'Énergie retrouvée : Plus de burn-out', 'Fierté du chemin parcouru', 'Inspiration pour d\'autres thérapeutes'].map((txt, i) => (
                    <li key={i} className="flex items-start gap-3"><span className="text-green-600 mt-0.5"><CheckCircleIcon size={18} /></span><span>{txt}</span></li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Notre Manifeste */}
      <section id="manifeste" className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <AnimatedSection>
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#DCB253]/10 border border-[#DCB253]/20">
                <span className="w-2 h-2 rounded-full bg-[#DCB253]" />
                <span className="text-sm font-semibold text-[#DCB253]">Notre boussole</span>
              </div>
              <h2 className="mt-4 text-4xl lg:text-5xl font-black text-gray-900">Notre Manifeste</h2>
            </AnimatedSection>
          </div>
          <AnimatedSection className="max-w-5xl mx-auto" delay={0}>
            <div className="grid md:grid-cols-5 gap-8 items-start">
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold text-gray-900">Nous croyons que :</h3>
                <ol className="mt-5 space-y-3 text-gray-800">
                  <li className="flex gap-3"><span className="text-[#DCB253] font-bold">1.</span><span><strong>Chaque thérapeute</strong> possède une méthode unique qui mérite de rayonner</span></li>
                  <li className="flex gap-3"><span className="text-[#DCB253] font-bold">2.</span><span><strong>L'impact online</strong> démultiplie le bien sans diluer l'essence</span></li>
                  <li className="flex gap-3"><span className="text-[#DCB253] font-bold">3.</span><span><strong>L'éthique et le profit</strong> peuvent coexister harmonieusement</span></li>
                  <li className="flex gap-3"><span className="text-[#DCB253] font-bold">4.</span><span><strong>La transformation digitale</strong> est une évolution naturelle, pas une trahison</span></li>
                  <li className="flex gap-3"><span className="text-[#DCB253] font-bold">5.</span><span><strong>Le futur de la thérapie</strong> est hybride : humain ET scalable</span></li>
                </ol>
              </div>
              <div className="md:col-span-2">
                <div className="h-full rounded-2xl p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-sm">
                  <p className="text-sm font-semibold text-gray-700">Notre Engagement</p>
                  <p className="mt-3 text-gray-700 leading-relaxed">"Nous ne réussissons que si vous transformez plus de vies, avec plus de profondeur, en préservant votre équilibre."</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center space-y-4">
              <p className="text-gray-800 text-lg">Ensemble, créons le futur éthique de la thérapie digitale.</p>
              <p className="font-semibold text-gray-900">THERAPRENEUR - L'Écosystème de Transformation Digitale Thérapeutique</p>
              <p className="text-gray-700">Par des thérapeutes, Pour des thérapeutes, Avec une éthique inébranlable</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Notre Promesse */}
      <section id="promesse" className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <AnimatedSection animation="fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
                Notre Promesse{' '}
                <span className="bg-gradient-to-r from-[#DCB253] to-[#DCB253]/80 bg-clip-text text-transparent">Centrale</span>
              </h2>
            </AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fade-in-up" delay={100}>
                <blockquote className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8 leading-relaxed">
                  &quot;Nous transformons votre expertise thérapeutique en empire digital éthique 
                  – sans jamais trahir vos valeurs humaines.&quot;
                </blockquote>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <AnimatedSection className="text-center bg-red-50 rounded-2xl p-6" delay={0}>
                  <div className="text-4xl mb-4 text-red-600">
                    <XMarkIcon size={28} />
                  </div>
                  <h3 className="font-bold text-red-600 mb-2">L'anti-formation business</h3>
                  <p className="text-sm text-gray-600">Qui vous pousse à devenir "vendeur"</p>
                </AnimatedSection>
                <AnimatedSection className="text-center bg-red-50 rounded-2xl p-6" delay={100}>
                  <div className="text-4xl mb-4 text-red-600">
                    <XMarkIcon size={28} />
                  </div>
                  <h3 className="font-bold text-red-600 mb-2">L'anti-agence marketing</h3>
                  <p className="text-sm text-gray-600">Qui ignore votre éthique thérapeutique</p>
                </AnimatedSection>
                <AnimatedSection className="text-center bg-red-50 rounded-2xl p-6" delay={200}>
                  <div className="text-4xl mb-4 text-red-600">
                    <XMarkIcon size={28} />
                  </div>
                  <h3 className="font-bold text-red-600 mb-2">L'anti-gourou mindset</h3>
                  <p className="text-sm text-gray-600">Déconnecté de votre réalité terrain</p>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les 3 Niveaux */}
      <section id="niveaux" className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#DCB253] text-white px-4 py-2 rounded-full mb-6">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <polygon points="12,2 2,7 12,12 22,7 12,2" stroke="currentColor" strokeWidth="2"/>
                <polyline points="2,17 12,22 22,17" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className="text-sm font-medium">Niveaux d'Accompagnement</span>
            </div>
            <AnimatedSection animation="fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
                Du DIY au{' '}
                <span className="bg-gradient-to-r from-[#DCB253] to-[#DCB253]/80 bg-clip-text text-transparent">Full Service</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Choisissez le niveau d'accompagnement qui correspond à votre situation, 
                vos besoins et votre budget dans notre écosystème de transformation.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* DIY - L'Autonomie Guidée */}
            <AnimatedSection className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105" delay={0}>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white text-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mx-auto mb-4" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M8 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
            </AnimatedSection>

            {/* DWY - La Co-Création - Highlighted */}
            <AnimatedSection className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all relative border-2 border-[#DCB253] transform scale-105" delay={100}>
              
              <div className="bg-[#DCB253] p-6 text-white text-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mx-auto mb-4">
                  <polygon points="12,2 2,7 12,12 22,7 12,2" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="2,17 12,22 22,17" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <h3 className="text-2xl font-bold mb-2">DWY</h3>
                <p className="text-white/90 mb-4">"La Co-Création"</p>
                <div className="text-4xl font-black mb-2">10.500€</div>
                <p className="text-sm text-white/90">Main dans la main vers votre transformation</p>
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
            </AnimatedSection>

            {/* DFY - La Transformation Clé en Main */}
            <AnimatedSection className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105" delay={200}>
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
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process - Comment on travaille */}
      <section id="process" className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <AnimatedSection>
              <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">Notre Process en 6 étapes</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Une méthode éprouvée, du diagnostic à la mise à l'échelle.</p>
            </AnimatedSection>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200" />
            {[
              { n: '01', t: 'Diagnostic 360°', d: "Audit de votre offre, positionnement, acquisition, délivrabilité." },
              { n: '02', t: 'Stratégie', d: "Roadmap priorisée adaptée à votre objectif et vos contraintes." },
              { n: '03', t: 'Offre et VSL', d: "Affinage de l'offre, VSL, pages, messages, preuves." },
              { n: '04', t: 'Acquisition', d: "Choix des canaux, contenus, ads, e-mails, partenariats." },
              { n: '05', t: 'Systèmes', d: "Automations, CRM, process de vente, suivi métriques." },
              { n: '06', t: 'Scale', d: "Optimisation, A/B tests, recrutement, délégation ciblée." },
            ].map((step, i) => (
              <AnimatedSection key={step.n} delay={i * 100} className={`relative md:flex md:items-start md:gap-6 ${i !== 0 ? 'mt-10' : ''}`}>
                <div className="relative z-10 shrink-0 ml-0 md:ml-0 md:w-1/2 md:text-right">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#DCB253]/15 text-[#DCB253] font-bold">{step.n}</div>
                </div>
                <div className="relative md:w-1/2">
                  <div className="md:-mt-1">
                    <h3 className="font-bold text-gray-900 text-lg">{step.t}</h3>
                    <p className="text-gray-600 mt-1">{step.d}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <AnimatedSection>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900">FAQ</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mt-4">Les réponses aux questions les plus fréquentes sur nos niveaux d'accompagnement.</p>
            </AnimatedSection>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { q: "Quelle différence entre DIY, DWY et DFY ?", a: "DIY : vous exécutez avec nos ressources. DWY : on co-crée avec vous. DFY : on exécute pour vous." },
              { q: "Quels résultats puis-je espérer ?", a: "Dépend de votre point de départ. Objectif : traction mesurable sous 90 jours (RDV, CA, audience)." },
              { q: "Puis-je changer de niveau en cours de route ?", a: "Oui, upgrade possible à tout moment en déduisant ce déjà réglé au prorata." },
              { q: "Proposez-vous une garantie ?", a: "Oui : satisfait ou remboursé 30 jours sur DIY/DWY. DFY : objectifs contractuels et clauses de sortie." },
              { q: "Combien de temps dois-je investir chaque semaine ?", a: "DIY : 4-6h. DWY : 2-4h. DFY : 1-2h (rendez-vous de pilotage)." },
              { q: "Est-ce compatible avec mon éthique thérapeutique ?", a: "C'est notre priorité. Positionnement et messages respectent votre pratique et vos valeurs." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100} className="bg-white border border-gray-200 rounded-xl">
                <details className="group">
                  <summary className="cursor-pointer list-none px-6 py-4 flex items-center justify-between">
                    <span className="font-semibold text-gray-900">{item.q}</span>
                    <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">{item.a}</div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta" className="py-24 bg-gradient-to-r from-[#DCB253] to-[#DCB253]/80">
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
                <span className="inline-flex items-center gap-2">
                  <TargetIcon size={20} />
                  <span>Méthode POV Gratuite</span>
                </span>
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