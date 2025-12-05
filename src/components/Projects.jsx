import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Gadget Shop",
    description:
      "A comprehensive e-commerce platform for tech gadgets. Features include product filtering, cart management, and secure checkout integration.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    desktopImg:
      "https://i.ibb.co.com/bjgK8btM/next-gadget-shop-vercel-app-6.png",
    mobileImg:
      "https://i.ibb.co.com/bjgK8btM/next-gadget-shop-vercel-app-6.png",
    github: "https://github.com/hadialhamza/gadget-shop",
    demo: "#",
  },
  {
    title: "Payoo Mobile App",
    description:
      "A modern fintech application designed for seamless mobile payments and transaction tracking. Built with a focus on security and user experience.",
    tech: ["React", "Tailwind", "Node.js", "Firebase"],
    desktopImg:
      "https://i.ibb.co.com/k2YXcvgF/next-gadget-shop-vercel-app-3.png",
    mobileImg:
      "https://i.ibb.co.com/k2YXcvgF/next-gadget-shop-vercel-app-3.png",
    github: "https://github.com/hadialhamza/Payoo-mobile-app",
    demo: "#",
  },
  {
    title: "BPL Dream 11",
    description:
      "An interactive fantasy sports platform for the Bangladesh Premier League. Users can create teams, join leagues, and track live scores.",
    tech: ["React", "MongoDB", "Express", "Socket.io"],
    desktopImg: "/images/project3.png",
    mobileImg: "/images/project3.png",
    github: "https://github.com/hadialhamza/bpl-dream-11",
    demo: "#",
  },
];

const HybridMockup = ({ desktopImg, mobileImg, alt }) => (
  <div className="relative mx-auto w-full max-w-lg lg:scale-110">
    {/* Desktop Frame */}
    <div className="relative mx-auto w-full max-w-lg">
      <div className="relative rounded-t-xl bg-slate-900 border-[10px] border-slate-900 border-b-0 shadow-2xl">
        <div className="rounded-lg overflow-hidden bg-slate-800 aspect-video relative group">
          <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300"></div>
          <img
            src={desktopImg}
            alt={`${alt} Desktop`}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="h-6 bg-slate-800 w-full rounded-b-xl flex items-center justify-center relative z-20 shadow-md">
        <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
      </div>
      <div
        className="relative mx-auto bg-slate-300 dark:bg-slate-700 w-24 h-12 shadow-inner"
        style={{ clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)" }}
      ></div>
      <div className="relative mx-auto bg-slate-400 dark:bg-slate-600 w-36 h-2 rounded-full shadow-lg -mt-1"></div>
    </div>

    {/* Mobile Frame (Floating) */}
    <div className="absolute -bottom-4 -right-8 w-24 md:w-28 z-30 transform translate-y-4">
      <div className="relative rounded-[1rem] h-[180px] bg-slate-900 border-[6px] border-slate-900 shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 inset-x-0 h-2 bg-slate-900 z-20 flex justify-center">
          <div className="w-8 h-2 bg-slate-900 rounded-b-md"></div>
        </div>
        {/* Screen Content */}
        <div className="w-full h-full bg-slate-800 overflow-hidden relative group">
          <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300"></div>
          <img
            src={mobileImg}
            alt={`${alt} Mobile`}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-20 text-slate-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 lg:gap-20 items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              {/* Project Mockup */}
              <div className="flex-1 w-full flex justify-center perspective-1000">
                <motion.div
                  whileHover={{ rotateY: index % 2 === 0 ? 5 : -5 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="w-full max-w-xl"
                >
                  <HybridMockup
                    desktopImg={project.desktopImg}
                    mobileImg={project.mobileImg}
                    alt={project.title}
                  />
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="flex-1 w-full">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-primary rounded-full text-sm font-medium border border-slate-200 dark:border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary font-semibold text-lg transition-colors"
                  >
                    <FaGithub size={24} /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-lg transition-colors"
                  >
                    <FaExternalLinkAlt size={20} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
