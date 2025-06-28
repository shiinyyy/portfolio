"use client"

import type React from "react"
// import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"

export default function ProjectsSection() {

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Remove all background and gradient divs*/}
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 text-center mb-12"
        >
            <h2 className="text-3xl md:text-4xl font-bold drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/80 to-white relative cursor-default transition-all duration-300 transform hover:scale-[1.02] hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white transition-all duration-700 ease-in-out hover:bg-gradient-to-r hover:from-primary hover:via-sky-500 hover:to-cyan-500">
                My Projects
              </span>
            </h2>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
            Here are some of my recent projects, implemented different technologies and domains.
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
            className="group bg-gradient-to-r from-primary to-transparent hover:from-primary/90 hover:to-indigo-400"
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

