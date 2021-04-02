import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./rootReducer";

//code to setup redux dev tools
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const sagaMiddleWare = createSagaMiddleware();
const middleWares = [logger];
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWares))
);
export const persistor = persistStore(store);
export default { store, persistor };
