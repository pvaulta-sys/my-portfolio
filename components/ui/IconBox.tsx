import type { LucideIcon } from 'lucide-react';

type IconBoxSize = 'sm' | 'md' | 'lg';

const sizeMap: Record<IconBoxSize, { box: string; icon: number }> = {
  sm: { box: 'h-9 w-9 rounded-lg', icon: 16 },
  md: { box: 'h-11 w-11 rounded-xl', icon: 20 },
  lg: { box: 'h-14 w-14 rounded-xl', icon: 24 },
};

type IconBoxProps = {
  icon: LucideIcon;
  size?: IconBoxSize;
  className?: string;
};

export function IconBox({ icon: Icon, size = 'md', className = '' }: IconBoxProps) {
  const { box, icon: iconSize } = sizeMap[size];

  return (
    <div
      className={`icon-box flex items-center justify-center shrink-0 ${box} ${className}`}
      aria-hidden
    >
      <Icon size={iconSize} strokeWidth={1.75} />
    </div>
  );
}
