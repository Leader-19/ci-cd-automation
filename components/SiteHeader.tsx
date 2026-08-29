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
import { useColorMode } from './Providers';

const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'Projects', href: '/projects' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { mode, toggleMode } = useColorMode();

  const active = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <AppBar position="sticky" elevation={0} color="transparent" sx={{ borderBottom: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', zIndex: 1200 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 68, md: 76 } }}>
            <Stack component={Link} href="/" direction="row" spacing={1.25} alignItems="center" sx={{ flexShrink: 0 }}>
              <Box sx={{ width: 42, height: 42, borderRadius: 2, bgcolor: 'primary.main', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: 13, letterSpacing: '-0.03em' }}>PNC</Box>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Typography sx={{ fontWeight: 850, lineHeight: 1.1, letterSpacing: '-0.03em' }}>Student Team</Typography>
                <Typography variant="caption" color="text.secondary">Technology Portfolio</Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={0.5} sx={{ mx: 'auto', display: { xs: 'none', md: 'flex' } }}>
              {nav.map((item) => (
                <Button
                  key={item.href}
                  component={Link}
                  href={item.href}
                  color={active(item.href) ? 'primary' : 'inherit'}
                  sx={{ minHeight: 40, px: 1.7, color: active(item.href) ? 'primary.main' : 'text.secondary', fontWeight: active(item.href) ? 800 : 650, bgcolor: active(item.href) ? 'action.hover' : 'transparent' }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center" sx={{ ml: 'auto' }}>
              <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
                <IconButton onClick={toggleMode} aria-label="Toggle color mode" sx={{ border: '1px solid', borderColor: 'divider', width: 42, height: 42 }}>
                  {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
                </IconButton>
              </Tooltip>
              <Button component={Link} href="/contact" variant="contained" endIcon={<ArrowOutwardRoundedIcon />} sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>
                Let&apos;s Connect
              </Button>
              <IconButton onClick={() => setOpen(true)} aria-label="Open navigation" sx={{ display: { md: 'none' }, border: '1px solid', borderColor: 'divider', width: 42, height: 42 }}>
                <MenuRoundedIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { width: 'min(88vw, 360px)' } }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: 2.5, borderBottom: '1px solid', borderColor: 'divider' }}>
          <Typography fontWeight={850}>PNC Student Team</Typography>
          <IconButton onClick={() => setOpen(false)} aria-label="Close navigation"><CloseRoundedIcon /></IconButton>
        </Stack>
        <List sx={{ p: 1.5 }}>
          {[...nav, { label: 'Contact', href: '/contact' }].map((item) => (
            <ListItemButton key={item.href} component={Link} href={item.href} selected={active(item.href)} onClick={() => setOpen(false)} sx={{ borderRadius: 2, mb: 0.5, minHeight: 50 }}>
              <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: active(item.href) ? 800 : 650 }} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
