import Head from 'next/head';
import React from 'react';

const Layout = ({ children }: any) => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link href="/favicon.png" rel="icon" type="image/png" />
      </Head>

      <main>{children}</main>

      <footer>
        <a
          href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
        </a>
      </footer>
    </div>
  );
};

export default Layout;
