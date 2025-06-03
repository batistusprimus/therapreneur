'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from "@/components/Button";
import WorkbookCard from '@/components/WorkbookCard';
import RoadmapCard from '@/components/RoadmapCard';

// Types
interface Palier {
  id: string;
  title: string;
  videoUrl: string;
  workbookUrl?: string;
  description?: string;
  tags?: string[];
  completed?: boolean;
  moduleId: number;
  rubrique?: string;
  callToAction?: {
    explore: {
      text: string;
      href: string;
    };
    newsletter: {
      text: string;
      href: string;
    };
  };
}

interface Rubrique {
  id?: number;
  title: string;
  description?: string;
  icon?: string;
  color?: string;
  workbookUrl?: string;
  paliers: Palier[];
}

interface Module {
  id: number;
  title: string;
  description: string;
  paliers?: Palier[];
  rubriques?: Rubrique[];
  icon?: string;
  color?: string;
  workbookUrl?: string;
}

// Nouveau type pour la progression
interface Progress {
  current: number;
  total: number;
  percentage: number;
}

// Couleurs du thème
const COLORS = {
  background: '#000000',
  surfaceLight: '#121212',
  surfaceMedium: '#1E1E1E',
  surfaceDark: '#0A0A0A',
  primary: '#9F99EB',
  secondary: '#99E5EB',
  accent: '#FFF1DE',
  textPrimary: '#FFFFFF',
  textSecondary: '#CCCCCC',
  textAccent: '#9F99EB',
  textMuted: '#8A8A8A',
  border: '#333333',
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
};

