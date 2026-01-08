import React from "react";
import { motion } from "framer-motion";

const NeonButton = ({
  children,
  href,
  icon: Icon,
  className = "",
  onClick,
  ...rest
}) => {
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-slate-900 text-sm font-semibold tracking-wide hover:opacity-90 transition-all duration-200 neon-glow-cyan ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...rest}
    >
      <span>{children}</span>
      {Icon && <Icon className="w-4 h-4" />}
    </Component>
  );
};

export default NeonButton;
