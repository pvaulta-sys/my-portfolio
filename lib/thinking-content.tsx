import type { ComponentType } from 'react';
import { InfrastructureIsTheProduct } from '@/components/thinking/InfrastructureIsTheProduct';
import { WhyTrustIsInfrastructure } from '@/components/thinking/WhyTrustIsInfrastructure';
import { BuildingSystemsInsteadOfFeatures } from '@/components/thinking/BuildingSystemsInsteadOfFeatures';
import { TreasuryAsOperatingSystem } from '@/components/thinking/TreasuryAsOperatingSystem';
import { TrustAcrossDomains } from '@/components/thinking/TrustAcrossDomains';

const articleBodies: Record<string, ComponentType> = {
  'infrastructure-is-the-product': InfrastructureIsTheProduct,
  'why-trust-is-infrastructure': WhyTrustIsInfrastructure,
  'building-systems-instead-of-features': BuildingSystemsInsteadOfFeatures,
  'treasury-as-operating-system': TreasuryAsOperatingSystem,
  'trust-across-domains': TrustAcrossDomains,
};

export function getThinkingArticleBody(slug: string): ComponentType | undefined {
  return articleBodies[slug];
}
