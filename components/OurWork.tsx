import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Project {
  brand: string;
  category: string;
  metric: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    brand: "Lumina",
    category: "Skincare",
    metric: "3.2x ROAS",
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1000&auto=format&fit=crop",
    description: "Launch campaign for new serum line."
  },
  {
    brand: "Apex",
    category: "Athleisure",
    metric: "-40% CPA",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
    description: "High-velocity creative testing for Q4."
  },
  {
    brand: "SoundCore",
    category: "Tech",
    metric: "1.5M+ Views",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop",
    description: "Viral TikTok organic & paid assets."
  },
  {
    brand: "Velo",
    category: "Cycling",
    metric: "+120% CTR",
    image: "https://images.unsplash.com/photo-1534886317787-56b855a4b35b?q=80&w=1000&auto=format&fit=crop",
    description: "UGC-style product demos."
  },
  {
    brand: "Nectar",
    category: "Food & Bev",
    metric: "2.5x ROAS",
    image: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=1000&auto=format&fit=crop",
    description: "Healthy alternative beverage launch."
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for parallax effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for the movement
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseXPos = event.clientX - rect.left;
      const mouseYPos = event.clientY - rect.top;

      // Calculate position relative to center (-0.5 to 0.5)
      const xPct = (mouseXPos / width) - 0.5;
      const yPct = (mouseYPos / height) - 0.5;

      // Move image opposite to mouse (parallax)
      x.set(-xPct * 20);
      y.set(-yPct * 20);
    }
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-[300px] md:w-[400px] flex-shrink-0 group cursor-pointer transition-transform duration-500 hover:-translate-y-4"
    >
      <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 bg-white/5 border border-white/5 group-hover:border-white/20 transition-colors duration-300">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10 pointer-events-none" />

        {/* Parallax Image */}
        <motion.img
          src={project.image}
          alt={project.brand}
          style={{
            x: mouseX,
            y: mouseY,
            scale: 1.1 // Initial zoom to allow for movement without showing edges
          }}
          whileHover={{ scale: 1.15 }} // Zoom in slightly more on hover
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
        />

        {/* Overlay Badge */}
        <div className="absolute top-6 right-6 z-20 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-brand-primary/30 group-hover:bg-brand-primary/30 group-hover:border-brand-primary/50 transition-colors">
          <span className="text-xs font-medium text-white font-sans">{project.metric}</span>
        </div>
      </div>

      <div className="flex justify-between items-start px-2">
        <div>
          <h3 className="text-2xl font-serif italic text-white mb-2 group-hover:text-brand-light transition-colors">{project.brand}</h3>
          <p className="text-sm text-gray-400 font-sans font-light">{project.category} — {project.description}</p>
        </div>
      </div>
    </div>
  );
};

export const OurWork: React.FC = () => {
  return (
    <section id="work" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center">
          <div className="inline-block px-3 py-1 rounded-full border border-brand-primary/20 bg-brand-primary/10 backdrop-blur-sm mb-6">
            <span className="text-brand-light text-[10px] uppercase tracking-widest font-sans font-medium">Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-7xl text-white leading-tight">
            <span className="font-serif italic text-white block">Projects.</span>
          </h2>
        </div>
      </div>

      <div className="flex overflow-hidden relative w-full group/slider">
        {/* Gradient Masks for smooth fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex gap-10 px-4"
          // Animate from -50% to 0% to create a left-to-right flow
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 40, // Slower speed for better visibility
            repeat: Infinity
          }}
          style={{ width: "max-content" }}
        >
          {/* Double the list to create seamless infinite loop */}
          {[...projects, ...projects].map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};