// Fonction utilitaire pour formater les URLs des vidéos
function formatVideoUrl(url: string): string {
  if (!url) return '';
  
  try {
    if (url.includes('tella.tv')) {
      return url.replace('/video/', '/embed/');
    } else if (url.includes('youtube.com')) {
      const parts = url.split('v=');
      if (parts.length < 2) return url;
      const videoId = parts[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`;
    } else if (url.includes('youtu.be')) {
      const parts = url.split('youtu.be/');
      if (parts.length < 2) return url;
      const videoId = parts[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`;
    } else if (url.includes('loom.com/share')) {
      return url.replace('share', 'embed');
    }
    return url;
  } catch (error) {
    console.error('Error formatting video URL:', error);
    return url;
  }
}

// Contenu du module
const moduleContent: Module = {
  id: 5,
  title: "L'art du VSL",
  description: "Maîtrise l'art du VSL pour convertir tes prospects en clients.",
  icon: "🎥",
  color: "#9F99EB",
  workbookUrl: "/workbook/5-art-vsl.pdf",
  rubriques: [
    {
      title: "📚 La théorie",
      paliers: [
        {
          id: "5",
          title: "Intro à lire absolument",
          videoUrl: "https://www.tella.tv/video/5-9i7f",
          tags: ["VSL", "introduction", "fondamentaux"],
          moduleId: 5,
          rubrique: "La théorie",
          callToAction: {
            explore: {
              text: "Consulter les modules disponibles",
              href: "/masterclass?viewMode=explore"
            },
            newsletter: {
              text: "S'inscrire à la newsletter",
              href: "/media#newsletter"
            }
          }
        },
        {
          id: "5.0",
          title: "Comment s'organiser pour écrire sa sales letter ?",
          videoUrl: "https://www.tella.tv/video/50-e8pc",
          tags: ["VSL", "organisation", "sales letter"],
          moduleId: 5,
          rubrique: "La théorie",
          callToAction: {
            explore: {
              text: "Consulter les modules disponibles",
              href: "/masterclass?viewMode=explore"
            },
            newsletter: {
              text: "S'inscrire à la newsletter",
              href: "/media#newsletter"
            }
          }
        },
        {
          id: "5.1",
          title: "Comment écrire une bonne headline / Un bon titre ?",
          videoUrl: "https://www.tella.tv/video/51-1-253j",
          tags: ["VSL", "headline", "copywriting"],
          moduleId: 5,
          rubrique: "La théorie",
          callToAction: {
            explore: {
              text: "Consulter les modules disponibles",
              href: "/masterclass?viewMode=explore"
            },
            newsletter: {
              text: "S'inscrire à la newsletter",
              href: "/media#newsletter"
            }
          }
        },
        {
          id: "5.2",
          title: "Comment avoir de la social proof",
          videoUrl: "https://www.tella.tv/video/52-gq11",
          tags: ["VSL", "social proof", "témoignages"],
          moduleId: 5,
          rubrique: "La théorie",
          callToAction: {
            explore: {
              text: "Consulter les modules disponibles",
              href: "/masterclass?viewMode=explore"
            },
            newsletter: {
              text: "S'inscrire à la newsletter",
              href: "/media#newsletter"
            }
          }
        },
        {
          id: "5.3",
          title: "Identification du prospect en début de VSL",
          videoUrl: "https://www.tella.tv/video/53-euz9",
          tags: ["VSL", "identification", "persona"],
          moduleId: 5,
          rubrique: "La théorie",
          callToAction: {
            explore: {
              text: "Consulter les modules disponibles",
              href: "/masterclass?viewMode=explore"
            },
            newsletter: {
              text: "S'inscrire à la newsletter",
              href: "/media#newsletter"
            }
          }
        },
        {
          id: "5.4",
          title: "Introduire le core concept",
          videoUrl: "https://www.tella.tv/video/54-5jjw",
          tags: ["VSL", "concept", "stratégie"],
          moduleId: 5,
          rubrique: "La théorie",
          callToAction: {
            explore: {
              text: "Consulter les modules disponibles",
              href: "/masterclass?viewMode=explore"
            },
            newsletter: {
              text: "S'inscrire à la newsletter",
              href: "/media#newsletter"
            }
          }
        },
        {
          id: "5.5",
          title: "\"J'ai un background\"",
          videoUrl: "https://www.tella.tv/video/55-5wdr",
          tags: ["VSL", "crédibilité", "autorité"],
          moduleId: 5,
          rubrique: "La théorie",
          callToAction: {
            explore: {
              text: "Consulter les modules disponibles",
              href: "/masterclass?viewMode=explore"
            },
            newsletter: {
              text: "S'inscrire à la newsletter",
              href: "/media#newsletter"
            }
          }
        },
        {
          id: "5.6",
          title: "Apporter de la valeur avec tes IUU (Insights Uniques et Utiles)",
          videoUrl: "https://www.tella.tv/video/56-f83f",
          tags: ["VSL", "valeur", "insights"],
          moduleId: 5,
          rubrique: "La théorie",
          callToAction: {
            explore: {
              text: "Consulter les modules disponibles",
              href: "/masterclass?viewMode=explore"
            },
            newsletter: {
              text: "S'inscrire à la newsletter",
              href: "/media#newsletter"
            }
          }
        },
        {
          id: "5.7",
          title: "Apporter ta solution et booker un call",
          videoUrl: "https://www.tella.tv/video/57-9ioj",
          tags: ["VSL", "solution", "conversion"],
          moduleId: 5,
          rubrique: "La théorie",
          callToAction: {
            explore: {
              text: "Consulter les modules disponibles",
              href: "/masterclass?viewMode=explore"
            },
            newsletter: {
              text: "S'inscrire à la newsletter",
              href: "/media#newsletter"
            }
          }
        },
        {
          id: "5.8",
          title: "Optimiser sa VSL",
          videoUrl: "https://www.tella.tv/video/58-94q1",
          tags: ["VSL", "optimisation", "amélioration"],
          moduleId: 5,
          rubrique: "La théorie",
          callToAction: {
            explore: {
              text: "Consulter les modules disponibles",
              href: "/masterclass?viewMode=explore"
            },
            newsletter: {
              text: "S'inscrire à la newsletter",
              href: "/media#newsletter"
            }
          }
        }
      ]
    },
    {
      title: "🎯 La pratique",
      paliers: [
        {
          id: "5.9",
          title: "Template de VSL long-form",
          videoUrl: "https://www.loom.com/share/f83bffab0d424366a38e252a1a12145e?sid=92b9df6f-a182-409f-8c74-e955058abf93",
          tags: ["VSL", "template", "long-form"],
          moduleId: 5,
          rubrique: "La pratique",
          callToAction: {
            explore: {
              text: "Consulter les modules disponibles",
              href: "/masterclass?viewMode=explore"
            },
            newsletter: {
              text: "S'inscrire à la newsletter",
              href: "/media#newsletter"
            }
          }
        },
        {
          id: "5.10",
          title: "Template de VSL short-form",
          videoUrl: "https://www.loom.com/share/435c286b566a4154ae690936dbcafa8f?sid=35a73ac7-5a84-4fc2-bbf2-f995c94d13b0",
          tags: ["VSL", "template", "short-form"],
          moduleId: 5,
          rubrique: "La pratique",
          callToAction: {
            explore: {
              text: "Consulter les modules disponibles",
              href: "/masterclass?viewMode=explore"
            },
            newsletter: {
              text: "S'inscrire à la newsletter",
              href: "/media#newsletter"
            }
          }
        }
      ]
    }
  ]
};

// Types pour les composants
type ViewMode = 'focus' | 'explore';

interface ViewModeToggleProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

interface FocusModeProps {
  activePalierId: string | null;
  setActivePalierId: (id: string | null) => void;
  activeContent: Palier | null;
  setViewMode: (mode: ViewMode) => void;
}

interface WorkbookCardProps {
  title: string;
  description?: string;
  workbookUrl: string;
  className?: string;
}

interface RoadmapCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
}

