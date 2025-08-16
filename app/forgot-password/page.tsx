import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, ArrowRight, ArrowLeft, Mail } from "lucide-react"
import Link from "next/link"

export default function ForgotPasswordPage() {
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
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">نسيت كلمة المرور؟</CardTitle>
            <CardDescription>لا تقلق، سنرسل لك رابط إعادة تعيين كلمة المرور عبر البريد الإلكتروني</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input id="email" type="email" placeholder="أدخل بريدك الإلكتروني" className="text-right" required />
                <p className="text-xs text-muted-foreground">
                  أدخل البريد الإلكتروني المرتبط بحسابك وسنرسل لك رابط إعادة التعيين
                </p>
              </div>

              <Button type="submit" className="w-full gap-2">
                إرسال رابط الإعادة
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>

            <div className="text-center">
              <Link href="/login" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowLeft className="w-4 h-4" />
                العودة إلى تسجيل الدخول
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-xs text-muted-foreground">
          لم تتلق البريد الإلكتروني؟ تحقق من مجلد الرسائل غير المرغوب فيها أو{" "}
          <Link href="/contact" className="text-primary hover:underline">
            اتصل بالدعم
          </Link>
        </div>
      </div>
    </div>
  )
}
