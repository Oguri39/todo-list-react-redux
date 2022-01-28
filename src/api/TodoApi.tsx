import axios from "axios";
import { ITodo } from "../interface";

const instance = axios.create({
  baseURL: "https://61f0f170072f86001749ef27.mockapi.io/",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});
export const getTodoListAPI = () => {
  return instance.get(`/todoList`);
};

export const addTodoAPI = (todo: ITodo) => {
  return instance.post(`/todoList`, todo);
};
export const getIdTodoAPI = (todo: ITodo) => {
  return instance.get(`/todoList?search=${todo.taskId}`);
};
export const editTodoAPI = (id: string, todo: ITodo) => {
  return instance.put(`/todoList/${id}`, {
    body: todo.body,
    deadline: todo.deadline,
    taskId: todo.taskId,
    completed: todo.completed,
  });
};
export const deleteTodoAPI = (id: string) => {
  return instance.delete(`/todoList/${id}`);
};
