import { toast } from "react-toastify";
import * as API from "../api/TodoApi";
import * as actions from "./action/todoAction";
import * as fetching from "./action/fetchAction";
import { Dispatch } from "react";
import { ITodo } from "../interface";

export const getTodosThunk = () => async (dispatch: Dispatch<{}>) => {
  try {
    const response = await API.getTodoListAPI();
    dispatch(fetching.fetchPost(response.data));
    toast.success("Loading success", { autoClose: 2000 });
  } catch (error) {
    toast.error("Loading fail", { autoClose: 2000 });
  }
};
export const receiveTodoThunk =
  (todo: ITodo) => async (dispatch: Dispatch<{}>) => {
    try {
      await API.addTodoAPI(todo);
      dispatch(actions.receiveTodo(todo));
      toast.success("Adding success", { autoClose: 2000 });
    } catch (error) {
      toast.error("Adding fail", { autoClose: 2000 });
    }
  };
export const toggleVisibilityThunk =
  (visibility: string) => async (dispatch: Dispatch<{}>) => {
    try {
      dispatch(actions.toggleVisibility(visibility));
    } catch (error) {
      toast.error("Problem Occur", { autoClose: 2000 });
    }
  };
export const deleteTodoThunk =
  (todo: ITodo) => async (dispatch: Dispatch<{}>) => {
    try {
      const respond = await API.getIdTodoAPI(todo);
      await API.deleteTodoAPI(respond.data[0].id);
      dispatch(actions.deleteTodo(todo.taskId));
      toast.success("Delete successfully", { autoClose: 2000 });
    } catch (error) {
      toast.error("Delete fail", { autoClose: 2000 });
    }
  };
export const editTodoThunk =
  (todo: ITodo) => async (dispatch: Dispatch<{}>) => {
    try {
      const respond = await API.getIdTodoAPI(todo);
      await API.editTodoAPI(respond.data[0].id, todo);
      dispatch(actions.editTodo(todo));
      toast.success("Edit successfully", { autoClose: 2000 });
    } catch (error) {
      toast.error("Edit fail", { autoClose: 2000 });
    }
  };
