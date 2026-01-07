import { Github, Linkedin, Mail } from "lucide-react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { LuCodeXml } from "react-icons/lu";
import { SiMongodb, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { TbBrandReact } from "react-icons/tb";
import { FaNodeJs, FaGithub, FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const SocialButton = ({ icon: Icon, href, label, hoverColor, shadowColor }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-3 rounded-full text-slate-500 dark:text-slate-300 transition-all border border-slate-200 dark:border-slate-700 cursor-pointer bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm ${hoverColor} ${shadowColor} hover:shadow-lg hover:-translate-y-1`}
    aria-label={label}
  >
    <Icon size={22} />
  </a>
);

const TechIcon = ({ icon: Icon, color, name, glowClass }) => (
  <div className="group relative flex flex-col items-center">
    <div
      className={`absolute -inset-2 rounded-xl blur-md opacity-0 group-hover:opacity-75 transition duration-500 group-hover:duration-200 ${glowClass}`}
    ></div>
    <div
      className={`relative z-10 p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 ${color} shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default`}
    >
      <Icon size={28} />
    </div>
    <span className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 px-2 py-1 rounded border border-slate-200 dark:border-slate-700 shadow-sm whitespace-nowrap">
      {name}
    </span>
  </div>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="absolute inset-0 z-0 h-full w-full bg-white dark:bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 dark:bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6 shadow-sm ring-1 ring-primary/30"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Full Stack Developer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white"
          >
            Hi, I'm{" "}
            <span className="gradient-text animate-gradient-shift bg-[length:200%_auto]">
              Hadi Al Hamza
            </span>
          </motion.h1>

          <div className="h-10 md:h-12 mb-8 text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400">
            I build{" "}
            <span className="text-slate-800 dark:text-slate-200 font-semibold">
              <Typewriter
                words={[
                  "Next.js Applications",
                  "MERN Stack Projects",
                  "Modern User Interfaces",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </div>

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-8">
            An enthusiastic developer focusing on the{" "}
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              Next.js
            </span>{" "}
            ecosystem and{" "}
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              MERN Stack
            </span>
            . I am constantly learning and building full-stack applications with
            modern tools like{" "}
            <span className="text-primary font-medium">shadcn/ui</span> and
            AI-augmented workflows to solve real-world problems.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
            <TechIcon
              icon={SiNextdotjs}
              color="text-slate-900 dark:text-white group-hover:text-black dark:group-hover:text-gray-200"
              name="Next.js"
              glowClass="bg-gradient-to-r from-gray-600 to-gray-400"
            />
            <TechIcon
              icon={TbBrandReact}
              color="text-sky-400 group-hover:text-sky-500"
              name="React"
              glowClass="bg-gradient-to-r from-sky-400 to-blue-500"
            />
            <TechIcon
              icon={SiTailwindcss}
              color="text-cyan-500 group-hover:text-cyan-600"
              name="Tailwind"
              glowClass="bg-gradient-to-r from-cyan-400 to-blue-400"
            />
            <TechIcon
              icon={FaNodeJs}
              color="text-green-600 group-hover:text-green-700"
              name="Node.js"
              glowClass="bg-gradient-to-r from-green-500 to-lime-500"
            />
            <TechIcon
              icon={SiMongodb}
              color="text-green-500 group-hover:text-green-600"
              name="MongoDB"
              glowClass="bg-gradient-to-r from-green-500 to-emerald-500"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <a
              href="/hamza-resume.pdf"
              download="Hadi_Al_Hamza_Resume.pdf"
              className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-[var(--color-secondary)] text-slate-900 font-bold shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download Resume
                <FaDownload
                  size={18}
                  className="transform group-hover:scale-110 transition-transform duration-300"
                />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white/30 transition-transform duration-300 skew-x-12"></div>
            </a>

            <div className="flex gap-4">
              <SocialButton
                icon={FaGithub}
                href="https://github.com/hadialhamza"
                label="GitHub"
                hoverColor="hover:bg-black hover:text-white hover:border-black"
                shadowColor="shadow-gray-500/20"
              />
              <SocialButton
                icon={Linkedin}
                href="https://linkedin.com/in/hadialhamza"
                label="LinkedIn"
                hoverColor="hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]"
                shadowColor="shadow-[#0077b5]/20"
              />
              <SocialButton
                icon={Mail}
                href="mailto:hadialhamza@gmail.com"
                label="Email"
                hoverColor="hover:bg-red-500 hover:text-white hover:border-red-500"
                shadowColor="shadow-red-500/20"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-2/5 flex justify-center md:justify-end relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[400px] bg-gradient-to-tr from-primary/30 to-purple-500/30 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-3xl animate-blob"></div>

          <div className="relative w-80 h-96 md:w-[24rem] md:h-[28rem] rounded-2xl p-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-2xl relative group">
            {/* 1. Rotating Border GLOW (Blurry) */}
            <div className="absolute -inset-2 rounded-2xl overflow-hidden blur-xl opacity-60 group-hover:opacity-100 transition duration-500">
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,cyan_360deg)] animate-[spin_4s_linear_infinite]">
                {/* Note: Using a conic gradient with hard stops to create a 'comet' effect or full rainbow */}
                <div className="w-full h-full bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#a855f7_50%,#ec4899_100%,#06b6d4_100%)]"></div>
              </div>
            </div>

            {/* 2. Rotating Border LINE (Sharp) */}
            <div className="absolute -inset-[2px] rounded-2xl overflow-hidden z-0">
              <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite]">
                {/* This creates the rotating gradient */}
                <div className="w-full h-full bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#a855f7_50%,#ec4899_100%,#06b6d4_100%)]"></div>
              </div>
            </div>

            <div className="w-full h-full rounded-xl overflow-hidden relative group z-10 bg-slate-900">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src="https://i.ibb.co.com/VcMCpXcN/hamza.jpg"
                alt="Hadi Al Hamza"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 z-20"
            >
              <LuCodeXml className="text-primary w-8 h-8" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 mx-auto w-full max-w-7xl px-6 flex justify-end z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col items-center gap-2 pointer-events-auto"
        >
          <div className="w-[30px] h-[50px] rounded-3xl border-2 border-slate-400 dark:border-slate-500 flex justify-center p-2 box-border animate-mouse-bounce">
            <div className="w-1 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-scroll-wheel"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
