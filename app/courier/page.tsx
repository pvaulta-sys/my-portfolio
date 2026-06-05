'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  MapPin,
  Package,
  LayoutDashboard,
  Bell,
  Truck,
  Route,
  AlertTriangle,
  ArrowRight,
  Radio,
  ClipboardList,
  RefreshCw,
} from 'lucide-react';

const capabilities = [
  {
    title: 'Real-Time Tracking',
    icon: Radio,
    desc: 'Live shipment tracking from dispatch to proof-of-delivery. Status updates pushed to operational dashboards and customer interfaces in real time.',
  },
  {
    title: 'Shipment Management',
    icon: Package,
    desc: 'Create, assign, and monitor shipments across the delivery lifecycle. Complete visibility into every package from origin to destination.',
  },
  {
    title: 'Operational Dashboards',
    icon: LayoutDashboard,
    desc: 'Real-time views of active deliveries, fleet status, exception events, and operational metrics configurable for different team roles.',
  },
  {
    title: 'Customer Notifications',
    icon: Bell,
    desc: 'Automated status updates to customers via email or SMS at key delivery milestones. Configurable notification rules per shipment type.',
  },
  {
    title: 'Delivery Workflows',
    icon: ClipboardList,
    desc: 'Configurable workflows from dispatch through proof-of-delivery. Exception handling, escalation rules, and completion verification built in.',
  },
  {
    title: 'Route Visibility',
    icon: Route,
    desc: 'Visual route tracking showing driver location, stop sequences, estimated arrival times, and deviation alerts for operational awareness.',
  },
];

const challenges = [
  {
    title: 'Fragmented Logistics Systems',
    desc: 'Many organizations manage logistics across separate tools for dispatching, tracking, billing, and customer communication — creating data silos and operational overhead.',
  },
  {
    title: 'Limited Shipment Visibility',
    desc: 'Without real-time tracking and centralized status information, operations teams lack the visibility needed to manage exceptions and communicate accurate ETAs.',
  },
  {
    title: 'Customer Communication Gaps',
    desc: 'Manual status updates and inconsistent notification processes lead to customer uncertainty, increased support volume, and reduced satisfaction.',
  },
];

