import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Star } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science Engineering',
    institution: 'Nalla Malla Reddy Engineering College',
    university: 'JNTUH - Jawaharlal Nehru Technological University, Hyderabad',
    period: '2020 – 2024',
    gpa: '8.0 / 10.0',
    location: 'Hyderabad, Telangana',
    color: '#00d4ff',
    highlights: [
      'Machine Learning & AI coursework',
      'Full Stack Web Development',
      'Database Management Systems',
      'Data Structures & Algorithms',
      'Software Engineering Principles',
    ],
    status: 'Graduate',
  },
  {
    degree: 'Intermediate (12th Standard)',
    field: 'Mathematics, Physics & Chemistry',
    institution: 'Sri Chaitanya Junior College',
    university: 'Board of Intermediate Education, Telangana',
    period: '2018 – 2020',
    gpa: '8.5 / 10.0',
    location: 'Telangana, India',
    color: '#a855f7',
    highlights: [
      'Advanced Mathematics',
      'Engineering Physics',
      'Computer Science Fundamentals',
    ],
    status: 'Completed',
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-5"
          style={{ background: '#00d4ff' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title mt-2">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full mt-4"
            style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)' }} />
        </motion.div>

        <div className="relative space-y-8">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,212,255,0.4), rgba(168,85,247,0.4), transparent)' }} />

          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
              className={`relative flex gap-6 md:gap-0 ${
                index % 2 === 0
                  ? 'md:flex-row justify-start'
                  : 'md:flex-row-reverse justify-end'
              }`}
            >
              <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${edu.color}20, ${edu.color}40)`,
                    border: `2px solid ${edu.color}`,
                    boxShadow: `0 0 20px ${edu.color}50`,
                  }}
                  whileInView={{ rotate: [0, 360] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                >
                  <GraduationCap size={20} style={{ color: edu.color }} />
                </motion.div>
              </div>

              <div className={`sm:w-[calc(50%-3rem)] w-full ${index % 2 === 0 ? 'sm:pr-10' : 'sm:pl-10'}`}>
                <motion.div
                  className="group glass rounded-2xl p-7 cursor-default"
                  style={{ border: `1px solid ${edu.color}20` }}
                  whileHover={{
                    borderColor: `${edu.color}50`,
                    boxShadow: `0 0 40px ${edu.color}15`,
                    scale: 1.01,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 sm:hidden"
                      style={{ background: `${edu.color}15`, border: `1px solid ${edu.color}30` }}>
                      <GraduationCap size={22} style={{ color: edu.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div>
                          <h3 className="text-white font-bold font-heading text-base">{edu.degree}</h3>
                          <p style={{ color: edu.color }} className="font-medium text-sm mt-0.5">{edu.field}</p>
                        </div>
                        <span className="px-2.5 py-1 rounded-lg text-xs font-medium shrink-0"
                          style={{ background: `${edu.color}15`, border: `1px solid ${edu.color}30`, color: edu.color }}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <h4 className="text-slate-200 font-semibold text-sm">{edu.institution}</h4>
                    <p className="text-slate-500 text-xs">{edu.university}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs text-slate-400 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} style={{ color: edu.color }} />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} style={{ color: edu.color }} />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Star size={12} style={{ color: edu.color }} />
                      <span className="font-medium" style={{ color: edu.color }}>GPA: {edu.gpa}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500 font-medium tracking-wider mb-2">HIGHLIGHTS</p>
                    <div className="space-y-1.5">
                      {edu.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2 text-xs text-slate-400">
                          <div className="w-1 h-1 rounded-full shrink-0" style={{ background: edu.color }} />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
