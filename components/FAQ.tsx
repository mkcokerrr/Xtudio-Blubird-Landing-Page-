import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Do you manage our ads too?",
    answer: "No — we focus on the creative system. We collaborate with your media buyer or team so the creative and testing plan stays aligned."
  },
  {
    question: "What do you need from us?",
    answer: "Brand assets (logo/fonts), product info, any existing footage/UGC, and access to past performance insights (optional but helpful)."
  },
  {
    question: "What if we don’t have UGC/footage?",
    answer: "We can build around product visuals + templates, and/or recommend a simple UGC capture plan your team can film on a phone."
  },
  {
    question: "How fast can we start?",
    answer: "Once you’re onboarded, we begin the first cycle immediately."
  },
  {
    question: "Can you do only images (no video)?",
    answer: "Yes—if you want an image-only testing pack, we can offer that as a custom plan."
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