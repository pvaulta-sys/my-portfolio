'use client';

import { useEffect } from 'react';
import { siteConfig } from '@/lib/site';

const styles = {
  title: 'font-size: 24px; font-weight: 700; color: #d4af37;',
  subtitle: 'font-size: 14px; color: #a1a1aa;',
  link: 'font-size: 12px; color: #6b7280;',
};

export default function ConsoleEasterEgg() {
  useEffect(() => {
    console.log(
      `%c${siteConfig.fullName}%c\nSystems Builder & Founder\n%c${siteConfig.url}`,
      styles.title,
      styles.subtitle,
      styles.link
    );
    console.log('%cBuilt with Next.js, React, and a lot of infrastructure thinking', 'font-size: 12px; color: #6b7280; font-style: italic;');
  }, []);

  return null;
}