// Composants
function ViewModeToggle({ viewMode, setViewMode }: ViewModeToggleProps) {
  return (
    <div className="flex items-center gap-2 p-1 bg-surfaceDark rounded-lg">
      <button
        onClick={() => setViewMode('focus')}
        className={`px-4 py-2 rounded-md transition-all ${
          viewMode === 'focus'
            ? 'bg-primary text-white'
            : 'text-textSecondary hover:text-white'
        }`}
      >
        Focus
      </button>
      <button
        onClick={() => setViewMode('explore')}
        className={`px-4 py-2 rounded-md transition-all ${
          viewMode === 'explore'
            ? 'bg-primary text-white'
            : 'text-textSecondary hover:text-white'
        }`}
      >
        Explorer
      </button>
    </div>
  );
}

function FocusMode({ 
  activePalierId, 
  setActivePalierId, 
  activeContent,
  setViewMode
}: FocusModeProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [shouldScroll, setShouldScroll] = useState(false);
  
  // Calculer le nombre total de paliers
  const totalPaliers = moduleContent.rubriques?.reduce((total, rubrique) => total + rubrique.paliers.length, 0) || 0;
  
  // Trouver l'index actuel du palier dans tous les paliers
  const getCurrentPalierIndex = () => {
    if (!activePalierId || !moduleContent.rubriques) return 0;
    let currentIndex = 0;
    for (const rubrique of moduleContent.rubriques) {
      const palierIndex = rubrique.paliers.findIndex(p => p.id === activePalierId);
      if (palierIndex !== -1) {
        return currentIndex + palierIndex;
      }
      currentIndex += rubrique.paliers.length;
    }
    return 0;
  };

  const [progress, setProgress] = useState<Progress>({
    current: 0,
    total: totalPaliers,
    percentage: 0
  });

  // Mettre à jour la progression
  useEffect(() => {
    if (activePalierId && moduleContent.rubriques) {
      const currentIndex = getCurrentPalierIndex();
      const percentage = ((currentIndex + 1) / totalPaliers) * 100;
      setProgress({
        current: currentIndex + 1,
        total: totalPaliers,
        percentage
      });
    }
  }, [activePalierId]);

  // Gestionnaire de raccourcis clavier
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      navigateToPalier('next');
    } else if (event.key === 'ArrowLeft') {
      navigateToPalier('prev');
    }
  }, [activePalierId]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const scrollToTop = () => {
    if (!contentRef.current || !shouldScroll) return;
    
    const rect = contentRef.current.getBoundingClientRect();
    if (rect.top < 0) {
      contentRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
    }
    setShouldScroll(false);
  };

  useEffect(() => {
    if (shouldScroll) {
      scrollToTop();
    }
  }, [activeContent, shouldScroll]);

  const navigateToPalier = (direction: 'next' | 'prev') => {
    if (!activePalierId || !moduleContent.rubriques) return;
    
    const currentIndex = getCurrentPalierIndex();
    const nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    
    // Trouver le palier suivant/précédent dans toutes les rubriques
    let count = 0;
    for (const rubrique of moduleContent.rubriques) {
      for (const palier of rubrique.paliers) {
        if (count === nextIndex) {
          setShouldScroll(true);
          setActivePalierId(palier.id);
          return;
        }
        count++;
      }
    }
  };

  // Vérifier si c'est le dernier palier
  const isLastVideo = activePalierId === moduleContent.rubriques?.[moduleContent.rubriques.length - 1]?.paliers[moduleContent.rubriques[moduleContent.rubriques.length - 1].paliers.length - 1]?.id;

  if (!activeContent) return null;

  return (
    <div className="relative flex flex-col h-full">
      <div className="flex items-center justify-between p-4 bg-surfaceDark border-b border-border">
        <h2 className="text-xl font-bold text-white">{activeContent?.title}</h2>
        <button
          onClick={() => setViewMode('explore')}
          className="px-4 py-2 text-sm text-white bg-primary/20 hover:bg-primary/30 rounded-lg transition-colors flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          Explorer
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Barre de progression */}
        <div className="lg:col-span-3 mb-4">
          <div className="bg-surfaceMedium/50 backdrop-blur-sm rounded-xl p-4 border border-white/5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">Progression</span>
                <span className="text-sm font-medium text-primary">
                  {progress.current}/{progress.total}
                </span>
              </div>
              <div className="text-sm text-gray-400">
                {Math.round(progress.percentage)}%
              </div>
            </div>
            <div className="h-2 bg-surfaceLight rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-primary/80"
                initial={{ width: 0 }}
                animate={{ width: `${progress.percentage}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
            <div className="mt-2 text-xs text-gray-500 flex justify-between">
              <span>Utilise les flèches ← → pour naviguer</span>
              <span>{activeContent?.title}</span>
            </div>
          </div>
        </div>

        {/* Contenu principal - Déplacé en premier pour mobile */}
        <div className="lg:col-span-2 lg:order-2">
          <div ref={contentRef} className="bg-surfaceMedium/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5 shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-4">
                {activeContent.title}
              </h2>
              
              {/* Lecteur vidéo ou message d'attente */}
              <div className="aspect-video relative bg-surfaceLight rounded-xl overflow-hidden mb-8 shadow-2xl border border-white/5">
                {activeContent.videoUrl && !activeContent.videoUrl.includes('/videos/') ? (
                  <iframe
                    src={formatVideoUrl(activeContent.videoUrl)}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ aspectRatio: '16/9' }}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-16 h-16 mb-6 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Nous travaillons sur ce contenu...
                    </h3>
                    <p className="text-gray-300 mb-6 max-w-md">
                      Ce module est en cours de préparation. Inscris-toi à notre newsletter pour ne pas manquer sa sortie !
                    </p>
                    <Link
                      href="/media#newsletter"
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors shadow-lg"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      S'inscrire à la newsletter
                    </Link>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                <Button
                  onClick={() => navigateToPalier('prev')}
                  disabled={getCurrentPalierIndex() === 0}
                  variant="outline"
                  className="min-w-[150px]"
                >
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Précédent
                  </span>
                </Button>
                {isLastVideo ? (
                  <Link href="/masterclass/module6">
                    <Button className="min-w-[150px]">
                      <span className="flex items-center">
                        Module suivant
                        <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Button>
                  </Link>
                ) : (
                  <Button
                    onClick={() => navigateToPalier('next')}
                    disabled={getCurrentPalierIndex() === totalPaliers - 1}
                    className="min-w-[150px]"
                  >
                    <span className="flex items-center">
                      Suivant
                      <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Sidebar avec navigation */}
        <div className="lg:col-span-1 lg:order-1 space-y-6">
          <div className="bg-surfaceMedium/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5 shadow-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <Link 
                href="/masterclass"
                className="p-2 rounded-full bg-surfaceLight text-textSecondary hover:text-textPrimary transition-colors"
                aria-label="Retour à la masterclass"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <h2 className="text-xl font-bold text-accent">Progression</h2>
            </div>
            
            <div className="space-y-4">
              {moduleContent.rubriques?.map((rubrique) => (
                <div key={rubrique.title} className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">{rubrique.title}</h3>
                  {rubrique.paliers.map((palier) => (
                    <button
                      key={palier.id}
                      className={`w-full text-left p-3 rounded-md transition-colors ${
                        palier.id === activePalierId 
                          ? '' 
                          : 'hover:bg-surfaceLight border-l-4 border-transparent'
                      }`}
                      onClick={() => {
                        setActivePalierId(palier.id);
                        scrollToTop();
                      }}
                      style={palier.id === activePalierId ? {
                        backgroundColor: `${moduleContent.color}15`,
                        borderLeft: `4px solid ${moduleContent.color}`
                      } : {}}
                    >
                      <span className={`font-medium ${palier.id === activePalierId ? '' : 'text-textPrimary'}`}
                            style={palier.id === activePalierId ? {color: moduleContent.color} : {}}>
                        {palier.title}
                      </span>
                      {palier.description && (
                        <p className="text-textSecondary text-sm">{palier.description}</p>
                      )}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Workbook */}
          <WorkbookCard
            title="Workbook du module"
            description="Télécharge le workbook pour suivre ta progression et mettre en pratique les concepts appris."
            workbookUrl={moduleContent.workbookUrl || ''}
          />
        </div>
      </div>
    </div>
  );
}

function ExploreMode({ setActivePalierId, setViewMode }: { 
  setActivePalierId: (id: string | null) => void;
  setViewMode: (mode: ViewMode) => void;
}) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* En-tête */}
      <div className="sticky top-0 z-10 bg-surfaceDark border-b border-border p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link 
            href="/masterclass"
            className="text-primary hover:text-accent transition-colors"
          >
            ← Retour à la masterclass
          </Link>
          <ViewModeToggle viewMode="explore" setViewMode={setViewMode} />
        </div>
      </div>

      {/* Contenu */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Module Overview Card */}
          <div className="bg-surfaceMedium rounded-2xl p-8 border border-border mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              {moduleContent.icon} {moduleContent.title}
            </h1>
            <p className="text-textSecondary text-lg leading-relaxed mb-8">
              {moduleContent.description}
            </p>

            {/* Liste des rubriques et paliers */}
            <div className="space-y-8">
              {moduleContent.rubriques?.map((rubrique) => (
                <div key={rubrique.id} className="space-y-4">
                  <div className="relative">
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-12 bg-primary rounded-full"></div>
                    <div className="pl-6">
                      <h2 className="text-2xl font-bold text-white mb-2">{rubrique.title}</h2>
                      {rubrique.description && (
                        <p className="text-white text-base font-medium mt-1">{rubrique.description}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 pl-6">
                    {rubrique.paliers.map((palier) => (
                      <motion.button
                        key={palier.id}
                        className="w-full text-left p-6 bg-surfaceLight rounded-xl border border-border hover:bg-surfaceMedium transition-colors"
                        onClick={() => {
                          setActivePalierId(palier.id);
                          setViewMode('focus');
                          scrollToTop();
                        }}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <h3 className="text-xl font-semibold text-textPrimary">
                          {palier.title}
                        </h3>
                        {palier.description && (
                          <p className="text-textSecondary text-base font-medium mt-1">{palier.description}</p>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Workbook */}
          <WorkbookCard
            title="Workbook du module"
            description="Télécharge le workbook pour suivre ta progression et mettre en pratique les concepts appris."
            workbookUrl={moduleContent.workbookUrl || ''}
            color={moduleContent.color}
          />
        </div>
      </div>
    </div>
  );
}

export default function Module5Page() {
  const [activePalierId, setActivePalierId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('explore');
  
  // Déterminer le contenu actif
  const activeContent = moduleContent.rubriques?.find(r => r.paliers.find(p => p.id === activePalierId))?.paliers.find(p => p.id === activePalierId) || null;

  // Récupérer l'ID du palier depuis le localStorage au chargement
  useEffect(() => {
    const storedPalierId = localStorage.getItem('selectedPalierId');
    if (storedPalierId) {
      setActivePalierId(storedPalierId);
      setViewMode('focus');
      // Nettoyer le localStorage après utilisation
      localStorage.removeItem('selectedPalierId');
    }
  }, []);

  // Si aucun palier n'est sélectionné et qu'on est en mode focus, sélectionner le premier
  useEffect(() => {
    if (viewMode === 'focus' && !activePalierId && moduleContent.rubriques?.length) {
      setActivePalierId(moduleContent.rubriques[0].paliers[0].id);
    }
  }, [viewMode, activePalierId]);

  return (
    <div className="min-h-screen bg-background text-textPrimary p-4 md:p-8">
      {viewMode === 'focus' ? (
        <FocusMode
          activePalierId={activePalierId}
          setActivePalierId={setActivePalierId}
          activeContent={activeContent}
          setViewMode={setViewMode}
        />
      ) : (
        <ExploreMode
          setActivePalierId={setActivePalierId}
          setViewMode={setViewMode}
        />
      )}
    </div>
  );
} 