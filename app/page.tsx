"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  Code,
  Github,
  Linkedin,
  Mail,
  Database,
  FileCode,
  Cpu,
  Braces,
  PaintBucket,
  Layers,
  Boxes,
  Flame,
  Sparkles,
  Youtube,
  MapPin,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import ThreeDScene from "@/components/3d-scene"
import ProjectsSection from "@/components/projects-section"

// Skill data
const skills = [
  { name: "C/C++", icon: <Cpu className="h-8 w-8 text-red-500" /> },
  { name: "Verilog", icon: <FileCode className="h-8 w-8 text-red-500" /> },
  { name: "Python", icon: <Braces className="h-8 w-8 text-red-500" /> },
  { name: "SQL", icon: <Database className="h-8 w-8 text-primary" /> },
  { name: "JavaScript", icon: <Flame className="h-8 w-8 text-primary" /> },
  { name: "TypeScript", icon: <Code className="h-8 w-8 text-primary" /> },
  { name: "React", icon: <Sparkles className="h-8 w-8 text-primary" /> },
  { name: "Next.js", icon: <Layers className="h-8 w-8 text-primary" /> },
  { name: "Tailwind CSS", icon: <PaintBucket className="h-8 w-8 text-primary" /> },
  { name: "Electrical & Electronics Design", icon: <Boxes className="h-10 w-10 text-red-500" /> },
]

//Extracurricular card properties
interface ExtracurricularItem {
  title: string;
  description: string;
  image?: string;
  link?: string;
  period: string;
  role: string;
  youtubeUrl: string;
}

// Leadership experience data
const extracurriculars: ExtracurricularItem[] = [
  {
    title: "Google Hackathon 2025",
    role: "Developer",
    period: "2025",
    description:
      "Leveraged Google MCP and MITRE ATT&CK frameworks, create a data model to support a SOC on cyber threat protection and hunting.",
    image: "/Photos/Extracurricular.png",
    youtubeUrl: "https://www.youtube.com/watch?v=IaPbNhp40DM",
  },
  {
    title: "IX Studio Showcase",
    role: "Instructor",
    period: "2023",
    description:
      "Mentored a team of 7 for end of year showcase 'Take-off'. Collaborated with team members to create and perform original choreographies, maintaining a professional stage presence.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5685.PNG-fBhHL0dYevxgvlUA0OsnKUEZRj09nR.jpeg",
    youtubeUrl: "https://youtu.be/LoorcTLroGc?si=7PHQ_IQbpIFOQAsQ",
  },
]

