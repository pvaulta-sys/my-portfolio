'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Shield,
  Terminal,
  LayoutDashboard,
  Eye,
  Workflow,
  Cpu,
  ArrowRight,
  Radio,
  BarChart3,
  GitBranch,
} from 'lucide-react';

const components = [
  {
    title: 'Dashboard Experience',
    icon: LayoutDashboard,
    desc: 'A web-based interface for managing security assessments, reviewing findings, and tracking operational status across projects and team members.',
  },
  {
    title: 'CLI Tooling',
    icon: Terminal,
    desc: 'Command-line interface for teams who prefer terminal-based workflows. Designed to support scanning, reporting, and common security operations.',
  },
  {
    title: 'Security Workflows',
    icon: Workflow,
    desc: 'Structured processes for assessment execution, finding management, and remediation tracking. Designed to bring consistency to security operations.',
  },
  {
    title: 'Infrastructure Visibility',
    icon: Eye,
    desc: 'Centralized view of security posture, asset coverage, and assessment status across projects — designed to help teams understand where they stand.',
  },
  {
    title: 'Operational Intelligence',
    icon: BarChart3,
    desc: 'Aggregated data and reporting to support decision-making around security priorities, resource allocation, and risk management.',
  },
];

const roadmapAreas = [
  {
    title: 'Security Automation',
    desc: 'Automated scanning pipelines, scheduled assessments, and policy-based enforcement to reduce manual effort in repetitive security tasks.',
  },
  {
    title: 'Infrastructure Monitoring',
    desc: 'Continuous visibility into infrastructure security posture, with alerting and trend analysis for operational teams.',
  },
  {
    title: 'Workflow Orchestration',
    desc: 'Multi-step orchestration of complex security operations with state tracking, notifications, and cross-team coordination.',
  },
  {
    title: 'Security Intelligence',
    desc: 'Pattern analysis, threat correlation, and actionable intelligence derived from assessment data across the platform.',
  },
];

function SectionHeader({
  label,
  title,
  desc,
  align,
}: {
  label?: string;
  title: string;
  desc?: string;
  align?: string;
}) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {label ? (
        <span className="section-label mb-5 inline-flex">{label}</span>
      ) : null}
      <h2 className="section-header__title mb-4">{title}</h2>
      {desc ? (
        <p className={`section-header__desc ${align === 'center' ? 'mx-auto' : ''}`}>{desc}</p>
      ) : null}
    </div>
  );
}

