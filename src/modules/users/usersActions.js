import USER_API from "../../api/users";
import {
  utilsActionRequest,
  utilsActionFailure,
  utilsActionSuccess
} from "../utils/utilsActions";

export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELTE_USER";
export const GET_USERS = "GET_USERS";
export const FETCH_USERS = "FETCH_USERS";
export const ADD_USERS = "ADD_USERS";

const fetchUsers = (users) => ({
  type: FETCH_USERS,
  payload: users
});

// thunk example async
export function getUserList(page = 1, limit = 10) {
  return (dispatch) => {
    dispatch(utilsActionRequest());
    USER_API.getUserList(page, limit)
      .then((users) => {
        dispatch(fetchUsers(users));
        dispatch(utilsActionSuccess("Users imported successfully !!", true));
      })
      .catch((error) => {
        dispatch(utilsActionFailure("Failed to import users !!", true));
      });
  };
}

export function deleteUser(userId) {
  return (dispatch) => {
    USER_API.deleteUser(userId).then((res) => {
      dispatch({ type: DELETE_USER, payload: userId });
    });
  };
}
