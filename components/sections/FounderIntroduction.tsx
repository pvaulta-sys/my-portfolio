'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const FounderIntroduction = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="founder" className="relative py-24 px-6 bg-[#050505]">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Main heading */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="block mb-2">Not Just Software.</span>
            <motion.span
              className="block bg-gradient-to-r from-[#d4af37] to-[#e5c76b] bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Operational Systems.
            </motion.span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-transparent"
            variants={itemVariants}
          />
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Left Column - Text */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div>
              <h3 className="text-3xl font-bold mb-3">I'm Amos Amos</h3>
              <p className="text-white/65 text-lg leading-relaxed">
                I'm a founder and systems builder passionate about creating enterprise-grade financial infrastructure.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Building Vaulta</h3>
              <p className="text-white/65 text-lg leading-relaxed">
                Vaulta is an operating system for treasury operations. It combines financial ledger design, operational automation, and audit trails into a cohesive platform designed for modern businesses.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Philosophy</h3>
              <p className="text-white/65 text-lg leading-relaxed">
                I believe in systems thinking. Great financial infrastructure isn't just about code—it's about designing workflows, maintaining integrity, and building trust through transparency and auditability.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Focus Areas</h3>
              <ul className="space-y-2 text-white/65 text-lg">
                <li className="flex items-center gap-3">
                  <span className="text-[#d4af37]">→</span>
                  Treasury Operations & Workflows
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#d4af37]">→</span>
                  Financial Infrastructure Design
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#d4af37]">→</span>
                  Long-Term Value Creation
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Stats/Cards */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div
              className="glass rounded-xl p-8 border border-[#d4af37]/20"
              whileHover={{ scale: 1.02, borderColor: '#d4af37' }}
            >
              <div className="text-5xl font-bold text-[#d4af37] mb-2">10+</div>
              <p className="text-white/65">Years of software architecture experience</p>
            </motion.div>

            <motion.div
              className="glass rounded-xl p-8 border border-[#d4af37]/20"
              whileHover={{ scale: 1.02, borderColor: '#d4af37' }}
            >
              <div className="text-5xl font-bold text-[#d4af37] mb-2">$2.4M+</div>
              <p className="text-white/65">Treasury operations designed and built</p>
            </motion.div>

            <motion.div
              className="glass rounded-xl p-8 border border-[#d4af37]/20"
              whileHover={{ scale: 1.02, borderColor: '#d4af37' }}
            >
              <div className="text-5xl font-bold text-[#d4af37] mb-2">100%</div>
              <p className="text-white/65">Commitment to financial integrity</p>
            </motion.div>

            <motion.div
              className="glass rounded-xl p-8 border border-[#d4af37]/20 bg-gradient-to-br from-[#d4af37]/10 to-transparent"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-white/80 italic">
                "I build financial infrastructure that doesn't just work—it scales, audits, and inspires confidence."
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderIntroduction;
