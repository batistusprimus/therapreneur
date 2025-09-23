'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Types pour notre masterclass
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
  form?: {
    sections: {
      title: string;
      fields: string[];
    }[];
  };
}

interface Rubrique {
  title: string;
  paliers: Palier[];
}

interface Part {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  pdfUrl: string;
  order: number;
}

interface Module {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  workbookUrl: string;
  parts: Part[];
  paliers: Palier[];
}

interface Introduction {
  title: string;
  description: string;
  videoUrl: string;
  workbookUrl: string;
}

interface MasterclassContent {
  introduction: Introduction;
  modules: Module[];
}

// Contenu de la masterclass
const masterclassContent: MasterclassContent = {
  introduction: {
    title: "Bienvenue dans la Masterclass Thérapreneur",
    description: "Découvrez comment transformer votre pratique thérapeutique en entreprise florissante.",
    videoUrl: "/videos/introduction.mp4",
    workbookUrl: "/workbooks/introduction.pdf",
  },
  modules: [
    {
      id: 0,
      title: "Mindset & Fondamentaux",
      description: "Adopte le bon état d'esprit pour réussir en tant que thérapeute digital",
      icon: "🧠",
      color: "#9F99EB",
      workbookUrl: "/workbook/0-mindset.pdf",
      parts: [
        {
          id: "0.1",
          title: "Bienvenue dans la formation",
          description: "Découvrez les objectifs et la structure de la formation",
          videoUrl: "/videos/0-1-bienvenue.mp4",
          pdfUrl: "/pdfs/0-1-bienvenue.pdf",
          order: 1
        },
        {
          id: "0.2",
          title: "Le mindset du thérapeute digital",
          description: "Comprendre l'état d'esprit nécessaire pour réussir",
          videoUrl: "/videos/0-2-mindset.mp4",
          pdfUrl: "/pdfs/0-2-mindset.pdf",
          order: 2
        },
        {
          id: "0.3",
          title: "Les fondamentaux du business digital",
          description: "Maîtriser les bases essentielles du business en ligne",
          videoUrl: "/videos/0-3-fondamentaux.mp4",
          pdfUrl: "/pdfs/0-3-fondamentaux.pdf",
          order: 3
        }
      ],
      paliers: [
        {
          id: "0.1",
          title: "Bienvenue",
          videoUrl: "/videos/0-1-bienvenue.mp4",
          tags: ["introduction", "bienvenue"],
          moduleId: 0
        },
        {
          id: "0.2",
          title: "Protocole Discord",
          videoUrl: "/videos/0-2-discord.mp4",
          tags: ["introduction", "discord"],
          moduleId: 0
        }
      ]
    },
    {
      id: 1,
      title: "Offre Irrésistible",
      description: "Crée une offre digitale qui se vend toute seule",
      icon: "💎",
      color: "#FF9800",
      workbookUrl: "/workbook/1-offre-irresistible.pdf",
      parts: [
        {
          id: "1.1",
          title: "La structure d'une offre irrésistible",
          description: "Comprendre les éléments clés d'une offre qui convertit",
          videoUrl: "/videos/1-1-structure.mp4",
          pdfUrl: "/pdfs/1-1-structure.pdf",
          order: 1
        },
        {
          id: "1.2",
          title: "La promesse de valeur",
          description: "Créer une promesse qui fait mouche",
          videoUrl: "/videos/1-2-promesse.mp4",
          pdfUrl: "/pdfs/1-2-promesse.pdf",
          order: 2
        },
        {
          id: "1.3",
          title: "Le packaging de l'offre",
          description: "Emballer son offre de manière attractive",
          videoUrl: "/videos/1-3-packaging.mp4",
          pdfUrl: "/pdfs/1-3-packaging.pdf",
          order: 3
        },
        {
          id: "1.4",
          title: "La tarification stratégique",
          description: "Définir sa stratégie de prix optimale",
          videoUrl: "/videos/1-4-tarification.mp4",
          pdfUrl: "/pdfs/1-4-tarification.pdf",
          order: 4
        }
      ],
      paliers: [
        {
          id: "1.1",
          title: "Vidéo explicative",
          videoUrl: "/videos/1-1-explication.mp4",
          tags: ["clarté", "vision"],
          moduleId: 1
        },
        {
          id: "1.2",
          title: "Formulaire de clarté",
          videoUrl: "/videos/1-2-formulaire.mp4",
          tags: ["clarté", "formulaire"],
          moduleId: 1,
          form: {
            sections: [
              {
                title: "Objectifs à 12 mois",
                fields: ["objectif1", "objectif2", "objectif3"]
              },
              {
                title: "Spécialité / sous-niche / posture",
                fields: ["specialite", "niche", "posture"]
              },
              {
                title: "ICP",
                fields: ["avatar", "problematiques", "transformation"]
              }
            ]
          }
        }
      ]
    },
    {
      id: 2,
      title: "Acquisition Client",
      description: "Maîtrise les stratégies d'acquisition qui fonctionnent en B2B",
      icon: "🎯",
      color: "#4CAF50",
      workbookUrl: "/workbook/2-acquisition.pdf",
      parts: [
        {
          id: "2.1",
          title: "Les canaux d'acquisition B2B",
          description: "Identifier les meilleurs canaux pour votre business",
          videoUrl: "/videos/2-1-canaux.mp4",
          pdfUrl: "/pdfs/2-1-canaux.pdf",
          order: 1
        },
        {
          id: "2.2",
          title: "LinkedIn : le réseau B2B par excellence",
          description: "Maîtriser LinkedIn pour l'acquisition B2B",
          videoUrl: "/videos/2-2-linkedin.mp4",
          pdfUrl: "/pdfs/2-2-linkedin.pdf",
          order: 2
        },
        {
          id: "2.3",
          title: "Les publicités B2B",
          description: "Créer des campagnes publicitaires B2B efficaces",
          videoUrl: "/videos/2-3-pub.mp4",
          pdfUrl: "/pdfs/2-3-pub.pdf",
          order: 3
        },
        {
          id: "2.4",
          title: "Le networking digital",
          description: "Construire son réseau professionnel en ligne",
          videoUrl: "/videos/2-4-networking.mp4",
          pdfUrl: "/pdfs/2-4-networking.pdf",
          order: 4
        }
      ],
      paliers: [
        {
          id: "2.1",
          title: "Vidéo + exemple d'offre",
          videoUrl: "/videos/2-1-offre.mp4",
          tags: ["offre", "exemple"],
          moduleId: 2
        },
        {
          id: "2.2",
          title: "Formulaire d'offre",
          videoUrl: "/videos/2-2-formulaire.mp4",
          tags: ["offre", "formulaire"],
          moduleId: 2,
          form: {
            sections: [
              {
                title: "Offre signature",
                fields: ["nom", "promesse", "duree", "format", "prix"]
              },
              {
                title: "Méthodologie",
                fields: ["etape1", "etape2", "etape3"]
              },
              {
                title: "Résultats et bénéfices",
                fields: ["resultats", "benefices"]
              }
            ]
          }
        }
      ]
    },
    {
      id: 3,
      title: "Newsletter & Communauté",
      description: "Apprends à créer et animer une communauté engagée autour de ta marque",
      icon: "📢",
      color: "#9F99EB",
      workbookUrl: "/workbook/3-newsletter-communaute.pdf",
      parts: [
        {
          id: "3.1",
          title: "La stratégie de newsletter",
          description: "Créer une newsletter qui engage",
          videoUrl: "/videos/3-1-strategie.mp4",
          pdfUrl: "/pdfs/3-1-strategie.pdf",
          order: 1
        },
        {
          id: "3.2",
          title: "La création de contenu",
          description: "Produire du contenu de qualité régulièrement",
          videoUrl: "/videos/3-2-creation.mp4",
          pdfUrl: "/pdfs/3-2-creation.pdf",
          order: 2
        },
        {
          id: "3.3",
          title: "L'animation de communauté",
          description: "Animer et faire grandir sa communauté",
          videoUrl: "/videos/3-3-animation.mp4",
          pdfUrl: "/pdfs/3-3-animation.pdf",
          order: 3
        }
      ],
      paliers: [
        {
          id: "3.1",
          title: "Vidéo + Template Notion",
          videoUrl: "/videos/3-1-template.mp4",
          tags: ["acquisition", "organique"],
          moduleId: 3
        },
        {
          id: "3.2",
          title: "Formulaire d'acquisition",
          videoUrl: "/videos/3-2-formulaire.mp4",
          tags: ["acquisition", "formulaire"],
          moduleId: 3,
          form: {
            sections: [
              {
                title: "Canal choisi",
                fields: ["canal"]
              },
              {
                title: "Promesse de contenu",
                fields: ["angle1", "angle2", "angle3"]
              },
              {
                title: "Planning édito",
                fields: ["planning"]
              }
            ]
          }
        }
      ]
    },
    {
      id: 4,
      title: "Éducation des Prospects",
      description: "Apprends à éduquer tes prospects pour les transformer en clients",
      icon: "🎓",
      color: "#9F99EB",
      workbookUrl: "/workbook/4-eduquer-prospects.pdf",
      parts: [
        {
          id: "4.1",
          title: "Le parcours d'éducation",
          description: "Structurer le parcours d'éducation des prospects",
          videoUrl: "/videos/4-1-parcours.mp4",
          pdfUrl: "/pdfs/4-1-parcours.pdf",
          order: 1
        },
        {
          id: "4.2",
          title: "Le contenu éducatif",
          description: "Créer du contenu qui éduque et convertit",
          videoUrl: "/videos/4-2-contenu.mp4",
          pdfUrl: "/pdfs/4-2-contenu.pdf",
          order: 2
        },
        {
          id: "4.3",
          title: "Les webinaires",
          description: "Organiser des webinaires qui convertissent",
          videoUrl: "/videos/4-3-webinaires.mp4",
          pdfUrl: "/pdfs/4-3-webinaires.pdf",
          order: 3
        }
      ],
      paliers: [
        {
          id: "4.1",
          title: "Vidéo + mini-tuto Meta Ads",
          videoUrl: "/videos/4-1-meta-ads.mp4",
          tags: ["acquisition", "payante"],
          moduleId: 4
        },
        {
          id: "4.2",
          title: "Formulaire de campagne",
          videoUrl: "/videos/4-2-formulaire.mp4",
          tags: ["acquisition", "formulaire"],
          moduleId: 4,
          form: {
            sections: [
              {
                title: "Objectif de campagne",
                fields: ["objectif"]
              },
              {
                title: "Budget",
                fields: ["budget"]
              },
              {
                title: "Lien de tunnel",
                fields: ["lien"]
              },
              {
                title: "Audiences",
                fields: ["audience1", "audience2"]
              }
            ]
          }
        }
      ]
    },
    {
      id: 5,
      title: "L'art du VSL",
      description: "Maîtrise l'art du VSL pour convertir tes prospects en clients",
      icon: "🎥",
      color: "#9F99EB",
      workbookUrl: "/workbook/5-art-vsl.pdf",
      parts: [
        {
          id: "5.1",
          title: "La structure du VSL",
          description: "Comprendre la structure d'un VSL qui convertit",
          videoUrl: "/videos/5-1-structure.mp4",
          pdfUrl: "/pdfs/5-1-structure.pdf",
          order: 1
        },
        {
          id: "5.2",
          title: "Le script de VSL",
          description: "Écrire un script de VSL percutant",
          videoUrl: "/videos/5-2-script.mp4",
          pdfUrl: "/pdfs/5-2-script.pdf",
          order: 2
        },
        {
          id: "5.3",
          title: "La production du VSL",
          description: "Produire un VSL professionnel",
          videoUrl: "/videos/5-3-production.mp4",
          pdfUrl: "/pdfs/5-3-production.pdf",
          order: 3
        }
      ],
      paliers: [
        {
          id: "5.1",
          title: "Vidéo + script d'appel",
          videoUrl: "/videos/5-1-script.mp4",
          tags: ["conversion", "vente"],
          moduleId: 5
        },
        {
          id: "5.2",
          title: "Formulaire de conversion",
          videoUrl: "/videos/5-2-formulaire.mp4",
          tags: ["conversion", "formulaire"],
          moduleId: 5,
          form: {
            sections: [
              {
                title: "Ton et posture",
                fields: ["ton", "posture"]
              },
              {
                title: "Objections",
                fields: ["objection1", "objection2", "objection3"]
              },
              {
                title: "Score de confort",
                fields: ["score"]
              },
              {
                title: "Actions à tester",
                fields: ["action1", "action2", "action3"]
              }
            ]
          }
        }
      ]
    },
    {
      id: 6,
      title: "Livraison & Expérience Client",
      description: "Crée une expérience client exceptionnelle qui fidélise",
      icon: "📦",
      color: "#FFC107",
      workbookUrl: "/workbook/6-livraison.pdf",
      parts: [
        {
          id: "6.1",
          title: "L'onboarding client",
          description: "Créer un onboarding qui rassure et engage",
          videoUrl: "/videos/6-1-onboarding.mp4",
          pdfUrl: "/pdfs/6-1-onboarding.pdf",
          order: 1
        },
        {
          id: "6.2",
          title: "Le suivi client",
          description: "Mettre en place un suivi client efficace",
          videoUrl: "/videos/6-2-suivi.mp4",
          pdfUrl: "/pdfs/6-2-suivi.pdf",
          order: 2
        },
        {
          id: "6.3",
          title: "La satisfaction client",
          description: "Mesurer et améliorer la satisfaction client",
          videoUrl: "/videos/6-3-satisfaction.mp4",
          pdfUrl: "/pdfs/6-3-satisfaction.pdf",
          order: 3
        }
      ],
      paliers: [
        {
          id: "6.1",
          title: "Vidéo + modèle de suivi",
          videoUrl: "/videos/6-1-suivi.mp4",
          tags: ["livraison", "client"],
          moduleId: 6
        },
        {
          id: "6.2",
          title: "Formulaire de livraison",
          videoUrl: "/videos/6-2-formulaire.mp4",
          tags: ["livraison", "formulaire"],
          moduleId: 6,
          form: {
            sections: [
              {
                title: "Format de suivi",
                fields: ["format"]
              },
              {
                title: "Fréquence",
                fields: ["frequence"]
              },
              {
                title: "Checklist",
                fields: ["checklist"]
              }
            ]
          }
        }
      ]
    },
    {
      id: 7,
      title: "Croissance & Pilotage",
      description: "Mets en place les KPIs et le pilotage de ton business",
      icon: "📈",
      color: "#673AB7",
      workbookUrl: "/workbook/7-croissance.pdf",
      parts: [
        {
          id: "7.1",
          title: "Les KPIs essentiels",
          description: "Identifier et suivre les KPIs clés",
          videoUrl: "/videos/7-1-kpis.mp4",
          pdfUrl: "/pdfs/7-1-kpis.pdf",
          order: 1
        },
        {
          id: "7.2",
          title: "Le tableau de bord",
          description: "Créer un tableau de bord efficace",
          videoUrl: "/videos/7-2-dashboard.mp4",
          pdfUrl: "/pdfs/7-2-dashboard.pdf",
          order: 2
        },
        {
          id: "7.3",
          title: "L'analyse des performances",
          description: "Analyser et optimiser ses performances",
          videoUrl: "/videos/7-3-analyse.mp4",
          pdfUrl: "/pdfs/7-3-analyse.pdf",
          order: 3
        }
      ],
      paliers: [
        {
          id: "7.1",
          title: "Vidéo + modèle dashboard",
          videoUrl: "/videos/7-1-dashboard.mp4",
          tags: ["croissance", "pilotage"],
          moduleId: 7
        },
        {
          id: "7.2",
          title: "Formulaire de croissance",
          videoUrl: "/videos/7-2-formulaire.mp4",
          tags: ["croissance", "formulaire"],
          moduleId: 7,
          form: {
            sections: [
              {
                title: "KPIs",
                fields: ["kpi1", "kpi2", "kpi3"]
              },
              {
                title: "Satisfaction client",
                fields: ["mesure"]
              },
              {
                title: "Objectif mensuel",
                fields: ["objectif"]
              }
            ]
          }
        }
      ]
    },
    {
      id: 8,
      title: "Optimisation & Délégation",
      description: "Prépare ton business à l'échelle avec la délégation et l'automatisation",
      icon: "🔁",
      color: "#607D8B",
      workbookUrl: "/workbook/8-optimisation.pdf",
      parts: [
        {
          id: "8.1",
          title: "La délégation efficace",
          description: "Apprendre à déléguer efficacement",
          videoUrl: "/videos/8-1-delegation.mp4",
          pdfUrl: "/pdfs/8-1-delegation.pdf",
          order: 1
        },
        {
          id: "8.2",
          title: "L'automatisation",
          description: "Automatiser les tâches répétitives",
          videoUrl: "/videos/8-2-automatisation.mp4",
          pdfUrl: "/pdfs/8-2-automatisation.pdf",
          order: 2
        },
        {
          id: "8.3",
          title: "La documentation",
          description: "Documenter ses processus pour l'échelle",
          videoUrl: "/videos/8-3-documentation.mp4",
          pdfUrl: "/pdfs/8-3-documentation.pdf",
          order: 3
        }
      ],
      paliers: [
        {
          id: "8.1",
          title: "Vidéo + SOP template",
          videoUrl: "/videos/8-1-sop.mp4",
          tags: ["optimisation", "délégation"],
          moduleId: 8
        },
        {
          id: "8.2",
          title: "Formulaire d'optimisation",
          videoUrl: "/videos/8-2-formulaire.mp4",
          tags: ["optimisation", "formulaire"],
          moduleId: 8,
          form: {
            sections: [
              {
                title: "Processus à déléguer",
                fields: ["processus"]
              },
              {
                title: "Outils",
                fields: ["outil1", "outil2"]
              },
              {
                title: "Blocages",
                fields: ["blocage1", "blocage2"]
              }
            ]
          }
        }
      ]
    }
  ]
};

