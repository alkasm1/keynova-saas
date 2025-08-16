import { type NextRequest, NextResponse } from "next/server"

// Mock data
const mockApiKeys = new Map([
  ["kn_test_1234567890abcdef", { userId: "user_1", projectId: "proj_1", active: true }],
  ["kn_live_abcdef1234567890", { userId: "user_2", projectId: "proj_2", active: true }],
])

const mockLocks = new Map([
  [
    "lock_1",
    {
      id: "lock_1",
      name: "Homepage Lock",
      projectId: "proj_1",
      correctImageIndex: 0,
      correctPassword: "demo123",
      maxAttempts: 3,
      active: true,
      createdAt: "2024-01-15T10:00:00Z",
      updatedAt: "2024-01-15T10:00:00Z",
      settings: {
        theme: "light",
        size: "md",
        showInstructions: true,
        customImages: [],
      },
      stats: {
        totalAttempts: 1247,
        successfulAttempts: 1198,
        failedAttempts: 49,
        successRate: 96.1,
      },
    },
  ],
  [
    "lock_2",
    {
      id: "lock_2",
      name: "Admin Panel Lock",
      projectId: "proj_1",
      correctImageIndex: 5,
      correctPassword: "admin456",
      maxAttempts: 5,
      active: true,
      createdAt: "2024-01-10T14:30:00Z",
      updatedAt: "2024-01-16T09:15:00Z",
      settings: {
        theme: "dark",
        size: "lg",
        showInstructions: false,
        customImages: [],
      },
      stats: {
        totalAttempts: 89,
        successfulAttempts: 82,
        failedAttempts: 7,
        successRate: 92.1,
      },
    },
  ],
])

function validateApiKey(apiKey: string) {
  return mockApiKeys.get(apiKey)
}

// GET /api/locks - الحصول على قائمة الأقفال
export async function GET(request: NextRequest) {
  try {
    const apiKey = request.headers.get("x-api-key")

    if (!apiKey) {
      return NextResponse.json({ error: "API key is required" }, { status: 401 })
    }

    const keyData = validateApiKey(apiKey)
    if (!keyData || !keyData.active) {
      return NextResponse.json({ error: "Invalid or inactive API key" }, { status: 401 })
    }

    // تصفية الأقفال حسب المشروع
    const userLocks = Array.from(mockLocks.values()).filter((lock) => lock.projectId === keyData.projectId)

    return NextResponse.json({
      success: true,
      data: userLocks,
      meta: {
        total: userLocks.length,
        active: userLocks.filter((lock) => lock.active).length,
        inactive: userLocks.filter((lock) => !lock.active).length,
      },
    })
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// POST /api/locks - إنشاء قفل جديد
export async function POST(request: NextRequest) {
  try {
    const apiKey = request.headers.get("x-api-key")
    const { name, correctImageIndex, correctPassword, maxAttempts, settings } = await request.json()

    if (!apiKey) {
      return NextResponse.json({ error: "API key is required" }, { status: 401 })
    }

    const keyData = validateApiKey(apiKey)
    if (!keyData || !keyData.active) {
      return NextResponse.json({ error: "Invalid or inactive API key" }, { status: 401 })
    }

    // التحقق من البيانات المطلوبة
    if (!name || correctImageIndex === undefined || !correctPassword) {
      return NextResponse.json(
        { error: "Missing required fields: name, correctImageIndex, correctPassword" },
        { status: 400 },
      )
    }

    // إنشاء قفل جديد
    const newLockId = `lock_${Date.now()}`
    const newLock = {
      id: newLockId,
      name,
      projectId: keyData.projectId,
      correctImageIndex,
      correctPassword,
      maxAttempts: maxAttempts || 3,
      active: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      settings: {
        theme: settings?.theme || "light",
        size: settings?.size || "md",
        showInstructions: settings?.showInstructions ?? true,
        customImages: settings?.customImages || [],
      },
      stats: {
        totalAttempts: 0,
        successfulAttempts: 0,
        failedAttempts: 0,
        successRate: 0,
      },
    }

    // حفظ القفل (في التطبيق الحقيقي، احفظ في قاعدة البيانات)
    mockLocks.set(newLockId, newLock)

    return NextResponse.json({
      success: true,
      message: "Lock created successfully",
      data: newLock,
    })
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
