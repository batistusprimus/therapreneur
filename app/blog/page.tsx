import { Metadata } from 'next';
import Link from 'next/link';
import { TargetIcon, BarChartIcon, SettingsIcon } from '@/components/Icons';
import { listPosts } from '@/lib/outrank';

export const metadata: Metadata = {
  title: 'Blog Thérapreneur | Stratégies et conseils pour thérapeutes entrepreneurs',
  description: 'Découvrez nos articles exclusifs sur la transformation digitale thérapeutique. Stratégies, études de cas, méthodes éprouvées pour scaler votre cabinet tout en préservant vos valeurs.',
  keywords: 'blog thérapreneur, articles transformation digitale thérapie, conseils thérapeute entrepreneur, stratégies marketing éthique santé, content marketing thérapeutique',
  openGraph: {
    title: 'Blog Thérapreneur | Transparence totale sur nos stratégies',
    description: 'Accédez aux coulisses de notre transformation : de 0 à 150k€/mois documenté en temps réel. Articles exclusifs pour thérapeutes entrepreneurs.',
  },
};

export default async function BlogIndexPage() {
  const posts = await listPosts().catch(() => []);

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#DCB253] via-[#F5F5F5] to-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-black mb-6 text-[#1A1A1A]">
              Blog{' '}
              <span className="text-[#DCB253]">Thérapreneur</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
              <strong>Transparence totale</strong> sur nos stratégies, chiffres et coulisses. 
              Les vrais secrets de la transformation digitale thérapeutique.
            </p>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 border border-[#DCB253]/20">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-black text-[#DCB253] mb-2">150k€+</div>
                  <p className="text-sm text-gray-600">Documenté en temps réel</p>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#DCB253] mb-2">300+</div>
                  <p className="text-sm text-gray-600">Transformations réussies</p>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#DCB253] mb-2">100%</div>
                  <p className="text-sm text-gray-600">Transparence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catégories */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-6 text-[#1A1A1A]">
              Nos Thématiques{' '}
              <span className="text-[#DCB253]">Exclusives</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Du concret, du testé, du vérifié. Nos articles vous donnent accès 
              aux vraies stratégies qui fonctionnent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-[#DCB253]/10 to-[#DCB253]/5 rounded-xl p-6 border border-[#DCB253]/20">
              <div className="mb-4 text-[#DCB253]">
                <TargetIcon size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#1A1A1A]">Stratégies</h3>
              <p className="text-sm text-gray-600">Positionnement, offres, scaling éthique</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#DCB253]/10 to-[#DCB253]/5 rounded-xl p-6 border border-[#DCB253]/20">
              <div className="mb-4 text-[#DCB253]">
                <BarChartIcon size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#1A1A1A]">Chiffres Réels</h3>
              <p className="text-sm text-gray-600">KPIs, revenus, conversions documentés</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#DCB253]/10 to-[#DCB253]/5 rounded-xl p-6 border border-[#DCB253]/20">
              <div className="mb-4 text-[#DCB253]">
                <SettingsIcon size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#1A1A1A]">Outils & Méthodes</h3>
              <p className="text-sm text-gray-600">Frameworks exclusifs, templates prêts</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#DCB253]/10 to-[#DCB253]/5 rounded-xl p-6 border border-[#DCB253]/20">
              <div className="mb-4 text-[#DCB253]">
                <BarChartIcon size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#1A1A1A]">Études de Cas</h3>
              <p className="text-sm text-gray-600">Transformations réelles, résultats prouvés</p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-6 text-[#1A1A1A]">
              Nos Derniers{' '}
              <span className="text-[#DCB253]">Articles</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              L&apos;intérieur de notre croissance documenté en temps réel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.length === 0 && (
              <div className="col-span-full text-center py-12">
                <div className="text-6xl mb-4 text-[#DCB253]">
                  <SettingsIcon size={36} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">Articles en préparation</h3>
                <p className="text-gray-600 mb-6">
                  Nous préparons du contenu exclusif avec une transparence totale 
                  sur nos stratégies et chiffres.
                </p>
                <Link 
                  href="/services" 
                  className="bg-[#DCB253] text-[#1A1A1A] px-6 py-3 rounded-lg font-bold hover:bg-[#DCB253]/90 transition-all"
                >
                  Découvrir nos offres en attendant
                </Link>
              </div>
        )}
        {posts.map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.slug}`} 
                className="bg-white rounded-xl p-6 shadow-lg border border-[#DCB253]/10 hover:border-[#DCB253]/30 transition-all hover:shadow-xl group"
              >
                <div className="mb-4">
                  <div className="text-sm text-[#DCB253] font-semibold mb-2">ARTICLE EXCLUSIF</div>
                  <h3 className="text-xl font-bold mb-3 text-[#1A1A1A] group-hover:text-[#DCB253] transition-colors">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Lire l&apos;article</span>
                  <span className="text-[#DCB253] group-hover:translate-x-1 transition-transform">→</span>
                </div>
          </Link>
        ))}
      </div>
    </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Ne ratez aucun{' '}
            <span className="text-[#DCB253]">Insight</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Recevez nos articles exclusifs et les coulisses de notre croissance 
            directement dans votre boîte mail.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-[#DCB253]/30 text-white placeholder-gray-400 focus:outline-none focus:border-[#DCB253]"
              />
              <button className="bg-[#DCB253] text-[#1A1A1A] px-6 py-3 rounded-lg font-bold hover:bg-[#DCB253]/90 transition-all">
                S&apos;abonner
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Transparence totale, pas de spam. Vous pouvez vous désabonner à tout moment.
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
            "@type": "Blog",
            "name": "Blog Thérapreneur",
            "description": "Articles exclusifs sur la transformation digitale thérapeutique",
            "url": "https://therapreneur.fr/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Thérapreneur"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://therapreneur.fr/blog"
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "Thérapeutes entrepreneurs"
            },
            "about": [
              "Transformation digitale thérapeutique",
              "Stratégies marketing éthique",
              "Scaling cabinet thérapeutique",
              "Business pour thérapeutes"
            ]
          })
        }}
      />
    </>
  );
}



