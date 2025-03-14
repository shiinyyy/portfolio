"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface PreloaderProps {
  children: React.ReactNode
}

export function Preloader({ children }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Play the animation twice (assuming one cycle is about 2 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000) // 5000ms

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-zinc-900 z-50">
        <div className="relative w-[150px] h-[150px]">
          <Image
            src="/Loading.gif"
            alt="Loading..."
            fill
            priority
            className="object-contain"
            sizes="150px"
            style={{
              imageRendering: '-webkit-optimize-contrast',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
            }}
          />
        </div>
      </div>
    )
  }

  return <>{children}</>
} 