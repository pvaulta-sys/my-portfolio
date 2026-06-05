'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  BookOpen,
  ShieldCheck,
  CheckCircle,
  FileSearch,
  RefreshCw,
  Eye,
  Grid3x3,
  GitBranch,
  ArrowRight,
  Server,
  Lock,
  Activity,
  Layers,
  AlertTriangle,
  FileText,
  Zap,
} from 'lucide-react';

const capabilities = [
  {
    title: 'Ledger Integrity',
    icon: BookOpen,
    desc: 'Double-entry ledger design with immutable record-keeping. Every transaction is recorded with complete lineage from initiation to settlement.',
  },
  {
    title: 'Approval Workflows',
    icon: CheckCircle,
    desc: 'Configurable multi-step approval chains. Role-based routing, parallel reviews, and escalation policies for transactions requiring oversight.',
  },
  {
    title: 'Audit Trails',
    icon: FileSearch,
    desc: 'Complete chronological record of every action — create, approve, reject, modify, reconcile. Tamper-evident logs designed for internal and external audit.',
  },
  {
    title: 'Reconciliation',
    icon: RefreshCw,
    desc: 'Automated matching of internal records against bank statements and external sources. Exception detection and resolution workflows built in.',
  },
  {
    title: 'Operational Visibility',
    icon: Eye,
    desc: 'Real-time dashboards showing transaction flows, approval statuses, pending items, and operational metrics. Configurable views for different roles.',
  },
  {
    title: 'Multi-Tenant Architecture',
    icon: Grid3x3,
    desc: 'Designed for organizations with multiple entities, subsidiaries, or departments. Complete data isolation with cross-entity consolidation where needed.',
  },
  {
    title: 'Workflow Automation',
    icon: GitBranch,
    desc: 'Automated routing of transactions through approval chains, notification triggers, scheduled operations, and policy-based enforcement rules.',
  },
  {
    title: 'Access Controls',
    icon: Lock,
    desc: 'Granular role-based permissions at the entity, function, and action level. Segregation of duties enforced across the platform.',
  },
];

const architecturePoints = [
  {
    title: 'Multi-Tenant Design',
    icon: Layers,
    desc: 'Each organization operates in an isolated tenant with its own data boundary. Cross-entity consolidation available through controlled data views.',
  },
  {
    title: 'Secure Access Controls',
    icon: ShieldCheck,
    desc: 'Role-based authorization with granular permissions at every layer. Segregation of duties, approval enforcement, and complete session audit logging.',
  },
  {
    title: 'Auditability',
    icon: Activity,
    desc: 'Every state transition is recorded in an immutable audit log. Full traceability from transaction initiation through approval, execution, and reconciliation.',
  },
  {
    title: 'Workflow Orchestration',
    icon: Server,
    desc: 'Event-driven workflow engine managing approval routing, notifications, scheduled operations, and policy enforcement across the platform.',
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
      {desc ? <p className={`section-header__desc ${align === 'center' ? 'mx-auto' : ''}`}>{desc}</p> : null}
    </div>
  );
}

