import { amber, green } from '@material-ui/core/colors';
import { createStyles, Theme } from '@material-ui/core';

const snackBarStyle = (theme: Theme) => createStyles({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.dark
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  }
});

export default snackBarStyle;
