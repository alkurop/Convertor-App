import React from "react";

const ErrorComponent = ({ item }) => {
  var msg = "";
  if (item.error.response.data !== undefined) {
    msg = item.error.response.data.message;
  }
  return (
    <div className="ErrorComponent">
      Error: {item.error.message} {item.error.status} {msg}
    </div>
  );
};

export default ErrorComponent;
