'use client';

import { Box, Chip, Stack, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

const categories = ['All', 'Web', 'Software', 'QA', 'Data', 'Telecom'];

export default function ProjectGrid() {
  const [category, setCategory] = useState('All');
  const filtered = useMemo(() => category === 'All' ? projects : projects.filter((project) => project.category === category), [category]);
  return (
    <>
      <Stack direction="row" gap={1} flexWrap="wrap" sx={{ mb: 3.5 }}>
        {categories.map((item) => <Chip key={item} label={item} clickable color={category === item ? 'primary' : 'default'} variant={category === item ? 'filled' : 'outlined'} onClick={() => setCategory(item)} />)}
      </Stack>
      {filtered.length ? (
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }, gap: 2.5 }}>
          {filtered.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </Box>
      ) : (
        <Box sx={{ p: 5, border: '1px dashed', borderColor: 'divider', borderRadius: 3, textAlign: 'center' }}>
          <Typography variant="h6">No projects in this filter yet.</Typography>
          <Typography color="text.secondary">Choose another category to continue exploring.</Typography>
        </Box>
      )}
    </>
  );
}
