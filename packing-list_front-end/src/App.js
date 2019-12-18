import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";

import AddList from "./components/AddList";
import Main from "./components/Main";
import Welcome from "./components/Welcome";

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
          <Main />
        ) : (
          <div className="columns">
            <div className="column">
              <Welcome />
            </div>
            <div className="column">
              <button
                className="button is-danger is-large"
                onClick={this.seeLists}
              >
                See Lists
              </button>
              <div className="column">
                <AddList />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
