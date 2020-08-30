import React from 'react';

const Spinner: React.FC<{}> = () => {
  return (
    <div className="spinner inline-block" data-testid="spinner">
      <div className="spinner-loading" />
    </div>
  );
};

export default Spinner;
