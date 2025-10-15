"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Key, Copy, Trash2, Plus } from "lucide-react"
import { useState } from "react"

export function ApiKeyManagement() {
  const [keys] = useState([
    {
      name: "Production Key",
      key: "zgi_prod_••••••••••••3x9k",
      created: "2024-01-15",
      lastUsed: "2 hours ago",
      status: "active",
    },
    {
      name: "Development Key",
      key: "zgi_dev_••••••••••••7m2p",
      created: "2024-02-01",
      lastUsed: "5 minutes ago",
      status: "active",
    },
    {
      name: "Testing Key",
      key: "zgi_test_••••••••••••4k8n",
      created: "2024-02-10",
      lastUsed: "1 day ago",
      status: "active",
    },
  ])

  return (
    <Card className="bg-zinc-950 border-zinc-800">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white">API Keys</CardTitle>
          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
            <Plus className="h-4 w-4 mr-1" />
            New Key
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {keys.map((apiKey, index) => (
            <div key={index} className="border border-zinc-800 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Key className="h-4 w-4 text-emerald-500" />
                  <span className="text-sm font-semibold text-white">{apiKey.name}</span>
                </div>
                <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-xs">
                  {apiKey.status}
                </Badge>
              </div>
              <div className="bg-zinc-900 rounded p-2 mb-3 flex items-center justify-between">
                <code className="text-xs text-zinc-400 font-mono">{apiKey.key}</code>
                <Button variant="ghost" size="icon" className="h-6 w-6 text-zinc-400 hover:text-white">
                  <Copy className="h-3 w-3" />
                </Button>
              </div>
              <div className="flex items-center justify-between text-xs text-zinc-500">
                <span>Last used: {apiKey.lastUsed}</span>
                <Button variant="ghost" size="icon" className="h-6 w-6 text-red-500 hover:text-red-400">
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
