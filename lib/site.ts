export const siteConfig = {
  name: 'Amos Ayodeji',
  fullName: 'Ogunleye Amos Ayodeji',
  title: 'Founder · Software Developer · Financial Analyst · Systems Builder',
  tagline: 'Founder building infrastructure products across finance, logistics, and security.',
  description:
    'Ogunleye Amos Ayodeji builds infrastructure products across financial, logistics, and security domains—systems that improve trust, visibility, and operational control.',
  url: 'https://amosamos.com',
  email: 'amos@amosamos.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/ogunleye-amos-ayodeji',
    github: 'https://github.com/pvaulta-sys',
    x: 'https://x.com/amosamos',
  },
  calUrl: '' as string,
  roles: ['Founder', 'Software Developer', 'Financial Analyst', 'Systems Builder'] as const,
  hero: {
    leadIntro: 'I build infrastructure products that help organizations operate with',
    leadEmphasis: 'trust, visibility, and control',
    paragraphs: [
      'From treasury workflows to shipment operations to security automation — I design systems that sit at the operational core: where money moves, goods move, and risk is managed day to day.',
      'Every product prioritizes auditability, clear ownership, and infrastructure that teams can run with confidence as operations scale.',
    ],
    primaryCta: { label: 'See what I build', href: '/#what-i-build' },
    secondaryCta: { label: 'Get in touch', href: '/#contact' },
  },
} as const;

export function getHeroSecondaryHref(): string {
  return siteConfig.calUrl?.trim() ? siteConfig.calUrl : siteConfig.hero.secondaryCta.href;
}
