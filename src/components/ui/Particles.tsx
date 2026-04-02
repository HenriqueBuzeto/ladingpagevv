"use client"

import * as React from "react"

type ParticlesProps = {
  className?: string
  density?: number
  speed?: number
  color?: string
  opacity?: number
  linkDistance?: number
  linkOpacity?: number
  links?: boolean
  dots?: boolean
}

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

export default function Particles({
  className,
  density = 42,
  speed = 0.35,
  color = "255,255,255",
  opacity = 0.2,
  linkDistance = 140,
  linkOpacity = 0.08,
  links = true,
  dots = true,
}: ParticlesProps) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let raf = 0
    let particles: Particle[] = []

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      particles = Array.from({ length: density }, () => {
        const r = 1 + Math.random() * 2.25
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          r,
        }
      })
    }

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, width, height)

      if (links) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const a = particles[i]
            const b = particles[j]
            const dx = a.x - b.x
            const dy = a.y - b.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist > linkDistance) continue

            const alpha = (1 - dist / linkDistance) * linkOpacity
            if (alpha <= 0) continue

            ctx.beginPath()
            ctx.strokeStyle = `rgba(${color},${alpha})`
            ctx.lineWidth = 1
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10
        if (p.y < -10) p.y = height + 10
        if (p.y > height + 10) p.y = -10

        if (dots) {
          ctx.beginPath()
          ctx.fillStyle = `rgba(${color},${opacity})`
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      raf = window.requestAnimationFrame(draw)
    }

    const onResize = () => resize()

    resize()
    raf = window.requestAnimationFrame(draw)
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
      window.cancelAnimationFrame(raf)
    }
  }, [color, density, dots, linkDistance, linkOpacity, links, opacity, speed])

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className ?? ""}`}
      aria-hidden="true"
    />
  )
}
