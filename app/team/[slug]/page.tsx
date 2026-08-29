import type { Metadata } from 'next';
import {
  Alert,
  Avatar,
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
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import AutoAwesomeMotionRoundedIcon from '@mui/icons-material/AutoAwesomeMotionRounded';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { memberBySlug, teamMembers } from '@/data/team';
import { TechnologyBadge } from '@/components/TechIcon';
import { Reveal } from '@/components/Motion';

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const member = memberBySlug(slug);
  if (!member) return { title: 'Team Member' };
  return {
    title: `${member.name} — ${member.role}`,
    description: `Explore ${member.name}'s profile, skills, education, experience and projects as ${member.role}.`,
  };
}

function ContactItem({ icon, label, href }: { icon: React.ReactNode; label: string; href?: string }) {
  const content = (
    <Stack direction="row" spacing={1.2} alignItems="center">
      <Box sx={{ color: 'primary.main', display: 'grid', placeItems: 'center' }}>{icon}</Box>
      <Typography variant="body2" color="text.secondary" sx={{ wordBreak: 'break-word' }}>{label}</Typography>
    </Stack>
  );
  return href ? <Box component="a" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" sx={{ '&:hover .MuiTypography-root': { color: 'primary.main' } }}>{content}</Box> : content;
}

export default async function MemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = memberBySlug(slug);
  if (!member) notFound();

  return (
    <>
      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
          <Button component={Link} href="/team" variant="text" startIcon={<ArrowBackRoundedIcon />} sx={{ px: 0, mb: 3 }}>Back to Team</Button>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '300px minmax(0, 1fr)' }, gap: { xs: 3, md: 5 }, alignItems: 'center' }}>
            <Reveal>
              <Box sx={{ position: 'relative', width: '100%', maxWidth: 300, aspectRatio: '4 / 5', borderRadius: 1, overflow: 'hidden', border: '1px solid', borderColor: 'divider', bgcolor: 'action.hover', mx: { xs: 'auto', md: 0 } }}>
                <Image src={member.photo} alt={`${member.name} - ${member.role}`} fill sizes="(max-width: 900px) 100vw, 300px" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
              </Box>
            </Reveal>
            <Reveal delay={0.05}>
              <Box>
                <Chip label="PNC STUDENT TEAM" color="primary" variant="outlined" sx={{ mb: 1.8 }} />
                <Typography variant="h1">{member.name}</Typography>
                <Typography variant="h4" color="primary.main" sx={{ fontWeight: 800, mt: 0.7 }}>{member.role}</Typography>
                <Typography color="text.secondary" sx={{ fontSize: { xs: '14px', md: '15px' }, lineHeight: 1.7, maxWidth: 720, mt: 1.5 }}>{member.focus}</Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2} flexWrap="wrap" sx={{ mt: 3 }}>
                  {member.cv && <Button component="a" href={member.cv} download variant="contained" startIcon={<DownloadRoundedIcon />}>Download CV</Button>}
                  {member.cv && <Button component="a" href={member.cv} target="_blank" rel="noreferrer" variant="outlined" startIcon={<OpenInNewRoundedIcon />}>Open CV</Button>}
                  {member.portfolio && <Button component="a" href={member.portfolio} target="_blank" rel="noreferrer" variant="outlined" startIcon={<LanguageRoundedIcon />}>Portfolio</Button>}
                  {member.github && <Button component="a" href={member.github} target="_blank" rel="noreferrer" variant="outlined" startIcon={<GitHubIcon />}>GitHub</Button>}
                  {member.linkedin && <Button component="a" href={member.linkedin} target="_blank" rel="noreferrer" variant="outlined" startIcon={<LinkedInIcon />}>LinkedIn</Button>}
                </Stack>
              </Box>
            </Reveal>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
        {member.profileNote && <Alert severity="info" sx={{ mb: 4, border: '1px solid', borderColor: 'info.light' }}>{member.profileNote}</Alert>}

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 0.72fr) minmax(0, 1.28fr)' }, gap: 3.5 }}>
          <Stack spacing={3.5}>
            <Reveal>
              <Card><CardContent sx={{ p: 3 }}><Typography variant="h5" fontWeight={800}>About</Typography><Typography color="text.secondary" sx={{ mt: 1.4, lineHeight: 1.85 }}>{member.summary}</Typography></CardContent></Card>
            </Reveal>

            <Reveal>
              <Card><CardContent sx={{ p: 3 }}><Typography variant="h5" fontWeight={800}>Contact</Typography><Stack spacing={1.6} sx={{ mt: 2 }}>
                {member.email && <ContactItem icon={<EmailOutlinedIcon fontSize="small" />} label={member.email} href={`mailto:${member.email}`} />}
                {member.phone && <ContactItem icon={<PhoneOutlinedIcon fontSize="small" />} label={member.phone} href={`tel:${member.phone.replace(/\s/g, '')}`} />}
                <ContactItem icon={<LocationOnOutlinedIcon fontSize="small" />} label={member.location} />
                {member.linkedin && <ContactItem icon={<LinkedInIcon fontSize="small" />} label="LinkedIn profile" href={member.linkedin} />}
                {member.github && <ContactItem icon={<GitHubIcon fontSize="small" />} label="GitHub profile" href={member.github} />}
                {member.portfolio && <ContactItem icon={<LanguageRoundedIcon fontSize="small" />} label="Personal portfolio" href={member.portfolio} />}
              </Stack></CardContent></Card>
            </Reveal>

            <Reveal>
              <Card><CardContent sx={{ p: 3 }}><Typography variant="h5" fontWeight={800}>Languages & soft skills</Typography><Typography variant="overline" color="text.secondary" sx={{ display: 'block', mt: 2 }}>LANGUAGES</Typography><Stack direction="row" gap={0.8} flexWrap="wrap" sx={{ mt: 0.6 }}>{member.languages.map((item) => <Chip key={item} label={item} variant="outlined" />)}</Stack><Typography variant="overline" color="text.secondary" sx={{ display: 'block', mt: 2.4 }}>SOFT SKILLS</Typography><Stack direction="row" gap={0.8} flexWrap="wrap" sx={{ mt: 0.6 }}>{member.softSkills.map((item) => <Chip key={item} label={item} variant="outlined" />)}</Stack></CardContent></Card>
            </Reveal>
          </Stack>

          <Stack spacing={3.5}>
            <Reveal>
              <Card><CardContent sx={{ p: { xs: 2.6, md: 3.5 } }}><Stack direction="row" spacing={1.2} alignItems="center"><Box sx={{ width: 42, height: 42, borderRadius: 1, bgcolor: 'primary.main', color: '#fff', display: 'grid', placeItems: 'center' }}><AutoAwesomeMotionRoundedIcon /></Box><Typography variant="h4" fontWeight={800}>Technical Skills</Typography></Stack><Stack spacing={2.5} sx={{ mt: 3 }}>{member.skills.map((group) => <Box key={group.label}><Typography sx={{ fontWeight: 800, mb: 1.1 }}>{group.label}</Typography><Stack direction="row" gap={0.8} flexWrap="wrap">{group.items.map((skill) => <TechnologyBadge key={skill} name={skill} compact />)}</Stack></Box>)}</Stack></CardContent></Card>
            </Reveal>

            <Reveal>
              <Card><CardContent sx={{ p: { xs: 2.6, md: 3.5 } }}><Stack direction="row" spacing={1.2} alignItems="center"><Box sx={{ width: 42, height: 42, borderRadius: 1, bgcolor: 'primary.main', color: '#fff', display: 'grid', placeItems: 'center' }}><WorkOutlineRoundedIcon /></Box><Typography variant="h4" fontWeight={800}>Experience</Typography></Stack>{member.experience.length ? <Stack spacing={0} sx={{ mt: 3 }}>{member.experience.map((item, index) => <Box key={`${item.role}-${item.organization}`} sx={{ display: 'grid', gridTemplateColumns: '16px 1fr', gap: 1.5 }}><Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><Box sx={{ width: 14, height: 14, borderRadius: 0, bgcolor: 'primary.dark', mt: 0.4, zIndex: 1 }} />{index < member.experience.length - 1 && <Box sx={{ width: 2, flex: 1, minHeight: 64, bgcolor: 'primary.dark' }} />}</Box><Box sx={{ pb: index < member.experience.length - 1 ? 3.2 : 0 }}><Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" gap={0.6}><Box><Typography variant="h6" fontWeight={800}>{item.role}</Typography><Typography color="primary.main" fontWeight={700}>{item.organization}</Typography></Box><Chip label={item.period} size="small" variant="outlined" sx={{ alignSelf: { xs: 'flex-start', sm: 'center' } }} /></Stack><Box component="ul" sx={{ pl: 2.3, color: 'text.secondary', lineHeight: 1.75 }}>{item.bullets.map((bullet) => <li key={bullet}><Typography component="span" color="text.secondary">{bullet}</Typography></li>)}</Box>{item.technologies && <Stack direction="row" gap={0.7} flexWrap="wrap">{item.technologies.map((tech) => <TechnologyBadge key={tech} name={tech} compact />)}</Stack>}</Box></Box>)}</Stack> : <Typography color="text.secondary" sx={{ mt: 2.5 }}>Detailed professional experience has not been included in the supplied profile materials.</Typography>}</CardContent></Card>
            </Reveal>

            <Reveal>
              <Card><CardContent sx={{ p: { xs: 2.6, md: 3.5 } }}><Stack direction="row" spacing={1.2} alignItems="center"><Box sx={{ width: 42, height: 42, borderRadius: 1, bgcolor: 'primary.main', color: '#fff', display: 'grid', placeItems: 'center' }}><SchoolOutlinedIcon /></Box><Typography variant="h4" fontWeight={800}>Education</Typography></Stack><Stack divider={<Divider flexItem />} sx={{ mt: 2.5 }}>{member.education.map((item) => <Box key={`${item.institution}-${item.degree}`} sx={{ py: 2.2, '&:first-of-type': { pt: 0.6 }, '&:last-of-type': { pb: 0.6 } }}><Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" gap={1}><Box><Typography variant="h6" fontWeight={800}>{item.degree}</Typography><Typography color="primary.main" fontWeight={700}>{item.institution}</Typography>{item.detail && <Typography color="text.secondary" sx={{ mt: 0.6 }}>{item.detail}</Typography>}</Box><Chip label={item.period} size="small" variant="outlined" sx={{ alignSelf: { xs: 'flex-start', sm: 'center' } }} /></Stack></Box>)}</Stack></CardContent></Card>
            </Reveal>

            <Reveal>
              <Card><CardContent sx={{ p: { xs: 2.6, md: 3.5 } }}><Typography variant="h4" fontWeight={800}>Selected Projects</Typography><Stack divider={<Divider flexItem />} sx={{ mt: 2 }}>{member.projects.map((project) => <Box key={project.title} sx={{ py: 2.4 }}><Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" gap={1}><Box><Typography variant="h6" fontWeight={800}>{project.title}</Typography>{project.role && <Typography color="primary.main" fontWeight={700}>{project.role}</Typography>}</Box>{project.period && <Chip label={project.period} size="small" variant="outlined" sx={{ alignSelf: { xs: 'flex-start', sm: 'center' } }} />}</Stack><Typography color="text.secondary" sx={{ lineHeight: 1.75, mt: 1 }}>{project.summary}</Typography><Stack direction="row" gap={0.7} flexWrap="wrap" sx={{ mt: 1.4 }}>{project.technologies.map((tech) => <TechnologyBadge key={tech} name={tech} compact />)}</Stack>{project.url && <Button component="a" href={project.url} target="_blank" rel="noreferrer" size="small" variant="text" endIcon={<OpenInNewRoundedIcon />} sx={{ px: 0, mt: 1.3 }}>Open project link</Button>}</Box>)}</Stack></CardContent></Card>
            </Reveal>

            {member.additional?.length ? <Reveal><Card><CardContent sx={{ p: 3.5 }}><Typography variant="h4" fontWeight={800}>Additional Learning</Typography><Stack spacing={1.1} sx={{ mt: 2 }}>{member.additional.map((item) => <Stack key={item} direction="row" spacing={1.1} alignItems="flex-start"><Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: 'primary.main', mt: 1 }} /><Typography color="text.secondary">{item}</Typography></Stack>)}</Stack></CardContent></Card></Reveal> : null}
          </Stack>
        </Box>
      </Container>
    </>
  );
}
