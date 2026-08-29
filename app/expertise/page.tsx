import type { Metadata } from 'next';
import { Avatar, AvatarGroup, Box, Card, CardContent, Container, Stack, Typography } from '@mui/material';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import BugReportRoundedIcon from '@mui/icons-material/BugReportRounded';
import RouteRoundedIcon from '@mui/icons-material/RouteRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import CloudQueueRoundedIcon from '@mui/icons-material/CloudQueueRounded';
import RouterRoundedIcon from '@mui/icons-material/RouterRounded';
import { expertiseAreas } from '@/data/expertise';
import { teamMembers } from '@/data/team';
import { TechnologyBadge } from '@/components/TechIcon';
import { Reveal } from '@/components/Motion';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Expertise',
  description: 'Explore the PNC student team’s expertise across development, QA, planning, data, cloud and telecommunications.',
};

const icons = [CodeRoundedIcon, BugReportRoundedIcon, RouteRoundedIcon, StorageRoundedIcon, CloudQueueRoundedIcon, RouterRoundedIcon];

export default function ExpertisePage() {
  return (
    <>
      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', py: { xs: 5, md: 7 } }}>
        <Container maxWidth="xl">
          <Typography variant="overline" color="primary.main" fontWeight={800}>EXPERTISE</Typography>
          <Typography variant="h1" sx={{ maxWidth: 720, mt: 1 }}>Skills connected to practical work.</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 700, fontSize: { xs: '14px', md: '15px' }, lineHeight: 1.7, mt: 1.5 }}>We avoid fake percentage ratings. Instead, the site shows focus areas, tools actually documented in CVs and the people connected to each area.</Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 11 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2.5 }}>
          {expertiseAreas.map((area, index) => {
            const Icon = icons[index] || CodeRoundedIcon;
            const members = area.members.map((slug) => teamMembers.find((member) => member.slug === slug)).filter(Boolean);
            return (
              <Reveal key={area.title} delay={index * 0.05}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Box sx={{ width: 50, height: 50, borderRadius: 1, bgcolor: 'primary.main', color: '#fff', display: 'grid', placeItems: 'center' }}><Icon /></Box>
                      <Typography variant="h4" fontWeight={800}>{area.title}</Typography>
                    </Stack>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.8, mt: 2 }}>{area.description}</Typography>
                    <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mt: 2.5, mb: 0.8 }}>RELATED TECHNOLOGIES</Typography>
                    <Stack direction="row" gap={0.8} flexWrap="wrap">{area.technologies.map((tech) => <TechnologyBadge key={tech} name={tech} compact />)}</Stack>
                    <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mt: 2.5, mb: 0.8 }}>RELATED MEMBERS</Typography>
                    <AvatarGroup max={5} sx={{ justifyContent: 'flex-end', flexDirection: 'row' }}>{members.map((member) => member ? <Avatar key={member.slug} src={member.photo} alt={member.name} title={member.name} /> : null)}</AvatarGroup>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </Box>
      </Container>

      <Box sx={{ bgcolor: 'background.paper', borderBlock: '1px solid', borderColor: 'divider', py: { xs: 8, md: 11 } }}>
        <Container maxWidth="xl">
          <Reveal><SectionHeading eyebrow="TECHNOLOGY SYSTEM" title="Visual technology badges, not text-only lists" description="The MVP uses compact neutral Material UI tiles and recognizable brand icons, following the supplied visual reference while keeping the overall interface clean and professional." /></Reveal>
          <Stack direction="row" gap={1} flexWrap="wrap">
            {['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Material UI', 'Framer Motion', 'Vue.js', 'Laravel', 'PHP', 'Python', 'Node.js', 'MySQL', 'PostgreSQL', 'SQL Server', 'Figma', 'GitHub', 'Jira', 'Postman', 'AWS', 'Docker', 'Kubernetes', 'Linux'].map((tech) => <TechnologyBadge key={tech} name={tech} />)}
          </Stack>
        </Container>
      </Box>
    </>
  );
}
