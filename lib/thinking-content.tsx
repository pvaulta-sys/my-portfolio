import type { ComponentType } from 'react';
import { InfrastructureIsTheProduct } from '@/components/thinking/InfrastructureIsTheProduct';

const articleBodies: Record<string, ComponentType> = {
  'infrastructure-is-the-product': InfrastructureIsTheProduct,
};

export function getThinkingArticleBody(slug: string): ComponentType | undefined {
  return articleBodies[slug];
}
