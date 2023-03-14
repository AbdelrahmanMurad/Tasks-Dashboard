import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/app-routes";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./resources/css/custom.css";
import { Provider } from "react-redux";
import { reduxStore } from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={reduxStore}>
      <AppRoutes />
    </Provider>
  </BrowserRouter>
);
