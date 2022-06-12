import React from "react";
import { render } from "react-dom";
import "antd/dist/antd.css";
import "./styles/styles.css";
import store from "./app/store";
import { Provider } from "react-redux";
import { Users } from "./features/users/Users";

const App: React.FC = () => <Users />;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

export type RootState = ReturnType<typeof store.getState>
