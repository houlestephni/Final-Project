import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";

import AllLists from "./components/AllLists";
import Welcome from "./components/Welcome";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

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
      <div className="page-container">
        <div className="pageContent">
          <Nav />
          {this.state.seeLists ? (
            <AllLists />
          ) : (
            <div className="columns">
              <div className="column is-half">
                <Welcome />
              </div>
              <div className=" column hero is-half is-danger is-fullheight is-bold">
                <div class="hero-body">
                  <div className="container">
                    <h1 class="title">
                      Create a packing list for your next trip!
                    </h1>
                    <div className="column">
                      <button
                        className="button is-large"
                        onClick={this.seeLists}
                      >
                        See Lists
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