export default function AegisPage() {
  const { ref: overviewRef, inView: overviewIn } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: visionRef, inView: visionIn } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: compRef, inView: compIn } = useInView({ threshold: 0.05, triggerOnce: true });
  const { ref: statusRef, inView: statusIn } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: roadmapRef, inView: roadmapIn } = useInView({
    threshold: 0.08,
    triggerOnce: true,
  });

  return (
    <div className="site-shell">
      <Navigation />
      <main>
        {/* ─── HERO ─── */}
        <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-0 right-0 w-[600px] h-[600px] opacity-60"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(52,211,153,0.06) 0%, transparent 60%)',
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-40"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(52,211,153,0.04) 0%, transparent 60%)',
              }}
            />
          </div>
          <div className="page-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="section-label mb-6 inline-flex">Security Infrastructure</span>
              <h1 className="text-[clamp(2.25rem,5.5vw,4rem)] font-bold tracking-[-0.04em] leading-[1.08] text-[#fafafa] mb-4">
                AEGIS
              </h1>
              <p className="text-[clamp(1rem,2vw,1.25rem)] text-[#34d399] font-medium mb-5">
                Operational Security Platform
              </p>
              <p className="text-base md:text-lg text-[#a1a1aa] max-w-2xl leading-relaxed">
                AEGIS is a platform being developed for ethical hackers, security professionals,
                and infrastructure teams. It combines dashboard-based operations with command-line
                tooling.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── OVERVIEW ─── */}
        <section className="page-section page-section--surface">
          <div className="page-container">
            <div ref={overviewRef}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={overviewIn ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
                  <div>
                    <SectionHeader
                      label="Overview"
                      title="What AEGIS Is"
                    />
                  </div>
                  <div className="pt-1">
                    <p className="text-base md:text-lg text-[#a1a1aa] leading-relaxed">
                      AEGIS is being developed to provide security professionals with better tools
                      for managing assessments, tracking findings, and maintaining operational
                      awareness. The platform aims to bridge the gap between dashboard-based
                      management and terminal-based workflows — giving teams the flexibility to
                      work in the environment that suits them best.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── VISION ─── */}
        <section className="page-section">
          <div className="page-container">
            <div ref={visionRef}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={visionIn ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <SectionHeader
                  label="Purpose"
                  title="Why AEGIS Exists"
                  desc="Security operations face challenges that better tooling can address."
                />
                <div className="grid md:grid-cols-2 gap-6 mt-12">
                  {[
                    {
                      icon: Eye,
                      title: 'Visibility',
                      desc: 'Security teams often lack a unified view of assessments, findings, and remediation status across projects. AEGIS aims to provide that operational picture.',
                    },
                    {
                      icon: Shield,
                      title: 'Operational Security',
                      desc: 'Structured workflows and consistent processes help teams maintain security standards. The platform is designed to support operational discipline without adding overhead.',
                    },
                    {
                      icon: Workflow,
                      title: 'Workflow Efficiency',
                      desc: 'Repeated manual steps in security assessments consume time and introduce inconsistency. AEGIS aims to automate the routine so teams can focus on the work that requires judgment.',
                    },
                    {
                      icon: Radio,
                      title: 'Infrastructure Awareness',
                      desc: 'Understanding security posture across infrastructure requires consolidated data and clear presentation. The platform is being designed to provide that awareness at a glance.',
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0 text-[#34d399] bg-[rgba(52,211,153,0.1)] border border-[rgba(52,211,153,0.2)]">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#fafafa] text-sm mb-2">{item.title}</h3>
                          <p className="text-sm text-[#a1a1aa] leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── PLATFORM COMPONENTS ─── */}
        <section className="page-section page-section--surface">
          <div className="page-container">
            <div ref={compRef}>
              <SectionHeader
                label="Components"
                title="Platform Areas"
                desc="The areas AEGIS is being designed to address."
              />
              <div className="grid md:grid-cols-2 gap-4 md:gap-5 mt-12">
                {components.map((comp, i) => {
                  const Icon = comp.icon;
                  return (
                    <motion.div
                      key={comp.title}
                      className="card-elevated rounded-xl p-7 md:p-8"
                      initial={{ opacity: 0, y: 16 }}
                      animate={compIn ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: i * 0.06, duration: 0.45 }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center justify-center w-11 h-11 rounded-xl text-[#34d399] bg-[rgba(52,211,153,0.1)] border border-[rgba(52,211,153,0.2)]">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-[1.05rem] font-bold text-[#fafafa]">{comp.title}</h3>
                      </div>
                      <p className="text-sm text-[#a1a1aa] leading-relaxed">{comp.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─── DEV STATUS ─── */}
        <section className="page-section">
          <div className="page-container">
            <div ref={statusRef}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={statusIn ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <SectionHeader
                  label="Current State"
                  title="Development Status"
                />
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-10">
                  <div className="card-glass rounded-xl p-6 md:p-8">
                    <p className="text-xs font-semibold text-[#34d399] uppercase tracking-wider mb-2">
                      Status
                    </p>
                    <p className="text-lg font-bold text-[#fafafa]">In Development</p>
                    <p className="text-sm text-[#a1a1aa] mt-2">
                      AEGIS is currently in active development. Core architecture and initial
                      interface work is underway.
                    </p>
                  </div>
                  <div className="card-glass rounded-xl p-6 md:p-8">
                    <p className="text-xs font-semibold text-[#34d399] uppercase tracking-wider mb-2">
                      Focus
                    </p>
                    <p className="text-lg font-bold text-[#fafafa]">Security Infrastructure</p>
                    <p className="text-sm text-[#a1a1aa] mt-2">
                      Development is focused on building the foundational platform: dashboard
                      interface, CLI tooling, and core workflow capabilities.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── ROADMAP ─── */}
        <section className="page-section page-section--surface">
          <div className="page-container">
            <div ref={roadmapRef}>
              <SectionHeader
                label="Roadmap"
                title="Future Areas"
                desc="Areas being explored for future development. Timelines will be defined as the platform matures."
              />
              <div className="grid md:grid-cols-2 gap-4 md:gap-5 mt-12">
                {roadmapAreas.map((area, i) => (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={roadmapIn ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.08, duration: 0.45 }}
                    className="border border-[rgba(255,255,255,0.06)] rounded-xl p-6 md:p-8 bg-[rgba(255,255,255,0.015)]"
                  >
                    <span className="text-[#34d399] text-xs font-bold uppercase tracking-[0.15em] block mb-3">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-[1rem] font-bold text-[#fafafa] mb-3">{area.title}</h3>
                    <p className="text-sm text-[#a1a1aa] leading-relaxed">{area.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="page-section text-center">
          <div className="page-container">
            <SectionHeader
              label="Contact"
              title="Interested in AEGIS?"
              desc="Reach out to learn more about the platform and its development."
              align="center"
            />
            <div className="flex justify-center mt-8">
              <a
                href="mailto:amos@amosamos.com?subject=AEGIS%20—%20Inquiry"
                className="btn btn--primary"
              >
                <span className="btn__inner">
                  <span className="btn__label">Get in touch</span>
                  <span className="btn__arrow" aria-hidden>
                    <ArrowRight size={15} strokeWidth={2.25} className="btn__arrow-icon" />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
