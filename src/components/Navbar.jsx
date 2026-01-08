import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiHome, FiUser, FiCode, FiLayers, FiMail } from "react-icons/fi";
import { useLenis } from "lenis/react";
import NeonButton from "./NeonButton";

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

  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    if (lenis) {
      lenis.scrollTo(`#${targetId}`, {
        offset: -50,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out ${
          scrolled
            ? "top-4 w-[90%] md:w-185 rounded-full bg-slate-900/80 backdrop-blur-xs border border-white/10 shadow-lg py-2.5"
            : "top-0 w-full py-5 rounded-none bg-transparent border border-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
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
              <img
                src="/hamza-logo.png"
                alt="Hadi Al Hamza"
                className={`absolute left-0 h-8 w-auto object-contain transition-opacity duration-500 ${
                  scrolled ? "opacity-0" : "opacity-100"
                }`}
              />
              <img
                src="/logo.png"
                alt="Hadi Al Hamza"
                className={`absolute left-0 h-8 w-auto object-contain transition-opacity duration-500 ${
                  scrolled ? "opacity-100" : "opacity-0"
                }`}
              />
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
                  {/* Icon - Reveal on Hover/Active */}
                  <motion.span
                    variants={{
                      idle: {
                        width: 0,
                        opacity: 0,
                        transition: { duration: 0.3 },
                      },
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

                  {/* Text */}
                  <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.span>

                  {/* Line Indicator */}
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

          {/* Mobile Menu - Icons Only */}
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
                      layoutId="mobile-active"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full block"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
