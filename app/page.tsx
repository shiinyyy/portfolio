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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import ThreeDScene from "@/components/3d-scene"
import ProjectsSection from "@/components/projects-section"

// Project card data
const projects = [
  {
    title: "AI-copilot",
    description:
      "A model being trained on text messages all member in the team and gpt-3.5. It accepting prompt and response with basic answers (mostly nonsense because of unsopihsticated data training)",
    technologies: ["Python", "HTML", "CSS"],
    image:
      "https://img.freepik.com/free-vector/dialog-with-chatbot-artificial-intelligence-reply-question-tech-support-instant-messaging-hotline-operator-ai-assistant-client-bot-consultant-ai-assistant-client-bot-consultant-vector-isolated-concept-metaphor-illustration_335657-4298.jpg?t=st=1741533756~exp=1741537356~hmac=77108721b1f2bf9591c154c8aa54f35795d1a0a982136ab85bdb6289c9d96904&w=740",
    demoUrl: "https://github.com/shiinyyy/ai-copilot",
    codeUrl: "https://github.com/shiinyyy/ai-copilot",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcases my skills with interactive objects",
    technologies: ["HTML", "Next.js", "Tailwind CSS", "Framer Motion"],
    image:
      "https://img.freepik.com/free-vector/boss-man-concept-illustration_114360-19846.jpg?t=st=1741533958~exp=1741537558~hmac=4211f882d8fb6d93318c6baeef2825331560afa416b08e6c521e4cb062e374e6&w=740",
    demoUrl: "https://minhducdo.info",
    codeUrl: "https://github.com/shiinyyy/portfolio",
  },
  {
    title: "Car-Parking System",
    description:
      "An automated parking management system with real-time monitoring using ultrasonic sensors and LCD display for space detection",
    technologies: ["Arduino", "C", "C++", "Verilog HDL"],
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%2010-3-2025%20at%202.12%E2%80%AFam-HQOYAY0DVPQe7eHgMqGXLp8sNP38jH.jpeg",
    ],
    currentImageIndex: 0,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%2010-3-2025%20at%202.12%E2%80%AFam-HQOYAY0DVPQe7eHgMqGXLp8sNP38jH.jpeg", // Default to first image
    demoUrl: "https://drive.google.com/file/d/1smG807Y6wPASWdU0KTMxHjZYZOCAKADx/view?usp=sharing",
    codeUrl: "https://github.com/shiinyyy/Parking-System-Cyclone-IV",
  },
  {
    title: "MPPT tracking",
    description:
      "Tracking maximum power point of solar panel to maximise power generation. Perturb and Observe is the main algorithm while artificial neural network represented as fine-tune algorithm to increase the efficiency",
    technologies: ["Arduino", "C", "C++"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%2010-3-2025%20at%202.13%E2%80%AFam-y8YfRubDcfZEMHYzObtMqu6oqmqUJQ.jpeg",
    demoUrl: "https://drive.google.com/file/d/1UtEzux2xu0QF2GjWsNpefvQQtW-GeWFu/view?usp=drive_link",
    codeUrl: "https://github.com/shiinyyy/MPPT-Tracking",
  },
  {
    title: "Voice Assistant",
    description:
      "Real-time voice assistant as a function for a smart hub. It integrated with multiple api including openAI-4o for data accessibility, Silero and Deepgram for text-to-speech/speech-to-text",
    technologies: ["Python", "SQL"],
    image:
      "https://img.freepik.com/free-vector/voice-control-concept-illustration_114360-1250.jpg?t=st=1741534716~exp=1741538316~hmac=c83fb125432bab8ebb5ae20db5baf1c7eb57f9c5e3360a7a5286228310d87593&w=740",
    demoUrl: "https://www.figma.com/design/JGIOROtt15pOmdv720hWGT/Minh-Duc-Do?node-id=0-1&t=uNki1yEZxT9FMOjB-1",
    codeUrl: "https://github.com/shiinyyy/Voice_Assistant",
  },
  {
    title: "Rock, paper, scissors",
    description: "A simple game I created when praticing conditional function with Js",
    technologies: ["JavaScript"],
    image:
      "https://img.freepik.com/free-vector/rock-paper-scissors-posters-with-palm-hands-fist-victory-symbol-vector-banners-hand-gesture-game-with-cartoon-illustration-human-arms-playing-gesturing-game_107791-8421.jpg?t=st=1741550617~exp=1741554217~hmac=3e74a02688448c1ffaa5f60db3d869d7574e1d1ad88a554dbfbdc3b493fc2a96&w=996",
    demoUrl: "https://github.com/shiinyyy/Rock-paper-scissor",
    codeUrl: "https://github.com/shiinyyy/Rock-paper-scissor",
  },
]

