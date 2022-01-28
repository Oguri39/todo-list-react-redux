import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ITodo } from "../../interface";
import TodoListItem from "../todoListItem/TodoListItem";
import "./TodoList.css";
import { Dispatch } from "react";

const filterTodos = (todos: ITodo[], filter: string) => {
  if (filter === "all") {
    return todos;
  }
  if (filter === "completed") {
    return todos.filter((todo) => todo.completed === true);
  }
  if (filter === "incompleted") {
    return todos.filter((todo) => todo.completed === false);
  }
};
const TodoList = ({ dispatch }: { dispatch: Dispatch<{}> }) => {
  const state = useSelector((state: RootState) => state.todos);
  const todos: ITodo[] = state.todoList;
  const filter: string = state.visibility;
  return (
    <ul className="todo-list">
      {todos.length === 0 ? (
        <div>You have nothing to be done...</div>
      ) : (
        filterTodos(todos, filter)?.map((todo: ITodo) => {
            return (
              <TodoListItem dispatch={dispatch} todo={todo} key={todo.taskId} />
            );
          })
      )}
    </ul>
  );
};
export default TodoList;
