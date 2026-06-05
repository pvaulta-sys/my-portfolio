import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'btn--primary',
  secondary: 'btn--secondary',
  ghost: 'btn--ghost',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'btn--sm',
  md: 'btn--md',
  lg: 'btn--lg',
};

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
  onClick?: never;
};

type ButtonAsButton = BaseProps & {
  href?: undefined;
  external?: undefined;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

export type ButtonProps = ButtonAsLink | ButtonAsButton;

function ButtonInner({
  children,
  icon: Icon,
  showArrow,
  size,
}: {
  children: React.ReactNode;
  icon?: LucideIcon;
  showArrow?: boolean;
  size: ButtonSize;
}) {
  const iconSize = size === 'sm' ? 15 : size === 'lg' ? 17 : 16;

  return (
    <span className="btn__inner">
      {Icon ? (
        <span className="btn__icon" aria-hidden>
          <Icon size={iconSize} strokeWidth={2.25} />
        </span>
      ) : null}
      <span className="btn__label">{children}</span>
      {showArrow ? (
        <span className="btn__arrow" aria-hidden>
          <ArrowUpRight size={iconSize} strokeWidth={2.25} className="btn__arrow-icon" />
        </span>
      ) : null}
    </span>
  );
}

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    icon,
    showArrow = false,
    className = '',
    children,
  } = props;

  const classes = ['btn', variantClasses[variant], sizeClasses[size], className]
    .filter(Boolean)
    .join(' ');

  const inner = (
    <ButtonInner icon={icon} showArrow={showArrow} size={size}>
      {children}
    </ButtonInner>
  );

  if ('href' in props && props.href !== undefined) {
    const { href, external } = props as ButtonAsLink;
    if (external || href.startsWith('mailto:') || href.startsWith('http')) {
      return (
        <a
          href={href}
          className={classes}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  const { onClick, type = 'button' } = props as ButtonAsButton;
  return (
    <button type={type} className={classes} onClick={onClick}>
      {inner}
    </button>
  );
}
