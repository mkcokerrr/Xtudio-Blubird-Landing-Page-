import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Calendar, Clock, RefreshCw } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section id="guarantee" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[60vh] bg-gradient-to-t from-brand-purple/10 to-transparent blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Guarantee Box */}
        <div className="bg-black/40 border border-white/10 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/5 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="w-16 h-16 rounded-full bg-brand-purple/10 flex items-center justify-center mx-auto mb-10 border border-brand-purple/20">
            <ShieldCheck className="w-8 h-8 text-brand-light" />
          </div>

          <h2 className="text-3xl md:text-5xl font-medium mb-6 text-white leading-tight">
            <span className="font-sans block mb-2">Our "On-Time + Iteration"</span>
            <span className="font-serif italic block text-white/90">Guarantee.</span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16 font-light font-sans">
            Risk Reversal That’s Actually Fair.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <Clock className="w-5 h-5 text-gray-400" />
                <h3 className="font-serif italic text-lg text-white">Late Delivery?</h3>
              </div>
              <p className="text-gray-400 text-sm font-light leading-relaxed font-sans">
                If we miss the agreed delivery date, you get an <span className="text-white font-medium">extra bonus refresh pack</span> (images + cutdowns) free.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <RefreshCw className="w-5 h-5 text-gray-400" />
                <h3 className="font-serif italic text-lg text-white">Not Satisfied?</h3>
              </div>
              <p className="text-gray-400 text-sm font-light leading-relaxed font-sans">
                If after Month 1 you feel the creative isn’t on-brand or usable, you get <span className="text-white font-medium">one additional revision round</span> at no cost.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

const RefreshCwIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M3 21v-5h5" />
  </svg>
);