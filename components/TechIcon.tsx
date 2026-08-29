'use client';

import { Box, Tooltip, Typography, useTheme } from '@mui/material';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiMui,
  SiVuedotjs,
  SiLaravel,
  SiPhp,
  SiPython,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiGithub,
  SiGit,
  SiFigma,
  SiDocker,
  SiKubernetes,
  SiLinux,
  SiBootstrap,
  SiTailwindcss,
  SiHtml5,
  SiCss,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

const iconMap: Record<string, { icon: IconType; color: string }> = {
  'React.js': { icon: SiReact, color: '#61DAFB' },
  React: { icon: SiReact, color: '#61DAFB' },
  'Next.js': { icon: SiNextdotjs, color: '#111111' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
  'Material UI': { icon: SiMui, color: '#007FFF' },
  'Vue.js': { icon: SiVuedotjs, color: '#42B883' },
  Laravel: { icon: SiLaravel, color: '#FF2D20' },
  PHP: { icon: SiPhp, color: '#777BB4' },
  Python: { icon: SiPython, color: '#3776AB' },
  'Node.js': { icon: SiNodedotjs, color: '#5FA04E' },
  MySQL: { icon: SiMysql, color: '#4479A1' },
  PostgreSQL: { icon: SiPostgresql, color: '#4169E1' },
  GitHub: { icon: SiGithub, color: '#181717' },
  Git: { icon: SiGit, color: '#F05032' },
  Figma: { icon: SiFigma, color: '#F24E1E' },
  Docker: { icon: SiDocker, color: '#2496ED' },
  Kubernetes: { icon: SiKubernetes, color: '#326CE5' },
  Linux: { icon: SiLinux, color: '#FCC624' },
  Bootstrap: { icon: SiBootstrap, color: '#7952B3' },
  'Bootstrap 5': { icon: SiBootstrap, color: '#7952B3' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  HTML: { icon: SiHtml5, color: '#E34F26' },
  HTML5: { icon: SiHtml5, color: '#E34F26' },
  CSS: { icon: SiCss, color: '#1572B6' },
  CSS3: { icon: SiCss, color: '#1572B6' },
};

export function TechIcon({ name, size = 22 }: { name: string; size?: number }) {
  const theme = useTheme();
  const item = iconMap[name];
  if (!item) {
    return <CodeRoundedIcon sx={{ fontSize: size, color: 'text.secondary' }} />;
  }
  const Icon = item.icon;
  const adjusted = item.color === '#111111' && theme.palette.mode === 'dark' ? '#FFFFFF' : item.color;
  return <Icon size={size} color={adjusted} aria-hidden />;
}

export function TechnologyBadge({ name, compact = false }: { name: string; compact?: boolean }) {
  return (
    <Tooltip title={name} arrow>
      <Box
        component="span"
        sx={{
          minHeight: compact ? 36 : 44,
          px: compact ? 1.1 : 1.4,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.8,
          borderRadius: 1,
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
          boxShadow: '0 1px 2px rgba(16,24,40,0.05)',
        }}
      >
        <TechIcon name={name} size={compact ? 18 : 21} />
        <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', whiteSpace: 'nowrap' }}>
          {name}
        </Typography>
      </Box>
    </Tooltip>
  );
}
