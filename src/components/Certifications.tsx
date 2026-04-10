import { motion } from 'framer-motion';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Data Engineering Certification',
    issuer: 'Professional Certification Body',
    date: '2023',
    description: 'Comprehensive training in data pipelines, ETL processes, database design, and big data technologies.',
    color: '#00d4ff',
    skills: ['ETL Pipelines', 'Data Modeling', 'SQL', 'Big Data'],
    status: 'Completed',
  },
  {
    title: 'Full Stack Development Certification',
    issuer: 'Tech Learning Platform',
    date: '2023',
    description: 'End-to-end web development covering frontend frameworks, backend APIs, databases, and deployment.',
    color: '#a855f7',
    skills: ['React', 'Node.js', 'REST APIs', 'Databases'],
    status: 'Completed',
  },
  {
    title: 'UI/UX Design Basics',
    issuer: 'Design Academy',
    date: '2022',
    description: 'Fundamentals of user interface and experience design including wireframing, prototyping, and design systems.',
    color: '#ec4899',
    skills: ['Wireframing', 'Prototyping', 'Design Systems', 'Figma'],
    status: 'Completed',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-5"
          style={{ background: '#ec4899' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title mt-2">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full mt-4"
            style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)' }} />
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,212,255,0.4), rgba(168,85,247,0.4), transparent)' }} />

          <div className="space-y-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
                className={`relative flex items-center gap-8 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${cert.color}20, ${cert.color}40)`,
                      border: `2px solid ${cert.color}`,
                      boxShadow: `0 0 20px ${cert.color}40`,
                    }}
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    <Award size={22} style={{ color: cert.color }} />
                  </motion.div>
                </div>

                <div className={`md:w-[calc(50%-3.5rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} w-full`}>
                  <motion.div
                    className="group glass rounded-2xl p-6 cursor-default transition-all duration-500"
                    style={{ border: `1px solid ${cert.color}20` }}
                    whileHover={{
                      borderColor: `${cert.color}50`,
                      boxShadow: `0 0 30px ${cert.color}15`,
                      scale: 1.02,
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center md:hidden"
                          style={{ background: `${cert.color}20`, border: `1px solid ${cert.color}30` }}>
                          <Award size={18} style={{ color: cert.color }} />
                        </div>
                        <div>
                          <h3 className="text-white font-bold font-heading text-sm leading-tight">{cert.title}</h3>
                          <p className="text-slate-500 text-xs mt-0.5">{cert.issuer}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1 shrink-0 ml-4">
                        <span className="text-xs font-mono" style={{ color: cert.color }}>{cert.date}</span>
                        <div className="flex items-center gap-1">
                          <CheckCircle size={10} className="text-emerald-400" />
                          <span className="text-emerald-400 text-xs">{cert.status}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-400 text-xs leading-relaxed mb-3">{cert.description}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-md text-xs font-medium"
                          style={{ background: `${cert.color}10`, border: `1px solid ${cert.color}20`, color: cert.color }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div className="hidden md:block md:w-[calc(50%-3.5rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