export default function MasterclassPage() {
  const [activeModuleId, setActiveModuleId] = useState<number>(-1);
  const [activePartId, setActivePartId] = useState<string | null>(null);
  const [activePalierId, setActivePalierId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'focus' | 'explore'>('focus');
  const [clientInfo, setClientInfo] = useState<any>(null);
  const router = useRouter();

  // Vérifier l'état de connexion et récupérer les infos client
  useEffect(() => {
    const storedInfo = localStorage.getItem('clientInfo');
    if (storedInfo) {
      setClientInfo(JSON.parse(storedInfo));
      // Précharger la page dashboard spécifique au client
      router.prefetch(`/clients/${JSON.parse(storedInfo).id}`);
    } else {
      // Précharger la page template si pas de client connecté
      router.prefetch('/clients/template');
    }
  }, [router]);

  // Fonction pour gérer la navigation vers le dashboard
  const handleDashboardClick = () => {
    if (clientInfo) {
      router.push(`/clients/${clientInfo.id}`);
    } else {
      router.push('/clients/template');
    }
  };

  const currentModule = activeModuleId !== -1 ? masterclassContent.modules[activeModuleId] : null;
  const currentPart = currentModule?.parts.find(p => p.id === activePartId);
  const currentPartIndex = currentModule?.parts.findIndex(p => p.id === activePartId) ?? -1;

  const nextPart = currentPartIndex !== -1 && currentModule?.parts[currentPartIndex + 1];
  const prevPart = currentPartIndex !== -1 && currentModule?.parts[currentPartIndex - 1];
  const nextModule = currentModule && masterclassContent.modules[currentModule.id + 1];
  const isLastPart = currentPartIndex === (currentModule?.parts.length ?? 0) - 1;

  // Liste des modules à afficher sous forme de cards
  return (
    <div className="min-h-screen bg-background">
      {/* Header fixe */}
      <div className="glass sticky top-0 z-40">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-accent">
                Masterclass Thérapreneur - Méthode POV
              </h1>
              <p className="text-gray-600 mt-1">
                Comment 300+ thérapeutes ont doublé leurs revenus en 90 jours
              </p>
            </div>
            <button
              onClick={handleDashboardClick}
              className="button-primary focus-visible"
            >
              <div className="flex items-center">
                <span>Dashboard</span>
                <span className="ml-2">→</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Banner d'urgence et résultats */}
      <section className="bg-gradient-to-r from-[#DCB253] to-[#DCB253]/80 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              ⚠️ Plus vous attendez, plus ce sera difficile de se lancer
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-black">300+</div>
                <div className="text-sm">Thérapeutes accompagnés</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-black">90j</div>
                <div className="text-sm">Pour doubler vos revenus</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-black">15k€/mois</div>
                <div className="text-sm">Revenus récurrents digitaux</div>
              </div>
            </div>
            <p className="text-lg mt-4 max-w-3xl mx-auto">
              <strong>Ce n'est pas du hasard ou de la chance, ce sont des compétences.</strong> 
              Cette masterclass vous donne le plan d'action exact de la méthode POV.
            </p>
          </div>
        </div>
      </section>

      {/* Contenu principal avec cards */}
      <div className="container mx-auto px-4 pt-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {masterclassContent.modules.map((module) => (
            <Link
              key={module.id}
              href={`/masterclass/module${module.id === 2.5 ? '2-5' : module.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 group"
              style={{ borderColor: module.color, borderWidth: 2 }}
            >
              <div className="p-6 relative" style={{ backgroundColor: module.color + '20' }}>
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{module.icon}</span>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-200">{module.title}</h3>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {module.description}
                </p>
                <div className="absolute top-4 right-4">
                  <span className="text-xs bg-white/80 text-gray-700 px-2 py-1 rounded-full">
                    {module.parts?.length || module.paliers?.length || 0} parties
                  </span>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between bg-gray-50 border-t border-gray-100">
                <span className="text-primary font-medium">Accéder au module</span>
                <span className="ml-2 text-xl">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 