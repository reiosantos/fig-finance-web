import moment from 'moment';
import { ThunkDispatch } from 'redux-thunk';
import actionTypes from '../../store/action-types';
import { Action, NotificationStateProps, NotificationType, State } from '../interface';

const createAction = (ACTION: string, data: any = null): Action => {
  return {
    type: ACTION,
    payload: data
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
      ),
    resetNotification: () =>
      dispatch(
        createAction(actionTypes.RESET_NOTIFICATION, {
          message: '',
          type: NotificationType.INFO
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
  createLoadingSelector,
  getNotificationProps,
  formatDate,
  debounce
};

export default Utility;
