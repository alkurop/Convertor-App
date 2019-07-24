import React from "react";
import { connect } from "react-redux";
import { Button, FormGroup, Input } from "reactstrap";
import { uploadFlacFileForConversion } from "./ApiActions";
import { DownloadState, Actions } from "./DownloadItem";

const SelectionComponent = ({
  item,
  onFileSuccess,
  onItemLoading,
  onFileError
}) => {
  var file;

  function sendFile(item, file) {
    const cancelable = {
      isCanceled: false,
      cancel: () => {
        this.isCanceled = true;
      }
    };
    
    onItemLoading(item);
    uploadFlacFileForConversion(file)
      .then(result => {
        console.log("result", result);
        if (!cancelable.isCanceled) {
          onFileSuccess(item, result);
        }
      })
      .catch(err => {
        if (!cancelable.isCanceled) {
          onFileError(item, err);
        }
      });

    return cancelable;
  }

  const onFormSubmit = event => {
    console.log("submit");
    event.preventDefault();
    if (file) {
      item.fileName = file.name;
      item.cancelable = sendFile(item, file);
    }
  };
  const onChange = event => {
    file = event.target.files[0];
  };

  return (
    <div className="Container padding">
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
    onFileSuccess: (item, result) => {
      item.status = DownloadState.FINISHED;
      item.url = result.data.url;
      dispatch({ type: Actions.UPDATE_ITEM, payload: item });
    },
    onItemLoading: item => {
      item.status = DownloadState.LOADING;
      dispatch({ type: Actions.UPDATE_ITEM, payload: item });
      dispatch({ type: Actions.ADD_ITEM });
    },
    onFileError: (item, err) => {
      item.status = DownloadState.ERROR;
      item.error = err;
      dispatch({ type: Actions.UPDATE_ITEM, payload: item });
    }
  })
)(SelectionComponent);
