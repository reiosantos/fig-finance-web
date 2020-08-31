import React from 'react';
import { Typography, useTheme } from '@material-ui/core';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import PropTypes from 'prop-types';

function ServerError({ message }: any) {
  const theme = useTheme();

  return (
    <div className="wrapper" style={{
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText
    }}>
      <section className="content-header">
        <h1>
          500 Error Page
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
          <h2 className="headline text-red"> 500</h2>
          <div className="error-content">
            <h2><WarningRoundedIcon className="text-red"/> Oops! Something went wrong.</h2>
            {
              message
                ? <p>{message}</p>
                : (
                  <Typography>
                    We will work on fixing that right away.
                    Meanwhile, you may <a href="/">return to our main-page</a>
                  </Typography>
                )
            }
          </div>
        </div>
      </section>
    </div>
  );
}

ServerError.propTypes = {
  message: PropTypes.string
};

export default ServerError;
