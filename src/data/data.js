import { FiHome, FiUser, FiCode, FiLayers, FiMail } from "react-icons/fi";
import { Linkedin, Mail } from "lucide-react";
import { SiMongodb, SiExpress, SiNextdotjs } from "react-icons/si";
import { TbBrandReact } from "react-icons/tb";
import {
  FaNodeJs,
  FaGithub,
  FaFacebook,
  FaReact,
  FaGoogle,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiJsonwebtokens,
  SiPostman,
  SiVercel,
  SiFramer,
  SiReactquery,
  SiRadixui,
  SiGithubcopilot,
} from "react-icons/si";
import {
  Layout,
  Server,
  Wrench,
  Zap,
  BarChart3,
  Scroll,
  Bot,
  Layers,
} from "lucide-react";

export const navItems = [
  { name: "Home", icon: FiHome },
  { name: "About", icon: FiUser },
  { name: "Skills", icon: FiCode },
  { name: "Projects", icon: FiLayers },
  { name: "Contact", icon: FiMail },
];

export const techStack = [
  {
    icon: TbBrandReact,
    name: "React",
    color: "text-sky-400 group-hover:text-sky-500",
    glowClass: "bg-gradient-to-r from-sky-400 to-blue-500",
  },
  {
    icon: SiExpress,
    name: "Express",
    color: "text-white group-hover:text-gray-200",
    glowClass: "bg-gradient-to-r from-gray-300 to-gray-300",
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
  {
    icon: SiNextdotjs,
    name: "Next.js",
    color: "text-white group-hover:text-gray-200",
    glowClass: "bg-gradient-to-r from-gray-300 to-gray-300",
  },
];

export const socialLinks = [
  {
    icon: FaGithub,
    name: "GitHub",
    href: "https://github.com/hadialhamza",
    color: "text-slate-200 group-hover:text-white",
    glowClass: "bg-gradient-to-r from-slate-300 to-slate-300",
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

export const frontend = [
  {
    name: "React.js",
    icon: FaReact,
    color: "#61DAFB",
    desc: "UI Library",
    proficiency: "Expert",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    desc: "React Framework",
    proficiency: "Expert",
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "#E34F26",
    desc: "Markup Language",
    proficiency: "Expert",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "#1572B6",
    desc: "Style Sheet",
    proficiency: "Expert",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    color: "#F7DF1E",
    desc: "Programming",
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
];

export const backend = [
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

export const tools = [
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
