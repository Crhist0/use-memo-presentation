import { createTheme } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    text: {
      primary: '#222222',
    },
    background: {
      default: '#f8f9fb',
    },
    primary: {
      main: '#222222',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {},
    },
  },
});

export default lightTheme;
