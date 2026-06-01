'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="relative border-t border-[rgba(255,255,255,0.08)]" ref={ref}>
      {/* CTA Section */}
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center py-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-7xl font-bold text-[#fafafa] mb-8 leading-tight">
              Let's Build Something Meaningful
            </h2>

            <p className="text-2xl text-[#a1a1aa] mb-16 leading-relaxed">
              If you're working on financial infrastructure, treasury operations, or building
              the future of fintech, I'd love to talk.
            </p>

            {/* Primary CTA */}
            <motion.a
              href="mailto:amos@amosamos.com"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block px-10 py-5 bg-[#d4af37] text-[#050505] font-bold text-lg rounded-lg hover:bg-[#e5c76b] transition-all"
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.96 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="border-t border-[rgba(255,255,255,0.06)] bg-[rgba(13,13,13,0.3)]">
        <div className="section-container">
          <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left - Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <p className="text-xs tracking-widest text-[#d4af37] font-bold uppercase mb-4">
                Founder
              </p>
              <h3 className="text-2xl font-bold text-[#fafafa] mb-4">Ogunleye Amos</h3>
              <p className="text-[#a1a1aa] leading-relaxed">
                Building financial infrastructure for a more reliable future through systems that scale trust.
              </p>
            </motion.div>

            {/* Center - Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 }}
            >
              <p className="text-xs tracking-widest text-[#d4af37] font-bold uppercase mb-6">
                Navigate
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Vaulta', href: '#vaulta' },
                  { label: 'Building', href: '/building' },
                  { label: 'Thinking', href: '/thinking' },
                  { label: 'Journey', href: '#journey' }
                ].map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    className="block text-[#a1a1aa] hover:text-[#d4af37] transition-colors text-sm"
                    whileHover={{ x: 4 }}
                  >
                    {link.label} →
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right - Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <p className="text-xs tracking-widest text-[#d4af37] font-bold uppercase mb-6">
                Connect
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Email', href: 'mailto:amos@amosamos.com' },
                  { label: 'LinkedIn', href: 'https://linkedin.com' },
                  { label: 'GitHub', href: 'https://github.com' },
                  { label: 'X', href: 'https://x.com' }
                ].map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="block text-[#a1a1aa] hover:text-[#d4af37] transition-colors text-sm"
                    whileHover={{ x: 4 }}
                  >
                    {link.label} →
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-[rgba(255,255,255,0.05)] py-8 flex flex-col md:flex-row items-center justify-between">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.45 }}
              className="text-xs text-[#a1a1aa]"
            >
              © 2026 Ogunleye Amos Ayodeji • Building Vaulta
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.45 }}
              className="text-xs text-[#a1a1aa] mt-4 md:mt-0"
            >
              Engineered with intention. Designed for scale.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


