import type { Metadata } from 'next';
import { Avatar, Box, Card, CardContent, Container, Stack, Typography } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import ContactForm from '@/components/ContactForm';
import { teamMembers } from '@/data/team';
import { Reveal } from '@/components/Motion';
import LocalizedText from '@/components/LocalizedText';
import { khmerMemberNames } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Connect with the PNC student technology team.',
};

export default function ContactPage() {
  return (
    <>
      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', py: { xs: 5, md: 7 } }}>
        <Container maxWidth="xl">
          <Typography variant="overline" color="primary.main" fontWeight={800}><LocalizedText en="CONTACT" km="ទំនាក់ទំនង" /></Typography>
          <Typography variant="h1" sx={{ maxWidth: 720, mt: 1 }}><LocalizedText en="Let's connect, learn and build together." km="តោះទំនាក់ទំនង រៀន និងបង្កើតជាមួយគ្នា។" /></Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 680, fontSize: { xs: '14px', md: '15px' }, lineHeight: 1.7, mt: 1.5 }}><LocalizedText en="Use the form for a general conversation, or open an individual member profile to contact the right person directly." km="ប្រើទម្រង់នេះសម្រាប់ការទំនាក់ទំនងទូទៅ ឬបើកប្រវត្តិរូបសមាជិក ដើម្បីទាក់ទងទៅកាន់មនុស្សដែលសមស្របដោយផ្ទាល់។" /></Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '0.72fr 1.28fr' }, gap: 3 }}>
          <Stack spacing={2.2}>
            <Reveal>
              <Card><CardContent sx={{ p: 3 }}><Stack direction="row" spacing={1.4}><Box sx={{ width: 46, height: 46, borderRadius: 1, bgcolor: 'primary.main', color: '#fff', display: 'grid', placeItems: 'center' }}><GroupsRoundedIcon /></Box><Box><Typography variant="h5" fontWeight={800}><LocalizedText en="PNC Student Team" km="ក្រុមនិស្សិត PNC" /></Typography><Typography color="text.secondary" sx={{ mt: 0.6 }}><LocalizedText en="Seven members across development, QA, planning, data and telecom." km="សមាជិក ៧ នាក់ក្នុងផ្នែកអភិវឌ្ឍ QA ការរៀបចំផែនការ ទិន្នន័យ និងទូរគមនាគមន៍។" /></Typography></Box></Stack></CardContent></Card>
            </Reveal>
            <Reveal delay={0.05}>
              <Card><CardContent sx={{ p: 3 }}><Stack spacing={2}><Stack direction="row" spacing={1.3} alignItems="center"><EmailOutlinedIcon color="primary" /><Box><Typography variant="caption" color="text.secondary"><LocalizedText en="GENERAL CONTACT" km="ទំនាក់ទំនងទូទៅ" /></Typography><Typography fontWeight={800}>chheadeveloper@gmail.com</Typography></Box></Stack><Stack direction="row" spacing={1.3} alignItems="center"><LocationOnOutlinedIcon color="primary" /><Box><Typography variant="caption" color="text.secondary"><LocalizedText en="LOCATION" km="ទីតាំង" /></Typography><Typography fontWeight={800}><LocalizedText en="Phnom Penh, Cambodia" km="ភ្នំពេញ ប្រទេសកម្ពុជា" /></Typography></Box></Stack></Stack></CardContent></Card>
            </Reveal>
            <Reveal delay={0.1}>
              <Card><CardContent sx={{ p: 3 }}><Typography variant="h6" fontWeight={800}><LocalizedText en="Contact a specific member" km="ទំនាក់ទំនងសមាជិកជាក់លាក់" /></Typography><Stack spacing={1.1} sx={{ mt: 2 }}>{teamMembers.filter((member) => member.email).map((member) => <Box key={member.slug} component="a" href={`mailto:${member.email}`} sx={{ display: 'flex', gap: 1.2, alignItems: 'center', p: 1.1, borderRadius: 1, border: '1px solid', borderColor: 'divider', '&:hover': { borderColor: 'primary.main' } }}><Avatar src={member.photo} alt={member.name} sx={{ width: 40, height: 40 }} /><Box sx={{ minWidth: 0 }}><Typography fontWeight={800}><LocalizedText en={member.name} km={khmerMemberNames[member.slug] || member.name} /></Typography><Typography variant="caption" color="text.secondary" sx={{ wordBreak: 'break-all' }}>{member.email}</Typography></Box></Box>)}</Stack></CardContent></Card>
            </Reveal>
          </Stack>
          <Reveal delay={0.06}><ContactForm /></Reveal>
        </Box>
      </Container>
    </>
  );
}