export default function Portfolio() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section ref={ref} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          style={{
            opacity,
            scale,
            borderRadius: "1rem",
          }}
          className="container px-4 md:px-6 flex flex-col md:flex-row items-center gap-6 md:gap-12"
        >
          <div className="flex flex-col gap-4 md:gap-6 md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter relative group drop-shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white transition-all duration-700 ease-in-out group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:via-sky-500 group-hover:to-sky-600">
                Hi, I&apos;m{" "}
                <span className="text-primary transition-colors duration-700 ease-in-out group-hover:text-white">
                  Shin
                </span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400">
              A passionate Engineering graduate from University of Technology Sydney, specialising in Electrical and Data.
              Beyond me core discipline, I actively explore FinTech, computer science and major frameworks as part of my technical interests.
            </p>
            <div className="flex gap-4">
              <Button
                className="group"
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="hover:bg-indigo-300 hover:text-white transition-colors border-zinc-600 text-black"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center h-[400px] md:h-[500px] w-full relative z-10">
            <ThreeDScene />
          </div>
        </motion.div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowRight className="h-6 w-6 rotate-90" />
        </div>
      </section>

      {/* Projects Section */}
      <div id="projects">
        <ProjectsSection />
      </div>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/80 to-white relative cursor-default transition-all duration-300 transform hover:scale-[1.02] hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white transition-all duration-700 ease-in-out hover:bg-gradient-to-r hover:from-primary hover:via-sky-500 hover:to-cyan-500">
                Skills and Techstack
              </span>
            </h2>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
              Throughout my university journey, I&apos;ve been working with multiple diverse-discipline team, 
              accumulated a set of skills I find appealing and well-align to my career goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center">{skill.icon}</div>
                <h3 className="font-medium drop-shadow-sm">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/80 to-white relative cursor-default transition-all duration-300 transform hover:scale-[1.02] hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white transition-all duration-700 ease-in-out hover:bg-gradient-to-r hover:from-primary hover:via-sky-500 hover:to-cyan-500">
                Extracurricular 
              </span>
            </h2>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
              Beyond academics, I actively participate in various activities that help me grow personally and
              professionally. 
              
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12">
            {extracurriculars.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8`}
              >
                <div className="w-full md:w-1/2 relative group">
                  <div className="relative w-full h-[300px] md:w-[700px] md:h-[500px] overflow-hidden rounded-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70" />

                    <motion.div
                      className="absolute bottom-0 left-0 w-full p-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
                    >
                      <span className="inline-block px-3 py-1 bg-primary/80 text-white text-sm rounded-full mb-2">
                        {item.period}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-white/90 font-medium">{item.role}</p>
                    </motion.div>

                    <Link
                      href={item.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-transform hover:scale-110 shadow-lg"
                    >
                      <Youtube className="h-5 w-5" />
                      <span className="sr-only">Watch on YouTube</span>
                    </Link>
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.3 + 0.4 }}
                    className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-lg border border-zinc-700 [&_.text-shadow]:drop-shadow-[0_0_3px_rgba(var(--primary),0.3)]"
                  >
                    <h3 className="text-2xl font-bold mb-2 md:hidden">{item.title}</h3>
                    <p className="text-zinc-300 leading-relaxed">{item.description}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-1 w-12 bg-primary rounded-full mr-4"></div>
                        <span
                          className="font-medium transition-opacity text-shadow"
                          style={{ color: "color(srgb 0.41 0.4 1)" }}
                        >
                          {item.role}
                        </span>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-zinc-800 hover:bg-white border-zinc-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                        asChild
                      >
                        <Link href={item.youtubeUrl} target="_blank" rel="noopener noreferrer">
                          <Youtube className="mr-2 h-4 w-4 text-red-500 group-hover:text-red-400" />
                          Watch Video
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-primary/10 to-transparent"></div>
        <div className="absolute -left-32 top-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute -right-32 bottom-1/4 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"></div>

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
                My Location
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full max-w-7xl mx-auto"
          >
            <div className="relative group">
              <div className="bg-zinc-800/80 backdrop-blur-md p-4 md:p-6 rounded-xl border border-zinc-700/50 shadow-xl">
                {/* Map container */}
                <div className="relative overflow-hidden rounded-lg">
                  <div className="aspect-[16/9] relative">
                    <Image
                      src="Photos/my_location.png"
                      alt="My Location"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Map overlay with glowing effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Location marker with pulsing animation */}
                    <div
                      className="absolute z-10"
                      style={{ top: "32%", left: "57%", transform: "translate(-50%, -50%)" }}
                    >
                      <div className="relative">
                        <div className="absolute -inset-8 rounded-full bg-primary/20 animate-pulse"></div>
                        <div className="absolute -inset-5 rounded-full bg-primary/30 animate-pulse animation-delay-300"></div>
                        <div className="absolute -inset-3 rounded-full bg-primary/40 animate-pulse animation-delay-600"></div>
                        <div className="relative w-6 h-6 bg-primary rounded-full shadow-lg shadow-primary/50 flex items-center justify-center">
                        </div>
                      </div>
                    </div>

                    {/* Interactive overlay */}
                    <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <Link
                        href="https://earth.google.com/web/search/Sydney+NSW,+Australia/@-33.9325579,151.10724308,-0a,14395.48699837d,44.46884926y,15.02299889h,59.25009276t,0r/data=CiwiJgokCb4po9hR1EDAEfTUrh0KBkHAGdBdiXb_7GJAITiwOjKg3mJAQgIIAjIpCicKJQohMUUtMkVOcVBCOG00c0RUcHROcy1KdFBUUnpGb19IVi1jIAE6AwoBMEICCABKCAiyj6_zBBAB"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-white hover:text-black text-white px-6 py-3 rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex items-center"
                      >
                        <MapPin className="mr-2 h-5 w-5" />
                        Observation
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                      
                    </div>
                  </div>
                </div>

                {/* Location details */}
                <div className="mt-6 flex flex-col md:flex-row items-center justify-between">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Sydney CBD</h3>
                      <p className="text-zinc-400">New South Wales, Australia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Corner elements */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary/50 rounded-tl-lg"></div>
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-primary/50 rounded-tr-lg"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-primary/50 rounded-bl-lg"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-primary/50 rounded-br-lg"></div>
            </div>
          </motion.div>
        </div>
      </section>
      <section id="contact" className="py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/80 to-white relative cursor-default transition-all duration-300 transform hover:scale-[1.02] hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white transition-all duration-700 ease-in-out hover:bg-gradient-to-r hover:from-primary hover:via-sky-500 hover:to-cyan-500">
                Contact
              </span>
            </h2>
            <p className="text-zinc-400 text-xl">
              Connect with me and share your projects!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-indigo-300 hover:text-white transition-colors border-zinc-600 text-black"
              asChild
            >
              <Link href="mailto:minhduc.do0799@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="mr-2 h-5 w-5" />
                minhduc.do0799@gmail.com
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-indigo-300 hover:text-white transition-colors border-zinc-600 text-black"
              asChild
            >
              <Link href="https://www.linkedin.com/in/minh-duc-do/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-indigo-300 hover:text-white transition-colors border-zinc-600 text-black"
              asChild
            >
              <Link href="https://github.com/shiinyyy" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      <footer className="py-6 bg-black border-t border-zinc-800">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400">© 2025 Minh Duc Do. All rights reserved.</p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/shiinyyy?tab=repositories"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/minh-duc-do/"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:minhduc.do0799@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

