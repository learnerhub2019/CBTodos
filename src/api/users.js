import { apiRequest } from "./utils";
import { METHOD_DELTE } from "../constants/utils";

const getUserList = (page = 1, limit = 10) => {
  return apiRequest(`/users?page=${page}&limit=${limit}`);
};

const getUser = (userId) => {
  return apiRequest(`/users/${userId}`);
};

const deleteUser = (userId) => {
  return apiRequest(`/users/${userId}`, METHOD_DELTE);
};

export default {
  getUserList,
  getUser,
  deleteUser
};
