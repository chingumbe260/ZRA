import { DashboardHeader } from "@/components/dashboard-header"
import { AgencyStatusGrid } from "@/components/agency-status-grid"
import { DataExchangeChart } from "@/components/data-exchange-chart"
import { RecentActivity } from "@/components/recent-activity"
import { SystemMetrics } from "@/components/system-metrics"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-6 py-8 max-w-7xl">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-3 text-foreground tracking-tight">
            National Interoperability Dashboard
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Centralized monitoring and management of cross-agency data exchange infrastructure
          </p>
        </div>

        <SystemMetrics />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <DataExchangeChart />
          </div>
          <div>
            <RecentActivity />
          </div>
        </div>

        <AgencyStatusGrid />
      </main>
    </div>
  )
}
