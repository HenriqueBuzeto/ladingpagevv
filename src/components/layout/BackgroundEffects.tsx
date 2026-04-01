"use client"

import Particles from "@/components/ui/Particles"

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Particles
        className="absolute inset-0 opacity-60 mix-blend-soft-light"
        density={46}
        speed={0.12}
        opacity={0.06}
        linkDistance={220}
        linkOpacity={0.04}
        dots={false}
      />
      <div className="absolute inset-0 bg-noise opacity-[0.07] mix-blend-soft-light" />
      <div className="absolute -top-56 left-[-25%] h-[900px] w-[900px] rounded-full glow-red blur-[170px] opacity-60" />
      <div className="absolute -bottom-72 right-[-30%] h-[980px] w-[980px] rounded-full glow-amber blur-[190px] opacity-50" />
    </div>
  )
}
