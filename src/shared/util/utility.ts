import moment from 'moment';
import { ThunkDispatch } from 'redux-thunk';
import actionTypes from '../../store/action-types';
import { Action, ModalStateProps, NotificationStateProps, State } from '../interface';

const createAction = (ACTION: string, data: any = null): Action => {
  return {
    type: ACTION,
    payload: data
  };
};

const getModalStateProps = (dispatch: ThunkDispatch<{}, {}, Action>): ModalStateProps => {
  return {
    openModal: action => dispatch(createAction(actionTypes.OPEN_MODAL, action)),
    closeModal: () => dispatch(createAction(actionTypes.CLOSE_MODAL))
  };
};

const getNotificationProps = (dispatch: ThunkDispatch<{}, {}, Action>): NotificationStateProps => {
  return {
    addNotification: (message, type) =>
      dispatch(
        createAction(actionTypes.SET_NOTIFICATION, {
          message,
          type
        })
      )
  };
};

const createLoadingSelector = (actions: string[]) => (state: State) => {
  // returns true only when all actions is not loading
  let loader = false;
  for (const action of actions) {
    if (state.loading.api[action]) {
      loader = true;
      break;
    }
  }
  return loader;
};

/**
 * function which returns formatted date
 * @param date
 * @param format
 */
const formatDate = (date: any, format?: string) => {
  if (!date) {
    return '';
  }
  return moment(date)
    .local()
    .format(format || 'YYYY-MM-DD HH:mm:ss');
};

const debounce = (func: any, wait = 400) => {
  let h: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(h);
    h = setTimeout(() => func(...args), wait);
  };
};

const Utility = {
  createAction,
  getModalStateProps,
  createLoadingSelector,
  formatDate,
  debounce,
  getNotificationProps
};

export default Utility;
