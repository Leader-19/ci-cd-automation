'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { buildTheme } from '@/lib/theme';
import { type Locale, messages, type Messages } from '@/lib/i18n';

const ModeContext = createContext({
  mode: 'light' as 'light' | 'dark',
  toggleMode: () => {},
});

const LocaleContext = createContext({
  locale: 'en' as Locale,
  messages: messages.en as Messages,
  switchLocale: (_locale: Locale) => {},
});

export function useColorMode() {
  return useContext(ModeContext);
}

export function useLocale() {
  return useContext(LocaleContext);
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    const detected = window.location.pathname.split('/')[1];
    if (detected === 'km' || detected === 'en') setLocale(detected);
  }, []);
  const value = useMemo(
    () => ({ mode, toggleMode: () => setMode((previous) => (previous === 'light' ? 'dark' : 'light')) }),
    [mode],
  );
  const theme = useMemo(() => buildTheme(mode, locale), [mode, locale]);
  const localeValue = useMemo(() => ({
    locale,
    messages: messages[locale],
    switchLocale: (nextLocale: Locale) => {
      if (nextLocale === locale) return;
      document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
      const path = window.location.pathname.replace(/^\/(en|km)(?=\/|$)/, '') || '/';
      window.location.assign(`/${nextLocale}${path}`);
    },
  }), [locale]);

  useEffect(() => {
    document.documentElement.lang = locale === 'km' ? 'km' : 'en';
    document.documentElement.dataset.locale = locale;
  }, [locale]);

  return (
    <AppRouterCacheProvider options={{ key: 'mui' }}>
      <ModeContext.Provider value={value}>
        <LocaleContext.Provider value={localeValue}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </LocaleContext.Provider>
      </ModeContext.Provider>
    </AppRouterCacheProvider>
  );
}
