import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ErrorMessage({ message }) {
  return (
    <div className="alert alert-danger" role="alert">
      {message}
    </div>
  );
}

export default ErrorMessage;