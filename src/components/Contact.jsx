import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email",
      value: "hadialhamza@gmail.com",
      link: "mailto:hadialhamza@gmail.com",
    },
    {
      icon: <FiPhone />,
      title: "Phone",
      value: "+880 1765-060631",
      link: "tel:+8801765060631",
    },
    {
      icon: <FiMapPin />,
      title: "Location",
      value: "Rangpur Sadar, Rangpur, Bangladesh",
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Get In{" "}
            <span className="text-primary">
              Touch
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">Let's work together</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
              Let's talk about <span className="text-primary">everything!</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed text-lg">
              Don't like forms? Send me an email or give me a call. I'm always
              open to discussing new projects, creative ideas, or opportunities.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-5 p-5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl text-primary text-xl shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-1">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-slate-900 dark:text-white font-semibold hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-900 dark:text-white font-semibold">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8"
          >
            <div className="mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            <div className="mb-6">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-primary text-slate-900 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20"
            >
              Send Message <FiSend />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
