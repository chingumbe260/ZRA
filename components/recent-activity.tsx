import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ArrowRightLeft, CheckCircle2, Clock } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      type: "sync",
      from: "ZRA",
      to: "PACRA",
      description: "Tax compliance data synchronized",
      time: "2 min ago",
      status: "completed",
    },
    {
      type: "sync",
      from: "RTSA",
      to: "MHA",
      description: "Vehicle registration updated",
      time: "5 min ago",
      status: "completed",
    },
    {
      type: "sync",
      from: "NAPSA",
      to: "ZRA",
      description: "Employee contribution records",
      time: "8 min ago",
      status: "completed",
    },
    {
      type: "sync",
      from: "DOI",
      to: "MHA",
      description: "Immigration status verification",
      time: "12 min ago",
      status: "completed",
    },
    {
      type: "sync",
      from: "PACRA",
      to: "ZRA",
      description: "Business registration data",
      time: "15 min ago",
      status: "completed",
    },
    {
      type: "sync",
      from: "MHA",
      to: "DOI",
      description: "Citizen identity verification",
      time: "18 min ago",
      status: "completed",
    },
  ]

  return (
    <Card className="bg-zinc-950 border-zinc-800">
      <CardHeader>
        <CardTitle className="text-white">Recent Activity</CardTitle>
        <p className="text-sm text-zinc-400">Latest data exchanges</p>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex gap-3 pb-4 border-b border-zinc-800 last:border-0">
                <div className="flex-shrink-0 mt-1">
                  {activity.status === "completed" ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  ) : (
                    <Clock className="h-5 w-5 text-yellow-500" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-white">{activity.from}</span>
                    <ArrowRightLeft className="h-3 w-3 text-zinc-500" />
                    <span className="text-sm font-semibold text-white">{activity.to}</span>
                  </div>
                  <p className="text-sm text-zinc-400 mb-1">{activity.description}</p>
                  <p className="text-xs text-zinc-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
