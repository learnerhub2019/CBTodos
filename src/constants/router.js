import { HomePage, AddTodosPage, SideMenuPages } from "../pages";

export default [
  {
    path: "/",
    routeId: 1,
    isExact: true,
    componentName: HomePage,
    componentParams: []
  },
  {
    path: "/add",
    routeId: 2,
    isExact: true,
    componentName: AddTodosPage
    // componentParams: { todos, handleAddTodos }
  },
  {
    path: "/today",
    routeId: 3,
    isExact: false,
    componentName: SideMenuPages.TodayPage,
    componentParams: []
  },
  {
    path: "/due",
    routeId: 4,
    isExact: false,
    componentName: SideMenuPages.DuePage,
    componentParams: []
  },
  {
    path: "/upcoming",
    routeId: 5,
    isExact: false,
    componentName: SideMenuPages.UpcomingPage,
    componentParams: []
  }
];

