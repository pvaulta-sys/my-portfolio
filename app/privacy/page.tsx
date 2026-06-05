import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Ogunleye Amos Ayodeji collects, uses, and protects your data.',
};

const sections = [
  {
    title: 'Data we collect',
    content:
      'We collect only the minimum data necessary to operate this site. This includes anonymous usage analytics (page views, referrer, browser type) via a privacy-respecting analytics service, cookies used solely for remembering your cookie consent preference, and any information you voluntarily submit through the contact form (name, email address, and message). We do not collect personal data for marketing, profiling, or tracking across third-party sites.',
  },
  {
    title: 'How we use your data',
    content:
      'Usage analytics help us understand which pages are most visited so we can improve content and performance. Contact form submissions are used only to respond to your inquiry. We do not sell, rent, or share your personal data with third parties for their own purposes.',
  },
  {
    title: 'Third-party services',
    content:
      'This site may use third-party services for hosting, analytics, and email delivery. Each provider is bound by a data-processing agreement that complies with applicable privacy laws. No service is permitted to use your data for its own purposes.',
  },
  {
    title: 'Your rights (GDPR)',
    content:
      'If you are located in the European Economic Area, you have the right to access, rectify, or erase your personal data, restrict or object to processing, and request data portability. To exercise any of these rights, please contact us using the email below. We will respond within 30 days.',
  },
  {
    title: 'Cookies',
    content:
      'This site uses a minimal cookie to store your consent preference. No tracking, advertising, or persistent cross-site cookies are used. You can manage cookie preferences through your browser settings at any time.',
  },
  {
    title: 'Contact',
    content: `For privacy-related inquiries or to exercise your data rights, email ${siteConfig.email}.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="site-shell">
      <Navigation />
      <main>
        <div className="page-container">
          <div className="page-section">
            <article className="article-body-wrap">
              <header className="mb-10">
                <span className="section-label inline-block mb-4">Privacy</span>
                <h1 className="page-hero__title">Privacy Policy</h1>
                <p className="page-hero__desc">Last updated: June 1, 2026</p>
              </header>
              <div className="article-prose">
                {sections.map((s) => (
                  <div key={s.title}>
                    <h2>{s.title}</h2>
                    <p>{s.content}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
