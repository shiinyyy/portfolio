"use client";
import { usePathname } from "next/navigation";
import { Preloader, PreloaderGH } from "@/components/preloader";

export default function PreloaderWrapper() {
  const pathname = usePathname();
  // Normalize trailing slash
  const normalized = pathname.replace(/\/$/, "");
  if (normalized.endsWith("/google-hackathon-2025")) return <PreloaderGH />;
  return <Preloader />;
}
