import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import type { PaletteMode } from '@mui/material';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: { main: mode === 'light' ? '#2E335B' : '#90caf9' },
    secondary: { main: '#f50057' },
    error: { main: red.A400 },
    background: {
      default: mode === 'light' ? '#EEEDEB' : '#0A0C27',
      paper: mode === 'light' ? '#EEEDEB' : '#0F123B',
    },
    text: {
      primary: mode === 'light' ? '#2E335B' : '#fff',
      secondary: mode === 'light' ? '#555' : '#ccc',
    },
  },
  shape: { borderRadius: 8 },
});

export const createAppTheme = (mode: PaletteMode) =>
  createTheme(getDesignTokens(mode));
