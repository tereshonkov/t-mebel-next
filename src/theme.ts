import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import type { PaletteMode } from '@mui/material';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: { main: mode === 'light' ? '#1976d2' : '#90caf9' },
    secondary: { main: '#f50057' },
    error: { main: red.A400 },
    background: {
      default: mode === 'light' ? '#fafafa' : '#121212',
      paper: mode === 'light' ? '#fff' : '#1e1e1e',
    },
  },
  shape: { borderRadius: 8 },
});

export const createAppTheme = (mode: PaletteMode) =>
  createTheme(getDesignTokens(mode));
