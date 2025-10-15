import { CitizenHeader } from "@/components/citizen-header"
import { CitizenProfile } from "@/components/citizen-profile"
import { ServiceCards } from "@/components/service-cards"
import { RecentTransactions } from "@/components/recent-transactions"

export default function CitizenPortalPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CitizenHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Citizen Services Portal</h1>
          <p className="text-muted-foreground">Access all government services in one place</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <ServiceCards />
          </div>
          <div>
            <CitizenProfile />
          </div>
        </div>

        <RecentTransactions />
      </main>
    </div>
  )
}
