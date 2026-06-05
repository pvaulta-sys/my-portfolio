export type ThinkingArticleMeta = {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  publishedAt: string;
  published: boolean;
  tags: string[];
};

export const thinkingCatalog: ThinkingArticleMeta[] = [
  {
    slug: 'infrastructure-is-the-product',
    title: 'Infrastructure is the product',
    description: 'Why founders should think in operational layers — not features.',
    readTime: '8 min',
    publishedAt: '2026-06-01',
    published: true,
    tags: ['systems-thinking', 'product-design', 'infrastructure'],
  },
  {
    slug: 'why-trust-is-infrastructure',
    title: 'Why Trust Is Infrastructure',
    description: 'Trust is not a brand attribute — it is an architectural constraint.',
    readTime: '9 min',
    publishedAt: '2026-06-05',
    published: true,
    tags: ['trust', 'infrastructure', 'systems-thinking'],
  },
  {
    slug: 'building-systems-instead-of-features',
    title: 'Building Systems Instead Of Features',
    description: 'Features win demos. Systems win the second year.',
    readTime: '7 min',
    publishedAt: '2026-06-08',
    published: true,
    tags: ['product-design', 'systems-thinking', 'infrastructure'],
  },
  {
    slug: 'treasury-as-operating-system',
    title: 'Treasury As An Operating System',
    description: 'Why Vaulta is a platform for financial operations — not a point solution.',
    readTime: '9 min',
    publishedAt: '2026-06-12',
    published: true,
    tags: ['finance', 'infrastructure', 'platform-design'],
  },
  {
    slug: 'trust-across-domains',
    title: 'Trust across domains',
    description: 'Finance, logistics, and security share the same systems problem.',
    readTime: '10 min',
    publishedAt: '2026-06-10',
    published: true,
    tags: ['systems-thinking', 'cross-domain', 'trust'],
  },
  {
    slug: 'operational-excellence-at-scale',
    title: 'Operational Excellence At Scale',
    description: 'What infrastructure teams can learn from financial operations.',
    readTime: '11 min',
    publishedAt: '',
    published: false,
    tags: ['operations', 'infrastructure', 'scale'],
  },
  {
    slug: 'visibility-creates-better-decisions',
    title: 'Visibility Creates Better Decisions',
    description: 'Why operational awareness is the highest-leverage investment for security and infrastructure teams.',
    readTime: '6 min',
    publishedAt: '',
    published: false,
    tags: ['visibility', 'operations', 'security'],
  },
  {
    slug: 'building-aegis',
    title: 'Building AEGIS',
    description: 'Dashboard + CLI for serious security operations.',
    readTime: '7 min',
    publishedAt: '',
    published: false,
    tags: ['security', 'product-design', 'cli'],
  },
  {
    slug: 'logistics-as-command-centers',
    title: 'Logistics as command centers',
    description: 'Real-time visibility as infrastructure, not a tracking page.',
    readTime: '12 min',
    publishedAt: '',
    published: false,
    tags: ['logistics', 'real-time', 'infrastructure'],
  },
  {
    slug: 'operator-founder-mindset',
    title: 'Operator-founder mindset',
    description: 'Building for the people running the business.',
    readTime: '11 min',
    publishedAt: '',
    published: false,
    tags: ['founder', 'product-design', 'operations'],
  },
];

export function getThinkingArticle(slug: string): ThinkingArticleMeta | undefined {
  return thinkingCatalog.find((a) => a.slug === slug);
}

export function getPublishedThinkingArticles(): ThinkingArticleMeta[] {
  return thinkingCatalog.filter((a) => a.published);
}

export function getThinkingSlugs(): string[] {
  return thinkingCatalog.filter((a) => a.published).map((a) => a.slug);
}

export function getAllTags(): string[] {
  const set = new Set<string>();
  thinkingCatalog.forEach((a) => a.tags.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}

export function getRelatedArticles(slug: string, count = 2): ThinkingArticleMeta[] {
  const article = getThinkingArticle(slug);
  if (!article) return [];
  return thinkingCatalog
    .filter((a) => a.slug !== slug && a.published)
    .map((a) => ({
      ...a,
      relevance: a.tags.filter((t) => article.tags.includes(t)).length,
    }))
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, count);
}
