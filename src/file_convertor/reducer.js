import { Actions, DownloadState } from "./DownloadItem";
import _ from "lodash";

const initialState = [{ id: Date.now(), status: DownloadState.SELECTION }];

export default function manageItems(state = initialState, action) {
  if (action.type === Actions.ADD_ITEM)
    return [...state, { id: Date.now(), status: DownloadState.SELECTION }];
  if (action.type === Actions.UPDATE_ITEM) {
    const updatedItem = action.payload;
    var index = _.findIndex(state, { id: updatedItem.id });
    state[index] = updatedItem;
    return Array.from(state);
  }
  if (action.type === Actions.REMOVE_ITEM)
    return _.without(state, { id: action.payload.id });
  return state;
}
