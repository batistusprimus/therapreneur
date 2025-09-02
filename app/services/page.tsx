export default function ServicesPage() {
  return (
    <div className="container-custom py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Nos services</h1>
      <p className="text-gray-600 mb-10">Une première ébauche pour présenter l’offre. À détailler par le dev.</p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Accompagnement individuel</h3>
          <p className="text-gray-600">Diagnostic, plan d’action, suivi. Résultats concrets.</p>
        </div>
        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Programme structuré</h3>
          <p className="text-gray-600">Méthode pas‑à‑pas pour poser les bases solides.</p>
        </div>
        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Acquisition et contenu</h3>
          <p className="text-gray-600">Mise en place de leviers pour attirer des clients.</p>
        </div>
      </div>
    </div>
  );
}



