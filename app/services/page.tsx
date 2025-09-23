import { Metadata } from 'next';
import Link from 'next/link';
import { 
  TrendingUpIcon, 
  TargetIcon, 
  ZapIcon, 
  RocketIcon, 
  BrainIcon, 
  LayersIcon, 
  UsersIcon, 
  HeartIcon, 
  StarIcon,
  SettingsIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BarChartIcon,
  ShieldIcon,
  AnimatedIcon,
  GradientIcon
} from '../components/Icons';

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
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="particles-bg">
            <div className="particle" style={{left: '15%', top: '25%'}}></div>
            <div className="particle" style={{left: '75%', top: '35%'}}></div>
            <div className="particle" style={{left: '40%', top: '70%'}}></div>
          </div>
        </div>
        
        <div className="container-custom py-20 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#DCB253]/10 to-[#DCB253]/5 px-4 py-2 rounded-full border border-[#DCB253]/20">
                <AnimatedIcon>
                  <RocketIcon className="text-[#DCB253]" size={20} />
                </AnimatedIcon>
                <span className="text-sm font-medium text-gray-700">L'Écosystème de Transformation Digitale</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black leading-tight text-gray-900">
                Du DIY au{' '}
                <span className="gradient-text">Full Service</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                <strong>L'écosystème complet</strong> pour transformer votre expertise thérapeutique en empire digital éthique. 
                3 niveaux d'accompagnement, de l'autonomie guidée au service clé en main.
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-in-up delay-200">
              <div className="modern-card p-6 text-center rounded-xl hover-glow">
                <AnimatedIcon>
                  <UsersIcon className="text-[#DCB253] mx-auto mb-3" size={28} />
                </AnimatedIcon>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Thérapeutes transformés</div>
              </div>
              <div className="modern-card p-6 text-center rounded-xl hover-glow">
                <AnimatedIcon delay={100}>
                  <TrendingUpIcon className="text-[#DCB253] mx-auto mb-3" size={28} />
                </AnimatedIcon>
                <div className="text-3xl font-bold text-gray-900">150k€/mois</div>
                <div className="text-sm text-gray-600">CA clients documenté</div>
              </div>
              <div className="modern-card p-6 text-center rounded-xl hover-glow">
                <AnimatedIcon delay={200}>
                  <ZapIcon className="text-[#DCB253] mx-auto mb-3" size={28} />
                </AnimatedIcon>
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
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              Notre Promesse{' '}
              <span className="gradient-text">Centrale</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8 leading-relaxed">
                &quot;Nous transformons votre expertise thérapeutique en empire digital éthique 
                – sans jamais trahir vos valeurs humaines.&quot;
              </blockquote>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-6xl mb-4">❌</div>
                  <h3 className="font-bold text-red-600 mb-2">L'anti-formation business</h3>
                  <p className="text-sm text-gray-600">Qui vous pousse à devenir "vendeur"</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">❌</div>
                  <h3 className="font-bold text-red-600 mb-2">L'anti-agence marketing</h3>
                  <p className="text-sm text-gray-600">Qui ignore votre éthique thérapeutique</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">❌</div>
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
          <div className="text-center mb-16 fade-in-section">
            <div className="inline-flex items-center gap-2 bg-[#DCB253] text-white px-4 py-2 rounded-full mb-6">
              <LayersIcon size={20} />
              <span className="text-sm font-medium">Niveaux d'Accompagnement</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              Du DIY au{' '}
              <span className="gradient-text">Full Service</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Choisissez le niveau d'accompagnement qui correspond à votre situation, 
              vos besoins et votre budget dans notre écosystème de transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* DIY - L'Autonomie Guidée */}
            <div className="modern-card rounded-2xl overflow-hidden hover-lift group fade-in-section">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white text-center">
                <AnimatedIcon>
                  <BrainIcon className="mx-auto mb-4" size={48} />
                </AnimatedIcon>
                <h3 className="text-2xl font-bold mb-2">DIY</h3>
                <p className="text-blue-100 mb-4">"L'Autonomie Guidée"</p>
                <div className="text-4xl font-black mb-2">5.000€</div>
                <p className="text-sm text-blue-100">Nous vous donnons les clés, vous conduisez</p>
              </div>
              
              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700"><strong>Masterclass Complète</strong> (15.000€ de valeur)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Tous les frameworks Thérapreneur</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Module "Vente Éthique pour Thérapeutes"</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">52 Coaching de Groupe/an avec les fondateurs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Communauté privée d'entraide</span>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    <strong>Idéal pour :</strong> Thérapeutes autonomes et motivés, 
                    budget limité mais temps disponible.
                  </p>
                </div>
                
                <button className="w-full btn-modern bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all group-hover:bg-blue-500">
                  Choisir DIY
                </button>
              </div>
            </div>

            {/* DWY - La Co-Création - Highlighted */}
            <div className="modern-card rounded-2xl overflow-hidden hover-lift group fade-in-section relative border-2 border-[#DCB253] transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-[#DCB253] text-white px-6 py-2 rounded-full text-sm font-bold">POPULAIRE</span>
              </div>
              
              <div className="bg-gradient-to-br from-[#DCB253] to-[#DCB253]/80 p-6 text-white text-center">
                <AnimatedIcon>
                  <LayersIcon className="mx-auto mb-4" size={48} />
                </AnimatedIcon>
                <h3 className="text-2xl font-bold mb-2">DWY</h3>
                <p className="text-[#DCB253]/80 mb-4">"La Co-Création"</p>
                <div className="text-4xl font-black mb-2">10.500€</div>
                <p className="text-sm text-[#DCB253]/80">Main dans la main vers votre transformation</p>
              </div>
              
              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700"><strong>Tout le DIY inclus</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700"><strong>12 Sessions Individuelles</strong> (6.000€ de valeur)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Stratégie personnalisée</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Mise en relation experts (2.000€ d'économies)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Lancement Media Buying inclus (750€)</span>
                  </div>
                </div>
                
                <div className="bg-[#DCB253]/10 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    <strong>Idéal pour :</strong> Cabinet déjà rentable (50-100k€/an), 
                    prêts à co-construire activement.
                  </p>
                </div>
                
                <button className="w-full btn-modern bg-[#DCB253] text-white py-4 rounded-xl font-bold hover:bg-[#DCB253]/90 transition-all">
                  Choisir DWY
                </button>
              </div>
            </div>

            {/* DFY - La Transformation Clé en Main */}
            <div className="modern-card rounded-2xl overflow-hidden hover-lift group fade-in-section">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-6 text-white text-center">
                <AnimatedIcon>
                  <RocketIcon className="mx-auto mb-4" size={48} />
                </AnimatedIcon>
                <h3 className="text-2xl font-bold mb-2">DFY</h3>
                <p className="text-purple-100 mb-4">"La Transformation Clé en Main"</p>
                <div className="text-4xl font-black mb-2">21.000€</div>
                <p className="text-sm text-purple-100">Concentrez-vous sur vos patients, on s'occupe du reste</p>
              </div>
              
              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700"><strong>Tout le DWY inclus</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700"><strong>Exécution Complète</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Copywriting VSL + tunnel complet (3.000€)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Chef de projet dédié</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700"><strong>Garantie de résultats</strong></span>
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    <strong>Idéal pour :</strong> Influenceurs santé (20k+ followers), 
                    revenus 100k€+/an, zéro temps disponible.
                  </p>
                </div>
                
                <button className="w-full btn-modern bg-purple-600 text-white py-4 rounded-xl font-bold hover:bg-purple-700 transition-all group-hover:bg-purple-500">
                  Choisir DFY
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les 5 Piliers */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              Les 5 Piliers de{' '}
              <span className="gradient-text">Notre Approche</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Alignement thérapeutique avant profit. Nous ne vendons pas une transformation, 
              nous co-créons une évolution naturelle de votre pratique vers le digital.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="text-center fade-in-section">
              <GradientIcon className="mx-auto mb-6">
                <HeartIcon size={32} />
              </GradientIcon>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Éthique Préservée</h3>
              <p className="text-gray-600 text-sm">Vos valeurs thérapeutiques restent au centre. Marketing bienveillant et authentique.</p>
            </div>
            
            <div className="text-center fade-in-section">
              <GradientIcon className="mx-auto mb-6">
                <SettingsIcon size={32} />
              </GradientIcon>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transition Progressive</h3>
              <p className="text-gray-600 text-sm">Cabinet maintenu pendant la transition. Cash-flow préservé à chaque étape.</p>
            </div>
            
            <div className="text-center fade-in-section">
              <GradientIcon className="mx-auto mb-6">
                <TargetIcon size={32} />
              </GradientIcon>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expertise Valorisée</h3>
              <p className="text-gray-600 text-sm">Votre méthode devient un actif scalable. Positionnement unique et différenciant.</p>
            </div>
            
            <div className="text-center fade-in-section">
              <GradientIcon className="mx-auto mb-6">
                <UsersIcon size={32} />
              </GradientIcon>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accompagnement Holistique</h3>
              <p className="text-gray-600 text-sm">Support technique ET humain. Stratégie ET mindset. Business ET bien-être.</p>
            </div>
            
            <div className="text-center fade-in-section">
              <GradientIcon className="mx-auto mb-6">
                <BarChartIcon size={32} />
              </GradientIcon>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transparence Thérapeutique</h3>
              <p className="text-gray-600 text-sm">Métriques adaptées à votre pratique. Communication dans votre langage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Standards d'Excellence */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-section">
            <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-6">
              <ShieldIcon className="text-green-600" size={20} />
              <span className="text-sm font-medium text-green-800">Standards d'Excellence</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              Nos{' '}
              <span className="text-green-600">Garanties</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8 fade-in-section">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🤝 Engagements Qualité</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#DCB253] pl-4">
                    <strong className="text-[#DCB253]">Respect absolu</strong> de votre éthique professionnelle
                  </div>
                  <div className="border-l-4 border-[#DCB253] pl-4">
                    <strong className="text-[#DCB253]">Langage adapté :</strong> "ateliers" vs "webinaires"
                  </div>
                  <div className="border-l-4 border-[#DCB253] pl-4">
                    <strong className="text-[#DCB253]">Rythme respectueux :</strong> Jamais de pression commerciale
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 fade-in-section">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 Performance Garantie</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon className="text-green-500" size={20} />
                    <span><strong>1er client high-ticket :</strong> &lt; 60 jours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon className="text-green-500" size={20} />
                    <span><strong>ROI positif :</strong> Dès le 3ème mois</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon className="text-green-500" size={20} />
                    <span><strong>Satisfaction :</strong> 9/10 minimum</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon className="text-green-500" size={20} />
                    <span><strong>Support :</strong> Réponse &lt; 24h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-r from-[#DCB253] to-[#DCB253]/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="particles-bg">
            <div className="particle" style={{left: '20%', top: '30%'}}></div>
            <div className="particle" style={{left: '70%', top: '20%'}}></div>
            <div className="particle" style={{left: '50%', top: '70%'}}></div>
          </div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 fade-in-section">
            <AnimatedIcon>
              <RocketIcon className="text-white mx-auto" size={64} />
            </AnimatedIcon>
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
                className="btn-modern bg-white text-[#DCB253] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover-lift flex items-center gap-2 justify-center"
              >
                🎯 Méthode POV Gratuite
                <span className="animate-pulse">🆓</span>
              </a>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#DCB253] transition-all hover-lift"
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

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Écosystème de Transformation Digitale Thérapeutique",
            "description": "Transformation complète pour thérapeutes entrepreneurs",
            "provider": {
              "@type": "Organization",
              "name": "Thérapreneur"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Niveaux d'Accompagnement Thérapreneur",
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
                  "description": "Accompagnement personnalisé main dans la main",
                  "price": "10500",
                  "priceCurrency": "EUR"
                },
                {
                  "@type": "Offer",
                  "name": "DFY - La Transformation Clé en Main",
                  "description": "Service complet d'exécution",
                  "price": "21000",
                  "priceCurrency": "EUR"
                }
              ]
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "Thérapeutes entrepreneurs"
            },
            "serviceOutput": "Empire digital thérapeutique éthique"
          })
        }}
      />
    </>
  );
}