import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { LuCodeXml } from "react-icons/lu";
import { SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandReact } from "react-icons/tb";
import { FaNodeJs, FaLaptopCode, FaGithub } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const SocialButton = ({ icon: Icon, href, label, hoverColor, shadowColor }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-3 rounded-full text-slate-600 dark:text-white transition-all border border-slate-300 dark:border-slate-700 cursor-pointer ${hoverColor} ${shadowColor} hover:shadow-2xl hover:-translate-y-1`}
    aria-label={label}
  >
    <Icon size={25} />
  </a>
);

const TechIcon = ({ icon: Icon, color, shadowColor }) => (
  <div
    className={`p-3 bg-slate-200 dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700 ${color} ${shadowColor} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
  >
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
          className="w-full flex flex-col items-center md:items-start text-center md:text-left"
        >
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 flex items-center gap-2">
            <FaLaptopCode />
            <span>MERN Stack Developer</span>
          </span>
          <h1 className="text-4xl md:text-[4.25rem] font-bold tracking-tight leading-tight mb-6 text-slate-900 dark:text-white flex flex-col gap-2">
            <div className="flex items-center gap-3">
              Hello there,
              <motion.span
                animate={{ rotate: [0, 20, 0, 20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                className="inline-block origin-bottom-right"
              >
                👋
              </motion.span>
            </div>
            <div>
              <span className="text-primary">
                <Typewriter
                  words={["I'm Hadi Al Hamza", "Good to see you!", "Welcome!"]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={3000}
                />
              </span>
            </div>
          </h1>

          <div className="flex gap-4 mb-8">
            <TechIcon
              icon={SiMongodb}
              color="text-green-500"
              shadowColor="shadow-lg shadow-green-500/30"
            />
            <TechIcon
              icon={SiExpress}
              color="text-gray-500 dark:text-gray-300"
              shadowColor="shadow-lg shadow-gray-500/30"
            />
            <TechIcon
              icon={TbBrandReact}
              color="text-blue-400"
              shadowColor="shadow-lg shadow-blue-400/30"
            />
            <TechIcon
              icon={FaNodeJs}
              color="text-green-600"
              shadowColor="shadow-lg shadow-green-600/30"
            />
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
              className="group flex items-center gap-2 bg-primary text-slate-900 px-8 py-3 rounded-full font-bold hover:scale-105 transition-all duration-300 cursor-pointer shadow-float"
            >
              Download Resume
              <Download size={20} className="group-hover:animate-bounce" />
            </button>

            <div className="flex gap-4">
              <SocialButton
                icon={FaGithub}
                href="https://github.com/hadialhamza"
                label="GitHub"
                hoverColor="bg-white/90 text-black!"
                shadowColor="shadow-xl shadow-gray-500/30"
              />
              <SocialButton
                icon={Linkedin}
                href="https://linkedin.com/in/hadialhamza"
                label="LinkedIn"
                hoverColor="bg-[#0077b5]"
                shadowColor="shadow-xl shadow-[#0077b5]/30"
              />
              <SocialButton
                icon={Mail}
                href="mailto:hadialhamza@gmail.com"
                label="Email"
                hoverColor="bg-red-500"
                shadowColor="shadow-xl shadow-red-500/30"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Geometric Frame */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center md:justify-end mt-15 md:mt-0"
        >
          <div className="group relative w-72 h-80 md:w-96 md:h-112 border-2 border-primary rounded-2xl">
            <div className="group absolute -top-5 -left-5 w-full h-full bg-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-primary/30 dark:shadow-primary/50 transition-transform duration-500 hover:translate-y-5 hover:translate-x-5">
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent z-10 opacity-80"></div>
              <img
                src="https://i.ibb.co.com/VcMCpXcN/hamza.jpg"
                alt="Hadi Al Hamza"
                className="w-full h-full object-cover "
              />
            </div>

            <div className="-rotate-50 absolute -bottom-4 -right-5 bg-slate-100 dark:bg-slate-800 p-0.5 text-primary border border-slate-200 dark:border-slate-800 rounded-lg z-20 shadow-float">
              <LuCodeXml
                size={40}
                className="group-hover:rotate-50 transition-all duration-500"
              />
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
        <ChevronDown className="w-12 h-12 shadow-float animate-bounce bg-slate-800 text-primary rounded-full" />
      </motion.div>
    </section>
  );
};

export default Hero;
