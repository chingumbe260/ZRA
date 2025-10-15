import Link from 'next/link'
import { Database, Lock, Users, Shield } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <header className="border-b" style={{background:'#ffffff'}}>
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8" />
            <div>
              <div className="text-lg font-semibold">Zambia Gov Interoperability</div>
              <div className="text-sm text-muted">Connected services for citizens</div>
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/dashboard" className="text-sm text-muted">Dashboard</Link>
            <Link href="/agencies" className="text-sm text-muted">Agencies</Link>
            <Link href="/login" className="btn btn-outline">Sign In</Link>
          </nav>
        </div>
      </header>

      <main className="py-20">
        <div className="container">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">A modern platform for connected government</h1>
              <p className="lead mb-6">Secure data exchange, unified authentication, and a citizen-first portal — simplified for scale and reliability.</p>
              <div className="flex gap-3">
                <Link href="/login" className="btn btn-primary">Get Started</Link>
                <Link href="/dashboard" className="btn btn-outline">View Dashboard</Link>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="card">
                  <div className="flex items-center gap-3 mb-2"><Database className="w-6 h-6" /><strong>API Exchange</strong></div>
                  <p className="text-muted">Real-time API-driven integrations between agencies.</p>
                </div>
                <div className="card">
                  <div className="flex items-center gap-3 mb-2"><Lock className="w-6 h-6" /><strong>SSO</strong></div>
                  <p className="text-muted">Single sign-on for secure, unified access.</p>
                </div>
                <div className="card">
                  <div className="flex items-center gap-3 mb-2"><Users className="w-6 h-6" /><strong>Citizen Portal</strong></div>
                  <p className="text-muted">Access multiple services through a single portal.</p>
                </div>
                <div className="card">
                  <div className="flex items-center gap-3 mb-2"><Shield className="w-6 h-6" /><strong>Compliance</strong></div>
                  <p className="text-muted">Security-first design for data protection.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="py-20">
          <div className="container">
            <h2 className="text-2xl font-semibold mb-6">Connected Agencies</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {['ZRA','PACRA','NAPSA','RTSA','Home Affairs','Immigration'].map(a => (
                <div key={a} className="card text-center text-muted">{a}</div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t">
        <div className="container text-center text-muted">© {new Date().getFullYear()} Zambia Gov Interoperability</div>
      </footer>
    </div>
  )
}
