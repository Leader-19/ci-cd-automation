import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import BrandLogo from './BrandLogo';

const links = [
  ['About', '/about'], ['Team', '/team'], ['Expertise', '/expertise'], ['Projects', '/projects'], ['Contact', '/contact']
];

export default function SiteFooter() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', borderTop: '1px solid', borderColor: 'divider', mt: 10 }}>
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" gap={4} alignItems={{ md: 'flex-end' }}>
          <Box sx={{ maxWidth: 620 }}>
            <Box component={Link} href="/" aria-label="PNC Team home" sx={{ display: 'inline-flex', mb: 2 }}>
              <BrandLogo sx={{ width: { xs: 186, sm: 218 }, height: { xs: 50, sm: 58 } }} />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1.5 }}>Learning, building and growing through technology.</Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>A student technology team portfolio presenting practical experience across development, QA, planning, data and infrastructure.</Typography>
          </Box>
          <Button component={Link} href="/team" variant="outlined" endIcon={<ArrowForwardRoundedIcon />}>Explore the Team</Button>
        </Stack>
        <Divider sx={{ my: 5 }} />
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" gap={2}>
          <Stack direction="row" gap={2.5} flexWrap="wrap">
            {links.map(([label, href]) => <Typography key={href} component={Link} href={href} variant="body2" color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>{label}</Typography>)}
          </Stack>
          <Typography variant="body2" color="text.secondary">© 2026 PNC Student Team. Frontend portfolio MVP.</Typography>
        </Stack>
      </Container>
    </Box>
  );
}
