'use client';

import { Box, Button, Card, CardContent, Chip, Stack, Tooltip, Typography } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import type { TeamMember } from '@/data/team';
import { useLocale } from './Providers';
import { localizedMemberName } from '@/lib/i18n';

export default function TeamCard({ member }: { member: TeamMember }) {
  const reduce = useReducedMotion();
  const { locale, messages } = useLocale();
  return (
    <motion.div whileHover={reduce ? undefined : { y: -3 }} transition={{ duration: 0.18 }} style={{ height: '100%' }}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', transition: 'box-shadow 180ms ease', '&:hover': { boxShadow: '0 6px 18px rgba(16,24,40,0.08)' } }}>
        <Box sx={{ position: 'relative', aspectRatio: '4 / 4.6', bgcolor: 'action.hover', overflow: 'hidden' }}>
          <Image src={member.photo} alt={`${member.name} - ${member.role}`} fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw" style={{ objectFit: 'cover', objectPosition: 'center top', transition: 'transform 220ms ease' }} />
          <Chip label={member.shortRole} size="small" sx={{ position: 'absolute', top: 14, left: 14, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }} />
        </Box>
        <CardContent sx={{ display: 'flex', flex: 1, flexDirection: 'column', p: { xs: 2, md: 2.5 } }}>
          <Typography variant="h5" sx={{ fontWeight: 800 }}>{localizedMemberName(member.slug, member.name, locale)}</Typography>
          <Typography color="primary.main" sx={{ fontWeight: 750, mt: 0.3 }}>{member.role}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.1, minHeight: { sm: 62, lg: 78 } }}>{member.focus}</Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 'auto', pt: 2.2 }}>
            <Button component={Link} href={`/${locale}/team/${member.slug}`} variant="contained" size="small" endIcon={<ArrowForwardRoundedIcon />} sx={{ flex: 1, minWidth: 0 }}>{messages.actions.viewProfile}</Button>
            <Tooltip title={member.cv ? `${messages.actions.openCv}: ${member.name}` : messages.actions.cvUnavailable}>
              <span>
                {member.cv ? (
                  <Button component="a" href={member.cv} target="_blank" rel="noreferrer" variant="outlined" size="small" aria-label={`Open ${member.name} CV`} sx={{ width: 44, minWidth: 44, px: 0 }}><DescriptionOutlinedIcon fontSize="small" /></Button>
                ) : (
                  <Button disabled variant="outlined" size="small" aria-label={`${member.name}: ${messages.actions.cvUnavailable}`} sx={{ width: 44, minWidth: 44, px: 0 }}><DescriptionOutlinedIcon fontSize="small" /></Button>
                )}
              </span>
            </Tooltip>
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
}
