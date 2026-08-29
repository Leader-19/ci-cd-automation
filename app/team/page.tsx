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
      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', py: { xs: 7, md: 10 } }}>
        <Container maxWidth="xl">
          <Typography variant="overline" color="primary.main" fontWeight={800}>OUR TEAM</Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.8rem', md: '5rem' }, maxWidth: 900, mt: 1 }}>Seven people. Different paths. One shared portfolio.</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 760, fontSize: { xs: '1rem', md: '1.16rem' }, lineHeight: 1.8, mt: 2 }}>Open any profile to see verified experience, education, technical skills, projects, contact information and CV access where supplied.</Typography>
        </Container>
      </Box>
      <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
        <TeamGrid />
      </Container>
    </>
  );
}
