'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { PageHero } from '@/components/PageHero';
import { Section, SectionBody } from '@/components/layout/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Lightbulb, Clock, Mail, ArrowUpRight, Tag, X } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { thinkingCatalog, getAllTags } from '@/lib/thinking';
import Footer from '@/components/Footer';

const allTags = getAllTags();

export default function ThinkingPage() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });
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
        <PageHero
          icon={Lightbulb}
          label="Thinking"
          title="Founder thinking"
          description="Notes on infrastructure, systems design, and building products that scale."
        />

        <Section>
          <div ref={ref}>
            {allTags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-8">
                <span className="text-xs font-semibold text-[#a1a1aa] uppercase tracking-wider mr-1">
                  Filter
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
                    <Tag size={11} aria-hidden />
                    {tag.replace(/-/g, ' ')}
                  </button>
                ))}
                {activeTag && (
                  <button
                    onClick={() => setActiveTag(null)}
                    className="inline-flex items-center gap-1 text-xs text-[#a1a1aa] hover:text-[#fafafa] transition-colors ml-1"
                  >
                    <X size={14} />
                    Clear
                  </button>
                )}
              </div>
            )}
            <SectionBody className="!mt-0">
              <div className="grid-cards grid-cards--2">
                {filtered.map((article, i) => (
                  <motion.article
                    key={article.slug}
                    className="card-elevated rounded-lg p-8 lg:p-10 flex flex-col"
                    initial={{ opacity: 0, y: 14 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.04 }}
                  >
                    {article.published ? (
                      <Link
                        href={`/thinking/${article.slug}`}
                        className="thinking-card-link group flex flex-col flex-grow"
                      >
                        <span className="inline-flex items-center gap-1.5 w-fit text-[0.625rem] font-bold uppercase tracking-wider text-[#34d399] px-2.5 py-1 rounded-full bg-[rgba(52,211,153,0.08)] border border-[#34d399]/20 mb-4">
                          Published
                        </span>
                        <h2 className="text-lg font-bold text-[#fafafa] mb-2 leading-snug group-hover:text-[#d4af37] transition-colors">
                          {article.title}
                        </h2>
                        <p className="text-sm text-[#a1a1aa] leading-relaxed flex-grow">
                          {article.description}
                        </p>
                        <p className="text-xs text-[#d4af37] mt-5 pt-4 border-t border-[rgba(255,255,255,0.06)] inline-flex items-center gap-1 font-semibold">
                          Read essay
                          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden />
                        </p>
                        <p className="text-xs text-[#a1a1aa]/60 mt-2">{article.readTime} read</p>
                      </Link>
                    ) : (
                      <>
                        <span className="inline-flex items-center gap-1.5 w-fit text-[0.625rem] font-bold uppercase tracking-wider text-[#d4af37] px-2.5 py-1 rounded-full bg-[rgba(212,175,55,0.08)] border border-[#d4af37]/15 mb-4">
                          <Clock size={11} aria-hidden />
                          Soon
                        </span>
                        <h2 className="text-lg font-bold text-[#fafafa] mb-2 leading-snug">
                          {article.title}
                        </h2>
                        <p className="text-sm text-[#a1a1aa] leading-relaxed flex-grow">
                          {article.description}
                        </p>
                        <p className="text-xs text-[#a1a1aa]/60 mt-5 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                          {article.readTime} read
                        </p>
                      </>
                    )}
                  </motion.article>
                ))}
                {filtered.length === 0 && (
                  <p className="text-sm text-[#a1a1aa] col-span-full text-center py-12">
                    No articles match this tag.
                  </p>
                )}
              </div>
            </SectionBody>
          </div>
        </Section>

        <Section variant="surface" className="text-center">
          <SectionHeader
            label="Updates"
            title="More ideas coming soon"
            description="Reach out to hear when new writing on infrastructure is published."
            align="center"
            icon={Mail}
            className="!mb-8"
          />
          <Button
            href={`mailto:${siteConfig.email}?subject=Thinking%20updates`}
            variant="secondary"
            size="lg"
            icon={Mail}
            showArrow
            className="mx-auto"
          >
            Get updates
          </Button>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
