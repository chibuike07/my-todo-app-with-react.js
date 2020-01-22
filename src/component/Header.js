import React from "react";

const Header = props => {
  if (props.name !== "chibuike") {
    console.log(props.name + "is incorrect");
  }
  return <h2>Todo app from {props.name}</h2>;
};

export default Header;
