'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/Navigation';
import { PageHero } from '@/components/PageHero';
import { Section, SectionBody } from '@/components/layout/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/Button';
import {
  GraduationCap,
  Code2,
  Award,
  Download,
  Mail,
  FileText,
  Printer,
} from 'lucide-react';
import { siteConfig } from '@/lib/site';
import Footer from '@/components/Footer';

const education = [
  {
    period: '2018 – 2022',
    title: 'Certified Software Engineer',
    school: 'National Institute of Information Technology, Port Harcourt',
    desc: 'Software engineering foundations, algorithms, data structures, and systems design. Practical training in modern development practices and infrastructure thinking.',
  },
  {
    period: '2023',
    title: 'Financial Modeling & Valuation',
    school: 'Corporate Finance Institute',
    desc: 'Advanced financial analysis, valuation methods, and treasury operations certification.',
  },
];

const skills = [
  {
    name: 'TypeScript / JavaScript',
    desc: 'Core language for frontend and backend systems, type-safe development across the stack.',
  },
  {
    name: 'React / Next.js',
    desc: 'Building performant, accessible interfaces with modern React patterns and the App Router.',
  },
  {
    name: 'Python',
    desc: 'Data processing, automation scripts, and backend services for financial and security tooling.',
  },
  {
    name: 'Node.js',
    desc: 'Server-side APIs, microservices, and real-time data pipelines in production.',
  },
  {
    name: 'Financial Analysis',
    desc: 'Treasury modeling, risk assessment, reconciliation, and financial reporting systems.',
  },
  {
    name: 'Treasury Systems',
    desc: 'Multi-currency ledgers, approval workflows, and compliance-aware financial infrastructure.',
  },
  {
    name: 'System Architecture',
    desc: 'Designing distributed systems, event-driven architectures, and scalable backend services.',
  },
  {
    name: 'Cloud Infrastructure',
    desc: 'Deploying and managing production workloads on AWS, including containerization and CI/CD.',
  },
  {
    name: 'Security Tooling',
    desc: 'Vulnerability scanning, incident response automation, and security audit infrastructure.',
  },
  {
    name: 'API Design',
    desc: 'RESTful and GraphQL APIs built for reliability, clarity, and long-term maintainability.',
  },
  {
    name: 'Database Design',
    desc: 'Relational and document database modeling for operational and analytical workloads.',
  },
  {
    name: 'DevOps',
    desc: 'Infrastructure as code, deployment pipelines, monitoring, and operational reliability.',
  },
];

const certifications = [
  {
    title: 'AWS Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
  },
  {
    title: 'Certified Kubernetes Administrator',
    issuer: 'CNCF',
  },
  {
    title: 'Financial Risk Manager (FRM) – Level I',
    issuer: 'GARP',
  },
  {
    title: 'ISC2 Certified in Cybersecurity',
    issuer: 'ISC2',
  },
];

export default function ResumePage() {
  const { ref: eduRef, inView: eduIn } = useInView({ threshold: 0.08, triggerOnce: true });
  const { ref: skillRef, inView: skillIn } = useInView({ threshold: 0.08, triggerOnce: true });
  const { ref: certRef, inView: certIn } = useInView({ threshold: 0.08, triggerOnce: true });
  const { ref: ctaRef, inView: ctaIn } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <div className="site-shell">
      <Navigation />
      <main>
        <PageHero
          icon={GraduationCap}
          label="Resume"
          title="Background & Capabilities"
          description="Education, technical skills, and professional certifications."
        />

        <Section>
          <div ref={eduRef}>
            <SectionHeader
              label="Learning"
              title="Education"
              description="Formal education and professional training."
              icon={GraduationCap}
            />
            <SectionBody>
              <ol className="journey-list">
                {education.map((item, i) => (
                  <motion.li
                    key={item.title}
                    className="journey-list__item"
                    initial={{ opacity: 0, x: -12 }}
                    animate={eduIn ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.06 }}
                  >
                    <span className="journey-list__year">{item.period}</span>
                    <div className="journey-list__content">
                      <h3 className="journey-list__title">{item.title}</h3>
                      <p className="text-[0.8125rem] text-[#d4af37] font-medium mb-1">{item.school}</p>
                      <p className="journey-list__desc">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </SectionBody>
          </div>
        </Section>

        <Section variant="surface">
          <div ref={skillRef}>
            <SectionHeader
              label="Expertise"
              title="Skills"
              description="Technologies and disciplines I work with daily."
              icon={Code2}
            />
            <SectionBody>
              <div className="grid-cards grid-cards--3">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className="card-elevated rounded-xl p-6"
                    initial={{ opacity: 0, y: 14 }}
                    animate={skillIn ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.04 }}
                  >
                    <h3 className="text-[0.9375rem] font-bold text-[#fafafa] mb-1.5">{skill.name}</h3>
                    <p className="text-[0.8125rem] text-[#a1a1aa] leading-relaxed">{skill.desc}</p>
                  </motion.div>
                ))}
              </div>
            </SectionBody>
          </div>
        </Section>

        <Section>
          <div ref={certRef}>
            <SectionHeader
              label="Credentials"
              title="Certifications"
              description="Professional certifications across cloud, security, and finance."
              icon={Award}
            />
            <SectionBody>
              <div className="grid gap-3">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={cert.title}
                    className="card-glass rounded-xl p-6 flex items-center justify-between gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={certIn ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div>
                      <h3 className="text-[0.9375rem] font-bold text-[#fafafa]">{cert.title}</h3>
                      <p className="text-[0.8125rem] text-[#a1a1aa]">{cert.issuer}</p>
                    </div>
                    <FileText size={18} className="text-[#d4af37] shrink-0 opacity-60" aria-hidden />
                  </motion.div>
                ))}
              </div>
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
                label="Contact"
                title="Download or reach out"
                description="I'm always open to new opportunities and conversations."
                align="center"
                icon={Download}
                className="!mb-8"
              />
              <div className="flex flex-wrap gap-3 justify-center">
                  <Button
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent('Regarding your background — Ogunleye Amos Ayodeji')}`}
                  variant="primary"
                  size="lg"
                  icon={Download}
                  showArrow
                >
                  Download PDF
                </Button>
                <Button
                  href={`mailto:${siteConfig.email}`}
                  variant="secondary"
                  size="lg"
                  icon={Mail}
                >
                  Get in touch
                </Button>
                <Button
                  onClick={() => window.print()}
                  variant="ghost"
                  size="lg"
                  icon={Printer}
                >
                  Print
                </Button>
              </div>
            </motion.div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
