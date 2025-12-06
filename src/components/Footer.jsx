import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  Twitter,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/hadialhamza",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/hadialhamza",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={20} />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:hadialhamza@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-3xl font-bold tracking-tighter text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                &lt;Hadi Al Hamza /&gt;
              </span>
            </h3>
            <p className="text-zinc-400 leading-relaxed max-w-sm">
              Crafting digital experiences with pixel-perfect precision.
              Dedicated to building accessible, performant, and scalable web
              solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -3,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group flex items-center gap-2 text-zinc-400 hover:text-indigo-400 transition-colors text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-indigo-400 transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / CTA */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-6">Let's Connect</h4>
            <p className="text-zinc-400 text-sm mb-4">
              Have a project in mind? I'm always open to discussing new ideas.
            </p>
            <a
              href="mailto:hadialhamza@gmail.com"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
            >
              Send an email <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {currentYear} Hadi Al Hamza. All rights reserved.
          </p>

          <p className="text-zinc-500 text-sm flex items-center gap-2">
            Made with{" "}
            <Heart
              size={14}
              className="text-red-500 fill-red-500/20 animate-pulse"
            />{" "}
            using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
