import React from "react";
import { connect } from "react-redux";
import { sendFileAsync } from "../Actions";

const SelectionComponent = ({ item, sendFlacFile, state }) => {
  var file;
  const onFormSubmit = event => {
    event.preventDefault();
    if (file) {
      item.fileName = file.name;
       sendFlacFile(item, file);
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
    sendFlacFile: (item, file) => {
      dispatch(  sendFileAsync(item, file));
    }
  })
)(SelectionComponent);
