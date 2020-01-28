import React from "react";
import Pages from "./Headerpro";
import Complexion from "./Assignment";

class App extends React.Component {
  state = {
    name: "princewill",
    complexion: "chocholate"
  };
  render() {
    return (
      <div>
        <Pages />
        <Complexion complexion={this.state.complexion} />
      </div>
    );
  }
}
export default App;
