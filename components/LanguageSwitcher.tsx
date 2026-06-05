'use client';

import { useLocale } from '@/components/LocaleProvider';
import { locales, type Locale } from '@/lib/locale';
import { Globe } from 'lucide-react';

const labels: Record<Locale, string> = { en: 'EN', fr: 'FR' };

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-1 border-l border-[rgba(255,255,255,0.08)] pl-3 ml-1">
      <Globe size={14} className="text-[#a1a1aa]" aria-hidden />
      {locales.map((lang) => (
        <button
          key={lang}
          onClick={() => setLocale(lang)}
          className={`text-xs font-semibold px-1.5 py-0.5 rounded transition-colors ${
            locale === lang
              ? 'text-[#d4af37]'
              : 'text-[#a1a1aa] hover:text-[#fafafa]'
          }`}
          aria-label={`Switch to ${lang === 'en' ? 'English' : 'French'}`}
        >
          {labels[lang]}
        </button>
      ))}
    </div>
  );
}
