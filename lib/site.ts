export const siteConfig = {
  name: 'Amos Amos',
  fullName: 'Ogunleye Amos Ayodeji',
  title: 'Founder · Software Developer · Financial Analyst · Systems Builder',
  tagline: 'Systems builder and founder creating infrastructure products across finance, logistics, and security.',
  description:
    'Ogunleye Amos Ayodeji builds infrastructure products across financial, logistics, and security domains—systems that improve trust, visibility, security, and operational efficiency.',
  url: 'https://amosamos.com',
  email: 'amos@amosamos.com',
  /** Update these to your live profiles */
  social: {
    linkedin: 'https://www.linkedin.com/in/ogunleye-amos-ayodeji',
    github: 'https://github.com/pvaulta-sys',
    x: 'https://x.com/amosamos',
  },
  /** Optional: Cal.com or similar — hero falls back to #contact when unset */
  calUrl: '' as string,
  roles: ['Founder', 'Software Developer', 'Financial Analyst', 'Systems Builder'] as const,
  hero: {
    leadIntro: 'I create systems that help organizations operate with greater',
    leadEmphasis: 'trust, visibility, security, and control',
    paragraphs: [
      'From treasury workflows and shipment operations to security automation—I design products that sit at the operational core: where money moves, goods move, and risk is managed day to day.',
      'Every build prioritizes auditability, clear ownership, and infrastructure teams can run with confidence as operations scale—not dashboards that look good but fail under real load.',
    ],
    domains: [
      {
        label: 'Finance',
        tag: 'Infrastructure',
        description: 'Treasury, approvals, ledgers, and financial control',
      },
      {
        label: 'Logistics',
        tag: 'Infrastructure',
        description: 'Tracking, delivery ops, and operational visibility',
      },
      {
        label: 'Security',
        tag: 'Infrastructure',
        description: 'Tooling, automation, and operational security',
      },
    ],
    primaryCta: { label: 'See what I\'m building', href: '/#building-systems' },
    secondaryCta: { label: 'Get in touch', href: '/#contact' },
  },
} as const;

export function getHeroSecondaryHref(): string {
  return siteConfig.calUrl?.trim() ? siteConfig.calUrl : siteConfig.hero.secondaryCta.href;
}
