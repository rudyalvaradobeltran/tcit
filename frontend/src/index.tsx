import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, ReactReduxContext } from "react-redux";
import store from "./application/config/store";
import App from "./ui/pages";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store} context={ReactReduxContext}>
      <App />
    </Provider>
  </React.StrictMode>
);