// Skill data
const skills = [
  { name: "C/C++", icon: <Cpu className="h-8 w-8 text-primary" /> },
  { name: "Verilog", icon: <FileCode className="h-8 w-8 text-primary" /> },
  { name: "Python", icon: <Braces className="h-8 w-8 text-primary" /> },
  { name: "SQL", icon: <Database className="h-8 w-8 text-primary" /> },
  { name: "JavaScript", icon: <Flame className="h-8 w-8 text-primary" /> },
  { name: "TypeScript", icon: <Code className="h-8 w-8 text-primary" /> },
  { name: "React", icon: <Sparkles className="h-8 w-8 text-primary" /> },
  { name: "Next.js", icon: <Layers className="h-8 w-8 text-primary" /> },
  { name: "Tailwind CSS", icon: <PaintBucket className="h-8 w-8 text-primary" /> },
  { name: "Electrical & Electronics Design", icon: <Boxes className="h-10 w-10 text-red-500" /> },
]

// Leadership experience data
const extracurriculars = [
  {
    title: "IX Studio Showcase",
    role: "Instructor",
    period: "2023",
    description:
      "Mentored a team of 7 for end of year showcase 'Take-off'. Collaborated with team members to create and perform original choreographies, maintaining a professional stage presence.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5685.PNG-fBhHL0dYevxgvlUA0OsnKUEZRj09nR.jpeg",
    youtubeUrl: "https://youtu.be/LoorcTLroGc?si=7PHQ_IQbpIFOQAsQ",
  },
  {
    title: "IMI K-pop Competition",
    role: "Co-leading",
    period: "2022",
    description:
      "Led our team to victory in the IMI KPOP LIVE 2 competition. Coordinated rehearsals, choreography modifications, and team logistics while performing as a lead dancer.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5686.PNG-LGNqekFhtkedqqmONyVUOnTtjq8auO.jpeg",
    youtubeUrl: "https://youtu.be/OkEINKDTbHU?si=u6OPODy8utLe4_yY",
  },
]

