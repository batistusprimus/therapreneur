'use client';

import { FiFileText, FiCalendar, FiUser, FiMail, FiPhone, FiExternalLink, FiMessageSquare, FiBook, FiTarget, FiPackage, FiImage, FiVideo, FiX } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Types pour les ressources
interface Video {
  title: string;
  url: string;
  description: string;
}

interface BaseResource {
  title: string;
  description: string;
  icon: IconType;
}

interface TutorialResource extends BaseResource {
  type: 'tutorial';
  content: {
    dashboard: {
      title: string;
      sections: Array<{
        title: string;
        content: string;
      }>;
    };
    masterclass: {
      title: string;
      sections: Array<{
        title: string;
        content: string;
      }>;
    };
  };
}

interface DocumentResource extends BaseResource {
  type: 'document';
  url: string;
}

type Resource = TutorialResource | DocumentResource;

// Mise à jour des données de démonstration
const demoClientInfo = {
  name: "Marie Dupont",
  email: "marie.dupont@example.com",
  phone: "06 12 34 56 78",
  googleDocs: {
    "Plan de suivi": "https://docs.google.com/document/d/1ajCt2BPpTGqB7Lyo7MyBSpV9tgRk5fJr9pTiKLEGM4k/edit?usp=sharing",
    "Notes de séance": "https://docs.google.com/document/d/1AAJNzkxqJkeMz_3mR3zepiV4TL5asdK61MSi9Ndd2CE/edit?usp=sharing"
  }
};

// Ressources d'onboarding
const onboardingResources: Record<string, Resource> = {
  onboarding: {
    title: "Onboarding",
    description: "Guide d'utilisation de votre espace client",
    icon: FiBook,
    type: "tutorial",
    content: {
      dashboard: {
        title: "Votre Dashboard",
        sections: [
          {
            title: "Navigation",
            content: "Votre espace client est organisé en plusieurs sections principales : les ressources d'onboarding, les documents partagés, et vos informations personnelles. Utilisez la barre de navigation en haut pour accéder rapidement à la Masterclass."
          },
          {
            title: "Documents",
            content: "Tous vos documents importants sont centralisés dans la section 'Documents partagés'. Vous y trouverez votre plan de suivi, vos notes de séance, et les documents stratégiques de votre développement."
          },
          {
            title: "Ressources",
            content: "La section 'Ressources d'Onboarding' contient tous les guides et tutoriels nécessaires pour bien démarrer. Consultez-les régulièrement pour tirer le meilleur parti de votre accompagnement."
          }
        ]
      },
      masterclass: {
        title: "La Masterclass",
        sections: [
          {
            title: "Objectif",
            content: "La Masterclass Thérapreneur est votre formation complète pour transformer votre pratique thérapeutique en entreprise florissante. Elle combine stratégie business, marketing et développement personnel."
          },
          {
            title: "Contenu",
            content: "Vous accédez à des modules progressifs couvrant : la définition de votre cible, la structuration de votre offre, votre branding, et les stratégies de croissance. Chaque module inclut des exercices pratiques et des ressources complémentaires."
          },
          {
            title: "Accès",
            content: "Cliquez sur le bouton 'Accéder à la Masterclass' en haut de votre dashboard pour rejoindre la formation. Vous pouvez suivre les modules à votre rythme et revenir sur les contenus à tout moment."
          }
        ]
      }
    }
  },
  cible: {
    title: "Cible",
    description: "Définition de votre client idéal",
    icon: FiTarget,
    type: "document",
    url: "https://docs.google.com/document/d/1GKQFpxWqmITbSNI3CaO4KJ8D2uiu5YsqsXqC7DCJ1yg/edit?usp=sharing"
  },
  offre: {
    title: "Offre",
    description: "Structure de votre offre de services",
    icon: FiPackage,
    type: "document",
    url: "https://docs.google.com/document/d/1WbVQ7ViTsU87NIzpB9Ys_wK05nu5rn0a8Y1yRo2kQJE/edit?usp=sharing"
  },
  branding: {
    title: "Branding",
    description: "Guide de votre identité visuelle",
    icon: FiImage,
    type: "document",
    url: "https://docs.google.com/document/d/1cSrntllxXHWpMB4Kx_7TW5vAQtzMgDywlJRiLYU1T14/edit?usp=sharing"
  }
};

// Ajout des styles pour les animations
const cardHoverStyles = "transform hover:scale-[1.02] transition-all duration-300 ease-in-out";
const buttonHoverStyles = "transform hover:scale-105 transition-all duration-200 ease-in-out";
const modalAnimationStyles = "animate-fadeIn";

