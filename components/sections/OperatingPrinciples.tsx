'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, SectionBody } from '@/components/layout/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { IconBox } from '@/components/ui/IconBox';
import { Scale, Shield, Cog, TrendingUp, Sparkles } from 'lucide-react';

const icons = [Shield, Cog, TrendingUp, Sparkles] as const;

const principles = [
  {
    title: 'Trust by design',
    desc: 'Auditability and transparency are engineered into every layer—not bolted on later.',
  },
  {
    title: 'Systems thinking',
    desc: 'Finance, logistics, and security are connected operational domains—not isolated tools.',
  },
  {
    title: 'Built to scale',
    desc: 'Architecture that holds under real operational load, multi-tenant growth, and compliance.',
  },
  {
    title: 'Operator mindset',
    desc: 'I build for the people running the business: founders, operators, analysts, and teams on the ground.',
  },
];

const OperatingPrinciples = () => {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <Section id="principles">
      <div ref={ref}>
        <SectionHeader
          label="Foundation"
          title="Operating principles"
          description="How I build—as an architect, operator, and founder."
          icon={Scale}
        />
        <SectionBody>
          <div className="grid-cards grid-cards--2">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                className="card-elevated rounded-xl p-8 lg:p-10"
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05 }}
              >
                <IconBox icon={icons[i]} size="md" className="mb-5" />
                <h3 className="text-lg font-bold text-[#fafafa] mb-2">{p.title}</h3>
                <p className="text-[0.9375rem] text-[#a1a1aa] leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </SectionBody>
      </div>
    </Section>
  );
};

export default OperatingPrinciples;
