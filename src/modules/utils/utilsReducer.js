import { TOGGLE_SIDEBAR } from "./utilsActions";

const initialState = {
  isSideBarOpen: false
};

const utilsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
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
