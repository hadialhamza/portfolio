import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderOpen } from "lucide-react";
import ProjectCard from "../shared/ProjectCard";
import SectionHeading from "../shared/SectionHeading";
import ProjectDetailsModal from "../shared/ProjectDetailsModal";

// Project data
const projects = [
  {
    id: 1,
    title: "Fit Flow Pro",
    category: "AI-Powered Fitness",
    description:
      "A comprehensive fitness and activity tracking platform architected with Groq/Llama AI for personalized insights. Features a scalable exercise library managing 1,300+ data points and a CMS-style landing page. Implements high-security authentication with custom JWTs and automated password recovery.",
    tags: ["Next.js", "Express.js", "MongoDB", "Groq AI", "TanStack Query"],
    image: "https://res.cloudinary.com/djmfhatti/image/upload/v1776263326/fitflow-home_uumgkm.png",
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

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative pt-25 md:pt-30 overflow-hidden transition-colors duration-300 section-contain"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          icon={FolderOpen}
          badgeText="My Work"
          title="Project"
          highlight="Showcase"
        />

        <div className="relative mt-20">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-800 hidden md:block" />

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative flex flex-col md:flex-row items-center mb-16 md:mb-24 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary neon-glow-cyan z-20 hidden md:block" />

              {/* Dotted line connecting to card */}
              <div
                className={`hidden md:block absolute top-1/2 w-8 border-t-2 border-dashed border-slate-700 ${
                  index % 2 === 0 ? "right-1/2 mr-2" : "left-1/2 ml-2"
                }`}
              />

              {/* Content Card Wrapper */}
              <div
                className={`w-full md:w-[calc(50%-1.8rem)] ${
                  index % 2 === 0 ? "md:pr-4" : "md:pl-4"
                }`}
              >
                <div
                  className={`h-[500px] flex flex-col justify-center ${
                    index % 2 === 0
                      ? "items-center md:items-end"
                      : "items-center md:items-start"
                  }`}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    onDetails={() => setSelectedProject(project)}
                  />
                </div>
              </div>

              {/* Empty Space for the other side (optional, for spacing balance if needed) */}
              <div className="hidden md:block w-[calc(50%-1.8rem)]" />
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectDetailsModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
