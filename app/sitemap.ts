import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { getPublishedThinkingArticles } from '@/lib/thinking';
import { projects } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const articles = getPublishedThinkingArticles();

  const staticRoutes = [
    { url: siteConfig.url, changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${siteConfig.url}/building`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteConfig.url}/thinking`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${siteConfig.url}/privacy`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${siteConfig.url}/terms`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${siteConfig.url}/resume`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${siteConfig.url}/about`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${siteConfig.url}/projects`, changeFrequency: 'monthly' as const, priority: 0.8 },
  ];

  const articleRoutes = articles.map((article) => ({
    url: `${siteConfig.url}/thinking/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes.map((r) => ({ ...r, lastModified })),
    ...articleRoutes,
    ...projectRoutes,
  ];
}
