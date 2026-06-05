'use client';

import { siteConfig } from '@/lib/site';

const plausibleDomain = siteConfig.url.replace('https://', '');

export default function Analytics() {
  if (process.env.NODE_ENV !== 'production') return null;
  return (
    <script
      defer
      data-domain={plausibleDomain}
      src="https://plausible.io/js/script.js"
    />
  );
}
