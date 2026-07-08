import React, { useState } from 'react';

// Custom project database matching your precise profile
const projects = [
  {
    id: "filmintel",
    title: "FilmIntel AI Platform",
    tagline: "AI Analytics Engine",
    shortDesc: "Advanced movie analytics engine using intelligence models to decode complex cinematic data and metrics.",
    fullDesc: "An intelligent content analysis system designed to ingest, process, and derive complex cinematic patterns and user engagement insights. It bridges advanced predictive models with data visualization to provide high-fidelity analytics overlays for modern media landscapes.",
    why: "Built to eliminate guesswork in digital media analysis, transforming qualitative artistic attributes into clear, actionable data streams.",
    liveLink: "https://filmintel-ai-platform-7.streamlit.app/",
    github: "https://github.com/Dharmatejamalla817/filmintel-ai-platform",
    accent: "group-hover:border-purple-500/50 group-hover:bg-purple-500/5 text-purple-400"
  },
  {
    id: "lendswift",
    title: "LendSwift Loan Process Design",
    tagline: "Fintech Engine",
    shortDesc: "Ultra-smooth, conversion-optimized multi-step fintech workflow architecture built for low friction.",
    fullDesc: "A sleek, production-grade automated financial onboarding framework designed to process user application states natively. Focuses heavily on strict input validation handling, clean modular interface components, and instantaneous front-end responsiveness.",
    why: "Engineered to completely replace slow, legacy banking onboarding forms with a lightning-fast, high-conversion modern digital workflow.",
    liveLink: "https://lendswift-loan-form.vercel.app/",
    github: "https://github.com/Dharmatejamalla817/lendswift-loan-form",
    accent: "group-hover:border-emerald-500/50 group-hover:bg-emerald-500/5 text-emerald-400"
  },
  {
    id: "swetha-parlour",
    title: "Swetha Beauty Parlour",
    tagline: "Commercial Web Application",
    shortDesc: "Premium, responsive commercial platform optimized for seamless local client discovery and engagement.",
    fullDesc: "A complete localized business web application built with premium aesthetics, fluid typography, and clean layouts. Designed from the ground up to handle clear service presentation, local search discoverability, and clean user touchpoints.",
    why: "Created to transition traditional brick-and-mortar operations into a highly functional, beautiful digital asset that drives true customer retention.",
    liveLink: "#", // Add live link here if active
    github: "https://github.com/Dharmatejamalla817",
    accent: "group-hover:border-pink-500/50 group-hover:bg-pink-500/5 text-pink-400"
  },
  {
    id: "mimo-antenna",
    title: "1x2 MIMO Antenna System Analysis",
    tagline: "Electromagnetic Research",
    shortDesc: "High-frequency engineering validation environment analyzing key mutual coupling limits.",
    fullDesc: "A rigorous mathematical evaluation landscape parsing core electromagnetic traits. It programmatically maps out critical performance vectors including TARC, Diversity Gain, Envelope Correlation Coefficient (ECC), and Channel Capacity Loss (CCL) for a compact 1x2 array.",
    why: "Engineered to systematically analyze mutual coupling and radiation efficiency constraints in modern compact wireless devices.",
    liveLink: "#",
    github: "https://github.com/Dharmatejamalla817",
    accent: "group-hover:border-cyan-500/50 group-hover:bg-cyan-500/5 text-cyan-400"
  }
];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredBg, setHoveredBg] = useState("default");

  // Dynamic background mapping to match hover states
  const getBgGlow = () => {
    switch(hoveredBg) {
      case 'filmintel': return 'rgba(147, 51, 234, 0.04)';
      case 'lendswift': return 'rgba(16, 185, 129, 0.04)';
      case 'swetha-parlour': return 'rgba(236, 72, 153, 0.04)';
      case 'mimo-antenna': return 'rgba(6, 182, 212, 0.04)';
      default: return 'rgba(31, 41, 55, 0.02)';
    }
  };

  return (
    <div 
      className="min-h-screen bg-[#070A13] text-slate-200 font-sans antialiased selection:bg-cyan-500 selection:text-black transition-colors duration-700"
      style={{ backgroundColor: '#070A13', backgroundImage: `radial-gradient(circle at 50% 30%, ${getBgGlow()}, transparent 60%)` }}
    >
      {/* Structural HUD Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <main className="max-w-7xl mx-auto px-6 py-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* LEFT PANEL: Anchor Identity & Contact Information */}
        <div className="lg:col-span-5 lg:sticky lg:top-16 h-fit flex flex-col justify-between space-y-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-mono mb-6 uppercase tracking-widest">
              // System Online
            </div>
            
            <h1 className="text-5xl font-black tracking-tight bg-gradient-to-br from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
              Dharmateja Malla
            </h1>
            <p className="mt-3 text-lg text-slate-400 font-mono tracking-wide">
              B.Tech Engineering Graduate / Developer
            </p>
            
            <p className="mt-6 text-sm text-slate-400 leading-relaxed max-w-sm">
              Building optimized user architectures, intelligent platform integrations, and structured software blueprints with obsessively tuned interfaces.
            </p>

            {/* Anchored Contact Details */}
            <div className="mt-12 space-y-4 border-l border-slate-800 pl-4">
              <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest">Direct Communications</h3>
              <div>
                <span className="block text-[11px] font-mono text-slate-600">EMAIL</span>
                <a href="mailto:your.email@example.com" className="text-sm font-mono text-slate-300 hover:text-cyan-400 transition-colors">
                  dharmatejamalla817@gmail.com
                </a>
              </div>
              <div>
                <span className="block text-[11px] font-mono text-slate-600">LOCATION</span>
                <span className="text-sm font-mono text-slate-300">India</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Interactive Production Canvas */}
        <div className="lg:col-span-7 space-y-20">
          
          {/* Projects Track */}
          <section>
            <div className="flex items-center justify-between mb-8 border-b border-slate-900 pb-2">
              <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest">Selected Works Index</h2>
              <span className="text-xs font-mono text-slate-600">[04 Components]</span>
            </div>
            
            <div className="space-y-4">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  onMouseEnter={() => setHoveredBg(project.id)}
                  onMouseLeave={() => setHoveredBg("default")}
                  className="group relative p-6 rounded-xl border border-slate-900/60 bg-slate-950/20 backdrop-blur-sm hover:bg-slate-950/60 transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute top-0 left-0 w-1 h-0 bg-current transition-all duration-300 group-hover:h-full text-cyan-500 rounded-l-xl" />
                  
                  <div className="flex justify-between items-start pl-2">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-slate-500 tracking-wider block">
                        {project.tagline}
                      </span>
                      <h3 className="text-xl font-bold group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed pt-2">
                        {project.shortDesc}
                      </p>
                    </div>
                    <div className={`p-2 rounded-lg border border-transparent transition-all duration-300 ${project.accent}`}>
                      <span className="text-xl font-mono block transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                        ↗
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Core Core Focus Areas */}
          <section>
            <div className="flex items-center justify-between mb-8 border-b border-slate-900 pb-2">
              <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest">Technical Proficiency</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-xl border border-slate-900/60 bg-slate-950/10">
                <div className="text-xs font-mono text-cyan-400">01 / ARCHITECTURE</div>
                <h4 className="text-base font-bold mt-2 text-slate-200">Full-Stack Interface Flows</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">Developing deterministic client-side states, dynamic multi-tiered workflows, and modular UI patterns optimized for clean cross-device consistency.</p>
              </div>
              <div className="p-6 rounded-xl border border-slate-900/60 bg-slate-950/10">
                <div className="text-xs font-mono text-purple-400">02 / AUTOMATION</div>
                <h4 className="text-base font-bold mt-2 text-slate-200">AI Platform Implementations</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">Configuring fast runtime platforms with intelligence model outputs, refining structural parameters, and mapping logical data into dashboard graphs.</p>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* FULL PERSISTENT DETAILED MODAL CANVAS */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/70 backdrop-blur-md p-4 transition-all duration-300">
          <div className="w-full max-w-2xl h-full bg-[#0a0d16] border-l border-slate-900 p-8 sm:p-10 overflow-y-auto flex flex-col justify-between shadow-2xl relative">
            <div>
              <button 
                onClick={() => setActiveProject(null)}
                className="text-xs font-mono text-slate-500 hover:text-cyan-400 uppercase tracking-widest mb-10 flex items-center gap-2 group transition-colors"
              >
                <span className="transform group-hover:-translate-x-0.5 transition-transform">←</span> Return To Grid
              </button>
              
              <span className="text-xs font-mono text-cyan-400 block mb-1">{activeProject.tagline}</span>
              <h2 className="text-3xl font-black text-white tracking-tight mb-6">{activeProject.title}</h2>
              <div className="h-[1px] w-full bg-gradient-to-r from-slate-800 to-transparent mb-8" />

              <div className="space-y-8">
                <div>
                  <h4 className="text-[11px] font-mono text-slate-500 uppercase tracking-widest mb-3">Project Philosophy & Context</h4>
                  <p className="text-slate-300 bg-slate-950/40 p-4 rounded-lg border border-slate-900 text-sm leading-relaxed font-sans">
                    {activeProject.why}
                  </p>
                </div>

                <div>
                  <h4 className="text-[11px] font-mono text-slate-500 uppercase tracking-widest mb-3">System Execution Details</h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-sans">{activeProject.fullDesc}</p>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-12 border-t border-slate-900/80 flex flex-col sm:flex-row gap-4">
              {activeProject.liveLink !== "#" ? (
                <a 
                  href={activeProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-3.5 px-4 rounded-lg bg-cyan-500 text-black text-xs font-mono font-bold hover:bg-cyan-400 transition-colors tracking-wider uppercase"
                >
                  Launch Deployment ↗
                </a>
              ) : (
                <div className="flex-1 text-center py-3.5 px-4 rounded-lg bg-slate-900 text-slate-500 text-xs font-mono border border-slate-800 tracking-wider uppercase cursor-not-allowed select-none">
                  Live Preview Localized
                </div>
              )}
              <a 
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3.5 px-4 rounded-lg bg-slate-950 hover:bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-white transition-colors tracking-wider uppercase"
              >
                Code Architecture 🛠️
              </a>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER INTERFACE: Clean Credentials & Copyright Structure */}
      <footer className="w-full max-w-7xl mx-auto px-6 pt-16 pb-12 mt-20 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-xs font-mono text-slate-500">
        <div>
          <span>© {new Date().getFullYear()} Malla Dharmateja. All Rights Reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/Dharmatejamalla817" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyan-400 transition-colors flex items-center gap-1"
          >
            GitHub ↗
          </a>
          <a 
            href="https://www.linkedin.com/in/dharmateja-malla-9177212b1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyan-400 transition-colors flex items-center gap-1"
          >
            LinkedIn ↗
          </a>
        </div>
      </footer>
    </div>
  );
}
