import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Bell, Settings, User, LayoutDashboard, Code2, Building2, BarChart3 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export function DashboardHeader() {
  return (
    <header className="border-b border-border bg-card shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <span className="text-lg font-bold text-foreground block leading-tight">Republic of Zambia</span>
              <span className="text-xs text-muted-foreground font-medium">Interoperability Platform</span>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 px-4 py-2 text-sm text-primary font-semibold bg-primary/10 rounded-lg"
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/api-management"
              className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
            >
              <Code2 className="h-4 w-4" />
              API Management
            </Link>
            <Link
              href="/agencies"
              className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
            >
              <Building2 className="h-4 w-4" />
              Agencies
            </Link>
            <Link
              href="/analytics"
              className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
            >
              <BarChart3 className="h-4 w-4" />
              Analytics
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-foreground hover:bg-muted relative"
          >
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-destructive text-destructive-foreground text-xs">
              3
            </Badge>
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-muted">
            <Settings className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2 border-border hover:bg-muted bg-transparent">
                <User className="h-4 w-4" />
                <span className="hidden md:inline text-sm font-medium">Admin</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-card border-border">
              <DropdownMenuLabel className="font-semibold">
                <div className="text-sm">Administrator Account</div>
                <div className="text-xs text-muted-foreground font-normal">admin@gov.zm</div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-border" />
              <DropdownMenuItem className="hover:bg-muted cursor-pointer">Profile Settings</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-muted cursor-pointer">System Preferences</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-muted cursor-pointer">Access Logs</DropdownMenuItem>
              <DropdownMenuSeparator className="bg-border" />
              <DropdownMenuItem className="hover:bg-muted cursor-pointer text-destructive">Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
