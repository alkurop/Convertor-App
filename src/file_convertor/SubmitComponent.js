import React from "react";
import { connect } from "react-redux";
import { sendFileAsync } from "../Actions";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

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
    <div>
      <FormGroup onSubmit={onFormSubmit}>
        <Input
          style={{ margin: 20 }}
          type="file"
          accept="audio/flac"
          onChange={onChange}
        />
        <Button className="ui_item" onClick={onFormSubmit}>
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
