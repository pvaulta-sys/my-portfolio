'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Section } from '@/components/layout/Section';

type PageHeroProps = {
  label: string;
  title: string;
  description: string;
  icon?: LucideIcon;
};

export function PageHero({ label, title, description, icon: Icon }: PageHeroProps) {
  return (
    <Section size="tight" className="!pb-0">
      <motion.div
        className="page-hero"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="page-hero__meta">
          {Icon ? (
            <span className="section-header__icon" aria-hidden>
              <Icon size={20} strokeWidth={1.75} />
            </span>
          ) : null}
          <span className="section-label">{label}</span>
        </div>
        <h1 className="page-hero__title">{title}</h1>
        <p className="page-hero__desc">{description}</p>
      </motion.div>
    </Section>
  );
}
