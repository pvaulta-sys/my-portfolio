import type { LucideIcon } from 'lucide-react';
import { Landmark, Truck, Shield } from 'lucide-react';

export type DomainGroup = {
  title: string;
  icon: LucideIcon;
  accent: 'gold' | 'blue' | 'emerald';
  topics: string[];
};

export const domainGroups: DomainGroup[] = [
  {
    title: 'Financial Infrastructure',
    icon: Landmark,
    accent: 'gold',
    topics: [
      'Treasury Systems',
      'Operational Finance',
      'Approval Workflows',
      'Ledger Systems',
    ],
  },
  {
    title: 'Logistics Infrastructure',
    icon: Truck,
    accent: 'blue',
    topics: [
      'Tracking Systems',
      'Shipment Operations',
      'Delivery Visibility',
      'Operational Monitoring',
    ],
  },
  {
    title: 'Security Infrastructure',
    icon: Shield,
    accent: 'emerald',
    topics: [
      'Security Tooling',
      'Operational Security',
      'Automation',
      'CLI Platforms',
    ],
  },
];
