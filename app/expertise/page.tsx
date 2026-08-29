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
import LocalizedText from '@/components/LocalizedText';

export const metadata: Metadata = {
  title: 'Expertise',
  description: 'Explore the PNC student team’s expertise across development, QA, planning, data, cloud and telecommunications.',
};

const icons = [CodeRoundedIcon, BugReportRoundedIcon, RouteRoundedIcon, StorageRoundedIcon, CloudQueueRoundedIcon, RouterRoundedIcon];
const khmerAreas = [
  ['ការអភិវឌ្ឍ Full Stack', 'Frontend Backend APIs ការផ្ទៀងផ្ទាត់ មូលដ្ឋានទិន្នន័យ និងការដាក់ឱ្យប្រើប្រាស់ សម្រាប់ប្រព័ន្ធវេបជាក់ស្តែង។'],
  ['ការធានាគុណភាព', 'ការសាកល្បងដោយដៃ ការសាកល្បងមុខងារ ការសាកល្បងឡើងវិញ UAT ករណីសាកល្បង និងការផ្ទៀងផ្ទាត់កំហុស។'],
  ['ការរៀបចំផែនការ និងការប្រគល់ការងារជាក្រុម', 'ការគាំទ្រតម្រូវការ ការរៀបចំគម្រោង ការសម្របសម្រួលកិច្ចការ និងការប្រគល់ការងាររួមគ្នា។'],
  ['ទិន្នន័យ និងរបាយការណ៍', 'របាយការណ៍ SQL មូលដ្ឋានទិន្នន័យទំនាក់ទំនង ផ្ទាំងព័ត៌មាន និងឧបករណ៍វិភាគទិន្នន័យ។'],
  ['Cloud និងហេដ្ឋារចនាសម្ព័ន្ធ', 'ការដាក់ឱ្យប្រើប្រាស់លើ Linux ការបង្ហោះលើ Cloud, CI/CD និងបទពិសោធន៍ហេដ្ឋារចនាសម្ព័ន្ធ Container។'],
  ['Roaming និង Interconnection', 'ការផ្ទៀងផ្ទាត់សេវា Roaming លំហូរ TAP ស្វ័យប្រវត្តិកម្មប្រតិបត្តិការ និងប្រព័ន្ធទូរគមនាគមន៍ខាងក្នុង។'],
] as const;

export default function ExpertisePage() {
  return (
    <>
      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', py: { xs: 5, md: 7 } }}>
        <Container maxWidth="xl">
          <Typography variant="overline" color="primary.main" fontWeight={800}><LocalizedText en="EXPERTISE" km="ជំនាញ" /></Typography>
          <Typography variant="h1" sx={{ maxWidth: 720, mt: 1 }}><LocalizedText en="Skills connected to practical work." km="ជំនាញដែលភ្ជាប់ជាមួយការងារជាក់ស្តែង។" /></Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 700, fontSize: { xs: '14px', md: '15px' }, lineHeight: 1.7, mt: 1.5 }}><LocalizedText en="We avoid fake percentage ratings. Instead, the site shows focus areas, tools actually documented in CVs and the people connected to each area." km="យើងមិនប្រើការវាយតម្លៃភាគរយដែលមិនពិតទេ។ គេហទំព័រនេះបង្ហាញផ្នែកជំនាញ ឧបករណ៍ដែលមានកត់ត្រាក្នុង CV និងសមាជិកដែលពាក់ព័ន្ធនឹងផ្នែកនីមួយៗ។" /></Typography>
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
                      <Typography variant="h4" fontWeight={800}><LocalizedText en={area.title} km={khmerAreas[index][0]} /></Typography>
                    </Stack>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.8, mt: 2 }}><LocalizedText en={area.description} km={khmerAreas[index][1]} /></Typography>
                    <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mt: 2.5, mb: 0.8 }}><LocalizedText en="RELATED TECHNOLOGIES" km="បច្ចេកវិទ្យាពាក់ព័ន្ធ" /></Typography>
                    <Stack direction="row" gap={0.8} flexWrap="wrap">{area.technologies.map((tech) => <TechnologyBadge key={tech} name={tech} compact />)}</Stack>
                    <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mt: 2.5, mb: 0.8 }}><LocalizedText en="RELATED MEMBERS" km="សមាជិកពាក់ព័ន្ធ" /></Typography>
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
          <Reveal><SectionHeading eyebrow={<LocalizedText en="TECHNOLOGY SYSTEM" km="ប្រព័ន្ធបច្ចេកវិទ្យា" />} title={<LocalizedText en="Visual technology badges, not text-only lists" km="ផ្លាកសម្គាល់បច្ចេកវិទ្យាដែលមើលឃើញ មិនមែនជាបញ្ជីអត្ថបទប៉ុណ្ណោះ" />} description={<LocalizedText en="The MVP uses compact neutral Material UI tiles and recognizable brand icons, following the supplied visual reference while keeping the overall interface clean and professional." km="គេហទំព័រនេះប្រើបន្ទះ Material UI តូច សាមញ្ញ និងរូបតំណាងម៉ាកដែលងាយស្គាល់ ដើម្បីរក្សាចំណុចប្រទាក់ឱ្យស្អាត និងមានវិជ្ជាជីវៈ។" />} /></Reveal>
          <Stack direction="row" gap={1} flexWrap="wrap">
            {['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Material UI', 'Framer Motion', 'Vue.js', 'Laravel', 'PHP', 'Python', 'Node.js', 'MySQL', 'PostgreSQL', 'SQL Server', 'Figma', 'GitHub', 'Jira', 'Postman', 'AWS', 'Docker', 'Kubernetes', 'Linux'].map((tech) => <TechnologyBadge key={tech} name={tech} />)}
          </Stack>
        </Container>
      </Box>
    </>
  );
}
