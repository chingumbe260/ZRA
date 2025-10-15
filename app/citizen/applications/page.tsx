import { CitizenHeader } from "@/components/citizen-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Plus, Clock, CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react"

export default function ApplicationsPage() {
  const applications = [
    {
      id: "APP-2025-0234",
      title: "Business License Renewal",
      agency: "PACRA",
      submittedDate: "2025-01-15",
      status: "in_progress",
      progress: 65,
      lastUpdate: "2025-01-28",
      estimatedCompletion: "2025-02-10",
    },
    {
      id: "APP-2025-0189",
      title: "Tax Clearance Certificate",
      agency: "ZRA",
      submittedDate: "2025-01-10",
      status: "approved",
      progress: 100,
      lastUpdate: "2025-01-20",
      estimatedCompletion: "Completed",
    },
    {
      id: "APP-2025-0156",
      title: "Driver's License Renewal",
      agency: "RTSA",
      submittedDate: "2024-12-20",
      status: "pending_payment",
      progress: 80,
      lastUpdate: "2025-01-05",
      estimatedCompletion: "Pending payment",
    },
    {
      id: "APP-2024-1987",
      title: "Passport Application",
      agency: "Ministry of Home Affairs",
      submittedDate: "2024-11-15",
      status: "rejected",
      progress: 0,
      lastUpdate: "2024-11-20",
      estimatedCompletion: "N/A",
    },
  ]

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "approved":
        return {
          label: "Approved",
          color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
          icon: <CheckCircle2 className="h-4 w-4" />,
        }
      case "in_progress":
        return {
          label: "In Progress",
          color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
          icon: <Clock className="h-4 w-4" />,
        }
      case "pending_payment":
        return {
          label: "Pending Payment",
          color: "bg-amber-500/10 text-amber-500 border-amber-500/20",
          icon: <AlertCircle className="h-4 w-4" />,
        }
      case "rejected":
        return {
          label: "Rejected",
          color: "bg-red-500/10 text-red-500 border-red-500/20",
          icon: <XCircle className="h-4 w-4" />,
        }
      default:
        return {
          label: "Unknown",
          color: "bg-slate-500/10 text-slate-500 border-slate-500/20",
          icon: <Clock className="h-4 w-4" />,
        }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <CitizenHeader />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">My Applications</h1>
            <p className="text-slate-400">Track and manage your government service applications</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            New Application
          </Button>
        </div>

        {/* Application Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-slate-900/50 border-slate-800">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Total Applications</p>
                  <p className="text-2xl font-bold text-white">{applications.length}</p>
                </div>
                <FileText className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">In Progress</p>
                  <p className="text-2xl font-bold text-blue-500">
                    {applications.filter((a) => a.status === "in_progress").length}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Approved</p>
                  <p className="text-2xl font-bold text-emerald-500">
                    {applications.filter((a) => a.status === "approved").length}
                  </p>
                </div>
                <CheckCircle2 className="h-8 w-8 text-emerald-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Needs Action</p>
                  <p className="text-2xl font-bold text-amber-500">
                    {applications.filter((a) => a.status === "pending_payment").length}
                  </p>
                </div>
                <AlertCircle className="h-8 w-8 text-amber-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Applications List */}
        <div className="space-y-4">
          {applications.map((app) => {
            const statusConfig = getStatusConfig(app.status)
            return (
              <Card key={app.id} className="bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">{app.title}</h3>
                        <Badge className={statusConfig.color}>
                          {statusConfig.icon}
                          <span className="ml-1">{statusConfig.label}</span>
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-400">{app.agency}</p>
                    </div>
                    <Button variant="ghost" className="text-blue-400 hover:text-blue-300">
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                    <div>
                      <p className="text-slate-500">Application ID</p>
                      <p className="text-slate-300 font-medium">{app.id}</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Submitted</p>
                      <p className="text-slate-300 font-medium">{app.submittedDate}</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Last Update</p>
                      <p className="text-slate-300 font-medium">{app.lastUpdate}</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Est. Completion</p>
                      <p className="text-slate-300 font-medium">{app.estimatedCompletion}</p>
                    </div>
                  </div>

                  {app.status === "in_progress" && (
                    <div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-slate-400">Progress</span>
                        <span className="text-slate-300 font-medium">{app.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full transition-all"
                          style={{ width: `${app.progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {app.status === "pending_payment" && (
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 mt-2">Complete Payment</Button>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </main>
    </div>
  )
}
