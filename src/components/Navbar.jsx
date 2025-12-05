import { useState, useEffect, useRef } from "react";
// eslint-disable-next-line
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import {
  FiSun,
  FiMoon,
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
import { Link } from "react-scroll";

gsap.registerPlugin(useGSAP, TextPlugin);

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2, yoyo: true });
      tl.to(".logo-text", {
        duration: 2,
        text: "Hadi Hamza",
        ease: "none",
      });
    },
    { scope: container }
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", icon: FiHome },
    { name: "About", icon: FiUser },
    { name: "Skills", icon: FiCode },
    { name: "Projects", icon: FiLayers },
    { name: "Contact", icon: FiMail },
  ];

  return (
    <>
      <motion.nav
        ref={container}
        className={`fixed z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-auto rounded-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-2 border-white/20 shadow-lg py-2"
            : "top-0 left-0 right-0 w-full py-6 bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`mx-auto px-6 flex justify-between items-center ${
            scrolled ? "max-w-7xl w-full md:gap-8" : "max-w-7xl"
          }`}
        >
          <motion.div
            className="min-w-[200px] text-xl md:text-2xl font-normal text-primary font-body tracking-wider cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <span className="animate-pulse">&lt; </span>
            <span className="text-slate-900 dark:text-white font-logo font-medium inline-block min-w-[120px]">
              <span className="logo-text"></span>
              <span className="animate-pulse font-body text-primary">
                {" "}
                /&gt;
              </span>
            </span>{" "}
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.name.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active-link"
                className="text-slate-600 dark:text-slate-300 hover:text-primary font-medium cursor-pointer transition-colors duration-300 relative group text-sm uppercase tracking-wide flex items-center gap-2"
              >
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-primary  hover:text-white hover:rotate-180 transition-all duration-300 cursor-pointer"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-primary"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-slate-700 dark:text-white hover:text-primary transition-colors cursor-pointer"
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-55 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? "0%" : "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 h-screen w-[280px] bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl z-60 md:hidden flex flex-col justify-between"
      >
        {/* Header */}
        <div className="p-6 flex justify-between items-center border-b border-slate-100 dark:border-slate-800">
          <span className="text-xl font-bold text-primary font-logo tracking-wider">
            &lt;Portfolio /&gt;
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 p-6 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.name.toLowerCase()}
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-4 p-4 rounded-xl text-lg font-medium text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition-all cursor-pointer group"
            >
              <item.icon
                className="text-slate-400 group-hover:text-primary transition-colors"
                size={20}
              />
              {item.name}
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 font-medium uppercase tracking-wider text-center">
            Connect with me
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/hadialhamza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-colors hover:scale-110 transform duration-200"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/hadialhamza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-colors hover:scale-110 transform duration-200"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com/hadialhamza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-colors hover:scale-110 transform duration-200"
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
