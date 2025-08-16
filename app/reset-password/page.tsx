import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, ArrowRight, Eye, EyeOff, Check, Lock } from "lucide-react"
import Link from "next/link"

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Shield className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="text-right">
              <h1 className="text-2xl font-bold text-foreground">Keynova Lock</h1>
              <p className="text-sm text-muted-foreground">منصة القفل البصري المتقدم</p>
            </div>
          </Link>
        </div>

        <Card className="border-2">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">إعادة تعيين كلمة المرور</CardTitle>
            <CardDescription>أدخل كلمة مرور جديدة لحسابك</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">كلمة المرور الجديدة</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    placeholder="أدخل كلمة مرور قوية"
                    className="text-right pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute left-0 top-0 h-full px-3 hover:bg-transparent"
                  >
                    <Eye className="w-4 h-4 text-muted-foreground" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">تأكيد كلمة المرور</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="أعد إدخال كلمة المرور"
                    className="text-right pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute left-0 top-0 h-full px-3 hover:bg-transparent"
                  >
                    <EyeOff className="w-4 h-4 text-muted-foreground" />
                  </Button>
                </div>
              </div>

              {/* Password Requirements */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">متطلبات كلمة المرور:</p>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-green-500" />
                    <span className="text-muted-foreground">8 أحرف على الأقل</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 border border-muted-foreground rounded-full" />
                    <span className="text-muted-foreground">حرف كبير واحد على الأقل</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 border border-muted-foreground rounded-full" />
                    <span className="text-muted-foreground">رقم واحد على الأقل</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 border border-muted-foreground rounded-full" />
                    <span className="text-muted-foreground">رمز خاص واحد على الأقل</span>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full gap-2">
                تحديث كلمة المرور
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>

            <div className="text-center">
              <Link href="/login" className="text-sm text-primary hover:underline">
                العودة إلى تسجيل الدخول
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-xs text-muted-foreground">
          بعد تحديث كلمة المرور، ستحتاج إلى تسجيل الدخول مرة أخرى في جميع الأجهزة
        </div>
      </div>
    </div>
  )
}
