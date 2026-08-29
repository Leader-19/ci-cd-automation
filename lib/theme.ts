'use client';

import { createTheme } from '@mui/material/styles';

export const buildTheme = (mode: 'light' | 'dark') => {
  const isLight = mode === 'light';
  const border = isLight ? '#E4E7EC' : 'rgba(255,255,255,0.10)';

  return createTheme({
    palette: {
      mode,
      primary: { main: isLight ? '#155EEF' : '#4C8DFF', dark: '#103A9E', light: '#E9F0FF' },
      background: { default: isLight ? '#F7F9FC' : '#0B101B', paper: isLight ? '#FFFFFF' : '#111827' },
      text: { primary: isLight ? '#101828' : '#F8FAFC', secondary: isLight ? '#475467' : '#CBD5E1' },
      divider: border,
      success: { main: '#12B76A' },
      warning: { main: '#F79009' },
      error: { main: '#F04438' },
    },
    shape: { borderRadius: 12 },
    typography: {
      fontFamily: 'var(--font-public-sans), "Public Sans", sans-serif',
      fontSize: 14,
      h1: { fontSize: '26px', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', '@media (min-width:600px)': { fontSize: '30px' }, '@media (min-width:900px)': { fontSize: '34px' }, '@media (min-width:1200px)': { fontSize: '38px' }, '@media (min-width:1536px)': { fontSize: '40px' } },
      h2: { fontSize: '22px', fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.015em', '@media (min-width:600px)': { fontSize: '23px' }, '@media (min-width:900px)': { fontSize: '26px' }, '@media (min-width:1200px)': { fontSize: '29px' }, '@media (min-width:1536px)': { fontSize: '30px' } },
      h3: { fontSize: '18px', fontWeight: 600, lineHeight: 1.3, '@media (min-width:900px)': { fontSize: '20px' }, '@media (min-width:1200px)': { fontSize: '22px' } },
      h4: { fontSize: '16px', fontWeight: 600, lineHeight: 1.35, '@media (min-width:600px)': { fontSize: '17px' }, '@media (min-width:1200px)': { fontSize: '18px' } },
      h5: { fontSize: '15px', fontWeight: 600, lineHeight: 1.4, '@media (min-width:900px)': { fontSize: '16px' } },
      h6: { fontSize: '14px', fontWeight: 600, lineHeight: 1.45 },
      body1: { fontSize: '14px', fontWeight: 400, lineHeight: 1.65 },
      body2: { fontSize: '13px', fontWeight: 400, lineHeight: 1.55 },
      caption: { fontSize: '12px', fontWeight: 400, lineHeight: 1.45 },
      overline: { fontSize: '11px', fontWeight: 700, lineHeight: 1.4, letterSpacing: '0.08em' },
      button: { fontSize: '13.5px', fontWeight: 600, lineHeight: 1, textTransform: 'none' },
    },
    components: {
      MuiCssBaseline: { styleOverrides: { html: { scrollBehavior: 'smooth', WebkitTextSizeAdjust: '100%', scrollbarWidth: 'thin', scrollbarColor: isLight ? '#98A2B3 transparent' : '#667085 transparent' }, body: { margin: 0, fontSize: '14px', overflowX: 'hidden' }, 'button, input, textarea, select': { fontFamily: 'inherit' }, '::selection': { backgroundColor: isLight ? '#155EEF' : '#4C8DFF', color: '#FFFFFF' }, a: { color: 'inherit', textDecoration: 'none' }, ':focus-visible': { outline: `2px solid ${isLight ? '#155EEF' : '#4C8DFF'}`, outlineOffset: 2 }, '*::-webkit-scrollbar': { width: 8, height: 8 }, '*::-webkit-scrollbar-track': { backgroundColor: 'transparent' }, '*::-webkit-scrollbar-thumb': { backgroundColor: isLight ? '#98A2B3' : '#667085', border: '2px solid transparent', backgroundClip: 'padding-box', borderRadius: 999 }, '*::-webkit-scrollbar-thumb:hover': { backgroundColor: isLight ? '#667085' : '#98A2B3' }, '*::-webkit-scrollbar-corner': { backgroundColor: 'transparent' } } },
      MuiContainer: { styleOverrides: { root: { paddingLeft: '16px', paddingRight: '16px', '@media (min-width:600px)': { paddingLeft: '20px', paddingRight: '20px' }, '@media (min-width:900px)': { paddingLeft: '24px', paddingRight: '24px' }, '@media (min-width:1200px)': { paddingLeft: '32px', paddingRight: '32px' }, '@media (min-width:1536px)': { paddingLeft: '40px', paddingRight: '40px' } }, maxWidthXl: { maxWidth: '1440px !important' } } },
      MuiButton: { styleOverrides: { root: { minHeight: 40, borderRadius: 10, padding: '0 16px', boxShadow: 'none', transition: 'transform 160ms ease, box-shadow 160ms ease, background-color 160ms ease, border-color 160ms ease', '&:hover': { boxShadow: 'none', transform: 'translateY(-1px)' }, '&:active': { transform: 'translateY(0)' } }, sizeSmall: { minHeight: 36, fontSize: '12.5px', padding: '0 12px' }, sizeLarge: { minHeight: 44, padding: '0 18px' } } },
      MuiCard: { styleOverrides: { root: { backgroundImage: 'none', border: `1px solid ${border}`, boxShadow: isLight ? '0 1px 2px rgba(16,24,40,0.04)' : '0 1px 2px rgba(0,0,0,0.16)' } } },
      MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
      MuiCardContent: { styleOverrides: { root: { '&:last-child': { paddingBottom: '24px' } } } },
      MuiChip: { styleOverrides: { root: { minHeight: 28, borderRadius: 8, fontWeight: 600, fontSize: '12px' }, sizeSmall: { minHeight: 24, fontSize: '11px' } } },
      MuiOutlinedInput: { styleOverrides: { root: { minHeight: 42, borderRadius: 10 }, input: { fontSize: '14px', padding: '10px 14px' } } },
      MuiInputLabel: { styleOverrides: { root: { fontSize: '13px', fontWeight: 500 } } },
      MuiAppBar: { styleOverrides: { root: { backgroundImage: 'none' } } },
      MuiTooltip: { styleOverrides: { tooltip: { fontSize: '12px', borderRadius: 8 } } },
      MuiIconButton: { styleOverrides: { root: { '&:hover': { backgroundColor: isLight ? '#F2F4F7' : '#182230' } } } },
    },
  });
};
