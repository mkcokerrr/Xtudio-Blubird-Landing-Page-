import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const painPoints = [
  "Ads stop working fast (Creative Fatigue)",
  "Guessing angles instead of testing systematically",
  "Production is too slow to keep up with demand",
  "Creatives look inconsistent & off-brand",
  "High spend, but low creative velocity"
];

const solutions = [
  "Consistent monthly pipeline of fresh creatives",
  "Find winning angles faster (More shots on goal)",
  "Higher thumb-stop rates & conversion flow",
  "System that keeps ads fresh & on-brand",
  "Less wasted ad spend on weak creative"
];

export const Comparison: React.FC = () => {
  return (
    <section id="comparison" className="py-32 relative overflow-hidden">
       {/* Background Pillars - Subtle */}
       <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute bottom-0 left-[10%] w-[30%] h-[50vh] bg-gradient-to-t from-brand-purple/10 to-transparent blur-[80px]" />
        <div className="absolute bottom-0 right-[10%] w-[30%] h-[50vh] bg-gradient-to-t from-brand-blue/10 to-transparent blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-gray-300 text-[10px] uppercase tracking-widest font-sans font-medium">The Problem vs The Solution</span>
          </div>
          <h2 className="text-4xl md:text-6xl text-white leading-tight">
            <span className="font-sans font-medium block mb-2">Why would you want to</span>
            <span className="font-serif italic text-white/90 block">work with us?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Competitor Card */}
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-colors"
          >
            <h3 className="text-2xl font-serif mb-10 text-gray-400 italic">Other Agencies</h3>
            <ul className="space-y-6">
              {painPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4 text-gray-500 font-sans">
                  <X className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" />
                  <span className="font-light text-sm md:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Card */}
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 rounded-[2rem] border border-brand-purple/20 bg-gradient-to-b from-brand-purple/[0.05] to-transparent relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-purple/20 blur-[80px] rounded-full pointer-events-none"></div>
            <h3 className="text-2xl font-serif mb-10 text-white italic flex items-center gap-3">
              Our Workflow
            </h3>
            <ul className="space-y-6 relative z-10">
              {solutions.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4 text-white font-sans">
                  <div className="w-5 h-5 rounded-full bg-brand-purple/20 flex items-center justify-center shrink-0 mt-0.5 border border-brand-purple/20">
                    <Check className="w-3 h-3 text-brand-light" />
                  </div>
                  <span className="font-light text-sm md:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};