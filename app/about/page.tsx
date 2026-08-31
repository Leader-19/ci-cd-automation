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
import LocalizedText from '@/components/LocalizedText';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({ title: 'About the Team', description: 'Learn about the PNC student technology team, its mission, values and practical learning approach.', path: '/about', keywords: ['PNC student team mission', 'technology education Cambodia'] });

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
          <Chip label={<LocalizedText en="ABOUT THE TEAM" km="អំពីក្រុមការងារ" />} color="primary" variant="outlined" sx={{ mb: 2 }} />
          <Typography variant="h1" sx={{ maxWidth: 760 }}><LocalizedText en="A student team turning learning into practical experience." km="ក្រុមនិស្សិតដែលបម្លែងការសិក្សាទៅជាបទពិសោធន៍ជាក់ស្តែង។" /></Typography>
          <Typography color="text.secondary" sx={{ fontSize: { xs: '14px', md: '15px' }, lineHeight: 1.7, maxWidth: 720, mt: 1.5 }}>
            <LocalizedText en="We are a PNC student technology team with different professional directions but a shared commitment to learning by building, testing and improving real solutions." km="យើងជាក្រុមនិស្សិតបច្ចេកវិទ្យា PNC ដែលមានទិសដៅអាជីពខុសគ្នា ប៉ុន្តែមានការប្តេជ្ញាចិត្តរួមគ្នាក្នុងការរៀនតាមរយៈការបង្កើត សាកល្បង និងកែលម្អដំណោះស្រាយពិតប្រាកដ។" />
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 3 }}>
          <Reveal><Card sx={{ height: '100%' }}><CardContent sx={{ p: { xs: 3, md: 4 } }}><Typography variant="overline" color="primary.main" fontWeight={800}><LocalizedText en="MISSION" km="បេសកកម្ម" /></Typography><Typography variant="h3" sx={{ mt: 1 }}><LocalizedText en="Build practical skills through real collaboration." km="កសាងជំនាញជាក់ស្តែងតាមរយៈកិច្ចសហការពិតប្រាកដ។" /></Typography><Typography color="text.secondary" sx={{ mt: 2, lineHeight: 1.8 }}><LocalizedText en="Develop dependable technology skills, deliver useful team projects and strengthen professional habits through planning, development, QA, documentation and technical operations." km="អភិវឌ្ឍជំនាញបច្ចេកវិទ្យាដែលអាចទុកចិត្តបាន ប្រគល់គម្រោងក្រុមដែលមានប្រយោជន៍ និងពង្រឹងទម្លាប់វិជ្ជាជីវៈតាមរយៈការរៀបចំផែនការ ការអភិវឌ្ឍ QA ឯកសារ និងប្រតិបត្តិការបច្ចេកទេស។" /></Typography></CardContent></Card></Reveal>
          <Reveal delay={0.08}><Card sx={{ height: '100%' }}><CardContent sx={{ p: { xs: 3, md: 4 } }}><Typography variant="overline" color="primary.main" fontWeight={800}><LocalizedText en="VISION" km="ចក្ខុវិស័យ" /></Typography><Typography variant="h3" sx={{ mt: 1 }}><LocalizedText en="Grow into capable technology professionals." km="រីកចម្រើនជាអ្នកជំនាញបច្ចេកវិទ្យាដែលមានសមត្ថភាព។" /></Typography><Typography color="text.secondary" sx={{ mt: 2, lineHeight: 1.8 }}><LocalizedText en="Use continuous learning, teamwork and disciplined delivery to become professionals who can contribute confidently to real organizations and technology products." km="ប្រើប្រាស់ការរៀនជាបន្ត ការងារជាក្រុម និងការប្រគល់ការងារប្រកបដោយវិន័យ ដើម្បីក្លាយជាអ្នកជំនាញដែលអាចចូលរួមចំណែកដោយទំនុកចិត្តដល់អង្គការ និងផលិតផលបច្ចេកវិទ្យាពិតប្រាកដ។" /></Typography></CardContent></Card></Reveal>
        </Box>
      </Container>

      <Box sx={{ bgcolor: 'background.paper', borderBlock: '1px solid', borderColor: 'divider', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl">
          <Reveal><SectionHeading eyebrow={<LocalizedText en="OUR VALUES" km="តម្លៃរបស់យើង" />} title={<LocalizedText en="The habits behind our work" km="ទម្លាប់នៅពីក្រោយការងាររបស់យើង" />} description={<LocalizedText en="A professional portfolio is not only about tools. These values shape how we communicate, build and improve together." km="ស្នាដៃវិជ្ជាជីវៈមិនមែនមានតែឧបករណ៍ប៉ុណ្ណោះទេ។ តម្លៃទាំងនេះកំណត់របៀបដែលយើងទំនាក់ទំនង បង្កើត និងកែលម្អជាមួយគ្នា។" />} /></Reveal>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 2 }}>
            {values.map(([title, text, Icon], index) => <Reveal key={title} delay={index * 0.04}><Card sx={{ height: '100%' }}><CardContent sx={{ p: 3 }}><Box sx={{ width: 48, height: 48, bgcolor: 'primary.main', color: '#fff', borderRadius: 1, display: 'grid', placeItems: 'center', mb: 2 }}><Icon /></Box><Typography variant="h5" fontWeight={800}><LocalizedText en={title} km={['ការងារជាក្រុម', 'គុណភាព', 'ភាពចង់ដឹងចង់ឃើញ', 'ការរៀនជាបន្ត', 'ផ្តោតលើអ្នកប្រើប្រាស់', 'ទំនួលខុសត្រូវ'][index]} /></Typography><Typography color="text.secondary" sx={{ lineHeight: 1.75, mt: 1 }}><LocalizedText en={text} km={['យើងធ្វើការឆ្លងកាត់តួនាទីផ្សេងៗ និងជួយគ្នាទៅវិញទៅមក ដើម្បីជំរុញគម្រោងឱ្យទៅមុខ។', 'យើងយកចិត្តទុកដាក់លើភាពអាចទុកចិត្តបាន ភាពច្បាស់លាស់ និងការផ្ទៀងផ្ទាត់អ្វីដែលយើងបង្កើត។', 'យើងបន្តស្រាវជ្រាវឧបករណ៍ គំរូ និងវិធីសាស្ត្រល្អៗ ដើម្បីដោះស្រាយបញ្ហា។', 'គ្រប់គម្រោងគឺជាឱកាសដើម្បីពង្រឹងជំនាញបច្ចេកទេស និងជំនាញវិជ្ជាជីវៈ។', 'យើងភ្ជាប់ការសម្រេចចិត្តផ្នែកបច្ចេកទេសទៅនឹងតម្រូវការពិតរបស់អ្នកប្រើប្រាស់ និងលទ្ធផលដែលអាចប្រើបាន។', 'យើងទំនាក់ទំនងឱ្យច្បាស់ ទទួលខុសត្រូវលើការងាររបស់យើង និងរក្សាការប្រគល់ការងារឱ្យមានតម្លាភាព។'][index]} /></Typography></CardContent></Card></Reveal>)}
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
        <Reveal><SectionHeading eyebrow={<LocalizedText en="OUR JOURNEY" km="ដំណើររបស់យើង" />} title={<LocalizedText en="From learning to real-world exposure" km="ពីការរៀនទៅកាន់បទពិសោធន៍ពិភពការងារពិត" />} description={<LocalizedText en="The team's story is a progression from foundational learning to academic projects, internships and professional roles." km="ដំណើររបស់ក្រុមគឺជាការរីកចម្រើនពីការរៀនមូលដ្ឋាន ទៅគម្រោងសិក្សា កម្មសិក្សា និងតួនាទីវិជ្ជាជីវៈ។" />} /></Reveal>
        <Stack spacing={1.5}>
          {journey.map(([number, title, text], index) => (
            <Reveal key={number} delay={index * 0.05}>
              <Card><CardContent sx={{ p: 2.8 }}><Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5}><Box sx={{ width: 54, height: 54, flexShrink: 0, borderRadius: 1, bgcolor: 'primary.main', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 900 }}>{number}</Box><Box><Typography variant="h5" fontWeight={800}><LocalizedText en={title} km={['រៀនមូលដ្ឋាន', 'អនុវត្តតាមរយៈគម្រោង', 'បទពិសោធន៍ក្នុងបរិយាកាសពិត', 'ចែករំលែកដំណើរ'][index]} /></Typography><Typography color="text.secondary" sx={{ mt: 0.7, lineHeight: 1.75 }}><LocalizedText en={text} km={['កសាងចំណេះដឹងស្នូលក្នុងការសរសេរកម្មវិធីវេប វិស្វកម្មកម្មវិធី មូលដ្ឋានទិន្នន័យ QA និងជំនាញវិជ្ជាជីវៈ។', 'អនុវត្តការរៀនក្នុងថ្នាក់តាមរយៈគម្រោងសិក្សា ក្រុមហ៊ុននិម្មិត និងការងារជាក្រុម។', 'រីកចម្រើនតាមរយៈកម្មសិក្សា និងតួនាទីវិជ្ជាជីវៈក្នុងផ្នែកកម្មវិធី ទិន្នន័យ អាកាសយានដ្ឋាន QA និងទូរគមនាគមន៍។', 'ប្រើស្នាដៃនេះដើម្បីបង្ហាញការងារដែលបានផ្ទៀងផ្ទាត់ មេរៀន ជំនាញ និងទិសដៅអាជីព។'][index]} /></Typography></Box></Stack></CardContent></Card>
            </Reveal>
          ))}
        </Stack>
      </Container>
    </>
  );
}
