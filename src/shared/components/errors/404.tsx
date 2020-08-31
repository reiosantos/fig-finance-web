import React from 'react';
import { useTheme } from '@material-ui/core';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';

function NotFound(props: any) {
  const theme = useTheme();

  return (
    <div className="wrapper" style={{
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText
    }}>
      <section className="content-header">
        <h1>
          404 Error Page
        </h1>
        <ol className="breadcrumb">
          <li>
            <a href="/" style={{ color: theme.palette.primary.contrastText }}>
              <DashboardRoundedIcon className="mr-2"/> Home
            </a>
          </li>
        </ol>
      </section>
      <section className="content">
        <div className="error-page">
          <h2 className="headline text-yellow"> 404</h2>
          <div className="error-content">
            <h2><WarningRoundedIcon className="text-yellow"/> Oops! Page not found.</h2>
            <p>
              We're sorry, but the requested page could not be found
              Meanwhile, you may <a href="/">return to our home-page</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
