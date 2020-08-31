import { red } from '@material-ui/core/colors';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

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
      main: '#2a3f54',
      contrastText: '#fff'
    },
    error: {
      light: red[300],
      main: red[500],
      dark: red[500]
    }
  }
});

export default AppTheme;
