import { Cpu, Layout, Server, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";
import { frontend, backend, tools } from "../../data/data";
import SkillCard from "../shared/SkillCard";

const CategoryTitle = ({ icon, title }) => {
  const IconComponent = icon;

  return (
    <div className="flex items-center gap-3 mb-6 px-4">
      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500">
        <IconComponent size={20} />
      </div>
      <h3 className="text-xl font-bold text-slate-200">{title}</h3>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative pt-25 md:pt-30 pb-4 overflow-hidden transition-colors duration-300 section-contain"
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
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4"
            >
              {frontend.map((tech, index) => (
                <SkillCard key={`frontend-${index}`} tech={tech} />
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Backend */}
          <div className="relative">
            <CategoryTitle icon={Server} title="Backend & Security" />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4"
            >
              {backend.map((tech, index) => (
                <SkillCard key={`backend-${index}`} tech={tech} />
              ))}
            </motion.div>
          </div>

          {/* Row 3 - Tools */}
          <div className="relative">
            <CategoryTitle icon={Wrench} title="Tools & AI Power" />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4"
            >
              {tools.map((tech, index) => (
                <SkillCard key={`tools-${index}`} tech={tech} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
