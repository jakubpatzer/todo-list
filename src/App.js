import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    input: "",
    list: [1, 2, 3, 4, 5]
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            {this.state.list.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </header>git
      </div>
    );
  }
}

export default App;
