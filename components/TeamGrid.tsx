'use client';

import { Box, Chip, Stack } from '@mui/material';
import { useMemo, useState } from 'react';
import { teamMembers } from '@/data/team';
import TeamCard from './TeamCard';

const filters = ['All', 'Development', 'QA', 'Planning', 'Infrastructure'];

export default function TeamGrid() {
  const [filter, setFilter] = useState('All');
  const members = useMemo(() => teamMembers.filter((member) => {
    if (filter === 'All') return true;
    if (filter === 'Development') return /Developer|Full Stack/.test(member.role);
    if (filter === 'QA') return /Quality/.test(member.role);
    if (filter === 'Planning') return /Planning/.test(member.role);
    if (filter === 'Infrastructure') return /Roaming|Interconnection/.test(member.role);
    return true;
  }), [filter]);

  return (
    <>
      <Stack direction="row" gap={1} flexWrap="wrap" sx={{ mb: 3.5 }}>
        {filters.map((item) => <Chip key={item} label={item} clickable color={filter === item ? 'primary' : 'default'} variant={filter === item ? 'filled' : 'outlined'} onClick={() => setFilter(item)} />)}
      </Stack>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 2.5 }}>
        {members.map((member) => <TeamCard key={member.slug} member={member} />)}
      </Box>
    </>
  );
}
