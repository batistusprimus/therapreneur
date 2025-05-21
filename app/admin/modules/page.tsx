"use client"

import { useState } from "react"
import ModulesTable from "@/components/admin/modules-table"
import ModuleForm from "@/components/admin/module-form"

interface Module {
  id: string;
  title: string;
  description: string;
  status: 'draft' | 'published';
}

export default function ModulesPage() {
  const [modules, setModules] = useState<Module[]>([])
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingModule, setEditingModule] = useState<Module | undefined>()

  const handleEdit = (module: Module) => {
    setEditingModule(module)
    setIsFormOpen(true)
  }

  const handleDelete = (moduleId: string) => {
    setModules(modules.filter(m => m.id !== moduleId))
  }

  const handleSubmit = (module: Module) => {
    if (editingModule) {
      setModules(modules.map(m => m.id === module.id ? module : m))
    } else {
      setModules([...modules, { ...module, id: Date.now().toString() }])
    }
    setIsFormOpen(false)
    setEditingModule(undefined)
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestion des modules</h1>
        <button
          onClick={() => setIsFormOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Nouveau module
        </button>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              {editingModule ? 'Modifier le module' : 'Nouveau module'}
            </h2>
            <ModuleForm
              module={editingModule}
              onSubmit={handleSubmit}
              onCancel={() => {
                setIsFormOpen(false)
                setEditingModule(undefined)
              }}
            />
          </div>
        </div>
      )}

      <ModulesTable
        modules={modules}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
} 