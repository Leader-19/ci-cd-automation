'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { teamMembers } from '@/data/team';
import { localizedMemberName } from '@/lib/i18n';
import { useLocale } from './Providers';

/** A continuously orbiting hero collage that keeps all seven members visible. */
export default function TeamShowcase() {
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const km = locale === 'km';

  return (
    <Box aria-label="Rotating showcase of PNC Team members" sx={{ position: 'relative', height: { xs: 390, sm: 500 }, maxWidth: 540, mx: 'auto', width: '100%', isolation: 'isolate' }}>
      <Box sx={{ position: 'absolute', inset: '7% 9% 4% 9%', border: '1px solid', borderColor: 'divider', borderRadius: 1, bgcolor: 'background.paper' }} />
      <Box sx={{ position: 'absolute', inset: '12% 13% 9% 13%', borderRadius: '50%', border: '1px dashed', borderColor: 'primary.main', opacity: 0.2 }} />
      <Box sx={{ position: 'absolute', inset: '21% 22% 18% 22%', borderRadius: '50%', bgcolor: 'primary.main', opacity: 0.045 }} />

      <Box
        component={motion.div}
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={reduceMotion ? undefined : { duration: 30, repeat: Infinity, ease: 'linear' }}
        sx={{ position: 'absolute', left: '50%', top: '50%', width: 0, height: 0, zIndex: 2 }}
      >
        {teamMembers.map((member, index) => {
          const angle = (360 / teamMembers.length) * index;
          const name = localizedMemberName(member.slug, member.name, locale);

          return (
            <Box
              key={member.slug}
              sx={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: { xs: 82, sm: 118 },
                aspectRatio: '4 / 5',
                transform: {
                  xs: `translate(-50%, -50%) rotate(${angle}deg) translateY(-124px)`,
                  sm: `translate(-50%, -50%) rotate(${angle}deg) translateY(-168px)`,
                },
                transformOrigin: 'center',
              }}
            >
              <Box
                component={motion.div}
                initial={{ rotate: -angle }}
                animate={reduceMotion ? { rotate: -angle } : { rotate: -angle - 360 }}
                transition={reduceMotion ? undefined : { duration: 30, repeat: Infinity, ease: 'linear' }}
                sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', borderRadius: 1, border: '3px solid', borderColor: 'background.paper', boxShadow: '0 6px 18px rgba(16,24,40,0.14)', bgcolor: 'background.paper' }}
              >
                <Image src={member.photo} alt={`${name} — ${member.role}`} fill sizes="(max-width: 600px) 82px, 118px" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                <Box component={Link} href={`/team/${member.slug}`} aria-label={`${km ? 'មើលប្រវត្តិរូប' : 'View'} ${name}`} sx={{ position: 'absolute', inset: 0, '&:focus-visible': { outline: '3px solid', outlineColor: 'primary.main', outlineOffset: -4 } }} />
              </Box>
            </Box>
          );
        })}
      </Box>

      <Box sx={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 8, width: { xs: 126, sm: 144 }, textAlign: 'center', bgcolor: 'primary.main', color: '#FFFFFF', borderRadius: '8px', p: { xs: 0.9, sm: 1.1 }, boxShadow: '0 6px 18px rgba(21,94,239,0.16)' }}>
        <Typography variant="caption" sx={{ display: 'block', color: '#EAF0FF', fontSize: '9px', fontWeight: 700, letterSpacing: '0.04em', lineHeight: 1.35 }}>{km ? 'ក្រុមការងារ · ៧ នាក់' : 'MEET THE TEAM · 7 MEMBERS'}</Typography>
        <Typography variant="h6" sx={{ color: '#FFFFFF', fontSize: { xs: '14px', sm: '15px' }, fontWeight: 700, lineHeight: 1.2, mt: 0.35 }}>{km ? 'ក្រុម PNC' : 'PNC Team'}</Typography>
        <Typography variant="caption" sx={{ display: 'block', color: '#EAF0FF', fontSize: '9px', lineHeight: 1.3, mt: 0.3 }}>{km ? 'បង្ហាញសមាជិកជុំវិញក្រុម' : 'Meet every member in motion'}</Typography>
      </Box>
    </Box>
  );
}
