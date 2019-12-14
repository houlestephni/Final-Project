import React, { Component } from "react";
import "./App.css";
import AddList from "./components/AddList";
import AllLists from "./components/AllLists";

class App extends Component {
  constructor() {
    super();
    this.state = {
      seeLists: false
    };
    this.seeLists = this.seeLists.bind(this);
  }
  seeLists(event) {
    event.preventDefault();
    this.setState({
      seeLists: true
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.seeLists ? (
          <AllLists />
        ) : (
          <div>
            <h1>Packing List</h1>
            <button onClick={this.seeLists}>See Lists</button>
            <AddList />
          </div>
        )}
      </div>
    );
  }
}

export default App;
