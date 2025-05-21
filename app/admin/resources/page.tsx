"use client"

import { useState } from "react"
import ResourcesTable from "@/components/admin/resources-table"
import ResourceForm from "@/components/admin/resource-form"

interface Resource {
  id: string;
  title: string;
  type: 'video' | 'document' | 'link';
  url: string;
  moduleId: string;
}

// Données de test pour les modules
const mockModules = [
  { id: '1', title: 'Module 1' },
  { id: '2', title: 'Module 2' },
]

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([])
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingResource, setEditingResource] = useState<Resource | undefined>()

  const handleEdit = (resource: Resource) => {
    setEditingResource(resource)
    setIsFormOpen(true)
  }

  const handleDelete = (resourceId: string) => {
    setResources(resources.filter(r => r.id !== resourceId))
  }

  const handleSubmit = (resource: Resource) => {
    if (editingResource) {
      setResources(resources.map(r => r.id === resource.id ? resource : r))
    } else {
      setResources([...resources, { ...resource, id: Date.now().toString() }])
    }
    setIsFormOpen(false)
    setEditingResource(undefined)
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestion des ressources</h1>
        <button
          onClick={() => setIsFormOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Nouvelle ressource
        </button>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              {editingResource ? 'Modifier la ressource' : 'Nouvelle ressource'}
            </h2>
            <ResourceForm
              resource={editingResource}
              modules={mockModules}
              onSubmit={handleSubmit}
              onCancel={() => {
                setIsFormOpen(false)
                setEditingResource(undefined)
              }}
            />
          </div>
        </div>
      )}

      <ResourcesTable
        resources={resources}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
} 