import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertCircle, Database, Activity, TrendingUp } from "lucide-react"

export function AgencyStatusGrid() {
  const agencies = [
    {
      name: "Zambia Revenue Authority",
      code: "ZRA",
      status: "operational",
      apiEndpoint: "api.zra.gov.zm",
      lastSync: "2 minutes ago",
      requests: "245K",
      uptime: "99.9%",
      description: "Tax administration and revenue collection",
    },
    {
      name: "Patents and Companies Registration Agency",
      code: "PACRA",
      status: "operational",
      apiEndpoint: "api.pacra.gov.zm",
      lastSync: "5 minutes ago",
      requests: "189K",
      uptime: "99.8%",
      description: "Business registration and intellectual property",
    },
    {
      name: "National Pension Scheme Authority",
      code: "NAPSA",
      status: "operational",
      apiEndpoint: "api.napsa.gov.zm",
      lastSync: "1 minute ago",
      requests: "312K",
      uptime: "100%",
      description: "Social security and pension management",
    },
    {
      name: "Road Transport and Safety Agency",
      code: "RTSA",
      status: "operational",
      apiEndpoint: "api.rtsa.gov.zm",
      lastSync: "3 minutes ago",
      requests: "428K",
      uptime: "99.7%",
      description: "Vehicle registration and driver licensing",
    },
    {
      name: "Ministry of Home Affairs",
      code: "MHA",
      status: "operational",
      apiEndpoint: "api.homeaffairs.gov.zm",
      lastSync: "4 minutes ago",
      requests: "156K",
      uptime: "99.9%",
      description: "National identification and civil registration",
    },
    {
      name: "Department of Immigration",
      code: "DOI",
      status: "operational",
      apiEndpoint: "api.immigration.gov.zm",
      lastSync: "Just now",
      requests: "203K",
      uptime: "99.8%",
      description: "Immigration services and border control",
    },
  ]

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground tracking-tight mb-2">Agency Integration Status</h2>
        <p className="text-muted-foreground">Real-time monitoring of connected government agencies</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agencies.map((agency) => (
          <Card
            key={agency.code}
            className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg group"
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <CardTitle className="text-foreground text-xl mb-1 font-bold">{agency.code}</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">{agency.name}</p>
                </div>
                {agency.status === "operational" ? (
                  <Badge className="bg-success/10 text-success border-success/20 hover:bg-success/20">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Active
                  </Badge>
                ) : (
                  <Badge className="bg-destructive/10 text-destructive border-destructive/20">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Issue
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{agency.description}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm bg-muted p-3 rounded-lg">
                <Database className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground font-mono text-xs truncate">{agency.apiEndpoint}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Activity className="h-4 w-4 text-muted-foreground" />
                <span className="text-foreground font-medium">Last sync: </span>
                <span className="text-muted-foreground">{agency.lastSync}</span>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <div className="text-xs text-muted-foreground mb-1.5 font-medium">Requests (24h)</div>
                  <div className="flex items-center gap-1">
                    <div className="text-xl font-bold text-foreground">{agency.requests}</div>
                    <TrendingUp className="h-3 w-3 text-success" />
                  </div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1.5 font-medium">Uptime</div>
                  <div className="text-xl font-bold text-success">{agency.uptime}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
