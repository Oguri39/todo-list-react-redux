import "./App.css";
import TodoList from "./components/todoList/TodoList";
import Visibility from "./components/visibility/Visibility";
import Header from "./components/header/Header";
import { useDispatch } from "react-redux";
import { getTodosThunk } from "./store/thunk";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodosThunk());
  },[dispatch]);
  return (
    <div className="App">
      <ToastContainer />
      <Header dispatch={dispatch} />
      <div className="todo">
        <TodoList dispatch={dispatch} />
      </div>
      <div className="footer">
        <Visibility />
      </div>
    </div>
  );
}

export default App;
