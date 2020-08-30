import React from 'react';
import App from 'next/app';
import '../assets/styles/index.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-input-2/lib/style.css';
import { Provider } from 'react-redux';
import ErrorBoundary from '../shared/components/errorBoundary/errorBoundary';
import withReduxStore from '../store/with-redux-store';
import Notification from '../shared/components/notification/notification';
import { withRouter } from 'next/router';
import Layout from '../shared/components/layout';

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps, reduxStore }: any = this.props;

    return (
      <Provider store={reduxStore}>
        <ErrorBoundary>
          <Notification />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ErrorBoundary>
      </Provider>
    );
  }
}

export default withReduxStore(withRouter(MyApp));
