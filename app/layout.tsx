import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { HydrateMarker } from '@/components/HydrateMarker';
import { siteConfig } from '@/lib/site';
import CookieConsent from '@/components/CookieConsent';
import ThemeProvider from '@/components/ThemeProvider';
import LocaleProvider from '@/components/LocaleProvider';
import ConsoleEasterEgg from '@/components/ConsoleEasterEgg';
import ServiceWorkerRegister from '@/components/ServiceWorkerRegister';
import Analytics from '@/components/Analytics';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.fullName} | Systems Builder & Founder`,
    template: `%s | ${siteConfig.fullName}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  other: {
    'theme-color': '#050505',
  },
  openGraph: {
    title: `${siteConfig.fullName} | Systems Builder & Founder`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.fullName} | Systems Builder & Founder`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.fullName,
    givenName: 'Amos',
    familyName: 'Ayodeji',
    jobTitle: 'Founder & Systems Builder',
    description: siteConfig.description,
    url: siteConfig.url,
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.github,
      siteConfig.social.x,
    ],
    email: siteConfig.email,
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${siteConfig.fullName} | Systems Builder & Founder`,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does Amos Amos build?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Infrastructure products across finance (Vaulta), logistics (Courier), and security (AEGIS)—operational layers that improve trust, visibility, and control.',
        },
      },
      {
        '@type': 'Question',
        name: 'What technologies does Amos use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TypeScript, Next.js, PostgreSQL, event-driven architecture, cloud-native deployment, and CLI tooling for security operations.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I get in touch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Reach out via email at amos@amosamos.com or use the contact form on this site.',
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>
        <LocaleProvider>
          <ThemeProvider>
            <HydrateMarker />
            <div id="main-content">{children}</div>
            <CookieConsent />
          </ThemeProvider>
        </LocaleProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, '\\u003c'),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, '\\u003c'),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
          }}
        />
        <ConsoleEasterEgg />
        <ServiceWorkerRegister />
        <Analytics />
      </body>
    </html>
  );
}
