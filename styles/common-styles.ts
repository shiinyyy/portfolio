export const styles = {
  // Layout
  container: "container px-4 md:px-6",
  section: "py-20",

  // Backgrounds
  bgBlack: "bg-black",
  bgDark: "bg-zinc-900",
  bgCard: "bg-zinc-800",
  bgCardHover: "hover:bg-zinc-700",

  // Text
  headingLarge: "text-4xl md:text-6xl font-bold tracking-tighter drop-shadow-lg",
  headingSection: "text-3xl md:text-4xl font-bold drop-shadow-md",
  headingSmall: "text-2xl font-bold",
  textNormal: "text-zinc-400",
  textHighlight: "text-primary",

  // Cards
  card: "bg-zinc-800 border-zinc-700 hover:border-primary transition-colors overflow-hidden group",
  cardImage: "aspect-video bg-zinc-950 relative overflow-hidden",
  cardImageHover: "transition-transform group-hover:scale-105",
  cardOverlay:
    "absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity",

  // Buttons
  buttonPrimary: "group",
  buttonOutline: "hover:bg-zinc-800 transition-colors border-zinc-600 text-black",
  buttonIcon: "hover:bg-zinc-700",

  // Animations
  motionFadeIn: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  },

  // Skills
  skillIcon: "w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center",
  skillText: "font-medium drop-shadow-sm",

  // Tags
  tag: "px-2 py-1 bg-zinc-700 rounded-md text-xs",

  // Location section
  locationContainer: "bg-zinc-800/80 backdrop-blur-md p-4 md:p-6 rounded-xl border border-zinc-700/50 shadow-xl",
  locationMarker:
    "relative w-6 h-6 bg-primary rounded-full shadow-lg shadow-primary/50 flex items-center justify-center",
  locationCorner: "w-6 h-6 border-t-2 border-l-2 border-primary/50 rounded-tl-lg",

  // Footer
  footer: "py-6 bg-black border-t border-zinc-800",
  footerText: "text-zinc-400",
  footerLink: "text-zinc-400 hover:text-white transition-colors",
}

// Motion variants for animations
export const motionVariants = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  },
  fadeInDelayed: (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
    viewport: { once: true },
  }),
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.3 },
    viewport: { once: true },
  },
}

// Gradient backgrounds
export const gradients = {
  primaryToSecondary: "bg-gradient-to-r from-primary via-fuchsia-500 to-purple-500",
  darkToLight: "bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900",
}

