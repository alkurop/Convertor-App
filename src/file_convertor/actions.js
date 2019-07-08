import { Actions, DownloadState } from "./DownloadItem";
import { uploadFlacFileForConversion } from "./ApiActions";
export const sendFileAsync = item => {
  item.status = DownloadState.LOADING;
  return dispatch => {
    dispatch({ type: Actions.UPDATE_ITEM, payload: item });

    uploadFlacFileForConversion(item.file)
      .then(result => {
        console.log("Conversion success", result)
        item.status = DownloadState.FINISHED;

        item.result = result.url;
        dispatch({ type: Actions.UPDATE_ITEM, payload: item });
      })
      .catch(err => {
        console.log("Conversion failed", err)
        console.log("Conversion respons", err.response)
        console.log("Conversion code", err.code)
        console.log("Conversion request", err.request)



        item.status = DownloadState.ERROR;
        item.error = err;
        dispatch({ type: Actions.UPDATE_ITEM, payload: item });
      });

  };
};
