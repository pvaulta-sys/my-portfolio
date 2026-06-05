import type { Metadata } from 'next';
import Link from 'next/link';
import { WifiOff } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Offline',
  description: 'You are offline.',
};

export default function OfflinePage() {
  return (
    <div className="site-shell">
      <main>
        <div className="page-container min-h-screen flex items-center justify-center">
          <div className="text-center max-w-md">
            <span className="section-header__icon mx-auto mb-6 w-14 h-14 rounded-2xl">
              <WifiOff size={28} strokeWidth={1.75} />
            </span>
            <h1 className="page-hero__title mb-3">You are offline</h1>
            <p className="page-hero__desc mx-auto mb-8">
              Some content may not be available without an internet connection.
              Please reconnect to browse the full site.
            </p>
            <Link
              href="/"
              className="btn btn--primary inline-flex"
            >
              <span className="btn__inner">
                <span className="btn__label">Back to home</span>
              </span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
