import React from "react";
import { motion } from "framer-motion";
import { FolderOpen } from "lucide-react";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

// Project data
const projects = [
  {
    id: 1,
    title: "Gadget Shop",
    category: "Full Stack",
    description: "A full-stack e-commerce application with authentication, dynamic product browsing, advanced filtering & search, and OAuth 2.0.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
    github: "https://github.com/hadialhamza/gadget-shop",
    live: "https://next-gadget-shop.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Model Matrix AI",
    category: "MERN Stack",
    description: "A Service Management System with user authentication (email/password & social), CRUD operations for services, and protected routes.",
    tags: ["React", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2670",
    github: "https://github.com/hadialhamza/b12-a10-new-client-repo",
    live: "https://model-matrix-ai.netlify.app/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Frontend",
    description: "Modern portfolio website with smooth animations, dark mode, and responsive design showcasing projects and skills.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=2669",
    // github: "https://github.com/hadialhamza/portfolio", // Optional if public
    // live: "https://hadialhamza.vercel.app/",
    github: "#",
    live: "#"
  },
  {
    id: 4,
    title: "Task Manager Pro",
    category: "Full Stack",
    description: "Collaborative task management platform with real-time updates, team workspaces, and progress tracking.",
    tags: ["React", "Express", "Socket.io"],
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2672",
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative pt-30 bg-slate-50 dark:bg-slate-900 overflow-hidden transition-colors duration-300"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 h-full w-full bg-slate-50 dark:bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          icon={FolderOpen}
          badgeText="My Work"
          title="Project"
          highlight="Showcase"
        />

        <div className="relative mt-20">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-800 hidden md:block" />

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center mb-16 md:mb-24 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary neon-glow-cyan z-20 hidden md:block" />

              {/* Dotted line connecting to card */}
              <div
                className={`hidden md:block absolute top-1/2 w-8 border-t-2 border-dashed border-slate-300 dark:border-slate-700 ${index % 2 === 0 ? "left-1/2 ml-2" : "right-1/2 mr-2"
                  }`}
              />

              {/* Content Card Wrapper */}
              <div
                className={`w-full md:w-[calc(50%-3rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
              >
                <div className="h-[400px]">
                  <ProjectCard project={project} index={index} />
                </div>
              </div>

              {/* Empty Space for the other side (optional, for spacing balance if needed) */}
              <div className="hidden md:block w-[calc(50%-3rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
