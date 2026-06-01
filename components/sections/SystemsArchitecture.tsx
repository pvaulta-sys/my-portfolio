'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Zap,
  Shield,
  Eye,
  Cog,
  Network,
  Clock,
  Layers,
  CheckCircle,
} from 'lucide-react';

const SystemCard = ({ icon: Icon, title, description, delay }: any) => (
  <motion.div
    className="glass rounded-xl p-6 border border-[#d4af37]/20 hover:border-[#d4af37] transition-colors group"
    whileHover={{ scale: 1.05, y: -10 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
  >
    <div className="mb-4">
      <div className="w-14 h-14 rounded-lg bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-colors">
        <Icon size={28} className="text-[#d4af37]" />
      </div>
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-white/65 leading-relaxed">{description}</p>
  </motion.div>
);

export const SystemsArchitecture = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const systems = [
    {
      icon: Shield,
      title: 'Financial Integrity',
      description: 'Double-entry bookkeeping enforces balance and prevents data corruption.',
    },
    {
      icon: Zap,
      title: 'Event-Driven Architecture',
      description: 'Real-time event processing ensures instant updates across all systems.',
    },
    {
      icon: Eye,
      title: 'Operational Visibility',
      description: 'Complete transparency through dashboards, reports, and audit trails.',
    },
    {
      icon: Cog,
      title: 'Automation',
      description: 'Workflow automation reduces manual processes and human error.',
    },
    {
      icon: Network,
      title: 'Treasury Workflows',
      description: 'Configurable approval chains and settlement workflows for any operation.',
    },
    {
      icon: Clock,
      title: 'Auditability',
      description: 'Immutable logs track every action, enabling compliance and forensics.',
    },
    {
      icon: Layers,
      title: 'Scalability',
      description: 'Multi-tenant architecture scales from startup to enterprise.',
    },
    {
      icon: CheckCircle,
      title: 'Reliability',
      description: '99.9% uptime SLA with redundancy, monitoring, and disaster recovery.',
    },
  ];

  return (
    <section id="systems" className="relative py-24 px-6 bg-[#050505]">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
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
            How I Think About Systems
          </h2>

          <p className="text-white/65 max-w-2xl text-lg leading-relaxed">
            Building financial infrastructure requires thinking about systems holistically—from data integrity to user workflows to operational compliance.
          </p>
        </motion.div>

        {/* Systems Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ staggerChildren: 0.1 }}
        >
          {systems.map((system, index) => (
            <SystemCard key={index} {...system} delay={index * 0.05} />
          ))}
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          className="mt-20 grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">The Architecture Approach</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1 bg-gradient-to-b from-[#d4af37] to-transparent flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">User-Centric Design</h4>
                  <p className="text-white/65">
                    Systems must be intuitive. Complex operations should feel simple.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-gradient-to-b from-[#d4af37] to-transparent flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Data Integrity First</h4>
                  <p className="text-white/65">
                    Financial systems fail catastrophically. Every design decision prioritizes safety.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-gradient-to-b from-[#d4af37] to-transparent flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Compliance Built-In</h4>
                  <p className="text-white/65">
                    Audit trails, role-based access, and approval workflows are core, not afterthoughts.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-gradient-to-b from-[#d4af37] to-transparent flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Operational Excellence</h4>
                  <p className="text-white/65">
                    Automation reduces friction. Visibility enables better decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="glass rounded-xl p-12 border border-[#d4af37]/20 bg-gradient-to-br from-[#d4af37]/5 to-transparent"
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center">
              <p className="text-2xl font-bold mb-4 text-[#d4af37]">First Principles</p>
              <p className="text-white/80 leading-relaxed mb-6">
                I don't build generic platforms. Every system is designed for a specific operational context, with careful attention to financial integrity, compliance, and user experience.
              </p>
              <div className="text-sm text-white/50 space-y-2">
                <p>Financial systems require precision.</p>
                <p>Excellence is built in, not added later.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SystemsArchitecture;
