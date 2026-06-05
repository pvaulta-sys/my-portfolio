'use client';

import { useState } from 'react';
import { ExternalLink, Link } from 'lucide-react';
import { siteConfig } from '@/lib/site';

type SocialShareProps = {
  title: string;
  slug: string;
};

export default function SocialShare({ title, slug }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const url = `${siteConfig.url}/thinking/${slug}`;

  const shareLinks = [
    {
      label: 'Twitter',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    },
    {
      label: 'LinkedIn',
      href: `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="flex items-center gap-3 mt-10 pt-6 border-t border-[rgba(255,255,255,0.06)]">
      <span className="text-xs font-semibold text-[#a1a1aa] uppercase tracking-wider mr-1">
        Share
      </span>
      {shareLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-9 h-9 rounded-lg border border-[rgba(255,255,255,0.1)] text-[#a1a1aa] hover:text-[#d4af37] hover:border-[#d4af37]/30 transition-colors"
          aria-label={`Share on ${link.label}`}
        >
          <ExternalLink size={16} />
        </a>
      ))}
      <button
        onClick={copyLink}
        className="flex items-center justify-center w-9 h-9 rounded-lg border border-[rgba(255,255,255,0.1)] text-[#a1a1aa] hover:text-[#d4af37] hover:border-[#d4af37]/30 transition-colors relative"
        aria-label="Copy link"
      >
        {copied ? (
          <span className="text-[10px] font-semibold text-[#34d399]">OK</span>
        ) : (
          <Link size={16} />
        )}
      </button>
    </div>
  );
}
