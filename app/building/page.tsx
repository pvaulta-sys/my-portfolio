import { redirect } from 'next/navigation';

/** Legacy route — building systems live on the home page */
export default function BuildingPage() {
  redirect('/#building-systems');
}
