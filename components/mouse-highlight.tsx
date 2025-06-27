"use client";
import { useEffect, useRef, useState } from "react";

export default function MouseHighlight() {
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => setTarget({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);

    // Smooth trailing animation
    const animate = () => {
      setPos((prev) => ({
        x: prev.x + (target.x - prev.x) * 0.15,
        y: prev.y + (target.y - prev.y) * 0.15,
      }));
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [target.x, target.y]);

  return (
    <div
      style={{
        pointerEvents: "none",
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: pos.x - 125,
          top: pos.y - 125,
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(119, 69, 194, 0.35) 0%, transparent 60%)",
          pointerEvents: "none",
          transition: "background 0.1s",
        }}
      />
    </div>
  );
} 