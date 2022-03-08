import { createTheme, darkScrollbar } from '@mui/material';

const darkTheme = createTheme({
  mode: 'dark',
  palette: {
    background: {
      default: 'rgba(51, 51, 53, 1)',
    },
    primary: {
      main: '#f8f9fb',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar(),
      },
    },
  },
});

export default darkTheme;
