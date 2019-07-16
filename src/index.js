import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import isDebug from "./isDebug";

import "./index.css";
import App from "./App";
import CombinedReducer from "./CombinedReducer";

console.log("isDebug", isDebug())

let thunkReducer;
if (isDebug()) {
  thunkReducer = composeWithDevTools(applyMiddleware(thunk));
} else {
  thunkReducer = applyMiddleware(thunk);
}
const store = createStore(CombinedReducer, thunkReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

if (isDebug()) {
  serviceWorker.unregister();
} else {
  serviceWorker.register();
}
