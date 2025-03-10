import { Code, Database, FileCode, Cpu, Braces, LayoutDashboard, PaintBucket, Layers } from "lucide-react"

export const projects = [
  {
    title: "Project 1",
    description: "Description of project 1.",
    technologies: ["React", "Tailwind CSS"],
    image: "/placeholder.svg",
    demoUrl: "https://example.com/project1",
    codeUrl: "https://github.com/example/project1",
  },
  {
    title: "Project 2",
    description: "Description of project 2.",
    technologies: ["Next.js", "TypeScript"],
    image: "/placeholder.svg",
    demoUrl: "https://example.com/project2",
    codeUrl: "https://github.com/example/project2",
  },
  {
    title: "Project 3",
    description: "Description of project 3.",
    technologies: ["Vue.js", "Node.js"],
    image: "/placeholder.svg",
    demoUrl: "https://example.com/project3",
    codeUrl: "https://github.com/example/project3",
  },
]

export const skills = [
  { name: "JavaScript", icon: <Code className="h-8 w-8" /> },
  { name: "TypeScript", icon: <FileCode className="h-8 w-8" /> },
  { name: "React", icon: <Braces className="h-8 w-8" /> },
  { name: "Next.js", icon: <LayoutDashboard className="h-8 w-8" /> },
  { name: "Tailwind CSS", icon: <PaintBucket className="h-8 w-8" /> },
  { name: "Node.js", icon: <Cpu className="h-8 w-8" /> },
  { name: "Databases", icon: <Database className="h-8 w-8" /> },
  { name: "Cloud", icon: <Layers className="h-8 w-8" /> },
]

export const extracurriculars = [
  {
    title: "IX Studio",
    role: "Community Builder",
    period: "2023 - Present",
    description: "Building a community with a start-up, IX Studio.",
    image:
      "https://images.unsplash.com/photo-1682685797528-6ff0ba491c95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Shiiny",
    role: "Nickname",
    period: "Forever",
    description: "My friends call me Shiiny :)",
    image:
      "https://images.unsplash.com/photo-1682685797528-6ff0ba491c95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
]

