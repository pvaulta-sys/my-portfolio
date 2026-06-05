import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thinking — Essays & Ideas',
  description:
    'Notes on systems, infrastructure, finance, operations, security, and product building by Amos.',
  openGraph: {
    title: 'Thinking — Essays & Ideas',
    description:
      'Notes on systems, infrastructure, finance, operations, security, and product building.',
  },
};

export default function ThinkingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
