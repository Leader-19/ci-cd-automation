'use client';

import { Box, Button, LinearProgress, Stack, Typography } from '@mui/material';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const states = ['Initializing portfolio', 'Loading team profiles', 'Connecting technologies', 'Ready to explore'];

export default function IntroSplash({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [label, setLabel] = useState(states[0]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  const finish = () => {
    setVisible(false);
    window.setTimeout(onComplete, reduce ? 0 : 360);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const fallback = window.setTimeout(finish, 13500);
    return () => {
      document.body.style.overflow = '';
      window.clearTimeout(fallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.35, ease: 'easeOut' }}
          style={{ position: 'fixed', inset: 0, zIndex: 1500, background: '#02070D' }}
        >
          <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            <Box
              component="video"
              ref={videoRef}
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={finish}
              onTimeUpdate={(event) => {
                const video = event.currentTarget;
                if (!video.duration) return;
                const value = Math.min(100, (video.currentTime / video.duration) * 100);
                setProgress(value);
                const index = Math.min(states.length - 1, Math.floor((value / 100) * states.length));
                setLabel(states[index]);
              }}
              sx={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
            >
              <source src="/media/tech-intro.mp4" type="video/mp4" />
            </Box>
          </Box>

          <Box sx={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: { xs: 2.5, md: 5 } }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Box sx={{ width: { xs: 154, sm: 184 }, height: { xs: 42, sm: 50 }, overflow: 'hidden', flexShrink: 0 }}>
                <Box
                  component="img"
                  src="/logo/logo-removebg.png"
                  alt="PNC Team — Student Tech Portfolio"
                  sx={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                />
              </Box>
              <Button onClick={finish} variant="outlined" endIcon={<SkipNextRoundedIcon />} sx={{ color: '#fff', borderColor: '#5F6B78', bgcolor: 'rgba(2,7,13,0.66)', '&:hover': { borderColor: '#FFFFFF', bgcolor: '#101820' } }}>
                Skip intro
              </Button>
            </Stack>

            <Stack spacing={2.2} sx={{ width: '100%', maxWidth: 760, mx: 'auto', mb: { xs: 2, md: 3 } }}>
              <Box sx={{ p: { xs: 2, md: 2.5 }, borderRadius: 1, bgcolor: 'rgba(2,7,13,0.76)', border: '1px solid #27313A', backdropFilter: 'blur(10px)' }}>
                <Typography variant="overline" sx={{ color: '#4EDBE0', letterSpacing: '0.14em', fontWeight: 800 }}>SYSTEM STARTUP</Typography>
                <Typography variant="h4" sx={{ color: '#FFFFFF', mt: 0.6, fontSize: { xs: '16px', md: '18px' } }}>{label}</Typography>
                <Stack direction="row" justifyContent="space-between" sx={{ mt: 2, mb: 0.8 }}>
                  <Typography variant="caption" sx={{ color: '#A7B0BE' }}>PNC team experience</Typography>
                  <Typography variant="caption" sx={{ color: '#A7B0BE' }}>{Math.round(progress)}%</Typography>
                </Stack>
                <LinearProgress variant="determinate" value={progress} sx={{ height: 5, bgcolor: '#1B2630', '& .MuiLinearProgress-bar': { bgcolor: '#4EDBE0' } }} />
              </Box>
            </Stack>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
