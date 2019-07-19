import { Actions, DownloadState } from "./file_convertor/DownloadItem";
import { uploadFlacFileForConversion } from "./file_convertor/ApiActions";
export const sendFileAsync = (item, file) => {
  item.status = DownloadState.LOADING;
  return dispatch => {
    dispatch({ type: Actions.UPDATE_ITEM, payload: item });
    dispatch({ type: Actions.ADD_ITEM });

    uploadFlacFileForConversion(file)
      .then(result => {
        console.log("result", result);
        item.status = DownloadState.FINISHED;
        item.url = result.data.url;
        dispatch({ type: Actions.UPDATE_ITEM, payload: item });
      })
      .catch(err => {
        item.status = DownloadState.ERROR;
        item.error = err;
        dispatch({ type: Actions.UPDATE_ITEM, payload: item });
      });
  };
};
