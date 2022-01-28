import { useState } from "react";
import { useDispatch } from "react-redux";
import * as thunkActions from "../../store/thunk";
import "./Visibility.css";

const ALL = "all";
const COMPLETED = "completed";
const INCOMPLETED = "incompleted";
const Visibility = () => {
  const [filter, setFilter] = useState(ALL);
  const dispatch = useDispatch();
  const handleCLick = (e: string) => {
    switch (e) {
      case ALL: {
        setFilter(ALL);
        dispatch(thunkActions.toggleVisibilityThunk(ALL));
        break;
      }
      case COMPLETED: {
        setFilter(COMPLETED);
        dispatch(thunkActions.toggleVisibilityThunk(COMPLETED));
        break;
      }
      case INCOMPLETED: {
        setFilter(INCOMPLETED);
        dispatch(thunkActions.toggleVisibilityThunk(INCOMPLETED));
        break;
      }
    }
  };
  return (
    <div className="filter-container">
      <button
        className={`button${filter === ALL ? "-all" : ""}`}
        onClick={() => handleCLick(ALL)}
      >
        All
      </button>
      <button
        className={`button${filter === COMPLETED ? "-completed" : ""}`}
        onClick={() => handleCLick(COMPLETED)}
      >
        Completed
      </button>
      <button
        className={`button${filter === INCOMPLETED ? "-incompleted" : ""}`}
        onClick={() => handleCLick(INCOMPLETED)}
      >
        Incompled
      </button>
    </div>
  );
};

export default Visibility;
