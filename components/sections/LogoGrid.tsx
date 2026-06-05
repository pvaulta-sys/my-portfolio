'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, SectionBody } from '@/components/layout/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { Share2 } from 'lucide-react';

const collaborators = [
  { name: 'Finance teams', desc: 'Treasury & operations' },
  { name: 'Logistics ops', desc: 'Delivery & tracking' },
  { name: 'Security teams', desc: 'Ethical hackers & ops' },
  { name: 'Developer tools', desc: 'API-first platforms' },
];

export default function LogoGrid() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <Section id="collaborators" variant="surface">
      <div ref={ref}>
        <SectionHeader
          label="Collaborators"
          title="Built for teams that run operations"
          description="Products designed for the people managing financial, logistics, and security operations every day."
          icon={Share2}
        />
        <SectionBody>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {collaborators.map((c, i) => (
              <motion.div
                key={c.name}
                className="card-glass rounded-xl p-8 text-center"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.06 }}
              >
                <p className="text-sm font-bold text-[#fafafa]">{c.name}</p>
                <p className="text-xs text-[#a1a1aa] mt-1">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </SectionBody>
      </div>
    </Section>
  );
}
