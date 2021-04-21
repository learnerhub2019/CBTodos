import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import utilsReducer from "./modules/utils/utilsReducer";
import todosReducer from "./modules/todos/todosReducer";
import authReducer from "./modules/auth/authReducer";
import usersReducer from "./modules/users/usersReducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["m"]
};

const rootReducer = combineReducers({
  utils: utilsReducer,
  todos: todosReducer,
  auth: authReducer,
  peoples: usersReducer
});

export default persistReducer(persistConfig, rootReducer);
