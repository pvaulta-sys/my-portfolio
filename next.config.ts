import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow phone/tablet on your LAN to load dev assets (/_next) when not using localhost
  allowedDevOrigins: [
    '192.168.*.*',
    '10.*.*.*',
    '172.*.*.*',
  ],
  poweredByHeader: false,
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        {
          key: 'Content-Security-Policy',
          value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://app.cal.com https://cal.com",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data: blob: https:",
            "font-src 'self'",
            "frame-src 'self' https://app.cal.com",
            "connect-src 'self' https://api.cal.com",
            "manifest-src 'self'",
          ].join('; '),
        },
      ],
    },
  ],
};

export default nextConfig;
