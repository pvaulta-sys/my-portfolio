'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { Section, SectionBody } from '@/components/layout/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/Button';
import { projects, projectStatusClass } from '@/lib/projects';
import {
  ArrowLeft,
  CheckCircle2,
  Layers,
  Building2,
  ArrowUpRight,
  BarChart3,
  Code2,
  Database,
} from 'lucide-react';

const accentBg: Record<string, string> = {
  gold: 'from-[#d4af37]/20 to-transparent',
  blue: 'from-[#60a5fa]/20 to-transparent',
  emerald: 'from-[#34d399]/20 to-transparent',
};

const accentBorder: Record<string, string> = {
  gold: 'border-[#d4af37]/30',
  blue: 'border-[#60a5fa]/30',
  emerald: 'border-[#34d399]/30',
};

const accentText: Record<string, string> = {
  gold: 'text-[#d4af37]',
  blue: 'text-[#60a5fa]',
  emerald: 'text-[#34d399]',
};

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  const Icon = project.icon;
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <div className="site-shell">
      <Navigation />
      <main id="main-content">
        <section className="page-section page-section--hero min-h-[60vh] flex items-center relative overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-b ${accentBg[project.accent]} opacity-30 pointer-events-none`}
            aria-hidden
          />
          <div className="page-container relative w-full">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm text-[#a1a1aa] hover:text-[#d4af37] transition-colors mb-8"
            >
              <ArrowLeft size={16} aria-hidden />
              All projects
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className={`flex items-center justify-center w-12 h-12 rounded-xl border ${accentBorder[project.accent]} bg-[rgba(255,255,255,0.03)] ${accentText[project.accent]}`}
                >
                  <Icon size={24} strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-sm text-[#a1a1aa]">{project.category}</p>
                  <span
                    className={`product-status ${projectStatusClass[project.status]} product-status--${project.accent}`}
                  >
                    <span className="product-status__dot" aria-hidden />
                    {project.statusLabel}
                  </span>
                </div>
              </div>
              <h1 className="page-hero__title mb-3">{project.title}</h1>
              {project.subtitle ? (
                <p className={`text-lg font-medium mb-3 ${accentText[project.accent]}`}>
                  {project.subtitle}
                </p>
              ) : null}
              <p className="page-hero__desc max-w-2xl">{project.description}</p>
            </motion.div>
          </div>
        </section>

        <Section>
          <div ref={ref}>
            <SectionHeader
              label="Overview"
              title="Why this matters"
              description={project.proof}
              icon={Building2}
            />
            <SectionBody>
              <motion.div
                className="grid gap-6 lg:grid-cols-2"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55 }}
              >
                <div className="card-elevated rounded-xl p-8 lg:p-10">
                  <h3 className="text-lg font-bold text-[#fafafa] mb-4 flex items-center gap-2">
                    <BarChart3 size={18} className={accentText[project.accent]} />
                    Metrics
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-xs text-[#a1a1aa] uppercase tracking-wider">{m.label}</p>
                        <p className={`text-lg font-bold mt-1 ${accentText[project.accent]}`}>{m.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="card-elevated rounded-xl p-8 lg:p-10">
                  <h3 className="text-lg font-bold text-[#fafafa] mb-4 flex items-center gap-2">
                    <CheckCircle2 size={18} className={accentText[project.accent]} />
                    Capabilities
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {project.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-center gap-2.5 text-sm text-[#a1a1aa]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </SectionBody>
          </div>
        </Section>

        <Section variant="surface">
          <SectionHeader
            label="Architecture"
            title="Technical approach"
            description="How the product is designed and built for operational reliability."
            icon={Layers}
          />
          <SectionBody>
            <div className="grid gap-5">
              {project.architecture.map((point, i) => (
                <div key={i} className="card-elevated rounded-xl p-8 lg:p-10 flex items-start gap-4">
                  <span className={`w-2 h-2 rounded-full mt-2 shrink-0 ${accentText[project.accent]}`} />
                  <p className="text-sm text-[#a1a1aa] leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </SectionBody>
        </Section>

        <Section>
          <SectionHeader
            label="Stack"
            title="Tech stack"
            description="The tools and technologies powering the platform."
            icon={Code2}
          />
          <SectionBody>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className={`inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border ${accentBorder[project.accent]} bg-[rgba(255,255,255,0.03)] ${accentText[project.accent]}`}
                >
                  <Database size={12} strokeWidth={2} />
                  {tech}
                </span>
              ))}
            </div>
          </SectionBody>
        </Section>

        <Section className="text-center">
          <SectionHeader
            label="Next steps"
            title="Get involved"
            description={project.status === 'beta' ? 'Request early access to shape the product.' : 'Join the waitlist for updates on launch.'}
            align="center"
            icon={ArrowUpRight}
            className="!mb-8"
          />
          <Button
            href={project.action.href}
            variant="primary"
            size="lg"
            showArrow
            external={project.action.external}
            className="mx-auto"
          >
            {project.action.label}
          </Button>
        </Section>
      </main>
    </div>
  );
}
