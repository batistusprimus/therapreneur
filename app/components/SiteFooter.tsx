import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="bg-primary border-t border-gray-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl mb-4">Thérapreneur</h3>
            <p className="text-sm text-gray-400">Nous aidons les thérapeutes à développer leur activité.</p>
          </div>
          <div>
            <h4 className="text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-title transition-colors">Accueil</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-title transition-colors">Services</Link></li>
              <li><Link href="/equipe" className="text-gray-400 hover:text-title transition-colors">Équipe</Link></li>
              <li><Link href="/savoir-faire" className="text-gray-400 hover:text-title transition-colors">Savoir‑faire</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-title transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg mb-4">Contact</h4>
            <p className="text-gray-400">contact@therapreneur.fr</p>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Thérapreneur. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}



