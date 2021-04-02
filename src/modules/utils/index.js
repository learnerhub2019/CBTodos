const initialState = {
  isSideBarOpen: false
};

export const utilsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isSideBarOpen: action.payload
      };
    default:
      return state;
  }
};
