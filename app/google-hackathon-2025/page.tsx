"use client"

import React from "react";
import { motion } from "framer-motion"
import { ArrowLeft, Github, Linkedin, Mail, Shield, Database, Network } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import GlitchTypewriter from "./type-writer"

export default function GoogleHackathon2025() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Floating Back Button */}
      <div className="fixed top-6 left-6 z-50 group opacity-0" style={{ animation: 'showButton 0.5s ease-in-out 4s forwards' }}>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 bg-transparent backdrop-blur-sm border border-zinc-700/30 text-zinc-400 hover:text-white hover:bg-black/70 hover:border-zinc-700 px-2 py-2 rounded-lg transition-all duration-300 hover:scale-105 group-hover:px-4 overflow-hidden"
        >
          <ArrowLeft className="h-4 w-4 flex-shrink-0" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Back to Portfolio
          </span>
        </Link>
        <style jsx>{`
          @keyframes showButton {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
      </div>

    <div className="relative min-h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/data_globe.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen">
      <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-6xl font-bold mb-6 bg-clip-text text-white/40 bg-gradient-to-r from-white via-sky-400 to-white">
              Reinforce your Cyber team's
            </h1>
            <h1 className="text-3xl md:text-6xl font-bold mb-6 bg-clip-text text-white/40 bg-gradient-to-r from-white via-sky-400 to-white">
              Capability with <GlitchTypewriter text="flowCTI" />
            </h1>
            <p className="text-xl md:text-2xl text-zinc-100 mb-4">
               A cyber threat intel (CTI) multi-agent model designed for SOCs
            </p>
            <p className="text-xl md:text-2xl text-zinc-100 mb-8">
               Support decision-making
            </p>
          </motion.div>
      </div>
    </div>

      {/* Hero Section */}
      {/* Project Details */}
      <section className="py-20 bg-transparent">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="relative w-full md:w-2/3 aspect-video bg-zinc-800 rounded-lg overflow-hidden flex items-center justify-center mx-auto">
              <Image
                src="/Photos/demo_run.png"
                alt="CTI Agent Architecture"
                fill
                className="object-contain"
              />
            </div>
            {/* Description */}
            <div className="w-full md:w-1/3">
              <h2 className="text-3xl font-bold mb-6">About the Project</h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                An data model designed to support open-source accessing for scanning and generating reports on cyber threats. 
                Through model context protocol, the architect is extensible, capable of identifying threat groups, their techniques and associated campaigns.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                Built for Google Hackathon 2025, flowCTI leverages Google ADK for LLM interaction and VirusTotal, 
                MITRE ATT&CK frameworks to provide real-time threat intelligence and analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo & Code Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">The Demo</h2>
              <p className="text-zinc-400"></p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Video Preview */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="backdrop-blur-sm border border-white/10 hover:border-white/40 p-6 rounded-lg h-full bg-gradient-to-r from-zinc-900/80 via-white/5 to-transparent"
                >
                  <div className="aspect-video bg-zinc-800 rounded-lg overflow-hidden shadow-2xl">
                    <iframe
                      src="https://www.youtube.com/embed/IaPbNhp40DM"
                      title="CTI Agent Demo"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-zinc-200 text-md">CTI Agent Demo - Google Hackathon 2025</p>
                  </div>
                </motion.div>
              </div>
              
              {/* Code Section */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="backdrop-blur-sm border border-white/10 p-6 rounded-lg h-full bg-gradient-to-r from-zinc-900/80 via-white/5 to-transparent"
                >
                  <h3 className="text-xl font-bold mb-4">Source</h3>
                  <p className="text-zinc-300 mb-6">
                    Explore the complete implementation on GitHub. The project includes:
                  </p>
                  <ul className="text-zinc-300 mb-6 space-y-2">
                    <li>• Multi-agent architecture</li>
                    <li>• Google ADK integration</li>
                    <li>• VirusTotal API</li>
                    <li>• MITRE ATT&CK framework</li>
                    <li>• Comprehensive documentation</li>
                  </ul>
                  <Button size="lg" className="w-90 bg-zinc-800 hover:text-black hover:bg-white group" asChild>
                    <Link href="https://github.com/shiinyyy/cyber_threat_intel-MCP" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-5 w-5" />
                      View on GitHub
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies*/}
      <section className="py-20 bg-zinc-950">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">Technologies & Tools</h2>
              <p className="text-zinc-400 text-xl">Built with threat databases security and Google Cloud API</p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "Google ADK", "VirusTotal", "MITRE ATT&CK",
                "Gemini 1.5 Pro", "MCP",
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-900 p-4 rounded-lg text-center hover:bg-zinc-700 transition-colors"
                >
                  <span className="font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-10 bg-zinc-950">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">Key Features</h2>
              <p className="text-zinc-400 text-xl">Advanced threat intelligence capabilities</p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="h-8 w-8 text-indigo-200" />,
                  title: "MCP Architecture",
                  description: "Specialised agents for different threat intelligence tasks with seamless integration"
                },
                {
                  icon: <Database className="h-8 w-8 text-indigo-200" />,
                  title: "Data Fetching",
                  description: "Leverage MITRE ATT&CK database for threat detection and pattern recognition"
                },
                {
                  icon: <Network className="h-8 w-8 text-indigo-200" />,
                  title: "Real-time Scanning",
                  description: "Scan suspicious URLs and analyse IP addresses with comprehensive threat reports"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg text-center bg-gradient-to-r from-zinc-900/80 via-zinc-900/60 to-transparent"
                >
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-zinc-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Challenges */}
      <section className="py-20 bg-zinc-950">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">Technical Challenges & Solutions</h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-red-400">Challenges Faced:</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Model Limitations with Gemini 1.5 Pro function calling</li>
                  <li>• Response optimisation for detailed tool-calling</li>
                  <li>• Tool integration complexity</li>
                  <li>• Database performance optimisation</li>
                  <li>• Context management</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-green-400">Solutions Implemented:</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Multi-agent architecture separation</li>
                  <li>• Tool wrapping for seamless integration</li>
                  <li>• Optimised database access patterns</li>
                  <li>• Comprehensive agent instructions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="py-10 bg-zinc-950">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">Example Usage</h2>
              <p className="text-zinc-400 text-xl">Simple endpoints for powerful threat intelligence</p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  command: "agent.scanURL()",
                  description: "Scan suspicious URLs for threats"
                },
                {
                  command: "agent.get_group_techniques()",
                  description: "Get comprehensive threat intelligence reports"
                },
                {
                  command: "agent.getIP()",
                  description: "Analyse IP addresses for malicious activities"
                }
              ].map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="backdrop-blur-sm border border-white/10 p-6 rounded-lg h-full bg-gradient-to-r from-zinc-900/80 via-white/5 to-transparent"
                >
                  <code className="text-white/30 font-mono text-sm block mb-3">
                    {example.command}
                  </code>
                  <p className="text-zinc-300">{example.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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