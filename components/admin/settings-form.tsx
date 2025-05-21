"use client"

import { useState } from 'react'

interface Settings {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
}

export default function SettingsForm() {
  const [settings, setSettings] = useState<Settings>({
    siteName: 'Thérapreneur',
    siteDescription: 'Plateforme de formation pour thérapeutes',
    contactEmail: 'contact@therapreneur.com'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implémenter la sauvegarde des paramètres
    console.log('Settings saved:', settings)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="siteName" className="block text-sm font-medium text-gray-700">
          Nom du site
        </label>
        <input
          type="text"
          id="siteName"
          value={settings.siteName}
          onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="siteDescription" className="block text-sm font-medium text-gray-700">
          Description du site
        </label>
        <textarea
          id="siteDescription"
          value={settings.siteDescription}
          onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
          Email de contact
        </label>
        <input
          type="email"
          id="contactEmail"
          value={settings.contactEmail}
          onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Enregistrer les paramètres
        </button>
      </div>
    </form>
  )
} 