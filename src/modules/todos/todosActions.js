export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELTE_TODO";
export const GET_TODOS = "GET_TODOS";
export const FETCH_TODOS = "FETCH_TODOS";
export const ADD_TODOS = "ADD_TODOS";

export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
export const delteTodo = (todoId) => ({ type: DELETE_TODO, payload: todoId });
export const getTodos = () => ({ type: GET_TODOS });
export const fetchTodos = () => ({ type: FETCH_TODOS });
export const addTodos = (todos) => ({ type: ADD_TODOS, payload: todos });
