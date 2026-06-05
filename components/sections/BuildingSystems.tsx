'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, SectionBody } from '@/components/layout/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { ProductPreview } from '@/components/products/ProductPreview';
import { Button } from '@/components/ui/Button';
import { projects, projectStatusClass, type Project } from '@/lib/projects';
import { Layers } from 'lucide-react';

const accentBorder: Record<Project['accent'], string> = {
  gold: 'product-showcase--gold',
  blue: 'product-showcase--blue',
  emerald: 'product-showcase--emerald',
};

function ProductShowcase({
  project,
  index,
  inView,
}: {
  project: Project;
  index: number;
  inView: boolean;
}) {
  const reversed = index % 2 === 1;
  const Icon = project.icon;

  return (
    <motion.article
      id={project.id}
      className={`product-showcase ${accentBorder[project.accent]} ${reversed ? 'product-showcase--reverse' : ''}`}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="product-showcase__copy">
        <div className="product-showcase__meta">
          <span className={`product-showcase__icon product-showcase__icon--${project.accent}`}>
            <Icon size={18} strokeWidth={1.75} />
          </span>
          <span className="section-label">{project.category}</span>
          <span
            className={`product-status ${projectStatusClass[project.status]} product-status--${project.accent}`}
          >
            <span className="product-status__dot" aria-hidden />
            {project.statusLabel}
          </span>
        </div>
        <h3 className="product-showcase__title">{project.title}</h3>
        {project.subtitle ? (
          <p className="product-showcase__subtitle">{project.subtitle}</p>
        ) : null}
        <p className="product-showcase__desc">{project.description}</p>
        <p className="product-showcase__proof">{project.proof}</p>
        <ul className="product-showcase__caps">
          {project.capabilities.map((cap) => (
            <li key={cap}>{cap}</li>
          ))}
        </ul>
        <div className="product-showcase__actions">
          <Button
            href={project.action.href}
            variant="primary"
            size="md"
            showArrow
            external={project.action.external}
          >
            {project.action.label}
          </Button>
        </div>
      </div>
      <div className="product-showcase__visual">
        <ProductPreview id={project.id} />
      </div>
    </motion.article>
  );
}

const BuildingSystems = () => {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <Section id="building-systems" variant="surface">
      <div ref={ref}>
        <SectionHeader
          label="What I am building"
          title="Building systems"
          description="Infrastructure products across finance, logistics, and security—each built as a company, a vision, and an operational layer."
          icon={Layers}
        />
        <SectionBody className="!gap-16 lg:!gap-24">
          {projects.map((project, index) => (
            <ProductShowcase key={project.id} project={project} index={index} inView={inView} />
          ))}
        </SectionBody>
      </div>
    </Section>
  );
};

export default BuildingSystems;
