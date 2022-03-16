import { red } from '@material-ui/core/colors';
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

const primary = '#CA5050';

const AppTheme = createMuiTheme({
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Arial',
      'sans-serif'
    ].join(',')
  },
  palette: {
    secondary: {
      main: '#3b4753',
      contrastText: '#fff'
    },
    primary: {
      main: primary,
      contrastText: '#fff'
    },
    error: {
      light: red[300],
      main: red[500],
      dark: red[500]
    }
  },
});

export default AppTheme;
