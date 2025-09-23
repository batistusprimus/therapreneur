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
  title: 'Services Thérapreneur | 3 Formules POV pour doubler vos revenus en 90j',
  description: 'Découvrez nos 3 formules d\'accompagnement : Autonomie (997€), Co-Création (1997€), Fait Pour Vous (4997€). La méthode POV qui transforme votre expertise en revenus récurrents de 5k€ à 15k€/mois.',
  keywords: 'formules thérapreneur, méthode POV prix, accompagnement thérapeute entrepreneur, doubler revenus thérapeute 90 jours, formation thérapreneur tarifs',
  openGraph: {
    title: 'Nos 3 Formules | Méthode POV pour thérapeutes entrepreneurs',
    description: 'De l\'autonomie guidée au service clé en main. Choisissez votre formule pour doubler vos revenus en 90 jours avec la méthode POV.',
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
                <span className="text-sm font-medium text-gray-700">3 Formules d'accompagnement</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black leading-tight text-gray-900">
                Choisissez votre formule{' '}
                <span className="gradient-text">POV</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                3 niveaux d'accompagnement pour <strong>doubler vos revenus en 90 jours</strong> grâce au digital. 
                De l'autonomie guidée au service clé en main.
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-in-up delay-200">
              <div className="modern-card p-6 text-center rounded-xl hover-glow">
                <AnimatedIcon>
                  <UsersIcon className="text-[#DCB253] mx-auto mb-3" size={28} />
                </AnimatedIcon>
                <div className="text-3xl font-bold text-gray-900">300+</div>
                <div className="text-sm text-gray-600">Thérapeutes accompagnés</div>
              </div>
              <div className="modern-card p-6 text-center rounded-xl hover-glow">
                <AnimatedIcon delay={100}>
                  <TrendingUpIcon className="text-[#DCB253] mx-auto mb-3" size={28} />
                </AnimatedIcon>
                <div className="text-3xl font-bold text-gray-900">15k€/mois</div>
                <div className="text-sm text-gray-600">Revenus récurrents</div>
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

      {/* Les 3 Formules */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-section">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
              <LayersIcon className="text-[#DCB253]" size={20} />
              <span className="text-sm font-medium text-gray-700">Nos 3 Formules</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              3 Façons d'apprendre la{' '}
              <span className="gradient-text">Méthode POV</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Quel que soit votre niveau et votre budget, nous avons la formule adaptée 
              pour vous accompagner vers vos premiers 15k€/mois de revenus récurrents.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Formule Autonomie */}
            <div className="modern-card rounded-2xl overflow-hidden hover-lift group fade-in-section">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white text-center">
                <AnimatedIcon>
                  <BrainIcon className="mx-auto mb-4" size={48} />
                </AnimatedIcon>
                <h3 className="text-2xl font-bold mb-2">Autonomie</h3>
                <p className="text-blue-100 mb-4">Je fais moi-même avec un guide</p>
                <div className="text-4xl font-black mb-2">997€</div>
                <p className="text-sm text-blue-100">Paiement en 3x possible</p>
              </div>
              
              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Formation complète Méthode POV (8h de contenu)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Templates et outils prêts à l'emploi</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Accès à la communauté privée</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">2 Q&A live par mois</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Accès à vie + mises à jour</span>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    <strong>Idéal pour :</strong> Thérapeutes motivés qui aiment apprendre en autonomie 
                    et ont 5-10h par semaine à consacrer.
                  </p>
                </div>
                
                <button className="w-full btn-modern bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all group-hover:bg-blue-500">
                  Choisir Autonomie
                </button>
              </div>
            </div>

            {/* Formule Co-Création - Highlighted */}
            <div className="modern-card rounded-2xl overflow-hidden hover-lift group fade-in-section relative border-2 border-[#DCB253] transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-[#DCB253] text-white px-6 py-2 rounded-full text-sm font-bold">POPULAIRE</span>
              </div>
              
              <div className="bg-gradient-to-br from-[#DCB253] to-[#DCB253]/80 p-6 text-white text-center">
                <AnimatedIcon>
                  <LayersIcon className="mx-auto mb-4" size={48} />
                </AnimatedIcon>
                <h3 className="text-2xl font-bold mb-2">Co-Création</h3>
                <p className="text-[#DCB253]/80 mb-4">On fait ensemble, étape par étape</p>
                <div className="text-4xl font-black mb-2">1997€</div>
                <p className="text-sm text-[#DCB253]/80">Paiement en 6x possible</p>
              </div>
              
              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Tout de la formule Autonomie inclus</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700"><strong>6 sessions individuelles</strong> de 60 min</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Suivi WhatsApp personnalisé</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Révision de tous vos supports</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Stratégie personnalisée pour votre niche</span>
                  </div>
                </div>
                
                <div className="bg-[#DCB253]/10 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    <strong>Idéal pour :</strong> Thérapeutes qui veulent un accompagnement étape par étape 
                    et avoir la certitude de ne pas se tromper.
                  </p>
                </div>
                
                <button className="w-full btn-modern bg-[#DCB253] text-white py-4 rounded-xl font-bold hover:bg-[#DCB253]/90 transition-all">
                  Choisir Co-Création
                </button>
              </div>
            </div>

            {/* Formule Fait Pour Vous */}
            <div className="modern-card rounded-2xl overflow-hidden hover-lift group fade-in-section">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-6 text-white text-center">
                <AnimatedIcon>
                  <RocketIcon className="mx-auto mb-4" size={48} />
                </AnimatedIcon>
                <h3 className="text-2xl font-bold mb-2">Fait Pour Vous</h3>
                <p className="text-purple-100 mb-4">On fait à votre place, vous supervisez</p>
                <div className="text-4xl font-black mb-2">4997€</div>
                <p className="text-sm text-purple-100">Paiement en 10x possible</p>
              </div>
              
              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Tout de la formule Co-Création inclus</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700"><strong>Création complète</strong> de votre programme</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Rédaction de tous vos contenus</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Setup complet de votre tunnel de vente</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Formation personnalisée à votre équipe</span>
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    <strong>Idéal pour :</strong> Thérapeutes très occupés qui veulent déléguer 
                    l'exécution et se concentrer sur leurs patients.
                  </p>
                </div>
                
                <button className="w-full btn-modern bg-purple-600 text-white py-4 rounded-xl font-bold hover:bg-purple-700 transition-all group-hover:bg-purple-500">
                  Choisir Fait Pour Vous
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparaison des Formules */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              Comparaison détaillée des{' '}
              <span className="gradient-text">formules</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Toutes nos formules incluent l'accès à la méthode POV complète et notre garantie de résultats.
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl fade-in-section">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="text-left p-6 font-bold">Caractéristiques</th>
                    <th className="text-center p-6 font-bold">Autonomie</th>
                    <th className="text-center p-6 font-bold bg-[#DCB253] text-gray-900">Co-Création</th>
                    <th className="text-center p-6 font-bold">Fait Pour Vous</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-6 font-medium">Formation POV complète</td>
                    <td className="text-center p-6"><CheckCircleIcon className="mx-auto text-green-500" size={20} /></td>
                    <td className="text-center p-6 bg-[#DCB253]/10"><CheckCircleIcon className="mx-auto text-green-500" size={20} /></td>
                    <td className="text-center p-6"><CheckCircleIcon className="mx-auto text-green-500" size={20} /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-6 font-medium">Templates & outils</td>
                    <td className="text-center p-6"><CheckCircleIcon className="mx-auto text-green-500" size={20} /></td>
                    <td className="text-center p-6 bg-[#DCB253]/10"><CheckCircleIcon className="mx-auto text-green-500" size={20} /></td>
                    <td className="text-center p-6"><CheckCircleIcon className="mx-auto text-green-500" size={20} /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-6 font-medium">Sessions individuelles</td>
                    <td className="text-center p-6 text-gray-400">—</td>
                    <td className="text-center p-6 bg-[#DCB253]/10 font-bold">6 × 60min</td>
                    <td className="text-center p-6 font-bold">12 × 60min</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-6 font-medium">Suivi WhatsApp</td>
                    <td className="text-center p-6 text-gray-400">—</td>
                    <td className="text-center p-6 bg-[#DCB253]/10"><CheckCircleIcon className="mx-auto text-green-500" size={20} /></td>
                    <td className="text-center p-6"><CheckCircleIcon className="mx-auto text-green-500" size={20} /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-6 font-medium">Création de contenu</td>
                    <td className="text-center p-6 text-gray-400">Vous</td>
                    <td className="text-center p-6 bg-[#DCB253]/10">Ensemble</td>
                    <td className="text-center p-6 font-bold text-purple-600">Pour vous</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium">Durée d'accompagnement</td>
                    <td className="text-center p-6">3 mois</td>
                    <td className="text-center p-6 bg-[#DCB253]/10 font-bold">6 mois</td>
                    <td className="text-center p-6 font-bold">12 mois</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-section">
            <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-6">
              <ShieldIcon className="text-green-600" size={20} />
              <span className="text-sm font-medium text-green-800">Nos Garanties</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              Votre succès est{' '}
              <span className="text-green-600">garanti</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Nous sommes si confiants en notre méthode que nous garantissons vos résultats. 
              Le risque est de notre côté, pas du vôtre.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in-section">
              <div className="flex items-start gap-4">
                <GradientIcon>
                  <ShieldIcon size={24} />
                </GradientIcon>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Garantie de Résultats</h3>
                  <p className="text-gray-600">
                    Si vous ne générez pas vos premiers 5k€ de revenus récurrents en 6 mois, 
                    nous continuons à vous accompagner gratuitement jusqu'à l'obtention de vos résultats.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <GradientIcon>
                  <HeartIcon size={24} />
                </GradientIcon>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Garantie Éthique</h3>
                  <p className="text-gray-600">
                    Notre méthode respecte 100% l'éthique thérapeutique. Aucune pratique commerciale 
                    agressive, juste de la valeur authentique pour vos patients.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <GradientIcon>
                  <UsersIcon size={24} />
                </GradientIcon>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Support Illimité</h3>
                  <p className="text-gray-600">
                    Accès permanent à notre équipe d'experts. Nous répondons à toutes vos questions 
                    sous 24h maximum, 7j/7.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="fade-in-section">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white">
                <div className="text-center space-y-6">
                  <AnimatedIcon>
                    <TargetIcon className="mx-auto" size={64} />
                  </AnimatedIcon>
                  <h3 className="text-3xl font-bold">Notre Engagement</h3>
                  <blockquote className="text-xl italic">
                    "Votre réussite est notre priorité absolue. 
                    Nous mettons notre réputation en jeu pour votre succès."
                  </blockquote>
                  <div className="bg-white/20 rounded-lg p-6">
                    <p className="text-lg font-medium">
                      Avec l'aide d'un avocat, nous avons rédigé un contrat qui garantit 
                      de vous accompagner jusqu'à l'obtention de vos résultats.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              Questions{' '}
              <span className="gradient-text">fréquentes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les réponses aux questions que se posent 95% des thérapeutes avant de commencer.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg fade-in-section">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                "Combien de temps faut-il pour voir les premiers résultats ?"
              </h3>
              <p className="text-gray-600">
                Les premiers clients arrivent généralement entre la 4ème et 8ème semaine. 
                Les 15k€/mois de revenus récurrents sont atteints en moyenne en 3-4 mois pour nos clients les plus actifs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg fade-in-section">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                "Est-ce que ça marche pour ma spécialité thérapeutique ?"
              </h3>
              <p className="text-gray-600">
                Oui ! Nous avons accompagné avec succès plus de 300 thérapeutes dans 11 professions différentes : 
                ostéopathes, kinés, psychologues, naturopathes, sophrologues, etc. La méthode POV s'adapte à toute expertise.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg fade-in-section">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                "Je n'y connais rien au digital, est-ce que je peux y arriver ?"
              </h3>
              <p className="text-gray-600">
                Absolument ! 80% de nos clients étaient débutants en digital. Nous expliquons tout étape par étape, 
                avec un vocabulaire simple. Vous n'avez besoin d'aucune compétence technique préalable.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg fade-in-section">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                "Combien de temps par semaine faut-il y consacrer ?"
              </h3>
              <p className="text-gray-600">
                Comptez 5-10h par semaine selon votre formule. C'est un investissement temporaire 
                pour créer un système qui vous génère des revenus automatiques à vie.
              </p>
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
              Prêt à doubler vos revenus en 90 jours ?
            </h2>
            <p className="text-xl lg:text-2xl text-white/90">
              Choisissez votre formule et rejoignez les 300+ thérapeutes qui ont transformé 
              leur pratique grâce à la méthode POV.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link 
                href="/contact" 
                className="btn-modern bg-white text-[#DCB253] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover-lift flex items-center gap-2 justify-center"
              >
                Réserver un audit gratuit
                <ArrowRightIcon size={20} />
              </Link>
              <Link 
                href="/masterclass" 
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#DCB253] transition-all hover-lift"
              >
                Voir la masterclass POV
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
            "name": "Méthode POV Thérapreneur",
            "description": "Formation et accompagnement pour doubler les revenus des thérapeutes en 90 jours",
            "provider": {
              "@type": "Organization",
              "name": "Thérapreneur"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Formules Méthode POV",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "name": "Autonomie",
                  "description": "Formation en autonomie guidée",
                  "price": "997",
                  "priceCurrency": "EUR"
                },
                {
                  "@type": "Offer",
                  "name": "Co-Création",
                  "description": "Accompagnement personnalisé étape par étape",
                  "price": "1997",
                  "priceCurrency": "EUR"
                },
                {
                  "@type": "Offer",
                  "name": "Fait Pour Vous",
                  "description": "Service complet clé en main",
                  "price": "4997",
                  "priceCurrency": "EUR"
                }
              ]
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "Thérapeutes entrepreneurs"
            },
            "serviceOutput": "Revenus récurrents de 5k€ à 15k€ par mois"
          })
        }}
      />
    </>
  );
}