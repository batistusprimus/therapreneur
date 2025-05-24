"use client"

import { useState, useEffect } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface Module {
  id: string
  title: string
  description: string | null
  status: string
  lessons: number
  duration: string
  students: number
  _count: {
    resources: number
  }
}

export function ModulesTable() {
  const [modules, setModules] = useState<Module[]>([])
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null)
  const [showStatusConfirm, setShowStatusConfirm] = useState<{ id: string; status: string } | null>(null)

  useEffect(() => {
    fetchModules()
  }, [])

  const fetchModules = async () => {
    try {
      const response = await fetch("/api/admin/modules")
      if (!response.ok) throw new Error("Erreur lors de la récupération des modules")
      const data = await response.json()
      setModules(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue")
    } finally {
      setLoading(false)
    }
  }

  const handleStatusChange = async (moduleId: string, newStatus: string) => {
    setShowStatusConfirm({ id: moduleId, status: newStatus })
  }

  const confirmStatusChange = async () => {
    if (!showStatusConfirm) return

    try {
      const response = await fetch("/api/admin/modules", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: showStatusConfirm.id, status: showStatusConfirm.status }),
      })
      if (!response.ok) throw new Error("Erreur lors de la mise à jour du statut")
      fetchModules() // Rafraîchir la liste
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue")
    } finally {
      setShowStatusConfirm(null)
    }
  }

  const handleDelete = async (moduleId: string) => {
    setShowDeleteConfirm(moduleId)
  }

  const confirmDelete = async () => {
    if (!showDeleteConfirm) return

    try {
      const response = await fetch("/api/admin/modules", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: showDeleteConfirm }),
      })
      if (!response.ok) throw new Error("Erreur lors de la suppression")
      fetchModules() // Rafraîchir la liste
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue")
    } finally {
      setShowDeleteConfirm(null)
    }
  }

  const filteredModules = modules.filter(module => {
    const matchesSearch = module.title.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === "all" || module.status === statusFilter
    return matchesSearch && matchesStatus
  })

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredModules.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredModules.length / itemsPerPage)

  if (loading) return <div>Chargement...</div>
  if (error) return <div className="text-red-500">Erreur: {error}</div>

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <Input
          placeholder="Rechercher un module..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtrer par statut" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les statuts</SelectItem>
            <SelectItem value="published">Publié</SelectItem>
            <SelectItem value="draft">Brouillon</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Titre</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Leçons</TableHead>
              <TableHead>Durée</TableHead>
              <TableHead>Étudiants</TableHead>
              <TableHead>Ressources</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((module) => (
              <TableRow key={module.id}>
                <TableCell>{module.title}</TableCell>
                <TableCell>
                  <Select
                    value={module.status}
                    onValueChange={(value) => handleStatusChange(module.id, value)}
                  >
                    <SelectTrigger className="w-[120px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="published">Publié</SelectItem>
                      <SelectItem value="draft">Brouillon</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>{module.lessons}</TableCell>
                <TableCell>{module.duration}</TableCell>
                <TableCell>{module.students}</TableCell>
                <TableCell>{module._count.resources}</TableCell>
                <TableCell>
                  <button
                    onClick={() => handleDelete(module.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Supprimer
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Précédent
          </Button>
          <span className="py-2">
            Page {currentPage} sur {totalPages}
          </span>
          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Suivant
          </Button>
        </div>
      )}

      {/* Confirmation de suppression */}
      {showDeleteConfirm && (
        <Dialog open={!!showDeleteConfirm} onOpenChange={() => setShowDeleteConfirm(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirmer la suppression</DialogTitle>
            </DialogHeader>
            <p>Êtes-vous sûr de vouloir supprimer ce module ? Cette action est irréversible.</p>
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setShowDeleteConfirm(null)}>
                Annuler
              </Button>
              <Button variant="destructive" onClick={confirmDelete}>
                Supprimer
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Confirmation de changement de statut */}
      {showStatusConfirm && (
        <Dialog open={!!showStatusConfirm} onOpenChange={() => setShowStatusConfirm(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirmer le changement de statut</DialogTitle>
            </DialogHeader>
            <p>
              Êtes-vous sûr de vouloir changer le statut de ce module en{" "}
              {showStatusConfirm.status === "published" ? "publié" : "brouillon"} ?
            </p>
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setShowStatusConfirm(null)}>
                Annuler
              </Button>
              <Button onClick={confirmStatusChange}>
                Confirmer
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
} 