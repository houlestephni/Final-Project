import React, { Component } from "react";
import "./App.css";
import AddList from "./components/AddList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Packing List</h1>
        <button onClick={this.getLists}>See Lists</button>
        <AddList />
      </div>
    );
  }
}

export default App;
