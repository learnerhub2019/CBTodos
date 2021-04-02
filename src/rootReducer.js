import { combineReducers } from "redux";
import utilsReducer from "./modules/utils/utilsReducer";

const rootReducer = combineReducers({ utils: utilsReducer });

export default rootReducer;
