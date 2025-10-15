import { Card, CardContent } from "@/components/ui/card"
import { Activity, Database, Zap, CheckCircle2 } from "lucide-react"

export function SystemMetrics() {
  const metrics = [
    {
      label: "Active Connections",
      value: "6/6",
      icon: Activity,
      status: "All Systems Operational",
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      label: "API Requests (24h)",
      value: "1.2M",
      icon: Database,
      status: "+12% from yesterday",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      label: "Avg Response Time",
      value: "48ms",
      icon: Zap,
      status: "Excellent Performance",
      color: "text-warning",
      bgColor: "bg-warning/10",
    },
    {
      label: "System Uptime",
      value: "99.9%",
      icon: CheckCircle2,
      status: "Last 30 days",
      color: "text-success",
      bgColor: "bg-success/10",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {metrics.map((metric) => (
        <Card key={metric.label} className="bg-card border-border shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-5">
              <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                <metric.icon className={`h-6 w-6 ${metric.color}`} />
              </div>
              <span className="text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full font-medium">
                {metric.status}
              </span>
            </div>
            <div className="text-3xl font-bold mb-2 text-foreground tracking-tight">{metric.value}</div>
            <div className="text-sm text-muted-foreground font-medium">{metric.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
