import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ExternalLink, Mail, Database } from "lucide-react"
import Link from "next/link"

interface AgencyCardProps {
  agency: {
    name: string
    code: string
    description: string
    apiEndpoint: string
    status: string
    services: string[]
    contact: string
  }
}

export function AgencyCard({ agency }: AgencyCardProps) {
  return (
    <Card className="bg-zinc-950 border-zinc-800 hover:border-zinc-700 transition-colors">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <div>
            <CardTitle className="text-white text-2xl mb-1">{agency.code}</CardTitle>
            <p className="text-sm text-zinc-400">{agency.name}</p>
          </div>
          <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            {agency.status}
          </Badge>
        </div>
        <p className="text-sm text-zinc-400 leading-relaxed">{agency.description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-sm">
          <Database className="h-4 w-4 text-zinc-500" />
          <code className="text-xs text-zinc-400 font-mono">{agency.apiEndpoint}</code>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-2">Available Services</h4>
          <div className="flex flex-wrap gap-2">
            {agency.services.map((service) => (
              <Badge key={service} variant="outline" className="text-xs border-zinc-700 text-zinc-400">
                {service}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 pt-4 border-t border-zinc-800">
          <Mail className="h-4 w-4 text-zinc-500" />
          <span className="text-sm text-zinc-400">{agency.contact}</span>
        </div>

        <div className="flex gap-2 pt-2">
          <Link href={`/agencies/${agency.code.toLowerCase()}`} className="flex-1">
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">View Details</Button>
          </Link>
          <Button
            variant="outline"
            size="icon"
            className="border-zinc-700 text-zinc-400 hover:text-white bg-transparent"
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
