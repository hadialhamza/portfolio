import { motion, useReducedMotion } from "framer-motion";
import { LuCodeXml } from "react-icons/lu";
import { FaDownload } from "react-icons/fa";
import { HeroTypewriter } from "../shared/HeroTypewriter";
import { toast } from "sonner";
import NeonButton from "../shared/NeonButton";
import GlowIconButton from "../shared/GlowIconButton";
import { techStack, socialLinks } from "../../data/data";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300 section-contain"
    >
      <div className="relative z-10 max-w-7xl mx-auto mt-25 md:mt-30 px-5 w-full flex flex-col-reverse md:flex-row items-center gap-10">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6 shadow-sm ring-1 ring-primary/30"
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
              {shouldReduceMotion ? (
                "Modern Web Applications"
              ) : (
                <>
                  <span className="hidden md:inline">
                    <HeroTypewriter
                      words={[
                        "MERN Stack Projects",
                        "Next.js Applications",
                        "Modern User Interfaces",
                      ]}
                    />
                  </span>
                  <span className="md:hidden">Modern Web Applications</span>
                </>
              )}
            </span>
          </div>

          <p className="text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
            An enthusiastic developer focusing on the{" "}
            <span className="font-semibold text-slate-200">Next.js</span>{" "}
            ecosystem and{" "}
            <span className="font-semibold text-slate-200">MERN Stack</span>. I
            am constantly learning and building full-stack applications with
            modern tools like{" "}
            <span className="text-primary font-medium">shadcn/ui</span> and
            AI-augmented workflows to solve real-world problems.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
            {techStack.map((tech, index) => (
              <GlowIconButton key={index} {...tech} />
            ))}
          </div>

          <div className="flex flex-col-reverse sm:flex-row items-center gap-8 w-full sm:w-auto">
            <NeonButton
              href="/hamza-resume.pdf"
              download="Hadi_Al_Hamza_Resume.pdf"
              icon={FaDownload}
              onClick={handleDownload}
              className="py-4 px-6"
            >
              Download Resume
            </NeonButton>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <GlowIconButton key={index} {...social} />
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[400px] bg-linear-to-tr from-primary/30 to-secondary/30 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-2xl animate-blob will-change-transform"></div>

          <div className="relative w-80 h-96 md:w-[24rem] md:h-112 rounded-2xl p-2 bg-slate-800/90 backdrop-blur-sm border border-slate-700 shadow-2xl group">
            {/* 1. Rotating Border GLOW (Blurry) */}
            <div className="absolute -inset-2 rounded-2xl overflow-hidden blur-md opacity-60 group-hover:opacity-100 transition duration-500">
              <div className="absolute -inset-full bg-[conic-gradient(from_0deg,transparent_0_340deg,cyan_360deg)] animate-[spin_4s_linear_infinite] will-change-transform">
                <div className="w-full h-full bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#a855f7_50%,#a855f7_100%,#06b6d4_100%)]"></div>
              </div>
            </div>

            {/* 2. Rotating Border LINE (Sharp) */}
            <div className="absolute -inset-0.5 rounded-2xl overflow-hidden z-0">
              <div className="absolute -inset-full animate-[spin_4s_linear_infinite] will-change-transform">
                <div className="w-full h-full bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#a855f7_50%,#a855f7_100%,#06b6d4_100%)]"></div>
              </div>
            </div>

            <div className="w-full h-full rounded-xl overflow-hidden relative group z-10 bg-slate-900">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src="/hamza.webp"
                alt="Hadi Al Hamza"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-slate-800 p-3 rounded-xl shadow-xl border border-slate-700 z-20 hover:scale-110 transition-transform duration-300">
              <LuCodeXml className="text-primary w-8 h-8" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
