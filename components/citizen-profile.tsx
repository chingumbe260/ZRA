import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { User, CheckCircle2, FileText, CreditCard } from "lucide-react"

export function CitizenProfile() {
  return (
    <Card className="bg-zinc-950 border-zinc-800">
      <CardHeader>
        <CardTitle className="text-white">My Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-zinc-900 flex items-center justify-center">
            <User className="h-8 w-8 text-zinc-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">John Mwansa</h3>
            <p className="text-sm text-zinc-400">NRC: 123456/78/9</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between py-3 border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              <span className="text-sm text-zinc-400">Identity Verified</span>
            </div>
            <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-xs">Active</Badge>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-zinc-400">Tax Compliant</span>
            </div>
            <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-xs">Yes</Badge>
          </div>

          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <CreditCard className="h-5 w-5 text-yellow-500" />
              <span className="text-sm text-zinc-400">NAPSA Member</span>
            </div>
            <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-xs">Active</Badge>
          </div>
        </div>

        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">View Full Profile</Button>
      </CardContent>
    </Card>
  )
}
