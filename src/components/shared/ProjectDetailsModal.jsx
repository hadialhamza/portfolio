import { Fragment } from "react";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
} from "@headlessui/react";
import {
  X,
  Github,
  ExternalLink,
  Code2,
  Rocket,
  AlertTriangle,
  Layers,
} from "lucide-react";

const ProjectDetailsModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={onClose}
      >
        {/* Backdrop */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </TransitionChild>

        {/* Container - Fixed to viewport, centers the modal */}
        <div className="fixed inset-0 z-10 w-full overflow-hidden">
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0 scale-95 transform"
              enterTo="opacity-100 scale-100 transform"
              leave="ease-in duration-300"
              leaveFrom="opacity-100 scale-100 transform"
              leaveTo="opacity-0 scale-95 transform"
            >
              <DialogPanel className="w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl relative scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-600">
                {/* Background Glow Effect (Subtle) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-2 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 blur-[50px] opacity-20" />

                {/* Close Button - Sticky to stay visible */}
                <div className="sticky top-4 right-4 z-50 flex justify-end px-4">
                  <button
                    onClick={onClose}
                    className="p-2 bg-black/40 hover:bg-slate-800 text-slate-300 hover:text-white rounded-full backdrop-blur-md transition-all border border-white/10 shadow-lg"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Hero Section (Image & Title) */}
                <div className="relative h-64 md:h-80 w-full overflow-hidden -mt-14">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {/* linear Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                    <div>
                      <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-950/30 border border-cyan-500/20 rounded-full backdrop-blur-md">
                        {project.category || "Web Development"}
                      </span>
                      <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                        {project.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 md:p-8 space-y-8">
                  {/* Description & Links Row */}
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-6">
                      <h3 className="text-xl font-semibold text-slate-200 flex items-center gap-2">
                        <Layers className="text-purple-400" size={20} /> Project
                        Overview
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-lg">
                        {project.description}
                      </p>
                    </div>

                    {/* Quick Action Buttons */}
                    <div className="flex flex-col gap-3">
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">
                        Links
                      </h3>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all active:scale-95"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 text-slate-300 font-medium rounded-xl border border-slate-700 hover:bg-slate-750 hover:text-white transition-all hover:border-slate-600 active:scale-95"
                      >
                        <Github size={18} /> Source Code
                      </a>
                    </div>
                  </div>

                  <div className="h-px w-full bg-slate-800" />

                  {/* Technologies Used */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
                      <Code2 className="text-blue-400" size={20} /> Technology
                      Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-slate-500 hover:text-white transition-colors cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Challenges & Future Plans Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Challenges Card */}
                    <div className="p-5 rounded-2xl bg-slate-800/30 border border-orange-500/10 hover:border-orange-500/20 transition-colors group">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 group-hover:text-orange-300 transition-colors">
                          <AlertTriangle size={20} />
                        </div>
                        <h4 className="text-lg font-semibold text-slate-200">
                          Challenges
                        </h4>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {project.challenges ||
                          "Managing complex state and ensuring performance optimization were key challenges."}
                      </p>
                    </div>

                    {/* Future Plans Card */}
                    <div className="p-5 rounded-2xl bg-slate-800/30 border border-emerald-500/10 hover:border-emerald-500/20 transition-colors group">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                          <Rocket size={20} />
                        </div>
                        <h4 className="text-lg font-semibold text-slate-200">
                          Future Plans
                        </h4>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {project.futurePlans ||
                          "Planning to integrate AI features and improve mobile responsiveness further."}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProjectDetailsModal;
