import React from "react";

class Name extends React.Component {
  render() {
    return (
      <div>
        <h1>my name is {this.props.name}</h1>
      </div>
    );
  }
}
class Complexion extends React.Component {
  render() {
    return (
      <div>
        <Name name="chibuike" />
        <p>i am {this.props.complexion} in complexion</p>
      </div>
    );
  }
}
export default Complexion;
