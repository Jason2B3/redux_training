import classes from "./Counter.module.css";

import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  //$ ACCESS REDUX STORE VALUES
  const counterVal = useSelector((state) => {
    return state.counter.cValue;
  });
  const showCounter = useSelector((state) => state.counter.showCounter);

  //$ DISPATCH ACTIONS ACCORDING TO THE NEW IDENTIFIER-FUNCTION NAMES
  const dispatch = useDispatch();
  const up = () => dispatch(counterActions.increment());
  const down = () => dispatch(counterActions.decrement());
  const toggleCounterHandler = () => dispatch(counterActions.toggle());
  // Place payloads inside the identifier function brackets
  const upMore = () => dispatch(counterActions.incrementMore(5));

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counterVal}</div>}
      <div>
        <button onClick={up}>Increase by 1</button>
        <button onClick={down}>Decrease by 1</button>
        <button onClick={upMore}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
