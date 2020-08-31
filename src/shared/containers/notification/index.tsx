import React from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { Action, NotificationState, State } from '../../interface';
import actionTypes from '../../../store/action-types';
import Utility from '../../util/utility';
import CustomizedSnackBar from '../../components/snackbar';


interface DispatchProps {
  closeNotification: () => void;
}

/**
 * Notification - this component uses **MUI Snack bar** to show notification
 * whenever it receives a message from props, and a flag, to toggle it's state,
 * it adds a notification to Snackbar
 * depending on notification type
 * @param props
 */
const Notification: React.FC<NotificationState & DispatchProps> = props => {
  const { message, type } = props;
  let open = false;

  if (!!message) {
    open = true;
  }

  const closeSnack = () => {
    open = false;
    props.closeNotification();
  };

  return (
    <React.Fragment>
      <CustomizedSnackBar
        variant={type}
        handleClose={closeSnack}
        open={open}
        message={message}
        key={Math.random()}/>
    </React.Fragment>
  );
};

const mapStateToProps = (state: State): NotificationState => ({
  ...state.common.notification
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>): DispatchProps => ({
  closeNotification: () => dispatch(Utility.createAction(actionTypes.RESET_NOTIFICATION))
});

export default connect<NotificationState, DispatchProps, {}, State>(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
