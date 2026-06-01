'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Capabilities = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const capabilities = [
    {
      category: 'Financial Systems',
      items: [
        'Multi-Tenant Treasury Platforms',
        'Financial Ledger Engines',
        'Reconciliation Automation',
        'Payment Workflow Systems'
      ]
    },
    {
      category: 'Engineering',
      items: [
        'Scalable Backend Architecture',
        'Real-Time Data Processing',
        'Event-Driven Systems',
        'API Design & Integration'
      ]
    },
    {
      category: 'Architecture',
      items: [
        'Domain-Driven Design',
        'RBAC & Permission Systems',
        'Multi-Tenant Data Isolation',
        'Event Sourcing & CQRS'
      ]
    },
    {
      category: 'Automation',
      items: [
        'Workflow Orchestration',
        'Approval Process Design',
        'Integration Pipelines',
        'Operational Intelligence'
      ]
    }
  ];

  return (
    <section id="capabilities" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold">Capabilities</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-[#fafafa] mb-6">
                {cap.category}
              </h3>
              <ul className="space-y-3">
                {cap.items.map((item, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.1 + j * 0.05 }}
                    className="flex items-center gap-3 text-[#a1a1aa] group cursor-default"
                  >
                    <span className="text-[#d4af37] font-bold group-hover:scale-150 transition-transform">
                      →
                    </span>
                    <span className="group-hover:text-[#fafafa] transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
