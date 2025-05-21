'use client';

import { useState } from 'react';

interface Resource {
  id?: string;
  title: string;
  type: 'video' | 'document' | 'link';
  url: string;
  moduleId: string;
}

interface ResourceFormProps {
  resource?: Resource;
  modules: { id: string; title: string }[];
  onSubmit: (resource: Resource) => void;
  onCancel: () => void;
}

export default function ResourceForm({
  resource,
  modules,
  onSubmit,
  onCancel,
}: ResourceFormProps) {
  const [formData, setFormData] = useState<Resource>(
    resource || {
      title: '',
      type: 'link',
      url: '',
      moduleId: modules[0]?.id || '',
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Titre
        </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
          Type
        </label>
        <select
          id="type"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value as Resource['type'] })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="video">Vidéo</option>
          <option value="document">Document</option>
          <option value="link">Lien</option>
        </select>
      </div>

      <div>
        <label htmlFor="url" className="block text-sm font-medium text-gray-700">
          URL
        </label>
        <input
          type="url"
          id="url"
          value={formData.url}
          onChange={(e) => setFormData({ ...formData, url: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="moduleId" className="block text-sm font-medium text-gray-700">
          Module
        </label>
        <select
          id="moduleId"
          value={formData.moduleId}
          onChange={(e) => setFormData({ ...formData, moduleId: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
          {modules.map((module) => (
            <option key={module.id} value={module.id}>
              {module.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
        >
          {resource ? 'Modifier' : 'Créer'}
        </button>
      </div>
    </form>
  );
} 