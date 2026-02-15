import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Video, RefreshCw, Repeat } from 'lucide-react';

const steps = [
  {
    icon: <Calendar className="w-6 h-6 text-white" />,
    title: "Step 1 — Kickoff (Week 1)",
    desc: "We review your product, brand style, competitors, and what you’ve tested."
  },
  {
    icon: <Video className="w-6 h-6 text-white" />,
    title: "Step 2 — Build & Deliver (Week 2)",
    desc: "We produce your hero videos + variation set for testing."
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-white" />,
    title: "Step 3 — Refresh & Iterate (Mid-Month)",
    desc: "We deliver the refresh pack based on what’s showing early signal and what’s fatiguing."
  },
  {
    icon: <Repeat className="w-6 h-6 text-white" />,
    title: "Step 4 — Repeat Monthly",
    desc: "You get a consistent creative engine that compounds performance over time."
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-gray-300 text-[10px] uppercase tracking-widest font-sans font-medium">How It Works</span>
          </div>
          <h2 className="text-3xl md:text-5xl text-white leading-tight mb-4">
            Simple, Repeatable, Fast.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div className="bg-white/[0.03] border border-white/5 p-8 rounded-2xl h-full hover:bg-white/[0.05] transition-colors relative z-10">
                <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center mb-6 border border-brand-purple/30">
                  {step.icon}
                </div>
                <h3 className="text-white font-sans font-medium text-lg mb-3">{step.title}</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};