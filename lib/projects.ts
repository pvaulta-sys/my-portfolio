import type { LucideIcon } from 'lucide-react';
import { Landmark, Truck, Shield } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export type ProjectId = 'vaulta' | 'courier' | 'aegis';

export type ProjectStatus = 'live' | 'beta' | 'in-development';

export type ProjectActionKind = 'demo' | 'github' | 'waitlist' | 'request-access';

export type ProjectAction = {
  label: string;
  href: string;
  kind: ProjectActionKind;
  external?: boolean;
};

export type Project = {
  id: ProjectId;
  category: string;
  title: string;
  subtitle?: string;
  description: string;
  capabilities: string[];
  metrics: { label: string; value: string }[];
  architecture: string[];
  techStack: string[];
  icon: LucideIcon;
  accent: 'gold' | 'blue' | 'emerald';
  status: ProjectStatus;
  statusLabel: string;
  proof: string;
  action: ProjectAction;
};

const requestAccess = (product: string): ProjectAction => ({
  label: 'Request access',
  href: `mailto:${siteConfig.email}?subject=${encodeURIComponent(`${product} — access request`)}`,
  kind: 'request-access',
});

const waitlist = (product: string): ProjectAction => ({
  label: 'Join waitlist',
  href: `mailto:${siteConfig.email}?subject=${encodeURIComponent(`${product} — waitlist`)}`,
  kind: 'waitlist',
});

export const projects: Project[] = [
  {
    id: 'vaulta',
    category: 'Financial Infrastructure',
    title: 'Vaulta',
    subtitle: 'Enterprise Treasury Operating System',
    description:
      'Vaulta is a modern treasury platform designed to provide operational visibility, approval workflows, ledger integrity, auditability, reconciliation, and financial control for organizations.',
    capabilities: [
      'Treasury dashboard',
      'Approval workflows',
      'Financial operations',
      'Audit trails',
      'Reconciliation systems',
      'Multi-tenant architecture',
    ],
    metrics: [
      { label: 'Entities supported', value: 'Multi-entity' },
      { label: 'Currency support', value: 'Multi-currency' },
      { label: 'Audit trail', value: 'Immutable' },
      { label: 'Deployment', value: 'Cloud-native' },
    ],
    architecture: [
      'Multi-tenant architecture designed for organizational boundaries and data isolation across entities, departments, and subsidiaries',
      'Event-driven core with immutable audit trails recording every state transition — create, approve, reject, reconcile — for full traceability',
      'Role-based authorization with granular permission boundaries at the entity, role, and action level',
      'API-first design with webhook support enabling integration with existing ERP, accounting, and banking systems',
    ],
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Event-driven architecture', 'Cloud-native'],
    icon: Landmark,
    accent: 'gold',
    status: 'beta',
    statusLabel: 'Beta',
    proof:
      'Built for finance teams and operators who need approval chains, ledger integrity, and audit-ready treasury workflows—not spreadsheet shadows.',
    action: requestAccess('Vaulta'),
  },
  {
    id: 'courier',
    category: 'Logistics Infrastructure',
    title: 'Courier & Real-Time Tracking Platform',
    description:
      'A logistics platform built to manage shipments, delivery operations, and real-time package tracking across the entire delivery lifecycle.',
    capabilities: [
      'Live shipment tracking',
      'Status updates',
      'Delivery workflows',
      'Operational dashboards',
      'Logistics visibility',
      'Customer tracking experiences',
    ],
    metrics: [
      { label: 'Tracking type', value: 'Real-time' },
      { label: 'Coverage', value: 'End-to-end' },
      { label: 'Status updates', value: 'Live' },
      { label: 'Integration', value: 'API-first' },
    ],
    architecture: [
      'Distributed tracking architecture processing shipment events from dispatch to proof-of-delivery for end-to-end visibility',
      'Real-time event streaming pipeline enabling live status updates pushed to operational dashboards and customer-facing interfaces',
      'Modular delivery workflow engine supporting configurable checkpoints, exception handling, and escalation rules',
      'RESTful API layer with webhook notifications for seamless integration with existing logistics and warehouse management systems',
    ],
    techStack: ['Next.js', 'TypeScript', 'Event streaming', 'PostgreSQL', 'REST APIs'],
    icon: Truck,
    accent: 'blue',
    status: 'in-development',
    statusLabel: 'In development',
    proof:
      'Designed for logistics operators and delivery teams who need live visibility from dispatch to proof-of-delivery across the full lifecycle.',
    action: waitlist('Courier platform'),
  },
  {
    id: 'aegis',
    category: 'Security Infrastructure',
    title: 'AEGIS',
    subtitle: 'Security Operations Platform',
    description:
      'AEGIS is a security-focused platform for ethical hackers and security professionals. It combines a powerful dashboard experience with command-line tooling to streamline security assessments and operational workflows.',
    capabilities: [
      'Security tooling',
      'Dashboard interface',
      'CLI tooling',
      'Workflow automation',
      'Security visibility',
      'Operational control',
    ],
    metrics: [
      { label: 'Interface', value: 'Dashboard + CLI' },
      { label: 'Platform', value: 'Cross-platform' },
      { label: 'Automation', value: 'Workflow engine' },
      { label: 'Deployment', value: 'Cloud-native' },
    ],
    architecture: [
      'Dual-interface architecture combining a web dashboard for operational clarity with a CLI for terminal-speed workflows',
      'Modular plugin system enabling security teams to extend tooling with custom assessments, scanners, and reporting pipelines',
      'Workflow automation engine orchestrating multi-step security operations with state tracking, notifications, and audit logging',
      'Role-based access with team workspaces supporting collaboration across security assessments and operational reviews',
    ],
    techStack: ['Next.js', 'TypeScript', 'CLI (Node.js)', 'PostgreSQL', 'Plugin architecture'],
    icon: Shield,
    accent: 'emerald',
    status: 'beta',
    statusLabel: 'Beta',
    proof:
      'Next.js · TypeScript · CLI tooling—for security teams who want dashboard clarity and terminal speed in the same operational layer.',
    action: {
      label: 'View on GitHub',
      href: `${siteConfig.social.github}?tab=repositories`,
      kind: 'github',
      external: true,
    },
  },
];

export const projectStatusClass: Record<ProjectStatus, string> = {
  live: 'product-status--live',
  beta: 'product-status--beta',
  'in-development': 'product-status--dev',
};
