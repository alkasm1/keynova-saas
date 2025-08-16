"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Lock, Eye, EyeOff, CheckCircle, XCircle, AlertTriangle } from "lucide-react"

interface VisualLockProps {
  title?: string
  description?: string
  images?: string[]
  correctImageIndex?: number
  correctPassword?: string
  onSuccess?: () => void
  onFailure?: (attempts: number) => void
  maxAttempts?: number
  showInstructions?: boolean
  theme?: "light" | "dark"
  size?: "sm" | "md" | "lg"
}

export function VisualLock({
  title = "القفل البصري",
  description = "اختر الصورة الصحيحة وأدخل كلمة المرور",
  images,
  correctImageIndex = 0,
  correctPassword = "demo123",
  onSuccess,
  onFailure,
  maxAttempts = 3,
  showInstructions = true,
  theme = "light",
  size = "md",
}: VisualLockProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [status, setStatus] = useState<"idle" | "checking" | "success" | "error" | "locked">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  // Default gradient images if none provided
  const defaultImages = [
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    "linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)",
    "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
  ]

  const displayImages = images || defaultImages

  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-20 h-20",
    lg: "w-24 h-24",
  }

  const gridCols = {
    sm: "grid-cols-3",
    md: "grid-cols-4",
    lg: "grid-cols-4",
  }

  useEffect(() => {
    if (attempts >= maxAttempts) {
      setStatus("locked")
    }
  }, [attempts, maxAttempts])

  const handleImageSelect = (index: number) => {
    if (status === "locked") return
    setSelectedImageIndex(index)
    setStatus("idle")
    setErrorMessage("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === "locked") return

    if (selectedImageIndex === null) {
      setErrorMessage("يرجى اختيار صورة أولاً")
      return
    }

    if (!password.trim()) {
      setErrorMessage("يرجى إدخال كلمة المرور")
      return
    }

    setStatus("checking")

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const isImageCorrect = selectedImageIndex === correctImageIndex
    const isPasswordCorrect = password === correctPassword

    if (isImageCorrect && isPasswordCorrect) {
      setStatus("success")
      onSuccess?.()
    } else {
      const newAttempts = attempts + 1
      setAttempts(newAttempts)
      setStatus("error")

      if (!isImageCorrect && !isPasswordCorrect) {
        setErrorMessage("الصورة وكلمة المرور غير صحيحة")
      } else if (!isImageCorrect) {
        setErrorMessage("الصورة المختارة غير صحيحة")
      } else {
        setErrorMessage("كلمة المرور غير صحيحة")
      }

      onFailure?.(newAttempts)

      // Reset after showing error
      setTimeout(() => {
        if (newAttempts < maxAttempts) {
          setStatus("idle")
          setSelectedImageIndex(null)
          setPassword("")
        }
      }, 2000)
    }
  }

  const handleReset = () => {
    setSelectedImageIndex(null)
    setPassword("")
    setAttempts(0)
    setStatus("idle")
    setErrorMessage("")
  }

  if (status === "success") {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-green-800 mb-2">تم التحقق بنجاح!</h3>
          <p className="text-green-600 mb-4">تم فتح القفل البصري</p>
          <Button onClick={handleReset} variant="outline">
            إعادة المحاولة
          </Button>
        </CardContent>
      </Card>
    )
  }

  if (status === "locked") {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="text-center py-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <XCircle className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-xl font-semibold text-red-800 mb-2">تم قفل النظام</h3>
          <p className="text-red-600 mb-4">تم تجاوز الحد الأقصى للمحاولات ({maxAttempts})</p>
          <Button onClick={handleReset} variant="outline">
            إعادة تعيين
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={`max-w-md mx-auto ${theme === "dark" ? "bg-gray-900 border-gray-700" : ""}`}>
      <CardHeader className="text-center">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
          <Lock className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="flex items-center justify-center gap-2">
          {title}
          {attempts > 0 && (
            <Badge variant="destructive" className="text-xs">
              {attempts}/{maxAttempts}
            </Badge>
          )}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {showInstructions && (
          <Alert>
            <AlertTriangle className="w-4 h-4" />
            <AlertDescription className="text-sm">
              اختر الصورة الصحيحة وأدخل كلمة المرور للمتابعة. لديك {maxAttempts - attempts} محاولة متبقية.
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Image Grid */}
          <div>
            <p className="text-sm font-medium mb-3 text-center">اختر الصورة:</p>
            <div className={`grid ${gridCols[size]} gap-2`}>
              {displayImages.slice(0, 12).map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleImageSelect(index)}
                  disabled={status === "checking"}
                  className={`
                    ${sizeClasses[size]} rounded-lg border-2 transition-all duration-200 relative overflow-hidden
                    ${
                      selectedImageIndex === index
                        ? "border-primary ring-2 ring-primary/20 scale-105"
                        : "border-border hover:border-primary/50"
                    }
                    ${status === "checking" ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                  `}
                  style={{
                    background: image.startsWith("linear-gradient") ? image : `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute top-1 right-1 w-5 h-5 bg-black/50 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  {selectedImageIndex === index && (
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Password Input */}
          <div>
            <p className="text-sm font-medium mb-2">كلمة المرور:</p>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="أدخل كلمة المرور"
                className="text-right pr-10"
                disabled={status === "checking"}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute left-0 top-0 h-full px-3 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
                disabled={status === "checking"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <Alert variant="destructive">
              <XCircle className="w-4 h-4" />
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full"
            disabled={status === "checking" || !selectedImageIndex || !password.trim()}
          >
            {status === "checking" ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin ml-2" />
                جاري التحقق...
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4 ml-2" />
                تحقق من المفتاح
              </>
            )}
          </Button>
        </form>

        {/* Demo Info */}
        {showInstructions && (
          <div className="text-xs text-muted-foreground text-center space-y-1 pt-2 border-t">
            <p>للعرض التوضيحي:</p>
            <p>الصورة الصحيحة: #{correctImageIndex + 1}</p>
            <p>كلمة المرور: {correctPassword}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
