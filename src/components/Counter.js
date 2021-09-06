import React, { Component } from "react";
import classes from "./Counter.module.css";
import { connect } from "react-redux";

class Counter extends Component {
  upHandler() {
    this.props.increment();
  }
  downHandler() {
    this.props.decrement();
  }
  upMoreHandler() {
    this.props.incrementMore(5); //% supply the payload here
  }
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.upHandler.bind(this)}>Increase by 1</button>
          <button onClick={this.upMoreHandler.bind(this)}>Increase by 5</button>
          <button onClick={this.downHandler.bind(this)}>Decrease by 1</button>
        </div>
      </main>
    );
  }
}

//$ Feed the class component Redux store values and dispatch functions as props
const mapStateToProps = (state) => {
  return { counter: state.counter };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
    incrementMore: (amount) => dispatch({ type: "incrementMore", amount }), //% use payload here
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
