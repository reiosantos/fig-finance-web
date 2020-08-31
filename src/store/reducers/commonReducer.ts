import { Action, CommonState, NotificationType } from '../../shared/interface';
import actionTypes from '../action-types';

const initialState: CommonState = {
  notification: {
    message: '',
    type: NotificationType.INFO
  },
  loader: {
    success: false,
    loading: false
  }
};

const commonReducer = (state: CommonState = initialState, action: Action): CommonState => {
  switch (action.type) {
    case actionTypes.RESET_NOTIFICATION:
      return { ...state, notification: { message: '', type: NotificationType.INFO } };
    case actionTypes.SET_NOTIFICATION:
      return { ...state, notification: action.payload };
    case actionTypes.SHOW_LOADER:
      return { ...state, loader: { loading: true, success: false } };
    case actionTypes.HIDE_LOADER:
      return { ...state, loader: { loading: false, success: true } };
    default: {
      const { type } = action;
      const matches = /(.*)_(SUCCESS|FAIL)/.exec(type);
      if (!matches) {
        return state;
      }
      const [, , requestState] = matches;
      if (!action.payload || !action.payload.message) {
        return state;
      }
      return {
        ...state,
        loader: {
          success: requestState === 'SUCCESS',
          loading: false
        },
        notification: {
          message: action.payload.message,
          type: requestState === 'SUCCESS' ? NotificationType.SUCCESS : NotificationType.ERROR
        }
      };
    }
  }
};

export default commonReducer;
