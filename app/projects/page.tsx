import type { Metadata } from 'next';
import { Box, Container, Typography } from '@mui/material';
import ProjectGrid from '@/components/ProjectGrid';
import { projects } from '@/data/projects';
import LocalizedText from '@/components/LocalizedText';
import JsonLd from '@/components/JsonLd';
import { createPageMetadata, siteUrl } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({ title: 'Technology Projects and Case Studies', description: 'Explore professional, internship and academic software, QA, data and telecom case studies from the PNC student team.', path: '/projects', keywords: ['Cambodia student projects', 'software case studies', 'web development portfolio'] });

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ItemList', name: 'PNC Student Team Projects', itemListElement: projects.map((project, index) => ({ '@type': 'ListItem', position: index + 1, item: { '@type': 'CreativeWork', name: project.title, description: project.summary, url: `${siteUrl}/projects/${project.slug}` } })) }} />
      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', py: { xs: 5, md: 7 } }}>
        <Container maxWidth="xl">
          <Typography variant="overline" color="primary.main" fontWeight={800}><LocalizedText en="PROJECTS & EXPERIENCE" km="គម្រោង និងបទពិសោធន៍" /></Typography>
          <Typography variant="h1" sx={{ maxWidth: 720, mt: 1 }}><LocalizedText en="Work that turns learning into evidence." km="ការងារដែលបម្លែងការសិក្សាទៅជាស្នាដៃជាក់ស្តែង។" /></Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 700, fontSize: { xs: '14px', md: '15px' }, lineHeight: 1.7, mt: 1.5 }}><LocalizedText en={`${projects.length} curated case studies combine professional experience, internships and academic projects documented in the team CV pack.`} km={`គម្រោងសិក្សាករណីចំនួន ${projects.length} រួមបញ្ចូលបទពិសោធន៍វិជ្ជាជីវៈ កម្មសិក្សា និងគម្រោងសិក្សាដែលបានកត់ត្រាក្នុង CV របស់ក្រុម។`} /></Typography>
        </Container>
      </Box>
      <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
        <ProjectGrid />
      </Container>
    </>
  );
}
