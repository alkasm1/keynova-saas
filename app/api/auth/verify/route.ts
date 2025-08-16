import { type NextRequest, NextResponse } from "next/server"

// Mock database - في التطبيق الحقيقي، استخدم قاعدة بيانات حقيقية
const mockApiKeys = new Map([
  ["kn_test_1234567890abcdef", { userId: "user_1", projectId: "proj_1", active: true }],
  ["kn_live_abcdef1234567890", { userId: "user_2", projectId: "proj_2", active: true }],
])

const mockLocks = new Map([
  [
    "lock_1",
    {
      id: "lock_1",
      projectId: "proj_1",
      correctImageIndex: 0,
      correctPassword: "demo123",
      maxAttempts: 3,
      active: true,
    },
  ],
])

function validateApiKey(apiKey: string) {
  return mockApiKeys.get(apiKey)
}

function rateLimitCheck(apiKey: string): boolean {
  // تنفيذ بسيط لمحدود المعدل - في التطبيق الحقيقي، استخدم Redis أو قاعدة بيانات
  return true
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = request.headers.get("x-api-key")
    const { lockId, selectedImageIndex, password, userAgent, ipAddress } = await request.json()

    // التحقق من وجود API Key
    if (!apiKey) {
      return NextResponse.json({ error: "API key is required" }, { status: 401 })
    }

    // التحقق من صحة API Key
    const keyData = validateApiKey(apiKey)
    if (!keyData || !keyData.active) {
      return NextResponse.json({ error: "Invalid or inactive API key" }, { status: 401 })
    }

    // فحص محدود المعدل
    if (!rateLimitCheck(apiKey)) {
      return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 })
    }

    // التحقق من البيانات المطلوبة
    if (!lockId || selectedImageIndex === undefined || !password) {
      return NextResponse.json(
        { error: "Missing required fields: lockId, selectedImageIndex, password" },
        { status: 400 },
      )
    }

    // الحصول على بيانات القفل
    const lock = mockLocks.get(lockId)
    if (!lock || !lock.active) {
      return NextResponse.json({ error: "Lock not found or inactive" }, { status: 404 })
    }

    // التحقق من الهوية
    const isImageCorrect = selectedImageIndex === lock.correctImageIndex
    const isPasswordCorrect = password === lock.correctPassword
    const isValid = isImageCorrect && isPasswordCorrect

    // تسجيل المحاولة (في التطبيق الحقيقي، احفظ في قاعدة البيانات)
    const attemptLog = {
      lockId,
      timestamp: new Date().toISOString(),
      success: isValid,
      selectedImageIndex,
      userAgent: userAgent || request.headers.get("user-agent"),
      ipAddress: ipAddress || request.headers.get("x-forwarded-for") || "unknown",
      apiKey: apiKey.substring(0, 8) + "...", // لأغراض التسجيل فقط
    }

    console.log("Verification attempt:", attemptLog)

    if (isValid) {
      return NextResponse.json({
        success: true,
        message: "Verification successful",
        data: {
          lockId,
          timestamp: attemptLog.timestamp,
          sessionToken: `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        },
      })
    } else {
      return NextResponse.json({
        success: false,
        message: "Verification failed",
        error:
          !isImageCorrect && !isPasswordCorrect
            ? "Both image and password are incorrect"
            : !isImageCorrect
              ? "Incorrect image selected"
              : "Incorrect password",
        data: {
          lockId,
          timestamp: attemptLog.timestamp,
        },
      })
    }
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Keynova Lock Verification API",
    version: "1.0.0",
    endpoints: {
      verify: "POST /api/auth/verify",
      locks: "GET /api/locks",
      analytics: "GET /api/analytics",
    },
    documentation: "/docs/api",
  })
}
