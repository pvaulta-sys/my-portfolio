import type { ComponentType } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import SocialShare from '@/components/SocialShare';
import BlogComments from '@/components/BlogComments';
import { InfrastructureIsTheProduct } from '@/components/thinking/InfrastructureIsTheProduct';
import { TrustAcrossDomains } from '@/components/thinking/TrustAcrossDomains';
import { TreasuryAsOperatingSystem } from '@/components/thinking/TreasuryAsOperatingSystem';
import { getThinkingArticle, getThinkingSlugs, getRelatedArticles } from '@/lib/thinking';
import { siteConfig } from '@/lib/site';
import Footer from '@/components/Footer';

const bodyComponents: Record<string, ComponentType> = {
  'infrastructure-is-the-product': InfrastructureIsTheProduct,
  'trust-across-domains': TrustAcrossDomains,
  'treasury-as-operating-system': TreasuryAsOperatingSystem,
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getThinkingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getThinkingArticle(slug);
  if (!article?.published) {
    return { title: 'Not found' };
  }
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [siteConfig.fullName],
      tags: article.tags,
    },
  };
}

export default async function ThinkingArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getThinkingArticle(slug);
  const Body = bodyComponents[slug];

  if (!article?.published || !Body) {
    notFound();
  }

  const published = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: siteConfig.fullName,
      url: siteConfig.url,
    },
    datePublished: article.publishedAt,
    publisher: {
      '@type': 'Person',
      name: siteConfig.fullName,
    },
    url: `${siteConfig.url}/thinking/${slug}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Thinking', item: `${siteConfig.url}/thinking` },
      { '@type': 'ListItem', position: 3, name: article.title },
    ],
  };

  const related = getRelatedArticles(slug);

  return (
    <>
      <ReadingProgressBar />
      <div className="site-shell">
        <Navigation />
        <main>
          <header className="article-header">
            <div className="page-container article-header__inner">
              <Link href="/thinking" className="article-back">
                <ArrowLeft size={16} aria-hidden />
                Back to Thinking
              </Link>
              <p className="section-label">Essay</p>
              <h1 className="article-header__title">{article.title}</h1>
              <p className="article-header__desc">{article.description}</p>
              <div className="article-header__meta">
                <span className="article-meta-item">
                  <Calendar size={14} aria-hidden />
                  {published}
                </span>
                <span className="article-meta-item">{article.readTime} read</span>
                <span className="article-meta-item">{siteConfig.fullName}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {article.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/thinking?tag=${tag}`}
                    className="inline-flex items-center gap-1.5 text-[0.625rem] font-bold uppercase tracking-wider text-[#d4af37] px-2.5 py-1 rounded-full bg-[rgba(212,175,55,0.08)] border border-[#d4af37]/15 hover:bg-[rgba(212,175,55,0.15)] transition-colors"
                  >
                    <Tag size={10} aria-hidden />
                    {tag.replace(/-/g, ' ')}
                  </Link>
                ))}
              </div>
            </div>
          </header>

          <div className="page-container article-body-wrap">
            <Body />
            <SocialShare title={article.title} slug={slug} />
            <BlogComments slug={slug} />
          </div>
        </main>

        {related.length > 0 && (
          <section className="page-section">
            <div className="page-container">
              <h2 className="section-header__title mb-6">Related reading</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/thinking/${r.slug}`}
                    className="card-elevated rounded-xl p-6 group"
                  >
                    <h3 className="text-base font-bold text-[#fafafa] mb-1.5 group-hover:text-[#d4af37] transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-sm text-[#a1a1aa] leading-relaxed">{r.description}</p>
                    <p className="text-xs text-[#a1a1aa]/60 mt-3">{r.readTime} read</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}
