import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Рендеринг приложения с использованием Redux Store - Provider
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
