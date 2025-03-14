"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000) // 4 seconds to show loading animation twice

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900">
      <div className="relative w-[150px] h-[150px]">
        <Image
          src="/Loading.gif"
          alt="Loading..."
          fill
          priority
          className="object-contain"
          sizes="150px"
          style={{
            WebkitBackfaceVisibility: "hidden",
            WebkitTransform: "translateZ(0)",
            WebkitPerspective: "1000",
          }}
        />
      </div>
    </div>
  )
} 