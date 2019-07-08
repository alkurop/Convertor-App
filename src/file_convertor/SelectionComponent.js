import React from "react";
import { connect } from "react-redux";
import { Actions, DownloadState } from "./DownloadItem";

const SelectionComponent = ({ item, sendFlacFile, state }) => {
  var file;
  const onFormSubmit = event => {
    event.preventDefault();
    if (file) {
      item.file = file;
      sendFlacFile(item);
    }
  };
  const onChange = event => {
    file = event.target.files[0];
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          style={{ margin: 10 }}
          type="file"
          accept="audio/flac"
          onChange={onChange}
        />
        <button style={{ margin: 10 }} type="submit">
          Convert
        </button>
      </form>
    </div>
  );
};

export default connect(
  state => ({
    state: state
  }),
  dispatch => ({
    sendFlacFile: item => {
      item.status = DownloadState.LOADING;
      dispatch({ type: Actions.UPDATE_ITEM, payload: item });
      const sendFileAsync = () => {
        return dispatch => {
          setTimeout(() => {
            item.status = DownloadState.FINISHED;
            dispatch({ type: Actions.UPDATE_ITEM, payload: item });
          }, 2000);
        };
      };
      dispatch(sendFileAsync());
    }
  })
)(SelectionComponent);
