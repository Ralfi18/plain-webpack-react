import { ADD_USER } from "../actionTypes";

let nextTodoId = 0;

export const addUsers = content => ({
  type: ADD_USER,
  payload: {
    id: ++nextTodoId,
    content
  }
});