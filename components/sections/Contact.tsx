'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section } from '@/components/layout/Section';
import { Mail, Globe } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { connectLinks } from '@/lib/navigation';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      <Section id="contact">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <span className="section-label mb-6 inline-flex">Contact</span>
            <h2 className="section-header__title mb-2">Build infrastructure together</h2>
            <p className="section-header__desc mb-10">
              Partnerships across finance, logistics, or security—let&apos;s talk systems, products, and scale.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-16">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div className="card-glass rounded-lg p-5 sm:p-6">
                <p className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider mb-3">Contact info</p>
                <div className="flex items-center gap-3 text-sm text-[#a1a1aa]">
                  <Mail size={16} className="text-[#d4af37] shrink-0" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-[#fafafa] transition-colors">{siteConfig.email}</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#a1a1aa] mt-3">
                  <Globe size={16} className="text-[#d4af37] shrink-0" />
                  <span>{siteConfig.url.replace('https://', '')}</span>
                </div>
              </div>
              <div className="card-glass rounded-lg p-5 sm:p-6">
                <p className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider mb-3">Connect</p>
                <div className="flex flex-col gap-1">
                  {connectLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith('mailto') ? undefined : '_blank'}
                        rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                        className="flex items-center gap-3 text-sm text-[#a1a1aa] hover:text-[#d4af37] transition-colors min-h-[2.75rem]"
                      >
                        <Icon size={16} />
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default Contact;
