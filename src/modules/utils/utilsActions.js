export const OPEN_SIDEBAR = "OPEN_SIDEBAR";
export const CLOSE_SIDEBAR = "CLOSE_SIDEBAR";
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";

export const MESSAGE_FORMAT = {
  id: null,
  isloading: false,
  isACtive: false,
  isSuccess: false,
  message: "",
  autoHide: false,
  delay: 3000
};

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

export const createMessage = (message, autoHide = false) => {
  this.message = message;
};

export const utilsActionComplet = () => {
  return {
    type: UTILS_ACTIONS.COMPLETE
  };
};

export const utilsActionSuccess = (successMessage, autohide = true) => {
  return (dispatch) => {
    dispatch({
      type: UTILS_ACTIONS.SUCCESS,
      payload: { successMessage, autohide }
    });

    // if (autohide) await setTimeout(() => dispatch(utilsActionComplet()), delay);
  };
};

export const utilsActionFailure = (errorMessage, autohide = true) => {
  return (dispatch) => {
    dispatch({
      type: UTILS_ACTIONS.FAILURE,
      payload: { errorMessage, autohide }
    });
    // if (autohide) await setTimeout(() => dispatch(utilsActionComplet()), delay);
  };
};

export const utilsActionRequest = () => {
  return {
    type: UTILS_ACTIONS.REQUEST
  };
};
