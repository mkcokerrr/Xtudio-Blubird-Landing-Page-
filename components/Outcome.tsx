import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const outcomes = [
    "More winners (more tests, more chances to hit)",
    "Faster learning (angles + hooks tested intentionally)",
    "Fresh creative (built-in refresh to fight fatigue)",
    "Brand consistency across every placement",
    "Higher-quality assets that look premium—not “AI cheap”"
];

export const Outcome: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-purple/10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="bg-gradient-to-br from-brand-purple/20 to-brand-blue/10 border border-brand-purple/20 rounded-[3rem] p-10 md:p-20 text-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl md:text-5xl text-white mb-6">
                            <span className="font-sans font-medium block">The Outcome</span>
                            <span className="font-serif italic text-brand-light block">You Actually Want</span>
                        </h2>
                        <p className="text-gray-300 font-light text-lg max-w-xl mx-auto">
                            You want a system that consistently delivers performance without the headache.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                        {outcomes.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start gap-3 bg-black/40 p-5 rounded-2xl border border-white/5 backdrop-blur-sm"
                            >
                                <CheckCircle2 className="w-5 h-5 text-brand-cta shrink-0 mt-0.5" />
                                <span className="text-gray-200 font-sans font-light text-sm md:text-base">{item}</span>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};
