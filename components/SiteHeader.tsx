'use client';

import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useColorMode, useLocale } from './Providers';
import BrandLogo from './BrandLogo';

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { mode, toggleMode } = useColorMode();
  const { locale, messages, switchLocale } = useLocale();
  const nav = [
    { label: messages.nav.home, href: '/' }, { label: messages.nav.about, href: '/about' },
    { label: messages.nav.team, href: '/team' }, { label: messages.nav.expertise, href: '/expertise' },
    { label: messages.nav.projects, href: '/projects' },
  ];

  const currentPath = pathname.replace(/^\/(en|km)(?=\/|$)/, '') || '/';
  const localizedHref = (href: string) => `/${locale}${href === '/' ? '' : href}`;
  const active = (href: string) => href === '/' ? currentPath === '/' : currentPath.startsWith(href);

  return (
    <>
      <AppBar position="sticky" elevation={0} color="transparent" sx={{ borderBottom: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', zIndex: 1200 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 68, md: 72 } }}>
            <Box component={Link} href={localizedHref('/')} aria-label="PNC Team home" sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              <BrandLogo />
            </Box>

            <Stack direction="row" spacing={0.5} sx={{ mx: 'auto', display: { xs: 'none', md: 'flex' } }}>
              {nav.map((item) => (
                <Button
                  key={item.href}
                  component={Link}
                  href={localizedHref(item.href)}
                  color={active(item.href) ? 'primary' : 'inherit'}
                  sx={{
                    minHeight: 44,
                    px: 1.7,
                    position: 'relative',
                    overflow: 'visible',
                    color: active(item.href) ? 'primary.main' : 'text.secondary',
                    fontSize: '13.5px',
                    fontWeight: active(item.href) ? 600 : 500,
                    bgcolor: 'transparent',
                    transition: 'color 180ms ease',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: '50%',
                      bottom: 3,
                      width: 'calc(100% - 26px)',
                      height: 2.5,
                      borderRadius: 999,
                      bgcolor: 'primary.main',
                      transform: `translateX(-50%) scaleX(${active(item.href) ? 1 : 0})`,
                      transformOrigin: 'center',
                      opacity: active(item.href) ? 1 : 0,
                      transition: 'transform 260ms cubic-bezier(0.22, 1, 0.36, 1), opacity 180ms ease',
                    },
                    '&:hover': {
                      color: 'primary.main',
                      bgcolor: 'transparent',
                      '&::after': { transform: 'translateX(-50%) scaleX(1)', opacity: 1 },
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center" sx={{ ml: 'auto' }}>
              <Tooltip title={locale === 'en' ? 'ប្ដូរទៅភាសាខ្មែរ' : 'Switch to English'}>
                <IconButton onClick={() => switchLocale(locale === 'en' ? 'km' : 'en')} aria-label="Switch language" sx={{ border: '1px solid', borderColor: 'divider', width: 42, height: 42, p: 0.45 }}>
                  <Box component="img" src={locale === 'en' ? '/logo-flag/en.png' : '/logo-flag/kh.png'} alt={locale === 'en' ? 'English' : 'ខ្មែរ'} sx={{ width: 28, height: 28, objectFit: 'contain', borderRadius: '50%' }} />
                </IconButton>
              </Tooltip>
              <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
                <IconButton onClick={toggleMode} aria-label="Toggle color mode" sx={{ border: '1px solid', borderColor: 'divider', width: 42, height: 42 }}>
                  {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
                </IconButton>
              </Tooltip>
              <Button component={Link} href={localizedHref('/contact')} variant="contained" endIcon={<ArrowOutwardRoundedIcon />} sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>
                {messages.nav.connect}
              </Button>
              <IconButton onClick={() => setOpen(true)} aria-label="Open navigation" sx={{ display: { md: 'none' }, border: '1px solid', borderColor: 'divider', width: 42, height: 42 }}>
                <MenuRoundedIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { width: 'min(88vw, 280px)' } }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: 2.5, borderBottom: '1px solid', borderColor: 'divider' }}>
          <BrandLogo sx={{ width: 164, height: 43 }} />
          <IconButton onClick={() => setOpen(false)} aria-label="Close navigation"><CloseRoundedIcon /></IconButton>
        </Stack>
        <List sx={{ p: 1.5 }}>
          {[...nav, { label: messages.nav.contact, href: '/contact' }].map((item) => (
            <ListItemButton key={item.href} component={Link} href={localizedHref(item.href)} selected={active(item.href)} onClick={() => setOpen(false)} sx={{ borderRadius: 1, mb: 0.5, minHeight: 50 }}>
              <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: active(item.href) ? 800 : 650 }} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
