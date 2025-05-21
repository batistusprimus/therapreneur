'use client';

interface Resource {
  id: string;
  title: string;
  type: 'video' | 'document' | 'link';
  url: string;
  moduleId: string;
}

interface ResourcesTableProps {
  resources: Resource[];
  onEdit: (resource: Resource) => void;
  onDelete: (resourceId: string) => void;
}

export default function ResourcesTable({ resources, onEdit, onDelete }: ResourcesTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Titre
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              URL
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {resources.map((resource) => (
            <tr key={resource.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {resource.title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    resource.type === 'video'
                      ? 'bg-red-100 text-red-800'
                      : resource.type === 'document'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {resource.type === 'video'
                    ? 'Vidéo'
                    : resource.type === 'document'
                    ? 'Document'
                    : 'Lien'}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-900"
                >
                  {resource.url}
                </a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => onEdit(resource)}
                  className="text-blue-600 hover:text-blue-900 mr-4"
                >
                  Modifier
                </button>
                <button
                  onClick={() => onDelete(resource.id)}
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