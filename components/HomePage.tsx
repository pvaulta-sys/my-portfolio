'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import StatsCounter from '@/components/sections/StatsCounter';
import LogoGrid from '@/components/sections/LogoGrid';
import BuildingSystems from '@/components/sections/BuildingSystems';
import Domains from '@/components/sections/Domains';
import OperatingPrinciples from '@/components/sections/OperatingPrinciples';
import FounderLetter from '@/components/sections/FounderLetter';
import Journey from '@/components/sections/Journey';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <div className="site-shell">
      <Navigation />
      <main>
        <Hero />
        <StatsCounter />
        <BuildingSystems />
        <Domains />
        <LogoGrid />
        <OperatingPrinciples />
        <FounderLetter />
        <Journey />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
