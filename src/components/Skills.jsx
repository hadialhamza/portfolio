import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express", icon: <SiExpress />, color: "#ffffff" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { name: "NPM", icon: <FaNpm />, color: "#CB3837" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-20 bg-slate-100 dark:bg-slate-900 transition-colors duration-300"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            My{" "}
            <span className="text-primary">
              Skills
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">Technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 border-b border-slate-100 dark:border-slate-700 pb-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1, y: -5 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="flex flex-col items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-primary/50 transition-all duration-300 cursor-pointer"
                  >
                    <div
                      className="text-4xl transition-transform duration-300"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
