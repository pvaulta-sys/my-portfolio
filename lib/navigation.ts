import type { LucideIcon } from 'lucide-react';
import {
  Layers,
  Route,
  Mail,
  Link2,
  Code2,
  FileText,
  Building2,
  Lightbulb,
  BookOpen,
} from 'lucide-react';
import { XIcon } from '@/components/ui/XIcon';
import { siteConfig } from '@/lib/site';

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  description?: string;
};

export const navItems: NavItem[] = [
  {
    label: 'What I Build',
    href: '/#what-i-build',
    icon: Layers,
    description: 'Infrastructure products',
  },
  {
    label: 'Journey',
    href: '/#journey',
    icon: Route,
    description: 'Founder timeline',
  },
  {
    label: 'Why I Build',
    href: '/#why-i-build',
    icon: Lightbulb,
    description: 'Philosophy & principles',
  },
  {
    label: 'Products',
    href: '/projects',
    icon: Building2,
    description: 'Detailed product pages',
  },
  {
    label: 'Resume',
    href: '/resume',
    icon: FileText,
    description: 'Background & education',
  },
  {
    label: 'About',
    href: '/about',
    icon: BookOpen,
    description: 'Background & approach',
  },
  {
    label: 'Contact',
    href: '/#contact',
    icon: Mail,
    description: 'Get in touch',
  },
];

export const connectLinks = [
  { label: 'Email', href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: 'LinkedIn', href: siteConfig.social.linkedin, icon: Link2 },
  { label: 'GitHub', href: siteConfig.social.github, icon: Code2 },
  { label: 'X', href: siteConfig.social.x, icon: XIcon },
] as const;
