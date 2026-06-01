'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { useInView } from 'react-intersection-observer';

export default function Building() {
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.2, triggerOnce: true });

  const areasOfInterest = [
    'Financial Infrastructure',
    'Treasury Operations',
    'Operational Intelligence',
    'Workflow Automation',
    'Enterprise Systems'
  ];

  const futureExploration = [
    'Treasury Intelligence',
    'Financial Automation',
    'Infrastructure Platforms',
    'Global Payment Systems'
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#fafafa]">
      <Navigation />
      <main className="pt-32">
        {/* Hero */}
        <section className="relative">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs tracking-widest text-[#a1a1aa] font-medium uppercase">
                Building
              </span>
              <h1 className="text-6xl lg:text-7xl font-bold text-[#fafafa] mt-8 leading-tight mb-8">
                What I'm Building
              </h1>
              <p className="text-2xl text-[#a1a1aa] max-w-3xl leading-relaxed">
                A deep look at the project, the focus areas, and the vision for the future.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Current Project */}
        <section className="relative" ref={ref1}>
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="text-xs tracking-widest text-[#a1a1aa] font-medium uppercase">
                Primary Focus
              </span>
              <h2 className="text-5xl font-bold text-[#fafafa] mt-6 mb-8">Vaulta</h2>
              
              <div className="space-y-6">
                <p className="text-xl text-[#a1a1aa] leading-relaxed">
                  A modern treasury operating system designed for organizations that take financial operations seriously.
                </p>

                <div className="card-elevated rounded-2xl p-12">
                  <h3 className="text-2xl font-bold text-[#d4af37] mb-6">Core Capabilities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      'Multi-Tenant Architecture',
                      'Financial Ledger Integrity',
                      'Approval Workflows',
                      'Audit Trails & Compliance',
                      'Real-Time Reconciliation',
                      'Operational Visibility'
                    ].map((capability, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView1 ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-4"
                      >
                        <span className="text-[#d4af37] text-2xl mt-1">→</span>
                        <span className="text-lg text-[#fafafa]">{capability}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Areas of Interest */}
        <section className="relative bg-[#0d0d0d]" ref={ref2}>
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs tracking-widest text-[#a1a1aa] font-medium uppercase">
                Focus Areas
              </span>
              <h2 className="text-5xl font-bold text-[#fafafa] mt-6 mb-12">Where I'm Focused</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {areasOfInterest.map((area, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView2 ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.08 }}
                    className="card-elevated rounded-2xl p-8 hover:border-[#d4af37] transition-all group"
                    whileHover={{ y: -4 }}
                  >
                    <h3 className="text-lg font-bold text-[#fafafa] group-hover:text-[#d4af37] transition-colors leading-snug">
                      {area}
                    </h3>
                    <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#d4af37] to-transparent group-hover:w-12 transition-all" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Future Exploration */}
        <section className="relative" ref={ref3}>
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs tracking-widest text-[#a1a1aa] font-medium uppercase">
                Looking Ahead
              </span>
              <h2 className="text-5xl font-bold text-[#fafafa] mt-6 mb-12">Future Exploration</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {futureExploration.map((area, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView3 ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.08 }}
                    className="card-glass rounded-2xl p-8 border border-[#d4af37]/20 hover:border-[#d4af37] transition-all group"
                    whileHover={{ y: -4 }}
                  >
                    <h3 className="text-lg font-bold text-[#a1a1aa] group-hover:text-[#d4af37] transition-colors leading-snug">
                      {area}
                    </h3>
                    <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#d4af37]/50 to-transparent group-hover:w-12 transition-all" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative border-t border-[rgba(255,255,255,0.05)]">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl text-center mx-auto"
            >
              <p className="text-2xl text-[#a1a1aa] mb-10">
                Interested in Vaulta or want to discuss financial infrastructure?
              </p>
              <motion.a
                href="#contact"
                className="inline-block px-8 py-4 bg-[#d4af37] text-[#050505] font-semibold rounded-lg hover:bg-[#e5c76b] transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
