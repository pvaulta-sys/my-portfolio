'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const VaultaShowcase = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const capabilities = [
    { icon: '📔', title: 'Ledger Integrity', desc: 'Double-entry bookkeeping with real-time settlement' },
    { icon: '✅', title: 'Approval Workflows', desc: 'Configurable chains with role-based access control' },
    { icon: '📋', title: 'Audit Trails', desc: 'Immutable logs of every transaction and change' },
    { icon: '🔄', title: 'Real-Time Reconciliation', desc: 'Automated reconciliation with exception management' },
    { icon: '👁️', title: 'Operational Visibility', desc: 'Dashboard and reporting for complete transparency' },
    { icon: '🔗', title: 'Integration Ready', desc: 'REST APIs, webhooks, and SDKs for ecosystem connectivity' }
  ];

  return (
    <section id="vaulta" className="relative bg-[#0d0d0d]" ref={ref}>
      <div className="section-container">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
        >
          <span className="text-xs tracking-widest text-[#a1a1aa] font-medium uppercase">
            Product
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#fafafa] mt-6 mb-4">
            Vaulta
          </h2>
          <p className="text-2xl text-[#a1a1aa] font-light">
            Enterprise Treasury Operating System
          </p>
        </motion.div>

        {/* Problem - Solution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-3xl font-bold text-[#fafafa] mb-6">The Problem</h3>
            <p className="text-lg text-[#a1a1aa] leading-relaxed mb-6">
              Current treasury systems are fragmented. Organizations use multiple tools—ledgers, payment platforms,
              approval systems, reconciliation software—that don't talk to each other.
            </p>
            <p className="text-lg text-[#a1a1aa] leading-relaxed">
              The result: manual processes, visibility gaps, audit risks, and operational bottlenecks that compound at scale.
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-3xl font-bold text-[#fafafa] mb-6">The Solution</h3>
            <p className="text-lg text-[#a1a1aa] leading-relaxed mb-6">
              Vaulta centralizes operational finance. A single system where treasury teams manage ledgers, approvals,
              reconciliation, and reporting—with complete auditability at every step.
            </p>
            <p className="text-lg text-[#a1a1aa] leading-relaxed">
              Built for enterprises that refuse to compromise on trust, transparency, and control.
            </p>
          </motion.div>
        </div>

        {/* Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-[#fafafa] mb-10">Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.06 }}
                className="card-elevated rounded-2xl p-8 group hover:border-[#d4af37] transition-all h-full flex flex-col"
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="text-4xl mb-6 group-hover:scale-110 transition-transform"
                  whileHover={{ scale: 1.15 }}
                >
                  {cap.icon}
                </motion.div>
                <h4 className="text-lg font-bold text-[#fafafa] mb-3 flex-grow leading-snug">{cap.title}</h4>
                <p className="text-sm text-[#a1a1aa] leading-relaxed mb-4">{cap.desc}</p>
                <div className="border-t border-[rgba(212,175,55,0.1)] group-hover:border-[rgba(212,175,55,0.2)] pt-4 transition-colors">
                  <div className="h-0.5 w-8 bg-gradient-to-r from-[#d4af37] to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="card-elevated rounded-2xl p-12 border-[#d4af37]/30 bg-gradient-to-br from-[rgba(212,175,55,0.05)] to-transparent"
        >
          <div className="max-w-3xl">
            <h3 className="text-3xl font-bold text-[#d4af37] mb-6">The Vision</h3>
            <p className="text-xl text-[#a1a1aa] leading-relaxed mb-6">
              Treasury infrastructure for modern organizations. A platform so reliable, transparent, and intuitive
              that it becomes the operating system for financial operations at scale.
            </p>
            <p className="text-lg text-[#a1a1aa] leading-relaxed">
              Not just another tool. A complete system that enables trust, visibility, and control. This is what
              financial infrastructure should look like in 2026 and beyond.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VaultaShowcase;


