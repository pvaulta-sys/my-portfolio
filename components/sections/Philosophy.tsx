'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Philosophy = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="who-am-i" className="relative" ref={ref}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold">Who I Am</h2>
          </motion.div>

          {/* Right - Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            <p>
              I think in systems. Not in features, not in workflows, but in complete operational systems
              that compound over time. Financial operations are the most complex systems I've encountered—
              they demand precision, transparency, and the ability to scale from startup chaos to
              enterprise rigor.
            </p>

            <p>
              My journey has been about building the technical and operational foundation that allows
              modern organizations to move fast without sacrificing integrity. From distributed ledgers
              to approval workflows to real-time reconciliation, the work is fundamentally about trust at scale.
            </p>

            <p>
              Vaulta is the manifestation of everything I've learned. It's not a product I'm building
              because the market demanded it. It's a product I'm building because I've seen the pain,
              understood the complexity, and committed to solving it at the infrastructure level.
            </p>

            <p>
              The next decade belongs to organizations that operate with radical transparency, built-in
              compliance, and automation-first architecture. I'm building the systems that make that possible.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
