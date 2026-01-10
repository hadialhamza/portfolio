import { motion } from "framer-motion";
import NeonButton from "../../shared/NeonButton";
import { navItems } from "../../../data/data";
import { FiMail } from "react-icons/fi";

const NavContent = ({ isScrolled, activeSection, handleNavClick }) => {
  return (
    <div className="flex justify-center sm:justify-between gap-4 items-center w-full max-w-7xl mx-auto px-5">
      {/* Logo Section */}
      <div
        onClick={() => handleNavClick("home")}
        className="hidden sm:flex cursor-pointer h-10 w-auto items-center justify-start group"
      >
        <div className="h-full flex items-center relative">
          <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {!isScrolled ? (
            <img
              src="/hamza-logo.webp"
              alt="Hadi Al Hamza"
              className="h-full w-auto object-contain z-10 drop-shadow-[0_0_8px_rgba(34,211,238,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.5)] group-hover:brightness-110 transition-all duration-300"
            />
          ) : (
            <div className="h-10 w-10 -ml-2.5 scale-130 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center p-1 shadow-md shadow-cyan-500/20 z-10 transition-all duration-300 group-hover:border-primary/90 group-hover:bg-slate-800/80 group-hover:scale-[1.45]">
              <img
                src="/logo.webp"
                alt="Hadi Al Hamza"
                className="h-full w-full object-contain drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]"
              />
            </div>
          )}
        </div>
      </div>

      {/* Desktop Menu Items */}
      <div
        className={`hidden md:flex gap-4 items-center ${isScrolled ? "mx-auto" : "ml-auto"
          }`}
      >
        {navItems.map((item, index) => {
          const isActive = activeSection === item.name.toLowerCase();
          return (
            <motion.button
              key={index}
              onClick={() => handleNavClick(item.name.toLowerCase())}
              initial="idle"
              whileHover="hover"
              animate={isActive ? "hover" : "idle"}
              className={`flex items-center gap-1.5 text-sm tracking-wider transition-colors duration-300 relative group cursor-pointer ${isActive
                  ? "text-primary font-semibold"
                  : "text-slate-200 hover:text-primary"
                }`}
            >
              {/* Icon Reveal Animation */}
              <motion.span
                variants={{
                  idle: {
                    width: 0,
                    opacity: 0,
                    x: -5,
                    transition: { duration: 0.3 },
                  },
                  hover: {
                    width: "auto",
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.3 },
                  },
                }}
                className="overflow-hidden flex items-center"
              >
                <item.icon size={16} className="mb-0.5" />
              </motion.span>

              <span>{item.name}</span>

              {/* 1. Active State: Sliding Underline (Magic Layout) */}
              {isActive && (
                <motion.span
                  layoutId="desktop-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              {/* 2. Hover State: Growing Underline (Only when NOT active) */}
              {!isActive && (
                <span className="absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-full"></span>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Right Side Actions (Hire Me + Mobile Menu) */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.name.toLowerCase();
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.name.toLowerCase())}
                className={`transition-all duration-300 relative group cursor-pointer flex flex-col items-center justify-center p-1 ${isActive
                    ? "text-primary scale-110"
                    : "text-slate-200 hover:text-primary hover:scale-110"
                  }`}
                aria-label={item.name}
              >
                <item.icon size={22} />

                {/* Magic Dot Indicator */}
                {isActive && (
                  <motion.span
                    layoutId="mobile-magic-dot"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute -bottom-2 w-1.5 h-1.5 bg-primary rounded-full block shadow-[0_0_8px_var(--color-primary)]"
                  />
                )}
              </button>
            );
          })}
        </div>
        {/* Hire Me Button Section */}
        <div className="hidden sm:flex items-center shrink-0">
          {!isScrolled ? (
            <NeonButton
              onClick={() => handleNavClick("contact")}
              className="px-6 py-2 rounded-full uppercase text-sm font-bold tracking-wider"
            >
              Hire Me
            </NeonButton>
          ) : (
            <button
              onClick={() => handleNavClick("contact")}
              className="h-10 w-10 rounded-full my-2 bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg shadow-cyan-500/10 text-primary hover:bg-cyan-500 hover:text-slate-900 hover:border-cyan-400 transition-all duration-300 -mr-2.5 scale-130 hover:scale-[1.45]"
              title="Hire Me"
            >
              {/* Icon (Send/Mail Icon) */}
              <FiMail size={22} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavContent;
