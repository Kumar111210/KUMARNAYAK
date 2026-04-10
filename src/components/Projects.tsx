import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Monitor, Brain, Users, Layers } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'College Campus Recruitment System',
    description:
      'A comprehensive web-based recruitment portal that bridges the gap between students and potential employers. Features job listings, application tracking, interview scheduling, and detailed analytics for campus placement coordinators.',
    tags: ['HTML', 'CSS', 'MySQL', 'JavaScript'],
    icon: Users,
    color: '#00d4ff',
    glowColor: 'rgba(0, 212, 255, 0.15)',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com',
    demo: null,
    category: 'Web App',
    features: ['Job board management', 'Student profiles', 'Interview scheduler', 'Analytics dashboard'],
  },
  {
    id: 2,
    title: 'Smart Facial Screening for Down Syndrome Detection',
    description:
      'An AI-powered medical diagnostic tool that leverages deep learning and computer vision to analyze facial features and assist in early detection of Down Syndrome. Achieves high accuracy using custom-trained CNN models.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'React'],
    icon: Brain,
    color: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.15)',
    image: 'https://images.pexels.com/photos/8438951/pexels-photo-8438951.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com',
    demo: 'https://smart-facial-screening-3.onrender.com/',
    category: 'AI / ML',
    features: ['CNN-based classification', 'Real-time detection', 'Flask REST API', 'React frontend'],
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0, y: 0 }); }}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${-mousePos.y * 0.3}deg) rotateY(${mousePos.x * 0.3}deg) translateZ(10px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
        transition: isHovered ? 'transform 0.1s ease' : 'transform 0.6s ease',
      }}
      className="group relative glass rounded-3xl overflow-hidden cursor-default"
      whileHover={{ boxShadow: `0 0 60px ${project.glowColor}` }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at ${50 + mousePos.x * 2}% ${50 + mousePos.y * 2}%, ${project.glowColor} 0%, transparent 60%)`,
        }} />

      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(2,4,8,0.7) 60%, rgba(2,4,8,0.95) 100%)' }} />

        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-medium"
            style={{ background: `${project.color}20`, border: `1px solid ${project.color}40`, color: project.color }}>
            {project.category}
          </span>
        </div>

        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
            style={{ background: 'rgba(2,4,8,0.8)', border: '1px solid rgba(255,255,255,0.15)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={14} className="text-white" />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
              style={{ background: `${project.color}90`, border: `1px solid ${project.color}` }}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={14} className="text-white" />
            </a>
          )}
        </div>

        <div className="absolute bottom-4 left-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `${project.color}20`, border: `1px solid ${project.color}40` }}>
            <project.icon size={18} style={{ color: project.color }} />
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-bold font-heading text-white leading-tight group-hover:text-[#00d4ff] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm mt-2 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-xs text-slate-500 font-medium tracking-wider">KEY FEATURES</p>
          <div className="grid grid-cols-2 gap-1">
            {project.features.map((feat) => (
              <div key={feat} className="flex items-center gap-1.5 text-xs text-slate-400">
                <div className="w-1 h-1 rounded-full shrink-0" style={{ background: project.color }} />
                {feat}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-medium text-slate-400"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors duration-300 px-3 py-2 rounded-lg"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <Github size={12} />
            Code
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-lg transition-all duration-300"
              style={{ background: `${project.color}15`, border: `1px solid ${project.color}30`, color: project.color }}
            >
              <Monitor size={12} />
              Live Demo
              <ExternalLink size={10} />
            </a>
          ) : (
            <span className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg text-slate-600"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
              <Layers size={12} />
              Academic Project
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-5"
          style={{ background: '#00d4ff', transform: 'translateY(-50%)' }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-5"
          style={{ background: '#a855f7' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <div className="w-20 h-1 mx-auto rounded-full mt-4"
            style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)' }} />
          <p className="section-subtitle mt-4">
            Real-world applications built with passion and precision
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github size={16} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
