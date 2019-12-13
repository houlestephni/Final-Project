import React, { Component } from "react";
import "./App.css";
import NewItem from "./components/NewItem";
import AddList from "./components/AddList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Packing List</h1>

        <AddList />
        {/* <NewItem /> */}
      </div>
    );
  }
}

export default App;
