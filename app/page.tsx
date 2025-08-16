import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, Users, BarChart3, Settings, Zap, Globe } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Keynova Lock</h1>
                <p className="text-sm text-muted-foreground">منصة القفل البصري المتقدم</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="#features" className="text-foreground hover:text-primary transition-colors">
                المميزات
              </Link>
              <Link href="#pricing" className="text-foreground hover:text-primary transition-colors">
                الأسعار
              </Link>
              <Link href="#docs" className="text-foreground hover:text-primary transition-colors">
                التوثيق
              </Link>
              <Link href="#support" className="text-foreground hover:text-primary transition-colors">
                الدعم
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="ghost" asChild>
                <Link href="/login">تسجيل الدخول</Link>
              </Button>
              <Button asChild>
                <Link href="/register">ابدأ مجاناً</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            <Zap className="w-4 h-4 ml-2" />
            جديد: API v2.0 متاح الآن
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-space-grotesk">
            حماية متقدمة بالقفل البصري
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            منصة SaaS شاملة تقدم حلول القفل البصري المتطورة لحماية مواقعك وتطبيقاتك. تكامل سهل، أمان عالي، وتجربة مستخدم
            استثنائية.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/demo">جرب العرض التوضيحي</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
              <Link href="/docs">اطلع على التوثيق</Link>
            </Button>
          </div>

          {/* Visual Lock Demo */}
          <div className="max-w-md mx-auto">
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-2">
              <CardHeader className="text-center pb-4">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Lock className="w-5 h-5 text-primary" />
                  عرض توضيحي للقفل البصري
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {Array.from({ length: 12 }, (_, i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded-lg flex items-center justify-center text-white font-bold text-sm
                        ${
                          i < 4
                            ? "bg-gradient-to-br from-green-400 to-green-600"
                            : i < 8
                              ? "bg-gradient-to-br from-blue-400 to-blue-600"
                              : "bg-gradient-to-br from-purple-400 to-purple-600"
                        }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-3">اختر الصورة وأدخل كلمة المرور</p>
                  <div className="flex gap-2">
                    <input
                      type="password"
                      placeholder="كلمة المرور"
                      className="flex-1 px-3 py-2 border rounded-md text-sm"
                      disabled
                    />
                    <Button size="sm" disabled>
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">لماذا تختار Keynova Lock؟</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              حلول أمان متطورة مصممة لتلبية احتياجات الشركات الحديثة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>أمان متقدم</CardTitle>
                <CardDescription>تشفير من الدرجة العسكرية مع طبقات حماية متعددة</CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>تكامل سريع</CardTitle>
                <CardDescription>إعداد في دقائق مع API بسيط وتوثيق شامل</CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>تحليلات مفصلة</CardTitle>
                <CardDescription>إحصائيات شاملة ومراقبة في الوقت الفعلي</CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>دعم عالمي</CardTitle>
                <CardDescription>خوادم موزعة عالمياً لأداء مثالي في كل مكان</CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>إدارة المستخدمين</CardTitle>
                <CardDescription>نظام شامل لإدارة المستخدمين والصلاحيات</CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>تخصيص كامل</CardTitle>
                <CardDescription>إعدادات مرنة تتناسب مع احتياجاتك الخاصة</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">وقت التشغيل</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10M+</div>
              <div className="text-muted-foreground">عملية مصادقة يومياً</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">شركة تثق بنا</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">دعم فني</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">جاهز لتأمين موقعك؟</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            ابدأ مع Keynova Lock اليوم واحصل على حماية متقدمة لموقعك في دقائق
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/register">ابدأ التجربة المجانية</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
              <Link href="/contact">تحدث مع خبير</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-foreground">Keynova Lock</span>
              </div>
              <p className="text-muted-foreground text-sm">منصة القفل البصري المتقدم لحماية مواقعك وتطبيقاتك</p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">المنتج</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary">
                    المميزات
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    الأسعار
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    التوثيق
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">الشركة</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary">
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    المدونة
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    الوظائف
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    اتصل بنا
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">الدعم</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary">
                    مركز المساعدة
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    الدعم الفني
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    حالة الخدمة
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    الأمان
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Keynova Lock. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
