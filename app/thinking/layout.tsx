import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thinking',
  description:
    'Founder thinking on financial infrastructure, treasury systems, trust, and building for scale.',
};

export default function ThinkingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
