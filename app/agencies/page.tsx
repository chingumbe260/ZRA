import { DashboardHeader } from "@/components/dashboard-header"
import { AgencyCard } from "@/components/agency-card"
import { Building2 } from "lucide-react"

export default function AgenciesPage() {
  const agencies = [
    {
      name: "Zambia Revenue Authority",
      code: "ZRA",
      description: "Tax collection and revenue management",
      apiEndpoint: "https://api.zra.gov.zm",
      status: "operational",
      services: ["Tax Verification", "TIN Lookup", "Compliance Check", "Payment History"],
      contact: "integration@zra.gov.zm",
    },
    {
      name: "Patents and Companies Registration Agency",
      code: "PACRA",
      description: "Business registration and intellectual property",
      apiEndpoint: "https://api.pacra.gov.zm",
      status: "operational",
      services: ["Company Registration", "Business Lookup", "Director Information", "Annual Returns"],
      contact: "integration@pacra.gov.zm",
    },
    {
      name: "National Pension Scheme Authority",
      code: "NAPSA",
      description: "Social security and pension management",
      apiEndpoint: "https://api.napsa.gov.zm",
      status: "operational",
      services: ["Contribution Records", "Member Verification", "Employer Lookup", "Benefit Calculation"],
      contact: "integration@napsa.gov.zm",
    },
    {
      name: "Road Transport and Safety Agency",
      code: "RTSA",
      description: "Vehicle registration and driver licensing",
      apiEndpoint: "https://api.rtsa.gov.zm",
      status: "operational",
      services: ["Vehicle Registration", "License Verification", "Traffic Records", "Fitness Certificates"],
      contact: "integration@rtsa.gov.zm",
    },
    {
      name: "Ministry of Home Affairs",
      code: "MHA",
      description: "National identification and civil registration",
      apiEndpoint: "https://api.homeaffairs.gov.zm",
      status: "operational",
      services: ["Citizen Verification", "NRC Lookup", "Birth Records", "Death Records"],
      contact: "integration@homeaffairs.gov.zm",
    },
    {
      name: "Department of Immigration",
      code: "DOI",
      description: "Immigration and border control services",
      apiEndpoint: "https://api.immigration.gov.zm",
      status: "operational",
      services: ["Visa Status", "Work Permit Verification", "Travel History", "Passport Validation"],
      contact: "integration@immigration.gov.zm",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Building2 className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Government Agencies</h1>
          </div>
          <p className="text-muted-foreground">Integrated agencies and their available services</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {agencies.map((agency) => (
            <AgencyCard key={agency.code} agency={agency} />
          ))}
        </div>
      </main>
    </div>
  )
}
