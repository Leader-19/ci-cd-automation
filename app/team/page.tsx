import type { Metadata } from 'next';
import { Box, Container, Typography } from '@mui/material';
import TeamGrid from '@/components/TeamGrid';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet all seven PNC student team members and explore their professional profiles.',
};

export default function TeamPage() {
  return (
    <>
      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', py: { xs: 5, md: 7 } }}>
        <Container maxWidth="xl">
          <Typography variant="overline" color="primary.main" fontWeight={800}>OUR TEAM</Typography>
          <Typography variant="h1" sx={{ maxWidth: 720, mt: 1 }}>Seven people. Different paths. One shared portfolio.</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 680, fontSize: { xs: '14px', md: '15px' }, lineHeight: 1.7, mt: 1.5 }}>Open any profile to see verified experience, education, technical skills, projects, contact information and CV access where supplied.</Typography>
        </Container>
      </Box>
      <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
        <TeamGrid />
      </Container>
    </>
  );
}
