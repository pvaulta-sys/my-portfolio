'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CommandCenter = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const items = [
    {
      label: 'BUILDING',
      title: 'Vaulta Treasury OS',
      description: 'Modern treasury operating system for enterprises',
      icon: '🏗️'
    },
    {
      label: 'FOCUS',
      title: 'Financial Infrastructure',
      description: 'Ledgers, workflows, audit trails, reconciliation',
      icon: '🎯'
    },
    {
      label: 'LOCATION',
      title: 'Nigeria → Global',
      description: 'Building locally, scaling globally',
      icon: '🌍'
    },
    {
      label: 'MISSION',
      title: 'Scale Trust Through Systems',
      description: 'Enable organizations to operate with transparency and control',
      icon: '✨'
    },
    {
      label: 'STATUS',
      title: 'Active Development',
      description: 'Shipping features, acquiring users, building momentum',
      icon: '⚡'
    },
    {
      label: 'NEXT MILESTONE',
      title: 'Connector Integrations',
      description: 'Connecting Vaulta to the financial ecosystem',
      icon: '🔗'
    }
  ];

  return (
    <section id="command-center" className="relative" ref={ref}>
      <div className="section-container">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
        >
          <span className="text-xs tracking-widest text-[#a1a1aa] font-medium uppercase">
            Current Focus
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#fafafa] mt-6 leading-tight">
            Command Center
          </h2>
          <p className="text-xl text-[#a1a1aa] mt-6">
            A snapshot of what I'm building, where I'm going, and how I'm thinking about the future.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ staggerChildren: 0.1, delay: 0.2 }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08 }}
              className="card-elevated rounded-2xl p-8 group hover:border-[#d4af37] transition-all h-full flex flex-col"
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              {/* Icon */}
              <motion.div
                className="text-4xl mb-6 group-hover:scale-110 transition-transform"
                whileHover={{ scale: 1.15 }}
              >
                {item.icon}
              </motion.div>

              {/* Label */}
              <p className="text-xs tracking-widest text-[#d4af37] font-medium uppercase mb-2">
                {item.label}
              </p>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#fafafa] mb-3 flex-grow leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#a1a1aa] leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Bottom accent */}
              <div className="mt-auto pt-6 border-t border-[rgba(212,175,55,0.1)] group-hover:border-[rgba(212,175,55,0.2)] transition-colors">
                <motion.div
                  className="h-0.5 w-8 bg-gradient-to-r from-[#d4af37] to-transparent"
                  whileHover={{ width: 32 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CommandCenter;
