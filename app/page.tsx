'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import FounderLetter from '@/components/sections/FounderLetter';
import VaultaShowcase from '@/components/sections/VaultaShowcase';
import CommandCenter from '@/components/sections/CommandCenter';
import OperatingPrinciples from '@/components/sections/OperatingPrinciples';
import Journey from '@/components/sections/Journey';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#fafafa]">
      <Navigation />
      <main>
        <Hero />
        <FounderLetter />
        <VaultaShowcase />
        <CommandCenter />
        <OperatingPrinciples />
        <Journey />
        <Contact />
      </main>
    </div>
  );
}
