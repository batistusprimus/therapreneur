'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  results?: string;
  detail?: string;
  image?: string;
  stars?: boolean;
}

const testimonials: Testimonial[] = [
  {
    quote: "+20 000€ générés dès le premier lancement avec un système de vente entièrement délégué",
    detail: "Tout a été mis en place sans que j'aie à lever le petit doigt : tunnel, mails, pub, VSL, prise de rendez-vous, setting, closing.",
    author: "Yann Grosjean",
    role: "CEO de Lugus",
    results: "+20k€ dès le 1er mois",
    image: "/Yann Grosjean.jpeg",
    stars: true
  },
  {
    quote: "+300 000€ générés en 75 jours via une stratégie de contenu LinkedIn",
    detail: "On a lancé 35 posts en 75 jours. Résultat : +1,7M de vues, 4 posts viraux, +4000 abonnés, et plus de 300 000€ générés.",
    author: "Anaïs R.",
    role: "CEO de A&C",
    results: "+300k€ en 75 jours",
    image: "/anais-remaoun.webp",
    stars: true
  },
  {
    quote: "+75% de rentabilité sur 6 mois sans recruter ni déléguer",
    detail: "Je voulais scaler sans sacrifier ma liberté. En quelques semaines, j'ai restructuré mes offres, internalisé l'acquisition, et lancé un système qui tourne.",
    author: "CEO anonyme",
    role: "Prestataire B2B indépendant",
    results: "+75% de rentabilité",
    stars: true
  },
  {
    quote: "La formation était vraiment bien. J'ai bien aimé le fait qu'il y ai des vidéos sur plusieurs sujets différents, que ce soit business ou relationnel et les vidéos étaient bien faites et très intéressantes 👍",
    author: "Caroline Rousset",
    role: "Entrepreneure",
    image: "/Caroline rousset.jpg",
    stars: true
  },
  {
    quote: "La formation était vraiment bien. J'ai bien aimé le fait qu'il y ai des vidéos sur plusieurs sujets différents, que ce soit business ou relationnel et les vidéos étaient bien faites et très intéressantes 👍",
    author: "Jean Michel Ly",
    role: "Entrepreneur",
    image: "/jean_michel_ly_v2.png",
    stars: true
  },
  {
    quote: "Les formations sont au top du top, elles vont beaucoup me servir pour appliquer tout ça en vrai. La seule remarque que j'aurai à faire : c'est de parler un peu moins vite parfois puisque quand on enchaîne une formation en une journée ça peut faire beaucoup d'infos.",
    author: "Samantha Piat",
    role: "Entrepreneure",
    image: "/Samantha Piat.jpeg",
    stars: true
  },
  {
    quote: "Je n'ai pas encore tout visionné et j'ai tendance et regarder tes formations plusieurs fois pour me replonger dedans. Je te trouve direct, tranché et brut et c'est ça que je recherche dans les formats vidéos + des preuves à l'appui/démos etc... La majorité des éléments sont pertinents et ont du sens, il y a une cohérence c'est bien construit. J'ai beaucoup de clés pour tout déchirer maintenant merci à toi !",
    author: "Piat Samantha",
    role: "Entrepreneure",
    stars: true
  },
  {
    quote: "Et pour se former au mieux >>> allez voir directement Baptiste Piocelle 💪🏼💪🏼💪🏼 Un super bootcamp que j'ai suivi : Simple Complet Actionnable Résultats à la clef ❤️",
    author: "Giacomo Genna",
    role: "Entrepreneur",
    image: "/Giacomo Genna.jpeg",
    stars: true
  },
  {
    quote: "J'ai grandement apprécié le professionnalisme et l'efficacité de Baptiste. En gardant une trame générale de sa formation, il réussit aussi à s'adapter aux besoins et profils de chacun. Cela permet de se booster et de gagner en compétence avec une rapidité sans précédent ! ⚡ Baptiste m'a aidé à construire mon style et a trouvé l'inspiration pour l'exprimer chaque jour sur LinkedIn ! 🌐 Le bootcamp de Baptiste constitue tout ce que chaque formation devrait autre. N'hésitez pas et foncez !",
    author: "Joris Genty",
    role: "Entrepreneur",
    image: "/Joris Genty.jpeg",
    stars: true
  },
  {
    quote: "Autant pour une personne expérimentée que pour un débutant, la formation de Baptiste est une vraie mine d'or. En quelques heures, j'ai radicalement changé ma façon de créer du contenu sur les plateformes. Le plus beau dans tout ça. Les éléments qu'ils partagent pour LinkedIn peuvent être utilisés sur d'autres plateformes.",
    author: "Thierry Lorfils",
    role: "Expert contenu",
    image: "/Thierry Lorfils .jpg",
    stars: true
  },
  {
    quote: "Baptiste m'a aidé à y voir plus clair pour me lancer dans l'écriture sur Linkedin. Avec son aide, en 1h, j'ai eu un plan d'action efficace avec un ensemble d'outils pour m'aider dans l'écriture et la publication. J'ai hâte de pouvoir faire une nouvelle session avec lui pour passer à l'étude de cas de mes premiers posts.",
    author: "Mathieu",
    role: "Entrepreneur B2B",
    stars: true
  },
  {
    quote: "J'ai des posts LinkedIn qui ont fait plus de 20 000 vues alors que j'avais même pas 100 personnes dans mon réseau. Je me suis chauffée à créer ma newsletter LinkedIn La Taverne, pour laquelle j'ai déjà d'excellent retour. J'ai eu des conversations avec des personnes plus qu'intéressantes suite à mes posts.",
    author: "Axelle Guer",
    role: "Entrepreneure",
    image: "/Axelle Guer .jpeg",
    stars: true
  },
  {
    quote: "Grâce à Baptiste j'ai réussi à préparer un nombre de post Linkedin que je n'aurais pas imaginé avant son coaching. Ses explications sont limpides, ses trames de post facile à mettre en œuvre. Il est disponible et super cool. Vous voulez faire décoller votre Linkedin? Foncez !",
    author: "Guillaume",
    role: "Client B2B",
    stars: true
  },
  {
    quote: "Baptiste m'a beaucoup aidée à voir comment démultiplier les idées de posts à partir de quelques éléments de réflexion. Aujourd'hui cela fait 3 mois que je poste presque tous les jours, et le syndrome de la page blanche a totalement disparu.",
    author: "Floriane Bobée",
    role: "Entrepreneur B2B",
    image: "/Floriane Bobée.jpeg",
    stars: true
  }
];

