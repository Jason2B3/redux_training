import classes from "./Auth.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/store-center";

const Auth = () => {
  const dispatch = useDispatch();

  const loginStatus = useSelector((state) => state.authentication.isLoggedIn);
  const btnHandler = function (e) {
    e.preventDefault();
    if (!loginStatus) dispatch(authActions.login());
    console.log("logging in!");
  };
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button onClick={btnHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
