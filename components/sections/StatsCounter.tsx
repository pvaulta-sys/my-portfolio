'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section } from '@/components/layout/Section';

const stats = [
  { value: '3', label: 'Domains', desc: 'Finance, logistics, security' },
  { value: '3', label: 'Active products', desc: 'Vaulta, Courier, AEGIS' },
  { value: '5+', label: 'Years building', desc: 'Systems & infrastructure' },
  { value: 'Multi', label: 'Entity support', desc: 'Organizations of any scale' },
];

export default function StatsCounter() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <Section>
      <div ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.06)]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-[#0d0d0d] p-8 lg:p-10 text-center"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
            >
              <p className="text-3xl lg:text-4xl font-bold text-[#d4af37] mb-1">{stat.value}</p>
              <p className="text-sm font-semibold text-[#fafafa]">{stat.label}</p>
              <p className="text-xs text-[#a1a1aa] mt-1">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
