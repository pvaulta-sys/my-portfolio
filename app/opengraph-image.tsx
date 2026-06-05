import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site';

export const alt = siteConfig.fullName;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(145deg, #050505 0%, #0f0f0f 45%, #1a1510 100%)',
          color: '#fafafa',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#d4af37',
            }}
          >
            Systems Builder & Founder
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            {siteConfig.fullName}
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.45,
              color: '#a1a1aa',
              maxWidth: 820,
            }}
          >
            {siteConfig.tagline}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 20 }}>
          {['Finance', 'Logistics', 'Security'].map((domain) => (
            <div
              key={domain}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '14px 22px',
                borderRadius: 999,
                border: '1px solid rgba(212, 175, 55, 0.35)',
                background: 'rgba(212, 175, 55, 0.08)',
                fontSize: 22,
                fontWeight: 600,
                color: '#fafafa',
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: '#d4af37',
                }}
              />
              {domain}
            </div>
          ))}
        </div>

        <div style={{ fontSize: 22, color: 'rgba(161, 161, 170, 0.85)' }}>
          amosamos.com
        </div>
      </div>
    ),
    { ...size },
  );
}
