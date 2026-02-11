import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        
        {/* Social Proof Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="text-sm font-sans font-medium text-white">
              Creative Studio + Lab
            </span>
          </div>
        </motion.div>

        {/* Typography: Mixed Sans & Serif Italic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-10"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight text-white mb-2 font-sans font-medium">
            High-Performing
          </h1>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif italic text-white/90">
            Ad Creatives.
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-sans font-light"
        >
          We build high-performing ad creatives using AI so brands can test more angles, launch faster, and improve results without increasing production costs.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full flex flex-col items-center"
        >
           <a 
             href="#contact"
             className="bg-white text-black px-10 py-5 rounded-full font-sans font-bold hover:bg-gray-200 transition-colors text-lg"
           >
             Book a Call
           </a>
           
           {/* Social Icons */}
           <div className="flex justify-center gap-6 mt-12 opacity-40">
             {['Meta', 'TikTok', 'Google'].map((platform) => (
               <span key={platform} className="text-xs font-sans uppercase tracking-widest text-white">{platform}</span>
             ))}
           </div>
        </motion.div>

      </div>
    </section>
  );
};