import React from "react";
import "./webpage.css";
class Form extends React.Component {
  state = {
    todoItems: [],
    newTodo: ""
  };

  handleChange = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.newTodo) {
      if (this.state.todoItems.includes(this.state.newTodo.toLowerCase())) {
        alert("please no duplicate todo task allowed");
        return;
      } else {
        this.setState({
          todoItems: [
            ...this.state.todoItems,
            this.state.newTodo.toLowerCase()
          ],
          newTodo: ""
        });
      }
    } else {
      return;
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todoItems.length !== this.state.todoItems.length) {
      const jsonState = JSON.stringify(this.state.todoItems);
      localStorage.setItem("TodoItem", jsonState);
    }
  }
  componentDidMount() {
    const itemsFromLocalStorage = localStorage.getItem("TodoItem");
    const readerableLists = JSON.parse(itemsFromLocalStorage);
    this.setState({ todoItems: readerableLists });
  }

  handleRemoveOneItem = itemToBeRemoved => {
    this.setState(prevState => ({
      todoItems: prevState.todoItems.filter(
        arrValue => arrValue !== itemToBeRemoved
      )
    }));
  };

  handleRemoveAllItems = () => {
    this.setState(() => ({ todoItems: [] }));
  };
  render() {
    return (
      <div>
        <div className="header">
          <h2>welcome to my todo app</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">todo items</label>
          <br />
          <br />
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChange}
            placeholder="add your Todos..."
          />
          <button>submit</button>
        </form>
        <div className="ul">
          <ul>
            {this.state.todoItems &&
              this.state.todoItems.map((item, i) => (
                <li key={i}>
                  {item}
                  <button
                    id="btn"
                    onClick={() => this.handleRemoveOneItem(item)}
                  >
                    <b
                      style={{
                        fontSize: 25
                      }}
                    >
                      x
                    </b>
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <div id="rmv">
          {this.handleDisplayRemoveBtn}
          {this.state.todoItems.length > 0 && (
            <button onClick={this.handleRemoveAllItems}>removeAll</button>
          )}
        </div>
      </div>
    );
  }
}
export default Form;
