
import React from 'react';
import { Cpu, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="identity" className="py-24 bg-stone-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="mb-16">
            <h2 className="text-bw-gold font-bold uppercase tracking-widest text-xs mb-3">System Identity</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-bw-navy leading-tight">
              The Interface Between <br/>Global Capital and Regional Reality.
            </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Who We Are */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-bw-navy text-white text-xs font-bold uppercase tracking-widest rounded-sm">
                <ShieldCheck size={14} /> Who We Are
            </div>
            <h4 className="text-2xl font-bold text-bw-navy">From Discovery to Systemization.</h4>
            <p className="text-gray-600 text-lg leading-relaxed">
              My name is <strong>Brayden Walls</strong>. During my time establishing operations in Pagadian City, Mindanao, I realized a critical truth: if a high-potential city like this faces such a massive information gap, then thousands of other regional places must be facing the exact same barrier.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I developed this cost-effective system to solve that universal problem. It is designed to help international companies and investors better understand these overlooked places, bridging the gap between government and business to create opportunities that improve efficiency and lower operating costs.
            </p>
            <p className="text-gray-600 leading-relaxed font-medium">
              Ultimately, this system exists to give regional cities a fair chance to compete for capital and prove their actual economic worth.
            </p>
          </div>

          {/* Operational Philosophy (Replaced the moved text) */}
          <div className="space-y-6">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-bw-gold text-bw-navy text-xs font-bold uppercase tracking-widest rounded-sm">
                <Cpu size={14} /> The Operational Philosophy
            </div>
            <h4 className="text-2xl font-bold text-bw-navy">Deterministic Intelligence.</h4>
            <p className="text-gray-600 text-lg leading-relaxed">
              We operate where standard data providers go blind: the regional cities, the developing zones, and the non-standard jurisdictions where human relationships—not just spreadsheets—dictate economic outcomes.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This is not a consultancy that sells subjective advice. This is an <strong>Intelligence Operating System</strong>. It ingests your strategic intent and stress-tests it against a century of economic precedent, replacing "expert opinion" with calculated probability.
            </p>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 pt-12">
            <div>
                <div className="text-3xl font-bold text-bw-navy">19</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Proprietary AI Cores</div>
            </div>
            <div>
                <div className="text-3xl font-bold text-bw-navy">100y</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Economic Cycles Indexed</div>
            </div>
            <div>
                <div className="text-3xl font-bold text-bw-navy">9+</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Autonomous Agent Nodes</div>
            </div>
            <div>
                <div className="text-3xl font-bold text-bw-navy">3</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Proprietary Math Engines</div>
            </div>
        </div>

      </div>
    </section>
  );
};
