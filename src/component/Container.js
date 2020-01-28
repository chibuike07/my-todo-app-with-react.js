import React from "react";

class Container extends React.Component {
  state = {
    inputValue: "",
    visiible: false
  };
  handleChange = e =>
    this.setState({ inputValue: e.target.value, visiible: false });
  handleClick = () => {
    this.setState({ visiible: true });
  };
  render() {
    return (
      <div>
        <h2 id="watcher">add items</h2>
        <h2>watch here {this.state.visiible && this.state.inputValue}</h2>
        <input
          type="text"
          placeholder="add ur text"
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>click</button>
        <button
          onClick={() =>
            (document.getElementById(
              "watcher"
            ).innerText = this.state.inputValue)
          }
        >
          add
        </button>
      </div>
    );
  }
}
export default Container;
