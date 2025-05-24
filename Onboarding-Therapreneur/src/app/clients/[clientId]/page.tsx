interface ClientPageProps {
  params: {
    clientId: string
  }
}

export default function ClientPage({ params }: ClientPageProps) {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Client {params.clientId}</h1>
      {/* Contenu de la page client */}
    </div>
  )
} 