'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, SectionBody } from '@/components/layout/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { PenLine } from 'lucide-react';

const FounderLetter = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <Section id="letter" variant="surface">
      <div ref={ref}>
        <SectionHeader
          label="Founder"
          title="How I think about building"
          icon={PenLine}
        />
        <SectionBody narrow>
          <motion.div
            className="card-premium rounded-xl p-6 sm:p-8 lg:p-10 space-y-5"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <p className="text-[#a1a1aa] leading-relaxed text-[1.0625rem]">
              I am not building websites—I am building infrastructure. Products that sit at the
              operational core of how organizations move money, move goods, and manage security.
            </p>
            <p className="text-[#a1a1aa] leading-relaxed">
              As a founder, software developer, financial analyst, and systems builder, I work at
              the intersection of{' '}
              <strong className="text-[#fafafa] font-medium">
                architecture, operations, and trust
              </strong>
              . Every product—Vaulta, logistics platforms, security tooling—is designed to improve
              visibility, control, and efficiency at scale.
            </p>
            <p className="text-[#a1a1aa] leading-relaxed">
              I think in systems: interconnected layers where decisions compound. That is how you
              build software that feels like a company, not a side project.
            </p>
          </motion.div>
          <p className="text-sm text-[#a1a1aa]">
            <span className="text-[#fafafa] font-semibold">Ogunleye Amos Ayodeji</span>
            <span className="text-[#d4af37]"> · Founder & Systems Builder</span>
          </p>
        </SectionBody>
      </div>
    </Section>
  );
};

export default FounderLetter;
