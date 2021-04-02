export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";

export const toggleSidebar = (currentSidebarStatus) => ({
  type: TOGGLE_SIDEBAR,
  payload: !currentSidebarStatus
});
