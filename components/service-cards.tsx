import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Car, Building2, CreditCard, Plane, Briefcase, ArrowRight } from "lucide-react"

export function ServiceCards() {
  const services = [
    {
      icon: FileText,
      title: "Tax Services",
      description: "View tax status, file returns, and make payments",
      agency: "ZRA",
      color: "text-emerald-500",
    },
    {
      icon: Building2,
      title: "Business Registration",
      description: "Register a business or check company information",
      agency: "PACRA",
      color: "text-blue-500",
    },
    {
      icon: CreditCard,
      title: "Pension Services",
      description: "Check contributions and benefit statements",
      agency: "NAPSA",
      color: "text-yellow-500",
    },
    {
      icon: Car,
      title: "Vehicle Services",
      description: "Renew registration, check fitness certificates",
      agency: "RTSA",
      color: "text-purple-500",
    },
    {
      icon: Plane,
      title: "Immigration",
      description: "Apply for passport, check visa status",
      agency: "DOI",
      color: "text-pink-500",
    },
    {
      icon: Briefcase,
      title: "Work Permits",
      description: "Apply for or renew work permits",
      agency: "MHA",
      color: "text-cyan-500",
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">Available Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <Card key={service.title} className="bg-zinc-950 border-zinc-800 hover:border-zinc-700 transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between">
                <service.icon className={`h-10 w-10 ${service.color}`} />
                <span className="text-xs text-zinc-500 bg-zinc-900 px-2 py-1 rounded">{service.agency}</span>
              </div>
              <CardTitle className="text-white text-lg">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-400 mb-4 leading-relaxed">{service.description}</p>
              <Button
                variant="ghost"
                className="w-full justify-between text-emerald-500 hover:text-emerald-400 hover:bg-zinc-900"
              >
                Access Service
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
