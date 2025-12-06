import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiArrowRight,
  FiLayers,
  FiLayout,
  FiSmartphone,
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";
import { Layers, Layout, Smartphone } from "lucide-react";

// Project data
const projects = [
  {
    id: 1,
    title: "Gadget Shop",
    category: "Full Stack",
    desc: "A full-stack e-commerce application with authentication, dynamic product browsing, advanced filtering & search, and OAuth 2.0.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB"],
    color: "bg-blue-600",
    gradient: "from-blue-600 to-cyan-500",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
    github: "https://github.com/hadialhamza/gadget-shop",
    demo: "https://next-gadget-shop.vercel.app/",
  },
  {
    id: 2,
    title: "Model Matrix AI",
    category: "MERN Stack",
    desc: "A Service Management System with user authentication (email/password & social), CRUD operations for services, and protected routes.",
    tech: ["React", "Node.js", "MongoDB"],
    color: "bg-purple-600",
    gradient: "from-purple-600 to-pink-500",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2670",
    github: "https://github.com/hadialhamza/b12-a10-new-client-repo",
    demo: "https://model-matrix-ai.netlify.app/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Frontend",
    desc: "Modern portfolio website with smooth animations, dark mode, and responsive design showcasing projects and skills.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    color: "bg-emerald-600",
    gradient: "from-emerald-600 to-teal-500",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=2669",
  },
  {
    id: 4,
    title: "Task Manager Pro",
    category: "Full Stack",
    desc: "Collaborative task management platform with real-time updates, team workspaces, and progress tracking.",
    tech: ["React", "Express", "Socket.io"],
    color: "bg-orange-600",
    gradient: "from-orange-600 to-red-500",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2672",
  },
];

// LAYOUT A: BENTO GRID
const LayoutBento = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
    {projects.map((project, i) => (
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        viewport={{ once: true }}
        className={`group relative rounded-3xl overflow-hidden border border-slate-200 dark:border-indigo-500/10 bg-white dark:bg-slate-900/50 backdrop-blur-sm ${
          i === 0 || i === 3 ? "md:col-span-2" : "md:col-span-1"
        }`}
      >
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br ${project.gradient}`}
          />
        </div>

        <div className="relative h-full p-6 md:p-8 flex flex-col justify-end items-start z-10">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${project.color} text-white shadow-lg`}
            >
              {project.category}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight drop-shadow-md">
              {project.title}
            </h3>
            <p className="text-slate-100 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md drop-shadow-sm">
              {project.desc}
            </p>
          </div>

          <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-black transition-all"
              >
                <FiGithub size={20} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-black transition-all"
              >
                <FiExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

// LAYOUT B: SPLIT FEATURE
const LayoutSplit = () => (
  <div className="space-y-12 md:space-y-32">
    {projects.map((project, i) => (
      <div
        key={project.id}
        className={`flex flex-col ${
          i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        } gap-8 md:gap-16 items-center`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-1/2 relative group"
        >
          <div
            className={`absolute -inset-4 bg-gradient-to-r ${project.gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
          />
          <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-indigo-500/20 shadow-2xl bg-white dark:bg-slate-900/50 backdrop-blur-sm aspect-video">
            <div className="h-8 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-white/5 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <div className="ml-4 flex-1 h-4 bg-slate-200 dark:bg-slate-900/50 rounded-full opacity-50" />
            </div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className={`h-px w-8 ${project.color}`} />
            <span
              className={`text-sm font-bold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r ${project.gradient}`}
            >
              {project.category}
            </span>
          </div>

          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-sm border border-slate-200 dark:border-indigo-500/20 rounded-lg text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-full hover:scale-105 transition-all shadow-lg shadow-indigo-500/20"
              >
                View Project <FiExternalLink size={16} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-slate-200 dark:border-indigo-500/20 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-indigo-500/10 transition-colors"
              >
                <FiGithub size={20} />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    ))}
  </div>
);

// LAYOUT C: CINEMA SLIDER
const LayoutCinema = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount =
        direction === "left" ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group/container">
      <div className="absolute -top-16 right-0 flex gap-2 z-10">
        <button
          onClick={() => scroll("left")}
          className="p-2 rounded-full border border-slate-200 dark:border-indigo-500/20 bg-white dark:bg-transparent hover:bg-slate-100 dark:hover:bg-indigo-500/10 text-slate-700 dark:text-white transition-colors"
        >
          <FiChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="p-2 rounded-full border border-slate-200 dark:border-indigo-500/20 bg-white dark:bg-transparent hover:bg-slate-100 dark:hover:bg-indigo-500/10 text-slate-700 dark:text-white transition-colors"
        >
          <FiChevronRight size={20} />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[85vw] md:w-[600px] snap-center relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-indigo-500/10 shadow-2xl group"
          >
            <div className="h-64 md:h-80 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10 opacity-60" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute top-4 left-4 z-20">
                <span
                  className={`px-3 py-1 text-xs font-bold rounded-full ${project.color} text-white shadow-lg`}
                >
                  {project.category}
                </span>
              </div>

              <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all"
                  >
                    <FiGithub size={16} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all"
                  >
                    <FiExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            <div className="p-6 md:p-8 relative z-20 -mt-12">
              <div className="bg-white/95 dark:bg-slate-950/80 backdrop-blur-xl border border-slate-200 dark:border-indigo-500/20 p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">
                  {project.desc}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.tech.slice(0, 3).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-slate-100 dark:bg-indigo-500/10 border border-slate-200 dark:border-indigo-500/20 rounded text-slate-600 dark:text-indigo-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1"
                    >
                      View <FiArrowRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// MAIN COMPONENT
export default function WebsiteMockup() {
  const [activeLayout, setActiveLayout] = useState("bento");

  return (
    <section
      id="showcase"
      className="py-20 px-6 relative overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl top-0 right-0"></div>
        <div className="absolute w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl bottom-0 left-0"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- HEADER & SWITCHER --- */}
        <div className="mb-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400 mb-4">
              My Work
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">
              Project{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Showcase
              </span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-lg mx-auto">
              Explore my technical journey through different lenses.
            </p>
          </motion.div>

          {/* Styled Switcher */}
          <div className="flex justify-center">
            <div className="inline-flex bg-slate-900/50 backdrop-blur-sm p-1 rounded-lg border border-indigo-500/20">
              <button
                onClick={() => setActiveLayout("bento")}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeLayout === "bento"
                    ? "bg-indigo-500 text-white shadow-lg"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <FiLayout size={16} /> Grid
              </button>
              <button
                onClick={() => setActiveLayout("split")}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeLayout === "split"
                    ? "bg-indigo-500 text-white shadow-lg"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <FiLayers size={16} /> Feature
              </button>
              <button
                onClick={() => setActiveLayout("cinema")}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeLayout === "cinema"
                    ? "bg-indigo-500 text-white shadow-lg"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <FiSmartphone size={16} /> Slider
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeLayout === "bento" && (
            <motion.div
              key="bento"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <LayoutBento />
            </motion.div>
          )}

          {activeLayout === "split" && (
            <motion.div
              key="split"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <LayoutSplit />
            </motion.div>
          )}

          {activeLayout === "cinema" && (
            <motion.div
              key="cinema"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <LayoutCinema />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
