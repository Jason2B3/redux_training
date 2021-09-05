import classes from "./Counter.module.css";
import { useSelector } from "react-redux";

const Counter = () => {
  //  grab the part of the state object you need
  let counterVal = useSelector((state) => state.counter); 
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterVal}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
