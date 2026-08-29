'use client';

import { Box, Button, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import WebRoundedIcon from '@mui/icons-material/WebRounded';
import BugReportRoundedIcon from '@mui/icons-material/BugReportRounded';
import DataObjectRoundedIcon from '@mui/icons-material/DataObjectRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import RouterRoundedIcon from '@mui/icons-material/RouterRounded';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import Link from 'next/link';
import type { Project } from '@/data/projects';
import { TechnologyBadge } from './TechIcon';

const iconByCategory = {
  Web: WebRoundedIcon,
  QA: BugReportRoundedIcon,
  Software: DataObjectRoundedIcon,
  Data: StorageRoundedIcon,
  Infrastructure: DnsRoundedIcon,
  Telecom: RouterRoundedIcon,
};

export default function ProjectCard({ project }: { project: Project }) {
  const Icon = iconByCategory[project.category];
  return (
    <Card sx={{ height: '100%', overflow: 'hidden', transition: 'transform 180ms ease, box-shadow 180ms ease', '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 6px 18px rgba(16,24,40,0.08)' } }}>
      <Box sx={{ height: 144, bgcolor: 'primary.main', color: '#fff', p: 2.5, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          <Box sx={{ width: 48, height: 48, bgcolor: '#FFFFFF', color: 'primary.main', borderRadius: 2.5, display: 'grid', placeItems: 'center' }}><Icon /></Box>
          <Chip label={project.category} size="small" sx={{ bgcolor: '#FFFFFF', color: '#101828', fontWeight: 800 }} />
        </Stack>
        <Typography variant="caption" sx={{ color: '#EAF0FF', fontWeight: 700 }}>{project.period}</Typography>
      </Box>
      <CardContent sx={{ p: 2.5 }}>
        <Typography variant="h5" sx={{ fontWeight: 800 }}>{project.title}</Typography>
        <Typography variant="body2" color="primary.main" sx={{ fontWeight: 750, mt: 0.5 }}>{project.status}</Typography>
        <Typography color="text.secondary" sx={{ lineHeight: 1.7, mt: 1.3 }}>{project.summary}</Typography>
        <Stack direction="row" gap={0.8} flexWrap="wrap" sx={{ mt: 2 }}>
          {project.technologies.slice(0, 3).map((tech) => <TechnologyBadge key={tech} name={tech} compact />)}
        </Stack>
        <Button component={Link} href={`/projects/${project.slug}`} variant="text" endIcon={<ArrowForwardRoundedIcon />} sx={{ px: 0, mt: 2.4 }}>View case study</Button>
      </CardContent>
    </Card>
  );
}
