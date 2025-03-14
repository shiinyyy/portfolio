"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Scroll to top immediately when component mounts
    window.scrollTo(0, 0)
    
    const timer = setTimeout(() => {
      setIsLoading(false)
      // Ensure we're at the top when loading finishes
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }, 5000) // 5 seconds to show loading animation twice

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900">
      <div className="relative w-[170px] h-[170px]">
        <Image
          src="/Loading.gif"
          alt="Loading..."
          fill
          priority
          className="object-contain"
          sizes="170px"
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