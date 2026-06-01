'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Vaulta', href: '#vaulta' },
    { label: 'Building', href: '/building' },
    { label: 'Thinking', href: '/thinking' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    // If it's an external route (starts with /), navigate normally
    if (href.startsWith('/') && !href.startsWith('#')) {
      window.location.href = href;
      return;
    }
    
    // For anchor links
    if (href.startsWith('#')) {
      // Check if the element exists on the current page
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If element doesn't exist on current page, navigate to home first
        window.location.href = `/${href}`;
      }
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(5,5,5,0.6)] backdrop-blur-lg border-b border-[rgba(255,255,255,0.05)]'
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-container flex items-center justify-between py-4">
        {/* Logo */}
        <motion.button
          onClick={() => handleNavClick('#home')}
          className="text-lg font-bold tracking-tight text-[#fafafa] hover:text-[#d4af37] transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          AA
        </motion.button>

        {/* Navigation Links - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <motion.button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors font-medium"
              whileHover={{ color: '#d4af37' }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="mailto:amos@amosamos.com"
          className="px-6 py-2 text-sm font-medium text-[#fafafa] border border-[#d4af37]/40 rounded-lg hover:border-[#d4af37] hover:bg-[rgba(212,175,55,0.05)] transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Email
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navigation;

