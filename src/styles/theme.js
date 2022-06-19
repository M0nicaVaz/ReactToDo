import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9157ca',
    },
    secondary: {
      main: '#3A3E4F',
      light: '#6C7394',
    },
    success: {
      main: '#A0FAA6',
    },
    warning: {
      main: '#C75162',
    },
  },
  typography: {
    h1: {
      fontSize: '3rem',
      fontWeight: 'bolder',
    },
    fontFamily: ['Roboto', '"Helvetica"', 'sans-serif'].join(','),
  },
});

theme = responsiveFontSizes(theme);
