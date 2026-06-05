import type { Metadata } from 'next';
import { projects } from '@/lib/projects';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return { title: 'Not found' };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
