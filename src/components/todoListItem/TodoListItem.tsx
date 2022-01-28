import { Dispatch, useState } from "react";
import { ITodo } from "../../interface";
import * as thunkActions from "../../store/thunk";
import Modal from "../modal/Modal";
import TodoEdit from "../todoEdit/TodoEdit";
import "./TodoListItem.css";
import moment from "moment";

const TodoListItem = ({
  todo,
  dispatch,
}: {
  todo: ITodo;
  dispatch: Dispatch<{}>;
}) => {
  const [checked, isChecked] = useState(todo.completed);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const handleOnChange = (todo: ITodo) => {
    isChecked(!checked);
    const newTodo = { ...todo, completed: !todo.completed };
    dispatch(thunkActions.editTodoThunk(newTodo));
  };
  const handleOnClick = (todo: ITodo) => {
    dispatch(thunkActions.deleteTodoThunk(todo));
    setIsDelete(false);
  };
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const checkDeadline = (deadline: number) => {
    const today = +moment(new Date());
    const timeleft = moment.duration(deadline - today).asHours();
    if (timeleft < 24) {
      return "-danger";
    } else if (timeleft < 72) {
      return "-warning";
    } else return "";
  };
  return (
    <li className={`item${checked === false ? "" : "-checked"}`}>
      <span
        className={`checkmark${checked === false ? "" : "-checked"}`}
      ></span>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handleOnChange(todo)}
      />
      <div className="content-box">
        <p className="todo-body">{todo.body}</p>
        <div className="todo-datetime">
          <p className={`deadline${checkDeadline(todo.deadline)}`}>
            {moment(todo.deadline).format("YYYY/MM/DD HH:MM")}
          </p>
        </div>
      </div>
      <button className="edit" onClick={() => handleModalOpen()}></button>
      <button className="delete" onClick={() => setIsDelete(true)}></button>
      <Modal isModalOpen={isModalOpen}>
        <TodoEdit
          dispatch={dispatch}
          setIsModalOpen={setIsModalOpen}
          todo={todo}
        ></TodoEdit>
      </Modal>
      <Modal isModalOpen={isDelete}>
        <div className="delete-box">
          <h1>Delete task?</h1>
          <button className="delete-yes" onClick={() => handleOnClick(todo)}>
            Yes
          </button>
          <button className="delete-no" onClick={() => setIsDelete(false)}>
            No
          </button>
        </div>
      </Modal>
    </li>
  );
};
export default TodoListItem;
