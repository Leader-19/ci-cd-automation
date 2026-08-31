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
import Link from 'next/link';
import { useState } from 'react';
import IntroSplash from './IntroSplash';
import { Reveal } from './Motion';
import TeamShowcase from './TeamShowcase';
import TechnologyTicker from './TechnologyTicker';
import SectionHeading from './SectionHeading';
import TeamCard from './TeamCard';
import ProjectCard from './ProjectCard';
import { teamMembers } from '@/data/team';
import { projects } from '@/data/projects';
import { useLocale } from './Providers';

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
  const { locale } = useLocale();
  const km = locale === 'km';
  const localizedExpertise = km
    ? [
        { title: 'ការអភិវឌ្ឍវេប', text: 'Frontend ដែលឆ្លើយតប កម្មវិធី Full-stack និងផលិតផលឌីជីថលជាក់ស្តែង។', icon: CodeRoundedIcon },
        { title: 'ការធានាគុណភាព', text: 'QA ដោយដៃ ការសាកល្បងឡើងវិញ UAT ករណីសាកល្បង និងការផ្ទៀងផ្ទាត់លំហូរការងារ។', icon: BugReportRoundedIcon },
        { title: 'ការរៀបចំផែនការ និងការប្រគល់', text: 'ការរៀបចំកិច្ចការ កិច្ចសហការ និងការប្រគល់គម្រោងប្រកបដោយរបៀបរៀបរយ។', icon: RouteRoundedIcon },
        { title: 'ហេដ្ឋារចនាសម្ព័ន្ធ និងទូរគមនាគមន៍', text: 'ប្រតិបត្តិការ Roaming ឧបករណ៍ដាក់ឱ្យប្រើប្រាស់ និងប្រព័ន្ធបច្ចេកទេស។', icon: RouterRoundedIcon },
      ]
    : expertise;
  const localizedSteps = km
    ? [
        ['01', 'ស្វែងយល់', 'បញ្ជាក់គោលដៅ អ្នកប្រើប្រាស់ និងតម្រូវការជាក់ស្តែង។'],
        ['02', 'រៀបចំផែនការ', 'បែងចែកការងារទៅជាកិច្ចការដែលអាចអនុវត្តបាន និងទំនួលខុសត្រូវ។'],
        ['03', 'បង្កើត', 'អនុវត្តដំណោះស្រាយដែលស្អាត ងាយថែទាំ និងអាចសាកល្បងបាន។'],
        ['04', 'ផ្ទៀងផ្ទាត់', 'សាកល្បងលំហូរការងារ កែបញ្ហា និងពិនិត្យបទពិសោធន៍អ្នកប្រើប្រាស់។'],
        ['05', 'ប្រគល់ជូន', 'ដាក់ឱ្យប្រើប្រាស់ រៀបចំឯកសារ និងរៀនពីលទ្ធផល។'],
      ]
    : steps;

  return (
    <>
      {!introDone && <IntroSplash onComplete={() => setIntroDone(true)} />}

      <Box component="section" sx={{ pt: { xs: 5, md: 8 }, pb: { xs: 7, md: 10 }, bgcolor: 'background.default', overflow: 'hidden' }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 1.08fr) minmax(460px, 0.92fr)' }, gap: { xs: 5, lg: 7 }, alignItems: 'center' }}>
            <Reveal>
              <Stack alignItems="flex-start">
                <Chip label={km ? 'PNCTEAMSTARTUP · ក្រុមបច្ចេកវិទ្យានិស្សិត PNC' : 'PNCTEAMSTARTUP · PNC STUDENT TECHNOLOGY TEAM'} color="primary" variant="outlined" sx={{ mb: 2.5, fontWeight: 800 }} />
                <Typography variant="h1" sx={{ maxWidth: 640 }}>
                  {km ? <>យើងរៀនតាមរយៈការបង្កើត <Box component="span" sx={{ color: 'primary.main' }}>បច្ចេកវិទ្យាពិតប្រាកដ។</Box></> : <>We learn by building <Box component="span" sx={{ color: 'primary.main' }}>real technology.</Box></>}
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: { xs: '14px', md: '15px' }, lineHeight: 1.7, maxWidth: 560, mt: 2 }}>
                  {km ? 'ស្គាល់សមាជិកនិស្សិត PNC ចំនួនប្រាំពីរនាក់ ដែលមានជំនាញផ្នែកការអភិវឌ្ឍ Full-stack វិស្វកម្មវេបសាយ ការធានាគុណភាព ការរៀបចំផែនការ ទិន្នន័យ និងសេវា Roaming & Interconnection។' : 'Meet seven PNC student professionals across full-stack development, web engineering, quality assurance, planning, data and roaming & interconnection.'}
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.4} sx={{ mt: 3.6, width: { xs: '100%', sm: 'auto' } }}>
                  <Button component={Link} href={`/${locale}/projects`} variant="contained" size="large" endIcon={<ArrowForwardRoundedIcon />}>{km ? 'មើលគម្រោងរបស់យើង' : 'View Our Projects'}</Button>
                  <Button component={Link} href={`/${locale}/team`} variant="outlined" size="large" startIcon={<GroupsRoundedIcon />}>{km ? 'ស្គាល់ក្រុមការងារ' : 'Meet the Team'}</Button>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mt: 4 }}>
                  <AvatarGroup max={7} sx={{ '& .MuiAvatar-root': { width: 38, height: 38, borderColor: 'background.default' } }}>
                    {teamMembers.map((member) => <Avatar key={member.slug} src={member.photo} alt={member.name} />)}
                  </AvatarGroup>
                  <Box>
                    <Typography sx={{ fontWeight: 800, lineHeight: 1.2 }}>{km ? 'សមាជិក ៧ នាក់' : '7 team members'}</Typography>
                    <Typography variant="caption" color="text.secondary">{km ? 'ដំណើរការសិក្សារួមគ្នា' : 'One shared learning journey'}</Typography>
                  </Box>
                </Stack>
              </Stack>
            </Reveal>

            <Reveal delay={0.1}>
              <TeamShowcase />
              {/* Previous static collage retained here only as inactive reference.
                <Box sx={{ position: 'absolute', left: '37%', top: '43%', zIndex: 4, bgcolor: 'primary.main', color: '#fff', borderRadius: 1, p: 2.1, width: 190, boxShadow: '0 12px 30px rgba(21,94,239,0.28)' }}>
                  <Typography variant="caption" sx={{ color: '#EAF0FF', fontWeight: 700 }}>BUILD • TEST • LEARN</Typography>
                  <Typography sx={{ fontWeight: 900, fontSize: '1.3rem', mt: 0.3 }}>PNC Team</Typography>
                  <Typography variant="caption" sx={{ color: '#EAF0FF' }}>Practical technology portfolio</Typography>
                </Box>
              </Box>
              */}
            </Reveal>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: 'background.paper', py: 2.2, borderBlock: '1px solid', borderColor: 'divider', overflow: 'hidden' }}>
        <Container maxWidth="xl">
          <TechnologyTicker technologies={techRail} />
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
        <Reveal>
          <SectionHeading eyebrow={km ? 'ទិដ្ឋភាពក្រុម' : 'TEAM SNAPSHOT'} title={km ? 'ជំនាញខុសគ្នា។ ក្រុមតែមួយ។' : 'Different strengths. One team.'} description={km ? 'ស្នាដៃនេះបង្ហាញបទពិសោធន៍ជាក់ស្តែងផ្នែកអភិវឌ្ឍន៍ ការធានាគុណភាព ការគ្រប់គ្រងគម្រោង ទិន្នន័យ និងប្រតិបត្តិការបច្ចេកទេស។' : 'The portfolio brings together practical experience from development, QA, project planning, data work and technical operations.'} />
        </Reveal>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2 }}>
          {[
            ['7', km ? 'សមាជិកក្រុម' : 'Team members'],
            ['6', km ? 'ផ្នែកជំនាញស្នូល' : 'Core expertise areas'],
            ['7+', km ? 'បទពិសោធន៍ដែលបានបង្ហាញ' : 'Featured experiences'],
            ['20+', km ? 'បច្ចេកវិទ្យា និងឧបករណ៍' : 'Technologies & tools'],
          ].map(([number, label], index) => (
            <Reveal key={label} delay={index * 0.05}>
              <Card><CardContent sx={{ p: { xs: 2, md: 3 } }}><Typography sx={{ fontSize: { xs: '28px', md: '32px' }, fontWeight: 700, color: 'primary.main', lineHeight: 1.2 }}>{number}</Typography><Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>{label}</Typography></CardContent></Card>
            </Reveal>
          ))}
        </Box>
      </Container>

      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper', borderBlock: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="xl">
          <Reveal><SectionHeading eyebrow={km ? 'អ្វីដែលយើងធ្វើ' : 'WHAT WE DO'} title={km ? 'ជំនាញបច្ចេកវិទ្យាដែលអនុវត្តបាន' : 'A practical technology skill set'} description={km ? 'យើងមានប្រវត្តិខុសគ្នា ប៉ុន្តែការងាររបស់យើងរួមគ្នាដើម្បីដោះស្រាយបញ្ហាពិតប្រាកដដោយបច្ចេកវិទ្យាដែលអាចទុកចិត្តបាន។' : 'Our backgrounds are different, but our work connects through one goal: solving real problems with dependable technology.'} /></Reveal>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }, gap: 2 }}>
            {localizedExpertise.map(({ title, text, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 0.06}>
                <Card sx={{ height: '100%' }}><CardContent sx={{ p: 3 }}><Box sx={{ width: 50, height: 50, borderRadius: 1, bgcolor: 'primary.main', color: '#fff', display: 'grid', placeItems: 'center', mb: 2.4 }}><Icon /></Box><Typography variant="h5" sx={{ fontWeight: 800 }}>{title}</Typography><Typography color="text.secondary" sx={{ lineHeight: 1.75, mt: 1.1 }}>{text}</Typography></CardContent></Card>
              </Reveal>
            ))}
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
          <Reveal><SectionHeading eyebrow={km ? 'ស្គាល់ក្រុមការងារ' : 'MEET THE TEAM'} title={km ? 'មនុស្សនៅពីក្រោយគម្រោង' : 'People behind the projects'} description={km ? 'ស្វែងយល់ពីប្រវត្តិរូបបុគ្គល ដែលមានជំនាញ ការសិក្សា បទពិសោធន៍ គម្រោង និង CV ដែលអាចទាញយកបាន។' : 'Explore individual profiles for verified skills, education, experience, projects and downloadable CVs.'} /></Reveal>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 2.5 }}>
          {teamMembers.slice(0, 4).map((member, index) => <Reveal key={member.slug} delay={index * 0.05}><TeamCard member={member} /></Reveal>)}
        </Box>
        <Button component={Link} href={`/${locale}/team`} variant="outlined" endIcon={<ArrowForwardRoundedIcon />} sx={{ mt: 3.5 }}>{km ? 'មើលសមាជិកទាំង ៧ នាក់' : 'View all 7 members'}</Button>
      </Container>

      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper', borderBlock: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="xl">
          <Reveal><SectionHeading eyebrow={km ? 'ស្នាដៃដែលបានជ្រើសរើស' : 'FEATURED WORK'} title={km ? 'បទពិសោធន៍ដែលបង្ហាញពីរបៀបរៀនរបស់យើង' : 'Experience that shows how we learn'} description={km ? 'ជម្រើសការងារវិជ្ជាជីវៈ កម្មសិក្សា និងគម្រោងសិក្សា ដែលដកស្រង់ពីប្រវត្តិរូបសមាជិកក្រុម។' : 'A selection of professional, internship and academic work pulled from the team’s supplied CVs.'} /></Reveal>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
            {projects.slice(0, 3).map((project, index) => <Reveal key={project.slug} delay={index * 0.06}><ProjectCard project={project} /></Reveal>)}
          </Box>
          <Button component={Link} href={`/${locale}/projects`} variant="outlined" endIcon={<ArrowForwardRoundedIcon />} sx={{ mt: 3.5 }}>{km ? 'ស្វែងយល់ពីគម្រោងទាំងអស់' : 'Explore all case studies'}</Button>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '0.8fr 1.2fr' }, gap: 6 }}>
          <Reveal><Box sx={{ position: { lg: 'sticky' }, top: 120, alignSelf: 'start' }}><SectionHeading eyebrow={km ? 'របៀបដែលយើងធ្វើការ' : 'HOW WE WORK'} title={km ? 'លំហូរការងារដែលសាមញ្ញ និងមានវិន័យ' : 'A simple, disciplined delivery flow'} description={km ? 'ដំណើរការរបស់យើងធ្វើឱ្យការងារជាក្រុមច្បាស់លាស់ ចាប់ពីការយល់ដឹងអំពីបញ្ហា រហូតដល់ការផ្ទៀងផ្ទាត់ និងប្រគល់លទ្ធផល។' : 'Our process keeps teamwork visible from understanding the problem to validating and delivering the result.'} /><Button component={Link} href={`/${locale}/about`} variant="contained" endIcon={<ArrowForwardRoundedIcon />}>{km ? 'អំពីវិធីសាស្ត្ររបស់យើង' : 'About our approach'}</Button></Box></Reveal>
          <Stack spacing={1.5}>
            {localizedSteps.map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 0.04}>
                <Card><CardContent sx={{ p: 2.6 }}><Stack direction="row" spacing={2.2} alignItems="flex-start"><Box sx={{ width: 48, height: 48, borderRadius: 1, border: '1px solid', borderColor: 'divider', bgcolor: 'background.default', display: 'grid', placeItems: 'center', fontWeight: 900, color: 'primary.main', flexShrink: 0 }}>{number}</Box><Box><Typography variant="h6" sx={{ fontWeight: 800 }}>{title}</Typography><Typography color="text.secondary" sx={{ mt: 0.5, lineHeight: 1.7 }}>{text}</Typography></Box></Stack></CardContent></Card>
              </Reveal>
            ))}
          </Stack>
        </Box>
      </Container>

      <Container maxWidth="xl" sx={{ pb: { xs: 4, md: 8 } }}>
        <Reveal>
          <Box sx={{ bgcolor: 'primary.main', color: '#fff', borderRadius: 1, p: { xs: 3, md: 5 }, display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr auto' }, alignItems: 'center', gap: 3 }}>
            <Box>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}><CheckCircleRoundedIcon /><Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: '0.12em' }}>{km ? 'ត្រៀមស្វែងយល់' : 'READY TO EXPLORE'}</Typography></Stack>
              <Typography variant="h3" sx={{ maxWidth: 620 }}>{km ? 'ស្វែងយល់ពីមនុស្ស ជំនាញ និងបទពិសោធន៍នៅពីក្រោយក្រុមនិស្សិត PNC។' : 'See the people, skills and experiences behind the PNC student team.'}</Typography>
            </Box>
            <Button component={Link} href={`/${locale}/team`} variant="contained" sx={{ bgcolor: '#FFFFFF', color: '#0F172A', '&:hover': { bgcolor: '#EEF3FF' } }} endIcon={<ArrowForwardRoundedIcon />}>{km ? 'ស្គាល់ក្រុមការងារ' : 'Meet the Team'}</Button>
          </Box>
        </Reveal>
      </Container>
    </>
  );
}
