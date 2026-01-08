import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiCode,
  FiLayers,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
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
  const [menuOpen, setMenuOpen] = useState(false);
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
    setMenuOpen(false);
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
            ? "top-4 w-[90%] md:w-170 rounded-full bg-slate-900/80 backdrop-blur-xs border border-white/10 shadow-lg py-2.5"
            : "top-0 w-full py-5 rounded-none bg-transparent border border-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-5">
          {/* Logo Animation */}
          <div
            onClick={() => handleNavClick("home")}
            className="cursor-pointer relative h-8 w-28 overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/hamza-logo.png"
                alt="Hadi Al Hamza"
                className={`absolute left-0 h-7 w-auto object-contain transition-opacity duration-500 ${
                  scrolled ? "opacity-0" : "opacity-100"
                }`}
              />
              <img
                src="/logo.png"
                alt="Hadi Al Hamza"
                className={`absolute left-0 h-7 w-auto object-contain transition-opacity duration-500 ${
                  scrolled ? "opacity-100" : "opacity-0"
                }`}
              />
            </motion.div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.name.toLowerCase();
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.name.toLowerCase())}
                  className={`text-sm uppercase tracking-wide transition-all duration-300 relative group cursor-pointer ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-slate-100 hover:text-primary"
                  }`}
                >
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
                </button>
              );
            })}

            <NeonButton
              onClick={() => handleNavClick("contact")}
              className="px-4! py-2.5! rounded-full! uppercase"
            >
              Hire Me
            </NeonButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-slate-200 hover:text-primary transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/60 z-60 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? "0%" : "100%" }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 h-screen w-[280px] bg-slate-950 border-l border-slate-800 shadow-2xl z-70 md:hidden flex flex-col justify-between"
      >
        <div className="p-6 flex justify-between items-center border-b border-slate-800/50">
          <span className="text-xl font-bold text-slate-100 tracking-tighter">
            Hadi<span className="text-primary">.</span>dev
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <FiX size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-2 p-6 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = activeSection === item.name.toLowerCase();
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.name.toLowerCase())}
                className={`flex items-center gap-4 p-4 rounded-xl text-lg font-medium transition-all cursor-pointer group w-full text-left ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-slate-300 hover:bg-slate-800/50 hover:text-primary"
                }`}
              >
                <item.icon
                  className={`transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-slate-400 group-hover:text-primary"
                  }`}
                  size={20}
                />
                {item.name}
              </button>
            );
          })}
        </div>

        <div className="p-6 border-t border-slate-800/50 bg-slate-900/30">
          <p className="text-xs text-slate-500 mb-4 font-medium uppercase tracking-wider text-center">
            Connect with me
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/hadialhamza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-full transition-all duration-200"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/hadialhamza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-500 hover:bg-slate-800 p-2 rounded-full transition-all duration-200"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com/hadialhamza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 hover:bg-slate-800 p-2 rounded-full transition-all duration-200"
            >
              <FiTwitter size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
