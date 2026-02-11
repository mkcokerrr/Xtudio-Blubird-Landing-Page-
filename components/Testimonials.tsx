import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "We were struggling with creative fatigue on Meta. Blubird's variation engine completely turned our account around. We're finally testing enough volume to find winners consistently.",
    author: "Sarah Jenkins",
    role: "CMO, Velvet Skin",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    quote: "The quality is indistinguishable from our in-house shoots, but the speed is 10x. The 'Mid-Month Refresh' is a game changer for keeping our CPA stable.",
    author: "Marcus Chen",
    role: "Founder, TechFlow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    quote: "Finally an agency that understands 'performance' creative. They don't just make pretty videos; they make videos that actually convert. Highly recommended.",
    author: "Elena Rodriguez",
    role: "Head of Growth, FitLife",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
           <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
             <span className="text-gray-300 text-[10px] uppercase tracking-widest font-sans font-medium">Testimonials</span>
           </div>
           <h2 className="text-4xl md:text-6xl text-white leading-tight">
             <span className="font-sans font-medium block mb-2">Don't just take</span>
             <span className="font-serif italic text-white/90 block">our word for it.</span>
           </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 relative backdrop-blur-sm hover:bg-white/[0.04] transition-colors flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-gray-600 mb-8" />
                <p className="text-gray-300 font-sans font-light leading-relaxed mb-10 relative z-10 text-lg">
                  "{item.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <img 
                  src={item.image} 
                  alt={item.author} 
                  className="w-10 h-10 rounded-full object-cover border border-white/10 grayscale opacity-70"
                />
                <div>
                  <h4 className="text-white font-serif italic">{item.author}</h4>
                  <p className="text-xs text-gray-500 font-sans uppercase tracking-wide">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};