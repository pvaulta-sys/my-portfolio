'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen } from 'lucide-react';
import { Section, SectionBody } from '@/components/layout/Section';
import { SectionHeader } from '@/components/SectionHeader';

const stages = [
  {
    year: '2018',
    title: 'Learning Software',
    desc: 'Engineering foundations and systems thinking. Building the technical discipline that underpins every product decision.',
    details: [
      'Software engineering fundamentals',
      'Systems design and architecture',
      'Foundational programming discipline',
    ],
  },
  {
    year: '2021',
    title: 'Building Systems',
    desc: 'Architecture for complex operational problems. Designing systems that manage real-world workflows and data at scale.',
    details: [
      'Complex operational system design',
      'Financial and logistics software',
      'Infrastructure-first development',
    ],
  },
  {
    year: '2024',
    title: 'Operational Domains',
    desc: 'Finance, logistics, and security at scale. Deep domain expertise across the operational core of organizations.',
    details: [
      'Treasury and financial infrastructure',
      'Logistics and tracking platforms',
      'Security tooling and automation',
    ],
  },
  {
    year: '2026',
    title: 'Infrastructure Products',
    desc: 'Vaulta, logistics platforms, and AEGIS in active development. Product-focused infrastructure built for real operations.',
    details: [
      'Vaulta — treasury operating system',
      'Courier — logistics platform',
      'AEGIS — security operations',
    ],
    active: true,
  },
  {
    year: 'Next',
    title: 'Portfolio of Infrastructure',
    desc: 'Expanding serious products across domains. Building a portfolio of infrastructure that organizations depend on.',
    details: [
      'Deeper financial infrastructure',
      'Expanded logistics capabilities',
      'New operational domains',
    ],
    future: true,
  },
];

export default function Journey() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <Section id="journey" variant="surface">
      <div ref={ref}>
        <SectionHeader
          label="Timeline"
          title="Founder Journey"
          description="Learning software. Building systems. Creating infrastructure products."
        />
        <SectionBody>
          <ol className="journey-list">
            {stages.map((stage, i) => (
              <motion.li
                key={stage.year}
                className={`journey-list__item ${stage.active ? 'journey-list__item--active' : ''} ${stage.future ? 'journey-list__item--future' : ''}`}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.07 }}
              >
                <span className="journey-list__year">{stage.year}</span>
                <div className="journey-list__content">
                  <h3 className="journey-list__title">{stage.title}</h3>
                  <p className="journey-list__desc">{stage.desc}</p>
                  <ul className="journey-list__details">
                    {stage.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </SectionBody>

        <div className="page-container mt-10 md:mt-12">
          <div className="max-w-[32rem]">
            <div className="flex items-start gap-4 p-5 md:p-6 rounded-xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.012)]">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0 text-[#a1a1aa]/60 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)]">
                <BookOpen size={17} />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#a1a1aa]/50 uppercase tracking-wider mb-1.5">
                  Education
                </p>
                <p className="text-sm font-medium text-[#fafafa]/80 mb-1">
                  National Institute of Information Technology (NIIT)
                </p>
                <p className="text-xs text-[#a1a1aa]/60 leading-relaxed">
                  Built technical foundations in software development, systems thinking, and
                  engineering disciplines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
