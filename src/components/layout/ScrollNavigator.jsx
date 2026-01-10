import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollNavigator = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Constants
  const SECTIONS = ["home", "about", "skills", "projects", "contact", "footer"];

  // Handlers
  const handleScroll = () => {
    const scrollY = window.scrollY;

    // 1. Position Logic: Move to corner immediately on scroll
    setIsHeroVisible(scrollY < 50);

    // 2. Check if at bottom (including footer)
    setIsAtBottom(
      window.innerHeight + scrollY >= document.body.offsetHeight - 50
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const viewportTop = window.scrollY;

    // Find the first section that is significantly below the current viewport top
    for (const sectionId of SECTIONS) {
      const el = document.getElementById(sectionId);
      if (el) {
        const top = el.offsetTop;
        // Buffer to find next section
        if (top > viewportTop + 100) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={isHeroVisible ? "center" : "corner"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed z-50 cursor-pointer group bottom-10 ${
          isHeroVisible ? "left-1/2 -translate-x-1/2" : "right-6 md:right-10"
        }`}
        onClick={handleClick}
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {isAtBottom ? (
            // Back to Top Indicator
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-110 transition-transform">
              <ArrowUp className="text-slate-900 w-6 h-6 animate-bounce" />
            </div>
          ) : (
            // Mouse Scroll Indicator
            <div className="flex flex-col items-center gap-2">
              <span
                className={`text-xs font-medium text-slate-400 tracking-widest uppercase group-hover:text-primary transition-colors hidden md:block ${
                  !isHeroVisible && "hidden"
                }`}
              >
                Scroll
              </span>
              <div
                className={`w-[30px] h-[50px] rounded-full border-2 border-slate-400/50 group-hover:border-primary/80 flex justify-center p-2 box-border shadow-lg shadow-black/20 backdrop-blur-sm transition-colors duration-300 ${
                  !isHeroVisible && "bg-slate-900/80"
                }`}
              >
                <div className="w-1 h-2 bg-primary rounded-full animate-scroll-wheel"></div>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ScrollNavigator;
