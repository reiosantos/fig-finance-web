import Router from 'next/router';
import { useEffect } from 'react';

// Access to this page takes you to the dashboard, the main app
const Index = () => {
  useEffect(() => {
    Router.replace('/dashboard');
  });

  return null;
};

export default Index;
