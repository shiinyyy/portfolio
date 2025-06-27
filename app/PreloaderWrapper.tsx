"use client";
import { usePathname } from "next/navigation";
import { Preloader } from "@/components/preloader";

export default function PreloaderWrapper() {
  return <Preloader />;
}
