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
          <meta charSet="utf-8"/>
          <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
          <link rel="manifest" href="/manifest.json"/>
          <meta name="mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="application-name" content="NJS Tmpl"/>
          <meta name="apple-mobile-web-app-title" content="NJS Tmpl"/>
          <meta name="theme-color" content={AppTheme.palette.primary.main}/>
          <meta name="msapplication-navbutton-color" content={AppTheme.palette.primary.main}/>
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
          <meta name="msapplication-starturl" content="/"/>
          <meta name='description' content='Nest JS Web Descrition'/>
          <meta name='keywords' content='Template, San'/>
          <link href='/icons/logo.png' rel='icon' type='image/png' sizes='16x16'/>
          <link href='/icons/logo.png' rel='icon' type='image/png' sizes='32x32'/>
          <link rel='apple-touch-icon' href='/icons/apple-icon.png'/>

          <link
            rel="preload" crossOrigin="anonymous"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="preload" crossOrigin="anonymous"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
          <link href="/icons/favicon.ico" rel="icon" type="image/png"/>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          <link href="/favicon.ico" rel="icon" type="image/png" />
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}