// Ajout d'un composant de chargement
const LoadingShimmer = () => (
  <div className="loading-shimmer glass-card rounded-xl p-8 h-48"></div>
);

// Ajout d'un composant de progression
const ProgressIndicator = ({ current, total }: { current: number; total: number }) => (
  <div className="flex justify-center space-x-2 mt-4">
    {Array.from({ length: total }).map((_, index) => (
      <div
        key={index}
        className={`progress-dot ${index === current ? 'active' : ''}`}
      />
    ))}
  </div>
);

// Composant Modal d'Onboarding
const OnboardingModal = ({ onClose }: { onClose: () => void }) => {
  const [activeSection, setActiveSection] = useState<'dashboard' | 'masterclass'>('dashboard');
  const content = (onboardingResources.onboarding as TutorialResource).content;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="glass rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-semibold text-accent">
                Guide d'Onboarding
              </h3>
              <p className="text-gray-600 mt-1">
                Découvrez votre espace client et la Masterclass
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100/80 focus-visible"
            >
              <FiX size={24} />
            </button>
          </div>

          <div className="flex space-x-4 mb-8">
            <button
              onClick={() => setActiveSection('dashboard')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeSection === 'dashboard'
                  ? 'bg-accent text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveSection('masterclass')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeSection === 'masterclass'
                  ? 'bg-accent text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Masterclass
            </button>
          </div>

          <div className="space-y-6">
            {content[activeSection].sections.map((section, index) => (
              <div
                key={index}
                className="glass rounded-lg p-6 card-hover"
              >
                <h4 className="text-lg font-medium text-accent mb-3">
                  {section.title}
                </h4>
                <p className="text-gray-600">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}
              className="button-primary"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ClientTemplatePage() {
  const [showOnboardingTutorial, setShowOnboardingTutorial] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* En-tête */}
      <div className="glass sticky top-0 z-40">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-accent">
                Espace Client (Template)
              </h1>
              <p className="text-gray-600 mt-1">
                Version de démonstration
              </p>
            </div>
            <button
              onClick={() => router.push('/masterclass')}
              className="button-primary focus-visible"
            >
              <div className="flex items-center">
                <div className="mr-2">
                  <FiVideo size={20} />
                </div>
                Accéder à la Masterclass
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Bannière Masterclass */}
      <div className="bg-gradient-to-r from-[#3498DB] to-[#2C3E50] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <FiVideo size={24} />
              </div>
              <div>
                <h2 className="text-xl font-medium">Masterclass Thérapreneur</h2>
                <p className="text-white/90 mt-1">
                  Transformez votre pratique thérapeutique en entreprise florissante
                </p>
              </div>
            </div>
            <button
              onClick={() => router.push('/masterclass')}
              className="px-6 py-3 bg-white text-[#3498DB] rounded-lg hover:bg-gray-50 transition-colors focus-visible"
            >
              Découvrir la formation
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Section Onboarding */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-accent mb-6">
            Ressources d'Onboarding
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(onboardingResources).map(([key, resource], index) => (
              <div
                key={key}
                className="glass rounded-lg p-6 card-hover animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <div className="text-accent">
                        <resource.icon size={24} />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-accent mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {resource.description}
                    </p>
                    {resource.type === "tutorial" ? (
                      <button
                        onClick={() => {
                          if (key === 'onboarding') {
                            setShowOnboardingTutorial(true);
                          }
                        }}
                        className="button-primary focus-visible"
                      >
                        <div className="flex items-center">
                          <div className="mr-2">
                            <FiBook size={18} />
                          </div>
                          Voir le guide
                        </div>
                      </button>
                    ) : (
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-primary focus-visible inline-flex items-center"
                      >
                        Accéder au document
                        <div className="ml-2">
                          <FiExternalLink size={18} />
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documents */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-accent mb-6">
            Documents partagés
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(demoClientInfo.googleDocs).map(([title, url], index) => (
              <a
                key={title}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-lg p-6 card-hover animate-slideUp focus-visible"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <div className="text-accent">
                        <FiFileText size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {title}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        Document partagé
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    <FiExternalLink size={20} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Informations Client */}
        <div className="glass rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-accent mb-6">
            Informations Client
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: FiUser, label: "Nom", value: demoClientInfo.name },
              { icon: FiMail, label: "Email", value: demoClientInfo.email },
              { icon: FiPhone, label: "Téléphone", value: demoClientInfo.phone }
            ].map((item, index) => (
              <div key={index} className="glass rounded-lg p-4 card-hover">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <div className="text-accent">
                      <item.icon size={20} />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="font-medium text-gray-900">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      {showOnboardingTutorial && <OnboardingModal onClose={() => setShowOnboardingTutorial(false)} />}
    </div>
  );
} 