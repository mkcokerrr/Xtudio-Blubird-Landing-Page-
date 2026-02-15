import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "$1,500",
    desc: "Best for early-stage brands building consistency.",
    features: [
      "2 hero videos",
      "12 images",
      "4–6 cutdowns",
      "1 mini refresh pack"
    ],
    cta: "Start Starter Plan"
  },
  {
    name: "Growth",
    price: "$2,500",
    desc: "Best for brands actively spending and needing steady winners.",
    popular: true,
    features: [
      "3 hero videos",
      "18 images",
      "8–10 cutdowns",
      "mid-month refresh pack"
    ],
    cta: "Apply for Growth Plan"
  },
  {
    name: "Scale",
    price: "$3,500",
    desc: "Best for brands pushing spend and fighting heavy fatigue.",
    features: [
      "4 hero videos",
      "25 images",
      "10–14 cutdowns",
      "2 refreshes per month"
    ],
    cta: "Apply for Scale Plan"
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[40vh] bg-brand-blue/5 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-white font-sans font-medium mb-4">
            Packages & Pricing
          </h2>
          <p className="text-gray-400 font-light text-sm">
            We take on a limited number of brands per month to keep quality high.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-[2rem] border ${plan.popular ? 'bg-white/[0.05] border-brand-purple/50' : 'bg-white/[0.02] border-white/5'} flex flex-col h-full`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-purple text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-sans font-medium text-white mb-2">{plan.name}</h3>
              <div className="text-3xl font-serif italic text-white mb-4">{plan.price} <span className="text-sm font-sans font-light text-gray-500 not-italic">/ month</span></div>
              <p className="text-gray-400 text-sm font-light mb-8 h-10">{plan.desc}</p>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm font-light">
                    <Check className="w-4 h-4 text-brand-cta shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-4 rounded-full font-sans font-bold transition-all duration-300 ${plan.popular ? 'bg-brand-cta text-white hover:bg-brand-cta/90' : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};