import { CLOSE_SIDEBAR, OPEN_SIDEBAR, TOGGLE_SIDEBAR } from "./utilsActions";

const initialState = {
  isSideBarOpen: false
};

const utilsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_SIDEBAR:
      return {
        ...state,
        isSideBarOpen: true
      };
    case CLOSE_SIDEBAR:
      return {
        ...state,
        isSideBarOpen: false
      };
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isSideBarOpen: payload
      };
    default:
      return state;
  }
};

export default utilsReducer;
