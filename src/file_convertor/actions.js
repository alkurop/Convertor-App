import { Actions, DownloadState } from "./DownloadItem";

export const sendFileAsync = item => {
  item.status = DownloadState.LOADING;
  return dispatch => {
    dispatch({ type: Actions.UPDATE_ITEM, payload: item });
    setTimeout(() => {
      item.status = DownloadState.FINISHED;
      dispatch({ type: Actions.UPDATE_ITEM, payload: item });
    }, 2000);
  };
};
