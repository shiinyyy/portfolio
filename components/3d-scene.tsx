"use client"
import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls, Sphere, Box, Torus } from "@react-three/drei"
import { Mesh, Vector3, Group, Clock } from "three"
import type { ThreeEvent } from "@react-three/fiber"

interface InteractiveProps {
  position?: [number, number, number]
  color?: string
}

interface SceneState {
  clock: Clock
  camera: {
    position: Vector3
  }
}

// Interactive sphere component with hover effect
function InteractiveSphere({ position = [0, 0, 0], color = "#8a2be2" }: InteractiveProps) {
  const ref = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.2
      ref.current.rotation.y += delta * 0.2
    }
  })

  return (
    <Sphere
      ref={ref}
      position={position}
      scale={clicked ? 1.5 : 1}
      onClick={(event: ThreeEvent<MouseEvent>) => {
        event.stopPropagation()
        setClicked(!clicked)
      }}
      onPointerOver={(event: ThreeEvent<PointerEvent>) => {
        event.stopPropagation()
        setHovered(true)
      }}
      onPointerOut={(event: ThreeEvent<PointerEvent>) => {
        event.stopPropagation()
        setHovered(false)
      }}
    >
      <meshStandardMaterial color={hovered ? "hotpink" : color} />
    </Sphere>
  )
}

// Interactive box component with rotation animation
function InteractiveBox({ position = [0, 0, 0], color = "#4a00e0" }: InteractiveProps) {
  const ref = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useFrame((state) => {
    if (ref.current) {
      // Continuous rotation
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.5
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.3

      // Float up and down when clicked
      if (clicked) {
        ref.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 2) * 0.5
      }
    }
  })

  return (
    <Box
      ref={ref}
      position={position}
      args={[1.5, 1.5, 1.5]}
      onClick={(event: ThreeEvent<MouseEvent>) => {
        event.stopPropagation()
        setClicked(!clicked)
      }}
      onPointerOver={(event: ThreeEvent<PointerEvent>) => {
        event.stopPropagation()
        setHovered(true)
      }}
      onPointerOut={(event: ThreeEvent<PointerEvent>) => {
        event.stopPropagation()
        setHovered(false)
      }}
    >
      <meshStandardMaterial
        color={clicked ? "#00aaff" : hovered ? "#00ffaa" : color}
        metalness={0.8}
        roughness={0.2}
        emissive={hovered ? "#003322" : "#000000"}
        emissiveIntensity={hovered ? 2 : 0}
      />
    </Box>
  )
}

// Floating torus component
function FloatingTorus({ position = [0, 0, 0], color = "#ff3366" }: InteractiveProps) {
  const ref = useRef<Mesh>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.3
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.5
      ref.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime()) * 0.5
    }
  })

  return (
    <Torus ref={ref} position={position} args={[1.5, 0.5, 16, 32]}>
      <meshStandardMaterial color={color} metalness={0.6} roughness={0.3} emissive={color} emissiveIntensity={0.5} />
    </Torus>
  )
}

// Scene component with multiple interactive objects
function Scene() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffaa00" />

      <InteractiveSphere position={[-2.5, 0, 0]} color="#8a2be2" />
      <InteractiveBox position={[2.5, 0, 0]} color="#4a00e0" />
      <FloatingTorus position={[0, 2, -2]} color="#ff3366" />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  )
}

export default function ThreeDScene() {
  return (
    <div
      className="w-full h-full relative rounded-lg overflow-hidden"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gradient%20bg.jpg-hUyLVoJSlk6ipABH2RuQBTqTtVllCE.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Fallback content in case Canvas fails */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0">
        <div className="text-white text-xl">Interactive 3D Scene</div>
      </div>

      {/* Main 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        className="w-full h-full"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      >
        <Scene />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}

