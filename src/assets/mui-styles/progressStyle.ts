import { green } from '@material-ui/core/colors';
import { createStyles, Theme } from '@material-ui/core';

const progressStyles = (theme: Theme) => createStyles({
  root: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    zIndex: 1000,
    backgroundColor: 'rgba(105, 105, 105, 0.2)'
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700]
    }
  },
  fabProgress: {
    color: theme.palette.primary.light
  },
  buttonProgress: {
    margin: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'fixed'
  }
});

export default progressStyles;
