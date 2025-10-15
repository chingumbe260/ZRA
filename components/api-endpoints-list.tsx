"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Copy, ExternalLink } from "lucide-react"
import { useState } from "react"

export function ApiEndpointsList() {
  const [searchQuery, setSearchQuery] = useState("")

  const endpoints = [
    {
      method: "GET",
      path: "/api/v1/citizens/{nrc}",
      description: "Retrieve citizen information by NRC",
      agency: "MHA",
      status: "active",
    },
    {
      method: "POST",
      path: "/api/v1/tax/verify",
      description: "Verify tax compliance status",
      agency: "ZRA",
      status: "active",
    },
    {
      method: "GET",
      path: "/api/v1/companies/{registration}",
      description: "Get company registration details",
      agency: "PACRA",
      status: "active",
    },
    {
      method: "POST",
      path: "/api/v1/pension/contributions",
      description: "Submit pension contribution records",
      agency: "NAPSA",
      status: "active",
    },
    {
      method: "GET",
      path: "/api/v1/vehicles/{plate}",
      description: "Retrieve vehicle registration information",
      agency: "RTSA",
      status: "active",
    },
    {
      method: "POST",
      path: "/api/v1/immigration/verify",
      description: "Verify immigration status",
      agency: "DOI",
      status: "active",
    },
    {
      method: "PUT",
      path: "/api/v1/citizens/{nrc}/update",
      description: "Update citizen information",
      agency: "MHA",
      status: "active",
    },
    {
      method: "GET",
      path: "/api/v1/tax/history/{tin}",
      description: "Get tax payment history",
      agency: "ZRA",
      status: "active",
    },
  ]

  const filteredEndpoints = endpoints.filter(
    (endpoint) =>
      endpoint.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.agency.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      case "POST":
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
      case "PUT":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "DELETE":
        return "bg-red-500/10 text-red-500 border-red-500/20"
      default:
        return "bg-zinc-500/10 text-zinc-500 border-zinc-500/20"
    }
  }

  return (
    <Card className="bg-zinc-950 border-zinc-800">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="text-white">API Endpoints</CardTitle>
          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
            Add Endpoint
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <Input
            placeholder="Search endpoints..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-zinc-900 border-zinc-800 text-white"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {filteredEndpoints.map((endpoint, index) => (
            <div key={index} className="border border-zinc-800 rounded-lg p-4 hover:border-zinc-700 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <Badge className={getMethodColor(endpoint.method)}>{endpoint.method}</Badge>
                  <code className="text-sm text-emerald-400 font-mono">{endpoint.path}</code>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white">
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <p className="text-sm text-zinc-400 mb-2">{endpoint.description}</p>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs border-zinc-700 text-zinc-400">
                  {endpoint.agency}
                </Badge>
                <Badge className="text-xs bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                  {endpoint.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
