import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#DCB253] rounded-lg flex items-center justify-center">
                <span className="text-[#1A1A1A] font-black text-xl">T</span>
              </div>
              <span className="text-2xl font-black">Thérapreneur</span>
            </div>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              <strong className="text-[#DCB253]">L&apos;écosystème de transformation digitale thérapeutique.</strong><br />
              Nous transformons votre expertise thérapeutique en empire digital éthique, 
              sans jamais trahir vos valeurs humaines.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#DCB253]">150k€+</div>
                <div className="text-xs text-gray-400">CA mensuel documenté</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#DCB253]">500+</div>
                <div className="text-xs text-gray-400">Thérapeutes transformés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#DCB253]">90j</div>
                <div className="text-xs text-gray-400">Parcours de transformation</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#DCB253]">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#DCB253] transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#DCB253] transition-colors">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link href="/savoir-faire" className="text-gray-300 hover:text-[#DCB253] transition-colors">
                  Notre Méthode
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="text-gray-300 hover:text-[#DCB253] transition-colors">
                  L&apos;Équipe
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-[#DCB253] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Offres */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#DCB253]">Nos Offres</h4>
            <ul className="space-y-3">
              <li>
                <div className="text-gray-300">
                  <strong className="text-white">DIY</strong> - L&apos;Autonomie Guidée
                  <div className="text-sm text-[#DCB253]">5.000€</div>
                </div>
              </li>
              <li>
                <div className="text-gray-300">
                  <strong className="text-white">DWY</strong> - La Co-Création
                  <div className="text-sm text-[#DCB253]">10.500€</div>
                </div>
              </li>
              <li>
                <div className="text-gray-300">
                  <strong className="text-white">DFY</strong> - Clé en Main
                  <div className="text-sm text-[#DCB253]">21.000€</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4 text-[#DCB253]">Contact</h4>
              <div className="space-y-2">
                <p className="text-gray-300">
                  <strong>Email :</strong> 
                  <a href="mailto:contact@therapreneur.fr" className="text-[#DCB253] hover:underline ml-2">
                    contact@therapreneur.fr
                  </a>
                </p>
                <p className="text-gray-300">
                  <strong>Transparence totale :</strong> Chiffres et stratégies en temps réel
                </p>
              </div>
            </div>

          <div>
              <h4 className="text-lg font-bold mb-4 text-[#DCB253]">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/therapreneur" 
                  className="w-10 h-10 bg-[#DCB253] rounded-lg flex items-center justify-center hover:bg-[#DCB253]/80 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-[#1A1A1A]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/therapreneur" 
                  className="w-10 h-10 bg-[#DCB253] rounded-lg flex items-center justify-center hover:bg-[#DCB253]/80 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-[#1A1A1A]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/@therapreneur" 
                  className="w-10 h-10 bg-[#DCB253] rounded-lg flex items-center justify-center hover:bg-[#DCB253]/80 transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5 text-[#1A1A1A]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Thérapreneur. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-[#DCB253] transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-gray-400 hover:text-[#DCB253] transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/cgv" className="text-gray-400 hover:text-[#DCB253] transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>

        {/* Manifesto */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <blockquote className="text-lg text-gray-300 italic">
            &quot;Ensemble, créons le futur éthique de la thérapie digitale.&quot;
          </blockquote>
          <p className="text-[#DCB253] font-bold mt-2">
            Par des thérapeutes, pour des thérapeutes, avec une éthique inébranlable.
          </p>
        </div>
      </div>
    </footer>
  );
}