'use client';

import { Alert, Box, Button, Card, CardContent, Stack, TextField, Typography } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subject = String(data.get('subject') || '').trim();
    const message = String(data.get('message') || '').trim();
    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = 'Please enter your name.';
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = 'Please enter a valid email address.';
    if (!subject) nextErrors.subject = 'Please add a subject.';
    if (message.length < 10) nextErrors.message = 'Please add a little more detail.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const body = `Hello PNC Student Team,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`;
    window.location.href = `mailto:chheadeveloper@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <Card>
      <CardContent sx={{ p: { xs: 2.6, md: 3.5 } }}>
        <Typography variant="h4" fontWeight={800}>Send a message</Typography>
        <Typography color="text.secondary" sx={{ mt: 1, mb: 2.5, lineHeight: 1.7 }}>Frontend-only MVP: submitting the form opens your default email app with the message prepared.</Typography>
        {submitted && <Alert severity="success" sx={{ mb: 2 }}>Your email app should now be open with the message ready to send.</Alert>}
        <Box component="form" onSubmit={submit} noValidate>
          <Stack spacing={2}>
            <TextField name="name" label="Full Name" fullWidth error={Boolean(errors.name)} helperText={errors.name} />
            <TextField name="email" label="Email" type="email" fullWidth error={Boolean(errors.email)} helperText={errors.email} />
            <TextField name="subject" label="Subject" fullWidth error={Boolean(errors.subject)} helperText={errors.subject} />
            <TextField name="message" label="Message" fullWidth multiline minRows={6} error={Boolean(errors.message)} helperText={errors.message || 'Tell us what you would like to discuss.'} />
            <Button type="submit" variant="contained" size="large" endIcon={<SendRoundedIcon />} sx={{ alignSelf: { sm: 'flex-start' } }}>Open email to send</Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}
