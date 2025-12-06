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
import { Cpu } from "lucide-react";

const Skills = () => {
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
        {
          name: "Next.js",
          icon: <SiNextdotjs />,
          color: "#000000 dark:text-white",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        {
          name: "Express",
          icon: <SiExpress />,
          color: "#000000 dark:text-white",
        },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        {
          name: "GitHub",
          icon: <FaGithub />,
          color: "#181717 dark:text-white",
        },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { name: "NPM", icon: <FaNpm />, color: "#CB3837" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center py-20 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
            <Cpu size={14} />
            My Toolbox
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight">
            Technical <span className="text-primary">Proficiency</span>
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            A curated list of technologies I use to build performant and
            scalable digital products.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-slate-200 dark:border-white/5 rounded-3xl p-8 hover:shadow-xl dark:hover:border-white/10 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-zinc-100 mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-black/20 border border-slate-100 dark:border-white/5 transition-all duration-300 cursor-default hover:scale-105 hover:bg-black/5 dark:hover:bg-white/5 shadow-sm hover:shadow-md"
                  >
                    <div
                      className="text-3xl transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
                      style={{
                        color: skill.color.includes("white")
                          ? undefined
                          : skill.color,
                      }}
                    >
                      <span
                        className={
                          skill.color.includes("dark:text-white")
                            ? "text-slate-900 dark:text-white"
                            : ""
                        }
                        style={
                          skill.color.includes("dark:text-white")
                            ? {}
                            : { color: skill.color }
                        }
                      >
                        {skill.icon}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-slate-600 dark:text-zinc-400 group-hover:text-slate-900 dark:group-hover:text-zinc-200 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
