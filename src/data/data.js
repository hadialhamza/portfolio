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
import { Wrench, Zap, Bot } from "lucide-react";

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
    href: "https://linkedin.com/in/hadihamza",
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

export const projects = [
  {
    id: 1,
    title: "Fit Flow Pro",
    category: "AI-Powered Fitness",
    description:
      "A comprehensive fitness and activity tracking platform architected with Groq/Llama AI for personalized insights. Features a scalable exercise library managing 1,300+ data points and a CMS-style landing page. Implements high-security authentication with custom JWTs and automated password recovery.",
    tags: ["Next.js", "Express.js", "MongoDB", "Groq AI", "TanStack Query"],
    image:
      "https://res.cloudinary.com/djmfhatti/image/upload/v1776263326/fitflow-home_uumgkm.png",
    github: "https://github.com/hadialhamza/fit-flow-pro",
    client: "https://github.com/hadialhamza/fit-flow-pro",
    server: "https://github.com/hadialhamza/fit-flow-pro-server",
    live: "https://fit-flow-pro-cc.vercel.app",
    challenges:
      "Architecting the core system as a leader for a 5-member team and integrating Groq/Llama AI models to automate data processing and generate personalized fitness insights. Managing a massive exercise library of 1,300+ data points while ensuring high performance.",
    futurePlans:
      "I plan to implement real-time activity tracking using wearable device integrations and build a social feature for users to share progress and challenges within the platform.",
  },
  {
    id: 2,
    title: "BloodLine",
    category: "MERN Stack",
    description:
      "A comprehensive blood donation platform designed to bridge the gap between donors and patients. The application features a robust authentication system, a donor search engine based on blood group and district, and a user dashboard for managing donation requests. It simplifies the process of finding life-saving blood in emergencies.",
    tags: ["React", "Express.js", "MongoDB", "Tailwind CSS", "TanStack Query"],
    image: "https://i.ibb.co.com/Ldhn0KY1/bloodline.png",
    github: "https://github.com/hadialhamza/blood-donation-application-client",
    live: "https://bloodline-savelives.vercel.app",
    challenges:
      "One of the main challenges was implementing the multi-criteria search functionality efficiently. Filtering donors by both blood group and location simultaneously required complex MongoDB aggregation queries. Additionally, ensuring real-time UI updates when a donor accepts a request was tricky.",
    futurePlans:
      "I plan to integrate a real-time notification system using Socket.io so users get instant alerts. I also want to add a geolocation feature using the Google Maps API to show the nearest available donors on a map.",
  },
  {
    id: 3,
    title: "Prime Care",
    category: "Healthcare",
    description:
      "A patient-centric healthcare website designed to simplify appointment booking. The platform showcases doctor profiles, medical services, and health tips. It focuses heavily on accessibility and responsive design, ensuring patients can easily navigate the site from any device, whether mobile or desktop. Optimized for SEO with dynamic meta tags.",
    tags: ["Next.js", "Tailwind CSS", "NextAuth.js", "MongoDB", "Nodemailer"],
    image: "https://i.ibb.co.com/TxDWzLqR/prime-care.png",
    github: "https://github.com/hadialhamza/prime-care",
    live: "https://prime-care-service.vercel.app",
    challenges:
      "Implementing secure authentication and session management using NextAuth.js and optimizing platform SEO by architecting dynamic metadata with OpenGraph and Twitter cards to increase visibility.",
    futurePlans:
      "I plan to develop a backend system to store patient records securely. Additionally, implementing a 'Doctor's Portal' where doctors can log in to view their daily appointment schedule dynamically is a key future goal.",
  },
  {
    id: 4,
    title: "Aximo AI",
    category: "Service Review",
    description:
      "A service review management system where users can browse services, post reviews, and manage their own service listings. The platform emphasizes security with JWT (JSON Web Token) based authentication, ensuring that users can only modify or delete their own data. It includes private routes and interactive animations.",
    tags: ["React", "Node.js", "MongoDB", "Framer Motion", "JWT"],
    image: "https://i.ibb.co.com/dJ0CN1d9/aximo-ai.png",
    github: "https://github.com/hadialhamza/b12-a10-new-client-repo",
    live: "https://aximoai.netlify.app",
    challenges:
      "Implementing secure JWT authentication and handling token expiration on the client-side. I had to ensure that the Axios interceptors correctly attached the token to requests and redirected unauthorized users efficiently.",
    futurePlans:
      "I intend to add AI-powered features, such as automatically summarizing long reviews or suggesting service descriptions. A dark/light mode toggle and email verification for new accounts are also on the roadmap.",
  },
  {
    id: 5,
    title: "Personal Portfolio",
    category: "Frontend",
    description:
      "My official developer portfolio, engineered for performance and visual appeal. It utilizes advanced React patterns, custom animations with Framer Motion, and performance optimizations like CSS containment and lazy loading. It serves as a practical demonstration of my frontend skills and attention to detail.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "Lucide React"],
    image: "https://i.ibb.co.com/7xKL9m2W/portfolio.png",
    github: "https://github.com/hadialhamza/portfolio",
    live: "https://hadialhamza.vercel.app/",
    challenges:
      "Achieving a perfect 100 performance score on Lighthouse. I had to optimize large asset loading, minimize layout shifts (CLS) caused by animations, and implement a custom typewriter effect that runs on the compositor thread.",
    futurePlans:
      "I want to add a 'Tech Blog' section using MDX to share my learning journey. I also plan to implement a contact form that uses serverless functions to send emails directly to my inbox.",
  },
];
