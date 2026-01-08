import React from "react";
import { motion } from "framer-motion";

const SectionHeading = ({ icon: Icon, badgeText, title, highlight }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-15 text-center"
    >
      <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
        {Icon && <Icon size={14} />}
        {badgeText}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      <div className="w-60 h-1 bg-neon-gradient mx-auto rounded-full" />
    </motion.div>
  );
};

export default SectionHeading;
