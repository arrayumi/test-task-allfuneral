import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./app/store/index.js";
import App from "./app/App.jsx";

import "normalize.css";
import "./app/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/test-task-allfuneral">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
