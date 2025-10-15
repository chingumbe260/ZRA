import { LoginForm } from "@/components/login-form"
import { Shield } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <Shield className="h-10 w-10 text-primary" />
            <span className="text-2xl font-bold">Zambia Gov Interop</span>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Authentication</h1>
          <p className="text-muted-foreground">Sign in to access the government interoperability platform</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
