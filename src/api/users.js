import { apiRequest } from "./utils";
import { METHOD_DELTE, METHOD_POST } from "../constants/utils";

const User = {
  id: undefined,
  createdAt: undefined,
  nameFirst: undefined,
  nameLast: undefined,
  nameMiddle: undefined,
  gender: undefined,
  createdBy: undefined,
  associatedGroups: undefined,
  isDisabled: undefined
};

const getUserList = (page = 1, limit = 10) => {
  return apiRequest(`/users?page=${page}&limit=${limit}`);
};

const getUser = (userId) => {
  return apiRequest(`/users/${userId}`);
};

const deleteUser = (userId) => {
  return apiRequest(`/users/${userId}`, METHOD_DELTE);
};

const addUser = (user) => {
  return apiRequest(`/users`, METHOD_POST, user);
};

export default {
  getUserList,
  getUser,
  deleteUser,
  addUser
};
