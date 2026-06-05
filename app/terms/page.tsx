import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms governing the use of the Ogunleye Amos Ayodeji portfolio website.',
};

const sections = [
  {
    title: 'Use of the website',
    content:
      'By accessing this website, you agree to use it for lawful purposes only. You may not use the site to transmit harmful code, interfere with its operation, or impersonate any person or entity. All content is provided for informational purposes and does not constitute professional advice.',
  },
  {
    title: 'Intellectual property',
    content:
      'All content on this site — including text, design, logos, and code — is the intellectual property of Ogunleye Amos Ayodeji unless otherwise stated. You may not reproduce, distribute, or create derivative works without prior written permission.',
  },
  {
    title: 'Limitation of liability',
    content:
      'This website is provided "as is" without warranties of any kind, express or implied. Ogunleye Amos Ayodeji shall not be liable for any damages arising from the use or inability to use this site, including but not limited to indirect, incidental, or consequential damages.',
  },
  {
    title: 'External links',
    content:
      'This site may contain links to third-party websites. We are not responsible for the content, privacy practices, or availability of those sites. Visiting external links is at your own risk.',
  },
  {
    title: 'Governing law',
    content:
      'These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts of Nigeria.',
  },
  {
    title: 'Changes to these terms',
    content:
      'We reserve the right to update these terms at any time. Changes are effective immediately upon posting. Continued use of the site after changes constitutes acceptance of the updated terms.',
  },
  {
    title: 'Contact',
    content: `For questions about these terms, email ${siteConfig.email}.`,
  },
];

export default function TermsPage() {
  return (
    <div className="site-shell">
      <Navigation />
      <main>
        <div className="page-container">
          <div className="page-section">
            <article className="article-body-wrap">
              <header className="mb-10">
                <span className="section-label inline-block mb-4">Legal</span>
                <h1 className="page-hero__title">Terms of Service</h1>
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
