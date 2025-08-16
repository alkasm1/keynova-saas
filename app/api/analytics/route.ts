import { type NextRequest, NextResponse } from "next/server"

// Mock data
const mockApiKeys = new Map([
  ["kn_test_1234567890abcdef", { userId: "user_1", projectId: "proj_1", active: true }],
  ["kn_live_abcdef1234567890", { userId: "user_2", projectId: "proj_2", active: true }],
])

function validateApiKey(apiKey: string) {
  return mockApiKeys.get(apiKey)
}

function generateMockAnalytics(projectId: string, timeframe: string) {
  const now = new Date()
  const data = []

  // توليد بيانات وهمية حسب الإطار الزمني
  let days = 7
  if (timeframe === "30d") days = 30
  if (timeframe === "90d") days = 90

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)

    data.push({
      date: date.toISOString().split("T")[0],
      totalAttempts: Math.floor(Math.random() * 200) + 50,
      successfulAttempts: Math.floor(Math.random() * 180) + 45,
      failedAttempts: Math.floor(Math.random() * 20) + 5,
      uniqueUsers: Math.floor(Math.random() * 100) + 20,
      averageResponseTime: Math.floor(Math.random() * 500) + 200,
    })
  }

  return data
}

// GET /api/analytics - الحصول على التحليلات
export async function GET(request: NextRequest) {
  try {
    const apiKey = request.headers.get("x-api-key")
    const { searchParams } = new URL(request.url)
    const timeframe = searchParams.get("timeframe") || "7d"
    const lockId = searchParams.get("lockId")

    if (!apiKey) {
      return NextResponse.json({ error: "API key is required" }, { status: 401 })
    }

    const keyData = validateApiKey(apiKey)
    if (!keyData || !keyData.active) {
      return NextResponse.json({ error: "Invalid or inactive API key" }, { status: 401 })
    }

    // توليد بيانات التحليلات
    const analyticsData = generateMockAnalytics(keyData.projectId, timeframe)

    // حساب الإحصائيات الإجمالية
    const totalAttempts = analyticsData.reduce((sum, day) => sum + day.totalAttempts, 0)
    const totalSuccessful = analyticsData.reduce((sum, day) => sum + day.successfulAttempts, 0)
    const totalFailed = analyticsData.reduce((sum, day) => sum + day.failedAttempts, 0)
    const averageResponseTime = Math.round(
      analyticsData.reduce((sum, day) => sum + day.averageResponseTime, 0) / analyticsData.length,
    )

    const summary = {
      timeframe,
      totalAttempts,
      successfulAttempts: totalSuccessful,
      failedAttempts: totalFailed,
      successRate: totalAttempts > 0 ? Math.round((totalSuccessful / totalAttempts) * 100 * 100) / 100 : 0,
      averageResponseTime,
      uniqueUsers: Math.max(...analyticsData.map((day) => day.uniqueUsers)),
    }

    // إحصائيات حسب القفل إذا تم تحديد lockId
    let lockStats = null
    if (lockId) {
      lockStats = {
        lockId,
        attempts: Math.floor(Math.random() * 500) + 100,
        successRate: Math.round(Math.random() * 20 + 80), // 80-100%
        averageResponseTime: Math.floor(Math.random() * 300) + 150,
        lastUsed: new Date(Date.now() - Math.random() * 86400000).toISOString(),
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        summary,
        timeline: analyticsData,
        lockStats,
      },
    })
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
