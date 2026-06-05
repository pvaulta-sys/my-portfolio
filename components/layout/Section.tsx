import type { ReactNode } from 'react';

type SectionVariant = 'default' | 'surface' | 'inset';
type SectionSize = 'default' | 'hero' | 'tight';

const variantClass: Record<SectionVariant, string> = {
  default: 'page-section',
  surface: 'page-section page-section--surface',
  inset: 'page-section page-section--inset',
};

const sizeClass: Record<SectionSize, string> = {
  default: '',
  hero: 'page-section--hero',
  tight: 'page-section--tight',
};

type SectionProps = {
  id?: string;
  variant?: SectionVariant;
  size?: SectionSize;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  variant = 'default',
  size = 'default',
  children,
  className = '',
}: SectionProps) {
  return (
    <section id={id} className={`${variantClass[variant]} ${sizeClass[size]} ${className}`.trim()}>
      <div className="page-container">{children}</div>
    </section>
  );
}

type SectionBlockProps = {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
};

/** Standard vertical rhythm between section header and content */
export function SectionBody({ children, className = '', narrow = false }: SectionBlockProps) {
  return (
    <div className={`section-body ${narrow ? 'section-body--narrow' : ''} ${className}`.trim()}>
      {children}
    </div>
  );
}
