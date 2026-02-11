import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How does the 'AI' part actually work?",
    answer: "We have built a system for creating high-quality videos with AI in a way that stays on-brand and follows your brand guidelines perfectly. This allows us to multiply 'Hero' assets into dozens of variations without sacrificing the quality or consistency of your brand voice."
  },
  {
    question: "What if I don't like the creatives?",
    answer: "We offer a 'Satisfaction Guarantee'. If after the first month you feel the creative quality isn't on-brand or usable, we'll do one additional revision round at no cost to ensure we hit the mark. We also align on a Creative Strategy & Angle Map before starting production."
  },
  {
    question: "Do I have to sign a long-term contract?",
    answer: "No. Our plans are month-to-month. You can pause or cancel anytime. We believe our results should keep you staying, not a piece of paper."
  },
  {
    question: "Do I need to send you the product?",
    answer: "Ideally, yes. For the best 'Hero' videos, having the physical product allows us to shoot custom footage. However, if you have a library of existing raw footage or UGC, we can often build the initial assets from that."
  },
  {
    question: "What is the 'Mid-Month Refresh'?",
    answer: "Ad fatigue is real. Two weeks after delivering your main batch, we analyze performance and deliver a fresh 'Refresh Pack' containing new static images and video cutdowns with swapped hooks to keep your ad account performance stable throughout the month."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
             <span className="text-gray-300 text-[10px] uppercase tracking-widest font-sans font-medium">Common Questions</span>
           </div>
          <h2 className="text-4xl md:text-6xl text-white leading-tight">
             <span className="font-sans font-medium block mb-2">Everything</span>
             <span className="font-serif italic text-white/90 block">you need to know.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/5 rounded-2xl bg-transparent overflow-hidden hover:bg-white/[0.02] transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 text-left"
              >
                <span className="text-lg font-serif italic text-white pr-8">{faq.question}</span>
                <span className="shrink-0 text-white/50">
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-gray-400 font-sans font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};