import { GlobalStyles } from '@mui/material';
import { theme } from './theme';
const { palette } = theme;
import '@fontsource/roboto';

export const globalStyle = (
  <GlobalStyles
    styles={{
      body: { background: palette.secondary.main },
      h1: { color: palette.success.main },
      li: { listStyle: 'none' },
    }}
  />
);
