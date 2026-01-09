import {
  Mail,
  Heart,
  Home,
  User,
  Cpu,
  Briefcase,
  Laptop,
  Network,
  Database,
  Zap,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

import SocialButton from "../shared/SocialButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/hadialhamza",
      label: "GitHub",
      color: "text-slate-200 group-hover:text-white",
      glowClass: "bg-gradient-to-r from-slate-400 to-slate-600",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/hadialhamza",
      label: "LinkedIn",
      color: "text-blue-600 group-hover:text-blue-700",
      glowClass: "bg-gradient-to-r from-blue-400 to-blue-600",
    },
    {
      icon: FaFacebook,
      href: "https://facebook.com/hadialhamza",
      label: "Facebook",
      color: "text-blue-600 group-hover:text-blue-700",
      glowClass: "bg-gradient-to-r from-blue-500 to-indigo-600",
    },
    {
      icon: Mail,
      href: "mailto:hadialhamza@gmail.com",
      label: "Email",
      color: "text-red-500 group-hover:text-red-600",
      glowClass: "bg-gradient-to-r from-red-400 to-red-600",
    },
  ];

  return (
    <footer
      id="footer"
      className="bg-black border-t border-white/10 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-3xl font-bold tracking-tighter text-primary">
              <img
                src="/hamza-logo.webp"
                alt="Hadi Al Hamza"
                className="h-10 w-auto object-contain"
              />
            </h3>
            <p className="text-zinc-400 leading-relaxed max-w-sm">
              Crafting digital experiences with pixel-perfect precision.
              Dedicated to building accessible, performant, and scalable web
              solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <SocialButton key={index} {...social} />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-lg font-bold gradient-text mb-8 tracking-widest uppercase">
              Navigation
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Home", icon: Home },
                { name: "About", icon: User },
                { name: "Skills", icon: Cpu },
                { name: "Projects", icon: Briefcase },
                { name: "Contact", icon: Mail },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={`#${item.name.toLowerCase()}`}
                    className="group flex items-center gap-3"
                  >
                    <div className="p-2 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors duration-300">
                      <item.icon
                        size={16}
                        className="text-zinc-500 group-hover:text-primary transition-colors duration-300"
                      />
                    </div>
                    <span className="text-zinc-400 text-sm font-medium group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-bold gradient-text mb-8 tracking-widest uppercase">
              Services
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Full Stack Development", icon: Laptop },
                { name: "API Architecture", icon: Network },
                { name: "Database Design", icon: Database },
                { name: "Performance Optimization", icon: Zap },
              ].map((service) => (
                <li
                  key={service.name}
                  className="group flex items-center gap-3"
                >
                  <div className="p-2 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors duration-300">
                    <service.icon
                      size={16}
                      className="text-zinc-500 group-hover:text-primary transition-colors duration-300"
                    />
                  </div>
                  <span className="text-zinc-400 text-sm font-medium group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                    {service.name}
                  </span>
                </li>
              ))}
            </ul>
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
            by Hadi Al Hamza
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
