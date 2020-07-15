import React from "react";
import Header from "./header";
import styles from "./mystyle.module.css";
import Col from "./App.css";
const TodoItems = () => {
  return (
    <div>
      <h2 className={styles.bigblue}>i render individual to items</h2>
      <Header name="chibuike" />
    </div>
  );
};

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: "" };
  }
  onSubmitHandler = event => {
    event.preventDefault();
    let name = this.state.user;
    if (name === "chibuike") {
      alert("name incorrect");
    }
  };
  onChangeHandler = event => {
    this.setState({ user: event.target.value });
  };
  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <TodoItems />
        <h1>hello {this.state.user}</h1>
        <input
          type="text"
          onChange={this.onChangeHandler}
          placeholder="add value"
        />
      </form>
    );
  }
}
export default Input;
