import React from "react";
import { motion } from "framer-motion";
import { Code2, Zap, Heart, Terminal, User } from "lucide-react";

const About = () => {
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

  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable software that adheres to industry best practices.",
      color: "text-cyan-600 dark:text-cyan-400",
      bg: "bg-cyan-100 dark:bg-cyan-400/10",
      border: "hover:border-cyan-400/30",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Performance",
      description:
        "Optimizing every byte to ensure applications load instantly and run smoothly.",
      color: "text-indigo-600 dark:text-indigo-400",
      bg: "bg-indigo-100 dark:bg-indigo-400/10",
      border: "hover:border-indigo-400/30",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "User Focused",
      description:
        "Crafting intuitive experiences that prioritize accessibility and user delight.",
      color: "text-pink-600 dark:text-pink-400",
      bg: "bg-pink-100 dark:bg-pink-400/10",
      border: "hover:border-pink-400/30",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
            <User size={14} />
            About Me
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
            Behind the <span className="text-primary">lines of code.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start text-start">
          {/* Left Column: Bio Text */}
          <motion.div
            className="md:col-span-6 space-y-8 p-6 rounded-2xl bg-white dark:bg-zinc-900/40 border border-slate-200 dark:border-white/5 backdrop-blur-sm "
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-zinc-100">
              Hello! I'm a{" "}
              <span className="text-indigo-400">MERN Stack Developer</span>{" "}
              based in the cloud.
            </h3>

            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
              <p>
                My journey began with a curiosity for how things work on the
                internet, which quickly evolved into a passion for building
                robust web applications. I specialize in the{" "}
                <strong>MERN stack</strong> (MongoDB, Express, React, Node.js),
                focusing on creating scalable backend systems and pixel-perfect
                frontends.
              </p>
              <p>
                I don't just write code; I solve problems. Whether it's
                optimizing database queries for high-traffic dashboards or
                crafting smooth animations for a mobile wallet, I treat every
                project as a piece of art.
              </p>
              <p>
                When I'm not debugging, you can find me exploring new
                open-source tools, contributing to the developer community, or
                learning about the latest in AI and System Design.
              </p>
            </div>

            {/* Quick Tech Badge List */}
            <div className="pt-4">
              <p className="text-sm font-medium text-zinc-500 mb-3 uppercase tracking-wider">
                Tech I work with
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "JavaScript (ES6+)",
                  "React",
                  "Node.js",
                  "MongoDB",
                  "Next.js",
                  "Tailwind",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-zinc-900 border border-white/10 rounded-md text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Feature Cards */}
          <motion.div
            className="md:col-span-6 space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group p-6 rounded-2xl bg-white dark:bg-zinc-900/40 border border-slate-200 dark:border-white/5 backdrop-blur-sm transition-all duration-300 hover:shadow-lg dark:hover:bg-zinc-900/60 ${feature.border}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl ${feature.bg} ${feature.color} ring-1 ring-inset ring-black/5 dark:ring-white/5`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-1 group-hover:text-primary dark:group-hover:text-white transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Decoration Card */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl border border-dashed border-slate-300 dark:border-zinc-800 flex items-center justify-center text-slate-500 dark:text-zinc-600 gap-2"
            >
              <Terminal size={18} />
              <span className="text-sm font-mono">
                More features loading...
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
