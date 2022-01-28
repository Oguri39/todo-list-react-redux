import { ITodo } from "../../interface";
import {
  DELETE_TODO,
  EDIT_TODO,
  RECEIVE_TODO,
  TOGGLE_VISIBILITY,
} from "./actionType";

export const receiveTodo = (todo: ITodo) => ({
  type: RECEIVE_TODO,
  payload: todo,
});
export const toggleVisibility = (visibility: string) => ({
  type: TOGGLE_VISIBILITY,
  payload: visibility,
});
export const deleteTodo = (taskId: string) => ({
  type: DELETE_TODO,
  payload: taskId,
});
export const editTodo = (todo: ITodo) => ({
  type: EDIT_TODO,
  payload: todo,
});
export type IAction = ReturnType<typeof receiveTodo>;
