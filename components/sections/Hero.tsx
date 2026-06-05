'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { Button } from '@/components/ui/Button';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="hero" id="hero">
      <div className="hero__bg" aria-hidden />
      <div className="page-container hero__inner">
        <motion.div className="hero__grid" variants={container} initial="hidden" animate="show">
          <div className="hero__content">
            <motion.p className="hero__roles" variants={item}>
              {siteConfig.roles.map((role, i) => (
                <span key={role}>
                  {i > 0 && <span className="hero__roles-sep">/</span>}
                  {role}
                </span>
              ))}
            </motion.p>

            <motion.h1 className="hero__title" variants={item}>
              Building infrastructure across{' '}
              <span className="text-gradient-gold">finance, logistics, and security</span>.
            </motion.h1>

            <motion.div className="hero__prose" variants={item}>
              <p className="hero__lead">
                {hero.leadIntro}{' '}
                <strong className="text-[#fafafa]">{hero.leadEmphasis}</strong>.
              </p>
              {hero.paragraphs.map((p, i) => (
                <p key={i} className="hero__body">
                  {p}
                </p>
              ))}
            </motion.div>

            <motion.div className="hero__actions" variants={item}>
              <Button href={hero.primaryCta.href} variant="primary" size="lg" showArrow>
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary" size="lg" icon={Mail}>
                {hero.secondaryCta.label}
              </Button>
            </motion.div>

            <motion.div className="hero__stat-bar" variants={item}>
              <div className="stat-bar">
                <div className="stat-bar__item">
                  <span className="stat-bar__value">Financial</span>
                  <span className="stat-bar__label">Infrastructure</span>
                  <span className="stat-bar__desc">
                    Treasury, ledgers, approvals
                  </span>
                </div>
                <div className="stat-bar__item">
                  <span className="stat-bar__value">Logistics</span>
                  <span className="stat-bar__label">Infrastructure</span>
                  <span className="stat-bar__desc">
                    Tracking, delivery, visibility
                  </span>
                </div>
                <div className="stat-bar__item">
                  <span className="stat-bar__value">Security</span>
                  <span className="stat-bar__label">Infrastructure</span>
                  <span className="stat-bar__desc">
                    Tooling, automation, ops
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div className="hero__visual" variants={item}>
            <div className="hero__frame">
              <picture>
                <img
                  src="/passport.PNG"
                  alt="Ogunleye Amos Ayodeji"
                  className="hero__image"
                  loading="eager"
                />
              </picture>
              <div className="hero__caption">
                <p className="font-semibold text-sm text-[#fafafa]">
                  {siteConfig.fullName}
                </p>
                <p className="text-xs text-[#a1a1aa] mt-0.5">
                  Founder · Software Developer · Financial Analyst · Systems Builder
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a href={hero.primaryCta.href} className="hero__scroll-link" aria-label="Scroll to content">
            <ArrowDown size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
