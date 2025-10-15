"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, User, Shield } from "lucide-react"
import { useRouter } from "next/navigation"

export function LoginForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent, userType: string) => {
    e.preventDefault()
    setLoading(true)

    // Simulate authentication
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (userType === "agency") {
      router.push("/dashboard")
    } else {
      router.push("/citizen")
    }
  }

  return (
    <Card className="bg-card border-border shadow-xl">
      <CardHeader className="space-y-3 pb-6">
        <div className="flex items-center gap-2 text-primary">
          <Shield className="h-5 w-5" />
          <span className="text-sm font-semibold">Secure Government Portal</span>
        </div>
        <CardTitle className="text-2xl font-bold text-foreground">Authentication</CardTitle>
        <CardDescription className="text-base text-muted-foreground">
          Access the National Interoperability Platform
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="agency" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-muted h-12">
            <TabsTrigger
              value="agency"
              className="data-[state=active]:bg-background data-[state=active]:shadow-sm font-medium"
            >
              <Building2 className="h-4 w-4 mr-2" />
              Agency Official
            </TabsTrigger>
            <TabsTrigger
              value="citizen"
              className="data-[state=active]:bg-background data-[state=active]:shadow-sm font-medium"
            >
              <User className="h-4 w-4 mr-2" />
              Citizen
            </TabsTrigger>
          </TabsList>

          <TabsContent value="agency" className="mt-6">
            <form onSubmit={(e) => handleLogin(e, "agency")} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="agency-email" className="text-sm font-semibold text-foreground">
                  Official Email Address
                </Label>
                <Input
                  id="agency-email"
                  type="email"
                  placeholder="official@agency.gov.zm"
                  className="bg-background border-input h-11"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="agency-password" className="text-sm font-semibold text-foreground">
                  Password
                </Label>
                <Input id="agency-password" type="password" className="bg-background border-input h-11" required />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 font-semibold shadow-sm"
                disabled={loading}
              >
                {loading ? "Authenticating..." : "Sign In with Single Sign-On"}
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-3 text-muted-foreground font-medium">Agency SSO Options</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="bg-background border-border hover:bg-muted h-11 font-medium"
                >
                  ZRA Portal
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="bg-background border-border hover:bg-muted h-11 font-medium"
                >
                  PACRA Portal
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="bg-background border-border hover:bg-muted h-11 font-medium"
                >
                  NAPSA Portal
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="bg-background border-border hover:bg-muted h-11 font-medium"
                >
                  RTSA Portal
                </Button>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="citizen" className="mt-6">
            <form onSubmit={(e) => handleLogin(e, "citizen")} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="citizen-nrc" className="text-sm font-semibold text-foreground">
                  National Registration Card (NRC)
                </Label>
                <Input
                  id="citizen-nrc"
                  type="text"
                  placeholder="123456/78/9"
                  className="bg-background border-input h-11"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="citizen-password" className="text-sm font-semibold text-foreground">
                  Password
                </Label>
                <Input id="citizen-password" type="password" className="bg-background border-input h-11" required />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 font-semibold shadow-sm"
                disabled={loading}
              >
                {loading ? "Authenticating..." : "Access Citizen Portal"}
              </Button>
              <div className="bg-muted p-4 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">New to the platform?</strong> Visit your nearest government
                  service center or access the registration portal at{" "}
                  <span className="text-primary font-medium">register.gov.zm</span>
                </p>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
