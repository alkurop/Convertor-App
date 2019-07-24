import React from "react";
import { Spinner, Badge } from "reactstrap";
import Close from "../Close";
import { connect } from "react-redux";
import { Actions } from "./DownloadItem";

const LoadingComponent = ({ item, cancel }) => {
  const close = () => {
    console.log("canceling")
    cancel(item)
  };
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  };
  const textContainerStyle = {
    display: "flex",
    justifyContent: "space-between"
  };

  return (
    <div className="Container" style={containerStyle}>
      <div style={textContainerStyle}>
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

export default connect(
  state => ({
    state: state
  }),
  dispatch => ({
    cancel: item => {
      if (item.promise) item.promise.cancel();
      dispatch({ type: Actions.REMOVE_ITEM, payload: item });
    }
  })
)(LoadingComponent);
