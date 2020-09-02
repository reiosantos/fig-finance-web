import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MyApp from '../src/pages/_app';

const mockStore = configureStore([thunk]);
let store;

describe('App component', () => {
  beforeEach(() => {
    store = mockStore({
      loading: {
        api: {}
      },
      common: {
        loader: {
          success: false,
          loading: false
        },
        notification: {
          message: '',
          type: 'info'
        }
      }
    });
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<MyApp/>);
    expect(wrapper).toHaveLength(1);
  });
});
