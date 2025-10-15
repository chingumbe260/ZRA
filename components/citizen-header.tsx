import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Bell, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function CitizenHeader() {
  return (
    <header className="border-b border-border bg-card shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-emerald-500" />
            <span className="text-xl font-bold text-foreground">Zambia Gov Portal</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/citizen" className="text-sm text-foreground font-medium">
              My Services
            </Link>
            <Link
              href="/citizen/documents"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Documents
            </Link>
            <Link
              href="/citizen/applications"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Applications
            </Link>
            <Link
              href="/citizen/support"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Support
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-muted">
            <Bell className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card border-border">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-border" />
              <DropdownMenuItem className="hover:bg-muted cursor-pointer">Profile</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-muted cursor-pointer">Settings</DropdownMenuItem>
              <DropdownMenuSeparator className="bg-border" />
              <DropdownMenuItem className="hover:bg-muted cursor-pointer">Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
