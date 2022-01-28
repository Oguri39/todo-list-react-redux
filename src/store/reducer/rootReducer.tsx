import todoReducer from "./todoReducer";
import { combineReducers } from "redux";

export default combineReducers({
  todos: todoReducer,
});
