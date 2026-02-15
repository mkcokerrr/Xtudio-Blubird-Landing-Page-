import React from 'react';
import { motion } from 'framer-motion';
import { Map, Video, Image as ImageIcon, Scissors, Share2, RefreshCw, BarChart3 } from 'lucide-react';

const deliverables = [
    {
        icon: <Map className="w-6 h-6 text-brand-purple" />,
        title: "1) Creative Strategy & Angle Map",
        desc: "We define the angles we’re testing and why (so we’re never guessing)."
    },
    {
        icon: <Video className="w-6 h-6 text-brand-purple" />,
        title: "2) 3–4 Hero Video Ads",
        desc: "Built for 9:16 and exported for key placements (4:5 / 1:1 as needed)."
    },
    {
        icon: <ImageIcon className="w-6 h-6 text-brand-purple" />,
        title: "3) 12–25 Performance Image Ads",
        desc: "Multiple angles, headlines, layouts, and product focuses for faster testing."
    },
    {
        icon: <Scissors className="w-6 h-6 text-brand-purple" />,
        title: "4) 6–12 Video Cutdowns/Variants",
        desc: "Hook swaps, tighter pacing, alternate openings—the stuff that actually moves CTR."
    },
    {
        icon: <Share2 className="w-6 h-6 text-brand-purple" />,
        title: "5) Organic Boost Pack",
        desc: "Reels covers, story formats, and post variants pulled from the same assets."
    },
    {
        icon: <RefreshCw className="w-6 h-6 text-brand-purple" />,
        title: "6) Mid-Month Fatigue Refresh Pack",
        desc: "Fresh assets to keep campaigns alive before performance drops."
    },
    {
        icon: <BarChart3 className="w-6 h-6 text-brand-purple" />,
        title: "7) Creative Insights Summary",
        desc: "What worked, what didn’t, and what we’re iterating next month."
    }
];

export const Deliverables: React.FC = () => {
    return (
        <section className="py-24 relative bg-black/50">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl text-white font-sans font-medium mb-4">
                        What You Get Each Month
                    </h2>
                    <p className="text-gray-400 font-light text-lg">
                        Monthly Performance Creative System (Meta + TikTok + Organic)
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {deliverables.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className={`bg-white/[0.03] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.05] transition-colors ${idx === deliverables.length - 1 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
                        >
                            <div className="bg-brand-purple/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-white font-sans font-medium text-lg mb-3">{item.title}</h3>
                            <p className="text-gray-500 font-light text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a
                        href="#contact"
                        className="inline-block bg-brand-cta text-white px-8 py-4 rounded-full font-sans font-bold hover:bg-brand-cta/90 transition-all duration-300"
                    >
                        Book a Call — Get Your First Cycle Started
                    </a>
                </div>
            </div>
        </section>
    );
};
