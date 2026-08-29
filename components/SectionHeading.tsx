import { Box, Typography } from '@mui/material';

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: { eyebrow?: string; title: string; description?: string; align?: 'left' | 'center' }) {
  return (
    <Box sx={{ maxWidth: align === 'center' ? 760 : 720, mx: align === 'center' ? 'auto' : 0, textAlign: align, mb: 4.5 }}>
      {eyebrow && (
        <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: '0.12em' }}>
          {eyebrow}
        </Typography>
      )}
      <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, mt: 0.5 }}>
        {title}
      </Typography>
      {description && (
        <Typography sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.08rem' }, lineHeight: 1.8, mt: 1.5 }}>
          {description}
        </Typography>
      )}
    </Box>
  );
}
