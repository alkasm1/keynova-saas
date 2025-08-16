import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Shield, TrendingUp, Users, Globe, Activity, CheckCircle, Clock, Plus } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">مرحباً، أحمد</h1>
          <p className="text-muted-foreground">إليك نظرة عامة على حسابك ومشاريعك</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          مشروع جديد
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">إجمالي المشاريع</CardTitle>
            <Globe className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+1</span> من الشهر الماضي
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">عمليات المصادقة</CardTitle>
            <Shield className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,847</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+15%</span> من الأسبوع الماضي
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">المستخدمون النشطون</CardTitle>
            <Users className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8%</span> من الشهر الماضي
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">معدل النجاح</CardTitle>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.2%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+0.1%</span> من الأسبوع الماضي
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Projects */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              المشاريع الحديثة
            </CardTitle>
            <CardDescription>آخر المشاريع التي تم إنشاؤها أو تحديثها</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">متجر الإلكترونيات</p>
                  <p className="text-sm text-muted-foreground">electronics-store.com</p>
                </div>
              </div>
              <div className="text-left">
                <Badge variant="secondary" className="mb-1">
                  نشط
                </Badge>
                <p className="text-xs text-muted-foreground">آخر تحديث: اليوم</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">منصة التعليم</p>
                  <p className="text-sm text-muted-foreground">edu-platform.com</p>
                </div>
              </div>
              <div className="text-left">
                <Badge variant="outline">قيد الإعداد</Badge>
                <p className="text-xs text-muted-foreground">آخر تحديث: أمس</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-medium">تطبيق الصحة</p>
                  <p className="text-sm text-muted-foreground">health-app.com</p>
                </div>
              </div>
              <div className="text-left">
                <Badge variant="secondary">نشط</Badge>
                <p className="text-xs text-muted-foreground">آخر تحديث: منذ 3 أيام</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              حالة النظام
            </CardTitle>
            <CardDescription>مراقبة أداء الخدمات في الوقت الفعلي</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>API الرئيسي</span>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                تشغيل
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>قاعدة البيانات</span>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                تشغيل
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-yellow-500" />
                <span>خدمة التحليلات</span>
              </div>
              <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                بطء
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>CDN</span>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                تشغيل
              </Badge>
            </div>

            <div className="pt-4 border-t">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">وقت التشغيل الإجمالي</span>
                <span className="text-sm text-muted-foreground">99.8%</span>
              </div>
              <Progress value={99.8} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>إجراءات سريعة</CardTitle>
          <CardDescription>المهام الشائعة التي يمكنك القيام بها</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <Plus className="w-6 h-6" />
              إنشاء قفل جديد
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <Globe className="w-6 h-6" />
              إضافة موقع
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
              <Users className="w-6 h-6" />
              دعوة مستخدم
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>النشاط الأخير</CardTitle>
          <CardDescription>آخر الأحداث في حسابك</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 border rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm">تم إنشاء قفل بصري جديد لموقع "متجر الإلكترونيات"</p>
                <p className="text-xs text-muted-foreground">منذ 5 دقائق</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 border rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm">تم تحديث إعدادات الأمان للمشروع "منصة التعليم"</p>
                <p className="text-xs text-muted-foreground">منذ ساعة</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 border rounded-lg">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm">تحذير: محاولة دخول مشبوهة تم حظرها</p>
                <p className="text-xs text-muted-foreground">منذ 3 ساعات</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
