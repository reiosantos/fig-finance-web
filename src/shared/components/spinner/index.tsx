import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import NetworkCheck from '@material-ui/icons/NetworkCheck';
import progressStyles from '../../../assets/mui-styles/progressStyle';
import { Fab } from '@material-ui/core';

interface IProps {
  classes: any;
  loading: boolean;
  success: boolean;
}

const CircularIntegration = ({ loading, success, classes }: IProps & any) => {
  const buttonClass = classNames({ [classes.buttonSuccess]: success }, classes.buttonProgress);

  return (
    !loading
      ? null
      : (
        <React.Fragment>
          <div className={classes.root}>
            <Fab aria-label="status" size={'small'} color="primary" className={buttonClass}>
              {success ? <CheckIcon/> : <NetworkCheck/>}
            </Fab>
            {
              loading && (
                <CircularProgress
                  size={68}
                  color='primary'
                  className={classNames(classes.fabProgress, classes.buttonProgress)}
                />
              )
            }
          </div>
        </React.Fragment>
      )
  );
};

CircularIntegration.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool,
  success: PropTypes.bool
};

CircularIntegration.defaultProps = {
  loading: false,
  success: false
};

export default withStyles(progressStyles)(CircularIntegration);
