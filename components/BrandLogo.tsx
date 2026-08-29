'use client';

import { Box, type SxProps, type Theme } from '@mui/material';
import { useColorMode } from './Providers';

type BrandLogoProps = {
  sx?: SxProps<Theme>;
};

/** Displays the correct brand asset for the active color mode. */
export default function BrandLogo({ sx }: BrandLogoProps) {
  const { mode } = useColorMode();

  return (
    <Box
      sx={{
        width: { xs: 148, sm: 184 },
        height: { xs: 40, sm: 48 },
        overflow: 'hidden',
        flexShrink: 0,
        ...sx,
      }}
    >
      <Box
        component="img"
        src={mode === 'light' ? '/logo/logo.png' : '/logo/logo-removebg.png'}
        alt="PNC Team — Student Tech Portfolio"
        sx={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </Box>
  );
}
