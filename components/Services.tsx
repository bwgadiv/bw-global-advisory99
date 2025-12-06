
import React from 'react';
import { Network, BarChart3, TrendingUp, Cpu, Layers, Database, Globe, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Service } from '../types';

const engines: Service[] = [
  {
    id: 'ivas',
    title: 'IVAS™ Engine',
    subtitle: 'Investment Viability Assessment',
    description: 'Calculates the "Velocity of Capital." IVAS™ models how quickly an investment can actually be deployed in a specific region, factoring in bureaucratic friction, infrastructure lag, and local partner capability.',
    icon: <BarChart3 className="h-8 w-8 text-bw-gold" />,
  },
  {
    id: 'spi',
    title: 'SPI™ Engine',
    subtitle: 'Strategic Partnership Index',
    description: 'Measures "Symbiotic Fit." SPI™ moves beyond basic due diligence to analyze operational compatibility. It assigns a probability score to a partnership\'s long-term survival based on historical cultural and operational data.',
    icon: <Network className="h-8 w-8 text-bw-gold" />,
  },
  {
    id: 'scf',
    title: 'SCF™ Engine',
    subtitle: 'Strategic Cash Flow',
    description: 'Projects the "Knock-On Effect." SCF™ is a non-linear financial model that simulates second and third-order economic impacts, showing how a single investment creates ripples across the regional ecosystem.',
    icon: <TrendingUp className="h-8 w-8 text-bw-gold" />,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="nexus-core" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 0 L100 100 M100 0 L0 100" stroke="black" strokeWidth="0.5" />
          </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-bw-navy mb-6">
            An Engine, Not an Opinion.
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The BWGA system is not just a data tool; it's a <strong>circuit breaker</strong> for the inefficient feedback loop that traps global capital in the same 10% of saturated markets. It operates on the premise that the answers to today's economic challenges are buried in the successes and failures of the last century.
          </p>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            By reverse-engineering a century of economic history, we built a system that replaces subjective advice with mathematical proof. It deploys a swarm of specialized AI agents to analyze historical patterns, calculate the probability of a partnership's survival (SPI™), and model the true velocity of capital (IVAS™), turning ambiguity into a calculated advantage.
          </p>
        </div>

        {/* The Engines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {engines.map((engine) => (
            <div key={engine.id} className="group p-8 border border-gray-200 bg-white hover:border-bw-gold transition-all duration-500 rounded-sm relative shadow-sm hover:shadow-2xl">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                {React.cloneElement(engine.icon as React.ReactElement<{ className?: string }>, { className: 'h-40 w-40 text-bw-navy' })}
              </div>
              
              <div className="mb-8 p-4 bg-bw-light rounded-sm w-fit group-hover:bg-bw-navy transition-colors duration-300">
                {React.cloneElement(engine.icon as React.ReactElement<{ className?: string }>, { className: 'h-8 w-8 text-bw-navy group-hover:text-bw-gold transition-colors duration-300' })}
              </div>
              
              <div className="relative z-10">
                <h4 className="text-2xl font-serif font-bold text-bw-navy mb-2">{engine.title}</h4>
                <p className="text-xs font-bold text-bw-gold uppercase tracking-widest mb-6">{engine.subtitle}</p>
                <p className="text-gray-600 leading-relaxed text-sm border-l-2 border-gray-100 pl-4 group-hover:border-bw-gold transition-colors duration-300">
                  {engine.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Full Stack Context & Case Study */}
        <div className="bg-stone-900 text-white rounded-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-bw-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            {/* Top Half: The Stack */}
            <div className="relative z-10 grid md:grid-cols-12 gap-12 items-center p-12 border-b border-white/10">
                <div className="md:col-span-7">
                    <div className="flex items-center gap-3 mb-4">
                        <Layers className="w-5 h-5 text-bw-gold" />
                        <h3 className="text-bw-gold font-bold uppercase tracking-widest text-xs">The Full Stack</h3>
                    </div>
                    <h4 className="text-3xl font-serif font-bold mb-6 leading-tight">
                        BWGA Nexus AI <br/>Regional Report Generator.
                    </h4>
                    <p className="text-gray-400 leading-relaxed text-lg mb-6">
                        This is a proprietary intelligence system designed to give companies and governments an unbiased, data-driven assessment of cities, regions, and countries before major decisions are made.
                    </p>
                    <p className="text-gray-400 leading-relaxed text-sm border-l-2 border-white/10 pl-4">
                        The platform translates complex regional data into clear, actionable reports. It highlights opportunities, risks, and comparative advantages, turning raw information into a calculated competitive edge for those willing to look beyond the standard hubs.
                    </p>
                </div>
                
                <div className="md:col-span-5 grid gap-4">
                    <div className="bg-white/5 p-6 rounded border border-white/10 hover:bg-white/10 transition-colors">
                        <Database className="w-8 h-8 text-bw-gold mb-3" />
                        <div className="text-xl font-bold">Validated Against History</div>
                        <p className="text-xs text-gray-500 mt-1">
                            Every engine is validated against a century of economic precedent to prove its ability to identify the root causes of failure.
                        </p>
                    </div>
                    <div className="bg-white/5 p-6 rounded border border-white/10 hover:bg-white/10 transition-colors">
                        <Globe className="w-8 h-8 text-blue-400 mb-3" />
                        <div className="text-xl font-bold">Inference Engine for Data Voids</div>
                        <p className="text-xs text-gray-500 mt-1">
                            Where data is missing, the system infers economic structure from analogous markets, filling the information void.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Half: The Case Study */}
            <div className="relative z-10 p-12 bg-black/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-green-900/30 border border-green-800 text-green-400 text-[10px] font-bold uppercase tracking-wider">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            Live System Output
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-white mb-4">
                            De-Risking Infrastructure Deployment in Emerging Markets.
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-8 text-sm">
                            Consider a $500M energy project in Southeast Asia. Standard due diligence reviews financials and legal frameworks. The Nexus System goes deeper, identifying the exact point of friction and the precise partner to unlock it.
                        </p>
                        
                        <div className="space-y-6">
                            {/* Step 1 */}
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-bw-gold font-bold text-sm shrink-0 border border-white/10">1</div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">Historical Pattern Recognition</h4>
                                    <p className="text-xs text-gray-500 mt-1">The system identifies that 83% of similar energy projects in this specific province faced delays due to land-use permit bottlenecks, despite full central government approval.</p>
                                </div>
                            </div>
                            
                            {/* Step 2 */}
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-bw-gold font-bold text-sm shrink-0 border border-white/10">2</div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">Regulatory Friction Calculation</h4>
                                    <p className="text-xs text-gray-500 mt-1">It calculates a high "Regulatory Friction" score of 88/100, predicting a 14-month operational delay if entering via a standard foreign wholly-owned subsidiary model.</p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-bw-gold font-bold text-sm shrink-0 border border-white/10">3</div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">Symbiotic Matchmaking</h4>
                                    <p className="text-xs text-gray-500 mt-1">The system scans local entities and identifies a mid-sized agri-firm that already holds the specific land-use permits required, but lacks the capital to develop them.</p>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-bw-gold font-bold text-sm shrink-0 border border-white/10">4</div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">The Executable Strategy</h4>
                                    <p className="text-xs text-gray-500 mt-1">Recommendation: Structure a Joint Venture. Partner contributes permitted land; you contribute technology. Friction drops by 60%, speed-to-market improves by 12 months.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative group sticky top-8">
                        <div className="absolute -inset-2 bg-bw-gold/20 rounded-lg blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <div className="relative rounded-lg overflow-hidden border border-white/10 bg-black h-[500px]">
                            <img 
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80" 
                                alt="Nexus Interface" 
                                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Cpu className="w-4 h-4 text-bw-gold" />
                                        <span className="text-[10px] font-bold text-bw-gold uppercase tracking-wider">System Recommendation</span>
                                    </div>
                                    <div className="text-xl font-bold text-white mb-1">Joint Venture Structure</div>
                                    <div className="text-xs text-gray-400">Calculated as optimal entry vehicle.</div>
                                    
                                    <div className="mt-4 flex gap-2">
                                        <div className="flex-1 bg-white/10 rounded p-2 backdrop-blur-md border border-white/10">
                                            <div className="text-[10px] text-gray-400">Mode</div>
                                            <div className="text-lg font-bold text-white">Symbiotic</div>
                                        </div>
                                        <div className="flex-1 bg-white/10 rounded p-2 backdrop-blur-md border border-white/10">
                                            <div className="text-[10px] text-gray-400">Friction</div>
                                            <div className="text-lg font-bold text-green-400">Low</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};
