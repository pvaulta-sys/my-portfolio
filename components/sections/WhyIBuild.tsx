'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, SectionBody } from '@/components/layout/Section';

const themes = [
  {
    title: 'Trust',
    description:
      'Every system I build starts with a single question: can the operator trust it? Trust is not a feature added after the fact — it is built into the foundation through audit trails, ledger integrity, and clear ownership models. A system that cannot be trusted has no place in production.',
  },
  {
    title: 'Visibility',
    description:
      'Operations run on information. When money moves, goods move, or risk is assessed, every party needs access to the same accurate picture. I build for clarity — interfaces that surface the right information at the right time, enabling informed decisions.',
  },
  {
    title: 'Operational Excellence',
    description:
      'Good infrastructure is invisible. It absorbs complexity and presents simplicity to the operator. I design for reliability and clarity — where every interaction respects the operator&#39;s time and every component contributes to a system that can be run with confidence.',
  },
];

export default function WhyIBuild() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <Section id="why-i-build" variant="surface">
      <div ref={ref}>
        <div className="max-w-3xl">
          <span className="section-label mb-6 inline-flex">Philosophy</span>
          <h2 className="section-header__title mb-6">Why I Build</h2>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base md:text-lg text-[#a1a1aa] leading-relaxed mb-12 max-w-2xl">
              Operations are the core of every organization. Behind every financial transaction,
              every shipment delivered, every security assessment — there is infrastructure that
              either enables effective work or creates friction. I build the infrastructure that
              enables organizations to operate with clarity and confidence.
            </p>
          </motion.div>
        </div>

        <SectionBody>
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {themes.map((theme, i) => (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5 }}
              >
                <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.15em] block mb-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-[1.1rem] font-bold text-[#fafafa] mb-3">{theme.title}</h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">{theme.description}</p>
              </motion.div>
            ))}
          </div>
        </SectionBody>
      </div>
    </Section>
  );
}
