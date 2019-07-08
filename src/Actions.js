import { Actions, DownloadState } from "./DownloadItem";
import { uploadFlacFileForConversion } from "./ApiActions";
export const sendFileAsync = (item, file) => {
  item.status = DownloadState.LOADING;
  return dispatch => {
    dispatch({ type: Actions.UPDATE_ITEM, payload: item });

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
