import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-gray-800">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl mb-6">BPC MASTERCLASS</h3>
            <p className="text-sm text-gray-400 mb-4">
              Notre produit ultime, mis à disposition gratuitement et sans inscription 
              pour les entrepreneurs et solopreneurs du B2B.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/th%C3%A9o-gorbinkoff-aa70a8254/" aria-label="LinkedIn" className="text-gray-400 hover:text-title">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/theo_osteopathe/" aria-label="Instagram" className="text-gray-400 hover:text-title">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@theo.lifeofceo/videos" aria-label="YouTube" className="text-gray-400 hover:text-title">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-title transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/masterclass" className="text-gray-400 hover:text-title transition-colors">
                  Masterclass
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="text-gray-400 hover:text-title transition-colors">
                  Catalogue
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-title transition-colors">
                  Diagnostic B2B Gratuit
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-gray-400 hover:text-title transition-colors">
                  Media
                </Link>
              </li>
              <li>
                <Link href="/bpc-group" className="text-gray-400 hover:text-title transition-colors">
                  BPC GROUP
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Baptiste@bpcorp.eu
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-title transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Réserver un appel de diagnostic B2B gratuit
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg mb-6">Ressources</h4>
            <div className="space-y-4">
              <Link href="/catalogue" className="block text-gray-400 hover:text-title transition-colors">
                Catalogue
              </Link>
              <Link href="/#testimonials" className="block text-gray-400 hover:text-title transition-colors">
                Témoignages
              </Link>
              <Link href="/#faq" className="block text-gray-400 hover:text-title transition-colors">
                FAQ
              </Link>
              <Link href="/mentions-legales" className="block text-gray-400 hover:text-title transition-colors">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} BPC Masterclass. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
} 