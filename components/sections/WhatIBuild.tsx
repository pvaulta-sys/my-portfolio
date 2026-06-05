'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, SectionBody } from '@/components/layout/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { Landmark, Truck, Shield } from 'lucide-react';

const accentMap: Record<string, string> = {
  gold: 'border-[rgba(212,175,55,0.2)] bg-[rgba(212,175,55,0.04)]',
  blue: 'border-[rgba(96,165,250,0.2)] bg-[rgba(96,165,250,0.04)]',
  emerald: 'border-[rgba(52,211,153,0.2)] bg-[rgba(52,211,153,0.04)]',
};

const iconAccentMap: Record<string, string> = {
  gold: 'text-[#d4af37] bg-[rgba(212,175,55,0.1)] border-[rgba(212,175,55,0.2)]',
  blue: 'text-[#60a5fa] bg-[rgba(96,165,250,0.1)] border-[rgba(96,165,250,0.2)]',
  emerald: 'text-[#34d399] bg-[rgba(52,211,153,0.1)] border-[rgba(52,211,153,0.2)]',
};

const pillars = [
  {
    title: 'Financial Infrastructure',
    icon: Landmark,
    accent: 'gold',
    description:
      'Building systems that improve trust, visibility, and operational control in financial operations — treasury workflows, approval chains, ledger integrity, and reconciliation.',
  },
  {
    title: 'Operational Platforms',
    icon: Truck,
    accent: 'blue',
    description:
      'Creating software that manages real-world business operations — shipment tracking, delivery workflows, route visibility, and operational dashboards for logistics teams.',
  },
  {
    title: 'Security Systems',
    icon: Shield,
    accent: 'emerald',
    description:
      'Designing tools that improve resilience, visibility, and operational awareness for security professionals — combining dashboard clarity with terminal-speed workflows.',
  },
];

export default function WhatIBuild() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <Section id="what-i-build">
      <div ref={ref}>
        <SectionHeader
          label="Products"
          title="What I Build"
          description="Infrastructure products across three operational domains."
        />
        <SectionBody>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  className={`rounded-xl p-6 md:p-8 border ${accentMap[pillar.accent]}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${iconAccentMap[pillar.accent]}`}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-[#fafafa] mb-3">{pillar.title}</h3>
                  <p className="text-sm text-[#a1a1aa] leading-relaxed">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </SectionBody>
      </div>
    </Section>
  );
}
