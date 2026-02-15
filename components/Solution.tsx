import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Video, Image as ImageIcon } from 'lucide-react';

export const Solution: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-black">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-block px-3 py-1 rounded-full border border-brand-purple/20 bg-brand-purple/10 backdrop-blur-sm mb-6">
                            <span className="text-brand-purple text-[10px] uppercase tracking-widest font-sans font-medium">Our Solution</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl text-white mb-6 leading-tight">
                            <span className="font-sans font-medium block">The Hero Video +</span>
                            <span className="font-serif italic text-brand-light block">Variation Engine.</span>
                        </h2>
                        <p className="text-gray-400 font-light text-lg mb-8 leading-relaxed">
                            Instead of churning endless videos, we do what performance teams actually need. We create high-quality hero video ads and multiply them into cutdowns + image variations built for testing.
                            <br /><br />
                            That gives you more creative volume, faster iteration, and better consistency—without sacrificing quality.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 text-white">
                                <div className="w-8 h-8 rounded-full bg-brand-purple/20 flex items-center justify-center">
                                    <Video className="w-4 h-4 text-brand-purple" />
                                </div>
                                <span className="font-sans font-light">3–4 High-Quality Hero Videos</span>
                            </div>
                            <div className="flex items-center gap-3 text-white">
                                <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center">
                                    <ImageIcon className="w-4 h-4 text-brand-blue" />
                                </div>
                                <span className="font-sans font-light">Multiplied into Cutdowns + Image Variations</span>
                            </div>
                            <div className="flex items-center gap-3 text-white">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                    <Layers className="w-4 h-4 text-white" />
                                </div>
                                <span className="font-sans font-light">Designed for Meta + TikTok performance</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 to-brand-blue/20 blur-[80px] rounded-full pointer-events-none" />
                        <div className="relative bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 overflow-hidden backdrop-blur-md">
                            {/* Visualization of the engine */}
                            <div className="flex flex-col gap-6">
                                {/* Hero Video Block */}
                                <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex items-center gap-4">
                                    <div className="w-16 h-24 bg-brand-purple/20 rounded-lg animate-pulse" />
                                    <div>
                                        <div className="h-2 w-24 bg-white/20 rounded mb-2" />
                                        <div className="h-2 w-32 bg-white/10 rounded" />
                                    </div>
                                </div>

                                {/* Arrow Down */}
                                <div className="flex justify-center">
                                    <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
                                </div>

                                {/* Variations Grid */}
                                <div className="grid grid-cols-3 gap-3">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={i} className="aspect-[4/5] bg-white/[0.02] rounded-lg border border-white/5" />
                                    ))}
                                </div>
                            </div>
                            <div className="mt-8 text-center text-xs text-gray-500 font-sans tracking-widest uppercase">
                                Variation Engine Active
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
