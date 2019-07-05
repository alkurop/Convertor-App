import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore } from "redux";
import { Actions } from "./DownloadItem";
import { DownloadState } from "./DownloadItem";
import _ from 'lodash'
import { type } from "os";

const initialState = [{ id: Date.now(), status: DownloadState.SELECTION }];

function downloadItems(state = initialState, action) {
  if (action.type === Actions.ADD_ITEM) return [...state, action.payload];
  if (action.type === Actions.UPDATE_ITEM) return _.replace(state, {id: action.payload.id}, action.payload);
  if (action.type === Actions.REMOVE_ITEM) return _.without(state,  {id: action.payload.id});  
  return state;
}

const store = createStore(downloadItems);
ReactDOM.render(<App />, document.getElementById("root"));

store.subscribe(() => {
  console.log("states", store.getState());
});

serviceWorker.unregister();

store.dispatch({
  type: Actions.ADD_ITEM,
  payload: { status: DownloadState.SELECTION }
});
