import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { LuCodeXml } from "react-icons/lu";
import { SiMongodb, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { TbBrandReact } from "react-icons/tb";
import { FaNodeJs, FaGithub, FaDownload, FaFacebook } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { toast } from "sonner";
import NeonButton from "./NeonButton";

const TechIcon = ({ icon: Icon, color, name, glowClass, href, download }) => {
  const content = (
    <>
      <div
        className={`absolute inset-0 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-200 ${glowClass}`}
      ></div>
      <div
        className={`relative z-10 p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 ${color} shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer`}
      >
        <Icon size={25} />
      </div>
      <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 px-2 py-1 rounded border border-slate-200 dark:border-slate-700 shadow-sm whitespace-nowrap">
        {name}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={download ? "_self" : "_blank"}
        rel={download ? "" : "noopener noreferrer"}
        download={download}
        className="group relative flex flex-col items-center"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="group relative flex flex-col items-center">{content}</div>
  );
};

const techStack = [
  {
    icon: SiNextdotjs,
    name: "Next.js",
    color:
      "text-slate-900 dark:text-white group-hover:text-black dark:group-hover:text-gray-200",
    glowClass: "bg-gradient-to-r from-gray-600 to-gray-400",
  },
  {
    icon: TbBrandReact,
    name: "React",
    color: "text-sky-400 group-hover:text-sky-500",
    glowClass: "bg-gradient-to-r from-sky-400 to-blue-500",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind",
    color: "text-cyan-500 group-hover:text-cyan-600",
    glowClass: "bg-gradient-to-r from-cyan-400 to-blue-400",
  },
  {
    icon: FaNodeJs,
    name: "Node.js",
    color: "text-green-600 group-hover:text-green-700",
    glowClass: "bg-gradient-to-r from-green-500 to-lime-500",
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
    color: "text-green-500 group-hover:text-green-600",
    glowClass: "bg-gradient-to-r from-green-500 to-emerald-500",
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    name: "GitHub",
    href: "https://github.com/hadialhamza",
    color:
      "text-slate-700 dark:text-slate-200 group-hover:text-black dark:group-hover:text-white",
    glowClass: "bg-gradient-to-r from-slate-400 to-slate-600",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://linkedin.com/in/hadialhamza",
    color: "text-blue-600 group-hover:text-blue-700",
    glowClass: "bg-gradient-to-r from-blue-400 to-blue-600",
  },
  {
    icon: FaFacebook,
    name: "Facebook",
    href: "https://facebook.com/hadialhamza",
    color: "text-blue-600 group-hover:text-blue-700",
    glowClass: "bg-gradient-to-r from-blue-500 to-indigo-600",
  },
  {
    icon: Mail,
    name: "Email",
    href: "mailto:hamzaglory@gmail.com",
    color: "text-red-500 group-hover:text-red-600",
    glowClass: "bg-gradient-to-r from-red-400 to-red-600",
  },
];

const Hero = () => {
  const handleDownload = (e) => {
    e.preventDefault();
    const downloadPromise = fetch("/hamza-resume.pdf")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Hadi_Al_Hamza_Resume.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
      });

    toast.promise(downloadPromise, {
      loading: "Downloading resume...",
      success: "Resume downloaded successfully!",
      error: "Failed to download resume",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center  overflow-hidden transition-colors duration-300 pt-25 md:pt-20"
    >
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-3/4 flex flex-col items-center md:items-start text-center md:text-left"
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
            className="text-4xl md:text-[2.6rem] lg:text-5xl font-bold mb-4"
          >
            Hi, I'm{" "}
            <span className="gradient-text animate-gradient-shift bg-size-[200%_auto]">
              Hadi Al Hamza
            </span>
          </motion.h1>

          <div className="h-10 md:h-12 mb-3 text-xl md:text-2xl font-medium text-slate-400">
            &lt; I build{" "}
            <span className="text-slate-200 font-semibold">
              <Typewriter
                words={[
                  "MERN Stack Projects",
                  "Next.js Applications",
                  "Modern User Interfaces",
                ]}
                loop={0}
                cursor
                cursorStyle="/>"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </div>

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-8">
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

          {/* Tech Stack - Mapped */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
            {techStack.map((tech, index) => (
              <TechIcon key={index} {...tech} />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <NeonButton
              href="/hamza-resume.pdf"
              download="Hadi_Al_Hamza_Resume.pdf"
              icon={FaDownload}
              onClick={handleDownload}
              className="py-4 px-6"
            >
              Download Resume
            </NeonButton>

            {/* Social Icons - Mapped with same styles */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <TechIcon key={index} {...social} />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-2/5 flex justify-center md:justify-end relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[400px] bg-linear-to-tr from-primary/30 to-secondary/30 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-3xl animate-blob"></div>

          <div className="relative w-80 h-96 md:w-[24rem] md:h-112 rounded-2xl p-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-2xl group">
            {/* 1. Rotating Border GLOW (Blurry) */}
            <div className="absolute -inset-2 rounded-2xl overflow-hidden blur-xl opacity-60 group-hover:opacity-100 transition duration-500">
              <div className="absolute -inset-full bg-[conic-gradient(from_0deg,transparent_0_340deg,cyan_360deg)] animate-[spin_4s_linear_infinite]">
                {/* Note: Using a conic gradient with hard stops to create a 'comet' effect or full rainbow */}
                <div className="w-full h-full bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#a855f7_50%,#a855f7_100%,#06b6d4_100%)]"></div>
              </div>
            </div>

            {/* 2. Rotating Border LINE (Sharp) */}
            <div className="absolute -inset-0.5 rounded-2xl overflow-hidden z-0">
              <div className="absolute -inset-full animate-[spin_4s_linear_infinite]">
                {/* This creates the rotating gradient */}
                <div className="w-full h-full bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#a855f7_50%,#a855f7_100%,#06b6d4_100%)]"></div>
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

      <div className="absolute bottom-0 left-0 right-0 mx-auto w-full max-w-7xl px-6 flex justify-end z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col items-center gap-2 pointer-events-auto"
        >
          <div className="w-[30px] h-[50px] rounded-3xl border-2 border-white/90 flex justify-center p-2 box-border animate-mouse-bounce">
            <div className="w-1 h-2 bg-white rounded-full animate-scroll-wheel"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
