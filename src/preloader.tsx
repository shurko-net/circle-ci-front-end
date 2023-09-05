import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const BoxStyle = {
  display: 'flex',
  position: 'fixed',
  width: '100%',
  height: '100%',
  zIndex: '9999',
  top: '0',
  left: '0',
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
};

export default function Preloader() {
  return (
    <Box sx={BoxStyle}>
      <CircularProgress />
    </Box>
  );
}
