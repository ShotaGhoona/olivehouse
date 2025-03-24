"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface PieChartProps {
  percentage: number
  color: string
  backgroundColor: string
}

export const PieChart: React.FC<PieChartProps> = ({
  percentage = 15,
  color = "#ffe4a3",
  backgroundColor = "#f5f0e0",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // For high-DPI displays
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()

    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height)

    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const radius = Math.min(centerX, centerY) - 5

    // Background circle
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
    ctx.fillStyle = backgroundColor
    ctx.fill()

    // Calculate angles for the percentage
    const startAngle = -0.5 * Math.PI // Start at the top
    const endAngle = startAngle + (percentage / 100) * (2 * Math.PI)

    // Draw the percentage slice
    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.arc(centerX, centerY, radius, startAngle, endAngle)
    ctx.closePath()
    ctx.fillStyle = color
    ctx.fill()
  }, [percentage, color, backgroundColor])

  return <canvas ref={canvasRef} className="w-full h-full" style={{ width: "100%", height: "100%" }} />
}

