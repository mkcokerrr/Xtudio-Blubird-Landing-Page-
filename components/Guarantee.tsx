import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Calendar, Clock } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section id="guarantee" className="py-32 relative overflow-hidden">
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
            We know agencies can be flaky. We aren't. We put skin in the game.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
             <div className="bg-white/[0.02] p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
               <div className="flex items-center gap-4 mb-4">
                 <Clock className="w-5 h-5 text-gray-400" />
                 <h3 className="font-serif italic text-lg text-white">Late Delivery?</h3>
               </div>
               <p className="text-gray-500 text-sm font-light leading-relaxed font-sans">
                 If we miss the agreed delivery date, you get an <span className="text-white font-medium">extra bonus refresh pack</span> (images + cutdowns) for free.
               </p>
             </div>

             <div className="bg-white/[0.02] p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
               <div className="flex items-center gap-4 mb-4">
                 <RefreshCwIcon className="w-5 h-5 text-gray-400" />
                 <h3 className="font-serif italic text-lg text-white">Not Satisfied?</h3>
               </div>
               <p className="text-gray-500 text-sm font-light leading-relaxed font-sans">
                 If after the first month the quality isn't on-brand, we'll do <span className="text-white font-medium">one additional revision round</span> at no cost.
               </p>
             </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div id="contact" className="mt-32 text-center">
          <h2 className="text-4xl md:text-6xl font-sans font-medium mb-12 text-white">Ready to scale?</h2>
          <a href="mailto:hello@studioblubird.com" className="inline-block px-12 py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.2)] font-sans">
            Book a Discovery Call
          </a>
          <p className="mt-16 text-gray-700 text-xs font-light tracking-wide font-sans">
            © {new Date().getFullYear()} Studio Blubird. All rights reserved.
          </p>
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