// Project card properties
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
    <Card className="bg-zinc-800 border-zinc-700 hover:border-primary transition-colors overflow-hidden group">
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
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="text-zinc-400">{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-zinc-700 rounded-md text-xs">
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

// Extracurricular card properties
interface ExtracurricularCardProps {
  item: {
    title: string
    role: string
    period: string
    description: string
    image: string
    youtubeUrl: string
  }
}

// Extracurricular card components
const ExtracurricularCard = ({ item }: ExtracurricularCardProps) => {
  return (
    <Card className="bg-zinc-800 border-zinc-700 hover:border-primary transition-colors overflow-hidden group">
      <div className="aspect-video bg-zinc-950 relative overflow-hidden">
        <Image
          src={item.image || "/placeholder.svg?height=400&width=600"}
          alt={item.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          unoptimized={typeof item.image === "string" && item.image.includes("freepik.com")}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{item.title}</CardTitle>
          <span className="text-xs text-zinc-400 bg-zinc-700 px-2 py-1 rounded-full">{item.period}</span>
        </div>
        <CardDescription className="text-primary font-medium">{item.role}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-zinc-400">{item.description}</p>
      </CardContent>
    </Card>
  )
}

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
            backgroundImage: "url('/bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "1rem",
          }}
          className="container px-4 md:px-6 flex flex-col md:flex-row items-center gap-6 md:gap-12"
        >
          <div className="flex flex-col gap-4 md:gap-6 md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter relative group drop-shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white transition-all duration-700 ease-in-out group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-fuchsia-500 group-hover:to-purple-500">
                Hi, I'm{" "}
                <span className="text-primary transition-colors duration-700 ease-in-out group-hover:text-white">
                  Minh Do
                </span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400">
              A passionate Engineering graduate from University of Technology Sydney specialised in Electrical and Data.
              I also explore other topics covering computer science and major framworks as a hobby in leisure.
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
                className="hover:bg-zinc-800 transition-colors border-zinc-600 text-black"
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
      <section className="py-20 bg-black" key="skills-section">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/80 to-white relative cursor-default transition-all duration-300 transform hover:scale-[1.02] hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white transition-all duration-700 ease-in-out hover:bg-gradient-to-r hover:from-primary hover:via-fuchsia-500 hover:to-purple-500">
                My Skills
              </span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Throughout my university journey, I've been working with multiple team across various disciplines and
              accumulated a set of skills that I find appealing
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
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold drop-shadow-md">Extracurricular Activities</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Beyond academics, I actively participate in various activities that help me grow personally and
              professionally. Help to build the commnunity with a start-up, IX Studio. And my friends called my Shiiny
              :)
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
                  <div className="aspect-[4/3] overflow-hidden rounded-lg relative">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      unoptimized={typeof item.image === "string" && item.image.includes("freepik.com")}
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
                        <span className="text-primary/90 font-medium transition-opacity hover:text-primary/100 text-shadow">
                          {item.role}
                        </span>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-zinc-800 hover:bg-zinc-700 border-zinc-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
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

      {/* Location Section with Enhanced Styling */}
      <section className="py-20 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900"></div>

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
            <h2 className="text-3xl md:text-4xl font-bold drop-shadow-md">My Location</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full max-w-4xl mx-auto"
          >
            <div className="relative group">
              <div className="bg-zinc-800/80 backdrop-blur-md p-4 md:p-6 rounded-xl border border-zinc-700/50 shadow-xl">
                {/* Map container */}
                <div className="relative overflow-hidden rounded-lg">
                  <div className="aspect-[16/9] relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-10%20at%209.49.08%E2%80%AFam-eRVcnGqSk3XMskfrh0kEeI2VuO39h3.png"
                      alt="Map of Sydney CBD and surrounding suburbs"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Map overlay with glowing effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Location marker with pulsing animation */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="relative">
                        <div className="absolute -inset-8 rounded-full bg-primary/20 animate-pulse"></div>
                        <div className="absolute -inset-5 rounded-full bg-primary/30 animate-pulse animation-delay-300"></div>
                        <div className="absolute -inset-3 rounded-full bg-primary/40 animate-pulse animation-delay-600"></div>
                        <div className="relative w-6 h-6 bg-primary rounded-full shadow-lg shadow-primary/50 flex items-center justify-center">
                          <MapPin className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Interactive overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <Link
                        href="https://www.google.com/maps/place/Sydney+NSW/@-33.868766,151.1936442,13.69z/data=!4m6!3m5!1s0x6b129838f39a743f:0x3017d681632a850!8m2!3d-33.8688197!4d151.2092955!16zL20vMDZ5NTc?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex items-center"
                      >
                        <MapPin className="mr-2 h-5 w-5" />
                        Open in Google Maps
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Location details */}
                <div className="mt-6 flex flex-col md:flex-row items-center justify-between">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Sydney CBD</h3>
                      <p className="text-zinc-400">New South Wales, Australia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary/50 rounded-tl-lg"></div>
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-primary/50 rounded-tr-lg"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-primary/50 rounded-bl-lg"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-primary/50 rounded-br-lg"></div>
            </div>
          </motion.div>
        </div>
      </section>
      <section id="contact" className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold drop-shadow-md mb-4">Get In Touch</h2>
            <p className="text-zinc-400">
              recently completed my last units on November 2024. You can find me on social media and my project
              repositories here
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
              className="hover:bg-zinc-800 transition-colors border-zinc-600 text-black"
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
              className="hover:bg-zinc-800 transition-colors border-zinc-600 text-black"
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
              className="hover:bg-zinc-800 transition-colors border-zinc-600 text-black"
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

