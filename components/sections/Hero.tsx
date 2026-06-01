'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-1/3 w-1/2 h-1/2 bg-[#d4af37]/3 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-2/5 h-2/3 bg-[#d4af37]/2 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <span className="text-xs tracking-widest text-[#a1a1aa] font-medium uppercase">
                OGUNLEYE AMOS AYODEJI
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-8 font-bold leading-tight"
            >
              Building{' '}
              <span className="bg-gradient-to-r from-[#d4af37] to-[#e5c76b] bg-clip-text text-transparent">
                Financial Infrastructure
              </span>
              {' '}
              For A More Reliable Future.
            </motion.h1>

            {/* Secondary Message */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="text-xl text-[#a1a1aa] mb-8 font-medium"
            >
              I build systems that improve{' '}
              <span className="text-[#fafafa]">trust, visibility, control,</span>
              {' '}and operational excellence.
            </motion.p>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg mb-10 leading-relaxed max-w-2xl"
            >
              Founder building Vaulta, a treasury operating system for modern organizations.
              Previously a software developer, financial analyst, and systems architect exploring
              how technology enables reliable financial operations at scale.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#vaulta"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-[#d4af37] text-[#050505] font-semibold rounded-lg hover:bg-[#e5c76b] transition-colors"
              >
                Explore Vaulta
              </motion.a>
              <motion.a
                href="#capabilities"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 border border-[#d4af37]/40 text-[#fafafa] font-semibold rounded-lg hover:border-[#d4af37] hover:bg-[rgba(212,175,55,0.05)] transition-all"
              >
                View My Work
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Your Image */}
          <div className="hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Background glow */}
              <div className="absolute -inset-20 bg-gradient-to-br from-[#d4af37]/5 via-transparent to-transparent rounded-3xl blur-3xl" />
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/20 card-elevated">
                <Image
                  src="/passport.PNG"
                  alt="Ogunleye Amos Ayodeji"
                  width={500}
                  height={600}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

