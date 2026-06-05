'use client';

import { motion } from 'framer-motion';
import { FileQuestion } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="site-shell">
      <Navigation />
      <main>
        <section className="page-section min-h-[80vh] flex items-center">
          <div className="page-container">
            <motion.div
              className="max-w-xl mx-auto text-center"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="section-header__icon mx-auto mb-6 w-14 h-14 rounded-2xl">
                <FileQuestion size={28} strokeWidth={1.75} />
              </span>
              <span className="section-label inline-block mb-4">404</span>
              <h1 className="page-hero__title mb-3">Page not found</h1>
              <p className="page-hero__desc mx-auto mb-8">
                The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
              </p>
              <Button href="/" variant="primary" size="lg" showArrow>
                Back to home
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
