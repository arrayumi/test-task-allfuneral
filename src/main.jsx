import React from "react";
import ReactDOM from "react-dom/client";
import {  HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./app/store/index.js";
import App from "./app/App.jsx";

import "normalize.css";
import "./app/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter >
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
