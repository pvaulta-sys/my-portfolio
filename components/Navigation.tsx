'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/Button';
import { navItems } from '@/lib/navigation';
import { siteConfig } from '@/lib/site';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageSwitcher from '@/components/LanguageSwitcher';

function isNavActive(pathname: string, href: string) {
  if (href.startsWith('/#')) return pathname === '/';
  return pathname === href;
}

const Navigation = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className={`site-header ${scrolled || mobileOpen ? 'site-header--scrolled' : ''}`}>
        <nav className="page-container site-header__inner" aria-label="Main navigation">
          <Logo onClick={closeMobile} />

          <div className="hidden xl:flex items-center">
            <div className="nav-pill">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isNavActive(pathname, item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`nav-link ${active ? 'nav-link-active' : ''}`}
                    aria-current={active ? 'page' : undefined}
                    onClick={closeMobile}
                  >
                    <Icon size={15} strokeWidth={2} aria-hidden />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <div className="hidden lg:flex">
              <LanguageSwitcher />
            </div>
            <Button
              href={`mailto:${siteConfig.email}`}
              variant="primary"
              size="sm"
              showArrow
              className="hidden lg:inline-flex"
            >
              Contact
            </Button>
            <button
              type="button"
              className="site-header__menu-btn xl:hidden flex items-center justify-center rounded-lg border border-[rgba(255,255,255,0.08)] text-[#fafafa]"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.div
              className="fixed inset-0 z-[101] bg-black/70 backdrop-blur-sm xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
              aria-hidden
            />
            <motion.aside
              id="mobile-nav"
              className="fixed inset-y-0 right-0 z-[102] w-full max-w-sm border-l border-[rgba(255,255,255,0.08)] bg-[#080808] xl:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
                <div className="flex items-center justify-between p-4 border-b border-[rgba(255,255,255,0.06)]">
                <Logo showTagline={false} onClick={closeMobile} />
                <div className="flex items-center gap-1">
                  <LanguageSwitcher />
                  <ThemeToggle />
                  <button
                    type="button"
                    onClick={closeMobile}
                    className="h-10 w-10 rounded-lg border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#a1a1aa]"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-1 overflow-y-auto max-h-[calc(100dvh-4.5rem)]">
                {navItems.map((item, i) => {
                  const Icon = item.icon;
                  const active = isNavActive(pathname, item.href);
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMobile}
                        className={`mobile-nav-item ${active ? 'mobile-nav-item-active' : ''}`}
                        aria-current={active ? 'page' : undefined}
                      >
                        <span className="mobile-nav-icon">
                          <Icon size={18} />
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="block font-medium text-[#fafafa]">{item.label}</span>
                          {item.description ? (
                            <span className="block text-xs text-[#a1a1aa] mt-0.5 truncate">
                              {item.description}
                            </span>
                          ) : null}
                        </span>
                        <ChevronRight size={16} className="text-[#a1a1aa]/40 shrink-0" />
                      </Link>
                    </motion.div>
                  );
                })}
                <div className="pt-4 mt-2 border-t border-[rgba(255,255,255,0.06)]">
                  <Button
                    href={`mailto:${siteConfig.email}`}
                    variant="primary"
                    size="lg"
                    showArrow
                    className="w-full justify-center"
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
