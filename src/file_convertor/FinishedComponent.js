import React from "react";
import { Badge } from "reactstrap";
import Close from "../Close";
import { connect } from "react-redux";
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

const FinishedComponent = ({ item, cancel }) => {
  const close = () => {
    cancel(item);
  };
  return (
    <div className="Container" style={containerStyle}>
      <div style={textContainerStyle}>
        <div
          className="ui_item"
          style={{ paddingLeft: "10px", paddingTop: "10px" }}
        >
          <Badge color="success">Finished:</Badge> {item.fileName}
        </div>
        <Close onClose={close} />
      </div>
      <div>
        <a
          href={item.url}
          download
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginBottom: "10px" }}
        >
          Download
        </a>
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
      dispatch({ type: Actions.REMOVE_ITEM, payload: item });
    }
  })
)(FinishedComponent);
