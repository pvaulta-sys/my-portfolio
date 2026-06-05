'use client';

import { useEffect, useRef } from 'react';

type BlogCommentsProps = {
  slug: string;
};

const REPO = 'pvaulta-sys/portfolio';

export default function BlogComments({ slug }: BlogCommentsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current || !ref.current) return;
    loaded.current = true;

    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', REPO);
    script.setAttribute('issue-term', slug);
    script.setAttribute('theme', 'dark-blue');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;
    ref.current.appendChild(script);
  }, [slug]);

  return (
    <div className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.06)]">
      <h2 className="text-lg font-bold text-[#fafafa] mb-6">Discussion</h2>
      <div ref={ref} />
    </div>
  );
}
