'use client';

import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import BugReportRoundedIcon from '@mui/icons-material/BugReportRounded';
import RouteRoundedIcon from '@mui/icons-material/RouteRounded';
import RouterRoundedIcon from '@mui/icons-material/RouterRounded';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import IntroSplash from './IntroSplash';
import { Reveal } from './Motion';
import SectionHeading from './SectionHeading';
import TeamCard from './TeamCard';
import ProjectCard from './ProjectCard';
import { TechnologyBadge } from './TechIcon';
import { teamMembers } from '@/data/team';
import { projects } from '@/data/projects';

const techRail = ['Next.js', 'React.js', 'TypeScript', 'Material UI', 'Framer Motion', 'Vue.js', 'Laravel', 'JavaScript', 'Figma', 'GitHub', 'PostgreSQL', 'AWS'];

const expertise = [
  { title: 'Web Development', text: 'Responsive frontend, full-stack applications and practical digital products.', icon: CodeRoundedIcon },
  { title: 'Quality Assurance', text: 'Manual QA, regression, UAT, test cases and workflow validation.', icon: BugReportRoundedIcon },
  { title: 'Planning & Delivery', text: 'Task planning, collaboration and structured project delivery.', icon: RouteRoundedIcon },
  { title: 'Infrastructure & Telecom', text: 'Roaming operations, deployment tooling and technical systems.', icon: RouterRoundedIcon },
];

const steps = [
  ['01', 'Understand', 'Clarify the goal, users and practical requirements.'],
  ['02', 'Plan', 'Break work into deliverable tasks and responsibilities.'],
  ['03', 'Build', 'Implement clean, maintainable and testable solutions.'],
  ['04', 'Validate', 'Test workflows, fix issues and review the user experience.'],
  ['05', 'Deliver', 'Deploy, document and learn from the result.'],
];

