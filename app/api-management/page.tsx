import { DashboardHeader } from "@/components/dashboard-header"
import { ApiEndpointsList } from "@/components/api-endpoints-list"
import { ApiDocumentation } from "@/components/api-documentation"
import { ApiKeyManagement } from "@/components/api-key-management"

export default function ApiManagementPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">API Management</h1>
          <p className="text-muted-foreground">Manage API endpoints, keys, and documentation for agency integrations</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <ApiEndpointsList />
          </div>
          <div>
            <ApiKeyManagement />
          </div>
        </div>

        <ApiDocumentation />
      </main>
    </div>
  )
}
