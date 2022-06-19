import { GlobalStyles } from '@mui/material';
import { theme } from './theme';

import '@fontsource/roboto';

export const globalStyle = (
  <GlobalStyles
    styles={{
      body: {
        background: 'linear-gradient(140deg, #3a3e4f45, #9157ca6a)',
        backgroundSize: 'cover',
        minHeight: '100vh',
      },
      h1: { color: '#4d475e', textShadow: '1px 1px 2px black' },
      li: { listStyle: 'none' },
    }}
  />
);
