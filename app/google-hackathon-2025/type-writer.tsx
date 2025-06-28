import { Fira_Code } from "next/font/google";
import React from "react";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fira-code",
  display: "swap",
});

const glitchColors = [
  "text-indigo-400/70",
  "text-purple-400/80",
  "text-sky-400"
];

function GlitchTypewriter({ text }: { text: string }) {
  const [displayed, setDisplayed] = React.useState("");
  const [colorIdx, setColorIdx] = React.useState(0);
  const [typing, setTyping] = React.useState(true); // true = typing, false = deleting

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (typing && displayed.length < text.length) {
      // Typing duration
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, 120);
    } else if (typing && displayed.length === text.length) {
      // Wait time
      timeout = setTimeout(() => {
        setTyping(false);
      }, 4000);
    } else if (!typing && displayed.length > 0) {
      // Backspace duration
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length - 1));
      }, 100);
    } else if (!typing && displayed.length === 0) {
      // Wait time & next turn with colour adjustment
      timeout = setTimeout(() => {
        setColorIdx((prev) => (prev + 1) % glitchColors.length);
        setTyping(true);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, text]);

  // Blinking underline cursor
  return (
    <span className={`${firaCode.className} font-bold transition-colors duration-100 ${glitchColors[colorIdx]} relative`}>
      {displayed}
      <span
        className="inline-block w-4"
        style={{
          borderBottom: "2px solid",
          borderColor: "currentColor",
          visibility: displayed.length > 0 ? "visible" : "hidden",
          animation: "blink 1s steps(1) infinite"
        }}
      >
        &nbsp;
      </span>
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}

export default GlitchTypewriter;