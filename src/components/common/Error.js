import React, { PropTypes } from 'react';

const Error = ({ message }) => (
  <div className="error">{message}</div>
);

Error.propTypes = {
  message: PropTypes.string.isRequired
};

export default Error;
