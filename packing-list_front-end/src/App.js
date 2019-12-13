import React, { Component } from "react";
import "./App.css";
import AddList from "./components/AddList";
// import AllLists from "./components/AllLists";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Packing List</h1>
        {/* <AllLists /> */}
        <AddList />
      </div>
    );
  }
}

export default App;
