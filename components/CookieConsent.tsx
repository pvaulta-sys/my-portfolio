'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

const STORAGE_KEY = 'cookie-consent';

const CookieConsent = () => {
  const [consent, setConsent] = useState<'accepted' | 'rejected' | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'accepted' || stored === 'rejected') {
      window.setTimeout(() => setConsent(stored), 0);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setConsent('accepted');
  };

  const handleReject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected');
    setConsent('rejected');
  };

  if (consent !== null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pointer-events-none"
      >
        <div className="pointer-events-auto mx-auto max-w-2xl bg-[#050505] border border-[#d4af37]/20 rounded-xl shadow-2xl shadow-black/50 backdrop-blur-xl p-4 sm:p-6">
          <div className="flex items-start gap-3">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/20 shrink-0 mt-0.5">
              <Cookie size={16} className="text-[#d4af37]" />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[#fafafa]">This site uses cookies</p>
              <p className="text-xs text-[#a1a1aa] mt-1 leading-relaxed">
                We use essential cookies to ensure the site works. Analytics cookies help us
                understand how you interact with the site so we can improve it.
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <button
                  onClick={handleAccept}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-[#d4af37] text-[#050505] hover:bg-[#e5c76b] transition-colors"
                >
                  Accept All
                </button>
                <button
                  onClick={handleReject}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg border border-[#a1a1aa]/20 text-[#a1a1aa] hover:text-[#fafafa] hover:border-[#fafafa]/20 transition-colors"
                >
                  Reject Non-Essential
                </button>
              </div>
            </div>
            <button
              onClick={handleReject}
              className="flex items-center justify-center w-7 h-7 rounded-lg text-[#a1a1aa] hover:text-[#fafafa] hover:bg-[#ffffff]/5 transition-colors shrink-0"
              aria-label="Dismiss"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;
