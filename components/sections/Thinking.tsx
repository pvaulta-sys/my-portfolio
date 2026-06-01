'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Thinking = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const principles = [
    {
      icon: '⚙️',
      title: 'Think In Systems',
      description: 'Every problem is part of a larger system. Solutions must optimize the entire flow, not individual components.'
    },
    {
      icon: '🔒',
      title: 'Build For Trust',
      description: 'Trust is earned through transparency, auditability, and consistency. These must be built into the foundation.'
    },
    {
      icon: '📈',
      title: 'Design For Scale',
      description: 'Architecture decisions made today determine what\'s possible tomorrow. Build with ambition.'
    },
    {
      icon: '✨',
      title: 'Obsess Over Simplicity',
      description: 'Complexity is a feature of the system, not the interface. Simple tools that solve complex problems.'
    }
  ];

  return (
    <section id="thinking" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold">How I Think</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((principle, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-elevated rounded-xl p-8 border-[#d4af37]/15 hover:border-[#d4af37]/30 group cursor-default transition-all"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {principle.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#fafafa]">
                {principle.title}
              </h3>
              <p className="text-[#a1a1aa] leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Thinking;
