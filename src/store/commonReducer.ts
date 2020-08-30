import { Action, CommonState } from '../shared/interface';
import actionTypes from './action-types';

const initialState: CommonState = {
  modalStatus: {
    isModalOpen: false,
    action: ''
  },
  notification: {
    message: '',
    type: ''
  }
};

const commonReducer = (state: CommonState = initialState, action: Action): CommonState => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return { ...state, modalStatus: { isModalOpen: true, action: action.payload || '' } };
    case actionTypes.CLOSE_MODAL:
      return { ...state, modalStatus: { isModalOpen: false, action: '' } };
    case actionTypes.RESET_NOTIFICATION:
      return { ...state, notification: { message: '', type: '' } };
    case actionTypes.SET_NOTIFICATION:
      return { ...state, notification: action.payload };
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
        notification: {
          message: action.payload.message,
          type: requestState === 'SUCCESS' ? 'success' : 'error'
        }
      };
    }
  }
};

export default commonReducer;
