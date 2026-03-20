import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  Video, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Lock,
  ExternalLink,
  X
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLockSlot = () => {
    window.open('https://wa.me/917401781784', '_blank');
    setIsModalOpen(true);
  };

  return (
    <main className="bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Section 1: Hero */}
      <section className="h-screen w-full flex flex-col justify-between p-6 md:p-12 relative overflow-hidden">
        <div className="flex justify-between items-start z-10">
          <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.2em] uppercase opacity-50 mb-1">Confidential Partnership</span>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-xl">HolyMoly</span>
              <X size={12} className="opacity-30" />
              <span className="font-display font-bold text-xl">CCF Studio</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] tracking-[0.2em] uppercase opacity-50 block">Strategy By</span>
            <span className="font-display font-medium text-sm">PULIDEVAN</span>
          </div>
        </div>

        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
          >
            <h1 className="font-display text-[12vw] md:text-[8vw] leading-[0.85] font-bold uppercase tracking-tighter">
              The Wedding<br />Blueprint
            </h1>
          </motion.div>
          <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <p className="max-w-md text-sm md:text-base opacity-60 leading-relaxed">
              A strategic collaboration designed to redefine wedding cinematography through brutalist precision and editorial storytelling.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-white/30"></div>
              <span className="text-xs uppercase tracking-widest opacity-40">Scroll to Explore</span>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] pointer-events-none opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        </div>
      </section>

      {/* Section 2: Logic */}
      <section className="h-screen w-full flex flex-col justify-center p-6 md:p-12 bg-[#050505]">
        <motion.div {...fadeIn} className="mb-12">
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase mb-4">The Logic</h2>
          <div className="h-1 w-24 bg-white"></div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { 
              icon: <Zap className="text-white" />, 
              title: "High Velocity", 
              desc: "Rapid production cycle. We capture and process while the energy is peak, ensuring the momentum is never lost." 
            },
            { 
              icon: <ShieldCheck className="text-white" />, 
              title: "Editorial Rigor", 
              desc: "Every frame is curated with brutalist precision. A focused visual ecosystem designed for high-fidelity storytelling." 
            },
            { 
              icon: <Users className="text-white" />, 
              title: "Dual Perspective", 
              desc: "HolyMoly's creative chaos meets CCF's technical dominance. A balanced visual architecture." 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={fadeIn}
              className="glass p-8 rounded-2xl flex flex-col gap-6 hover:bg-white/5 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <h3 className="font-display text-xl font-bold uppercase mb-2">{item.title}</h3>
                <p className="text-sm opacity-50 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Section 3: The Essential */}
      <section className="h-screen w-full flex flex-col justify-center p-6 md:p-12 bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn}>
            <span className="text-xs uppercase tracking-[0.3em] opacity-40 mb-4 block">Tier 01</span>
            <h2 className="font-display text-6xl md:text-8xl font-bold uppercase leading-none mb-6">
              The<br />Essential
            </h2>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-4xl font-display font-bold">₹30,000</span>
              <span className="text-sm opacity-40 uppercase">/ Event</span>
            </div>
            <p className="opacity-60 max-w-sm mb-8">
              The foundational visual architecture for couples who value raw emotion and professional execution.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              "1 Visual Architect",
              "4K Raw Footage",
              "Highlight Reel",
              "Digital Archive Access",
              "Color Graded Stills",
              "Advanced Sound Design"
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className="border border-white/10 p-4 rounded-lg flex items-center gap-3"
              >
                <CheckCircle2 size={16} className="text-white/40 shrink-0" />
                <span className="text-xs md:text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 4: The Dominance (High Contrast) */}
      <section className="h-screen w-full flex flex-col justify-center p-6 md:p-12 bg-white text-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="order-2 lg:order-1 grid grid-cols-1 gap-4"
          >
            {[
              { title: "2 Visual Architects", sub: "Dual angle coverage for every key moment." },
              { title: "Live Production Workflow", sub: "Real-time processing for immediate visual feedback." },
              { title: "Full Documentary Film", sub: "Comprehensive cinematic cut of the entire event." },
              { title: "Multi-Cam Sync", sub: "Synchronized 4K perspectives for depth." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className="border-2 border-black p-6 flex flex-col gap-1"
              >
                <span className="font-display font-bold uppercase text-lg">{item.title}</span>
                <span className="text-xs opacity-60">{item.sub}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeIn} className="order-1 lg:order-2 lg:text-right">
            <span className="text-xs uppercase tracking-[0.3em] opacity-40 mb-4 block">Tier 02</span>
            <h2 className="font-display text-6xl md:text-8xl font-bold uppercase leading-none mb-6">
              The<br />Dominance
            </h2>
            <div className="flex items-baseline gap-2 lg:justify-end mb-8">
              <span className="text-4xl font-display font-bold">₹60,000</span>
              <span className="text-sm opacity-40 uppercase">/ Event</span>
            </div>
            <div className="inline-block bg-black text-white px-4 py-1 text-[10px] uppercase tracking-widest font-bold">
              Most Requested
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Closing */}
      <section className="h-screen w-full flex flex-col items-center justify-center p-6 text-center relative bg-black">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <h2 className="font-display text-5xl md:text-8xl font-bold uppercase mb-8 tracking-tighter">
            Ready to<br />Build?
          </h2>
          <p className="max-w-md mx-auto opacity-50 mb-12 text-sm md:text-base">
            Slots for the 2026 wedding season are filling rapidly. Secure your date with the HolyMoly x CCF Studio collective today.
          </p>
          
          <button 
            onClick={handleLockSlot}
            className="group relative inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-display font-bold uppercase tracking-widest hover:bg-transparent hover:text-white transition-all duration-300 border-2 border-white overflow-hidden"
          >
            <span className="relative z-10">Lock the Slot</span>
            <Lock size={18} className="relative z-10 group-hover:rotate-12 transition-transform" />
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </motion.div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest">HolyMoly x CCF Studio</span>
          <span className="text-[10px] uppercase tracking-widest">© 2026</span>
        </div>

        {/* Success Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white text-black p-8 md:p-12 rounded-3xl max-w-md w-full relative"
              >
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 p-2 hover:bg-black/5 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase mb-4 text-center">Redirecting...</h3>
                <p className="text-center opacity-60 text-sm mb-8">
                  We're opening WhatsApp to connect you with our strategy lead. If it doesn't open automatically, click the button below.
                </p>
                <a 
                  href="https://wa.me/917401781784" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-black text-white py-4 rounded-xl font-bold uppercase text-xs tracking-widest"
                >
                  Open WhatsApp <ExternalLink size={14} />
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
