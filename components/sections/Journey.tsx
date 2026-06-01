'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Journey = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const stages = [
    {
      year: '2018',
      milestone: 'Learning Software',
      description: 'Foundation in software development, systems architecture, and technical problem-solving'
    },
    {
      year: '2021',
      milestone: 'Building Systems',
      description: 'Applying architectural patterns and systems thinking to complex operational challenges'
    },
    {
      year: '2024',
      milestone: 'Exploring Financial Operations',
      description: 'Deep dive into treasury systems, financial workflows, and operational excellence'
    },
    {
      year: '2026',
      milestone: 'Building Vaulta',
      description: 'Creating the treasury operating system for modern organizations',
      highlight: true
    },
    {
      year: 'Future',
      milestone: 'Global Financial Infrastructure',
      description: 'Scaling financial infrastructure across borders and building the foundation for tomorrow\'s economy',
      future: true
    }
  ];

  return (
    <section id="journey" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-xs tracking-widest text-[#a1a1aa] font-medium uppercase">
            Evolution
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold text-[#fafafa] mt-6">Founder Journey</h2>
          <p className="text-xl text-[#a1a1aa] mt-6 max-w-2xl">
            The progression from builder to founder, and the mission ahead.
          </p>
        </motion.div>

        <div className="space-y-0 relative">
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4af37] via-[#d4af37]/50 to-[#d4af37]/20" />

          {stages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative pl-0 md:pl-20 py-10 border-b ${
                item.highlight 
                  ? 'border-[#d4af37]/40 bg-[rgba(212,175,55,0.03)]' 
                  : 'border-[rgba(255,255,255,0.03)]'
              } last:border-b-0 transition-colors`}
            >
              {/* Timeline dot */}
              <motion.div
                className={`hidden md:block absolute left-0 top-12 w-4 h-4 rounded-full border-4 border-[#050505] ${
                  item.highlight
                    ? 'bg-[#d4af37] shadow-lg shadow-[#d4af37]/30'
                    : item.future
                    ? 'bg-[#d4af37]/40 border-[rgba(212,175,55,0.5)]'
                    : 'bg-[#d4af37]'
                }`}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: i * 0.1 + 0.3 }}
              />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
                <div>
                  <p className={`text-sm tracking-widest font-bold ${
                    item.highlight
                      ? 'text-[#d4af37] text-lg'
                      : item.future
                      ? 'text-[#d4af37]/60 text-xs'
                      : 'text-[#a1a1aa]'
                  }`}>
                    {item.year}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <h3 className={`font-bold mb-3 ${
                    item.highlight
                      ? 'text-2xl text-[#d4af37]'
                      : 'text-2xl text-[#fafafa]'
                  }`}>
                    {item.milestone}
                  </h3>
                  <p className={`${
                    item.future ? 'text-[#a1a1aa]/70 italic' : 'text-[#a1a1aa]'
                  }`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;

