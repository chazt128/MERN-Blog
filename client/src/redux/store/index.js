import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../sagas";
const isChrome =
  !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
const isDev = process.env.NODE_ENV !== "production";

const configureStore = () => {
  console.log("is Chrome", isChrome);
  const sagaMiddleware = createSagaMiddleware();

  if (isChrome && isDev) {
    const store = createStore(
      rootReducer,
      compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    );
    sagaMiddleware.run(rootSaga);
    return store;
  }
  // Production
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
