import { ITodo } from "../../interface";
import { FETCH_POST } from "./actionType";

export const fetchPost = (todoList: ITodo[]) => {
  return {
    type: FETCH_POST,
    payload: todoList,
  };
};