export default function VaultaPage() {
  const { ref: probRef, inView: probIn } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: capsRef, inView: capsIn } = useInView({ threshold: 0.05, triggerOnce: true });
  const { ref: archRef, inView: archIn } = useInView({ threshold: 0.08, triggerOnce: true });
  const { ref: statusRef, inView: statusIn } = useInView({ threshold: 0.1, triggerOnce: true });

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
                  'radial-gradient(ellipse at center, rgba(212,175,55,0.06) 0%, transparent 60%)',
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-40"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(212,175,55,0.04) 0%, transparent 60%)',
              }}
            />
          </div>
          <div className="page-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="section-label mb-6 inline-flex">Financial Infrastructure</span>
              <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-[-0.04em] leading-[1.02] text-[#fafafa] mb-4">
                Vaulta
              </h1>
              <p className="text-[clamp(1.125rem,2.5vw,1.5rem)] text-[#d4af37] font-medium mb-5">
                Modern Treasury Operating System
              </p>
              <p className="text-base md:text-lg text-[#a1a1aa] max-w-2xl leading-relaxed">
                Vaulta is designed to help organizations manage financial operations through
                ledger integrity, approvals, reconciliation, auditability, workflow automation,
                and operational visibility.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── PROBLEM ─── */}
        <section className="page-section page-section--surface">
          <div className="page-container">
            <div ref={probRef}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={probIn ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
                  <div>
                    <SectionHeader
                      label="Context"
                      title="The Problem"
                      desc="Many organizations manage financial operations across fragmented spreadsheets, disconnected systems, and manual processes."
                    />
                  </div>
                  <div className="space-y-5 pt-1">
                    {[
                      { icon: AlertTriangle, text: 'Visibility gaps across entities, accounts, and transactions' },
                      { icon: AlertTriangle, text: 'Operational risk from manual handoffs and missing controls' },
                      { icon: AlertTriangle, text: 'Reconciliation issues between internal records and bank statements' },
                      { icon: AlertTriangle, text: 'Approval bottlenecks slowing down critical financial operations' },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.text} className="flex items-start gap-4">
                          <Icon size={18} className="text-[#d4af37] shrink-0 mt-0.5" />
                          <p className="text-[#a1a1aa] text-sm md:text-base leading-relaxed">{item.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── SOLUTION ─── */}
        <section className="page-section">
          <div className="page-container">
            <div className="max-w-4xl">
              <SectionHeader
                label="Approach"
                title="The Solution"
              />
              <p className="text-base md:text-lg text-[#a1a1aa] leading-relaxed max-w-3xl mt-4">
                Vaulta centralizes treasury operations into a single operational platform.
                It replaces fragmented tools and manual processes with a unified system
                designed for ledger integrity, controlled approvals, complete audit trails,
                and real-time operational visibility.
              </p>
            </div>
          </div>
        </section>

        {/* ─── CAPABILITIES ─── */}
        <section className="page-section page-section--surface">
          <div className="page-container">
            <div ref={capsRef}>
              <SectionHeader
                label="Features"
                title="Capabilities"
                desc="The platform is organized around the core functions of treasury operations."
              />
              <div className="grid md:grid-cols-2 gap-4 md:gap-5 mt-12">
                {capabilities.map((cap, i) => {
                  const Icon = cap.icon;
                  return (
                    <motion.div
                      key={cap.title}
                      className="card-elevated rounded-xl p-7 md:p-8"
                      initial={{ opacity: 0, y: 16 }}
                      animate={capsIn ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: i * 0.06, duration: 0.45 }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="icon-box w-11 h-11 rounded-xl flex items-center justify-center">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-[1.05rem] font-bold text-[#fafafa]">{cap.title}</h3>
                      </div>
                      <p className="text-sm text-[#a1a1aa] leading-relaxed">{cap.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─── ARCHITECTURE ─── */}
        <section className="page-section">
          <div className="page-container">
            <div ref={archRef}>
              <SectionHeader
                label="Architecture"
                title="Built For Scale"
                desc="The platform is designed from the ground up for organizations that need security, isolation, and reliability in their financial infrastructure."
              />
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-12">
                {architecturePoints.map((point, i) => {
                  const Icon = point.icon;
                  return (
                    <motion.div
                      key={point.title}
                      initial={{ opacity: 0, y: 16 }}
                      animate={archIn ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="icon-box w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                          <Icon size={22} />
                        </div>
                        <div>
                          <h3 className="text-[1rem] font-bold text-[#fafafa] mb-2">{point.title}</h3>
                          <p className="text-sm text-[#a1a1aa] leading-relaxed">{point.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Architecture diagram area */}
              <motion.div
                className="mt-14 rounded-xl border border-[rgba(212,175,55,0.12)] bg-[rgba(10,10,10,0.6)] p-8 md:p-10"
                initial={{ opacity: 0, y: 16 }}
                animate={archIn ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <p className="text-xs font-semibold text-[#d4af37] uppercase tracking-[0.15em] mb-6">
                  Platform Architecture
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { label: 'Access Layer', items: ['API Gateway', 'Auth', 'RBAC'] },
                    { label: 'Workflow Layer', items: ['Approvals', 'Automation', 'Notifications'] },
                    { label: 'Core Engine', items: ['Ledger', 'Reconciliation', 'Audit'] },
                    { label: 'Data Layer', items: ['Storage', 'Events', 'Integrations'] },
                  ].map((layer) => (
                    <div
                      key={layer.label}
                      className="border border-[rgba(255,255,255,0.06)] rounded-lg p-4 bg-[rgba(255,255,255,0.02)]"
                    >
                      <p className="text-xs font-bold text-[#d4af37] mb-3 uppercase tracking-wider">
                        {layer.label}
                      </p>
                      <ul className="space-y-1.5">
                        {layer.items.map((item) => (
                          <li key={item} className="text-xs text-[#a1a1aa]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── STATUS ─── */}
        <section className="page-section page-section--surface">
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
                <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-10">
                  {[
                    {
                      label: 'Status',
                      value: 'Active Development',
                      icon: Zap,
                    },
                    {
                      label: 'Focus Area',
                      value: 'Treasury Infrastructure',
                      icon: FileText,
                    },
                    {
                      label: 'Next Milestone',
                      value: 'Connector Integrations',
                      icon: ArrowRight,
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="card-glass rounded-xl p-6 md:p-8"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Icon size={18} className="text-[#d4af37]" />
                          <p className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider">
                            {item.label}
                          </p>
                        </div>
                        <p className="text-lg font-bold text-[#fafafa]">{item.value}</p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="page-section text-center">
          <div className="page-container">
            <SectionHeader
              label="Contact"
              title="Interested in Vaulta?"
              desc="Reach out to learn more about the platform and its roadmap."
              align="center"
            />
            <div className="flex justify-center mt-8">
              <a
                href="mailto:amos@amosamos.com?subject=Vaulta%20—%20Inquiry"
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
