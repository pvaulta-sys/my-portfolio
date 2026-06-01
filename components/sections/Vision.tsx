'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Vision = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="vision" className="relative bg-[#0d0d0d]" ref={ref}>
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <p className="text-5xl lg:text-6xl font-bold text-[#fafafa] leading-tight mb-8">
              I believe the future belongs to organizations that operate with{' '}
              <span className="bg-gradient-to-r from-[#d4af37] to-[#e5c76b] bg-clip-text text-transparent">
                transparency, automation, and trust.
              </span>
            </p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl text-[#a1a1aa] leading-relaxed"
            >
              My mission is to build systems that make that possible.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

