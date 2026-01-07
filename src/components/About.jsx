import React from "react";
import { motion } from "framer-motion";
import { Code2, Zap, Layout, User, Terminal } from "lucide-react";
import SectionHeading from "./SectionHeading";

const About = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Feature Cards Data
  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Modern Tech Stack",
      description:
        "Building scalable apps with Next.js, React, and the MERN ecosystem.",
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
      border: "group-hover:border-cyan-500/50",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High Performance",
      description:
        "Optimizing for speed and efficiency using server-side rendering and clean code.",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "group-hover:border-purple-500/50",
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Pixel-Perfect UI",
      description:
        "Crafting beautiful, accessible interfaces with Tailwind CSS and shadcn/ui.",
      color: "text-pink-500",
      bg: "bg-pink-500/10",
      border: "group-hover:border-pink-500/50",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <SectionHeading
          icon={User}
          badgeText="About Me"
          title="Developer behind the"
          highlight="screen"
        />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          {/* Left Column: Bio & Story */}
          <motion.div
            className="lg:col-span-6 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-8 rounded-3xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl relative overflow-hidden group">
              {/* Subtle Gradient Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h3 className="relative text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                Hello! I'm a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                  Full Stack Developer
                </span>{" "}
                navigating the world of modern web.
              </h3>

              <div className="relative space-y-5 text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                <p>
                  My journey started with a curiosity for building things that
                  live on the internet. Fast forward to today, I'm deeply
                  focused on the{" "}
                  <strong className="font-medium text-slate-900 dark:text-slate-200">
                    Next.js ecosystem
                  </strong>{" "}
                  and the{" "}
                  <strong className="font-medium text-slate-900 dark:text-slate-200">
                    MERN stack
                  </strong>
                  .
                </p>
                <p>
                  I don't just write code; I strive to build solutions. As a
                  continuous learner, I leverage{" "}
                  <span className="text-purple-500 font-medium">
                    AI-augmented workflows
                  </span>{" "}
                  and modern libraries like{" "}
                  <span className="code-text">shadcn/ui</span> to create
                  efficient, scalable, and visually stunning applications.
                </p>
                <p>
                  Currently, I'm polishing my skills in full-stack architecture
                  and looking for a Junior Developer role where I can contribute
                  and grow.
                </p>
              </div>

              {/* Tech Badges */}
              <div className="relative mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-500 dark:text-slate-500 mb-4 uppercase tracking-widest">
                  Current Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js 14",
                    "React",
                    "Node.js",
                    "MongoDB",
                    "Tailwind CSS",
                    "shadcn/ui",
                    "Framer Motion",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Features & Code Snippet */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Feature Cards Grid */}
            <div className="grid sm:grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`group relative p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${feature.border} overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${feature.bg
                      .replace("bg-", "from-")
                      .replace("/10", "/5")} to-transparent`}
                  />

                  <div className="relative flex items-center gap-5">
                    <div
                      className={`p-3.5 rounded-xl ${feature.bg} ${feature.color} ring-1 ring-inset ring-black/5 dark:ring-white/5 shadow-sm group-hover:scale-110 transition-transform duration-300`}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Code Snippet Card - VS Code Style */}
            <motion.div variants={itemVariants} className="relative mt-8 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

              <div className="relative rounded-2xl bg-[#1e1e1e] dark:bg-[#0d1117] border border-slate-800 shadow-2xl overflow-hidden font-mono text-sm">
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#252526] dark:bg-[#161b22] border-b border-slate-700/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-xs text-slate-500 flex items-center gap-2">
                    <Terminal size={12} />
                    developer.config.js
                  </div>
                  <div className="w-8" />
                </div>

                {/* Code Content */}
                <div className="p-6 overflow-x-auto">
                  <code className="text-slate-300">
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">developer</span>{" "}
                    <span className="text-slate-400">=</span> {"{"}
                    <div className="pl-4">
                      name:{" "}
                      <span className="text-green-400">"Hadi Al Hamza"</span>,
                    </div>
                    <div className="pl-4">
                      role:{" "}
                      <span className="text-green-400">
                        "Full Stack Developer"
                      </span>
                      ,
                    </div>
                    <div className="pl-4">
                      stack: [<span className="text-green-400">"Next.js"</span>,{" "}
                      <span className="text-green-400">"MERN"</span>,{" "}
                      <span className="text-green-400">"Tailwind"</span>],
                    </div>
                    <div className="pl-4">
                      hardWorker: <span className="text-blue-400">true</span>,
                    </div>
                    <div className="pl-4">
                      status:{" "}
                      <span className="text-green-400">
                        "Looking for Opportunities"
                      </span>
                    </div>
                    {"}"};
                  </code>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CSS Helper for code text if needed */}
      <style jsx>{`
        .code-text {
          font-family: "Fira Code", monospace;
          background-color: rgba(0, 0, 0, 0.05);
          padding: 2px 4px;
          border-radius: 4px;
          font-size: 0.9em;
        }
        .dark .code-text {
          background-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
};

export default About;
