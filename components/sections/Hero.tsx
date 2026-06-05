'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, Layers, Mail, Shield, Truck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { getHeroSecondaryHref, siteConfig } from '@/lib/site';
import { useTranslation } from '@/components/LocaleProvider';

const domainIcons = {
  Finance: Layers,
  Logistics: Truck,
  Security: Shield,
} as const;

const Hero = () => {
  const t = useTranslation();
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden />

      <div className="page-container hero__inner">
        <div className="hero__grid">
          <motion.div
            className="hero__content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="hero__roles">
              {siteConfig.roles.map((role, i) => (
                <span key={role}>
                  {i > 0 ? <span className="hero__roles-sep">·</span> : null}
                  {role}
                </span>
              ))}
            </p>

            <h1 className="hero__title">
              Building infrastructure across{' '}
              <span className="text-gradient-gold">finance</span>,{' '}
              <span className="text-gradient-gold">logistics</span>, and{' '}
              <span className="text-gradient-gold">security</span>.
            </h1>

            <div className="hero__prose">
              <p className="hero__lead">
                {t.hero.leadIntro}{' '}
                <strong className="text-[#fafafa] font-semibold">
                  {t.hero.leadEmphasis}
                </strong>
                .
              </p>
              {siteConfig.hero.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="hero__body">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="hero__actions">
              <Button
                href={siteConfig.hero.primaryCta.href}
                variant="primary"
                size="lg"
                showArrow
              >
                {siteConfig.hero.primaryCta.label}
              </Button>
              <Button
                href={getHeroSecondaryHref()}
                variant="secondary"
                size="lg"
                icon={Mail}
                showArrow
                external={getHeroSecondaryHref().startsWith('http')}
              >
                {siteConfig.hero.secondaryCta.label}
              </Button>
            </div>

            <div className="stat-bar hero__stat-bar" role="list">
              {siteConfig.hero.domains.map((d) => {
                const Icon = domainIcons[d.label as keyof typeof domainIcons];
                return (
                  <div key={d.label} className="stat-bar__item" role="listitem">
                    <span className="stat-bar__value">
                      <Icon size={14} className="text-[#d4af37]" strokeWidth={2} aria-hidden />
                      {d.label}
                    </span>
                    <span className="stat-bar__label">{d.tag}</span>
                    <p className="stat-bar__desc">{d.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero__frame">
              <Image
                src="/passport.PNG"
                alt={siteConfig.fullName}
                width={480}
                height={560}
                priority
                className="hero__image"
              />
              <div className="hero__caption">
                <p className="text-sm font-semibold text-[#fafafa]">{siteConfig.fullName}</p>
                <p className="text-xs text-[#d4af37] font-medium mt-0.5">Founder · Systems Builder</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="hero__scroll">
          <Link href="/#building-systems" className="hero__scroll-link" aria-label="Scroll to building systems">
            <ArrowDown size={18} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
