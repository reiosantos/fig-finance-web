import React from 'react';
import ServerError from '../errors/500';

class ErrorBoundary extends React.Component<any, any> {
  state = {
    error: null
  };

  static getDerivedStateFromError(error: Error | null) {
    return { error };
  }

  componentDidMount() {
    // window.onerror = this.logError;
  }

  componentDidCatch(error: Error | null, info: object) {
    this.logError(error);
  }

  logError(args: Error | null) {
    console.log(args);
  }

  render() {
    if (this.state.error) {
      this.logError(this.state.error);
      return <ServerError/>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
