'use client';

import { useState, useEffect } from 'react';
import { List } from 'lucide-react';

type Heading = {
  id: string;
  text: string;
};

type TableOfContentsProps = {
  headings: Heading[];
};

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <nav className="hidden lg:block sticky top-28 w-56 shrink-0" aria-label="Table of contents">
      <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-[#a1a1aa] uppercase tracking-wider">
        <List size={14} />
        On this page
      </div>
      <ul className="flex flex-col gap-2">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`block text-sm py-1 transition-colors ${
                activeId === h.id
                  ? 'text-[#d4af37] font-medium'
                  : 'text-[#a1a1aa] hover:text-[#fafafa]'
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
