import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MyApp from '../src/pages/_app';
import {render, screen} from "@testing-library/react";

const mockStore = configureStore([thunk]);
let store;

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

test('renders learn react link', () => {
  render(<MyApp/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
