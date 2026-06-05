'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { ArrowUpRight, Calendar, Clock, Tag, X, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { thinkingCatalog, getAllTags } from '@/lib/thinking';

const allTags = getAllTags();

export default function ThinkingPage() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      activeTag
        ? thinkingCatalog.filter((a) => a.tags.includes(activeTag))
        : thinkingCatalog,
    [activeTag],
  );

  return (
    <div className="site-shell">
      <Navigation />
      <main>
        {/* ─── HERO ─── */}
        <section className="relative pt-40 pb-20 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-0 right-0 w-[500px] h-[500px] opacity-50"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(212,175,55,0.05) 0%, transparent 60%)',
              }}
            />
          </div>
          <div className="page-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <div className="w-10 h-px bg-[#d4af37]/70 mb-8" />
              <h1 className="text-[clamp(2.75rem,6vw,4.5rem)] font-bold tracking-[-0.04em] leading-[1.05] text-[#fafafa] mb-5">
                Thinking
              </h1>
              <p className="text-[clamp(1.0625rem,2vw,1.25rem)] text-[#a1a1aa] max-w-2xl leading-relaxed">
                Notes on systems, infrastructure, finance, operations, and product building.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── ARTICLES ─── */}
        <section className="page-section pt-0">
          <div className="page-container">
            <div ref={ref}>
              {/* Tag filter */}
              {allTags.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-[rgba(255,255,255,0.06)]">
                  <span className="text-xs font-medium text-[#a1a1aa] mr-1">
                    Browse
                  </span>
                  <button
                    onClick={() => setActiveTag(null)}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                      activeTag === null
                        ? 'bg-[#d4af37] text-[#050505] border-[#d4af37]'
                        : 'text-[#a1a1aa] border-[rgba(255,255,255,0.1)] hover:text-[#fafafa] hover:border-[#d4af37]/30'
                    }`}
                  >
                    All
                  </button>
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                        activeTag === tag
                          ? 'bg-[#d4af37] text-[#050505] border-[#d4af37]'
                          : 'text-[#a1a1aa] border-[rgba(255,255,255,0.1)] hover:text-[#fafafa] hover:border-[#d4af37]/30'
                      }`}
                    >
                      {tag.replace(/-/g, ' ')}
                    </button>
                  ))}
                  {activeTag && (
                    <button
                      onClick={() => setActiveTag(null)}
                      className="inline-flex items-center gap-1 text-xs text-[#a1a1aa] hover:text-[#fafafa] transition-colors ml-1"
                      aria-label="Clear filter"
                    >
                      <X size={14} />
                      Clear
                    </button>
                  )}
                </div>
              )}

              {/* Article grid */}
              <div className="grid gap-6 md:grid-cols-2">
                {filtered.map((article, i) => (
                  <motion.article
                    key={article.slug}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.05, duration: 0.45 }}
                  >
                    {article.published ? (
                      <Link
                        href={`/thinking/${article.slug}`}
                        className="group block rounded-xl p-6 md:p-8 bg-[rgba(255,255,255,0.015)] border border-[rgba(255,255,255,0.06)] hover:border-[#d4af37]/20 transition-colors"
                      >
                        <div className="flex flex-col min-h-0">
                          <h2 className="text-lg md:text-xl font-bold text-[#fafafa] leading-snug mb-3 group-hover:text-[#d4af37] transition-colors">
                            {article.title}
                          </h2>
                          <p className="text-sm text-[#a1a1aa] leading-relaxed mb-5">
                            {article.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#a1a1aa]/60 mt-auto">
                            {article.publishedAt && (
                              <span className="inline-flex items-center gap-1.5">
                                <Calendar size={12} aria-hidden />
                                {new Date(article.publishedAt).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric',
                                })}
                              </span>
                            )}
                            <span className="inline-flex items-center gap-1.5">
                              <Clock size={12} aria-hidden />
                              {article.readTime}
                            </span>
                            {article.tags.length > 0 && (
                              <span className="inline-flex items-center gap-1.5 text-[#d4af37]/70">
                                <Tag size={12} aria-hidden />
                                {article.tags.slice(0, 2).join(' · ')}
                              </span>
                            )}
                          </div>
                          <span className="text-xs font-semibold text-[#d4af37] mt-4 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            Read
                            <ArrowUpRight size={13} aria-hidden />
                          </span>
                        </div>
                      </Link>
                    ) : (
                      <div className="block rounded-xl p-6 md:p-8 bg-[rgba(255,255,255,0.01)] border border-[rgba(255,255,255,0.04)] opacity-70">
                        <div className="flex flex-col min-h-0">
                          <h2 className="text-lg md:text-xl font-bold text-[#fafafa] leading-snug mb-3">
                            {article.title}
                          </h2>
                          <p className="text-sm text-[#a1a1aa] leading-relaxed mb-5">
                            {article.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#a1a1aa]/60 mt-auto">
                            <span className="inline-flex items-center gap-1.5">
                              <Clock size={12} aria-hidden />
                              {article.readTime}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-[#d4af37]/50">
                              Coming soon
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.article>
                ))}
                {filtered.length === 0 && (
                  <p className="text-sm text-[#a1a1aa] col-span-full text-center py-16">
                    No articles match this tag.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="page-section text-center">
          <div className="page-container max-w-xl">
            <div className="w-10 h-px bg-[#d4af37]/50 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#fafafa] mb-3 tracking-[-0.02em]">
              More writing on the way
            </h2>
            <p className="text-sm text-[#a1a1aa] mb-7 max-w-md mx-auto leading-relaxed">
              Future posts will explore infrastructure, security, finance, and the systems that
              connect them.
            </p>
            <Button
              href={`mailto:${siteConfig.email}?subject=Thinking%20updates`}
              variant="secondary"
              size="lg"
              icon={Mail}
              showArrow
              className="mx-auto"
            >
              Get notified
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
