import { Box, Typography } from '@mui/material';

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: { eyebrow?: string; title: string; description?: string; align?: 'left' | 'center' }) {
  return (
    <Box sx={{ maxWidth: align === 'center' ? 720 : 680, mx: align === 'center' ? 'auto' : 0, textAlign: align, mb: { xs: 3, md: 4 } }}>
      {eyebrow && (
        <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: '0.12em' }}>
          {eyebrow}
        </Typography>
      )}
      <Typography variant="h2" sx={{ mt: 0.5 }}>
        {title}
      </Typography>
      {description && (
        <Typography color="text.secondary" sx={{ fontSize: { xs: '14px', md: '15px' }, lineHeight: 1.7, mt: 1.25 }}>
          {description}
        </Typography>
      )}
    </Box>
  );
}
