import React from 'react';
import { Button } from '@material-ui/core';

const Layout = ({ children }: any) => {
  return (
    <div className="wrapper">
      <Button variant="contained" color="primary">
        Hello World
      </Button>
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
