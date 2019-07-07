import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore, applyMiddleware } from "redux";
import { Actions } from "./DownloadItem";
import { DownloadState } from "./DownloadItem";
import _ from "lodash";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { stat } from "fs";

const initialState = [{ id: Date.now(), status: DownloadState.SELECTION }];

function downloadItems(state = initialState, action) {
  if (action.type === Actions.ADD_ITEM)
    return [...state, { ...action.payload, id: Date.now() }];
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

const store = createStore(
  downloadItems,
  composeWithDevTools(applyMiddleware(thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
