import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="group w-full h-full relative">
      {/* Background Gradient Glow Effect */}
      <div className="absolute -inset-2 bg-linear-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-50 blur transition duration-500" />

      {/* Card Container */}
      <div className="rounded-2xl relative z-10 overflow-hidden h-full flex flex-col transition-transform duration-300 group-hover:scale-102 bg-slate-900 border-slate-800 border">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />

          {/* Overlay Buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/50">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary text-slate-900 hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary text-white hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink size={20} />
            </motion.a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <Folder className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold text-slate-100">
              {project.title}
            </h3>
          </div>

          <p className="text-slate-400 text-sm mb-4 flex-1 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-slate-800 text-primary border border-slate-700/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
