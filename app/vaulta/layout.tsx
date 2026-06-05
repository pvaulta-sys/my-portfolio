import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vaulta — Treasury Operating System',
  description:
    'Vaulta is a modern treasury platform designed to help organizations manage financial operations through ledger integrity, approvals, reconciliation, auditability, and workflow automation.',
  openGraph: {
    title: 'Vaulta — Treasury Operating System',
    description:
      'Modern treasury infrastructure for organizations that need ledger integrity, approval workflows, and operational visibility.',
  },
};

export default function VaultaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
