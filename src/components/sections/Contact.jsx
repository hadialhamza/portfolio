import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Field, Label, Input, Textarea } from "@headlessui/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

import SectionHeading from "../shared/SectionHeading";
import GlowIconButton from "../shared/GlowIconButton";
import NeonButton from "../shared/NeonButton";
import { socialLinks } from "../../data/data";

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
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+880 1765-060631",
      link: "tel:+8801765060631",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Rangpur Sadar, Bangladesh",
      link: null,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
  ];

  return (
    <section
      id="contact"
      className="relative flex items-center overflow-hidden transition-colors duration-300 section-contain py-25 md:py-30"
    >
      {/* Background Grid Pattern */}

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <SectionHeading
          icon={Send}
          badgeText="Contact"
          title="Let's start a"
          highlight="Conversation."
          description="Ready to turn your idea into reality? I'm currently available for freelance work and open to new opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-stretch mt-8 md:mt-12">
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <div className="h-full flex flex-col justify-between bg-slate-900/95 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-none">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <MessageSquare className="text-indigo-400" />
                  Get in touch
                </h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  Prefer email? No problem. I usually respond within 24 hours.
                  Feel free to reach out about projects, collaborations, or just
                  to say hi.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-black/20 border border-white/5 hover:bg-white/5 transition-colors duration-300"
                    >
                      <div
                        className={`w-12 h-12 flex items-center justify-center rounded-xl ${info.bg} ${info.color} ring-1 ring-inset ring-white/5`}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-zinc-500 mb-0.5">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-lg font-semibold text-zinc-200 hover:text-white transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg font-semibold text-zinc-200">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-sm text-zinc-500 mb-4">
                  Follow me on social media
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <GlowIconButton key={index} {...social} />
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
            className="h-full"
          >
            <form
              onSubmit={handleSubmit}
              className="h-full flex flex-col justify-center bg-slate-900/95 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden"
            >
              {/* Decorative gradient inside form */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div className="space-y-6 relative z-10 w-full">
                <Field className="space-y-2">
                  <Label className="text-sm font-medium text-zinc-400 ml-1">
                    Name
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-zinc-950/50 border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all data-hover:border-indigo-500/50"
                  />
                </Field>

                <Field className="space-y-2">
                  <Label className="text-sm font-medium text-zinc-400 ml-1">
                    Email
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-zinc-950/50 border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all data-hover:border-indigo-500/50"
                  />
                </Field>

                <Field className="space-y-2">
                  <Label className="text-sm font-medium text-zinc-400 ml-1">
                    Message
                  </Label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-zinc-950/50 border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none data-hover:border-indigo-500/50"
                  />
                </Field>

                <NeonButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  icon={ArrowRight}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </NeonButton>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
