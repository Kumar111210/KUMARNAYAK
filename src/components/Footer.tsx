import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Code2, Heart, ArrowUp } from 'lucide-react';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/banavathkumar', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:kumarbanavath60@gmail.com', label: 'Email' },
  { icon: Phone, href: 'tel:8688229823', label: 'Phone' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(0,212,255,0.3), rgba(168,85,247,0.3), transparent)' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full blur-3xl opacity-5"
          style={{ background: '#00d4ff' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #00d4ff, #a855f7)' }}>
                  <Code2 size={18} className="text-white" />
                </div>
                <div className="absolute inset-0 rounded-xl blur-md opacity-50"
                  style={{ background: 'linear-gradient(135deg, #00d4ff, #a855f7)' }} />
              </div>
              <div>
                <div className="font-heading font-bold text-white">Banavath Kumar</div>
                <div className="text-xs text-slate-500">CS Engineer & Developer</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building intelligent, user-centric web applications that make a difference.
              Passionate about full-stack development and machine learning.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center glass transition-all duration-300"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                  whileHover={{ scale: 1.15, borderColor: 'rgba(0,212,255,0.4)', y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={15} className="text-slate-400 hover:text-[#00d4ff] transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold font-heading text-sm tracking-wider">QUICK LINKS</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm text-slate-400 hover:text-[#00d4ff] transition-colors duration-300 py-1 flex items-center gap-1 group"
                >
                  <span className="w-0 h-px group-hover:w-3 transition-all duration-300"
                    style={{ background: '#00d4ff' }} />
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold font-heading text-sm tracking-wider">CONTACT</h4>
            <div className="space-y-3">
              {[
                { label: 'Email', value: 'kumarbanavath60@gmail.com', href: 'mailto:kumarbanavath60@gmail.com' },
                { label: 'Phone', value: '8688229823', href: 'tel:8688229823' },
                { label: 'LinkedIn', value: 'linkedin.com/in/banavathkumar', href: 'https://linkedin.com/in/banavathkumar' },
                { label: 'Location', value: 'Hyderabad, India', href: null },
              ].map(({ label, value, href }) => (
                <div key={label} className="text-sm">
                  <div className="text-slate-600 text-xs mb-0.5">{label}</div>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-[#00d4ff] transition-colors duration-300"
                      style={{ wordBreak: 'break-all' }}>
                      {value}
                    </a>
                  ) : (
                    <span className="text-slate-400">{value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <div className="flex items-center gap-1.5 text-slate-500 text-sm">
            <span>Made with</span>
            <Heart size={13} className="text-red-500 fill-red-500" />
            <span>by</span>
            <span className="neon-text font-medium">Banavath Kumar</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <span>Built with React + Three.js + Tailwind</span>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center text-white z-50 transition-all duration-300 shadow-lg"
        style={{ background: 'linear-gradient(135deg, #00d4ff, #a855f7)', boxShadow: '0 0 20px rgba(0,212,255,0.3)' }}
        whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(0,212,255,0.5)' }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
      >
        <ArrowUp size={18} />
      </motion.button>
    </footer>
  );
}
