import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, Code, Brain, Rocket, MapPin, Phone, Mail } from 'lucide-react';

const highlights = [
  { icon: Code, label: 'Full Stack Dev', value: '2+ Years Exp' },
  { icon: Brain, label: 'ML Enthusiast', value: 'Deep Learning' },
  { icon: Rocket, label: 'Projects', value: '5+ Completed' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full blur-3xl opacity-5"
          style={{ background: '#00d4ff', transform: 'translateY(-50%)' }} />
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full blur-3xl opacity-5"
          style={{ background: '#a855f7', transform: 'translateY(-50%)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title mt-2">About <span className="gradient-text">Me</span></h2>
          <div className="w-20 h-1 mx-auto rounded-full mt-4"
            style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)' }} />
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative group">
              <div
                className="absolute -inset-1 rounded-3xl blur-sm opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.3), rgba(168,85,247,0.3))' }}
              />
              <div className="relative glass-strong rounded-3xl p-8 space-y-6 neon-border">
                <div className="flex items-start gap-5">
                  <div className="relative shrink-0">
                    <div
                      className="w-20 h-20 rounded-2xl overflow-hidden border border-[#00d4ff]/40 shadow-lg"
                      style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(168,85,247,0.15))' }}
                    >
                      <img
                        src="/images/portrait-black.jpg"
                        alt="Portrait of Banavath Kumar"
                        className="w-full h-full object-cover"
                        style={{ objectPosition: '50% 18%' }}
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center bg-emerald-500">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-white">Banavath Kumar</h3>
                    <p className="text-[#00d4ff] text-sm font-medium mt-1">CS Engineer · Full Stack Developer</p>
                    <div className="flex items-center gap-1 mt-2 text-slate-500 text-xs">
                      <MapPin size={12} />
                      <span>Hyderabad, India</span>
                    </div>
                  </div>
                </div>

                <div className="h-px" style={{ background: 'linear-gradient(to right, rgba(0,212,255,0.3), transparent)' }} />

                <p className="text-slate-300 leading-relaxed text-sm">
                  I'm a passionate Computer Science graduate from Nalla Malla Reddy Engineering College
                  with a strong foundation in full-stack development and machine learning. I love building
                  intelligent, user-centric web applications that solve real-world problems.
                </p>
                <p className="text-slate-400 leading-relaxed text-sm">
                  My journey in tech has led me to explore everything from database-driven web apps to
                  deep learning models for medical image analysis. I thrive in collaborative environments
                  and am always eager to tackle challenging problems with creative solutions.
                </p>

                <div className="flex flex-col gap-2 text-sm">
                  {[
                    { icon: Phone, value: '8688229823', href: 'tel:8688229823' },
                    { icon: Mail, value: 'kumarbanavath60@gmail.com', href: 'mailto:kumarbanavath60@gmail.com' },
                  ].map(({ icon: Icon, value, href }) => (
                    <a key={value} href={href} className="flex items-center gap-3 text-slate-400 hover:text-[#00d4ff] transition-colors duration-300 group">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center glass group-hover:border-[#00d4ff]/30 transition-colors"
                        style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                        <Icon size={14} />
                      </div>
                      {value}
                    </a>
                  ))}
                </div>

              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              {highlights.map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  className="glass rounded-2xl p-5 text-center group cursor-default transition-all duration-300 hover:scale-105"
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                  whileHover={{ borderColor: 'rgba(0, 212, 255, 0.3)' }}
                >
                  <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(168,85,247,0.15))' }}>
                    <Icon size={18} className="text-[#00d4ff]" />
                  </div>
                  <div className="text-white font-bold text-sm">{value}</div>
                  <div className="text-slate-500 text-xs mt-1">{label}</div>
                </motion.div>
              ))}
            </div>

            <div className="glass rounded-2xl p-6 space-y-4" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
              <h4 className="text-white font-semibold font-heading flex items-center gap-2">
                <span className="text-[#00d4ff]">/</span> Quick Facts
              </h4>
              {[
                { label: 'Degree', value: 'B.Tech Computer Science Engineering' },
                { label: 'University', value: 'JNTUH - Nalla Malla Reddy Eng. College' },
                { label: 'GPA', value: '8.0 / 10.0' },
                { label: 'Focus', value: 'Full Stack Dev & Machine Learning' },
                { label: 'Status', value: 'Open to opportunities' },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-4 text-sm">
                  <span className="text-slate-500 w-24 shrink-0">{label}</span>
                  <span className="text-slate-300">{value}</span>
                </div>
              ))}
            </div>

            <div className="glass rounded-2xl p-6" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
              <h4 className="text-white font-semibold font-heading mb-4 flex items-center gap-2">
                <span className="text-[#a855f7]">/</span> Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Web Development', 'Machine Learning', 'UI/UX Design', 'Open Source', 'Problem Solving', 'Deep Learning', 'Cloud Computing'].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 transition-all duration-300 hover:text-[#00d4ff]"
                    style={{ background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.1)' }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
