'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Lock, Zap } from 'lucide-react';

const CapabilityCategory = ({
  title,
  icon: Icon,
  items,
  delay,
}: {
  title: string;
  icon: any;
  items: string[];
  delay: number;
}) => (
  <motion.div
    className="glass rounded-xl p-8 border border-[#d4af37]/20 hover:border-[#d4af37] transition-colors"
    whileHover={{ scale: 1.02, y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center">
        <Icon size={24} className="text-[#d4af37]" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>

    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-3 text-white/80">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

export const Expertise = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const capabilities = [
    {
      title: 'Financial Infrastructure',
      icon: Lock,
      items: [
        'Treasury Systems',
        'Ledger Design',
        'Reconciliation Engines',
        'Workflow Orchestration',
      ],
    },
    {
      title: 'Engineering',
      icon: Code2,
      items: [
        'Next.js / React',
        'TypeScript',
        'Node.js',
        'PostgreSQL / Prisma',
      ],
    },
    {
      title: 'Architecture',
      icon: Database,
      items: [
        'Event-Driven Systems',
        'Role-Based Access Control',
        'Multi-Tenant Platforms',
        'Domain Modeling',
      ],
    },
    {
      title: 'Automation',
      icon: Zap,
      items: [
        'Workflow Automation',
        'API Integrations',
        'Operational Processes',
        'System Orchestration',
      ],
    },
  ];

  return (
    <section id="expertise" className="relative py-24 px-6 bg-[#0a0a0a]">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Core Capabilities
          </h2>

          <p className="text-white/65 max-w-2xl text-lg leading-relaxed">
            A unique combination of financial domain expertise, architectural thinking, and full-stack engineering capabilities.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ staggerChildren: 0.1 }}
        >
          {capabilities.map((capability, index) => (
            <CapabilityCategory
              key={index}
              {...capability}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="glass rounded-xl p-12 border border-[#d4af37]/20 bg-gradient-to-br from-[#d4af37]/5 to-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[#d4af37] font-bold mb-3 uppercase text-sm tracking-widest">
                What I Build
              </h4>
              <ul className="space-y-2 text-white/80">
                <li>• Enterprise treasury systems</li>
                <li>• Multi-tenant SaaS platforms</li>
                <li>• Financial automation workflows</li>
                <li>• Real-time analytics engines</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#d4af37] font-bold mb-3 uppercase text-sm tracking-widest">
                How I Work
              </h4>
              <ul className="space-y-2 text-white/80">
                <li>• First-principles thinking</li>
                <li>• Systems-level optimization</li>
                <li>• End-to-end ownership</li>
                <li>• Quality obsession</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#d4af37] font-bold mb-3 uppercase text-sm tracking-widest">
                Ideal For
              </h4>
              <ul className="space-y-2 text-white/80">
                <li>• Fintech founders</li>
                <li>• Treasury teams</li>
                <li>• Financial infrastructure</li>
                <li>• Operational excellence</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
