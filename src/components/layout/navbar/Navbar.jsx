import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "../../../data/data";
import NavContent from "./NavContent";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll Listener Logic
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const next = window.scrollY > 50;
        setScrolled((prev) => (prev === next ? prev : next));
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection Observer Logic (Active Section Detection)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -35% 0px", // section height
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.name.toLowerCase());
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth Scroll Handler
  const handleNavClick = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence mode="wait">
      {scrolled ? (
        // Floating Capsule navbar
        <motion.nav
          key="scrolled"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed z-50 left-1/2 -translate-x-1/2 top-4 w-fit md:min-w-[580px] rounded-full bg-slate-900/80 backdrop-blur-xs border border-slate-700/50 shadow-sm py-3 sm:py-1"
        >
          <NavContent
            isScrolled={true}
            activeSection={activeSection}
            handleNavClick={handleNavClick}
          />
        </motion.nav>
      ) : (
        // Top State (Transparent)
        <motion.nav
          key="top"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed z-50 left-1/2 -translate-x-1/2 top-0 w-full py-5 rounded-none bg-transparent border border-transparent"
        >
          <NavContent
            isScrolled={false}
            activeSection={activeSection}
            handleNavClick={handleNavClick}
          />
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
