'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CurrentFocus = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const focuses = [
    {
      title: 'Building Vaulta',
      description: 'Founding and scaling the treasury operating system',
      size: 'lg'
    },
    {
      title: 'Financial Infrastructure',
      description: 'Architecting systems that enable trust at scale'
    },
    {
      title: 'Treasury Systems',
      description: 'Building operational platforms'
    },
    {
      title: 'Operational Excellence',
      description: 'Automation and efficiency'
    },
    {
      title: 'Automation',
      description: 'Reducing friction in financial operations'
    },
    {
      title: 'Product Design',
      description: 'Creating intuitive interfaces for complex systems'
    }
  ];

  return (
    <section id="focus" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold">Current Focus</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-max">
          {focuses.map((focus, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`card-premium rounded-lg p-8 hover:bg-[rgba(19,19,19,0.6)] hover:border-[#d4af37]/30 transition-all cursor-default ${
                focus.size === 'lg' ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-xl lg:text-2xl font-bold text-[#fafafa] mb-2">
                {focus.title}
              </h3>
              <p className="text-[#a1a1aa]">
                {focus.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentFocus;
