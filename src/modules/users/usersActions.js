export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELTE_USER";
export const GET_USERS = "GET_USERS";
export const FETCH_USERS = "FETCH_USERS";
export const ADD_USERS = "ADD_USERS";

export const addUser = (user) => ({ type: ADD_USER, payload: user });
export const delteUser = (userId) => ({ type: DELETE_USER, payload: userId });
export const getUsers = () => ({ type: GET_USERS });
export const fetchUsers = () => ({ type: FETCH_USERS });
export const addUsers = (users) => ({ type: ADD_USERS, payload: users });
