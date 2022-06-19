import React from 'react';
import ReactDOM from 'react-dom/client';
import ToDo from './pages/todo';

import { theme } from './styles/theme';
import { globalStyle } from './styles/Global';
import { ThemeProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {globalStyle}
      <ToDo />
    </ThemeProvider>
  </React.StrictMode>
);
