'use client';

import { createTheme } from '@mui/material/styles';

export const buildTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      primary: { main: '#155EEF', dark: '#0B4BD4', light: '#E9F0FF' },
      background: {
        default: mode === 'light' ? '#F6F8FB' : '#08111F',
        paper: mode === 'light' ? '#FFFFFF' : '#0E1A2B',
      },
      text: {
        primary: mode === 'light' ? '#101828' : '#F8FAFC',
        secondary: mode === 'light' ? '#667085' : '#A8B3C7',
      },
      divider: mode === 'light' ? '#E4E7EC' : '#243247',
      success: { main: '#067647' },
      warning: { main: '#B54708' },
      error: { main: '#B42318' },
    },
    shape: { borderRadius: 12 },
    typography: {
      fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      h1: { fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.02 },
      h2: { fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.08 },
      h3: { fontWeight: 750, letterSpacing: '-0.025em', lineHeight: 1.15 },
      h4: { fontWeight: 750, letterSpacing: '-0.02em' },
      button: { textTransform: 'none', fontWeight: 700 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: { scrollBehavior: 'smooth' },
          body: { margin: 0 },
          '::selection': { backgroundColor: '#155EEF', color: '#FFFFFF' },
          a: { color: 'inherit', textDecoration: 'none' },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            minHeight: 46,
            borderRadius: 11,
            paddingInline: 20,
            boxShadow: 'none',
            transition: 'transform 160ms ease, box-shadow 160ms ease, background-color 160ms ease',
            '&:hover': { boxShadow: 'none', transform: 'translateY(-1px)' },
            '&:active': { transform: 'scale(0.98)' },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            border: `1px solid ${mode === 'light' ? '#E4E7EC' : '#243247'}`,
            boxShadow: 'none',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { borderRadius: 9, fontWeight: 650 },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: { borderRadius: 12 },
        },
      },
    },
  });
