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

const colorModeStorageKey = 'pnc-team-color-mode';
const localeStorageKey = 'pnc-team-locale';

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
    const savedMode = window.localStorage.getItem(colorModeStorageKey);
    if (savedMode === 'light' || savedMode === 'dark') setMode(savedMode);
  }, []);

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(localeStorageKey);
    if (savedLocale === 'km' || savedLocale === 'en') setLocale(savedLocale);
  }, []);
  const value = useMemo(
    () => ({
      mode,
      toggleMode: () => setMode((previous) => {
        const nextMode = previous === 'light' ? 'dark' : 'light';
        window.localStorage.setItem(colorModeStorageKey, nextMode);
        return nextMode;
      }),
    }),
    [mode],
  );
  const theme = useMemo(() => buildTheme(mode, locale), [mode, locale]);
  const localeValue = useMemo(() => ({
    locale,
    messages: messages[locale],
    switchLocale: (nextLocale: Locale) => {
      if (nextLocale === locale) return;
      window.localStorage.setItem(localeStorageKey, nextLocale);
      setLocale(nextLocale);
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
