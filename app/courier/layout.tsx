import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Courier — Logistics Platform',
  description:
    'Courier is a logistics platform designed to manage deliveries, tracking, customer notifications, and operational workflows.',
  openGraph: {
    title: 'Courier — Logistics Platform',
    description:
      'Operational logistics infrastructure for shipment visibility, delivery workflows, and real-time tracking.',
  },
};

export default function CourierLayout({ children }: { children: React.ReactNode }) {
  return children;
}
