import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$1,500",
    description: "Best for early-stage brands testing consistency.",
    features: [
      "2 Hero Videos",
      "12 Performance Images",
      "4-6 Video Cutdowns",
      "1 Mini Refresh Pack",
      "Monthly Angle Strategy"
    ],
    cta: "Start Testing",
    recommended: false
  },
  {
    name: "Growth",
    price: "$2,500",
    description: "For brands actively spending and needing steady winners.",
    features: [
      "3 Hero Videos",
      "18 Performance Images",
      "8-10 Video Cutdowns",
      "Mid-Month Refresh Pack",
      "Organic Boost Pack",
      "Detailed Insights Report"
    ],
    cta: "Scale Now",
    recommended: true
  },
  {
    name: "Scale",
    price: "$3,500",
    description: "For brands pushing spend and fighting heavy fatigue.",
    features: [
      "4 Hero Videos",
      "25 Performance Images",
      "10-14 Video Cutdowns",
      "2 Refresh Packs / Month",
      "Priority 48h Turnaround",
      "Dedicated Creative Strategist",
      "Unlimited Revisions"
    ],
    cta: "Dominate",
    recommended: false
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
       {/* Gradient Pillars */}
       <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute bottom-0 left-[20%] w-[60%] h-[60vh] bg-gradient-to-t from-brand-purple/5 to-transparent blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
           <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
             <span className="text-gray-300 text-[10px] uppercase tracking-widest font-sans font-medium">Investment</span>
           </div>
          <h2 className="text-4xl md:text-6xl text-white leading-tight">
             <span className="font-sans font-medium block mb-2">Simple,</span>
             <span className="font-serif italic text-white/90 block">scalable pricing.</span>
          </h2>
          <p className="mt-8 text-gray-400 font-light font-sans">Pause or cancel anytime. No long-term contracts.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-[2rem] p-10 flex flex-col h-full transition-all duration-300 group ${
                tier.recommended 
                  ? 'bg-white/[0.03] border border-brand-purple/30' 
                  : 'bg-transparent border border-white/10 hover:border-white/20'
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <div className="bg-brand-purple text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider font-sans shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="mb-10 text-center">
                <h3 className="text-2xl font-serif italic text-white mb-4">{tier.name}</h3>
                <div className="flex items-center justify-center gap-1 mb-6">
                  <span className="text-4xl font-sans font-medium text-white">{tier.price}</span>
                  <span className="text-gray-500 font-light font-sans text-sm">/mo</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed font-light font-sans min-h-[40px]">{tier.description}</p>
              </div>

              <div className="flex-1 mb-10">
                <ul className="space-y-4">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300 font-light font-sans group-hover:text-white transition-colors">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 ${tier.recommended ? 'text-brand-purple' : 'text-gray-600'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href="#contact"
                className={`w-full py-4 rounded-full font-bold text-sm text-center transition-all font-sans ${
                  tier.recommended 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};