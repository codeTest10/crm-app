import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./core/store";
import App from "./App";
import { loadCustomers } from "./modules/Customer/Manage/actions";

const store = configureStore();
store.dispatch(loadCustomers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
