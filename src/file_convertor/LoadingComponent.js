import React from "react";
import { Spinner, Badge } from "reactstrap";
import Close from "../Close";

const LoadingComponent = ({ item }) => {
  const close = () => {};

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <div
          className="ui_item"
          style={{ paddingLeft: "10px", paddingTop: "10px" }}
        >
          <Badge color="warning">Processing:</Badge> {item.fileName}
        </div>
        <Close onClose={close} />
      </div>
      <div
        className="ui_item"
        style={{
          margin: "auto"
        }}
      >
        <Spinner className="padding" color="black" />
      </div>
    </div>
  );
};

export default LoadingComponent;
