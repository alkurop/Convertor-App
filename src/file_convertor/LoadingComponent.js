import React from "react";
import { Spinner, Badge } from "reactstrap";

const containerStyle = {
  display: "flex"
};

const LoadingComponent = ({ item }) => {
  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <div className="ui_item">
        <Badge color="warning">Processing:</Badge> {item.fileName}
      </div>
      <div
        className="ui_item"
        style={{
          margin: "auto"
        }}
      >
        <Spinner color="black" />
      </div>
    </div>
  );
};

export default LoadingComponent;
