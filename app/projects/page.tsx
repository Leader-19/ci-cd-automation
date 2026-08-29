import type { Metadata } from 'next';
import { Box, Container, Typography } from '@mui/material';
import ProjectGrid from '@/components/ProjectGrid';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore professional, internship and academic case studies from the PNC student team.',
};

export default function ProjectsPage() {
  return (
    <>
      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', py: { xs: 7, md: 10 } }}>
        <Container maxWidth="xl">
          <Typography variant="overline" color="primary.main" fontWeight={800}>PROJECTS & EXPERIENCE</Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.8rem', md: '5rem' }, maxWidth: 980, mt: 1 }}>Work that turns learning into evidence.</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 820, fontSize: { xs: '1rem', md: '1.16rem' }, lineHeight: 1.8, mt: 2 }}>{projects.length} curated case studies combine professional experience, internships and academic projects documented in the team CV pack.</Typography>
        </Container>
      </Box>
      <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
        <ProjectGrid />
      </Container>
    </>
  );
}
