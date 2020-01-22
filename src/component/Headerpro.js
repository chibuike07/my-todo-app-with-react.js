import React from "react";
import "./webpage.css";
import Like from "./likes";
import Container from "./Container";
const TopArea = props => {
  return (
    <div>
      <h1> welcome to my {props.title} page </h1>
    </div>
  );
};
const Indiv = props => {
  return (
    <div>
      {/* <ul style={{ display: "flex", color: "red", flexDirection: "colum" }}> */}
      {/* <li style={{ display: "block" }}>{props}</li> */}
      {/* </ul> */}
    </div>
  );
};
const todo = ["home", "about", "sale", "services", "study", "learn"];
const NavBar = () => {
  return (
    <ul className="ul">
      {todo.map((items, i) => (
        <li key={i} className="li">
          {items}
        </li>
      ))}
    </ul>
  );
};

class Pages extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <div>
            <TopArea title="todo app" />
          </div>
          <div className="nav">
            <NavBar />
          </div>
        </div>
        <div>
          <Indiv />
          <Container />
          <Like />
        </div>
      </div>
    );
  }
}

export default Pages;
