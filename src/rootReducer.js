import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import utilsReducer from "./modules/utils/utilsReducer";
import todosReducer from "./modules/todos/todosReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["utils", "todos"]
};

const rootReducer = combineReducers({
  utils: utilsReducer,
  todos: todosReducer
});

export default persistReducer(persistConfig, rootReducer);
