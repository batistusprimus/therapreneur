export default function SavoirFairePage() {
  return (
    <div className="container-custom py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Notre savoir‑faire</h1>
      <p className="text-gray-600 mb-10">Méthode, frameworks et résultats. À détailler par la suite.</p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Stratégie</h3>
          <p className="text-gray-600">Positionnement, offre, message.</p>
        </div>
        <div className="p-6 border rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Acquisition</h3>
          <p className="text-gray-600">Contenu, partenariats, campagnes.</p>
        </div>
        <div className="p-6 border rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Conversion</h3>
          <p className="text-gray-600">Parcours, offres, preuves.</p>
        </div>
      </div>
    </div>
  );
}



