import type { Metadata } from 'next';
import { Avatar, Box, Card, CardContent, Container, Stack, Typography } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import ContactForm from '@/components/ContactForm';
import { teamMembers } from '@/data/team';
import { Reveal } from '@/components/Motion';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Connect with the PNC student technology team.',
};

export default function ContactPage() {
  return (
    <>
      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', py: { xs: 5, md: 7 } }}>
        <Container maxWidth="xl">
          <Typography variant="overline" color="primary.main" fontWeight={800}>CONTACT</Typography>
          <Typography variant="h1" sx={{ maxWidth: 720, mt: 1 }}>Let&apos;s connect, learn and build together.</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 680, fontSize: { xs: '14px', md: '15px' }, lineHeight: 1.7, mt: 1.5 }}>Use the form for a general conversation, or open an individual member profile to contact the right person directly.</Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '0.72fr 1.28fr' }, gap: 3 }}>
          <Stack spacing={2.2}>
            <Reveal>
              <Card><CardContent sx={{ p: 3 }}><Stack direction="row" spacing={1.4}><Box sx={{ width: 46, height: 46, borderRadius: 1, bgcolor: 'primary.main', color: '#fff', display: 'grid', placeItems: 'center' }}><GroupsRoundedIcon /></Box><Box><Typography variant="h5" fontWeight={800}>PNC Student Team</Typography><Typography color="text.secondary" sx={{ mt: 0.6 }}>Seven members across development, QA, planning, data and telecom.</Typography></Box></Stack></CardContent></Card>
            </Reveal>
            <Reveal delay={0.05}>
              <Card><CardContent sx={{ p: 3 }}><Stack spacing={2}><Stack direction="row" spacing={1.3} alignItems="center"><EmailOutlinedIcon color="primary" /><Box><Typography variant="caption" color="text.secondary">GENERAL CONTACT</Typography><Typography fontWeight={800}>chheadeveloper@gmail.com</Typography></Box></Stack><Stack direction="row" spacing={1.3} alignItems="center"><LocationOnOutlinedIcon color="primary" /><Box><Typography variant="caption" color="text.secondary">LOCATION</Typography><Typography fontWeight={800}>Phnom Penh, Cambodia</Typography></Box></Stack></Stack></CardContent></Card>
            </Reveal>
            <Reveal delay={0.1}>
              <Card><CardContent sx={{ p: 3 }}><Typography variant="h6" fontWeight={800}>Contact a specific member</Typography><Stack spacing={1.1} sx={{ mt: 2 }}>{teamMembers.filter((member) => member.email).map((member) => <Box key={member.slug} component="a" href={`mailto:${member.email}`} sx={{ display: 'flex', gap: 1.2, alignItems: 'center', p: 1.1, borderRadius: 1, border: '1px solid', borderColor: 'divider', '&:hover': { borderColor: 'primary.main' } }}><Avatar src={member.photo} alt={member.name} sx={{ width: 40, height: 40 }} /><Box sx={{ minWidth: 0 }}><Typography fontWeight={800}>{member.name}</Typography><Typography variant="caption" color="text.secondary" sx={{ wordBreak: 'break-all' }}>{member.email}</Typography></Box></Box>)}</Stack></CardContent></Card>
            </Reveal>
          </Stack>
          <Reveal delay={0.06}><ContactForm /></Reveal>
        </Box>
      </Container>
    </>
  );
}
