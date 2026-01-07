import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";

/**
 * Reusable Project Card Component
 *
 * @param {Object} props
 * @param {Object} props.project - The project data object
 * @param {string} props.project.title - Project title
 * @param {string} props.project.description - Project description
 * @param {string} props.project.image - Project image URL
 * @param {string} props.project.github - GitHub repository URL
 * @param {string} props.project.live - Live demo URL
 * @param {string[]} props.project.tags - Array of tech stack tags
 * @param {boolean} [props.project.featured] - Whether the project is featured (affects grid span)
 * @param {number} props.index - Index for staggering animations
 */
const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group w-full h-full relative ${project.featured ? "md:col-span-2 lg:col-span-1 lg:row-span-1" : ""
                }`}
        >
            {/* Background Gradient Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-500 will-change-opacity" />

            <div className="glass-card relative z-10 overflow-hidden h-full flex flex-col transition-transform duration-300 group-hover:scale-[1.02] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />

                    {/* Overlay Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/60 backdrop-blur-sm">
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-primary text-slate-900 hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            title="View Source Code"
                        >
                            <Github size={20} />
                        </motion.a>
                        <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-secondary text-white hover:opacity-90 transition-opacity shadow-lg shadow-secondary/20"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            title="View Live Demo"
                        >
                            <ExternalLink size={20} />
                        </motion.a>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                        <Folder className="w-4 h-4 text-primary" />
                        <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
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
        </motion.div>
    );
};

export default ProjectCard;
