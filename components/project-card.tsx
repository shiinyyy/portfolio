"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ArrowRight } from "lucide-react"

export interface ProjectCardProps {
  project: {
    title: string
    description: string
    technologies: string[]
    image: string
    images?: string[]
    currentImageIndex?: number
    demoUrl: string
    codeUrl: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [currentImage, setCurrentImage] = useState(project.image)

  // Auto-rotate images if multiple images exist
  useEffect(() => {
    if (!project.images || project.images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImage((current) => {
        const currentIndex = project.images!.indexOf(current)
        const nextIndex = (currentIndex + 1) % project.images!.length
        return project.images![nextIndex]
      })
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [project.images])

  return (
    <Card className="bg-zinc-800 border-zinc-700 hover:border-primary transition-colors overflow-hidden group h-full flex flex-col">
      <div className="aspect-video bg-zinc-950 relative overflow-hidden">
        <Image
          src={currentImage || "/placeholder.svg?height=400&width=600"}
          alt={project.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          unoptimized={
            typeof currentImage === "string" &&
            (currentImage.includes("drive.google.com") || currentImage.includes("v0.blob.com"))
          }
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <CardHeader className="flex-none space-y-2 pb-3">
        <CardTitle className="line-clamp-2 min-h-[2rem] text-lg">{project.title}</CardTitle>
        <CardDescription className="text-zinc-400 min-h-[6rem] line-clamp-4 text-sm leading-relaxed">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech, i) => (
            <span key={i} className="px-2 py-0.5 bg-zinc-700 rounded-md text-xs whitespace-nowrap">
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between flex-none mt-auto border-t border-zinc-700/50 pt-4">
        <Button variant="ghost" size="sm" className="hover:bg-zinc-700" asChild>
          <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </Link>
        </Button>
        <Button size="sm" className="group" asChild>
          <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            View Demo
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

