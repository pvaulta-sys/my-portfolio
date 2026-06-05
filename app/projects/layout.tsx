import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Infrastructure products across finance, logistics, and security domains.',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
