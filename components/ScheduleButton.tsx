import { Calendar } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export default function ScheduleButton() {
  const href = siteConfig.calUrl || '/#contact';
  return (
    <Link
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="btn btn--primary inline-flex"
    >
      <span className="btn__inner">
        <Calendar size={16} strokeWidth={1.75} />
        <span className="btn__label">Schedule a call</span>
      </span>
    </Link>
  );
}
