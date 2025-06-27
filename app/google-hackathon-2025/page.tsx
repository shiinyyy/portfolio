"use client"

import React from "react";
import { motion } from "framer-motion"
import { ArrowLeft, Github, Linkedin, Mail, Shield, Database, Brain } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function GoogleHackathon2025() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="relative z-10 border-b border-zinc-800">
        <div className="container px-4 md:px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary">
              Cyber Threat Intelligence (CTI Agent)
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-8">
              A comprehensive multi-agent model designed to support decision-making of a SOC
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-zinc-900">
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
                An MCP model designed to support open-source accessing for scanning and generating reports on cyber threats. 
                The architect is extensible, capable of identifying threat groups, their techniques and associated campaigns.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                Built for Google Hackathon 2025, this project leverages Google ADK for LLM interaction and VirusTotal, 
                MITRE ATT&CK frameworks to provide real-time threat intelligence and analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo & Code Section */}
      <section className="py-20">
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
                  className="relative"
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
                    <p className="text-zinc-400 text-sm">CTI Agent Demo - Google Hackathon 2025</p>
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
                  className="bg-zinc-800 p-6 rounded-lg h-full"
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
                  <Button size="lg" className="w-full hover:text-black hover:bg-white group" asChild>
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
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Technologies & Tools</h2>
              <p className="text-zinc-400">Built with cutting-edge security and Google Cloud API</p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Python", "Google ADK", "VirusTotal", "MITRE ATT&CK",
                "Gemini 1.5 Pro", "Multi-Agent", "Database"
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800 p-4 rounded-lg text-center hover:bg-zinc-700 transition-colors"
                >
                  <span className="font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <p className="text-zinc-400">Advanced threat intelligence capabilities</p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="h-8 w-8 text-primary" />,
                  title: "Multi-Agent Architecture",
                  description: "Specialised agents for different threat intelligence tasks with seamless integration"
                },
                {
                  icon: <Database className="h-8 w-8 text-primary" />,
                  title: "Real-time Scanning",
                  description: "Leverage MITRE ATT&CK database for threat detection and pattern recognition"
                },
                {
                  icon: <Brain className="h-8 w-8 text-primary" />,
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
                  className="bg-zinc-800 p-6 rounded-lg text-center"
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
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Technical Challenges & Solutions</h2>
              <p className="text-zinc-400">Overcoming complex integration and performance challenges</p>
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
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Example Usage</h2>
              <p className="text-zinc-400">Simple endpoints for powerful threat intelligence</p>
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
                  className="bg-zinc-800 p-6 rounded-lg"
                >
                  <code className="text-primary font-mono text-sm block mb-3">
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