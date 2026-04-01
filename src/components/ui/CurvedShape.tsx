"use client"

import { motion } from "framer-motion"

interface CurvedShapeProps {
  className?: string
  color?: string
  direction?: "top" | "bottom" | "left" | "right"
}

export const CurvedShape = ({ 
  className = "", 
  color = "#DC2626",
  direction = "top"
}: CurvedShapeProps) => {
  const paths = {
    top: "M0,0 Q250,100 500,0 T1000,0 L1000,200 L0,200 Z",
    bottom: "M0,200 Q250,100 500,200 T1000,200 L1000,0 L0,0 Z",
    left: "M0,0 Q100,250 0,500 T0,1000 L200,1000 L200,0 Z",
    right: "M200,0 Q100,250 200,500 T200,1000 L0,1000 L0,0 Z",
  }

  return (
    <motion.svg
      className={`absolute ${className}`}
      viewBox="0 0 1000 200"
      preserveAspectRatio="none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.path
        d={paths[direction]}
        fill={color}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </motion.svg>
  )
}

export const WaveShape = ({ 
  className = "", 
  color = "#DC2626" 
}: { className?: string; color?: string }) => {
  return (
    <div className={`absolute ${className} overflow-hidden`}>
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          fill={color}
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  )
}

export const DiagonalShape = ({ 
  className = "", 
  color = "#DC2626" 
}: { className?: string; color?: string }) => {
  return (
    <div className={`absolute ${className} overflow-hidden`}>
      <svg
        viewBox="0 0 1440 800"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          fill={color}
          d="M0,0 L1440,0 L1440,200 Q1200,400 800,400 Q400,400 0,600 Z"
        />
      </svg>
    </div>
  )
}
