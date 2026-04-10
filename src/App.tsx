import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="loader-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center space-y-6">
        <div className="relative mx-auto w-20 h-20">
          <div className="loader-ring" />
          <div className="absolute inset-3 loader-ring" style={{ animationDirection: 'reverse', borderTopColor: '#a855f7' }} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-1"
        >
          <div className="font-heading font-bold text-xl gradient-text">Banavath Kumar</div>
          <div className="font-mono text-xs text-slate-600 tracking-widest">INITIALIZING PORTFOLIO...</div>
        </motion.div>
        <motion.div
          className="w-48 h-px mx-auto overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        >
          <motion.div
            className="h-full"
            style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)' }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative bg-dark-900 min-h-screen"
          style={{ backgroundColor: '#020408' }}
        >
          <div className="noise-overlay" />
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Education />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}
