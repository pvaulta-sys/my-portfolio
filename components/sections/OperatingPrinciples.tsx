'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OperatingPrinciples = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const principles = [
    {
      title: 'Build For Trust',
      description: 'Every system should be auditable, transparent, and verifiable. Trust is not assumed—it is built into the architecture.',
      icon: '🔒'
    },
    {
      title: 'Think In Systems',
      description: 'Everything is connected. Financial operations are not isolated components; they are interconnected systems where every decision has downstream effects.',
      icon: '⚙️'
    },
    {
      title: 'Design For Scale',
      description: 'Build foundations, not shortcuts. Scalable systems require thinking about tomorrow\'s problems today. Architecture matters more than features.',
      icon: '📈'
    },
    {
      title: 'Obsess Over Simplicity',
      description: 'Complexity is a liability. The best systems are deceptively simple on the surface while being robust underneath. Simplicity is the ultimate sophistication.',
      icon: '✨'
    }
  ];

  return (
    <section id="principles" className="relative bg-[#0d0d0d]" ref={ref}>
      <div className="section-container">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
        >
          <span className="text-xs tracking-widest text-[#a1a1aa] font-medium uppercase">
            Foundation
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#fafafa] mt-6 leading-tight">
            Operating Principles
          </h2>
          <p className="text-xl text-[#a1a1aa] mt-6">
            How I think about building and the values that guide every decision.
          </p>
        </motion.div>

        {/* Principles Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ staggerChildren: 0.1, delay: 0.2 }}
        >
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.12 }}
              className="card-elevated rounded-2xl p-8 group hover:border-[#d4af37] transition-all relative overflow-hidden"
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#d4af37]/8 to-transparent rounded-full blur-3xl group-hover:opacity-100 opacity-30 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="text-5xl mb-6 group-hover:scale-110 transition-transform"
                  whileHover={{ scale: 1.15 }}
                >
                  {principle.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#fafafa] mb-4 leading-snug">
                  {principle.title}
                </h3>

                {/* Description */}
                <p className="text-base text-[#a1a1aa] leading-relaxed">
                  {principle.description}
                </p>

                {/* Bottom border */}
                <div className="mt-8 pt-6 border-t border-[rgba(212,175,55,0.1)] group-hover:border-[rgba(212,175,55,0.2)] transition-colors">
                  <motion.div
                    className="h-0.5 w-8 bg-gradient-to-r from-[#d4af37] to-transparent"
                    whileHover={{ width: 32 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OperatingPrinciples;
