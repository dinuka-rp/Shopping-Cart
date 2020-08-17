import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { rootReducer } from "./store/reducers";
import { Provider } from "react-redux";
import { persistReducer, persistStore} from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// give dynamic name for cart when saving in Redux Persist storage would be enough
// let cartUser = "Dinuka"   // get this from local storage/ redux - will be available only after persisting store?
// let cartName = `cart_${cartUser}`;
let cartName = `cart_guest`;

const persistConfig = {
  key: cartName,
  storage,
};
const persReducer:any = persistReducer(persistConfig,rootReducer);

// initialize redux store
export const store = createStore(
  persReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__() // redux devtools chrome extension
);
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
