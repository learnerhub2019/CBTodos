import {
  ADD_TODO,
  ADD_TODOS,
  DELETE_TODO,
  FETCH_TODOS,
  GET_TODOS
} from "./todosActions";

const initialState = {
  items: []
};

// {
//   userId: 1,
//   id: 1,
//   title: "delectus aut autem",
//   completed: false
// },
// {
//   userId: 1,
//   id: 2,
//   title: "delectus aut autem 2",
//   completed: true
// }

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, payload]
      };
    case DELETE_TODO:
      const filterTodos = state.items.filter((item) => {
        return item.id !== payload;
      });
      return {
        ...state,
        items: filterTodos
      };
    case ADD_TODOS:
      return {
        items: [...payload]
      };
    case FETCH_TODOS:
    case GET_TODOS:
    default:
      return state;
  }
};

export default todoReducer;
