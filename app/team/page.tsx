import type { Metadata } from 'next';
import { Box, Container, Typography } from '@mui/material';
import TeamGrid from '@/components/TeamGrid';
import LocalizedText from '@/components/LocalizedText';
import JsonLd from '@/components/JsonLd';
import { createPageMetadata, siteUrl } from '@/lib/seo';
import { teamMembers } from '@/data/team';

export const metadata: Metadata = createPageMetadata({ title: 'Meet Our Technology Team', description: 'Meet all seven PNC student team members and explore their verified professional profiles, skills and projects.', path: '/team', keywords: ['PNC student profiles', 'Cambodia developer portfolio', 'technology team members'] });

export default function TeamPage() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ItemList', name: 'PNC Student Team Members', itemListElement: teamMembers.map((member, index) => ({ '@type': 'ListItem', position: index + 1, item: { '@type': 'Person', name: member.name, jobTitle: member.role, url: `${siteUrl}/team/${member.slug}` } })) }} />
      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', py: { xs: 5, md: 7 } }}>
        <Container maxWidth="xl">
          <Typography variant="overline" color="primary.main" fontWeight={800}><LocalizedText en="OUR TEAM" km="ក្រុមការងាររបស់យើង" /></Typography>
          <Typography variant="h1" sx={{ maxWidth: 720, mt: 1 }}><LocalizedText en="Seven people. Different paths. One shared portfolio." km="មនុស្សប្រាំពីរនាក់។ ផ្លូវខុសគ្នា។ ស្នាដៃរួមតែមួយ។" /></Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 680, fontSize: { xs: '14px', md: '15px' }, lineHeight: 1.7, mt: 1.5 }}><LocalizedText en="Open any profile to see verified experience, education, technical skills, projects, contact information and CV access where supplied." km="បើកប្រវត្តិរូបណាមួយ ដើម្បីមើលបទពិសោធន៍ ការសិក្សា ជំនាញបច្ចេកទេស គម្រោង ព័ត៌មានទំនាក់ទំនង និង CV ដែលមានផ្តល់ជូន។" /></Typography>
        </Container>
      </Box>
      <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
        <TeamGrid />
      </Container>
    </>
  );
}
