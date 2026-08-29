'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createContext, useContext, useMemo, useState } from 'react';
import { buildTheme } from '@/lib/theme';

const ModeContext = createContext({
  mode: 'light' as 'light' | 'dark',
  toggleMode: () => {},
});

export function useColorMode() {
  return useContext(ModeContext);
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const value = useMemo(
    () => ({ mode, toggleMode: () => setMode((previous) => (previous === 'light' ? 'dark' : 'light')) }),
    [mode],
  );
  const theme = useMemo(() => buildTheme(mode), [mode]);

  return (
    <AppRouterCacheProvider options={{ key: 'mui' }}>
      <ModeContext.Provider value={value}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ModeContext.Provider>
    </AppRouterCacheProvider>
  );
}
