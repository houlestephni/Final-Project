import React, { Component } from "react";
import "./App.css";
import List from "./components/List";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <h1>Packing List</h1>
        <List />
      </div>
    );
  }
}

export default App;
