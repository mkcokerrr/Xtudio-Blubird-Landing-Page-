import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">

        {/* Social Proof Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="text-sm font-sans font-medium text-brand-light">
              Performance Creatives for E-commerce
            </span>
          </div>
        </motion.div>

        {/* Typography: Mixed Sans & Serif Italic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-2 font-sans font-medium leading-tight">
            Stop guessing what
            <span className="font-serif italic text-brand-purple/90 block mt-2">creative will work.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-sans font-light"
        >
          Monthly hero videos + high-volume variations to find winning ads faster. Fight creative fatigue and stay consistently on-brand across Meta & TikTok.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center gap-4"
        >
          <a
            href="#contact"
            className="group bg-brand-cta text-white px-8 py-4 rounded-full font-sans font-bold hover:bg-brand-cta/90 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-cta/20 transition-all duration-300 text-lg flex items-center gap-2"
          >
            Book a Free Creative Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#pricing"
            className="text-white/70 px-8 py-4 rounded-full font-sans font-medium hover:text-white hover:bg-white/5 transition-all duration-300 text-lg"
          >
            See Packages & Pricing
          </a>
        </motion.div>

        {/* Built For / Best For */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl w-full border-t border-white/10 pt-8"
        >
          <div>
            <h4 className="text-white font-sans font-medium mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
              Built for:
            </h4>
            <p className="text-gray-500 text-sm font-light">Ecom brands running paid traffic (Meta/TikTok) who need consistent creative output without building an in-house team.</p>
          </div>
          <div>
            <h4 className="text-white font-sans font-medium mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-purple"></span>
              Best for:
            </h4>
            <p className="text-gray-500 text-sm font-light">Fashion/apparel, beauty, lifestyle, accessories, home goods, and product-based brands.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};