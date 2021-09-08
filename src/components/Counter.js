import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  //  grab the parts of the state object you need
  const counterVal = useSelector((state) => state.counter);
  const showCounterBoolean = useSelector((state) => state.showCounter);
  // Give yourself the ability to use the reducer's dispatch function
  const dispatch = useDispatch();
  const up = () => dispatch({ type: "increment" });
  const down = () => dispatch({ type: "decrement" });
  const upMore= () => dispatch({ type: "incrementMore", amount: 5 }); // SUPPLY PAYLOAD HERE
  const toggleCounterHandler = () => dispatch({ type: "toggle" });
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounterBoolean && <div className={classes.value}>{counterVal}</div>}
      <div>
      <button onClick={upMore}>Increase by 5</button>
        <button onClick={up}>Increase by 1</button>
        <button onClick={down}>Decrease by 1</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
