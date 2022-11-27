import React from "react";

const NotFound = () => {
  return (
    <React.Fragment>
      <h1>Page Not Found</h1>
    </React.Fragment>
  );
};

const ServerError = () => {
  return (
    <React.Fragment>
      <h1>Server Error 500</h1>
    </React.Fragment>
  );
};

export { NotFound, ServerError };
