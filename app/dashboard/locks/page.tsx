import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { VisualLock } from "@/components/visual-lock"
import { Plus, Search, Settings, Eye, Copy, MoreVertical, Shield, Activity, Users } from "lucide-react"

export default function LocksPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">الأقفال البصرية</h1>
          <p className="text-muted-foreground">إدارة وإنشاء الأقفال البصرية لمشاريعك</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          قفل جديد
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="البحث في الأقفال..." className="pr-10" />
        </div>
        <Button variant="outline">تصفية</Button>
        <Button variant="outline">تصدير</Button>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">إجمالي الأقفال</CardTitle>
            <Shield className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2</span> من الشهر الماضي
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">الأقفال النشطة</CardTitle>
            <Activity className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">66.7% من الإجمالي</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">محاولات اليوم</CardTitle>
            <Users className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,847</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12%</span> من أمس
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">معدل النجاح</CardTitle>
            <Activity className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+1.2%</span> من الأسبوع الماضي
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Locks List */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold">قائمة الأقفال</h2>

          {/* Lock Item 1 */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">قفل الصفحة الرئيسية</CardTitle>
                    <CardDescription>متجر الإلكترونيات - الصفحة الرئيسية</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    نشط
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">محاولات اليوم</p>
                  <p className="font-medium">847</p>
                </div>
                <div>
                  <p className="text-muted-foreground">معدل النجاح</p>
                  <p className="font-medium text-green-600">96.8%</p>
                </div>
                <div>
                  <p className="text-muted-foreground">آخر استخدام</p>
                  <p className="font-medium">منذ 5 دقائق</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 gap-2 bg-transparent">
                  <Eye className="w-4 h-4" />
                  معاينة
                </Button>
                <Button size="sm" variant="outline" className="flex-1 gap-2 bg-transparent">
                  <Settings className="w-4 h-4" />
                  إعدادات
                </Button>
                <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Lock Item 2 */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">قفل لوحة الإدارة</CardTitle>
                    <CardDescription>منصة التعليم - لوحة التحكم</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                    قيد الاختبار
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">محاولات اليوم</p>
                  <p className="font-medium">23</p>
                </div>
                <div>
                  <p className="text-muted-foreground">معدل النجاح</p>
                  <p className="font-medium text-yellow-600">87.0%</p>
                </div>
                <div>
                  <p className="text-muted-foreground">آخر استخدام</p>
                  <p className="font-medium">منذ ساعة</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 gap-2 bg-transparent">
                  <Eye className="w-4 h-4" />
                  معاينة
                </Button>
                <Button size="sm" variant="outline" className="flex-1 gap-2 bg-transparent">
                  <Settings className="w-4 h-4" />
                  إعدادات
                </Button>
                <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Lock Item 3 */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">قفل المحتوى المميز</CardTitle>
                    <CardDescription>تطبيق الصحة - المحتوى المدفوع</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    نشط
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">محاولات اليوم</p>
                  <p className="font-medium">456</p>
                </div>
                <div>
                  <p className="text-muted-foreground">معدل النجاح</p>
                  <p className="font-medium text-green-600">98.9%</p>
                </div>
                <div>
                  <p className="text-muted-foreground">آخر استخدام</p>
                  <p className="font-medium">منذ دقيقتين</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 gap-2 bg-transparent">
                  <Eye className="w-4 h-4" />
                  معاينة
                </Button>
                <Button size="sm" variant="outline" className="flex-1 gap-2 bg-transparent">
                  <Settings className="w-4 h-4" />
                  إعدادات
                </Button>
                <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Live Preview */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">معاينة مباشرة</h2>
          <VisualLock
            title="معاينة القفل"
            description="اختبر القفل البصري"
            correctImageIndex={2}
            correctPassword="test123"
            maxAttempts={3}
            showInstructions={false}
            size="sm"
          />

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">إجراءات سريعة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                <Plus className="w-4 h-4" />
                إنشاء قفل جديد
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                <Copy className="w-4 h-4" />
                نسخ كود التكامل
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                <Settings className="w-4 h-4" />
                إعدادات عامة
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
