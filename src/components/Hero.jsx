import {
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronDown,
  Code,
  FileCode,
  Figma,
  Database,
  Terminal,
} from "lucide-react";
// eslint-disable-next-line
import { motion } from "framer-motion";
// eslint-disable-next-line
const SocialButton = ({ icon: Icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all border border-slate-300 dark:border-slate-700 hover:border-primary cursor-pointer"
    aria-label={label}
  >
    <Icon size={20} />
  </a>
);
// eslint-disable-next-line
const TechIcon = ({ icon: Icon }) => (
  <div className="p-3 bg-slate-200 dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700 text-primary">
    <Icon size={24} />
  </div>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start text-center md:text-left flex-1"
        >
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            MERN Stack Developer
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 font-display text-slate-900 dark:text-white">
            Hi, I'm <span className="text-primary">Hadi</span>
            <span className="text-slate-900 dark:text-white">.</span>
          </h1>

          <div className="flex gap-4 mb-8">
            <TechIcon icon={FileCode} />
            <TechIcon icon={Database} />
            <TechIcon icon={Figma} />
            <TechIcon icon={Terminal} />
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-8">
            I specialize in building high-performance, responsive web
            applications using MongoDB, Express, React, and Node.js. With a
            passion for clean code and scalable architecture, I transform
            complex requirements into seamless user experiences. Let's create
            something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button
              onClick={() => alert("Resume download started...")}
              className="flex items-center gap-2 bg-primary text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-colors cursor-pointer shadow-lg shadow-primary/20"
            >
              <Download size={20} /> Download Resume
            </button>

            <div className="flex gap-4">
              <SocialButton
                icon={Github}
                href="https://github.com/hadialhamza"
                label="GitHub"
              />
              <SocialButton
                icon={Linkedin}
                href="https://linkedin.com/in/hadialhamza"
                label="LinkedIn"
              />
              <SocialButton
                icon={Mail}
                href="mailto:hadialhamza@gmail.com"
                label="Email"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Geometric Frame */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex-1 flex justify-center md:justify-end mt-12 md:mt-0"
        >
          <div className="relative w-72 h-80 md:w-96 md:h-[28rem] border-2 border-primary rounded-2xl">
            <div className="absolute -top-12 -left-6 w-full h-full bg-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-primary/30 dark:shadow-primary/50 transition-transform duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-80"></div>
              <img
                src="/public/hamza.jpg"
                alt="Hadi Al Hamza"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 p-2 text-primary border border-slate-200 dark:border-slate-800 rounded-lg shadow-lg z-20">
              <Code size={48} />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 flex flex-col items-center gap-2"
      >
        <ChevronDown className="animate-bounce" size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;
