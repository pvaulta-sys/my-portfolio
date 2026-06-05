'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  icon?: LucideIcon;
  className?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  align = 'left',
  icon: Icon,
  className = '',
}: SectionHeaderProps) {
  const centered = align === 'center';

  return (
    <motion.header
      className={`section-header ${centered ? 'section-header--center' : ''} ${className}`.trim()}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`section-header__meta ${centered ? 'justify-center' : ''}`}>
        {Icon ? (
          <span className="section-header__icon" aria-hidden>
            <Icon size={18} strokeWidth={1.75} />
          </span>
        ) : null}
        <span className="section-label">{label}</span>
      </div>
      <h2 className="section-header__title">{title}</h2>
      {description ? <p className="section-header__desc">{description}</p> : null}
    </motion.header>
  );
}
