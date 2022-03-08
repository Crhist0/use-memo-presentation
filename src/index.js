import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContextProvider } from './context/AppContext';
import { AuthContextProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import darkTheme from './Themes/DarkTheme';
import lightTheme from './Themes/LightTheme';

let theme = {
  light: lightTheme,
  dark: darkTheme,
};

// css
import { CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';

ReactDOM.render(
  <AuthContextProvider>
    <ThemeProvider theme={theme.light}>
      <AppContextProvider>
        <BrowserRouter>
          <SnackbarProvider maxSnack={10}>
            <App />
          </SnackbarProvider>
        </BrowserRouter>
      </AppContextProvider>
    </ThemeProvider>
  </AuthContextProvider>,
  document.getElementById('root')
);
