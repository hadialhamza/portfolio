import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiPostman,
  SiNextdotjs,
} from "react-icons/si";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000 dark:text-white" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express", icon: <SiExpress />, color: "#000000 dark:text-white" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { name: "GitHub", icon: <FaGithub />, color: "#181717 dark:text-white" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { name: "NPM", icon: <FaNpm />, color: "#CB3837" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center py-20 bg-slate-50 dark:bg-black overflow-hidden transition-colors duration-300"
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-4">
            My Toolbox
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400">
              Proficiency
            </span>
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            A curated list of technologies I use to build performant and
            scalable digital products.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-slate-200 dark:border-white/5 rounded-3xl p-8 hover:shadow-xl dark:hover:border-white/10 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-zinc-100 mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                {category.title}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-2 gap-4"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(128,128,128,0.05)",
                    }}
                    className="group flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-black/20 border border-slate-100 dark:border-white/5 transition-all duration-300 cursor-default"
                  >
                    <div
                      className="text-3xl transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
                      style={{ color: skill.color.includes('white') ? undefined : skill.color }}
                    >
                      {/* For icons that need conditional coloring based on theme (white/black), we use class logic in icon render or predefined colors. In this list, some have dedicated colors. */}
                      {/* For NextJS, Express, GitHub which are black/white, we handle in className or style hacking. 
                          The style prop above uses skill.color. 
                          We updated 'color' in list for Next.js to be specific string, let's just make it simple.
                          We will rely on className for text color if style is not applied or specific logic.
                       */}
                      <span className={skill.color.includes('dark:text-white') ? "text-slate-900 dark:text-white" : ""} style={skill.color.includes('dark:text-white') ? {} : { color: skill.color }}>
                        {skill.icon}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-slate-600 dark:text-zinc-400 group-hover:text-slate-900 dark:group-hover:text-zinc-200 transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
