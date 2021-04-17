import { apiRequest } from "./utils";

const getUserList = () => {
  return apiRequest("/users");
};

const getUser = (id) => {
  return apiRequest(`/users/${id}`);
};

export default {
  'getUserList' : getUserList,
  'getUser' : getUser
};
