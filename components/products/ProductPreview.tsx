import type { ProjectId } from '@/lib/projects';
import { ProductFrame } from './ProductFrame';
import { VaultaPreview } from './VaultaPreview';
import { CourierPreview } from './CourierPreview';
import { AegisPreview } from './AegisPreview';

const labels: Record<ProjectId, string> = {
  vaulta: 'vaulta.app — treasury console',
  courier: 'courier.ops — logistics command',
  aegis: 'aegis.sec — security operations',
};

export function ProductPreview({ id }: { id: ProjectId }) {
  const Preview =
    id === 'vaulta' ? VaultaPreview : id === 'courier' ? CourierPreview : AegisPreview;

  return (
    <ProductFrame projectId={id} label={labels[id]}>
      <Preview />
    </ProductFrame>
  );
}
