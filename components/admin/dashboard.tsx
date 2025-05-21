export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-900">Modules</h3>
        <p className="text-3xl font-bold text-blue-600 mt-2">0</p>
        <p className="text-sm text-gray-500 mt-1">Modules créés</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-900">Ressources</h3>
        <p className="text-3xl font-bold text-green-600 mt-2">0</p>
        <p className="text-sm text-gray-500 mt-1">Ressources disponibles</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-900">Utilisateurs</h3>
        <p className="text-3xl font-bold text-purple-600 mt-2">0</p>
        <p className="text-sm text-gray-500 mt-1">Utilisateurs inscrits</p>
      </div>
    </div>
  )
} 