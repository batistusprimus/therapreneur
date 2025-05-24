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

interface Resource {
  id: string
  title: string
  type: string
  size: string
  moduleId: string
  module: {
    title: string
  }
  uploadDate: string
}

export function ResourcesTable() {
  const [resources, setResources] = useState<Resource[]>([])
  const [search, setSearch] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchResources()
  }, [])

  const fetchResources = async () => {
    try {
      const response = await fetch("/api/admin/resources")
      if (!response.ok) throw new Error("Erreur lors de la récupération des ressources")
      const data = await response.json()
      setResources(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue")
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (resourceId: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cette ressource ?")) return

    try {
      const response = await fetch("/api/admin/resources", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: resourceId }),
      })
      if (!response.ok) throw new Error("Erreur lors de la suppression")
      fetchResources() // Rafraîchir la liste
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue")
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  const formatFileSize = (size: string) => {
    const sizes = ["o", "Ko", "Mo", "Go"]
    const sizeNumber = parseFloat(size)
    const i = Math.floor(Math.log(sizeNumber) / Math.log(1024))
    return `${(sizeNumber / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`
  }

  const filteredResources = resources.filter(resource => {
    const matchesSearch = 
      resource.title.toLowerCase().includes(search.toLowerCase()) ||
      resource.module.title.toLowerCase().includes(search.toLowerCase())
    const matchesType = typeFilter === "all" || resource.type === typeFilter
    return matchesSearch && matchesType
  })

  if (loading) return <div>Chargement...</div>
  if (error) return <div className="text-red-500">Erreur: {error}</div>

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <Input
          placeholder="Rechercher une ressource..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtrer par type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les types</SelectItem>
            <SelectItem value="pdf">PDF</SelectItem>
            <SelectItem value="video">Vidéo</SelectItem>
            <SelectItem value="audio">Audio</SelectItem>
            <SelectItem value="image">Image</SelectItem>
            <SelectItem value="document">Document</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Titre</TableHead>
              <TableHead>Module</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Taille</TableHead>
              <TableHead>Date d'ajout</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredResources.map((resource) => (
              <TableRow key={resource.id}>
                <TableCell>{resource.title}</TableCell>
                <TableCell>{resource.module.title}</TableCell>
                <TableCell>{resource.type}</TableCell>
                <TableCell>{formatFileSize(resource.size)}</TableCell>
                <TableCell>{formatDate(resource.uploadDate)}</TableCell>
                <TableCell>
                  <button
                    onClick={() => handleDelete(resource.id)}
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
    </div>
  )
} 