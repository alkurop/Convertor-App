import React from "react";
import { connect } from "react-redux";
import { sendFileAsync } from "../Actions";
import { Button, FormGroup, Input } from "reactstrap";

const SelectionComponent = ({ item, sendFlacFile, state }) => {
  var file;
  const onFormSubmit = event => {
    console.log("submit");
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
    <div className="Container">
      <FormGroup onSubmit={onFormSubmit}>
        <Input type="file" accept="audio/flac" onChange={onChange} />
        <Button
          color="primary"
          onClick={onFormSubmit}
          style={{ marginTop: "10px" }}
        >
          Convert
        </Button>
      </FormGroup>
    </div>
  );
};

export default connect(
  state => ({
    state: state
  }),
  dispatch => ({
    sendFlacFile: (item, file) => {
      dispatch(sendFileAsync(item, file));
    }
  })
)(SelectionComponent);
