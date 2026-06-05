import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Building Systems',
  description: 'Infrastructure products across financial, logistics, and security domains.',
};

export default function BuildingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
