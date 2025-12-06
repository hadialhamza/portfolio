import React from "react";
import { Github, Linkedin, Mail, Heart, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/hadialhamza",
      label: "GitHub",
      color: "text-black bg-zinc-200",
      shadow: "hover:shadow-xl shadow-white/40",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/hadialhamza",
      label: "LinkedIn",
      color: "text-white bg-[#0077b5]",
      shadow: "hover:shadow-xl shadow-[#0077b5]/40",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:hadialhamza@gmail.com",
      label: "Email",
      color: "text-white bg-[#ea4335]",
      shadow: "hover:shadow-xl shadow-[#ea4335]/40",
    },
  ];

  const quickLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-3xl font-bold tracking-tighter text-primary">
              <span>&lt; Hadi Al Hamza /&gt;</span>
            </h3>
            <p className="text-zinc-400 leading-relaxed max-w-sm">
              Crafting digital experiences with pixel-perfect precision.
              Dedicated to building accessible, performant, and scalable web
              solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:-translate-y-1 transition-all duration-300 ${social.color} ${social.shadow}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group flex items-center gap-2 text-zinc-400 hover:text-primary hover:translate-x-2 transition-all duration-200 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-primary transition-all" />
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
              className="inline-flex items-center gap-2 text-primary hover:scale-105 font-medium transition-colors"
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
              size={20}
              className="text-primary fill-primary/60 animate-pulse"
            />{" "}
            using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
