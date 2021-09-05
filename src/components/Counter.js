import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  //  grab the part of the state object you need
  let counterVal = useSelector((state) => state.counter);
  // Give yourself the ability to use the reducer's dispatch function
  const dispatch = useDispatch();
  const up = () => dispatch({ type: "increment" });
  const down = () => dispatch({ type: "decrement" });
  const toggleCounterHandler = () => {};
  const upMore = () => dispatch({ type: "increment more", amount: 5 });
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterVal}</div>
      <div>
        <button onClick={up}>Increase by 1</button>
        <button onClick={upMore}>Increase by 5</button>
        <button onClick={down}>Decrease by 1</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
