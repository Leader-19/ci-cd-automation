import type { Metadata } from 'next';
import { Box, Card, CardContent, Chip, Container, Stack, Typography } from '@mui/material';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import TrackChangesRoundedIcon from '@mui/icons-material/TrackChangesRounded';
import SectionHeading from '@/components/SectionHeading';
import { Reveal } from '@/components/Motion';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about the PNC student technology team, our mission, values and practical learning approach.',
};

const values = [
  ['Teamwork', 'We work across roles and help one another move the project forward.', GroupsRoundedIcon],
  ['Quality', 'We care about reliability, clarity and validating what we build.', VerifiedRoundedIcon],
  ['Curiosity', 'We keep researching tools, patterns and better ways to solve problems.', LightbulbRoundedIcon],
  ['Continuous Learning', 'Every project is an opportunity to improve technical and professional skills.', AutoStoriesRoundedIcon],
  ['User Focus', 'We connect technical decisions to real user needs and usable outcomes.', PersonSearchRoundedIcon],
  ['Responsibility', 'We communicate clearly, own our work and keep delivery transparent.', TrackChangesRoundedIcon],
] as const;

const journey = [
  ['01', 'Learn the foundation', 'Build core knowledge in web programming, software engineering, databases, QA and professional skills.'],
  ['02', 'Practice through projects', 'Apply classroom learning through academic projects, virtual companies and teamwork.'],
  ['03', 'Experience real environments', 'Grow through internships and professional roles in software, data, airports, QA and telecommunications.'],
  ['04', 'Share the journey', 'Use this portfolio to present verified work, lessons, skills and career direction.'],
];

export default function AboutPage() {
  return (
    <>
      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', py: { xs: 5, md: 7 } }}>
        <Container maxWidth="lg">
          <Chip label="ABOUT THE TEAM" color="primary" variant="outlined" sx={{ mb: 2 }} />
          <Typography variant="h1" sx={{ maxWidth: 760 }}>A student team turning learning into practical experience.</Typography>
          <Typography color="text.secondary" sx={{ fontSize: { xs: '14px', md: '15px' }, lineHeight: 1.7, maxWidth: 720, mt: 1.5 }}>
            We are a PNC student technology team with different professional directions but a shared commitment to learning by building, testing and improving real solutions.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 3 }}>
          <Reveal><Card sx={{ height: '100%' }}><CardContent sx={{ p: { xs: 3, md: 4 } }}><Typography variant="overline" color="primary.main" fontWeight={800}>MISSION</Typography><Typography variant="h3" sx={{ mt: 1 }}>Build practical skills through real collaboration.</Typography><Typography color="text.secondary" sx={{ mt: 2, lineHeight: 1.8 }}>Develop dependable technology skills, deliver useful team projects and strengthen professional habits through planning, development, QA, documentation and technical operations.</Typography></CardContent></Card></Reveal>
          <Reveal delay={0.08}><Card sx={{ height: '100%' }}><CardContent sx={{ p: { xs: 3, md: 4 } }}><Typography variant="overline" color="primary.main" fontWeight={800}>VISION</Typography><Typography variant="h3" sx={{ mt: 1 }}>Grow into capable technology professionals.</Typography><Typography color="text.secondary" sx={{ mt: 2, lineHeight: 1.8 }}>Use continuous learning, teamwork and disciplined delivery to become professionals who can contribute confidently to real organizations and technology products.</Typography></CardContent></Card></Reveal>
        </Box>
      </Container>

      <Box sx={{ bgcolor: 'background.paper', borderBlock: '1px solid', borderColor: 'divider', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl">
          <Reveal><SectionHeading eyebrow="OUR VALUES" title="The habits behind our work" description="A professional portfolio is not only about tools. These values shape how we communicate, build and improve together." /></Reveal>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 2 }}>
            {values.map(([title, text, Icon], index) => <Reveal key={title} delay={index * 0.04}><Card sx={{ height: '100%' }}><CardContent sx={{ p: 3 }}><Box sx={{ width: 48, height: 48, bgcolor: 'primary.main', color: '#fff', borderRadius: 2.4, display: 'grid', placeItems: 'center', mb: 2 }}><Icon /></Box><Typography variant="h5" fontWeight={800}>{title}</Typography><Typography color="text.secondary" sx={{ lineHeight: 1.75, mt: 1 }}>{text}</Typography></CardContent></Card></Reveal>)}
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
        <Reveal><SectionHeading eyebrow="OUR JOURNEY" title="From learning to real-world exposure" description="The team’s story is a progression from foundational learning to academic projects, internships and professional roles." /></Reveal>
        <Stack spacing={1.5}>
          {journey.map(([number, title, text], index) => (
            <Reveal key={number} delay={index * 0.05}>
              <Card><CardContent sx={{ p: 2.8 }}><Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5}><Box sx={{ width: 54, height: 54, flexShrink: 0, borderRadius: 2.5, bgcolor: 'primary.main', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 900 }}>{number}</Box><Box><Typography variant="h5" fontWeight={800}>{title}</Typography><Typography color="text.secondary" sx={{ mt: 0.7, lineHeight: 1.75 }}>{text}</Typography></Box></Stack></CardContent></Card>
            </Reveal>
          ))}
        </Stack>
      </Container>
    </>
  );
}
