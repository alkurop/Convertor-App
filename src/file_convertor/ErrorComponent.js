import React from "react";
import { Badge } from "reactstrap";

const ErrorComponent = ({ item }) => {
  var msg = "Something went wrong";
  if (
    item.error &&
    item.error.response &&
    item.error.response.data &&
    item.error.response.message
  ) {
    msg = item.error.response.data.message;
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
      <div className="ui_item">
        <Badge color="danger">Error:</Badge> {item.fileName}
      </div>
      <div className="ui_item">{msg}</div>
    </div>
  );
};

export default ErrorComponent;
