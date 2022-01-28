import moment from "moment";
import React, { Dispatch, useState } from "react";
import { ITodo } from "../../interface";
import * as thunkActions from "../../store/thunk";
import Modal from "../modal/Modal";
import "./TodoEdit.css";
const TodoEdit = ({
  setIsModalOpen,
  todo,
  dispatch,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  todo: ITodo;
  dispatch: Dispatch<{}>;
}) => {
  const [body, setBody] = useState(todo.body);
  const [date, setDate] = useState(todo.deadline);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const oldDate = moment(date).format("YYYY-MM-DDThh:mm");
  const handleEdit = () => {
    console.log(todo);
    const newTime = +moment(new Date(date));
    let editTodo: ITodo = {
      body: body,
      deadline: newTime,
      taskId: todo.taskId,
      completed: todo.completed,
    };
    dispatch(thunkActions.editTodoThunk(editTodo));
    setIsModalOpen(false);
    setIsEditOpen(false);
  };
  const handleOnClick = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="edit-box">
      <div id="edit-submit">
        <input
          className="edit-input"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <input
          className="edit-date"
          type="datetime-local"
          value={oldDate}
          onChange={(e) => setDate(+moment(new Date(e.target.value)))}
          required
        />
        <button className="edit-button" onClick={() => setIsEditOpen(true)}>
          Ok
        </button>
        <button className="edit-cancel" onClick={handleOnClick}>
          Cancel
        </button>
      </div>
      <Modal isModalOpen={isEditOpen}>
        <div className="ask-box">
          <h1>Save changed?</h1>
          <button className="edit-yes" onClick={() => handleEdit()}>
            Yes
          </button>
          <button className="edit-no" onClick={() => setIsEditOpen(false)}>
            No
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default TodoEdit;
