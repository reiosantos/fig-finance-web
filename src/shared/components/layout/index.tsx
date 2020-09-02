import React from 'react';

const Layout = ({ children }: any) => {
  return (
    <div className="wrapper">
      <main>{children}</main>

      <footer>
        <a
          href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/zeit.svg" alt="ZEIT Logo"/>
        </a>
      </footer>
    </div>
  );
};

export default Layout;
