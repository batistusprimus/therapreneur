"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"

export function SettingsForm() {
  const [notionToken, setNotionToken] = useState("")
  const [notionDatabaseId, setNotionDatabaseId] = useState("")
  const [discordWebhook, setDiscordWebhook] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implémenter la sauvegarde des paramètres
    console.log({
      notionToken,
      notionDatabaseId,
      discordWebhook,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Intégration Notion</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="notionToken" className="block text-sm font-medium mb-1">
              Token d'accès Notion
            </label>
            <Input
              id="notionToken"
              type="password"
              value={notionToken}
              onChange={(e) => setNotionToken(e.target.value)}
              placeholder="Entrez votre token Notion"
            />
          </div>
          <div>
            <label htmlFor="notionDatabaseId" className="block text-sm font-medium mb-1">
              ID de la base de données Notion
            </label>
            <Input
              id="notionDatabaseId"
              value={notionDatabaseId}
              onChange={(e) => setNotionDatabaseId(e.target.value)}
              placeholder="Entrez l'ID de votre base de données"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Intégration Discord</h2>
        <div>
          <label htmlFor="discordWebhook" className="block text-sm font-medium mb-1">
            URL du webhook Discord
          </label>
          <Input
            id="discordWebhook"
            type="password"
            value={discordWebhook}
            onChange={(e) => setDiscordWebhook(e.target.value)}
            placeholder="Entrez l'URL du webhook Discord"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
        >
          Enregistrer les paramètres
        </button>
      </div>
    </form>
  )
} 