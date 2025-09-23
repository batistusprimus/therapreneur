import { Metadata } from 'next';
import Link from 'next/link';
import { 
  TrendingUpIcon, 
  TargetIcon, 
  ZapIcon, 
  RocketIcon, 
  BrainIcon, 
  LayersIcon, 
  SunIcon, 
  UsersIcon, 
  HeartIcon, 
  StarIcon,
  SettingsIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  MegaphoneIcon,
  BarChartIcon,
  EyeIcon,
  AnimatedIcon,
  GradientIcon
} from './components/Icons';

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
      {/* Hero Section - Modern Startup Style */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="particles-bg">
            <div className="particle" style={{left: '20%', top: '20%'}}></div>
            <div className="particle" style={{left: '50%', top: '30%'}}></div>
            <div className="particle" style={{left: '80%', top: '15%'}}></div>
            <div className="particle" style={{left: '30%', top: '70%'}}></div>
            <div className="particle" style={{left: '70%', top: '80%'}}></div>
          </div>
        </div>
        
        <div className="container-custom py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#DCB253]/10 to-[#DCB253]/5 px-4 py-2 rounded-full border border-[#DCB253]/20">
                  <AnimatedIcon>
                    <ZapIcon className="text-[#DCB253]" size={20} />
                  </AnimatedIcon>
                  <span className="text-sm font-medium text-gray-700">+300 thérapeutes ont doublé leurs revenus en 90 jours</span>
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-black leading-tight text-gray-900">
                  Comment j&apos;ai aidé{' '}
                  <span className="gradient-text">300 thérapeutes</span>{' '}
                  à doubler leurs revenus en 90 jours
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  Grâce au <strong>digital</strong>, sans prendre un seul patient supplémentaire. 
                  La méthode POV qui transforme votre expertise en programmes digitaux haute valeur 
                  et génère <strong>5 000€ à 15 000€ de revenus récurrents par mois</strong>.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
                <a 
                  href="https://www.boosttoncabinet.fr/68b2fde43c8c0a003cd695c0/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group btn-modern bg-gradient-to-r from-[#DCB253] to-[#DCB253]/80 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-[#DCB253]/90 hover:to-[#DCB253]/70 transition-all shadow-xl hover-lift flex items-center gap-2"
                >
                  🎯 Accéder à la Méthode POV Gratuite
                  <span className="animate-pulse">🆓</span>
                </a>
                <Link 
                  href="/services" 
                  className="border-2 border-[#DCB253] text-[#DCB253] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#DCB253] hover:text-white transition-all hover-lift"
                >
                  Voir nos offres
                </Link>
              </div>

              {/* Stats - Modern Cards */}
              <div className="grid grid-cols-3 gap-4 pt-8 animate-fade-in-up delay-300">
                <div className="modern-card p-4 text-center rounded-xl hover-glow">
                  <AnimatedIcon>
                    <UsersIcon className="text-[#DCB253] mx-auto mb-2" size={24} />
                  </AnimatedIcon>
                  <div className="text-2xl font-bold text-gray-900">300+</div>
                  <div className="text-sm text-gray-600">Thérapeutes aidés</div>
                </div>
                <div className="modern-card p-4 text-center rounded-xl hover-glow">
                  <AnimatedIcon delay={100}>
                    <TrendingUpIcon className="text-[#DCB253] mx-auto mb-2" size={24} />
                  </AnimatedIcon>
                  <div className="text-2xl font-bold text-gray-900">15k€/mois</div>
                  <div className="text-sm text-gray-600">Revenus récurrents</div>
                </div>
                <div className="modern-card p-4 text-center rounded-xl hover-glow">
                  <AnimatedIcon delay={200}>
                    <RocketIcon className="text-[#DCB253] mx-auto mb-2" size={24} />
                  </AnimatedIcon>
                  <div className="text-2xl font-bold text-gray-900">90j</div>
                  <div className="text-sm text-gray-600">Transformation</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in-right">
              <div className="relative">
                {/* Modern floating cards */}
                <div className="absolute -top-10 -left-10 modern-card p-6 rounded-2xl animate-float">
                  <AnimatedIcon>
                    <TargetIcon className="text-[#DCB253] mb-3" size={32} />
                  </AnimatedIcon>
                  <h3 className="font-bold text-gray-900 mb-2">Ciblage Précis</h3>
                  <p className="text-sm text-gray-600">Stratégie sur-mesure pour thérapeutes</p>
                </div>
                
                <div className="absolute -bottom-10 -right-10 modern-card p-6 rounded-2xl animate-float" style={{animationDelay: '1s'}}>
                  <AnimatedIcon>
                    <StarIcon className="text-[#DCB253] mb-3" size={32} />
                  </AnimatedIcon>
                  <h3 className="font-bold text-gray-900 mb-2">Excellence</h3>
                  <p className="text-sm text-gray-600">Standards d&apos;agence premium</p>
                </div>
                
                {/* Main visual */}
                <div className="bg-gradient-to-br from-[#DCB253] to-[#DCB253]/80 rounded-3xl p-12 text-white shadow-2xl animate-glow">
                  <div className="text-center space-y-6">
                    <AnimatedIcon>
                      <BrainIcon className="mx-auto text-white" size={64} />
                    </AnimatedIcon>
                    <h3 className="text-3xl font-bold">Notre Expertise</h3>
                    <p className="text-lg opacity-90">
                      Agence spécialisée dans la transformation digitale des thérapeutes
                    </p>
                    <div className="flex justify-center space-x-4">
                      <div className="bg-white/20 rounded-lg p-3">
                        <LayersIcon className="text-white" size={24} />
                      </div>
                      <div className="bg-white/20 rounded-lg p-3">
                        <SettingsIcon className="text-white" size={24} />
                      </div>
                      <div className="bg-white/20 rounded-lg p-3">
                        <HeartIcon className="text-white" size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problème & Solution - Inspiré de la VSL */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              Êtes-vous pris au piège du{' '}
              <span className="text-red-600">"succès apparent"</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Votre agenda est plein, mais vous êtes dans une prison dorée...
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8 fade-in-section">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-800 mb-4">❌ Les signes du piège :</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Vous facturez entre 3 000€ et 8 000€/mois mais votre agenda est saturé</li>
                  <li>• Vous refusez 5-10 patients/semaine faute de créneaux (18k€-36k€/an perdus)</li>
                  <li>• Vous ne pouvez plus augmenter vos tarifs sans perdre des patients</li>
                  <li>• Si vous tombez malade ou partez en vacances, vos revenus s'effondrent</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-8 fade-in-section">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-green-800 mb-4">✅ La solution POV :</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• <strong>Doubler vos revenus</strong> sans prendre un patient supplémentaire</li>
                  <li>• Créer <strong>5k€ à 15k€/mois de revenus récurrents</strong> grâce au digital</li>
                  <li>• Rester aligné avec vos valeurs thérapeutiques</li>
                  <li>• Transformer 1€ de temps en 10€ de revenus digitaux</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* La Méthode POV */}
      <section className="py-24 bg-[#DCB253]/10">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-section">
            <div className="inline-flex items-center gap-2 bg-[#DCB253] text-white px-4 py-2 rounded-full mb-6">
              <TargetIcon size={20} />
              <span className="text-sm font-medium">La Méthode Exclusive</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              La Méthode{' '}
              <span className="gradient-text">POV</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Le système en 3 étapes qui permet aux thérapeutes de créer des revenus récurrents prévisibles grâce au digital
            </p>
            <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
              <p className="text-lg text-gray-700 font-medium">
                <strong>Exemple concret :</strong> Au lieu de facturer 6 × 80€ = 480€, 
                vous facturez <span className="text-[#DCB253] font-bold">1 500€ pour le même patient</span>. 
                Soit <strong>+212% de revenus par client</strong>.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* P = Positionnement */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift fade-in-section">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#DCB253] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-white">P</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Positionnement</h3>
                <p className="text-gray-600">Semaines 1-2</p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Au lieu d'être "ostéopathe généraliste", vous devenez 
                  <strong>"LE spécialiste des douleurs chroniques chez les cadres stressés"</strong>.
                </p>
                <div className="bg-[#DCB253]/10 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Résultat :</strong> Vous pouvez facturer 150€ au lieu de 80€ 
                    car vous êtes perçu comme l'expert incontournable.
                  </p>
                </div>
              </div>
            </div>

            {/* O = Offre */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift fade-in-section transform scale-105 border-2 border-[#DCB253]">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#DCB253] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-white">O</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Offre Digitale</h3>
                <p className="text-gray-600">Semaines 3-6</p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Vous créez un programme d'accompagnement digital 3 mois à 
                  <strong> 1 500€</strong> qui combine :
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 6 séances individuelles (900€ de valeur)</li>
                  <li>• Accès à votre méthode en ligne (300€)</li>
                  <li>• Suivi WhatsApp personnalisé (300€)</li>
                </ul>
                <div className="bg-[#DCB253]/10 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Résultat :</strong> +212% de revenus par client, 
                    sans voir plus de patients.
                  </p>
                </div>
              </div>
            </div>

            {/* V = Visibilité */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift fade-in-section">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#DCB253] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-white">V</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Visibilité</h3>
                <p className="text-gray-600">Semaines 7-12</p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Vous mettez en place un système digital qui génère 
                  <strong> 10-15 prospects qualifiés par mois</strong> via :
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Contenu éducatif ciblé sur votre niche</li>
                  <li>• Partenariats avec entreprises locales</li>
                  <li>• Système de recommandations structuré</li>
                </ul>
                <div className="bg-[#DCB253]/10 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Résultat :</strong> Une liste d'attente de 2-3 mois, 
                    vous choisissez vos clients.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Calcul Simple */}
          <div className="text-center mt-16 fade-in-section">
            <div className="bg-gray-900 rounded-2xl p-8 text-white max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">Le calcul est simple :</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-red-900/30 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-red-300 mb-3">❌ Avant POV :</h4>
                  <p className="text-lg">25 patients/mois × 80€ = <span className="font-bold">2 000€</span></p>
                </div>
                <div className="bg-green-900/30 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-green-300 mb-3">✅ Après POV :</h4>
                  <p className="text-lg">10 programmes/mois × 1 500€ = <span className="font-bold text-[#DCB253]">15 000€</span></p>
                </div>
              </div>
              <p className="text-xl mt-6 text-gray-300">
                <strong>Même nombre d'heures travaillées. 7,5× plus de revenus.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Modern */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-section">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
              <MegaphoneIcon className="text-[#DCB253]" size={20} />
              <span className="text-sm font-medium text-gray-700">Nos Services d&apos;Agence</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              L&apos;accompagnement{' '}
              <span className="gradient-text">sur-mesure</span>{' '}
              pour thérapeutes
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              En tant qu&apos;agence spécialisée, nous proposons 3 niveaux d&apos;accompagnement 
              adaptés à votre niveau et vos objectifs de croissance.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* DIY Service */}
            <div className="modern-card p-8 rounded-2xl hover-lift group fade-in-section">
              <div className="text-center mb-8">
                <GradientIcon className="mx-auto mb-4">
                  <BrainIcon size={32} />
                </GradientIcon>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Formation DIY</h3>
                <p className="text-gray-600">L&apos;autonomie guidée par nos experts</p>
                <div className="text-4xl font-black text-[#DCB253] mt-4">5.000€</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="text-[#DCB253] mt-1" size={20} />
                  <span className="text-gray-700">Masterclass complète de l&apos;agence</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="text-[#DCB253] mt-1" size={20} />
                  <span className="text-gray-700">Frameworks exclusifs Thérapreneur</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="text-[#DCB253] mt-1" size={20} />
                  <span className="text-gray-700">52 sessions de coaching de groupe</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="text-[#DCB253] mt-1" size={20} />
                  <span className="text-gray-700">Communauté privée d&apos;agence</span>
                </div>
              </div>
              
              <button className="w-full mt-8 btn-modern bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-all group-hover:bg-[#DCB253]">
                Choisir ce service
              </button>
            </div>

            {/* DWY Service - Highlighted */}
            <div className="modern-card p-8 rounded-2xl hover-lift group fade-in-section relative border-2 border-[#DCB253] transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#DCB253] text-white px-6 py-2 rounded-full text-sm font-bold">POPULAIRE</span>
              </div>
              
              <div className="text-center mb-8">
                <GradientIcon className="mx-auto mb-4">
                  <LayersIcon size={32} />
                </GradientIcon>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Co-Création</h3>
                <p className="text-gray-600">Accompagnement personnalisé d&apos;agence</p>
                <div className="text-4xl font-black text-[#DCB253] mt-4">10.500€</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="text-[#DCB253] mt-1" size={20} />
                  <span className="text-gray-700">Tout le service DIY inclus</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="text-[#DCB253] mt-1" size={20} />
                  <span className="text-gray-700">12 sessions individuelles d&apos;agence</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="text-[#DCB253] mt-1" size={20} />
                  <span className="text-gray-700">Stratégie personnalisée</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="text-[#DCB253] mt-1" size={20} />
                  <span className="text-gray-700">Réseau d&apos;experts partenaires</span>
                </div>
              </div>
              
              <button className="w-full mt-8 btn-modern bg-[#DCB253] text-white py-4 rounded-xl font-bold hover:bg-[#DCB253]/90 transition-all">
                Choisir ce service
              </button>
            </div>

            {/* DFY Service */}
            <div className="modern-card p-8 rounded-2xl hover-lift group fade-in-section">
              <div className="text-center mb-8">
                <GradientIcon className="mx-auto mb-4">
                  <RocketIcon size={32} />
                </GradientIcon>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Service Complet</h3>
                <p className="text-gray-600">L&apos;agence fait tout pour vous</p>
                <div className="text-4xl font-black text-[#DCB253] mt-4">21.000€</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="text-[#DCB253] mt-1" size={20} />
                  <span className="text-gray-700">Service Co-Création inclus</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="text-[#DCB253] mt-1" size={20} />
                  <span className="text-gray-700">Exécution complète par l&apos;agence</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="text-[#DCB253] mt-1" size={20} />
                  <span className="text-gray-700">Chef de projet dédié</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="text-[#DCB253] mt-1" size={20} />
                  <span className="text-gray-700">Garantie de résultats</span>
                </div>
              </div>
              
              <button className="w-full mt-8 btn-modern bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-all group-hover:bg-[#DCB253]">
                Choisir ce service
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mon Parcours - Expertise Double */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-section">
            <div className="inline-flex items-center gap-2 bg-[#DCB253] px-4 py-2 rounded-full mb-6">
              <BrainIcon className="text-white" size={20} />
              <span className="text-sm font-medium text-white">Mon Parcours</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
              Thérapeute ET Entrepreneur :{' '}
              <span className="text-[#DCB253]">Le combo pour (vraiment) aider les autres</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 fade-in-section">
              <div className="bg-white/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#DCB253] mb-6">🩺 Côté Thérapeute :</h3>
                <ul className="space-y-4 text-gray-300">
                  <li>• <strong>Ostéopathe D.O. depuis 2022</strong></li>
                  <li>• Spécialisé en neurosciences de la douleur et prise en charge du sportif</li>
                  <li>• Installation le 04 juillet 2022 à Lunel (Hérault)</li>
                  <li>• Je connais votre réalité : les doutes, la pression, l'envie d'aider plus de monde</li>
                </ul>
              </div>
              
              <div className="bg-white/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#DCB253] mb-6">🚀 Côté Entrepreneur :</h3>
                <ul className="space-y-4 text-gray-300">
                  <li>• <strong>Entrepreneur depuis 2016</strong> (bien avant d'être thérapeute)</li>
                  <li>• Plus de 50 000€ investis en formations et accompagnements</li>
                  <li>• Formé auprès des meilleurs experts en développement d'activité</li>
                  <li>• 4 business en ligne aujourd'hui (SaaS, Programme High Ticket, x2 Agences)</li>
                </ul>
              </div>
            </div>
            
            <div className="fade-in-section">
              <div className="bg-gradient-to-br from-[#DCB253] to-[#DCB253]/80 rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold">L'Étude de Cas</h3>
                  <div className="space-y-4">
                    <p className="text-lg">
                      J'ai lancé mon <strong>premier business après 1,5 an de cabinet</strong>. 
                      Aujourd'hui, 2 ans après, j'ai 4 business en ligne.
                    </p>
                    <div className="bg-white/20 rounded-lg p-6">
                      <h4 className="font-bold text-xl mb-3">Ce qui a fait la différence :</h4>
                      <ul className="space-y-2">
                        <li>✅ <strong>Accès à l'information</strong></li>
                        <li>✅ <strong>Courage, résilience et persévérance</strong></li>
                      </ul>
                    </div>
                    <p className="text-lg border-l-4 border-white pl-4 italic">
                      "Vous n'avez pas besoin d'avoir 10 ans de cabinet ou d'entrepreneuriat 
                      pour lancer votre programme, vous avez besoin de la <strong>bonne méthode</strong>."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preuves Sociales - Résultats */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              Et ça, on l'a fait pour{' '}
              <span className="text-[#DCB253]">+300 thérapeutes</span>{' '}
              de 11 professions différentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Et ils n'étaient pas plus avancés que vous quand ils ont commencé...
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center fade-in-section">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl font-black text-[#DCB253] mb-2">300+</div>
                <p className="text-gray-600">Thérapeutes accompagnés</p>
              </div>
            </div>
            <div className="text-center fade-in-section">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl font-black text-[#DCB253] mb-2">11</div>
                <p className="text-gray-600">Professions différentes</p>
              </div>
            </div>
            <div className="text-center fade-in-section">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl font-black text-[#DCB253] mb-2">90j</div>
                <p className="text-gray-600">Transformation complète</p>
              </div>
            </div>
            <div className="text-center fade-in-section">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl font-black text-[#DCB253] mb-2">15k€</div>
                <p className="text-gray-600">Revenus récurrents/mois</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#DCB253]/10 to-[#DCB253]/5 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">La Différence Thérapreneur</h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              <strong>Ce n'est pas du hasard ou de la chance, ce sont des compétences.</strong> 
              Et c'est normal si vous ne les avez pas ! Les écoles forment des praticiens, 
              pas des entrepreneurs, alors qu'il faut être les 2 pour réussir.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Le Choix Difficile */}
      <section className="py-24 bg-gradient-to-r from-[#DCB253] to-[#DCB253]/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="particles-bg">
            <div className="particle" style={{left: '10%', top: '20%'}}></div>
            <div className="particle" style={{left: '40%', top: '60%'}}></div>
            <div className="particle" style={{left: '80%', top: '30%'}}></div>
          </div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <div className="max-w-5xl mx-auto space-y-8 fade-in-section">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
              Maintenant, vous avez un choix difficile à faire
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 text-left">
              {/* Option 1 */}
              <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">❌ Option 1 : Revenir à la vie normale</h3>
                <div className="space-y-3 text-white/90">
                  <p>• Sans actions concrètes, rien ne changera vraiment</p>
                  <p>• Dans 5 ans, vous serez au même point : même stress, même plafond</p>
                  <p>• Vous aurez 5 ans de plus et moins d'énergie</p>
                  <p>• Continuer à refuser des patients faute de créneaux</p>
                </div>
              </div>
              
              {/* Option 2 */}
              <div className="bg-white rounded-2xl p-8 text-gray-900 border-4 border-white transform scale-105">
                <h3 className="text-2xl font-bold text-[#DCB253] mb-4">✅ Option 2 : Choisir que c'est le moment</h3>
                <div className="space-y-3">
                  <p>• <strong>"J'en ai marre de galérer, de voir que ça dure"</strong></p>
                  <p>• <strong>"Je veux reprendre le contrôle sur mon activité"</strong></p>
                  <p>• Avoir la méthode POV qui tourne en automatique</p>
                  <p>• Doubler vos revenus en 90 jours sans prendre plus de patients</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-2xl p-8 border border-white/20 mt-12">
              <h3 className="text-2xl font-bold text-white mb-6">⚠️ La Question Finale :</h3>
              <p className="text-xl text-white mb-8">
                <strong>Serez-vous prêt à attendre 3 ans ou 5 ans ce que vous pourriez obtenir en quelques mois ?</strong>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                <a 
                  href="https://www.boosttoncabinet.fr/68b2fde43c8c0a003cd695c0/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modern bg-white text-[#DCB253] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover-lift flex items-center justify-center gap-2"
                >
                  🎯 Méthode POV Gratuite
                  <span className="animate-pulse">🆓</span>
                </a>
                <Link 
                  href="/services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#DCB253] transition-all hover-lift"
                >
                  Réserver un audit offert
                </Link>
              </div>
              
              <p className="text-sm text-white/80 mt-6 max-w-3xl mx-auto">
                <strong>Garantie de résultats :</strong> Avec l'aide d'un avocat, nous avons rédigé un contrat 
                qui garantit de vous accompagner jusqu'à obtention de vos résultats. Le risque est de notre côté.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DigitalMarketingAgency",
            "name": "Thérapreneur",
            "description": "Agence spécialisée en transformation digitale pour thérapeutes",
            "url": "https://therapreneur.fr",
            "logo": "https://therapreneur.fr/logo.png",
            "areaServed": "France",
            "serviceType": "Digital Marketing Agency",
            "knowsAbout": [
              "Transformation digitale thérapeutique",
              "Marketing pour thérapeutes", 
              "Accompagnement entrepreneurs santé",
              "Stratégie digitale wellness"
            ],
            "hasCredential": "Agence spécialisée #1 en France",
            "offers": [
              {
                "@type": "Service",
                "name": "Formation DIY",
                "description": "Formation complète en autonomie guidée",
                "offers": {
                  "@type": "Offer",
                  "price": "5000",
                  "priceCurrency": "EUR"
                }
              },
              {
                "@type": "Service", 
                "name": "Co-Création",
                "description": "Accompagnement personnalisé d'agence",
                "offers": {
                  "@type": "Offer",
                  "price": "10500", 
                  "priceCurrency": "EUR"
                }
              },
              {
                "@type": "Service",
                "name": "Service Complet", 
                "description": "L'agence fait tout pour vous",
                "offers": {
                  "@type": "Offer",
                  "price": "21000",
                  "priceCurrency": "EUR" 
                }
              }
            ]
          })
        }}
      />
    </>
  );
}