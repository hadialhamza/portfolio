import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function HeroTypewriter({ words = [] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="inline-flex items-center gap-1">
      <span className="relative inline-block whitespace-nowrap pr-1">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              visible: { transition: { staggerChildren: 0.035 } },
              exit: {
                transition: { staggerChildren: 0.015, staggerDirection: -1 },
              },
            }}
            className="inline-block"
          >
            {words[index].split("").map((char, i) => (
              <motion.span
                key={`${index}-${i}`}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 15,
                    scale: 0.8,
                    filter: "blur(4px)",
                  },
                  visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
                  exit: { opacity: 0, y: -10, scale: 0.9, filter: "blur(4px)" },
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  filter: { type: "tween", duration: 0.3 },
                }}
                className={[
                  "inline-block",
                  "bg-linear-to-r from-cyan-400 via-indigo-400 to-primary",
                  "bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]",
                ].join(" ")}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
