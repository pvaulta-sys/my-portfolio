import type { ReactNode } from 'react';
import type { ProjectId } from '@/lib/projects';

type ProductFrameProps = {
  projectId: ProjectId;
  label: string;
  children: ReactNode;
};

const chromeClass: Record<ProjectId, string> = {
  vaulta: 'product-frame--gold',
  courier: 'product-frame--blue',
  aegis: 'product-frame--emerald',
};

export function ProductFrame({ projectId, label, children }: ProductFrameProps) {
  return (
    <div className={`product-frame ${chromeClass[projectId]}`}>
      <div className="product-frame__chrome">
        <div className="product-frame__dots" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <span className="product-frame__label">{label}</span>
      </div>
      <div className="product-frame__viewport">{children}</div>
    </div>
  );
}
