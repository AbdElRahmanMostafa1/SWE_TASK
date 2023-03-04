import React from "react";
import ReactDOM from "react-dom/client";
import "bootswatch/dist/zephyr/bootstrap.min.css";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
