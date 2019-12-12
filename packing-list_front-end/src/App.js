import React, { Component } from "react";
import "./App.css";
import List from "./components/List";
import NewItem from "./components/NewItem";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Packing List</h1>
        <NewItem />
      </div>
    );
  }
}

export default App;
