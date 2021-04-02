import { ADD_TODO, ADD_TODOS, DELETE_TODO, GET_TODOS } from "./todosActions";

const initialState = {
  items: []
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, payload]
      };
    case DELETE_TODO:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload)
      };
    case ADD_TODOS:
      return {
        ...state,
        items: [...state.items, ...payload]
      };
    case GET_TODOS:
    default:
      return state;
  }
};

export default todoReducer;
