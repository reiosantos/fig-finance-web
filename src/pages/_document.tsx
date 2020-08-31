import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';
import AppTheme from '../theme';
import { ServerStyleSheets } from '@material-ui/core';

// Adding capability for styled components
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    // for Styled Components
    const styledComponentsSheet = new ServerStyleSheet();
    // For Material UI
    const materialSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            styledComponentsSheet.collectStyles(materialSheets.collect(<App {...props} />))
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {materialSheets.getStyleElement()}
            {styledComponentsSheet.getStyleElement()}
          </>
        )
      };
    } finally {
      styledComponentsSheet.seal();
    }
  }

  render() {
    // noinspection HtmlRequiredTitleElement
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={AppTheme.palette.primary.main}/>
          <meta charSet="utf-8"/>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
          <link href="/favicon.png" rel="icon" type="image/png"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}
