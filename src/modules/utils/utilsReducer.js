import {
  CLOSE_SIDEBAR,
  OPEN_SIDEBAR,
  TOGGLE_SIDEBAR,
  UTILS_ACTIONS
} from "./utilsActions";

const initialState = {
  isSideBarOpen: false,
  isLoading: false,
  isFetchRequest: false,
  successMessage: "",
  errorMessage: "",
  messageStack : []
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
    case UTILS_ACTIONS.REQUEST:
      return {
        ...state,
        isLoading: true,
        isFetchRequest: true
      };
    case UTILS_ACTIONS.SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: "",
        ...payload
      };
    case UTILS_ACTIONS.FAILURE:
      return {
        ...state,
        isLoading: false,
        successMessage: "",
        ...payload
      };
    case UTILS_ACTIONS.COMPLETE:
      return {
        ...state,
        isLoading: false,
        isFetchRequest: false,
        errorMessage: "",
        successMessage: ""
      };
    default:
      return state;
  }
};

export default utilsReducer;
