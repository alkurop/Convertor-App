import React from "react";
import { Badge } from "reactstrap";
import Close from "../Close";
import {connect} from "react-redux";
import { Actions } from "./DownloadItem";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
};

const textContainerStyle = {
  display: "flex",
  justifyContent: "space-between"
};

const ErrorComponent = ({ item, cancel }) => {
  const close = () => {
    cancel(item);
  };
  var msg = "Something went wrong";
  if (item.error) {
    msg = item.error.message;
  }
  return (
    <div className="Container" style={containerStyle}>
      <div style={textContainerStyle}>
        <div
          className="ui_item"
          style={{ paddingLeft: "10px", paddingTop: "10px" }}
        >
          <Badge color="danger">Error:</Badge> {item.fileName}
        </div>
        <Close onClose={close} />
      </div>
      <div className="ui_item padding">{msg}</div>
    </div>
  );
};

export default connect(
  state => ({
    state: state
  }),
  dispatch => ({
    cancel: item => {
      dispatch({ type: Actions.REMOVE_ITEM, payload: item });
    }
  })
)(ErrorComponent);
