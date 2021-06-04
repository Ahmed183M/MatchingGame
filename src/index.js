import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducer from "./Container/Reducer";

let store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
