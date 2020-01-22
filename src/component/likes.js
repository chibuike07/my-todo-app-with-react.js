import React from "react";

class Like extends React.Component {
  state = { like: 0 };
  IncreaseLike = () => {
    this.setState(prevState => ({ like: prevState.like + 1 }));
  };

  DecreaseLikes = () => {
    if (this.state.like === 0) {
      alert("u have reached the last");
      return;
    }
    this.setState({ like: this.state.like - 1 });
  };

  ResetLike = () =>
    this.setState({
      like: 0
    });
  render() {
    return (
      <div>
        <h1>welcome to my like page</h1>
        <h3>likes :{this.state.like}</h3>
        <button onClick={this.IncreaseLike}>like</button>
        <button onClick={this.DecreaseLikes}>unlike</button>
        <button onClick={this.ResetLike}>reset</button>
      </div>
    );
  }
}
export default Like;
