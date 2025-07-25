import { ProjectCardProps } from "@/components/project-card"

export const projects: ProjectCardProps["project"][] = [
  {
    title: "Message Co-pilot",
    description:
      "A model being trained on text messages of all members in the team and gpt-3.5. It accepting prompt and response with basic answers (mostly nonsense because of unsopihsticated data training)",
    technologies: ["Python", "HTML", "CSS"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/robot.jpg-qJPWwO4xOxWLbnUMTXMzdxg4jOYIGh.jpeg",
    demoUrl: "https://github.com/shiinyyy/ai-copilot",
    codeUrl: "https://github.com/shiinyyy/ai-copilot",
  },
  {
    title: "Cyber Threat Intel - MCP",
    description: "A multi-agent data model designed to support decision-making of a SOC on cyber threats. The architect is extensible, capable of identifying threat groups, their techniques and associated campaigns.",
    technologies: ["Python", "MITRE ATT&CK", "VirusTotal"],
    image:
      "/Photos/CTI_Architecture.png",
    demoUrl: "https://minhducdo.info/google-hackathon-2025",
    codeUrl: "https://github.com/shiinyyy/portfolio",
  },
  {
    title: "Parking System",
    description:
      "An automated parking management system with monitoring using ultrasonic sensors and LCD display for space detection",
    technologies: ["Arduino", "C", "C++", "Verilog HDL"],
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%2010-3-2025%20at%202.12%E2%80%AFam-HQOYAY0DVPQe7eHgMqGXLp8sNP38jH.jpeg",
    ],
    currentImageIndex: 0,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%2010-3-2025%20at%202.12%E2%80%AFam-HQOYAY0DVPQe7eHgMqGXLp8sNP38jH.jpeg",
    demoUrl: "https://drive.google.com/file/d/1smG807Y6wPASWdU0KTMxHjZYZOCAKADx/view?usp=sharing",
    codeUrl: "https://github.com/shiinyyy/Parking-System-Cyclone-IV",
  },
  {
    title: "MPPT Tracking",
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
      "Voice assistant as a function for a smart hub. It integrated with multiple api including openAI-4o for data accessibility, Silero and Deepgram for text-to-speech/speech-to-text",
    technologies: ["Python", "TypeScript"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-10%20at%207.15.26%E2%80%AFpm-3GzF9NBivwMFQjYqyt5wyga4yqiekM.png",
    demoUrl: "https://www.figma.com/design/JGIOROtt15pOmdv720hWGT/Minh-Duc-Do?node-id=0-1&t=uNki1yEZxT9FMOjB-1",
    codeUrl: "https://github.com/shiinyyy/Voice_Assistant",
  },
  {
    title: "FULLSTACK",
    description: "A responsive portfolio website showcases my skills with interactive objects",
    technologies: ["HTML", "Next.js", "Tailwind CSS", "React", "Typescript", "Framer Motion",],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-10%20at%207.10.27%E2%80%AFpm-W85TRu4jeHshvAlXe7vrpd2k9b30Vk.png",
    demoUrl: "https://minhducdo.info",
    codeUrl: "https://github.com/shiinyyy/portfolio",
  },
]

export interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  images?: string[]
  currentImageIndex?: number
  demoUrl: string
  codeUrl: string
} 