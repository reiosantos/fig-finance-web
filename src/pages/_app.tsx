import React from 'react';
import App from 'next/app';
import '../assets/styles/index.css';
import 'react-phone-input-2/lib/style.css';
import { Provider } from 'react-redux';
import ErrorBoundary from '../shared/components/errorBoundary/errorBoundary';
import withReduxStore from '../store/with-redux-store';
import Notification from '../shared/containers/notification';
import { withRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import AppTheme from '../theme';
import { CssBaseline, MuiThemeProvider, StylesProvider } from '@material-ui/core';
import Head from 'next/head';
import PageLoader from '../shared/containers/loader';

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render(): JSX.Element {
    const { Component, pageProps, reduxStore }: any = this.props;
    // get the component  Layout set for a page, otherwise if not set, use no layout
    const Layout = Component.Layout || React.Fragment;

    return (
      <>
        <Head>
          <title>Fig Finance</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, maximum-scale=1, user-scalable=no, shrink-to-fit=no"/>
        </Head>
        <StylesProvider injectFirst>
          <MuiThemeProvider theme={AppTheme}>
            <ThemeProvider theme={AppTheme}>
              <Provider store={reduxStore}>
                <CssBaseline/>
                <ErrorBoundary>
                  <Notification/>
                  <PageLoader/>
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </ErrorBoundary>
              </Provider>
            </ThemeProvider>
          </MuiThemeProvider>
        </StylesProvider>
      </>
    );
  }
}

export default withReduxStore(withRouter(MyApp));
