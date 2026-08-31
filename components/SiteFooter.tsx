'use client';

import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import BrandLogo from './BrandLogo';
import { useLocale } from './Providers';

export default function SiteFooter() {
  const { locale, messages } = useLocale();
  const href = (path: string) => path;
  const links = [
    [messages.nav.about, '/about'], [messages.nav.team, '/team'], [messages.nav.expertise, '/expertise'], [messages.nav.projects, '/projects'], [messages.nav.contact, '/contact'],
  ];
  const km = locale === 'km';

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', borderTop: '1px solid', borderColor: 'divider', mt: 10 }}>
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" gap={4} alignItems={{ md: 'flex-end' }}>
          <Box sx={{ maxWidth: 620 }}>
            <Box component={Link} href="/" aria-label="PNC Team home" sx={{ display: 'inline-flex', mb: 2 }}>
              <BrandLogo sx={{ width: { xs: 186, sm: 218 }, height: { xs: 50, sm: 58 } }} />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1.5 }}>{km ? 'រៀន បង្កើត និងរីកចម្រើនតាមរយៈបច្ចេកវិទ្យា។' : 'Learning, building and growing through technology.'}</Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>{km ? 'ស្នាដៃក្រុមនិស្សិតបច្ចេកវិទ្យា ដែលបង្ហាញបទពិសោធន៍ជាក់ស្តែងផ្នែកអភិវឌ្ឍន៍ ការធានាគុណភាព ការរៀបចំផែនការ ទិន្នន័យ និងហេដ្ឋារចនាសម្ព័ន្ធ។' : 'A student technology team portfolio presenting practical experience across development, QA, planning, data and infrastructure.'}</Typography>
          </Box>
          <Button component={Link} href={href('/team')} variant="outlined" endIcon={<ArrowForwardRoundedIcon />}>{km ? 'ស្វែងយល់ពីក្រុម' : 'Explore the Team'}</Button>
        </Stack>
        <Divider sx={{ my: 5 }} />
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" gap={2}>
          <Stack direction="row" gap={2.5} flexWrap="wrap">
            {links.map(([label, path]) => <Typography key={path} component={Link} href={href(path)} variant="body2" color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>{label}</Typography>)}
          </Stack>
          <Typography variant="body2" color="text.secondary">{km ? '© 2026 PNCTEAMSTARTUP · ក្រុមនិស្សិត PNC។ ស្នាដៃ Frontend Portfolio MVP។' : '© 2026 PNCTEAMSTARTUP · PNC Student Team. Frontend portfolio MVP.'}</Typography>
        </Stack>
      </Container>
    </Box>
  );
}
