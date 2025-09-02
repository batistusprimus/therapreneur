export default function EquipePage() {
  return (
    <div className="container-custom py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Notre équipe</h1>
      <p className="text-gray-600 mb-10">Présentation succincte des membres clés. À compléter.</p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-xl">
          <div className="h-24 w-24 bg-gray-200 rounded-full mb-4" />
          <h3 className="text-lg font-semibold">Nom 1</h3>
          <p className="text-gray-600">Rôle / expertise</p>
        </div>
        <div className="p-6 border rounded-xl">
          <div className="h-24 w-24 bg-gray-200 rounded-full mb-4" />
          <h3 className="text-lg font-semibold">Nom 2</h3>
          <p className="text-gray-600">Rôle / expertise</p>
        </div>
        <div className="p-6 border rounded-xl">
          <div className="h-24 w-24 bg-gray-200 rounded-full mb-4" />
          <h3 className="text-lg font-semibold">Nom 3</h3>
          <p className="text-gray-600">Rôle / expertise</p>
        </div>
      </div>
    </div>
  );
}



