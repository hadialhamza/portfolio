import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary font-logo tracking-wider mb-4">
              &lt;Portfolio /&gt;
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building the web, one line of code at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-primary transition-all duration-300 hover:pl-2 text-sm"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/hadialhamza"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-slate-800 border border-slate-700 rounded-full text-slate-400 hover:bg-primary hover:text-slate-900 hover:border-primary transition-all duration-300 hover:-translate-y-1"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/hadialhamza"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-slate-800 border border-slate-700 rounded-full text-slate-400 hover:bg-primary hover:text-slate-900 hover:border-primary transition-all duration-300 hover:-translate-y-1"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:hadialhamza@gmail.com"
                className="w-12 h-12 flex items-center justify-center bg-slate-800 border border-slate-700 rounded-full text-slate-400 hover:bg-primary hover:text-slate-900 hover:border-primary transition-all duration-300 hover:-translate-y-1"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <p className="text-slate-400 text-sm text-center flex items-center justify-center gap-2">
            © {currentYear} Made with{" "}
            <FiHeart className="text-primary animate-pulse" /> by HADI AL HAMZA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
