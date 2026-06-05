'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, SectionBody } from '@/components/layout/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { Route } from 'lucide-react';

const stages = [
  {
    year: '2018',
    title: 'Learning software',
    desc: 'Engineering foundations and systems thinking',
    details: ['Built first production systems', 'Learned distributed systems architecture', 'Developed engineering fundamentals'],
  },
  {
    year: '2021',
    title: 'Building systems',
    desc: 'Architecture for complex operational problems',
    details: ['Designed multi-tenant platforms', 'Worked across finance and logistics domains', 'Scaled systems for production'],
  },
  {
    year: '2024',
    title: 'Operational domains',
    desc: 'Finance, logistics, and security at scale',
    details: ['Deep domain expertise across 3 verticals', 'Founded infrastructure products', 'Built for regulatory environments'],
  },
  {
    year: '2026',
    title: 'Infrastructure products',
    desc: 'Vaulta, logistics platforms, and AEGIS in active development',
    active: true,
    details: ['Vaulta treasury system in beta', 'Courier tracking platform in development', 'AEGIS security operations launched'],
  },
  {
    year: 'Next',
    title: 'Portfolio of infrastructure',
    desc: 'Expanding serious products across domains',
    future: true,
    details: ['Multi-product infrastructure company', 'Global operations across EMEA and APAC', 'Platform ecosystem growth'],
  },
];

const Journey = () => {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <Section id="journey" variant="surface">
      <div ref={ref}>
        <SectionHeader
          label="Timeline"
          title="Founder journey"
          description="From builder to founder of multi-domain infrastructure."
          icon={Route}
        />
        <SectionBody narrow>
          <ol className="journey-list">
            {stages.map((stage, i) => (
              <motion.li
                key={stage.year}
                className={`journey-list__item ${stage.active ? 'journey-list__item--active' : ''} ${stage.future ? 'journey-list__item--future' : ''}`}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.06 }}
              >
                <span className="journey-list__year">{stage.year}</span>
                <div className="journey-list__content">
                  <h3 className="journey-list__title">{stage.title}</h3>
                  <p className="journey-list__desc">{stage.desc}</p>
                  {stage.details && (
                    <ul className="mt-3 space-y-1.5">
                      {stage.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-xs text-[#a1a1aa]">
                          <span className="w-1 h-1 rounded-full bg-[#d4af37]/60 shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.li>
            ))}
          </ol>
        </SectionBody>
      </div>
    </Section>
  );
};

export default Journey;
