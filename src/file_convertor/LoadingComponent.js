import React from "react";
import { Spinner } from "reactstrap";

const LoadingComponent = ({ item }) => {
  return (
    <div className="Container">
      <p className="ui_item">Processing ...</p>
      <Spinner
        color="black"
        style={{ width: "5rem", height: "5rem", margin: 10 }}
      />
    </div>
  );
};

export default LoadingComponent;
