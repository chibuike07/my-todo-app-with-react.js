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
  clickHadler = () => this.state.inputValue;
  render() {
    return (
      <div>
        <h2>add items{this.state.inputValue}</h2>
        <h2>watch here {this.state.visiible && this.state.inputValue}</h2>
        <input
          type="text"
          placeholder="add ur text"
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>click</button>
        <button
          onClick={() => {
            console.log(this.clickHadler);
          }}
        >
          add
        </button>
      </div>
    );
  }
}
export default Container;