export default function Testimonials() {
  const [displayedTestimonials, setDisplayedTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    // Sélectionner 5 témoignages aléatoires
    const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
    setDisplayedTestimonials(shuffled.slice(0, 5));
  }, []);

  return (
    <section className="py-12 md:py-20 bg-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-button/10 via-transparent to-primary/10 mix-blend-overlay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-button/10 rounded-full blur-[120px] opacity-30" />
      
      <div className="container-custom relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-block bg-button/20 backdrop-blur-sm px-4 md:px-6 py-2 rounded-full mb-4 md:mb-6 border border-button/30">
            <p className="text-sm md:text-base font-medium text-gray-300">
              Des résultats concrets et vérifiables
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
            💬 Témoignages
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            Ce que disent les entrepreneurs formés
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-7xl mx-auto">
          {/* Témoignages à gauche */}
          <div className="grid gap-4 md:gap-6">
            {displayedTestimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-gray-800/30 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-700/30 hover:border-button/30 transition-all duration-500"
              >
                <div className="relative z-10">
                  <div className="flex items-start gap-3 md:gap-4 mb-4">
                    {testimonial.image ? (
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden relative bg-gray-800/50">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          width={48}
                          height={48}
                          sizes="(max-width: 768px) 40px, 48px"
                          className="rounded-full object-cover"
                          priority={index < 3}
                          loading={index < 3 ? "eager" : "lazy"}
                          quality={90}
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-button/20 flex items-center justify-center text-button font-bold text-sm md:text-base">
                        {testimonial.author.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold text-white text-base md:text-lg">{testimonial.author}</h3>
                      <p className="text-button text-xs md:text-sm">{testimonial.role}</p>
                      {testimonial.results && (
                        <p className="text-green-500 text-xs md:text-sm font-bold mt-1">{testimonial.results}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <p className="text-gray-300 text-sm md:text-lg">{testimonial.quote}</p>
                    {testimonial.detail && (
                      <p className="text-gray-400 text-xs md:text-sm italic">{testimonial.detail}</p>
                    )}
                  </div>

                  {testimonial.stars && (
                    <div className="flex gap-1 mt-3 md:mt-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Colonne de droite */}
          <div className="flex flex-col gap-4 md:gap-6">
            {/* Widget testimonial.to */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-700/30"
            >
              <iframe 
                src="https://embed.testimonial.to/w/baptiste-piocelle/?animated=on&theme=light&shadowColor=ffffff"
                className="w-full h-[400px] md:h-[500px] border-0 rounded-lg"
                title="Témoignages en direct"
              />
            </motion.div>

            {/* 2 témoignages sous le widget */}
            {displayedTestimonials.slice(3, 5).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-gray-800/30 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-700/30 hover:border-button/30 transition-all duration-500"
              >
                <div className="relative z-10">
                  <div className="flex items-start gap-3 md:gap-4 mb-4">
                    {testimonial.image ? (
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden relative bg-gray-800/50">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          width={48}
                          height={48}
                          sizes="(max-width: 768px) 40px, 48px"
                          className="rounded-full object-cover"
                          priority={index < 3}
                          loading={index < 3 ? "eager" : "lazy"}
                          quality={90}
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-button/20 flex items-center justify-center text-button font-bold text-sm md:text-base">
                        {testimonial.author.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold text-white text-base md:text-lg">{testimonial.author}</h3>
                      <p className="text-button text-xs md:text-sm">{testimonial.role}</p>
                      {testimonial.results && (
                        <p className="text-green-500 text-xs md:text-sm font-bold mt-1">{testimonial.results}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <p className="text-gray-300 text-sm md:text-lg">{testimonial.quote}</p>
                    {testimonial.detail && (
                      <p className="text-gray-400 text-xs md:text-sm italic">{testimonial.detail}</p>
                    )}
                  </div>

                  {testimonial.stars && (
                    <div className="flex gap-1 mt-3 md:mt-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Preuve sociale supplémentaire */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm px-8 py-4 rounded-full border border-gray-700/30 shadow-lg">
            <div className="w-12 h-12 rounded-full bg-button/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-button" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-lg text-gray-300">
              <span className="text-3xl font-bold text-button">2.000+</span>
              <span className="ml-2">entrepreneurs formés depuis 4 ans</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 