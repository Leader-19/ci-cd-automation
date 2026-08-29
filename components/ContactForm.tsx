'use client';

import { Alert, Box, Button, Card, CardContent, Stack, TextField, Typography } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { FormEvent, useState } from 'react';
import { useLocale } from './Providers';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { locale } = useLocale();
  const km = locale === 'km';

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subject = String(data.get('subject') || '').trim();
    const message = String(data.get('message') || '').trim();
    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = km ? 'សូមបញ្ចូលឈ្មោះរបស់អ្នក។' : 'Please enter your name.';
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = km ? 'សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលដែលត្រឹមត្រូវ។' : 'Please enter a valid email address.';
    if (!subject) nextErrors.subject = km ? 'សូមបញ្ចូលប្រធានបទ។' : 'Please add a subject.';
    if (message.length < 10) nextErrors.message = km ? 'សូមបន្ថែមព័ត៌មានលម្អិតបន្តិចទៀត។' : 'Please add a little more detail.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const body = km ? `សួស្តី ក្រុមនិស្សិត PNC,\n\n${message}\n\nពី៖ ${name}\nអ៊ីមែល៖ ${email}` : `Hello PNC Student Team,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`;
    window.location.href = `mailto:chheadeveloper@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <Card>
      <CardContent sx={{ p: { xs: 2.6, md: 3.5 } }}>
        <Typography variant="h4" fontWeight={800}>{km ? 'ផ្ញើសារ' : 'Send a message'}</Typography>
        <Typography color="text.secondary" sx={{ mt: 1, mb: 2.5, lineHeight: 1.7 }}>{km ? 'ទម្រង់នេះនឹងបើកកម្មវិធីអ៊ីមែលលំនាំដើមរបស់អ្នកជាមួយសារដែលបានរៀបចំរួច។' : 'Frontend-only MVP: submitting the form opens your default email app with the message prepared.'}</Typography>
        {submitted && <Alert severity="success" sx={{ mb: 2 }}>{km ? 'កម្មវិធីអ៊ីមែលរបស់អ្នកគួរតែបើករួចជាមួយសារដែលត្រៀមផ្ញើ។' : 'Your email app should now be open with the message ready to send.'}</Alert>}
        <Box component="form" onSubmit={submit} noValidate>
          <Stack spacing={2}>
            <TextField name="name" label={km ? 'ឈ្មោះពេញ' : 'Full Name'} fullWidth error={Boolean(errors.name)} helperText={errors.name} />
            <TextField name="email" label="Email" type="email" fullWidth error={Boolean(errors.email)} helperText={errors.email} />
            <TextField name="subject" label={km ? 'ប្រធានបទ' : 'Subject'} fullWidth error={Boolean(errors.subject)} helperText={errors.subject} />
            <TextField name="message" label={km ? 'សារ' : 'Message'} fullWidth multiline minRows={6} error={Boolean(errors.message)} helperText={errors.message || (km ? 'ប្រាប់យើងអំពីអ្វីដែលអ្នកចង់ពិភាក្សា។' : 'Tell us what you would like to discuss.')} />
            <Button type="submit" variant="contained" size="large" endIcon={<SendRoundedIcon />} sx={{ alignSelf: { sm: 'flex-start' } }}>{km ? 'បើកអ៊ីមែលដើម្បីផ្ញើ' : 'Open email to send'}</Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}
