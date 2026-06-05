'use client';

import Link from 'next/link';
import { ArrowUp, Shield, FileText } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { navItems, connectLinks } from '@/lib/navigation';
import { useTranslation } from '@/components/LocaleProvider';

const Footer = () => {
  const t = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="site-footer__grid">
          <div>
            <p className="site-footer__label">Founder</p>
            <p className="text-[#fafafa] font-semibold">{siteConfig.fullName}</p>
            <p className="text-sm text-[#a1a1aa] mt-2 max-w-xs leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>
          <div>
            <p className="site-footer__label">Navigate</p>
            <nav className="flex flex-col gap-1" aria-label="Footer">
              {navItems.map((link) => {
                const Icon = link.icon;
                return (
                  <Link key={link.label} href={link.href} className="footer-link">
                    <span className="footer-link-icon">
                      <Icon size={14} />
                    </span>
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div>
            <p className="site-footer__label">Connect</p>
            <div className="flex flex-col gap-1">
              {connectLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="footer-link"
                  >
                    <span className="footer-link-icon">
                      <Icon size={14} />
                    </span>
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/privacy" className="hover:text-[#d4af37] transition-colors">
              <span className="inline-flex items-center gap-1.5">
                <Shield size={11} />
                {t.footer.privacy}
              </span>
            </Link>
            <Link href="/terms" className="hover:text-[#d4af37] transition-colors">
              <span className="inline-flex items-center gap-1.5">
                <FileText size={11} />
                {t.footer.terms}
              </span>
            </Link>
          </div>
          <p>&copy; 2026 {siteConfig.fullName}</p>
          <div className="flex items-center gap-4">
            <p className="text-[#a1a1aa]/70">Building infrastructure &middot; Not websites</p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#a1a1aa] hover:text-[#d4af37] transition-colors text-[0.75rem]"
              aria-label="Back to top"
            >
              <ArrowUp size={12} />
              {t.footer.backToTop}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
