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
      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', py: { xs: 5, md: 7 } }}>
        <Container maxWidth="xl">
          <Typography variant="overline" color="primary.main" fontWeight={800}>PROJECTS & EXPERIENCE</Typography>
          <Typography variant="h1" sx={{ maxWidth: 720, mt: 1 }}>Work that turns learning into evidence.</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 700, fontSize: { xs: '14px', md: '15px' }, lineHeight: 1.7, mt: 1.5 }}>{projects.length} curated case studies combine professional experience, internships and academic projects documented in the team CV pack.</Typography>
        </Container>
      </Box>
      <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
        <ProjectGrid />
      </Container>
    </>
  );
}
