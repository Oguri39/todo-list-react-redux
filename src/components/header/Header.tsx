import moment from "moment";
import { Dispatch, useState } from "react";
import Modal from "../modal/Modal";
import TodoInput from "../todoInput/TodoInput";
import "./Header.css";

const Header = ({ dispatch }: { dispatch: Dispatch<{}> }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOnClick = () => {
    setIsModalOpen(true);
  };
  return (
    <div>
      <div className="header-box">
        <header>Todo List</header>
      </div>
      <div className="new-todo-box">
        <h1 className="today-time">{`Today: ${moment(new Date()).format(
          "YYYY/MM/DD"
        )}`}</h1>
        <button className="new-todo" onClick={() => handleOnClick()}>
          +
        </button>
        <Modal isModalOpen={isModalOpen}>
          <TodoInput
            dispatch={dispatch}
            setIsModalOpen={setIsModalOpen}
          ></TodoInput>
        </Modal>
      </div>
    </div>
  );
};

export default Header;
