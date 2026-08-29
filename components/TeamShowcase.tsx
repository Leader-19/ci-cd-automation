'use client';

import { Box, Chip, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { teamMembers } from '@/data/team';
import { useLocale } from './Providers';

const cardSlots = [
  { top: '3%', left: '4%', width: '42%', rotate: -3, delay: 0 },
  { top: '9%', right: '3%', width: '39%', rotate: 3, delay: 0.2 },
  { bottom: '5%', left: '8%', width: '38%', rotate: 2, delay: 0.35 },
  { bottom: '1%', right: '6%', width: '39%', rotate: -2, delay: 0.5 },
] as const;

/** A rotating hero collage that introduces every team member. */
export default function TeamShowcase() {
  const [startingMember, setStartingMember] = useState(0);
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const km = locale === 'km';

  useEffect(() => {
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      setStartingMember((current) => (current + 1) % teamMembers.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <Box aria-label="Rotating showcase of PNC Team members" sx={{ position: 'relative', height: { xs: 390, sm: 500 }, maxWidth: 540, mx: 'auto', width: '100%' }}>
      <Box sx={{ position: 'absolute', inset: '6% 8% 2% 10%', border: '1px solid', borderColor: 'divider', borderRadius: 1, bgcolor: 'background.paper' }} />
      <Box sx={{ position: 'absolute', inset: '8% 11% 5% 13%', borderRadius: 1, bgcolor: 'primary.main', opacity: 0.045, transform: 'rotate(-4deg)' }} />

      {cardSlots.map((slot, slotIndex) => {
        const member = teamMembers[(startingMember + slotIndex) % teamMembers.length];
        const { delay, ...position } = slot;

        return (
          <Box
            key={slotIndex}
            component={motion.div}
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={reduceMotion ? undefined : { duration: 4.8, delay, repeat: Infinity, ease: 'easeInOut' }}
            sx={{ position: 'absolute', ...position, aspectRatio: '4 / 5', borderRadius: 1, overflow: 'hidden', border: '4px solid', borderColor: 'background.paper', boxShadow: '0 6px 18px rgba(16,24,40,0.10)', bgcolor: 'background.paper', zIndex: slotIndex + 1 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <Box
                key={member.slug}
                component={motion.div}
                initial={reduceMotion ? false : { opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                sx={{ position: 'absolute', inset: 0 }}
              >
                <Image src={member.photo} alt={`${member.name} — ${member.role}`} fill sizes="(max-width: 600px) 42vw, 260px" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                <Box component={Link} href={`/team/${member.slug}`} aria-label={`View ${member.name}'s profile`} sx={{ position: 'absolute', inset: 0, '&:focus-visible': { outline: '3px solid', outlineColor: 'primary.main', outlineOffset: -5 } }} />
              </Box>
            </AnimatePresence>
          </Box>
        );
      })}

      <Box sx={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 8, width: { xs: 126, sm: 144 }, textAlign: 'center', bgcolor: 'primary.main', color: '#FFFFFF', borderRadius: '8px', p: { xs: 0.9, sm: 1.1 }, boxShadow: '0 6px 18px rgba(21,94,239,0.16)' }}>
        <Typography variant="caption" sx={{ display: 'block', color: '#EAF0FF', fontSize: '9px', fontWeight: 700, letterSpacing: '0.04em', lineHeight: 1.35 }}>{km ? 'ក្រុមការងារ · ៧ នាក់' : 'MEET THE TEAM · 7 MEMBERS'}</Typography>
        <Typography variant="h6" sx={{ color: '#FFFFFF', fontSize: { xs: '14px', sm: '15px' }, fontWeight: 700, lineHeight: 1.2, mt: 0.35 }}>{km ? 'ក្រុម PNC' : 'PNC Team'}</Typography>
        <Typography variant="caption" sx={{ display: 'block', color: '#EAF0FF', fontSize: '9px', lineHeight: 1.3, mt: 0.3 }}>{km ? 'បង្ហាញសមាជិកជាបន្តបន្ទាប់' : 'A rotating member showcase'}</Typography>
      </Box>

      <Chip label={`${startingMember + 1} / ${teamMembers.length}`} size="small" sx={{ position: 'absolute', bottom: { xs: '0%', sm: '1%' }, left: '50%', transform: 'translateX(-50%)', zIndex: 9, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', fontWeight: 700 }} />
    </Box>
  );
}
