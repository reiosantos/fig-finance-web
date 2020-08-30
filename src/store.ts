import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export function initializeStore(initialState = {}) {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
}
