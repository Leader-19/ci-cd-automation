import { Box, Button, Container, Stack, Typography } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 10, md: 16 } }}>
      <Box sx={{ textAlign: 'center', p: { xs: 4, md: 7 }, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 4 }}>
        <Typography sx={{ fontSize: { xs: '56px', md: '72px' }, fontWeight: 700, color: 'primary.main', lineHeight: 1 }}>404</Typography>
        <Typography variant="h3" sx={{ mt: 2 }}>This page is not in the portfolio.</Typography>
        <Typography color="text.secondary" sx={{ mt: 1.5 }}>Use one of the actions below to continue exploring the team.</Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} justifyContent="center" sx={{ mt: 4 }}>
          <Button component={Link} href="/" variant="contained" startIcon={<HomeRoundedIcon />}>Back to Home</Button>
          <Button component={Link} href="/team" variant="outlined" startIcon={<GroupsRoundedIcon />}>Explore Team</Button>
        </Stack>
      </Box>
    </Container>
  );
}
