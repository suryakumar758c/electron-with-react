import React from "react";

const ErrorLabel = ({ message = "" }) => {
  return <span className="text-danger">{message}</span>;
};

export default ErrorLabel;
