import { combineReducers } from "redux";
import utilsReducer from "./modules/utils/utilsReducer";
import todosReducer from "./modules/todos/todosReducer";

const rootReducer = combineReducers({
  utils: utilsReducer,
  todos: todosReducer
});

export default rootReducer;
