import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2, Database, Terminal, Cpu,
  Users, Lightbulb, MessageSquare, Handshake
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: Code2,
    color: '#00d4ff',
    glowColor: 'rgba(0, 212, 255, 0.2)',
    skills: [
      { name: 'Java', level: 80 },
      { name: 'SQL', level: 85 },
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'Python', level: 75 },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Terminal,
    color: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.2)',
    skills: [
      { name: 'VS Code', level: 95 },
      { name: 'MySQL Workbench', level: 80 },
      { name: 'Git', level: 78 },
      { name: 'React', level: 72 },
      { name: 'Flask', level: 70 },
    ],
  },
  {
    title: 'AI & Data',
    icon: Cpu,
    color: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.2)',
    skills: [
      { name: 'TensorFlow', level: 68 },
      { name: 'OpenCV', level: 72 },
      { name: 'Pandas', level: 70 },
      { name: 'NumPy', level: 75 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    color: '#ec4899',
    glowColor: 'rgba(236, 72, 153, 0.2)',
    skills: [
      { name: 'Problem Solving', level: 90 },
      { name: 'Leadership', level: 82 },
      { name: 'Communication', level: 85 },
      { name: 'Team Collaboration', level: 88 },
    ],
  },
];

const softSkillIcons = [
  { name: 'Problem Solving', icon: Lightbulb },
  { name: 'Leadership', icon: Users },
  { name: 'Communication', icon: MessageSquare },
  { name: 'Team Collaboration', icon: Handshake },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-slate-300 font-medium">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <motion.div
          className="h-full rounded-full relative"
          style={{ background: `linear-gradient(to right, ${color}, ${color}88)` }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2"
            style={{ background: color, borderColor: '#020408', boxShadow: `0 0 6px ${color}` }} />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full opacity-10"
          style={{ background: 'linear-gradient(to bottom, transparent, #00d4ff, transparent)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Technical <span className="gradient-text">Arsenal</span></h2>
          <div className="w-20 h-1 mx-auto rounded-full mt-4"
            style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)' }} />
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="group relative glass rounded-2xl p-6 cursor-default transition-all duration-500 hover:scale-[1.02]"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}
              whileHover={{
                borderColor: `${category.color}40`,
                boxShadow: `0 0 30px ${category.glowColor}`,
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${category.glowColor} 0%, transparent 60%)` }}
              />

              <div className="relative z-10 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${category.color}15`, border: `1px solid ${category.color}30` }}>
                    <category.icon size={18} style={{ color: category.color }} />
                  </div>
                  <h3 className="font-semibold font-heading text-white text-sm">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.title === 'Soft Skills' ? (
                    category.skills.map((skill, i) => {
                      const skillIcon = softSkillIcons.find(s => s.name === skill.name);
                      return (
                        <motion.div
                          key={skill.name}
                          className="flex items-center gap-3 p-2 rounded-xl transition-all duration-300 group/skill"
                          style={{ background: `${category.color}08` }}
                          whileHover={{ background: `${category.color}15`, x: 4 }}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: catIdx * 0.1 + i * 0.05 }}
                        >
                          {skillIcon && (
                            <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                              style={{ background: `${category.color}20` }}>
                              <skillIcon.icon size={14} style={{ color: category.color }} />
                            </div>
                          )}
                          <span className="text-sm text-slate-300">{skill.name}</span>
                        </motion.div>
                      );
                    })
                  ) : (
                    category.skills.map((skill, i) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        color={category.color}
                        delay={catIdx * 0.1 + i * 0.08}
                      />
                    ))
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 glass rounded-2xl p-8"
          style={{ border: '1px solid rgba(0,212,255,0.1)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="text-center text-slate-400 text-sm font-medium mb-6 tracking-wider">TECHNOLOGIES I WORK WITH</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Python', 'Java', 'HTML5', 'CSS3', 'SQL', 'MySQL', 'TensorFlow', 'OpenCV', 'Flask', 'Git', 'VS Code', 'Tailwind CSS'].map((tech) => (
              <motion.span
                key={tech}
                className="px-4 py-2 rounded-full text-sm font-medium text-slate-300 transition-all duration-300 cursor-default"
                style={{ background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.1)' }}
                whileHover={{
                  background: 'rgba(0,212,255,0.12)',
                  borderColor: 'rgba(0,212,255,0.4)',
                  color: '#00d4ff',
                  scale: 1.05,
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
