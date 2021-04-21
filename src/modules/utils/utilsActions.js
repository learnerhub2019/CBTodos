export const OPEN_SIDEBAR = "OPEN_SIDEBAR";
export const CLOSE_SIDEBAR = "CLOSE_SIDEBAR";
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";

export const toggleSidebar = (currentSidebarStatus) => ({
  type: TOGGLE_SIDEBAR,
  payload: !currentSidebarStatus
});

export const closeSideBar = () => ({ type: CLOSE_SIDEBAR });
export const openSideBar = () => ({ type: OPEN_SIDEBAR });

export const UTILS_ACTIONS = {
  REQUEST: "UTILS_ACTIONS_REQUEST",
  SUCCESS: "UTILS_ACTIONS_SUCCESS",
  FAILURE: "UTILS_ACTIONS_FAILURE",
  COMPLETE: "UTILS_ACTIONS_COMPLETE"
};

export const utilsActionComplet = () => {
  return {
    type: UTILS_ACTIONS.COMPLETE
  };
};

export const utilsActionSuccess = (
  successMessage,
  autohide = false,
  delay = 3000
) => {
  return async (dispatch) => {
    dispatch({
      type: UTILS_ACTIONS.SUCCESS,
      payload: successMessage
    });

    if (autohide) await setTimeout(() => dispatch(utilsActionComplet()), delay);
  };
};

export const utilsActionFailure = (
  errorMessage,
  autohide = false,
  delay = 3000
) => {
  return async (dispatch) => {
    dispatch({
      type: UTILS_ACTIONS.FAILURE,
      payload: errorMessage
    });
    if (autohide) await setTimeout(() => dispatch(utilsActionComplet()), delay);
  };
};

export const utilsActionRequest = () => {
  return {
    type: UTILS_ACTIONS.REQUEST
  };
};
