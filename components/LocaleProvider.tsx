'use client';

import { createContext, useContext, useMemo, useState, useCallback } from 'react';
import type { Locale } from '@/lib/locale';
import { defaultLocale, isLocale } from '@/lib/locale';
import { getMessages, type Messages } from '@/lib/translations';

type LocaleContextType = {
  locale: Locale;
  messages: Messages;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextType>({
  locale: defaultLocale,
  messages: getMessages(defaultLocale),
  setLocale: () => {},
});

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale;
  const match = document.cookie.match(/(?:^|;\s*)NEXT_LOCALE=([^;]*)/);
  if (match && isLocale(match[1])) return match[1];
  return defaultLocale;
}

export function useLocale() {
  return useContext(LocaleContext);
}

export function useTranslation() {
  const { messages } = useContext(LocaleContext);
  return messages;
}

export default function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
    document.documentElement.lang = newLocale;
    setLocaleState(newLocale);
  }, []);

  const value = useMemo(
    () => ({ locale, messages: getMessages(locale), setLocale }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}
