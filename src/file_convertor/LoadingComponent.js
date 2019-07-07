import React from "react";
import { Spinner } from "reactstrap";

const LoadingComponent = ({ item }) => {
  return (
    <div>
      <p>Processing ...</p>
      <Spinner color="primary" style={{ width: "5rem", height: "5rem" }} />
    </div>
  );
};

export default LoadingComponent;
