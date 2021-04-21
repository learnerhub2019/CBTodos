import {
  ADD_USER,
  ADD_USERS,
  DELETE_USER,
  FETCH_USERS,
  GET_USERS
} from "./usersActions";

const initialState = {
  loading: false,
  error: "",
  users: []
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, payload]
      };
    case DELETE_USER:
      const filterUsers = state.users.filter((item) => {
        return item.id !== payload;
      });
      return {
        ...state,
        users: filterUsers
      };
    case ADD_USERS:
      return {
        ...state,
        users: [...payload]
      };

    case FETCH_USERS:
      return {
        ...state,
        loading: false,
        users: [...payload]
      };
    case GET_USERS:
    default:
      return state;
  }
};

export default usersReducer;
