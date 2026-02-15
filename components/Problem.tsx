import React from 'react';
import { motion } from 'framer-motion';
import { X, BatteryWarning } from 'lucide-react';

const problems = [
    {
        icon: <BatteryWarning className="w-6 h-6 text-red-400" />,
        title: "Creative Fatigue",
        desc: "Your ads perform… then die. You need constant freshness."
    },
    {
        icon: <X className="w-6 h-6 text-red-400" />,
        title: "Guesswork",
        desc: "You don’t test enough angles + hooks, so you’re stuck guessing."
    },
    {
        icon: <X className="w-6 h-6 text-red-400" />,
        title: "Slow Production",
        desc: "Production is slow, expensive, or inconsistent."
    },
    {
        icon: <X className="w-6 h-6 text-red-400" />,
        title: "Off-Brand Quality",
        desc: "Creative looks “off-brand,” which hurts trust and conversions."
    }
];

export const Problem: React.FC = () => {
    return (
        <section className="py-24 relative bg-black">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full border border-red-500/20 bg-red-500/10 backdrop-blur-sm mb-6"
                    >
                        <span className="text-red-400 text-[10px] uppercase tracking-widest font-sans font-medium">The Problem</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl text-white font-sans font-medium mb-4"
                    >
                        What’s Actually Killing Your Results?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 font-light text-lg max-w-2xl mx-auto"
                    >
                        Most ecom brands don’t lose because of targeting. They lose because of creative.
                        If you don’t have a reliable creative engine, you’re leaving revenue on the table.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {problems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/[0.03] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.05] transition-colors"
                        >
                            <div className="bg-red-500/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-white font-sans font-medium text-lg mb-3">{item.title}</h3>
                            <p className="text-gray-500 font-light text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
