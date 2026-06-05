'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, SectionBody } from '@/components/layout/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { domainGroups } from '@/lib/domains';
import { Grid3x3 } from 'lucide-react';

const accentClass = {
  gold: 'domain-card--gold',
  blue: 'domain-card--blue',
  emerald: 'domain-card--emerald',
} as const;

const Domains = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <Section id="domains">
      <div ref={ref}>
        <SectionHeader
          label="Expertise"
          title="Domains"
          description="Where I design and ship infrastructure—deep capability across three operational domains."
          icon={Grid3x3}
        />
        <SectionBody>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
            {domainGroups.map((domain, i) => {
              const Icon = domain.icon;
              return (
                <motion.div
                  key={domain.title}
                  className={`domain-card ${accentClass[domain.accent]}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.08, duration: 0.55 }}
                >
                  <div className="domain-card__head">
                    <span className={`domain-card__icon domain-card__icon--${domain.accent}`}>
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <h3 className="domain-card__title">{domain.title}</h3>
                  </div>
                  <ul className="domain-card__list">
                    {domain.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </SectionBody>
      </div>
    </Section>
  );
};

export default Domains;
