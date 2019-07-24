import React from "react";
import { Badge } from "reactstrap";
import Close from "../Close";

const ErrorComponent = ({ item }) => {
  var msg = "Something went wrong";
  if (item.error) {
    msg = item.error;
  }
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
          <Badge color="danger">Error:</Badge> {item.fileName}
        </div>
        <Close />
      </div>
      <div className="ui_item padding">{msg}</div>
    </div>
  );
};

export default ErrorComponent;
