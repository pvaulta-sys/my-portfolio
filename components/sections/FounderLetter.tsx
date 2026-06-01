'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FounderLetter = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="letter" className="relative bg-[#0d0d0d]" ref={ref}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <span className="text-xs tracking-widest text-[#a1a1aa] font-medium uppercase">
              A Letter From The Founder
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-[#fafafa] mt-6 leading-tight">
              Why I'm Building This
            </h2>
          </motion.div>

          {/* Letter Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6 text-base leading-relaxed"
          >
            <p className="text-[#a1a1aa] text-xl">
              Financial systems are the backbone of modern commerce. Yet most organizations operate with
              fragmented tools, manual processes, and systems that haven't evolved in decades.
            </p>

            <p className="text-[#a1a1aa]">
              I've spent years building software, analyzing financial operations, and studying how
              organizations scale. What I've learned is this: <span className="text-[#fafafa] font-semibold">trust and transparency aren't luxuries—they're foundational requirements.</span>
            </p>

            <p className="text-[#a1a1aa]">
              When you're managing billions in assets, approving payments, or auditing transactions,
              every system matters. A small inefficiency becomes a massive liability at scale. A lack
              of visibility becomes a compliance risk. Manual processes become operational bottlenecks.
            </p>

            <p className="text-[#a1a1aa]">
              That's why I'm building Vaulta. Not as another point solution, but as a{' '}
              <span className="text-[#fafafa] font-semibold">complete operating system for treasury and financial operations.</span>
            </p>

            <p className="text-[#a1a1aa]">
              The mission is simple: build systems that enable organizations to operate with complete
              transparency, control, and confidence. Systems where trust isn't assumed—it's built in.
            </p>

            <div className="pt-8 border-t border-[rgba(255,255,255,0.1)]">
              <p className="text-[#a1a1aa]">
                This isn't just a business. It's a vision for how financial infrastructure should work
                in the modern world. I'm building this for founders, treasurers, CFOs, and organizations
                that refuse to compromise on integrity.
              </p>
            </div>
          </motion.div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-16 pt-12"
          >
            <p className="text-[#a1a1aa] text-lg">Ogunleye Amos Ayodeji</p>
            <p className="text-[#d4af37] font-medium">Founder, Vaulta</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderLetter;
