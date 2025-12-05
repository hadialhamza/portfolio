import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiCode, FiZap, FiHeart } from "react-icons/fi";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <FiCode />,
      title: "Clean Code",
      description:
        "Writing maintainable and scalable code following best practices",
    },
    {
      icon: <FiZap />,
      title: "Fast Performance",
      description: "Optimizing applications for speed and efficiency",
    },
    {
      icon: <FiHeart />,
      title: "User Focused",
      description: "Creating intuitive experiences that users love",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            About{" "}
            <span className="text-primary">
              Me
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">Get to know me better</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
              Hello! I'm a <span className="text-primary">MERN Stack Developer</span>
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              <p>
                I'm a results-driven MERN Stack Developer with experience
                building responsive, scalable, and user-focused web applications
                using React, Node.js, Express, and MongoDB. I am skilled in UI
                optimization, API development, and secure authentication.
              </p>
              <p>
                I have built full-stack applications with features like
                authentication, dynamic product browsing, and real-time
                feedback. I am constantly learning and improving my skills to
                deliver high-quality web solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or learning about the
                latest trends in web development.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-5"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, x: 10 }}
                className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-xl text-primary text-2xl mb-5">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
