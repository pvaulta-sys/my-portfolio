import Link from 'next/link';
import { siteConfig } from '@/lib/site';

type LogoProps = {
  showTagline?: boolean;
  onClick?: () => void;
};

export function Logo({ showTagline = true, onClick }: LogoProps) {
  const displayName = siteConfig.fullName.split(' ').slice(-2).join(' ');

  return (
    <Link
      href="/"
      onClick={onClick}
      className="logo group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
    >
      <span className="logo__name">{displayName}</span>
      {showTagline ? <span className="logo__tag">Systems Builder</span> : null}
    </Link>
  );
}
