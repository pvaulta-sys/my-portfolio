'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/Navigation';
import { PageHero } from '@/components/PageHero';
import { Section, SectionBody } from '@/components/layout/Section';
import { SectionHeader } from '@/components/SectionHeader';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { projects, projectStatusClass } from '@/lib/projects';
import { Layers, Building2, ArrowUpRight } from 'lucide-react';

const accentBorder: Record<string, string> = {
  gold: 'border-[#d4af37]/20 hover:border-[#d4af37]/40',
  blue: 'border-[#60a5fa]/20 hover:border-[#60a5fa]/40',
  emerald: 'border-[#34d399]/20 hover:border-[#34d399]/40',
};

const accentIcon: Record<string, string> = {
  gold: 'text-[#d4af37] bg-[rgba(212,175,55,0.1)] border-[rgba(212,175,55,0.2)]',
  blue: 'text-[#60a5fa] bg-[rgba(96,165,250,0.1)] border-[rgba(96,165,250,0.2)]',
  emerald: 'text-[#34d399] bg-[rgba(52,211,153,0.1)] border-[rgba(52,211,153,0.2)]',
};

export default function ProjectsPage() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <div className="site-shell">
      <Navigation />
      <main id="main-content">
        <PageHero
          icon={Building2}
          label="Portfolio"
          title="Infrastructure products"
          description="Active products across finance, logistics, and security—each designed as an operational layer, not a feature."
        />

        <Section>
          <div ref={ref}>
            <SectionHeader
              label="What I am building"
              title="Projects"
              description="Three infrastructure products in active development, each targeting a critical operational domain."
              icon={Layers}
            />
            <SectionBody>
              <div className="grid gap-6 lg:gap-8">
                {projects.map((project, i) => {
                  const Icon = project.icon;
                  return (
                    <motion.article
                      key={project.id}
                      className={`card-elevated rounded-lg p-8 lg:p-10 ${accentBorder[project.accent]}`}
                      initial={{ opacity: 0, y: 24 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: i * 0.08, duration: 0.55 }}
                    >
                      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-4">
                            <span
                              className={`flex items-center justify-center w-10 h-10 rounded-xl ${accentIcon[project.accent]}`}
                            >
                              <Icon size={20} strokeWidth={1.75} />
                            </span>
                            <span className="section-label">{project.category}</span>
                            <span
                              className={`product-status ${projectStatusClass[project.status]} product-status--${project.accent}`}
                            >
                              <span className="product-status__dot" aria-hidden />
                              {project.statusLabel}
                            </span>
                          </div>
                          <Link
                            href={`/projects/${project.id}`}
                            className="text-xl lg:text-2xl font-bold text-[#fafafa] mb-1 hover:text-[#d4af37] transition-colors inline-block"
                          >
                            {project.title}
                          </Link>
                          {project.subtitle ? (
                            <p className="text-sm text-[#d4af37] font-medium mb-3">
                              {project.subtitle}
                            </p>
                          ) : null}
                          <p className="text-[0.9375rem] text-[#a1a1aa] leading-relaxed mb-4">
                            {project.description}
                          </p>
                          <p className="text-sm text-[#a1a1aa] leading-relaxed mb-4 pl-3 border-l-2 border-[rgba(255,255,255,0.08)]">
                            {project.proof}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-5">
                            {project.capabilities.map((cap) => (
                              <span
                                key={cap}
                                className="text-[0.6875rem] font-medium px-2.5 py-1 rounded-full text-[#a1a1aa] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)]"
                              >
                                {cap}
                              </span>
                            ))}
                          </div>
                          <div className="flex flex-wrap items-center gap-3">
                            <Button
                              href={project.action.href}
                              variant="primary"
                              size="md"
                              showArrow
                              external={project.action.external}
                            >
                              {project.action.label}
                            </Button>
                            <Link
                              href={`/projects/${project.id}`}
                              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#a1a1aa] hover:text-[#d4af37] transition-colors"
                            >
                              View details
                              <ArrowUpRight size={14} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </SectionBody>
          </div>
        </Section>
      </main>
    </div>
  );
}
