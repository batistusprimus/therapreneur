import { UsersTable } from "@/components/admin/users-table"

export default function UsersPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Gestion des utilisateurs</h1>
      <UsersTable />
    </div>
  )
} 