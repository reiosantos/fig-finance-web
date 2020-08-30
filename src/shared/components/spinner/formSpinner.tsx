import React from 'react';
import Spinner from './spinner';

const FormSpinner: React.FC<{ isSubmitting: boolean }> = props => {
  if (!props.isSubmitting) {
    return null;
  }
  return (
    <div className="form-overlay-loader d-flex align-items-center justify-content-center">
      <Spinner />
    </div>
  );
};

export default FormSpinner;
