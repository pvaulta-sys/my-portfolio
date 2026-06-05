import type { LucideIcon } from 'lucide-react';
import {
  Layers,
  Grid3x3,
  Lightbulb,
  Route,
  Mail,
  Link2,
  Code2,
  Share2,
  FileText,
  Building2,
} from 'lucide-react';
import { siteConfig } from '@/lib/site';

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  description?: string;
};

export const navItems: NavItem[] = [
  {
    label: 'Building Systems',
    href: '/#building-systems',
    icon: Layers,
    description: 'Infrastructure products in production',
  },
  {
    label: 'Domains',
    href: '/#domains',
    icon: Grid3x3,
    description: 'Finance, logistics, security',
  },
  {
    label: 'Thinking',
    href: '/thinking',
    icon: Lightbulb,
    description: 'Founder notes & essays',
  },
  {
    label: 'Journey',
    href: '/#journey',
    icon: Route,
    description: 'Background & timeline',
  },
  {
    label: 'Projects',
    href: '/projects',
    icon: Building2,
    description: 'Infrastructure products',
  },
  {
    label: 'Resume',
    href: '/resume',
    icon: FileText,
    description: 'Experience & skills',
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
  { label: 'X', href: siteConfig.social.x, icon: Share2 },
] as const;
