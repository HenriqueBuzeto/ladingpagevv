"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

interface ToastProps {
  message: string
  type?: "success" | "error" | "info"
  onClose: () => void
  duration?: number
}

export function Toast({ message, type = "success", onClose, duration = 3000 }: ToastProps) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 flex items-center gap-4 rounded-lg border bg-card p-4 shadow-lg animate-in slide-in-from-bottom-5",
        type === "success" && "border-green-500/50 bg-green-50",
        type === "error" && "border-red-500/50 bg-red-50",
        type === "info" && "border-blue-500/50 bg-blue-50"
      )}
    >
      <p className={cn(
        "text-sm font-medium",
        type === "success" && "text-green-900",
        type === "error" && "text-red-900",
        type === "info" && "text-blue-900"
      )}>
        {message}
      </p>
      <button
        onClick={onClose}
        className="text-muted-foreground hover:text-foreground"
        aria-label="Fechar notificação"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
