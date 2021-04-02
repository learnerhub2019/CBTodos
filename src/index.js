import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";

import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import rootReducer from "./rootReducer";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");

// function* exampleSaga() {
//   yeild(2 + 3);
//   console.log("Example saga reached");
// }

export const sagaMiddleWare = createSagaMiddleware();
const store = createStore(rootReducer);
// sagaMiddleWare.run(exampleSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
