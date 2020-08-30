import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import commonReducer from './commonReducer';

const rootReducer = combineReducers({
  loading: loadingReducer,
  common: commonReducer
});

export default rootReducer;