export default function HomePage() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <IntroSplash onComplete={() => setIntroDone(true)} />}

      <Box component="section" sx={{ pt: { xs: 6, md: 9 }, pb: { xs: 8, md: 11 }, bgcolor: 'background.default', overflow: 'hidden' }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 1.08fr) minmax(460px, 0.92fr)' }, gap: { xs: 5, lg: 7 }, alignItems: 'center' }}>
            <Reveal>
              <Stack alignItems="flex-start">
                <Chip label="PNC STUDENT TECHNOLOGY TEAM" color="primary" variant="outlined" sx={{ mb: 2.5, fontWeight: 800 }} />
                <Typography variant="h1" sx={{ fontSize: { xs: '3rem', sm: '4.25rem', lg: '5.6rem' }, maxWidth: 840 }}>
                  We learn by building <Box component="span" sx={{ color: 'primary.main' }}>real technology.</Box>
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: { xs: '1.06rem', md: '1.2rem' }, lineHeight: 1.8, maxWidth: 720, mt: 2.5 }}>
                  Meet seven PNC student professionals across full-stack development, web engineering, quality assurance, planning, data and roaming & interconnection.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.4} sx={{ mt: 3.6, width: { xs: '100%', sm: 'auto' } }}>
                  <Button component={Link} href="/projects" variant="contained" size="large" endIcon={<ArrowForwardRoundedIcon />}>View Our Projects</Button>
                  <Button component={Link} href="/team" variant="outlined" size="large" startIcon={<GroupsRoundedIcon />}>Meet the Team</Button>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mt: 4 }}>
                  <AvatarGroup max={7} sx={{ '& .MuiAvatar-root': { width: 38, height: 38, borderColor: 'background.default' } }}>
                    {teamMembers.map((member) => <Avatar key={member.slug} src={member.photo} alt={member.name} />)}
                  </AvatarGroup>
                  <Box>
                    <Typography sx={{ fontWeight: 800, lineHeight: 1.2 }}>7 team members</Typography>
                    <Typography variant="caption" color="text.secondary">One shared learning journey</Typography>
                  </Box>
                </Stack>
              </Stack>
            </Reveal>

            <Reveal delay={0.1}>
              <Box sx={{ position: 'relative', height: { xs: 520, sm: 610 }, maxWidth: 620, mx: 'auto', width: '100%' }}>
                <Box sx={{ position: 'absolute', inset: '6% 8% 2% 10%', border: '1px solid', borderColor: 'divider', borderRadius: 5, bgcolor: 'background.paper' }} />
                {[
                  { member: teamMembers[0], top: '3%', left: '4%', width: '42%', rotate: '-3deg' },
                  { member: teamMembers[3], top: '9%', right: '3%', width: '39%', rotate: '3deg' },
                  { member: teamMembers[5], bottom: '5%', left: '8%', width: '38%', rotate: '2deg' },
                  { member: teamMembers[6], bottom: '1%', right: '6%', width: '39%', rotate: '-2deg' },
                ].map(({ member, ...position }) => (
                  <Box key={member.slug} sx={{ position: 'absolute', ...position, aspectRatio: '4 / 5', borderRadius: 3.5, overflow: 'hidden', border: '5px solid', borderColor: 'background.paper', boxShadow: '0 18px 44px rgba(16,24,40,0.16)', bgcolor: 'background.paper' }}>
                    <Image src={member.photo} alt={`${member.name} - ${member.role}`} fill sizes="300px" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                  </Box>
                ))}
                <Box sx={{ position: 'absolute', left: '37%', top: '43%', zIndex: 4, bgcolor: 'primary.main', color: '#fff', borderRadius: 3, p: 2.1, width: 190, boxShadow: '0 12px 30px rgba(21,94,239,0.28)' }}>
                  <Typography variant="caption" sx={{ color: '#EAF0FF', fontWeight: 700 }}>BUILD • TEST • LEARN</Typography>
                  <Typography sx={{ fontWeight: 900, fontSize: '1.3rem', mt: 0.3 }}>PNC Team</Typography>
                  <Typography variant="caption" sx={{ color: '#EAF0FF' }}>Practical technology portfolio</Typography>
                </Box>
              </Box>
            </Reveal>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: 'background.paper', py: 2.2, borderBlock: '1px solid', borderColor: 'divider', overflow: 'hidden' }}>
        <Container maxWidth="xl">
          <Stack direction="row" gap={1.1} flexWrap="wrap" justifyContent="center">
            {techRail.map((tech) => <TechnologyBadge key={tech} name={tech} />)}
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
        <Reveal>
          <SectionHeading eyebrow="TEAM SNAPSHOT" title="Different strengths. One team." description="The portfolio brings together practical experience from development, QA, project planning, data work and technical operations." />
        </Reveal>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2 }}>
          {[
            ['7', 'Team members'],
            ['6', 'Core expertise areas'],
            ['7+', 'Featured experiences'],
            ['20+', 'Technologies & tools'],
          ].map(([number, label], index) => (
            <Reveal key={label} delay={index * 0.05}>
              <Card><CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}><Typography sx={{ fontSize: { xs: '2.4rem', md: '3.2rem' }, fontWeight: 900, color: 'primary.main' }}>{number}</Typography><Typography color="text.secondary" sx={{ mt: 0.5 }}>{label}</Typography></CardContent></Card>
            </Reveal>
          ))}
        </Box>
      </Container>

      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper', borderBlock: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="xl">
          <Reveal><SectionHeading eyebrow="WHAT WE DO" title="A practical technology skill set" description="Our backgrounds are different, but our work connects through one goal: solving real problems with dependable technology." /></Reveal>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }, gap: 2 }}>
            {expertise.map(({ title, text, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 0.06}>
                <Card sx={{ height: '100%' }}><CardContent sx={{ p: 3 }}><Box sx={{ width: 50, height: 50, borderRadius: 2.5, bgcolor: 'primary.main', color: '#fff', display: 'grid', placeItems: 'center', mb: 2.4 }}><Icon /></Box><Typography variant="h5" sx={{ fontWeight: 800 }}>{title}</Typography><Typography color="text.secondary" sx={{ lineHeight: 1.75, mt: 1.1 }}>{text}</Typography></CardContent></Card>
              </Reveal>
            ))}
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
        <Reveal><SectionHeading eyebrow="MEET THE TEAM" title="People behind the projects" description="Explore individual profiles for verified skills, education, experience, projects and downloadable CVs." /></Reveal>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 2.5 }}>
          {teamMembers.slice(0, 4).map((member, index) => <Reveal key={member.slug} delay={index * 0.05}><TeamCard member={member} /></Reveal>)}
        </Box>
        <Button component={Link} href="/team" variant="outlined" endIcon={<ArrowForwardRoundedIcon />} sx={{ mt: 3.5 }}>View all 7 members</Button>
      </Container>

      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper', borderBlock: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="xl">
          <Reveal><SectionHeading eyebrow="FEATURED WORK" title="Experience that shows how we learn" description="A selection of professional, internship and academic work pulled from the team’s supplied CVs." /></Reveal>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
            {projects.slice(0, 3).map((project, index) => <Reveal key={project.slug} delay={index * 0.06}><ProjectCard project={project} /></Reveal>)}
          </Box>
          <Button component={Link} href="/projects" variant="outlined" endIcon={<ArrowForwardRoundedIcon />} sx={{ mt: 3.5 }}>Explore all case studies</Button>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '0.8fr 1.2fr' }, gap: 6 }}>
          <Reveal><Box sx={{ position: { lg: 'sticky' }, top: 120, alignSelf: 'start' }}><SectionHeading eyebrow="HOW WE WORK" title="A simple, disciplined delivery flow" description="Our process keeps teamwork visible from understanding the problem to validating and delivering the result." /><Button component={Link} href="/about" variant="contained" endIcon={<ArrowForwardRoundedIcon />}>About our approach</Button></Box></Reveal>
          <Stack spacing={1.5}>
            {steps.map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 0.04}>
                <Card><CardContent sx={{ p: 2.6 }}><Stack direction="row" spacing={2.2} alignItems="flex-start"><Box sx={{ width: 48, height: 48, borderRadius: 2.3, border: '1px solid', borderColor: 'divider', bgcolor: 'background.default', display: 'grid', placeItems: 'center', fontWeight: 900, color: 'primary.main', flexShrink: 0 }}>{number}</Box><Box><Typography variant="h6" sx={{ fontWeight: 800 }}>{title}</Typography><Typography color="text.secondary" sx={{ mt: 0.5, lineHeight: 1.7 }}>{text}</Typography></Box></Stack></CardContent></Card>
              </Reveal>
            ))}
          </Stack>
        </Box>
      </Container>

      <Container maxWidth="xl" sx={{ pb: { xs: 4, md: 8 } }}>
        <Reveal>
          <Box sx={{ bgcolor: 'primary.main', color: '#fff', borderRadius: 4, p: { xs: 3.5, md: 6 }, display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr auto' }, alignItems: 'center', gap: 3 }}>
            <Box>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}><CheckCircleRoundedIcon /><Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: '0.12em' }}>READY TO EXPLORE</Typography></Stack>
              <Typography variant="h3" sx={{ fontSize: { xs: '2rem', md: '3rem' }, maxWidth: 760 }}>See the people, skills and experiences behind the PNC student team.</Typography>
            </Box>
            <Button component={Link} href="/team" variant="contained" sx={{ bgcolor: '#FFFFFF', color: '#0F172A', '&:hover': { bgcolor: '#EEF3FF' } }} endIcon={<ArrowForwardRoundedIcon />}>Meet the Team</Button>
          </Box>
        </Reveal>
      </Container>
    </>
  );
}
