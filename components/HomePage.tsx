'use client';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import WhatIBuild from '@/components/sections/WhatIBuild';
import Journey from '@/components/sections/Journey';
import WhyIBuild from '@/components/sections/WhyIBuild';
import OperatingPrinciples from '@/components/sections/OperatingPrinciples';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <div className="site-shell">
      <Navigation />
      <main>
        <Hero />
        <WhatIBuild />
        <Journey />
        <WhyIBuild />
        <OperatingPrinciples />
        <Contact />
      </main>
    </div>
  );
}
