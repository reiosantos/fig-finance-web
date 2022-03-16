import { useEffect } from 'react';
import { URLS } from 'shared/constants/constants';

// Access to this page takes you to the dashboard, the main app
const Index = () => {
  useEffect(() => {
    if (process.browser) {
      window.location.replace(URLS.DASHBOARD);
    }
  });

  return null;
};

export default Index;