const approachPoints = [
  {
    title: 'Centralized Operations',
    desc: 'A single platform for dispatching, tracking, notifications, and reporting. All logistics data in one place with role-based access for operations, management, and customers.',
  },
  {
    title: 'Real-Time Visibility',
    desc: 'Live tracking data, status updates, and operational metrics available across the organization. Exception alerts and automated notifications keep everyone informed.',
  },
  {
    title: 'Configurable Workflows',
    desc: 'Adaptable to different logistics models — from local delivery to regional distribution. Configurable checkpoints, notification rules, and operational policies.',
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

export default function CourierPage() {
  const { ref: overviewRef, inView: overviewIn } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: capsRef, inView: capsIn } = useInView({ threshold: 0.05, triggerOnce: true });
  const { ref: challengesRef, inView: challengesIn } = useInView({
    threshold: 0.08,
    triggerOnce: true,
  });
  const { ref: approachRef, inView: approachIn } = useInView({
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
                  'radial-gradient(ellipse at center, rgba(96,165,250,0.06) 0%, transparent 60%)',
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-40"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(96,165,250,0.04) 0%, transparent 60%)',
              }}
            />
          </div>
          <div className="page-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="section-label mb-6 inline-flex">Logistics Infrastructure</span>
              <h1 className="text-[clamp(2.25rem,5.5vw,4rem)] font-bold tracking-[-0.04em] leading-[1.08] text-[#fafafa] mb-4">
                Courier & Real-Time Tracking Platform
              </h1>
              <p className="text-[clamp(1rem,2vw,1.25rem)] text-[#60a5fa] font-medium mb-5">
                Shipment visibility and operational logistics.
              </p>
              <p className="text-base md:text-lg text-[#a1a1aa] max-w-2xl leading-relaxed">
                A platform designed to manage deliveries, tracking, customer notifications,
                and logistics workflows — replacing fragmented tools with a single
                operational system.
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
                <SectionHeader
                  label="Overview"
                  title="Operational Logistics Platform"
                  desc="Courier provides end-to-end visibility and control over the delivery lifecycle — from dispatch to proof-of-delivery."
                />
                <div className="mt-8 grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Truck,
                      stat: 'Dispatch to POD',
                      desc: 'Complete lifecycle coverage for every shipment',
                    },
                    {
                      icon: MapPin,
                      stat: 'Real-Time Location',
                      desc: 'Live tracking data visible to ops and customers',
                    },
                    {
                      icon: RefreshCw,
                      stat: 'Automated Updates',
                      desc: 'Status notifications at every key milestone',
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.stat} className="card-glass rounded-xl p-6">
                        <Icon size={20} className="text-[#60a5fa] mb-3" />
                        <p className="text-sm font-bold text-[#fafafa] mb-1">{item.stat}</p>
                        <p className="text-xs text-[#a1a1aa]">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── CAPABILITIES ─── */}
        <section className="page-section">
          <div className="page-container">
            <div ref={capsRef}>
              <SectionHeader
                label="Features"
                title="Capabilities"
                desc="Core functions of the logistics platform."
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
                        <div className="flex items-center justify-center w-11 h-11 rounded-xl text-[#60a5fa] bg-[rgba(96,165,250,0.1)] border border-[rgba(96,165,250,0.2)]">
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

        {/* ─── CHALLENGES ─── */}
        <section className="page-section page-section--surface">
          <div className="page-container">
            <div ref={challengesRef}>
              <SectionHeader
                label="Context"
                title="Operational Challenges"
                desc="Common pain points in logistics operations that Courier addresses."
              />
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                {challenges.map((challenge, i) => {
                  const icons = [AlertTriangle, AlertTriangle, AlertTriangle];
                  const Icon = icons[i];
                  return (
                    <motion.div
                      key={challenge.title}
                      initial={{ opacity: 0, y: 16 }}
                      animate={challengesIn ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: i * 0.1, duration: 0.45 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Icon size={18} className="text-[#60a5fa]" />
                        <h3 className="font-bold text-[#fafafa] text-sm">{challenge.title}</h3>
                      </div>
                      <p className="text-sm text-[#a1a1aa] leading-relaxed">{challenge.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─── PLATFORM APPROACH ─── */}
        <section className="page-section">
          <div className="page-container">
            <div ref={approachRef}>
              <SectionHeader
                label="Approach"
                title="Platform Approach"
                desc="How Courier centralizes and streamlines logistics operations."
              />
              <div className="grid md:grid-cols-3 gap-8 md:gap-10 mt-12">
                {approachPoints.map((point, i) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={approachIn ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <span className="text-[#60a5fa] text-xs font-bold uppercase tracking-[0.15em] block mb-3">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-[1rem] font-bold text-[#fafafa] mb-3">{point.title}</h3>
                    <p className="text-sm text-[#a1a1aa] leading-relaxed">{point.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── PRODUCT SHOWCASE ─── */}
        <section className="page-section page-section--surface">
          <div className="page-container">
            <SectionHeader
              label="Product"
              title="Platform Views"
              desc="The Courier interface is organized around operational workflows."
            />
            <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-12">
              {[
                {
                  title: 'Shipment Tracking',
                  icon: MapPin,
                  desc: 'Real-time tracking view showing shipment status, location, and estimated delivery time.',
                },
                {
                  title: 'Operations Dashboard',
                  icon: LayoutDashboard,
                  desc: 'Overview of active deliveries, exception events, fleet status, and team performance metrics.',
                },
                {
                  title: 'Delivery Status',
                  icon: Truck,
                  desc: 'Detailed delivery view with milestone tracking, proof-of-delivery records, and customer updates.',
                },
              ].map((view) => {
                const Icon = view.icon;
                return (
                  <div
                    key={view.title}
                    className="card-glass rounded-xl p-6 md:p-8"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl text-[#60a5fa] bg-[rgba(96,165,250,0.1)] border border-[rgba(96,165,250,0.2)] mb-5">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-[1rem] font-bold text-[#fafafa] mb-3">{view.title}</h3>
                    <p className="text-sm text-[#a1a1aa] leading-relaxed">{view.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="page-section text-center">
          <div className="page-container">
            <SectionHeader
              label="Contact"
              title="Interested in Courier?"
              desc="Reach out to learn more about the platform and its roadmap."
              align="center"
            />
            <div className="flex justify-center mt-8">
              <a
                href="mailto:amos@amosamos.com?subject=Courier%20—%20Inquiry"
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
