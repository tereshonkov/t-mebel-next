import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import type { PaletteMode } from '@mui/material';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: { 
      main: mode === 'light' ? 'rgba(112, 64, 21, 1)' : 'rgba(247, 210, 173, 1)' 
    },
    secondary: { 
      main: mode === 'light' ? 'rgba(247, 210, 173, 1)' : 'rgba(112, 64, 21, 1)' 
    },
    error: { main: red.A400 },
    background: {
      default: mode === 'light' ? 'rgba(255, 235, 214, 1)' : '#1a1410',
      paper: mode === 'light' ? 'rgba(254, 247, 240, 1)' : '#2a1f18',
    },
    text: {
      primary: mode === 'light' ? 'rgba(66, 35, 19, 1)' : 'rgba(254, 247, 240, 1)',
      secondary: mode === 'light' ? 'rgba(112, 64, 21, 0.7)' : 'rgba(247, 210, 173, 0.7)',
    },
  },
  shape: { borderRadius: 16 },
});

export const createAppTheme = (mode: PaletteMode) =>
  createTheme(getDesignTokens(mode));
