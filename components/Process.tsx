import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Video, Image as ImageIcon, Zap, RefreshCw } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 overflow-hidden relative">
      {/* Central Pillar Glow */}
      <div className="absolute inset-0 pointer-events-none flex justify-center">
         <div className="w-[40%] h-full bg-gradient-to-t from-brand-purple/5 to-transparent blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 text-center md:text-left">
          <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
             <span className="text-gray-300 text-[10px] uppercase tracking-widest font-sans font-medium">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-6xl text-white leading-tight">
            <span className="font-sans font-medium block mb-2">From Identity</span>
            <span className="font-serif italic text-white/90 block">to Scale.</span>
          </h2>
          <p className="mt-8 text-lg text-gray-400 max-w-2xl font-light font-sans leading-relaxed">
            The first step is to understand your brand identity. Then, we build the perfect on brand Campaign creative system to scale.
          </p>
        </div>

        {/* The Engine Visualization */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 mt-12">
          
          {/* Input: Hero Videos */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/4 p-10 rounded-[2rem] bg-white/[0.03] border border-white/10 flex flex-col items-center text-center backdrop-blur-sm hover:bg-white/[0.05] transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10">
              <Video className="w-5 h-5 text-gray-300" />
            </div>
            <h3 className="text-xl font-serif italic mb-4 text-white">Brand-Aligned Visuals</h3>
            <p className="text-sm text-gray-500 font-light font-sans leading-relaxed">
              We create the initial hero videos that align perfectly with your brand identity and guidelines.
            </p>
          </motion.div>

          {/* Connector 1 */}
          <div className="hidden lg:flex flex-1 items-center justify-center relative h-[1px] bg-white/10">
             <div className="absolute -top-3 bg-black px-4 text-[10px] text-gray-500 uppercase tracking-widest font-sans">Synthesis</div>
          </div>
          
          {/* Mobile Arrow */}
          <div className="lg:hidden flex flex-col items-center py-6 opacity-30">
             <Zap className="w-6 h-6 text-white rotate-90" />
          </div>

          {/* The Engine Core */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-1/3 p-px rounded-[2.5rem] bg-gradient-to-b from-brand-purple/30 to-brand-blue/30"
          >
            <div className="bg-black/80 rounded-[2.5rem] p-12 flex flex-col items-center text-center h-full relative overflow-hidden backdrop-blur-md">
               <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
               <div className="absolute bottom-0 inset-x-0 h-[100px] bg-gradient-to-t from-brand-purple/10 to-transparent"></div>
               
               <div className="relative z-10">
                 <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-brand-purple to-brand-blue flex items-center justify-center mb-8 mx-auto shadow-[0_0_30px_rgba(139,92,246,0.4)]">
                   <Layers className="w-7 h-7 text-white" />
                 </div>
                 <h3 className="text-2xl font-serif italic mb-4 text-white">Variation Engine</h3>
                 <p className="text-gray-400 font-light text-sm leading-relaxed font-sans">
                    We create enough variations for you to test every angle using our proprietary engine.
                 </p>
               </div>
            </div>
          </motion.div>

          {/* Connector 2 */}
          <div className="hidden lg:flex flex-1 items-center justify-center relative h-[1px] bg-white/10">
             <div className="absolute -top-3 bg-black px-4 text-[10px] text-gray-500 uppercase tracking-widest font-sans">Testing</div>
          </div>
          
           {/* Mobile Arrow */}
           <div className="lg:hidden flex flex-col items-center py-6 opacity-30">
             <Zap className="w-6 h-6 text-white rotate-90" />
          </div>

          {/* Output: Assets */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-full lg:w-1/4 p-10 rounded-[2rem] bg-white/[0.03] border border-white/10 flex flex-col items-center text-center backdrop-blur-sm hover:bg-white/[0.05] transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10">
              <ImageIcon className="w-5 h-5 text-gray-300" />
            </div>
            <h3 className="text-xl font-serif italic mb-4 text-white">30+ Assets / Mo</h3>
            <p className="text-sm text-gray-500 font-light font-sans leading-relaxed mb-4">
              On-brand, high-quality assets ready to be swapped into your campaigns based on what works.
            </p>
          </motion.div>
        </div>

        {/* Refresh Badge */}
        <div className="flex justify-center mt-20">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 border border-white/10 rounded-full py-2 pl-2 pr-6 flex items-center gap-4 cursor-default backdrop-blur-md"
          >
            <div className="bg-brand-purple rounded-full p-2">
              <RefreshCw className="w-3 h-3 text-white" />
            </div>
            <div>
              <p className="text-xs text-white font-sans font-medium">Continuous Optimization via Performance Data</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};