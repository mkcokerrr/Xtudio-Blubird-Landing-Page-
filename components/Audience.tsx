import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

const fits = [
    "Ecom brands spending on Meta/TikTok who need more creative testing volume",
    "Brands tired of inconsistent freelancers or slow production cycles",
    "Teams that want premium creative with a performance-first approach",
    "Brands that value speed and brand consistency"
];

const notFits = [
    "You want “unlimited videos” (quality > quantity)",
    "Need full ad management (we focus on creative)",
    "Expect guaranteed ROAS without testing (we provide the assets to find winners)"
];

export const Audience: React.FC = () => {
    return (
        <section className="py-24 relative bg-black/80">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl text-white font-sans font-medium mb-4">
                        Is This You?
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-brand-purple/5 border border-brand-purple/20 p-10 rounded-[2rem]"
                    >
                        <h3 className="text-2xl font-sans font-medium text-white mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-brand-cta flex items-center justify-center">
                                <CheckCircle2 className="w-5 h-5 text-white" />
                            </span>
                            Perfect For
                        </h3>
                        <ul className="space-y-6">
                            {fits.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-gray-300 font-light font-sans">
                                    <CheckCircle2 className="w-5 h-5 text-brand-cta shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/[0.02] border border-white/5 p-10 rounded-[2rem]"
                    >
                        <h3 className="text-2xl font-sans font-medium text-gray-400 mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                <XCircle className="w-5 h-5 text-gray-500" />
                            </span>
                            Not a fit if...
                        </h3>
                        <ul className="space-y-6">
                            {notFits.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-gray-500 font-light font-sans">
                                    <XCircle className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
