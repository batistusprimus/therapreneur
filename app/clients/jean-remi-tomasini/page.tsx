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
  videos: Video[];
}

interface DocumentResource extends BaseResource {
  type: 'document';
  url: string;
}

type Resource = TutorialResource | DocumentResource;

// Données client
const clientInfo = {
  name: "Jean-Rémi TOMASINI",
  email: "jeanremit@icloud.com",
  phone: "+33 7 82 81 62 06",
  googleDocs: {
    "Plan de suivi": "https://docs.google.com/document/d/1MLYcz0u98nIGEd53FZIwP-N-JG64oaBGwA1Pu67B4lU/edit?usp=sharing",
    "Notes de séance": "https://docs.google.com/document/d/1QXKzK01RF4yZXpZXpdJs4ZBeNhhQ0ARagfGKnILLZtI/edit?usp=sharing",
    "Branding": "https://docs.google.com/document/d/1s0TGFBua9eUVpXXRh1YXAE5BTek-FH0r9CklwCocfrc/edit?usp=sharing",
    "Cible": "https://docs.google.com/document/d/17WAbTCESHSpqQlAoX955DnaL37zlF13ViL3oBJeXhR8/edit?usp=sharing",
    "Offre": "https://docs.google.com/document/d/1RImhu0YhMvHiZmgBOk1xZ0tY8HqyrB71Uw8ArbToBas/edit?usp=sharing"
  }
};

// Ressources d'onboarding
const onboardingResources: Record<string, Resource> = {
  onboarding: {
    title: "Onboarding",
    description: "Vidéos de bienvenue et processus d'intégration",
    icon: FiBook,
    type: "tutorial",
    videos: [
      {
        title: "Bienvenue dans Thérapreneur",
        url: "https://www.youtube.com/embed/VIDEO_ID_1",
        description: "Découvrez votre espace client et les prochaines étapes"
      },
      {
        title: "Comment utiliser votre espace",
        url: "https://www.youtube.com/embed/VIDEO_ID_2",
        description: "Guide d'utilisation de votre espace client"
      }
    ]
  },
  discord: {
    title: "Protocole Discord",
    description: "Guide d'utilisation de notre espace communautaire",
    icon: FiMessageSquare,
    type: "tutorial",
    videos: [
      {
        title: "Accéder et rejoindre Discord",
        url: "https://www.youtube.com/embed/VIDEO_ID_3",
        description: "Téléchargez Discord sur votre ordinateur ou utilisez la version web sur discord.com. Utilisez le lien d'invitation qui vous a été envoyé par email."
      },
      {
        title: "Participer à la communauté",
        url: "https://www.youtube.com/embed/VIDEO_ID_4",
        description: "Rendez-vous dans le canal #présentations pour vous présenter à la communauté. Découvrez les différents canaux thématiques et les ressources disponibles. N'hésitez pas à poser vos questions et à partager vos expériences."
      }
    ]
  }
};

// Ajout des styles pour les animations
const cardHoverStyles = "transform hover:scale-[1.02] transition-all duration-300 ease-in-out";
const buttonHoverStyles = "transform hover:scale-105 transition-all duration-200 ease-in-out";
const modalAnimationStyles = "animate-fadeIn";

// Composant Modal de base
const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  children 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  title: string; 
  description: string; 
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#2C3E50]">
                {title}
              </h3>
              <p className="text-gray-600 mt-1">
                {description}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100/80 focus-visible"
            >
              <FiX size={24} />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

