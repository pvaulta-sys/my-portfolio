'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
                <AlertTriangle size={28} strokeWidth={1.75} />
              </span>
              <span className="section-label inline-block mb-4">Error</span>
              <h1 className="page-hero__title mb-3">Something went wrong</h1>
              <p className="page-hero__desc mx-auto mb-8">
                An unexpected error occurred. Please try again or contact support if the problem
                persists.
              </p>
              <Button onClick={reset} variant="primary" size="lg">
                Try again
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
