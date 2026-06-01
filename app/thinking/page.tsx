'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { useInView } from 'react-intersection-observer';

export default function Thinking() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const articles = [
    {
      title: 'Why Trust Is Infrastructure',
      description: 'Trust is not a feature. It\'s the foundation of every financial system that scales.',
      date: 'Coming Soon',
      readTime: '8 min read'
    },
    {
      title: 'Treasury Is The Operating System Of Business',
      description: 'Understanding why treasury operations deserve the same engineering rigor as product development.',
      date: 'Coming Soon',
      readTime: '10 min read'
    },
    {
      title: 'Building Systems Instead Of Features',
      description: 'Why I chose to build a complete operating system instead of point solutions.',
      date: 'Coming Soon',
      readTime: '7 min read'
    },
    {
      title: 'The Future Of Operational Finance',
      description: 'How financial infrastructure will evolve to meet the needs of tomorrow\'s organizations.',
      date: 'Coming Soon',
      readTime: '12 min read'
    },
    {
      title: 'Scaling Without Complexity',
      description: 'The paradox of building systems that get simpler as they get larger.',
      date: 'Coming Soon',
      readTime: '9 min read'
    },
    {
      title: 'From Startups To Enterprises',
      description: 'Lessons from building financial infrastructure across different organizational scales.',
      date: 'Coming Soon',
      readTime: '11 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#fafafa]">
      <Navigation />
      <main className="pt-32">
        {/* Hero */}
        <section className="relative">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="text-xs tracking-widest text-[#a1a1aa] font-medium uppercase">
                Thinking
              </span>
              <h1 className="text-6xl lg:text-7xl font-bold text-[#fafafa] mt-8 leading-tight mb-8">
                Founder Thinking
              </h1>
              <p className="text-2xl text-[#a1a1aa] leading-relaxed">
                Ideas on financial infrastructure, systems thinking, and building for scale.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="relative" ref={ref}>
          <div className="section-container">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ staggerChildren: 0.1, delay: 0.2 }}
            >
              {articles.map((article, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.08 }}
                  className="card-elevated rounded-2xl p-12 group hover:border-[#d4af37] transition-all cursor-pointer h-full flex flex-col"
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  {/* Category marker */}
                  <div className="inline-block mb-8 w-fit">
                    <span className="text-xs tracking-widest text-[#d4af37] font-bold uppercase px-3 py-2 bg-[rgba(212,175,55,0.1)] rounded-full">
                      Thinking
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#fafafa] mb-6 group-hover:text-[#d4af37] transition-colors leading-snug flex-grow">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-[#a1a1aa] leading-relaxed mb-10">
                    {article.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-8 border-t border-[rgba(212,175,55,0.1)] group-hover:border-[rgba(212,175,55,0.3)] transition-colors">
                    <span className="text-sm text-[#a1a1aa]">{article.date}</span>
                    <span className="text-sm text-[#a1a1aa]">{article.readTime}</span>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    className="mt-6"
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                  >
                    <span className="text-[#d4af37] text-2xl">→</span>
                  </motion.div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Subscribe CTA */}
        <section className="relative bg-[#0d0d0d] border-t border-[rgba(255,255,255,0.05)]">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold text-[#fafafa] mb-6">
                More Ideas Coming Soon
              </h2>
              <p className="text-xl text-[#a1a1aa] mb-10">
                Subscribe to stay updated on new thinking around financial infrastructure and systems thinking.
              </p>
              <motion.a
                href="mailto:amos@amosamos.com"
                className="inline-block px-8 py-4 border border-[#d4af37] text-[#d4af37] font-semibold rounded-lg hover:bg-[rgba(212,175,55,0.1)] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Updates
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
