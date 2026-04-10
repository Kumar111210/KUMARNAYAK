import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, Linkedin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '8688229823',
    href: 'tel:8688229823',
    color: '#00d4ff',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'kumarbanavath60@gmail.com',
    href: 'mailto:kumarbanavath60@gmail.com',
    color: '#a855f7',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/banavathkumar',
    href: 'https://linkedin.com/in/banavathkumar',
    color: '#06b6d4',
  },
];

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('loading');

    try {
      const phone = '918688229823';
      const textLines = [
        `Hello Banavath!`,
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        form.subject ? `Subject: ${form.subject}` : null,
        `Message: ${form.message}`,
      ].filter(Boolean);
      const text = encodeURIComponent(textLines.join('\n'));
      window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const inputClass = (field: string) => `
    w-full bg-white/5 text-white placeholder-slate-600 text-sm px-4 py-3 rounded-xl
    border transition-all duration-300 outline-none resize-none
    ${focusedField === field
      ? 'border-[#00d4ff] shadow-[0_0_20px_rgba(0,212,255,0.15)]'
      : 'border-white/8 hover:border-white/15'
    }
  `;

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-5"
          style={{ background: 'radial-gradient(circle, #00d4ff, #a855f7)' }} />
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
            Let's <span className="gradient-text">Connect!</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full mt-4"
            style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)' }} />
          <p className="section-subtitle mt-4">
            Thank you for visiting my portfolio. I’m a student passionate about learning, building projects, and growing in tech. If you’re on a hiring team and want to discuss internships, collaborations, or entry-level roles, I’d be happy to connect. Send me a message below and I’ll reply as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <motion.div
            className="lg:col-span-2 space-y-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass rounded-2xl p-6 neon-border space-y-6">
              <div>
                <h3 className="text-white font-bold font-heading text-xl">Get In Touch</h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  I'm currently open to full-time roles, internships, and freelance opportunities.
                  Whether you have a project idea or just want to connect, reach out!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl group transition-all duration-300"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                    whileHover={{
                      background: `${color}08`,
                      borderColor: `${color}30`,
                      x: 4,
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                      style={{ background: `${color}15`, border: `1px solid ${color}25` }}>
                      <Icon size={16} style={{ color }} />
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs">{label}</div>
                      <div className="text-slate-200 text-sm font-medium group-hover:text-white transition-colors"
                        style={{ wordBreak: 'break-all' }}>
                        {value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="pt-4 border-t border-white/5">
                <p className="text-xs text-slate-500 mb-3">RESPONSE TIME</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm text-slate-300">Usually responds within 24 hours</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="glass-strong rounded-2xl p-8 neon-border">
              <h3 className="text-white font-bold font-heading text-lg mb-6">Send a Message</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-400 font-medium tracking-wider">NAME *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your name"
                      required
                      className={inputClass('name')}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-400 font-medium tracking-wider">EMAIL *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="your@email.com"
                      required
                      className={inputClass('email')}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-slate-400 font-medium tracking-wider">SUBJECT</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="What's this about?"
                    className={inputClass('subject')}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-slate-400 font-medium tracking-wider">MESSAGE *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    className={inputClass('message')}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    background: status === 'success'
                      ? 'linear-gradient(135deg, #10b981, #059669)'
                      : status === 'error'
                      ? 'linear-gradient(135deg, #ef4444, #dc2626)'
                      : 'linear-gradient(135deg, #00d4ff, #a855f7)',
                    boxShadow: '0 0 20px rgba(0,212,255,0.2)',
                  }}
                  whileHover={status === 'idle' ? { scale: 1.02, boxShadow: '0 0 35px rgba(0,212,255,0.35)' } : {}}
                  whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                >
                  {status === 'loading' && <Loader2 size={16} className="animate-spin" />}
                  {status === 'success' && <CheckCircle size={16} />}
                  {status === 'error' && <AlertCircle size={16} />}
                  {status === 'idle' && <Send size={16} />}

                  {status === 'idle' && "Let's Talk"}
                  {status === 'loading' && 'Sending...'}
                  {status === 'success' && 'Message Sent!'}
                  {status === 'error' && 'Failed – Try Again'}
                </motion.button>

                <p className="text-xs text-slate-600 text-center">
                  Your information is safe and will never be shared.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
