import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHome, FiUser, FiCode, FiLayers, FiMail } from "react-icons/fi";
import NeonButton from "../shared/NeonButton";

const navItems = [
  { name: "Home", icon: FiHome },
  { name: "About", icon: FiUser },
  { name: "Skills", icon: FiCode },
  { name: "Projects", icon: FiLayers },
  { name: "Contact", icon: FiMail },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -35% 0px",
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

  const handleNavClick = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Extract NavContent to avoid duplication
  const NavContent = ({ isScrolled }) => (
    <div className="flex justify-between gap-4 items-center w-full max-w-7xl mx-auto px-5">
      {/* Logo Animation */}
      <div
        onClick={() => handleNavClick("home")}
        className="cursor-pointer relative h-8 w-34 overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          {/* Top Logo (Full Name) - Visible when NOT scrolled */}
          {!isScrolled && (
            <img
              src="/hamza-logo.webp"
              alt="Hadi Al Hamza"
              className="absolute left-0 h-8 w-auto object-contain"
            />
          )}

          {/* Scrolled Logo (Icon only) - Visible when Scrolled */}
          {isScrolled && (
            <img
              src="/logo.webp"
              alt="Hadi Al Hamza"
              className="absolute left-0 h-8 w-auto object-contain"
            />
          )}
        </motion.div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4 items-center">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.name.toLowerCase();
          return (
            <motion.button
              key={item.name}
              onClick={() => handleNavClick(item.name.toLowerCase())}
              initial="idle"
              whileHover="hover"
              animate={isActive ? "hover" : "idle"}
              className={`flex items-center gap-1.5 text-sm uppercase tracking-wide transition-all duration-300 relative group cursor-pointer ${
                isActive
                  ? "text-primary font-semibold"
                  : "text-slate-200 hover:text-primary"
              }`}
            >
              <motion.span
                variants={{
                  idle: { width: 0, opacity: 0, transition: { duration: 0.3 } },
                  hover: {
                    width: "auto",
                    opacity: 1,
                    transition: { duration: 0.3 },
                  },
                }}
                className="overflow-hidden flex items-center"
              >
                <item.icon size={16} className="mb-0.5" />
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.span>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </motion.button>
          );
        })}
        <NeonButton
          onClick={() => handleNavClick("contact")}
          className="px-4! py-2.5! rounded-full! uppercase"
        >
          Hire Me
        </NeonButton>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center gap-4">
        {navItems.map((item) => {
          const isActive = activeSection === item.name.toLowerCase();
          return (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.name.toLowerCase())}
              className={`transition-all duration-300 relative group cursor-pointer ${
                isActive
                  ? "text-primary scale-110"
                  : "text-slate-200 hover:text-primary hover:scale-110"
              }`}
              aria-label={item.name}
            >
              <item.icon size={20} />
              {isActive && (
                <motion.span
                  layoutId={
                    isScrolled ? "mobile-active-scrolled" : "mobile-active-top"
                  } // distinctive layoutId
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full block"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <AnimatePresence mode="wait">
      {scrolled ? (
        // Floating Pill Navbar
        <motion.nav
          key="scrolled"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed z-50 left-1/2 -translate-x-1/2 top-4 w-[90%] md:w-185 rounded-full bg-slate-900/90 backdrop-blur-sm border border-slate-800 shadow-lg py-2.5"
        >
          <NavContent isScrolled={true} />
        </motion.nav>
      ) : (
        // Top Transparent Navbar
        <motion.nav
          key="top"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed z-50 left-1/2 -translate-x-1/2 top-0 w-full py-5 rounded-none bg-transparent border border-transparent"
        >
          <NavContent isScrolled={false} />
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
