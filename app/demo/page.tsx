import { VisualLock } from "@/components/visual-lock"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, ArrowLeft, Code, Zap, Globe } from "lucide-react"
import Link from "next/link"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Keynova Lock</h1>
                <p className="text-sm text-muted-foreground">العرض التوضيحي</p>
              </div>
            </Link>

            <div className="flex items-center gap-3">
              <Link href="/">
                <Button variant="ghost" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  العودة للرئيسية
                </Button>
              </Link>
              <Link href="/register">
                <Button>ابدأ مجاناً</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Demo Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Zap className="w-4 h-4 ml-2" />
              عرض توضيحي تفاعلي
            </Badge>
            <h1 className="text-4xl font-bold text-foreground mb-4">جرب القفل البصري</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              اختبر قوة وسهولة استخدام نظام القفل البصري المتقدم. اختر الصورة الصحيحة وأدخل كلمة المرور للمتابعة.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Demo Lock */}
            <div>
              <VisualLock
                title="القفل البصري التوضيحي"
                description="اختر الصورة رقم 1 وأدخل كلمة المرور: demo123"
                correctImageIndex={0}
                correctPassword="demo123"
                maxAttempts={5}
                showInstructions={true}
                onSuccess={() => {
                  console.log("تم فتح القفل بنجاح!")
                }}
                onFailure={(attempts) => {
                  console.log(`محاولة فاشلة رقم: ${attempts}`)
                }}
              />
            </div>

            {/* Features */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    مميزات القفل البصري
                  </CardTitle>
                  <CardDescription>لماذا يعتبر القفل البصري أكثر أماناً؟</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">حماية متعددة الطبقات</h4>
                      <p className="text-sm text-muted-foreground">يجمع بين التعرف البصري وكلمة المرور التقليدية</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">مقاومة الهجمات الآلية</h4>
                      <p className="text-sm text-muted-foreground">صعوبة في الاختراق باستخدام البرامج الآلية</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">سهولة الاستخدام</h4>
                      <p className="text-sm text-muted-foreground">واجهة بديهية وسهلة للمستخدمين</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">تخصيص كامل</h4>
                      <p className="text-sm text-muted-foreground">إمكانية تخصيص الصور والألوان والرسائل</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-accent" />
                    سهولة التكامل
                  </CardTitle>
                  <CardDescription>أضف القفل البصري لموقعك في دقائق</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-4 rounded-lg text-sm font-mono">
                    <div className="text-muted-foreground mb-2">// إضافة القفل البصري</div>
                    <div>
                      <span className="text-blue-600">import</span> {"{"}VisualLock{"}"}{" "}
                      <span className="text-blue-600">from</span> <span className="text-green-600">'keynova-lock'</span>
                    </div>
                    <br />
                    <div>
                      <span className="text-purple-600">{"<VisualLock"}</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-red-600">apiKey</span>=
                      <span className="text-green-600">"your-api-key"</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-red-600">onSuccess</span>=
                      <span className="text-blue-600">{"{handleSuccess}"}</span>
                    </div>
                    <div>
                      <span className="text-purple-600">{"/>"}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-secondary" />
                    استخدامات متنوعة
                  </CardTitle>
                  <CardDescription>مناسب لجميع أنواع المواقع والتطبيقات</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      المتاجر الإلكترونية
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      المنصات التعليمية
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      التطبيقات المصرفية
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      المحتوى المحمي
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      لوحات الإدارة
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      المواقع الشخصية
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 p-8 bg-primary/5 rounded-2xl">
            <h2 className="text-2xl font-bold text-foreground mb-4">جاهز لحماية موقعك؟</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              ابدأ مع Keynova Lock اليوم واحصل على حماية متقدمة لموقعك. تجربة مجانية لمدة 14 يوم بدون الحاجة لبطاقة
              ائتمانية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="gap-2">
                  ابدأ التجربة المجانية
                  <Shield className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/docs">
                <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                  اطلع على التوثيق
                  <Code className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
