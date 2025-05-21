'use client';

interface Module {
  id: string;
  title: string;
  description: string;
  status: 'draft' | 'published';
}

interface ModulesTableProps {
  modules: Module[];
  onEdit: (module: Module) => void;
  onDelete: (moduleId: string) => void;
}

export default function ModulesTable({ modules, onEdit, onDelete }: ModulesTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Titre
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Statut
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {modules.map((module) => (
            <tr key={module.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {module.title}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {module.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    module.status === 'published'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {module.status === 'published' ? 'Publié' : 'Brouillon'}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => onEdit(module)}
                  className="text-blue-600 hover:text-blue-900 mr-4"
                >
                  Modifier
                </button>
                <button
                  onClick={() => onDelete(module.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 