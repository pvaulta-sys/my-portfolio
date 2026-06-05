import { siteConfig } from '@/lib/site';
import { getPublishedThinkingArticles } from '@/lib/thinking';

export const dynamic = 'force-static';

export async function GET() {
  const articles = getPublishedThinkingArticles();

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${siteConfig.fullName} | Thinking</title>
  <subtitle>${siteConfig.description}</subtitle>
  <link href="${siteConfig.url}/feed.xml" rel="self"/>
  <link href="${siteConfig.url}"/>
  <updated>${new Date().toISOString()}</updated>
  <id>${siteConfig.url}/</id>
  <author>
    <name>${siteConfig.fullName}</name>
    <email>${siteConfig.email}</email>
  </author>
  ${articles.map((article) => `
  <entry>
    <title>${escapeXml(article.title)}</title>
    <link href="${siteConfig.url}/thinking/${article.slug}"/>
    <id>${siteConfig.url}/thinking/${article.slug}</id>
    <published>${new Date(article.publishedAt).toISOString()}</published>
    <updated>${new Date(article.publishedAt).toISOString()}</updated>
    <summary type="text">${escapeXml(article.description)}</summary>
    <category term="infrastructure"/>
  </entry>`).join('\n')}
</feed>`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
