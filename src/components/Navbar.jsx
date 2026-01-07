import { useState, useEffect } from "react";
// eslint-disable-next-line
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
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        className={`fixed z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-auto rounded-full bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-lg py-3 px-6"
            : "top-0 left-0 right-0 w-full py-6 bg-transparent px-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`mx-auto flex justify-between items-center ${
            scrolled ? "w-full md:gap-12" : "max-w-7xl w-full"
          }`}
        >
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              {/* Replace with your actual Logo Image or Text */}
              {/* Using text fallback if image fails or for cleaner look */}
              <img
                src={scrolled ? "/logo.png" : "/hamza logo.png"}
                alt="Hadi Al Hamza"
                className="h-10 w-auto object-contain"
              />
              {/* <span className="text-xl md:text-2xl font-bold text-slate-100 font-logo tracking-tighter">
                Hadi<span className="text-primary">.</span>dev
              </span> */}
            </motion.div>
          </Link>

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
                activeClass="!text-primary font-bold" // Added specific active class style
                className="text-slate-300 hover:text-primary font-medium cursor-pointer transition-all duration-300 relative group text-sm uppercase tracking-wide flex items-center gap-2"
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
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-slate-200 hover:text-primary transition-colors cursor-pointer p-2"
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? "0%" : "100%" }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 h-screen w-[280px] bg-slate-950 border-l border-slate-800 shadow-2xl z-[70] md:hidden flex flex-col justify-between"
      >
        {/* Header */}
        <div className="p-6 flex justify-between items-center border-b border-slate-800/50">
          <span className="text-xl font-bold text-slate-100 tracking-tighter">
            Hadi<span className="text-primary">.</span>dev
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            aria-label="Close Menu"
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
              offset={-80} // Adjust offset for mobile
              duration={500}
              onClick={() => setMenuOpen(false)}
              activeClass="!bg-primary/10 !text-primary"
              className="flex items-center gap-4 p-4 rounded-xl text-lg font-medium text-slate-300 hover:bg-slate-800/50 hover:text-primary transition-all cursor-pointer group"
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
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/hadialhamza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-500 hover:bg-slate-800 p-2 rounded-full transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com/hadialhamza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 hover:bg-slate-800 p-2 rounded-full transition-all duration-200"
              aria-label="Twitter"
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
