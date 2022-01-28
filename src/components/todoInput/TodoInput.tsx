import moment from "moment";
import React, { Dispatch, useState } from "react";
import * as thunkActions from "../../store/thunk";
import "./TodoInput.css";
const TodoInput = ({
  setIsModalOpen,
  dispatch,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dispatch: Dispatch<{}>;
}) => {
  const [body, setBody] = useState("");
  const [date, setDate] = useState("");
  const id = (Math.random().toString(36) + "00000000000000000").slice(2, 7);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTime = +moment(new Date(date));
    dispatch(
      thunkActions.receiveTodoThunk({
        body,
        deadline: newTime,
        taskId: id,
        completed: false,
      })
    );
    setBody("");
    setDate("");
    setIsModalOpen(false);
  };
  const handleOnClick = () => {
    setIsModalOpen(false);
    setBody("");
  };
  return (
    <div className="input-box">
      <form id="submit" onSubmit={handleSubmit}>
        <input
          className="submit-input"
          value={body}
          placeholder="What do you want to do?"
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <input
          className="submit-date"
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button form="submit" className="submit-button" type="submit">
          Add
        </button>
        <button className="submit-cancel" onClick={handleOnClick}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
export type IInput = ReturnType<typeof TodoInput>;
