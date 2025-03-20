// src/styles/theme.js

import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8257e6',
      light: '#9466ff',
      dark: '#6833e4',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#04d361',
      light: '#1fe374',
      dark: '#03a14a',
      contrastText: '#ffffff',
    },
    background: {
      default: '#121214',
      paper: '#202024',
      dark: '#13131f',
    },
    text: {
      primary: '#e1e1e6',
      secondary: '#a8a8b3',
    },
    error: {
      main: '#e83f5b',
    },
    warning: {
      main: '#ffc107',
    },
    success: {
      main: '#04d361',
    },
    info: {
      main: '#3498db',
    },
    divider: '#323238',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      letterSpacing: '-0.025em',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      letterSpacing: '-0.025em',
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      letterSpacing: '-0.025em',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.25)',
    '0px 4px 8px rgba(0, 0, 0, 0.25)',
    '0px 8px 16px rgba(0, 0, 0, 0.25)',
    '0px 8px 16px rgba(0, 0, 0, 0.25)',
    '0px 8px 16px rgba(0, 0, 0, 0.25)',
    '0px 8px 16px rgba(0, 0, 0, 0.25)',
    '0px 8px 16px rgba(0, 0, 0, 0.25)',
    '0px 8px 16px rgba(0, 0, 0, 0.25)',
    '0px 8px 16px rgba(0, 0, 0, 0.25)',
    '0px 8px 16px rgba(0, 0, 0, 0.25)',
    '0px 8px 16px rgba(0, 0, 0, 0.25)',
    '0px 8px 16px rgba(0, 0, 0, 0.25)',
    '0px 8px 16px rgba(0, 0, 0, 0.25)',
    '0px 8px 16px rgba(0, 0, 0, 0.25)',
    '0px 8px 16px rgba(0, 0, 0, 0.25)',
    '0px 8px 16px rgba(0, 0, 0, 0.25)',
    '0px 8px 16px rgba(0, 0, 0, 0.25)',
    '0px 8px 16px rgba(0, 0, 0, 0.25)',
    '0px 8px 16px rgba(0, 0, 0, 0.25)',
    '0px 8px 16px rgba(0, 0, 0, 0.25)',
    '0px 8px 16px rgba(0, 0, 0, 0.25)',
    '0px 8px 16px rgba(0, 0, 0, 0.25)',
    '0px 8px 16px rgba(0, 0, 0, 0.25)',
    '0px 8px 16px rgba(0, 0, 0, 0.25)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 24px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: '#202024',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#13131f',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

// Você pode adicionar tipagem personalizada para o tema
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    }
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    }
  }
  interface Palette {
    neutral?: Palette['primary'];
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
  interface TypeBackground {
    dark?: string;
  }
}