export default function Home() {
  return (
    <section className="min-h-[70vh] flex items-center">
      <div className="container-custom py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Développez votre activité de thérapeute</h1>
          <p className="text-lg text-gray-600 mb-8">Thérapreneur accompagne les thérapeutes à structurer leur offre, attirer des clients et pérenniser leur entreprise.</p>
          <div className="flex gap-4">
            <a href="/services" className="btn">Découvrir nos services</a>
            <a href="/blog" className="btn btn-secondary">Lire le blog</a>
          </div>
        </div>
        <div className="bg-gray-100 rounded-xl min-h-64" />
      </div>
    </section>
  );
}