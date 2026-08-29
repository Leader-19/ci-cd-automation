import type { Metadata } from 'next';
import { Avatar, AvatarGroup, Box, Button, Card, CardContent, Chip, Container, Divider, Stack, Typography } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectBySlug, projects } from '@/data/projects';
import { teamMembers } from '@/data/team';
import { TechnologyBadge } from '@/components/TechIcon';
import { Reveal } from '@/components/Motion';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return { title: 'Project' };
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();
  const members = project.memberSlugs.map((memberSlug) => teamMembers.find((member) => member.slug === memberSlug)).filter(Boolean);

  return (
    <>
      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
          <Button component={Link} href="/projects" variant="text" startIcon={<ArrowBackRoundedIcon />} sx={{ px: 0, mb: 3 }}>Back to Projects</Button>
          <Stack direction="row" gap={1} flexWrap="wrap" sx={{ mb: 2 }}><Chip label={project.category} color="primary" /><Chip label={project.status} variant="outlined" /><Chip label={project.period} variant="outlined" /></Stack>
          <Typography variant="h1" sx={{ maxWidth: 840 }}>{project.title}</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 760, fontSize: { xs: '14px', md: '15px' }, lineHeight: 1.7, mt: 1.5 }}>{project.summary}</Typography>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 3 }}>
            <AvatarGroup max={5}>{members.map((member) => member ? <Avatar key={member.slug} src={member.photo} alt={member.name} /> : null)}</AvatarGroup>
            <Box><Typography variant="caption" color="text.secondary">PROFILE SOURCE</Typography><Typography fontWeight={800}>{project.owner}</Typography></Box>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '0.8fr 1.2fr' }, gap: 3 }}>
          <Stack spacing={3}>
            <Reveal><Card><CardContent sx={{ p: 3.2 }}><Typography variant="overline" color="primary.main" fontWeight={800}>PROBLEM / GOAL</Typography><Typography variant="h4" sx={{ mt: 1, fontWeight: 800 }}>What needed to improve</Typography><Typography color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.8 }}>{project.problem}</Typography></CardContent></Card></Reveal>
            <Reveal><Card><CardContent sx={{ p: 3.2 }}><Typography variant="overline" color="primary.main" fontWeight={800}>SOLUTION / APPROACH</Typography><Typography variant="h4" sx={{ mt: 1, fontWeight: 800 }}>How the work approached it</Typography><Typography color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.8 }}>{project.solution}</Typography></CardContent></Card></Reveal>
            {project.repo && <Button component="a" href={project.repo} target="_blank" rel="noreferrer" variant="outlined" endIcon={<span aria-hidden>↗</span>}>Open repository</Button>}
          </Stack>

          <Stack spacing={3}>
            <Reveal><Card><CardContent sx={{ p: 3.2 }}><Typography variant="h4" fontWeight={800}>Key Features</Typography><Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 1.2, mt: 2.2 }}>{project.features.map((feature) => <Stack key={feature} direction="row" spacing={1} alignItems="center" sx={{ p: 1.4, border: '1px solid', borderColor: 'divider', borderRadius: 2.2 }}><CheckCircleOutlineRoundedIcon color="primary" fontSize="small" /><Typography fontWeight={650}>{feature}</Typography></Stack>)}</Box></CardContent></Card></Reveal>
            <Reveal><Card><CardContent sx={{ p: 3.2 }}><Typography variant="h4" fontWeight={800}>Technology Stack</Typography><Stack direction="row" gap={0.8} flexWrap="wrap" sx={{ mt: 2.2 }}>{project.technologies.map((tech) => <TechnologyBadge key={tech} name={tech} />)}</Stack></CardContent></Card></Reveal>
            <Reveal><Card><CardContent sx={{ p: 3.2 }}><Typography variant="h4" fontWeight={800}>Outcome & Learning</Typography><Stack divider={<Divider flexItem />} sx={{ mt: 1.5 }}>{project.outcomes.map((outcome) => <Stack key={outcome} direction="row" spacing={1.3} sx={{ py: 1.6 }}><CheckCircleOutlineRoundedIcon color="primary" /><Typography color="text.secondary">{outcome}</Typography></Stack>)}</Stack></CardContent></Card></Reveal>
            <Reveal><Card><CardContent sx={{ p: 3.2 }}><Typography variant="h4" fontWeight={800}>Related Team Members</Typography><Stack spacing={1.2} sx={{ mt: 2 }}>{members.map((member) => member ? <Box key={member.slug} component={Link} href={`/team/${member.slug}`} sx={{ display: 'flex', alignItems: 'center', gap: 1.4, p: 1.2, border: '1px solid', borderColor: 'divider', borderRadius: 2.2, '&:hover': { borderColor: 'primary.main' } }}><Avatar src={member.photo} alt={member.name} /><Box><Typography fontWeight={800}>{member.name}</Typography><Typography variant="caption" color="text.secondary">{member.role}</Typography></Box></Box> : null)}</Stack></CardContent></Card></Reveal>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
