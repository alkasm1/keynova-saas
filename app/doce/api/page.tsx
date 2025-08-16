import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Code, Key, BarChart3, ArrowLeft, Copy, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ApiDocsPage() {
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
                <h1 className="text-xl font-bold text-foreground">Keynova Lock API</h1>
                <p className="text-sm text-muted-foreground">توثيق API للمطورين</p>
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
                <Button>احصل على API Key</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Code className="w-4 h-4 ml-2" />
              API Documentation v1.0
            </Badge>
            <h1 className="text-4xl font-bold text-foreground mb-4">Keynova Lock API</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              دمج القفل البصري في موقعك أو تطبيقك باستخدام API بسيط وقوي. ابدأ في دقائق مع أمثلة شاملة.
            </p>
          </div>

          {/* Quick Start */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="w-5 h-5 text-primary" />
                البدء السريع
              </CardTitle>
              <CardDescription>احصل على API key وابدأ التكامل في 3 خطوات بسيطة</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-1">احصل على API Key</h3>
                  <p className="text-sm text-muted-foreground">سجل حساب واحصل على مفتاح API مجاناً</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-1">أنشئ قفل</h3>
                  <p className="text-sm text-muted-foreground">استخدم API لإنشاء قفل بصري جديد</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-1">تحقق من الهوية</h3>
                  <p className="text-sm text-muted-foreground">استخدم endpoint التحقق لحماية المحتوى</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* API Reference */}
          <Tabs defaultValue="authentication" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="authentication">المصادقة</TabsTrigger>
              <TabsTrigger value="locks">الأقفال</TabsTrigger>
              <TabsTrigger value="verification">التحقق</TabsTrigger>
              <TabsTrigger value="analytics">التحليلات</TabsTrigger>
            </TabsList>

            {/* Authentication Tab */}
            <TabsContent value="authentication" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>المصادقة</CardTitle>
                  <CardDescription>كيفية المصادقة مع Keynova Lock API</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">API Key</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      جميع طلبات API تتطلب API key صالح في header الطلب:
                    </p>
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-muted-foreground">Headers</span>
                        <Button variant="ghost" size="sm">
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                      <div>
                        <span className="text-red-600">X-API-Key</span>:{" "}
                        <span className="text-green-600">kn_live_your_api_key_here</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">أنواع المفاتيح</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">kn_test_</Badge>
                        <span className="text-sm">مفاتيح الاختبار - للتطوير والاختبار</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">kn_live_</Badge>
                        <span className="text-sm">مفاتيح الإنتاج - للاستخدام الفعلي</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Locks Tab */}
            <TabsContent value="locks" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>إدارة الأقفال</CardTitle>
                  <CardDescription>إنشاء وإدارة الأقفال البصرية</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Get Locks */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">GET</Badge>
                      <code className="text-sm">/api/locks</code>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">الحصول على قائمة جميع الأقفال</p>
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-muted-foreground">Response</span>
                        <Button variant="ghost" size="sm">
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                      <pre className="text-xs overflow-x-auto">
                        {`{
  "success": true,
  "data": [
    {
      "id": "lock_1",
      "name": "Homepage Lock",
      "active": true,
      "stats": {
        "totalAttempts": 1247,
        "successRate": 96.1
      }
    }
  ]
}`}
                      </pre>
                    </div>
                  </div>

                  {/* Create Lock */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="destructive">POST</Badge>
                      <code className="text-sm">/api/locks</code>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">إنشاء قفل بصري جديد</p>
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-muted-foreground">Request Body</span>
                        <Button variant="ghost" size="sm">
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                      <pre className="text-xs overflow-x-auto">
                        {`{
  "name": "My New Lock",
  "correctImageIndex": 0,
  "correctPassword": "secret123",
  "maxAttempts": 3,
  "settings": {
    "theme": "light",
    "size": "md",
    "showInstructions": true
  }
}`}
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Verification Tab */}
            <TabsContent value="verification" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>التحقق من الهوية</CardTitle>
                  <CardDescription>التحقق من محاولات فتح القفل البصري</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="destructive">POST</Badge>
                      <code className="text-sm">/api/auth/verify</code>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">التحقق من صحة الصورة المختارة وكلمة المرور</p>

                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium mb-2">Request Body</h5>
                        <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                          <pre className="text-xs overflow-x-auto">
                            {`{
  "lockId": "lock_1",
  "selectedImageIndex": 0,
  "password": "demo123",
  "userAgent": "Mozilla/5.0...",
  "ipAddress": "192.168.1.1"
}`}
                          </pre>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">Success Response</h5>
                        <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                          <pre className="text-xs overflow-x-auto">
                            {`{
  "success": true,
  "message": "Verification successful",
  "data": {
    "lockId": "lock_1",
    "timestamp": "2024-01-16T10:30:00Z",
    "sessionToken": "session_1705401000_abc123"
  }
}`}
                          </pre>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">Error Response</h5>
                        <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                          <pre className="text-xs overflow-x-auto">
                            {`{
  "success": false,
  "message": "Verification failed",
  "error": "Incorrect image selected",
  "data": {
    "lockId": "lock_1",
    "timestamp": "2024-01-16T10:30:00Z"
  }
}`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>التحليلات والإحصائيات</CardTitle>
                  <CardDescription>الحصول على بيانات الاستخدام والأداء</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">GET</Badge>
                      <code className="text-sm">/api/analytics</code>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">الحصول على إحصائيات الاستخدام</p>

                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium mb-2">Query Parameters</h5>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <code className="bg-muted px-2 py-1 rounded">timeframe</code>
                            <span className="text-muted-foreground">7d, 30d, 90d (default: 7d)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <code className="bg-muted px-2 py-1 rounded">lockId</code>
                            <span className="text-muted-foreground">معرف قفل محدد (اختياري)</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">Response</h5>
                        <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                          <pre className="text-xs overflow-x-auto">
                            {`{
  "success": true,
  "data": {
    "summary": {
      "totalAttempts": 1247,
      "successfulAttempts": 1198,
      "failedAttempts": 49,
      "successRate": 96.1,
      "averageResponseTime": 245
    },
    "timeline": [
      {
        "date": "2024-01-16",
        "totalAttempts": 89,
        "successfulAttempts": 85,
        "failedAttempts": 4
      }
    ]
  }
}`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Code Examples */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5 text-accent" />
                أمثلة التكامل
              </CardTitle>
              <CardDescription>أمثلة عملية لاستخدام API في لغات مختلفة</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="javascript" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="php">PHP</TabsTrigger>
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                </TabsList>

                <TabsContent value="javascript">
                  <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-muted-foreground">JavaScript Example</span>
                      <Button variant="ghost" size="sm">
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                    <pre className="text-xs overflow-x-auto">
                      {`// التحقق من القفل البصري
async function verifyLock(lockId, imageIndex, password) {
  const response = await fetch('/api/auth/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': 'kn_live_your_api_key_here'
    },
    body: JSON.stringify({
      lockId: lockId,
      selectedImageIndex: imageIndex,
      password: password,
      userAgent: navigator.userAgent,
      ipAddress: await getClientIP()
    })
  });
  
  const result = await response.json();
  
  if (result.success) {
    console.log('تم فتح القفل بنجاح!');
    // السماح بالوصول للمحتوى
    showProtectedContent();
  } else {
    console.log('فشل في فتح القفل:', result.error);
    // عرض رسالة خطأ
    showErrorMessage(result.error);
  }
}`}
                    </pre>
                  </div>
                </TabsContent>

                <TabsContent value="python">
                  <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-muted-foreground">Python Example</span>
                      <Button variant="ghost" size="sm">
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                    <pre className="text-xs overflow-x-auto">
                      {`import requests

def verify_lock(lock_id, image_index, password):
    url = "https://api.keynova-lock.com/api/auth/verify"
    headers = {
        "Content-Type": "application/json",
        "X-API-Key": "kn_live_your_api_key_here"
    }
    data = {
        "lockId": lock_id,
        "selectedImageIndex": image_index,
        "password": password,
        "userAgent": "Python Client",
        "ipAddress": get_client_ip()
    }
    
    response = requests.post(url, json=data, headers=headers)
    result = response.json()
    
    if result.get("success"):
        print("تم فتح القفل بنجاح!")
        return True
    else:
        print(f"فشل في فتح القفل: {result.get('error')}")
        return False`}
                    </pre>
                  </div>
                </TabsContent>

                <TabsContent value="php">
                  <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-muted-foreground">PHP Example</span>
                      <Button variant="ghost" size="sm">
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                    <pre className="text-xs overflow-x-auto">
                      {`<?php
function verifyLock($lockId, $imageIndex, $password) {
    $url = 'https://api.keynova-lock.com/api/auth/verify';
    $data = [
        'lockId' => $lockId,
        'selectedImageIndex' => $imageIndex,
        'password' => $password,
        'userAgent' => $_SERVER['HTTP_USER_AGENT'],
        'ipAddress' => $_SERVER['REMOTE_ADDR']
    ];
    
    $options = [
        'http' => [
            'header' => [
                'Content-Type: application/json',
                'X-API-Key: kn_live_your_api_key_here'
            ],
            'method' => 'POST',
            'content' => json_encode($data)
        ]
    ];
    
    $context = stream_context_create($options);
    $response = file_get_contents($url, false, $context);
    $result = json_decode($response, true);
    
    if ($result['success']) {
        echo "تم فتح القفل بنجاح!";
        return true;
    } else {
        echo "فشل في فتح القفل: " . $result['error'];
        return false;
    }
}
?>`}
                    </pre>
                  </div>
                </TabsContent>

                <TabsContent value="curl">
                  <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-muted-foreground">cURL Example</span>
                      <Button variant="ghost" size="sm">
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                    <pre className="text-xs overflow-x-auto">
                      {`# التحقق من القفل البصري
curl -X POST https://api.keynova-lock.com/api/auth/verify \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: kn_live_your_api_key_here" \\
  -d '{
    "lockId": "lock_1",
    "selectedImageIndex": 0,
    "password": "demo123",
    "userAgent": "curl/7.68.0",
    "ipAddress": "192.168.1.1"
  }'

# إنشاء قفل جديد
curl -X POST https://api.keynova-lock.com/api/locks \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: kn_live_your_api_key_here" \\
  -d '{
    "name": "My New Lock",
    "correctImageIndex": 0,
    "correctPassword": "secret123",
    "maxAttempts": 3
  }'`}
                    </pre>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Rate Limits & Best Practices */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-secondary" />
                  حدود المعدل
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">طلبات التحقق</span>
                  <Badge variant="outline">1000/ساعة</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">إدارة الأقفال</span>
                  <Badge variant="outline">100/ساعة</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">التحليلات</span>
                  <Badge variant="outline">50/ساعة</Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  يتم إعادة تعيين الحدود كل ساعة. للحصول على حدود أعلى، ترقى لخطة مدفوعة.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>أفضل الممارسات</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">احفظ API keys بأمان</p>
                    <p className="text-xs text-muted-foreground">لا تعرض المفاتيح في الكود العام</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">استخدم HTTPS دائماً</p>
                    <p className="text-xs text-muted-foreground">لحماية البيانات أثناء النقل</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">تعامل مع الأخطاء</p>
                    <p className="text-xs text-muted-foreground">تأكد من معالجة جميع حالات الخطأ</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">راقب الاستخدام</p>
                    <p className="text-xs text-muted-foreground">تابع حدود المعدل والأداء</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support */}
          <Card className="mt-8 text-center">
            <CardContent className="py-8">
              <h3 className="text-xl font-semibold mb-4">تحتاج مساعدة؟</h3>
              <p className="text-muted-foreground mb-6">
                فريق الدعم الفني متاح 24/7 لمساعدتك في التكامل واستكشاف الأخطاء
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="gap-2 bg-transparent">
                  <ExternalLink className="w-4 h-4" />
                  مركز المساعدة
                </Button>
                <Button className="gap-2">
                  <Shield className="w-4 h-4" />
                  تواصل مع الدعم
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
