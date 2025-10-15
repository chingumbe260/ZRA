import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Database, Users, Lock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Zambia Gov Interop</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link href="/agencies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Agencies
            </Link>
            <Link href="/citizen" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Citizen Portal
            </Link>
            <Link href="/login">
              <Button variant="outline">Sign In</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-bold mb-6 text-balance leading-tight">
            The complete platform for connected government.
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl text-pretty leading-relaxed">
            Seamless data exchange across government agencies. Securely integrate, share, and manage citizen data with
            API-driven interoperability and Single Sign-On authentication.
          </p>
          <div className="flex gap-4">
            <Link href="/login">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline">
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="py-12 px-6">
              <div className="text-4xl font-bold mb-2">6+</div>
              <div className="text-muted-foreground">Connected Agencies</div>
            </div>
            <div className="py-12 px-6">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-muted-foreground">System Uptime</div>
            </div>
            <div className="py-12 px-6">
              <div className="text-4xl font-bold mb-2">50ms</div>
              <div className="text-muted-foreground">API Response Time</div>
            </div>
            <div className="py-12 px-6">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-muted-foreground">Data Security</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-border rounded-lg p-8 bg-card">
            <Database className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">API-Driven Exchange</h3>
            <p className="text-muted-foreground leading-relaxed">
              RESTful APIs enable real-time data synchronization across all government agencies with secure
              authentication.
            </p>
          </div>
          <div className="border border-border rounded-lg p-8 bg-card">
            <Lock className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Single Sign-On</h3>
            <p className="text-muted-foreground leading-relaxed">
              Unified authentication system allows government officials to access all agency systems with one secure
              login.
            </p>
          </div>
          <div className="border border-border rounded-lg p-8 bg-card">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Citizen-Centric</h3>
            <p className="text-muted-foreground leading-relaxed">
              Citizens can access services from multiple agencies through a unified portal with their data seamlessly
              shared.
            </p>
          </div>
        </div>
      </section>

      {/* Connected Agencies */}
      <section className="container mx-auto px-4 py-24 border-t border-border">
        <h2 className="text-3xl font-bold mb-12">Connected Agencies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {["ZRA", "PACRA", "NAPSA", "RTSA", "Home Affairs", "Immigration"].map((agency) => (
            <div key={agency} className="flex items-center justify-center p-6 border border-border rounded-lg bg-card">
              <span className="text-lg font-semibold text-muted-foreground">{agency}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
