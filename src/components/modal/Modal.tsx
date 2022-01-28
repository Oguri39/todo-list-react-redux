import { IInput } from "../todoInput/TodoInput";
import "./Modal.css";
const Modal = ({
  isModalOpen,
  children,
}: {
  isModalOpen: boolean;
  children: IInput;
}) => {
  return (
    <div className={`modal${isModalOpen === true ? "" : "-hidden"}`}>
      <div className="modal-body">{children}</div>
    </div>
  );
};

export default Modal;
