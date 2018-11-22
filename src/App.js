import React, { Component } from "react";
import "./App.css";
import { List } from "./components/List";
import { Nav } from "./components/Nav";

class App extends Component {
  state = {
    input: "",
    list: [1,2,3,4,5,6,7]
  };
  handleInput = e => {
    this.setState({
      input: e.target.value
    });
  };
  handleAddItem = e => {
    e.preventDefault();
    this.setState({
      input: "",
      list: [...this.state.list, this.state.input]
    });
  };
  handleDeleteItem = (e, i) => {
    let newList = this.state.list.slice();
    newList.splice(i, 1);
    this.setState({
      list: newList
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav
            handleInput={this.handleInput}
            handleAddItem={this.handleAddItem}
            value={this.state.input}
          />
          <List
            list={this.state.list}
            handleDeleteItem={this.handleDeleteItem}
          />
        </header>
      </div>
    );
  }
}

export default App;
