'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/Navigation';
import { PageHero } from '@/components/PageHero';
import { Section, SectionBody } from '@/components/layout/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/Button';
import { BookOpen, Mail, Cog, Shield, Layers, Feather } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import Footer from '@/components/Footer';

const principles = [
  {
    title: 'Build For Trust',
    icon: Shield,
    desc: 'Every system must earn the confidence of its operators. Auditability, integrity, and clear ownership are non-negotiable.',
  },
  {
    title: 'Think In Systems',
    icon: Cog,
    desc: 'Every component exists within a broader operational context. Designing for the whole, not the part.',
  },
  {
    title: 'Design For Scale',
    icon: Layers,
    desc: 'Architectures that remain clear and reliable as they grow across complexity, team size, and operational surface area.',
  },
  {
    title: 'Commit to Simplicity',
    icon: Feather,
    desc: 'Simplicity is a design discipline. A simple system is easier to audit, operate, and improve over time.',
  },
];

const values = [
  {
    title: 'Craft Over Speed',
    desc: 'Quality and thoughtfulness in design and architecture produce better outcomes over time. Taking the time to build solid foundations reduces friction and rework later.',
  },
  {
    title: 'Continuous Learning',
    desc: 'Every product, every domain, every system teaches something. I stay at the edge of financial systems, infrastructure, and software architecture.',
  },
  {
    title: 'People First',
    desc: 'Technology serves the people operating it. I build for clarity, confidence, and respect for the operator.',
  },
];

const interests = [
  'Studying financial markets and macroeconomics',
  'Contributing to open-source infrastructure tooling',
  'Writing about systems design and operational thinking',
  'Exploring new programming languages and paradigms',
  'Building automation for everyday productivity',
];

export default function AboutPage() {
  const { ref: storyRef, inView: storyIn } = useInView({ threshold: 0.08, triggerOnce: true });
  const { ref: princRef, inView: princIn } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <div className="site-shell">
      <Navigation />
      <main>
        <PageHero
          icon={BookOpen}
          label="About"
          title="Founder at the intersection of finance, logistics, and security"
          description="Building infrastructure products that improve trust, visibility, and operational control across critical business domains."
        />

        <Section>
          <div ref={storyRef}>
            <div className="max-w-3xl">
              <span className="section-label mb-6 inline-flex">Background</span>
              <h2 className="section-header__title mb-8">Building Infrastructure</h2>
              <motion.div
                className="space-y-5"
                initial={{ opacity: 0, y: 14 }}
                animate={storyIn ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55 }}
              >
                <p className="text-base md:text-lg text-[#a1a1aa] leading-relaxed">
                  I am a founder, software developer, financial analyst, and systems builder. I create
                  infrastructure products across finance, logistics, and security — systems that
                  improve trust, visibility, and operational control.
                </p>
                <p className="text-base md:text-lg text-[#a1a1aa] leading-relaxed">
                  My work starts from a simple observation: operations run on information. When money
                  moves, goods move, or risk is assessed, the quality of the infrastructure determines
                  the quality of the outcome. I build the infrastructure that makes operations
                  reliable, auditable, and scalable.
                </p>
                <p className="text-base md:text-lg text-[#a1a1aa] leading-relaxed">
                  I think in systems — interconnected layers where decisions compound. Every product
                  is designed for the teams that run operations day to day, prioritizing reliability,
                  auditability, and clarity under real conditions.
                </p>
              </motion.div>
            </div>
          </div>
        </Section>

        <Section variant="surface">
          <div ref={princRef}>
            <SectionHeader
              label="Principles"
              title="Operating Principles"
              description="The ideas that guide every decision."
            />
            <SectionBody>
              <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                {principles.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <motion.div
                      key={p.title}
                      className="card-elevated rounded-xl p-6 md:p-8"
                      initial={{ opacity: 0, y: 16 }}
                      animate={princIn ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: i * 0.08 }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="icon-box w-11 h-11 rounded-xl flex items-center justify-center">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-[1.05rem] font-bold text-[#fafafa]">{p.title}</h3>
                      </div>
                      <p className="text-sm text-[#a1a1aa] leading-relaxed">{p.desc}</p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-16">
                <h3 className="text-xl font-bold text-[#fafafa] mb-8">Values</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {values.map((v) => (
                    <div key={v.title}>
                      <h4 className="text-[#d4af37] font-semibold text-sm mb-2">{v.title}</h4>
                      <p className="text-sm text-[#a1a1aa] leading-relaxed">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold text-[#fafafa] mb-6">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <span
                      key={interest}
                      className="text-sm px-4 py-2 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] text-[#a1a1aa]"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </SectionBody>
          </div>
        </Section>

        <Section className="text-center">
          <SectionHeader
            label="Connect"
            title="Let's build"
            description="Partnerships across finance, logistics, or security."
            align="center"
            icon={Mail}
          />
          <div className="flex justify-center mt-8">
            <Button
              href={`mailto:${siteConfig.email}`}
              variant="primary"
              size="lg"
              icon={Mail}
              showArrow
            >
              Get in touch
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
