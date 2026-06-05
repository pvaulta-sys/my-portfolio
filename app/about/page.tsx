'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/Navigation';
import { PageHero } from '@/components/PageHero';
import { Section, SectionBody } from '@/components/layout/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { IconBox } from '@/components/ui/IconBox';
import { Button } from '@/components/ui/Button';
import {
  User,
  Scale,
  Shield,
  Cog,
  TrendingUp,
  Sparkles,
  Heart,
  Code2,
  BookOpen,
  Users,
  Mail,
} from 'lucide-react';
import { siteConfig } from '@/lib/site';
import Footer from '@/components/Footer';

const principles = [
  {
    title: 'Trust by design',
    desc: 'Auditability and transparency are engineered into every layer—not bolted on later.',
    icon: Shield,
  },
  {
    title: 'Systems thinking',
    desc: 'Finance, logistics, and security are connected operational domains—not isolated tools.',
    icon: Cog,
  },
  {
    title: 'Built to scale',
    desc: 'Architecture that holds under real operational load, multi-tenant growth, and compliance.',
    icon: TrendingUp,
  },
  {
    title: 'Operator mindset',
    desc: 'I build for the people running the business: founders, operators, analysts, and teams on the ground.',
    icon: Users,
  },
];

const values = [
  {
    title: 'Craft over speed',
    desc: 'Well-architected systems outlast rushed ones. I prioritize sound design over shipping fast at the cost of quality.',
    icon: Code2,
  },
  {
    title: 'Continuous learning',
    desc: 'Finance, security, and technology evolve constantly. Staying curious is a professional requirement.',
    icon: BookOpen,
  },
  {
    title: 'People first',
    desc: 'Every system serves people—operators, analysts, founders. I build for the humans in the loop.',
    icon: Heart,
  },
];

const personalInterests = [
  'Studying financial markets and macroeconomics',
  'Contributing to open-source infrastructure tooling',
  'Writing about systems design and operational thinking',
  'Exploring new programming languages and paradigms',
  'Building automation for everyday productivity',
];

export default function AboutPage() {
  const { ref: storyRef, inView: storyIn } = useInView({ threshold: 0.08, triggerOnce: true });
  const { ref: principlesRef, inView: principlesIn } = useInView({ threshold: 0.08, triggerOnce: true });
  const { ref: valuesRef, inView: valuesIn } = useInView({ threshold: 0.08, triggerOnce: true });
  const { ref: interestsRef, inView: interestsIn } = useInView({ threshold: 0.08, triggerOnce: true });
  const { ref: ctaRef, inView: ctaIn } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <div className="site-shell">
      <Navigation />
      <main>
        <PageHero
          icon={User}
          label="About"
          title="Systems builder at the intersection of finance, logistics, and security"
          description="I design and build infrastructure products that help organizations operate with greater trust, visibility, and control."
        />

        <Section>
          <div ref={storyRef}>
            <SectionHeader
              label="Background"
              title="Founder story"
              icon={User}
            />
            <SectionBody narrow>
              <motion.div
                className="flex flex-col gap-5"
                initial={{ opacity: 0, y: 14 }}
                animate={storyIn ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55 }}
              >
                <p className="text-[1.0625rem] leading-relaxed text-[#a1a1aa]">
                  My journey started with a simple observation: most organizations run on fragile infrastructure.
                  Financial operations depend on spreadsheets. Logistics teams piece together disjointed tools.
                  Security teams react instead of prevent. These aren&apos;t technology problems alone—they&apos;re
                  systems problems.
                </p>
                <p className="text-[1.0625rem] leading-relaxed text-[#a1a1aa]">
                  I began building software in 2018, working across full-stack development, financial systems,
                  and security tooling. Each domain taught me that the best products are built by people who
                  understand the operational reality—not just the code. I&apos;ve led engineering teams, designed
                  treasury platforms, built logistics tracking systems, and created security automation pipelines.
                </p>
                <p className="text-[1.0625rem] leading-relaxed text-[#a1a1aa]">
                  Today, I focus on infrastructure products that sit at the operational core of organizations:
                  where money moves, goods move, and risk is managed. My work spans treasury workflows,
                  shipment operations, and security automation—systems that improve trust, visibility, and
                  efficiency as operations scale.
                </p>
              </motion.div>
            </SectionBody>
          </div>
        </Section>

        <Section variant="surface">
          <div ref={principlesRef}>
            <SectionHeader
              label="Foundation"
              title="Operating principles"
              description="How I build—as an architect, operator, and founder."
              icon={Scale}
            />
            <SectionBody>
              <div className="grid-cards grid-cards--2">
                {principles.map((p, i) => (
                  <motion.div
                    key={p.title}
                    className="card-elevated rounded-2xl p-8 lg:p-10"
                    initial={{ opacity: 0, y: 14 }}
                    animate={principlesIn ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.05 }}
                  >
                    <IconBox icon={p.icon} size="md" className="mb-5" />
                    <h3 className="text-lg font-bold text-[#fafafa] mb-2">{p.title}</h3>
                    <p className="text-[0.9375rem] text-[#a1a1aa] leading-relaxed">{p.desc}</p>
                  </motion.div>
                ))}
              </div>
            </SectionBody>
          </div>
        </Section>

        <Section>
          <div ref={valuesRef}>
            <SectionHeader
              label="Values"
              title="What I believe in"
              description="The principles that guide my work and decisions."
              icon={Sparkles}
            />
            <SectionBody>
              <div className="grid-cards grid-cards--2">
                {values.map((v, i) => (
                  <motion.div
                    key={v.title}
                    className="card-elevated rounded-2xl p-8 lg:p-10"
                    initial={{ opacity: 0, y: 14 }}
                    animate={valuesIn ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.05 }}
                  >
                    <IconBox icon={v.icon} size="md" className="mb-5" />
                    <h3 className="text-lg font-bold text-[#fafafa] mb-2">{v.title}</h3>
                    <p className="text-[0.9375rem] text-[#a1a1aa] leading-relaxed">{v.desc}</p>
                  </motion.div>
                ))}
              </div>
            </SectionBody>
          </div>
        </Section>

        <Section variant="surface">
          <div ref={interestsRef}>
            <SectionHeader
              label="Personal"
              title="Beyond the code"
              description="What keeps me engaged outside of building products."
              icon={BookOpen}
            />
            <SectionBody narrow>
              <motion.ul
                className="flex flex-col gap-2"
                initial={{ opacity: 0, y: 14 }}
                animate={interestsIn ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                {personalInterests.map((interest, i) => (
                  <motion.li
                    key={interest}
                    className="card-glass rounded-xl p-4 flex items-center gap-3 text-[0.9375rem] text-[#a1a1aa] leading-relaxed"
                    initial={{ opacity: 0, x: -8 }}
                    animate={interestsIn ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.04 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shrink-0" aria-hidden />
                    {interest}
                  </motion.li>
                ))}
              </motion.ul>
            </SectionBody>
          </div>
        </Section>

        <Section className="text-center">
          <div ref={ctaRef}>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={ctaIn ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <SectionHeader
                label="Connect"
                title="Let&apos;s build something"
                description="I&apos;m always interested in hearing about ambitious infrastructure projects."
                align="center"
                icon={Mail}
                className="!mb-8"
              />
              <Button
                href={`mailto:${siteConfig.email}`}
                variant="primary"
                size="lg"
                icon={Mail}
                showArrow
                className="mx-auto"
              >
                Get in touch
              </Button>
            </motion.div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
