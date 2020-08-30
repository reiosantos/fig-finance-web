import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { Action, State } from '../../interface';
import actionTypes from '../../../store/action-types';
import Utility from '../../util/utility';

interface MapStateProps {
  message: string;
  type: string;
}

interface DispatchProps {
  closeNotification: () => void;
}

/**
 * Notification - this component uses **react-toastify** to show notification
 * whenever it receives a message from props, and a flag, to toggle it's state,
 * it adds a notification to toastr
 * depending on notification type
 * @param props
 */
const Notification: React.FC<MapStateProps & DispatchProps> = props => {
  const { message, type } = props;
  if (!!message) {
    // make first letter of msg capital, and the rest as they are
    const msg = `${message[0].toUpperCase()}${message.substr(1)}`;
    if (type === 'success') {
      // for now disable success messages
      // toast.success((msg), {toastId: `${Math.random()}`});
    } else if (type === 'error') {
      toast.error(msg, { toastId: `${Math.random()}` });
    }
    setTimeout(props.closeNotification, 50);
  }
  return (
    <ToastContainer
      position="top-right"
      autoClose={4000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      draggable
      pauseOnHover
    />
  );
};

const mapStateToProps = (state: State): MapStateProps => ({
  ...state.common.notification
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>): DispatchProps => ({
  closeNotification: () => dispatch(Utility.createAction(actionTypes.RESET_NOTIFICATION))
});

export default connect<MapStateProps, DispatchProps, {}, State>(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
