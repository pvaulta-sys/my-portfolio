import { projects } from '@/lib/projects';
import ProjectDetail from './ProjectDetail';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export default function ProjectDetailPage() {
  return <ProjectDetail />;
}
