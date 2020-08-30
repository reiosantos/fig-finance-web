/* eslint-disable no-underscore-dangle */
import React from 'react';
import { initializeStore } from '../store';
import { State } from '../shared/interface';
import { AppContext } from 'next/app';

const isServer = typeof window === 'undefined';
// @ts-ignore
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState?: State) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  // @ts-ignore
  if (!window[__NEXT_REDUX_STORE__]) {
    // @ts-ignore
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }
  // @ts-ignore
  return window[__NEXT_REDUX_STORE__];
}

const withReduxStore = (App: any) => {
  return class AppWithRedux extends React.Component {
    reduxStore: any;

    constructor(props: any) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    static async getInitialProps(appContext: AppContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore();

      // Provide the store to getInitialProps of pages
      // @ts-ignore
      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      };
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};

export default withReduxStore;
