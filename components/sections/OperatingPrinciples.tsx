'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, SectionBody } from '@/components/layout/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { Shield, Cog, Layers, Feather } from 'lucide-react';

const principles = [
  {
    title: 'Build For Trust',
    icon: Shield,
    description:
      'Every system must earn the confidence of its operators. I design for auditability, integrity, and clear ownership — so teams can rely on the infrastructure, not work around it.',
  },
  {
    title: 'Think In Systems',
    icon: Cog,
    description:
      'Isolation thinking creates fragile products. Every component exists within a broader operational context. I design for the whole — where decisions in one layer strengthen the others.',
  },
  {
    title: 'Design For Scale',
    icon: Layers,
    description:
      'Scale is not just about load. It is about complexity, team size, and operational surface area. I build architectures that remain clear and reliable as they grow across every dimension.',
  },
  {
    title: 'Commit to Simplicity',
    icon: Feather,
    description:
      'Simplicity is a design discipline. A simple system is easier to audit, easier to operate, and easier to improve over time. I invest in simplicity at every layer of the stack, because complexity is the source of most operational failures.',
  },
];

export default function OperatingPrinciples() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <Section id="principles">
      <div ref={ref}>
        <SectionHeader
          label="Principles"
          title="Operating Principles"
          description="The ideas that guide every product decision."
        />
        <SectionBody>
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  className="card-elevated rounded-xl p-6 md:p-8"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="icon-box w-11 h-11 rounded-xl flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-[1.05rem] font-bold text-[#fafafa]">{p.title}</h3>
                  </div>
                  <p className="text-sm text-[#a1a1aa] leading-relaxed">{p.description}</p>
                </motion.div>
              );
            })}
          </div>
        </SectionBody>
      </div>
    </Section>
  );
}
