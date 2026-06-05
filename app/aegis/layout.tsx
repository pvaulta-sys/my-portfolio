import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AEGIS — Security Operations Platform',
  description:
    'AEGIS is a security platform for ethical hackers and security professionals combining dashboard-based operations with CLI tooling.',
  openGraph: {
    title: 'AEGIS — Security Operations Platform',
    description:
      'Security infrastructure combining dashboard clarity with terminal-speed workflows.',
  },
};

export default function AegisLayout({ children }: { children: React.ReactNode }) {
  return children;
}
