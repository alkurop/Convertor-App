import React from "react";
import { Spinner } from "reactstrap";

const LoadingComponent = props => {
  return (
    <div>
      <Spinner color = "primary" style={{ width: '5rem', height: '5rem' }} />
    </div>
  );
};

export default LoadingComponent;
