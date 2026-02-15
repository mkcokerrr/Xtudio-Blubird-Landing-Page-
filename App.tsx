import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Outcome } from './components/Outcome';
import { Solution } from './components/Solution';
import { Deliverables } from './components/Deliverables';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { Guarantee } from './components/Guarantee';
import { Audience } from './components/Audience';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-brand-purple selection:text-white font-sans relative">
      {/* Global Background Gradients - Fixed Position */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        {/* Left Pillar */}
        <div className="absolute bottom-0 left-[-10%] w-[40%] h-[70vh] bg-gradient-to-t from-brand-purple/20 via-brand-purple/5 to-transparent blur-[80px]" />

        {/* Center Pillar */}
        <div className="absolute bottom-0 left-[20%] w-[60%] h-[80vh] bg-gradient-to-t from-brand-blue/10 via-brand-purple/5 to-transparent blur-[100px]" />

        {/* Right Pillar */}
        <div className="absolute bottom-0 right-[-10%] w-[40%] h-[70vh] bg-gradient-to-t from-brand-blue/20 via-brand-blue/5 to-transparent blur-[80px]" />

        {/* Hard Light Floor Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-brand-purple/20 to-transparent blur-[60px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Problem />
          <Outcome />
          <Solution />
          <Deliverables />
          <Projects />
          <Process />
          <Guarantee />
          <Audience />
          <FAQ />
          <FinalCTA />
        </main>
      </div>
      <Analytics />
    </div>
  );
}

export default App;