// Composant pour les vidéos d'onboarding
const OnboardingModal = ({ onClose }: { onClose: () => void }) => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = (onboardingResources.onboarding as TutorialResource).videos;

  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      title="Onboarding - Vidéos de bienvenue"
      description="Découvrez votre espace client étape par étape"
    >
      <div className="space-y-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg p-6 shadow-sm border-2 ${
              currentVideo === index ? 'border-[#2C3E50]' : 'border-transparent'
            } hover:shadow-md transition-all duration-200`}
            onClick={() => setCurrentVideo(index)}
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-medium text-[#2C3E50]">
                {video.title}
              </h4>
              <span className="px-3 py-1 bg-[#2C3E50] text-white rounded-full text-sm">
                Vidéo {index + 1}/{videos.length}
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              {video.description}
            </p>
            <div className="border-2 border-[#2C3E50] rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-50">
                <iframe
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end space-x-3">
        <button
          onClick={() => setCurrentVideo(prev => Math.max(0, prev - 1))}
          disabled={currentVideo === 0}
          className={`px-4 py-2 bg-[#2C3E50] text-white rounded-lg hover:bg-[#1a2530] transition-colors ${
            currentVideo === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Précédent
        </button>
        <button
          onClick={() => setCurrentVideo(prev => Math.min(videos.length - 1, prev + 1))}
          disabled={currentVideo === videos.length - 1}
          className={`px-4 py-2 bg-[#2C3E50] text-white rounded-lg hover:bg-[#1a2530] transition-colors ${
            currentVideo === videos.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Suivant
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-[#2C3E50] text-white rounded-lg hover:bg-[#1a2530] transition-colors"
        >
          Fermer
        </button>
      </div>
    </Modal>
  );
};

// Composant pour le protocole Discord
const DiscordModal = ({ onClose }: { onClose: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    {
      title: "Accéder à Discord",
      description: "Téléchargez Discord sur votre ordinateur ou utilisez la version web sur discord.com",
      video: (onboardingResources.discord as TutorialResource).videos[0],
      items: [
        "Téléchargez Discord sur votre ordinateur",
        "Ou utilisez la version web sur discord.com",
        "Utilisez le lien d'invitation qui vous a été envoyé par email"
      ]
    },
    {
      title: "Rejoindre et participer",
      description: "Guide pour participer à la communauté",
      video: (onboardingResources.discord as TutorialResource).videos[1],
      items: [
        "Rendez-vous dans le canal #présentations pour vous présenter",
        "Découvrez les différents canaux thématiques",
        "N'hésitez pas à poser vos questions",
        "Partagez vos expériences avec la communauté"
      ]
    }
  ];

  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      title="Protocole Discord"
      description="Guide complet pour utiliser notre espace communautaire"
    >
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg p-6 shadow-sm border-2 ${
              currentStep === index ? 'border-[#2C3E50]' : 'border-transparent'
            } hover:shadow-md transition-all duration-200`}
            onClick={() => setCurrentStep(index)}
          >
            <h4 className="text-lg font-medium text-[#2C3E50] mb-4 flex items-center">
              <span className="w-8 h-8 bg-[#2C3E50] text-white rounded-full flex items-center justify-center mr-3">
                <span className="font-medium text-sm">{index + 1}</span>
              </span>
              {step.title}
            </h4>
            <p className="text-gray-600 mb-4">
              {step.description}
            </p>
            {step.items && (
              <div className="space-y-3 mb-4">
                {step.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#2C3E50] text-white rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-xs font-medium">{itemIndex + 1}</span>
                    </div>
                    <p className="text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            )}
            <div className="border-2 border-[#2C3E50] rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-50">
                <iframe
                  src={step.video.url}
                  title={step.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end space-x-3">
        <button
          onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
          disabled={currentStep === 0}
          className={`px-4 py-2 bg-[#2C3E50] text-white rounded-lg hover:bg-[#1a2530] transition-colors ${
            currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Précédent
        </button>
        <button
          onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}
          disabled={currentStep === steps.length - 1}
          className={`px-4 py-2 bg-[#2C3E50] text-white rounded-lg hover:bg-[#1a2530] transition-colors ${
            currentStep === steps.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Suivant
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-[#2C3E50] text-white rounded-lg hover:bg-[#1a2530] transition-colors"
        >
          Fermer
        </button>
      </div>
    </Modal>
  );
};

export default function ClientPage() {
  const [showOnboardingTutorial, setShowOnboardingTutorial] = useState(false);
  const [showDiscordTutorial, setShowDiscordTutorial] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* En-tête */}
      <div className="glass sticky top-0 z-40">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-accent">
                Espace Client - Jean-Rémi TOMASINI
              </h1>
              <p className="text-gray-600 mt-1">
                Bienvenue dans votre espace personnel
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
                          } else if (key === 'discord') {
                            setShowDiscordTutorial(true);
                          }
                        }}
                        className="button-primary focus-visible"
                      >
                        <div className="flex items-center">
                          <div className="mr-2">
                            <FiVideo size={18} />
                          </div>
                          Voir les vidéos
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
            {Object.entries(clientInfo.googleDocs).map(([title, url], index) => (
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
              { icon: FiUser, label: "Nom", value: clientInfo.name },
              { icon: FiMail, label: "Email", value: clientInfo.email },
              { icon: FiPhone, label: "Téléphone", value: clientInfo.phone }
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
      {showDiscordTutorial && <DiscordModal onClose={() => setShowDiscordTutorial(false)} />}
    </div>
  );
} 