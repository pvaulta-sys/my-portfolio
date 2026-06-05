'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, SectionBody } from '@/components/layout/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { MessageSquareQuote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Amos brings a rare combination of deep technical skill and sharp financial intuition. He does not just build systems—he understands why they matter for the business.',
    author: 'Partner',
    role: 'Financial Technology Advisory',
  },
  {
    quote: 'Working with Amos on logistics infrastructure was eye-opening. He designs for real-world operational chaos, not just the happy path. His systems hold up under pressure.',
    author: 'Operations Director',
    role: 'Logistics & Supply Chain',
  },
  {
    quote: 'The security tooling Amos built transformed how our team handles assessments. What used to take days now runs in hours. He thinks like an operator, not just an engineer.',
    author: 'CISO',
    role: 'Financial Services',
  },
];

const Testimonials = () => {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <Section id="testimonials" variant="surface">
      <div ref={ref}>
        <SectionHeader
          label="Trust"
          title="What people say"
          description="Feedback from collaborators and partners across domains."
          icon={MessageSquareQuote}
        />
        <SectionBody>
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                className="card-premium rounded-xl p-8 lg:p-10 flex flex-col"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                <MessageSquareQuote
                  size={20}
                  className="text-[#d4af37] mb-4 opacity-50"
                  aria-hidden
                />
                <blockquote className="text-[0.9375rem] text-[#a1a1aa] leading-relaxed flex-grow">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-5 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                  <p className="text-sm font-semibold text-[#fafafa]">{t.author}</p>
                  <p className="text-xs text-[#a1a1aa]">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionBody>
      </div>
    </Section>
  );
};

export default Testimonials;
