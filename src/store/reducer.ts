import { combineReducers } from 'redux';
import loadingReducer from './reducers/loadingReducer';
import commonReducer from './reducers/commonReducer';

const rootReducer = combineReducers({
  loading: loadingReducer,
  common: commonReducer
});

export default rootReducer;
