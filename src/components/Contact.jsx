import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  ArrowRight,
  Github,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

import SectionHeading from "./SectionHeading";
import SocialButton from "./SocialButton";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "hadialhamza@gmail.com",
      link: "mailto:hadialhamza@gmail.com",
      color: "text-indigo-600 dark:text-indigo-400",
      bg: "bg-indigo-100 dark:bg-indigo-500/10",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+880 1765-060631",
      link: "tel:+8801765060631",
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-100 dark:bg-purple-500/10",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Rangpur Sadar, Bangladesh",
      link: null,
      color: "text-cyan-600 dark:text-cyan-400",
      bg: "bg-cyan-100 dark:bg-cyan-500/10",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/hadialhamza",
      hoverColor: "hover:bg-black hover:text-white hover:border-black",
      shadowColor: "shadow-gray-500/20",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/hadialhamza",
      hoverColor: "hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]",
      shadowColor: "shadow-[#0077b5]/20",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "#",
      hoverColor: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]",
      shadowColor: "shadow-[#1877F2]/20",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "#",
      hoverColor: "hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F]",
      shadowColor: "shadow-[#E4405F]/20",
    },
  ];

  return (
    <section
      id="contact"
      className="relative flex items-center py-16 md:py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden transition-colors duration-300"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 h-full w-full bg-slate-50 dark:bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <SectionHeading
          icon={Send}
          badgeText="Contact"
          title="Let's start a"
          highlight="Conversation."
          description="Ready to turn your idea into reality? I'm currently available for freelance work and open to new opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start mt-8 md:mt-12">
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-zinc-900/30 border border-slate-200 dark:border-white/5 rounded-3xl p-6 md:p-8 shadow-lg dark:shadow-none">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <MessageSquare className="text-indigo-600 dark:text-indigo-400" />
                Get in touch
              </h3>
              <p className="text-slate-600 dark:text-zinc-400 mb-8 leading-relaxed">
                Prefer email? No problem. I usually respond within 24 hours.
                Feel free to reach out about projects, collaborations, or just
                to say hi.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-black/20 border border-slate-100 dark:border-white/5 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors duration-300"
                  >
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-xl ${info.bg} ${info.color} ring-1 ring-inset ring-black/5 dark:ring-white/5`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-500 dark:text-zinc-500 mb-0.5">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-lg font-semibold text-slate-800 dark:text-zinc-200 hover:text-primary dark:hover:text-white transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-slate-800 dark:text-zinc-200">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/5">
                <p className="text-sm text-slate-500 dark:text-zinc-500 mb-4">
                  Follow me on social media
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <SocialButton
                      key={social.label}
                      icon={social.icon}
                      href={social.href}
                      label={social.label}
                      hoverColor={social.hoverColor}
                      shadowColor={social.shadowColor}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden"
            >
              {/* Decorative gradient inside form */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-600 dark:text-zinc-400 ml-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-slate-50 dark:bg-zinc-950/50 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-600 dark:text-zinc-400 ml-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-slate-50 dark:bg-zinc-950/50 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-600 dark:text-zinc-400 ml-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-slate-50 dark:bg-zinc-950/50 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full px-8 py-4 bg-primary/90 text-slate-900 rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && (
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
