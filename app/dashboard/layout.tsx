import type React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Home,
  Settings,
  Users,
  BarChart3,
  Key,
  Globe,
  CreditCard,
  HelpCircle,
  LogOut,
  Menu,
  Bell,
} from "lucide-react"
import Link from "next/link"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
            <Link href="/dashboard" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground">Keynova Lock</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Bell className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium">أحمد محمد</p>
                <p className="text-xs text-muted-foreground">مدير النظام</p>
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-primary">أ</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-l bg-card/30 min-h-[calc(100vh-73px)] p-4">
          <nav className="space-y-2">
            <Link href="/dashboard">
              <Button variant="ghost" className="w-full justify-start gap-3 text-right">
                <Home className="w-5 h-5" />
                الرئيسية
              </Button>
            </Link>

            <Link href="/dashboard/projects">
              <Button variant="ghost" className="w-full justify-start gap-3 text-right">
                <Globe className="w-5 h-5" />
                المشاريع
                <Badge variant="secondary" className="mr-auto">
                  3
                </Badge>
              </Button>
            </Link>

            <Link href="/dashboard/locks">
              <Button variant="ghost" className="w-full justify-start gap-3 text-right">
                <Key className="w-5 h-5" />
                الأقفال البصرية
              </Button>
            </Link>

            <Link href="/dashboard/analytics">
              <Button variant="ghost" className="w-full justify-start gap-3 text-right">
                <BarChart3 className="w-5 h-5" />
                التحليلات
              </Button>
            </Link>

            <Link href="/dashboard/users">
              <Button variant="ghost" className="w-full justify-start gap-3 text-right">
                <Users className="w-5 h-5" />
                المستخدمون
              </Button>
            </Link>

            <Link href="/dashboard/billing">
              <Button variant="ghost" className="w-full justify-start gap-3 text-right">
                <CreditCard className="w-5 h-5" />
                الفوترة
              </Button>
            </Link>

            <div className="pt-4 border-t">
              <Link href="/dashboard/settings">
                <Button variant="ghost" className="w-full justify-start gap-3 text-right">
                  <Settings className="w-5 h-5" />
                  الإعدادات
                </Button>
              </Link>

              <Link href="/help">
                <Button variant="ghost" className="w-full justify-start gap-3 text-right">
                  <HelpCircle className="w-5 h-5" />
                  المساعدة
                </Button>
              </Link>

              <Button
                variant="ghost"
                className="w-full justify-start gap-3 text-right text-destructive hover:text-destructive"
              >
                <LogOut className="w-5 h-5" />
                تسجيل الخروج
              </Button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
