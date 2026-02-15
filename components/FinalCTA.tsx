import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-purple/20 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl text-white font-sans font-medium mb-6 leading-tight"
                >
                    Ready for a creative system that finds <span className="font-serif italic text-brand-light">winners faster?</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 font-light text-lg mb-12 max-w-2xl mx-auto"
                >
                    Get a monthly pipeline of hero videos, variations, and refresh assets built for Meta + TikTok performance.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 bg-brand-cta text-white px-10 py-5 rounded-full font-sans font-bold hover:bg-brand-cta/90 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-cta/20 transition-all duration-300 text-lg"
                    >
                        Book a Free Creative Audit
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </motion.div>

                <p className="mt-16 text-gray-700 text-xs font-light tracking-wide font-sans">
                    © {new Date().getFullYear()} Studio Blubird. All rights reserved.
                </p>
            </div>
        </section>
    );
};
