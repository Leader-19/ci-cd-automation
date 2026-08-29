'use client';

import { Box, Stack } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import { TechnologyBadge } from './TechIcon';

type TechnologyTickerProps = {
  technologies: string[];
};

/** A seamless, accessible right-to-left technology marquee. */
export default function TechnologyTicker({ technologies }: TechnologyTickerProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <Stack direction="row" gap={1.1} flexWrap="wrap" justifyContent="center">{technologies.map((tech) => <TechnologyBadge key={tech} name={tech} />)}</Stack>;
  }

  return (
    <Box aria-label="Technology stack" sx={{ position: 'relative', overflow: 'hidden', py: 0.3 }}>
      <Box component={motion.div} animate={{ x: ['0%', '-50%'] }} transition={{ duration: 28, ease: 'linear', repeat: Infinity }} sx={{ display: 'flex', gap: 1.1, width: 'max-content', pr: 1.1 }}>
        {technologies.map((tech) => <TechnologyBadge key={tech} name={tech} />)}
        <Box aria-hidden="true" sx={{ display: 'flex', gap: 1.1 }}>{technologies.map((tech) => <TechnologyBadge key={`repeat-${tech}`} name={tech} />)}</Box>
      </Box>
    </Box>
  );
}
