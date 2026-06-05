import { NextResponse } from 'next/server';

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60_000;

function sanitize(input: string): string {
  return input
    .replace(/[<>]/g, '')
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '')
    .trim();
}

function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    const now = Date.now();
    const entry = rateLimitMap.get(ip);
    if (entry) {
      if (now < entry.resetAt) {
        entry.count++;
        if (entry.count > RATE_LIMIT_MAX) {
          return NextResponse.json(
            { error: 'Too many requests. Try again later.' },
            { status: 429 }
          );
        }
      } else {
        entry.count = 1;
        entry.resetAt = now + RATE_LIMIT_WINDOW_MS;
      }
    } else {
      rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    }

    const body = await request.json();
    const name = sanitize(body.name ?? '');
    const email = sanitize(body.email ?? '');
    const subject = sanitize(body.subject ?? '');
    const message = sanitize(body.message ?? '');

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!isEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (name.length > 100 || subject.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Input exceeds maximum length' },
        { status: 400 }
      );
    }

    console.log('Contact form submission:', { name, email, subject, message });

    // TODO: Integrate with an email service (Resend, SendGrid, etc.)

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
