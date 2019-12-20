
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

import { Router } from "react-router";
import { createBrowserHistory } from "history";

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from "./redux/store";

const { persistor, store } = configureStore();

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
