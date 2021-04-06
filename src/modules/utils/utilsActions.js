export const OPEN_SIDEBAR = "OPEN_SIDEBAR";
export const CLOSE_SIDEBAR = "CLOSE_SIDEBAR";
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";

export const toggleSidebar = (currentSidebarStatus) => ({
  type: TOGGLE_SIDEBAR,
  payload: !currentSidebarStatus
});

export const closeSideBar = () => ({ type: CLOSE_SIDEBAR });
export const openSideBar = () => ({ type: OPEN_SIDEBAR });
