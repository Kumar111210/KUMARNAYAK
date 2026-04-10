import { useEffect, useRef, type SVGProps } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Download, ArrowRight, Github } from 'lucide-react';
import gsap from 'gsap';
import HeroScene from '../scenes/HeroScene';

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.43 22h4.14V7.9H.43V22ZM8.4 7.9V22h4.14v-7.6c0-1.99.38-3.92 2.84-3.92 2.43 0 2.46 2.28 2.46 4.04V22H22V13.3c0-4.52-.97-8.01-6.24-8.01-2.53 0-4.23 1.39-4.92 2.71h-.07V7.9H8.4Z" />
  </svg>
);

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line', {
        y: 120,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
        delay: 0.5,
      });
      gsap.from('.hero-sub', {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 1.2,
        ease: 'power3.out',
      });
      gsap.from('.hero-btns', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 1.5,
        ease: 'power3.out',
      });
      gsap.from('.hero-socials', {
        x: -30,
        opacity: 0,
        duration: 0.8,
        delay: 1.8,
        ease: 'power3.out',
      });
    }, textRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;

      gsap.to('.parallax-slow', {
        x: x * 0.3,
        y: y * 0.3,
        duration: 1.5,
        ease: 'power2.out',
      });
      gsap.to('.parallax-fast', {
        x: x * 0.8,
        y: y * 0.8,
        duration: 1,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      <div className="bg-animated absolute inset-0" />

      <div className="absolute inset-0 parallax-slow">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #00d4ff, transparent)' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }} />
      </div>

      <div className="absolute inset-0 parallax-fast pointer-events-none">
        <HeroScene />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div ref={textRef} className="space-y-8">
          <div className="overflow-hidden">
            <div className="hero-line">
              <span className="font-mono text-sm tracking-widest"
                style={{ color: '#00d4ff' }}>
                 Hello world
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="overflow-hidden">
              <h1 className="hero-line text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight">
                I'm{' '}
                <span className="gradient-text">Banavath</span>
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="hero-line text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight">
                <span className="gradient-text">Kumar</span>
              </h1>
            </div>
          </div>

          <div className="hero-sub space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px" style={{ background: '#00d4ff' }} />
              <span className="text-lg text-slate-300 font-medium">
                Computer Science Engineer
              </span>
            </div>
            <p className="text-slate-400 text-base leading-relaxed max-w-lg pl-11">
              Full Stack Developer passionate about crafting immersive digital experiences
              and intelligent systems. Bridging the gap between design and technology.
            </p>
          </div>

          <div className="hero-btns flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary text-white flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-outline flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors duration-300 group"
              whileHover={{ scale: 1.05 }}
            >
              <Download size={16} className="group-hover:text-[#00d4ff] transition-colors" />
              Resume
            </motion.a>
          </div>

          <div className="hero-socials flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: LinkedinIcon, href: 'https://linkedin.com/in/banavathkumar', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:kumarbanavath60@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full flex items-center justify-center glass transition-all duration-300 hover:border-[#00d4ff]/50"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={16} className="text-slate-400 hover:text-[#00d4ff] transition-colors" />
              </motion.a>
            ))}
            <div className="ml-2 h-px flex-1 max-w-20" style={{ background: 'linear-gradient(to right, rgba(0,212,255,0.3), transparent)' }} />
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <motion.div
              className="absolute inset-0 rounded-3xl"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                background: 'linear-gradient(135deg, rgba(0,212,255,0.1) 0%, rgba(168,85,247,0.1) 100%)',
                border: '1px solid rgba(0,212,255,0.2)',
              }}
            />
          <motion.div
            className="absolute inset-4 glass rounded-2xl overflow-hidden neon-border"
            animate={{
              rotateX: [-8, 8, -6],
              rotateY: [8, -8, 6],
              y: [0, -10, 0, 12, 0],
              scale: [1, 1.03, 1],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          >
              <img
                src="/images/portrait-black.jpg"
                alt="Portrait of Banavath Kumar"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 18%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </motion.div>
          </div>

          <motion.div
            className="absolute -top-4 -right-4 glass rounded-xl px-4 py-3 neon-border"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-slate-300 font-medium">Available for work</span>
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-3"
            style={{ border: '1px solid rgba(168,85,247,0.3)' }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <div className="text-xs">
              <div className="text-slate-500">GPA</div>
              <div className="text-white font-bold text-lg">8.0</div>
              <div className="text-slate-500">B.Tech CSE</div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-[#00d4ff] transition-colors duration-300"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs tracking-widest font-mono">SCROLL</span>
        <ChevronDown size={18} />
      </motion.button>
    </section>
  );
}
