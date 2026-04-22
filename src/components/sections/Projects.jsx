import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FolderOpen } from "lucide-react";
import ProjectCard from "../shared/ProjectCard";
import SectionHeading from "../shared/SectionHeading";
import ProjectDetailsModal from "../shared/ProjectDetailsModal";

import { projects } from "../../data/data";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative pt-25 md:pt-30 overflow-hidden transition-colors duration-300 section-contain"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          icon={FolderOpen}
          badgeText="My Work"
          title="Project"
          highlight="Showcase"
        />

        <div className="relative mt-20">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-800 hidden md:block" />

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative flex flex-col md:flex-row items-center mb-16 md:mb-24 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary neon-glow-cyan z-20 hidden md:block" />

              {/* Dotted line connecting to card */}
              <div
                className={`hidden md:block absolute top-1/2 w-8 border-t-2 border-dashed border-slate-700 ${
                  index % 2 === 0 ? "right-1/2 mr-2" : "left-1/2 ml-2"
                }`}
              />

              {/* Content Card Wrapper */}
              <div
                className={`w-full md:w-[calc(50%-1.8rem)] ${
                  index % 2 === 0 ? "md:pr-4" : "md:pl-4"
                }`}
              >
                <div
                  className={`h-[500px] flex flex-col justify-center ${
                    index % 2 === 0
                      ? "items-center md:items-end"
                      : "items-center md:items-start"
                  }`}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    onDetails={() => setSelectedProject(project)}
                  />
                </div>
              </div>

              {/* Empty Space for the other side (optional, for spacing balance if needed) */}
              <div className="hidden md:block w-[calc(50%-1.8rem)]" />
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectDetailsModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
