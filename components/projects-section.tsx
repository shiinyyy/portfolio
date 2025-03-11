"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "@/data/projects"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    technologies: string[]
    image: string
    demoUrl: string
    codeUrl: string
  }
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="bg-zinc-800 border-zinc-700 hover:border-primary transition-colors overflow-hidden group h-full flex flex-col">
      <div className="aspect-video bg-zinc-950 relative overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          unoptimized={project.image.includes("drive.google.com")}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <CardHeader>
        <CardTitle className="text-white/90 font-semibold text-lg md:text-xl pb-1 mb-1 border-b border-zinc-700/30">
          {project.title}
        </CardTitle>
        <CardDescription className="text-zinc-400 min-h-[80px]">{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 min-h-[40px] items-start justify-start p-1 bg-zinc-800/50 rounded-md border border-zinc-700/30">
          {project.technologies.map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-zinc-700 rounded-md text-xs inline-flex items-center">
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
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

export default function ProjectsSection() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  // Handle mouse movement over the heading
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!headingRef.current) return

    // Get the bounding rectangle of the heading
    const rect = headingRef.current.getBoundingClientRect()

    // Calculate the mouse position relative to the center of the heading
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    setMousePosition({ x, y })
  }

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/40 to-transparent"></div>
      <div className="absolute -left-32 top-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -right-32 bottom-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 text-center mb-12"
        >
          <h2
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/80 to-white relative cursor-default"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{
              transform: isHovering
                ? `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
                : "translate(0, 0)",
              textShadow: isHovering
                ? `${mousePosition.x * 0.01}px ${mousePosition.y * 0.01}px 10px rgba(139, 92, 246, 0.5)`
                : "0 0 0 transparent",
              transition: isHovering ? "none" : "all 0.5s ease-out",
            }}
          >
            My Projects
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Here are some of recent projects that showcase my expertise in various technologies and domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* View all projects button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Button
            size="lg"
            className="group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700"
            asChild
          >
            <Link href="https://github.com/shiinyyy?tab=repositories" target="_blank" rel="noopener noreferrer">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

