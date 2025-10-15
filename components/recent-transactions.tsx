import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, FileText } from "lucide-react"

export function RecentTransactions() {
  const transactions = [
    {
      title: "Tax Return Filed",
      agency: "ZRA",
      date: "2024-03-15",
      status: "completed",
      description: "Annual tax return for 2023",
    },
    {
      title: "Vehicle Registration Renewed",
      agency: "RTSA",
      date: "2024-03-10",
      status: "completed",
      description: "License plate: ABC-1234",
    },
    {
      title: "Pension Statement Requested",
      agency: "NAPSA",
      date: "2024-03-08",
      status: "processing",
      description: "Statement for period 2020-2024",
    },
    {
      title: "Business Certificate Downloaded",
      agency: "PACRA",
      date: "2024-03-05",
      status: "completed",
      description: "Certificate of incorporation",
    },
    {
      title: "Passport Application",
      agency: "DOI",
      date: "2024-03-01",
      status: "processing",
      description: "New passport application",
    },
  ]

  return (
    <Card className="bg-zinc-950 border-zinc-800">
      <CardHeader>
        <CardTitle className="text-white">Recent Activity</CardTitle>
        <p className="text-sm text-zinc-400">Your recent transactions and applications</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction, index) => (
            <div key={index} className="flex gap-4 pb-4 border-b border-zinc-800 last:border-0">
              <div className="flex-shrink-0 mt-1">
                {transaction.status === "completed" ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                ) : transaction.status === "processing" ? (
                  <Clock className="h-5 w-5 text-yellow-500" />
                ) : (
                  <FileText className="h-5 w-5 text-blue-500" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="text-sm font-semibold text-white">{transaction.title}</h4>
                  <Badge variant="outline" className="text-xs border-zinc-700 text-zinc-400 ml-2">
                    {transaction.agency}
                  </Badge>
                </div>
                <p className="text-sm text-zinc-400 mb-2">{transaction.description}</p>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-zinc-500">{transaction.date}</span>
                  <Badge
                    className={
                      transaction.status === "completed"
                        ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-xs"
                        : "bg-yellow-500/10 text-yellow-500 border-yellow-500/20 text-xs"
                    }
                  >
                    {transaction.status}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
