import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, CheckCircle2, Activity, Database, Code } from "lucide-react"
import Link from "next/link"

export default function AgencyDetailPage({ params }: { params: { code: string } }) {
  // Mock data - in real app, fetch based on params.code
  const agencyData = {
    zra: {
      name: "Zambia Revenue Authority",
      code: "ZRA",
      description: "Tax collection and revenue management for the Republic of Zambia",
      apiEndpoint: "https://api.zra.gov.zm",
      status: "operational",
      uptime: "99.9%",
      avgResponse: "45ms",
      dailyRequests: "245K",
    },
  }

  const agency = agencyData[params.code as keyof typeof agencyData] || agencyData.zra

  return (
    <div className="min-h-screen bg-black text-white">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8">
        <Link href="/agencies">
          <Button variant="ghost" className="mb-6 text-zinc-400 hover:text-white">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Agencies
          </Button>
        </Link>

        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">{agency.code}</h1>
              <p className="text-xl text-zinc-400">{agency.name}</p>
            </div>
            <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
              <CheckCircle2 className="h-4 w-4 mr-1" />
              {agency.status}
            </Badge>
          </div>
          <p className="text-zinc-400 leading-relaxed">{agency.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-zinc-950 border-zinc-800">
            <CardContent className="p-6">
              <Activity className="h-8 w-8 text-emerald-500 mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{agency.uptime}</div>
              <div className="text-sm text-zinc-400">Uptime</div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-950 border-zinc-800">
            <CardContent className="p-6">
              <Database className="h-8 w-8 text-blue-500 mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{agency.avgResponse}</div>
              <div className="text-sm text-zinc-400">Avg Response Time</div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-950 border-zinc-800">
            <CardContent className="p-6">
              <Code className="h-8 w-8 text-yellow-500 mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{agency.dailyRequests}</div>
              <div className="text-sm text-zinc-400">Daily Requests</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-zinc-950 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-white">Integration Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="bg-zinc-900">
                <TabsTrigger value="overview" className="data-[state=active]:bg-zinc-800">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="endpoints" className="data-[state=active]:bg-zinc-800">
                  Endpoints
                </TabsTrigger>
                <TabsTrigger value="authentication" className="data-[state=active]:bg-zinc-800">
                  Authentication
                </TabsTrigger>
                <TabsTrigger value="examples" className="data-[state=active]:bg-zinc-800">
                  Examples
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">API Base URL</h3>
                  <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
                    <code className="text-sm text-emerald-400 font-mono">{agency.apiEndpoint}</code>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Supported Features</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      Tax compliance verification
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      TIN (Tax Identification Number) lookup
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      Payment history retrieval
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      Real-time data synchronization
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="endpoints" className="mt-6 space-y-3">
                <div className="border border-zinc-800 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">GET</Badge>
                    <code className="text-sm text-emerald-400 font-mono">/api/v1/tax/verify/{"{tin}"}</code>
                  </div>
                  <p className="text-sm text-zinc-400">Verify tax compliance status for a given TIN</p>
                </div>
                <div className="border border-zinc-800 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">GET</Badge>
                    <code className="text-sm text-emerald-400 font-mono">/api/v1/tax/history/{"{tin}"}</code>
                  </div>
                  <p className="text-sm text-zinc-400">Retrieve tax payment history</p>
                </div>
                <div className="border border-zinc-800 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">POST</Badge>
                    <code className="text-sm text-emerald-400 font-mono">/api/v1/tax/update</code>
                  </div>
                  <p className="text-sm text-zinc-400">Update tax information</p>
                </div>
              </TabsContent>

              <TabsContent value="authentication" className="mt-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">SSO Integration</h3>
                  <p className="text-sm text-zinc-400 mb-4">
                    This agency supports Single Sign-On authentication through the government interoperability platform.
                  </p>
                  <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
                    <code className="text-sm text-emerald-400 font-mono">{`Authorization: Bearer YOUR_SSO_TOKEN`}</code>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="examples" className="mt-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Example Request</h3>
                  <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
                    <code className="text-sm text-zinc-400 font-mono whitespace-pre">
                      {`const response = await fetch('${agency.apiEndpoint}/api/v1/tax/verify/TIN123456', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);`}
                    </code>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
