import { FaReact, FaNodeJs, FaGithub, FaGoogle } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiJsonwebtokens,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiFramer,
  SiReactquery,
  SiRadixui,
  SiGithubcopilot,
} from "react-icons/si";
import {
  Cpu,
  Layout,
  Server,
  Wrench,
  Zap,
  BarChart3,
  Scroll,
  Bot,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";

const Skills = () => {
  const frontend = [
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "#000000",
      desc: "React Framework",
      proficiency: "Expert",
    },
    {
      name: "React.js",
      icon: FaReact,
      color: "#61DAFB",
      desc: "UI Library",
      proficiency: "Expert",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#06B6D4",
      desc: "Utility-first CSS",
      proficiency: "Expert",
    },
    {
      name: "shadcn/ui",
      icon: SiRadixui,
      color: "#000000",
      desc: "Component Library",
      proficiency: "Expert",
    },
    {
      name: "Framer Motion",
      icon: SiFramer,
      color: "#FF0055",
      desc: "Animations",
      proficiency: "Advanced",
    },
    {
      name: "TanStack Query",
      icon: SiReactquery,
      color: "#FF4154",
      desc: "Async State",
      proficiency: "Advanced",
    },
    {
      name: "Zustand",
      icon: Layers,
      color: "#764ABC",
      desc: "State Management",
      proficiency: "Advanced",
    },
    {
      name: "Recharts",
      icon: BarChart3,
      color: "#22B5BF",
      desc: "Data Viz",
      proficiency: "Intermediate",
    },
    {
      name: "Lenis Scroll",
      icon: Scroll,
      color: "#ff9900",
      desc: "Smooth Scrolling",
      proficiency: "Intermediate",
    },
  ];

  // 2. Backend Development (Core + Auth)
  const backend = [
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "#339933",
      desc: "Runtime Env",
      proficiency: "Advanced",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "#000000",
      desc: "Web Framework",
      proficiency: "Advanced",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47A248",
      desc: "NoSQL Database",
      proficiency: "Intermediate",
    },
    {
      name: "Firebase",
      icon: SiFirebase,
      color: "#FFCA28",
      desc: "BaaS & Auth",
      proficiency: "Advanced",
    },
    {
      name: "OAuth",
      icon: FaGoogle,
      color: "#4285F4",
      desc: "Authentication",
      proficiency: "Intermediate",
    },
    {
      name: "JWT",
      icon: SiJsonwebtokens,
      color: "#D63AFF",
      desc: "Security",
      proficiency: "Intermediate",
    },
  ];

  // 3. Tools & AI (Modern Stack)
  const tools = [
    {
      name: "Git & GitHub",
      icon: FaGithub,
      color: "#181717",
      desc: "Version Control",
      proficiency: "Expert",
    },
    {
      name: "VS Code",
      icon: Wrench,
      color: "#007ACC",
      desc: "Code Editor",
      proficiency: "Expert",
    },
    {
      name: "Postman",
      icon: SiPostman,
      color: "#FF6C37",
      desc: "API Testing",
      proficiency: "Advanced",
    },
    {
      name: "Thunder Client",
      icon: Zap,
      color: "#AC54F2",
      desc: "Lightweight API",
      proficiency: "Advanced",
    },
    {
      name: "Vercel",
      icon: SiVercel,
      color: "#000000",
      desc: "Deployment",
      proficiency: "Advanced",
    },
    {
      name: "GitHub Copilot",
      icon: SiGithubcopilot,
      color: "#6E7681",
      desc: "AI Assistant",
      proficiency: "Daily User",
    },
    {
      name: "Antigravity/Kiro",
      icon: Bot,
      color: "#10B981",
      desc: "AI Tools",
      proficiency: "Explorer",
    },
  ];

  // Proficiency Badge Color Logic
  const getProficiencyStyle = (level) => {
    switch (level) {
      case "Expert":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]";
      case "Advanced":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.1)]";
      case "Intermediate":
      case "Daily User":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      default:
        return "bg-slate-500/10 text-slate-400 border-slate-500/20";
    }
  };

  const SkillCard = ({ tech, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      viewport={{ once: true }}
      className="relative group w-full cursor-default"
    >
      {/* Background Gradient Effect on Hover */}
      <div className="absolute -inset-0.5 bg-linear-to-r from-transparent via-transparent to-transparent group-hover:from-primary group-hover:to-secondary rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-500" />

      <div className="relative h-full flex flex-col justify-between p-5 bg-slate-900/90 border border-slate-800 rounded-2xl backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-slate-800 group-hover:scale-110 transition-transform duration-300">
            <tech.icon
              style={{
                color: tech.color === "#000000" ? undefined : tech.color,
              }}
              className={`w-7 h-7 transition-colors duration-300 ${
                tech.color === "#000000" ? "text-white" : ""
              }`}
            />
          </div>

          <div className="absolute right-5 top-5 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
            <tech.icon
              className="w-16 h-16 rotate-12"
              style={{ color: tech.color }}
            />
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg text-slate-100 mb-1">{tech.name}</h4>
          <p className="text-xs text-slate-400 font-medium tracking-wide uppercase mb-3">
            {tech.desc}
          </p>

          <span
            className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider border uppercase ${getProficiencyStyle(
              tech.proficiency
            )}`}
          >
            {tech.proficiency}
          </span>
        </div>
      </div>
    </motion.div>
  );

  const CategoryTitle = ({ icon: Icon, title }) => (
    <div className="flex items-center gap-3 mb-6 px-4">
      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500">
        <Icon size={20} />
      </div>
      <h3 className="text-xl font-bold text-slate-200">{title}</h3>
    </div>
  );

  return (
    <section
      id="skills"
      className="relative overflow-hidden transition-colors duration-300 section-contain"
    >
      {/* Background Grid Pattern */}

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <SectionHeading
          icon={Cpu}
          badgeText="My Toolbox"
          title="Technical"
          highlight="Proficiency"
        />

        <div className="mt-16 space-y-16">
          {/* Row 1 - Frontend */}
          <div className="relative">
            <CategoryTitle icon={Layout} title="Frontend & UI" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
              {frontend.map((tech, index) => (
                <SkillCard
                  key={`frontend-${index}`}
                  tech={tech}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Row 2 - Backend */}
          <div className="relative">
            <CategoryTitle icon={Server} title="Backend & Security" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
              {backend.map((tech, index) => (
                <SkillCard key={`backend-${index}`} tech={tech} index={index} />
              ))}
            </div>
          </div>

          {/* Row 3 - Tools */}
          <div className="relative">
            <CategoryTitle icon={Wrench} title="Tools & AI Power" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
              {tools.map((tech, index) => (
                <SkillCard key={`tools-${index}`} tech={tech} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
