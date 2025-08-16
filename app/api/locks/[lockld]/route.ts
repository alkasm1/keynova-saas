import { type NextRequest, NextResponse } from "next/server"

// Mock data (same as above)
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
])

function validateApiKey(apiKey: string) {
  return mockApiKeys.get(apiKey)
}

// GET /api/locks/[lockId] - الحصول على قفل محدد
export async function GET(request: NextRequest, { params }: { params: { lockId: string } }) {
  try {
    const apiKey = request.headers.get("x-api-key")
    const { lockId } = params

    if (!apiKey) {
      return NextResponse.json({ error: "API key is required" }, { status: 401 })
    }

    const keyData = validateApiKey(apiKey)
    if (!keyData || !keyData.active) {
      return NextResponse.json({ error: "Invalid or inactive API key" }, { status: 401 })
    }

    const lock = mockLocks.get(lockId)
    if (!lock || lock.projectId !== keyData.projectId) {
      return NextResponse.json({ error: "Lock not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      data: lock,
    })
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// PUT /api/locks/[lockId] - تحديث قفل
export async function PUT(request: NextRequest, { params }: { params: { lockId: string } }) {
  try {
    const apiKey = request.headers.get("x-api-key")
    const { lockId } = params
    const updates = await request.json()

    if (!apiKey) {
      return NextResponse.json({ error: "API key is required" }, { status: 401 })
    }

    const keyData = validateApiKey(apiKey)
    if (!keyData || !keyData.active) {
      return NextResponse.json({ error: "Invalid or inactive API key" }, { status: 401 })
    }

    const lock = mockLocks.get(lockId)
    if (!lock || lock.projectId !== keyData.projectId) {
      return NextResponse.json({ error: "Lock not found" }, { status: 404 })
    }

    // تحديث القفل
    const updatedLock = {
      ...lock,
      ...updates,
      id: lockId, // منع تغيير المعرف
      projectId: lock.projectId, // منع تغيير معرف المشروع
      updatedAt: new Date().toISOString(),
    }

    mockLocks.set(lockId, updatedLock)

    return NextResponse.json({
      success: true,
      message: "Lock updated successfully",
      data: updatedLock,
    })
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// DELETE /api/locks/[lockId] - حذف قفل
export async function DELETE(request: NextRequest, { params }: { params: { lockId: string } }) {
  try {
    const apiKey = request.headers.get("x-api-key")
    const { lockId } = params

    if (!apiKey) {
      return NextResponse.json({ error: "API key is required" }, { status: 401 })
    }

    const keyData = validateApiKey(apiKey)
    if (!keyData || !keyData.active) {
      return NextResponse.json({ error: "Invalid or inactive API key" }, { status: 401 })
    }

    const lock = mockLocks.get(lockId)
    if (!lock || lock.projectId !== keyData.projectId) {
      return NextResponse.json({ error: "Lock not found" }, { status: 404 })
    }

    // حذف القفل
    mockLocks.delete(lockId)

    return NextResponse.json({
      success: true,
      message: "Lock deleted successfully",
    })
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
