import { IState, ITodo } from "../../interface";
import {
  DELETE_TODO,
  EDIT_TODO,
  RECEIVE_TODO,
  TOGGLE_VISIBILITY,
  FETCH_POST,
} from "../action/actionType";

const initialState: IState = {
  todoList: [],
  visibility: "all",
};
const todoReducer = (
  state = initialState,
  { type, payload }: { type: string; payload: ITodo & string & ITodo[] }
) => {
  const newState: IState = { ...state };
  switch (type) {
    case FETCH_POST:
      payload.map((e: ITodo) => newState.todoList.unshift(e));
      return newState;
    case RECEIVE_TODO:
      newState.todoList.unshift(payload);
      return newState;
    case TOGGLE_VISIBILITY:
      newState.visibility = payload;
      return newState;
    case DELETE_TODO:
      newState.todoList = newState.todoList.filter(
        (todo) => todo.taskId !== payload
      );
      return newState;
    case EDIT_TODO:
      newState.todoList = newState.todoList.map((e) => {
        if (e.taskId === payload.taskId) {
          return payload;
        } else {
          return e;
        }
      });
      return newState;
    default:
      return state;
  }
};

export default todoReducer;
