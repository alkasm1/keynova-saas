import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Globe, Plus, Search, Settings, BarChart3, Shield, ExternalLink, MoreVertical } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">المشاريع</h1>
          <p className="text-muted-foreground">إدارة جميع مشاريعك ومواقعك المحمية</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          مشروع جديد
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="البحث في المشاريع..." className="pr-10" />
        </div>
        <Button variant="outline">تصفية</Button>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project 1 */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">متجر الإلكترونيات</CardTitle>
                  <CardDescription>electronics-store.com</CardDescription>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                نشط
              </Badge>
              <span className="text-sm text-muted-foreground">آخر تحديث: اليوم</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>عمليات المصادقة اليوم</span>
                <span className="font-medium">1,247</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>معدل النجاح</span>
                <span className="font-medium text-green-600">99.8%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>الأقفال النشطة</span>
                <span className="font-medium">3</span>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button size="sm" variant="outline" className="flex-1 gap-2 bg-transparent">
                <Settings className="w-4 h-4" />
                إعدادات
              </Button>
              <Button size="sm" variant="outline" className="flex-1 gap-2 bg-transparent">
                <BarChart3 className="w-4 h-4" />
                تحليلات
              </Button>
              <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Project 2 */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-lg">منصة التعليم</CardTitle>
                  <CardDescription>edu-platform.com</CardDescription>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                قيد الإعداد
              </Badge>
              <span className="text-sm text-muted-foreground">آخر تحديث: أمس</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>عمليات المصادقة اليوم</span>
                <span className="font-medium">0</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>معدل النجاح</span>
                <span className="font-medium text-muted-foreground">-</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>الأقفال النشطة</span>
                <span className="font-medium">0</span>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button size="sm" variant="outline" className="flex-1 gap-2 bg-transparent">
                <Settings className="w-4 h-4" />
                إعدادات
              </Button>
              <Button size="sm" variant="outline" className="flex-1 gap-2 bg-transparent">
                <Shield className="w-4 h-4" />
                إعداد القفل
              </Button>
              <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Project 3 */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <CardTitle className="text-lg">تطبيق الصحة</CardTitle>
                  <CardDescription>health-app.com</CardDescription>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                نشط
              </Badge>
              <span className="text-sm text-muted-foreground">آخر تحديث: منذ 3 أيام</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>عمليات المصادقة اليوم</span>
                <span className="font-medium">456</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>معدل النجاح</span>
                <span className="font-medium text-green-600">98.9%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>الأقفال النشطة</span>
                <span className="font-medium">2</span>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button size="sm" variant="outline" className="flex-1 gap-2 bg-transparent">
                <Settings className="w-4 h-4" />
                إعدادات
              </Button>
              <Button size="sm" variant="outline" className="flex-1 gap-2 bg-transparent">
                <BarChart3 className="w-4 h-4" />
                تحليلات
              </Button>
              <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Add New Project Card */}
        <Card className="border-dashed border-2 hover:border-primary/50 transition-colors cursor-pointer">
          <CardContent className="flex flex-col items-center justify-center h-full min-h-[300px] text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <Plus className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">إنشاء مشروع جديد</h3>
            <p className="text-muted-foreground mb-4">أضف موقعاً جديداً لحمايته بالقفل البصري</p>
            <Button>ابدأ الآن</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
