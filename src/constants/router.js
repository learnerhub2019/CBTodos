import {
  HomePage,
  AddTodosPage,
  SideMenuPages,
  AuthPage,
  DsLinkedListPage
} from "../pages";

export default [
  {
    path: "/",
    routeId: 1,
    isExact: true,
    componentName: HomePage,
    isAuthRequired: true,
    componentParams: []
  },
  {
    path: "/add",
    routeId: 2,
    isExact: false,
    isAuthRequired: true,
    componentName: AddTodosPage
    // componentParams: { todos, handleAddTodos }
  },
  {
    path: "/today",
    routeId: 3,
    isExact: false,
    isAuthRequired: true,
    componentName: SideMenuPages.TodayPage,
    componentParams: []
  },
  {
    path: "/due",
    routeId: 4,
    isExact: true,
    isAuthRequired: true,
    componentName: SideMenuPages.DuePage,
    componentParams: []
  },
  {
    path: "/upcoming",
    routeId: 5,
    isExact: false,
    isAuthRequired: true,
    componentName: SideMenuPages.UpcomingPage,
    componentParams: []
  },
  {
    path: "/signin",
    routeId: 6,
    isExact: false,
    isAuthRequired: false,
    componentName: AuthPage
  },
  {
    path: "/ds",
    routeId: 6,
    isExact: false,
    isAuthRequired: false,
    componentName: DsLinkedListPage
  }
];
