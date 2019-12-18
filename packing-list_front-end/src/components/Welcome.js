import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <section className="hero is-danger is-fullheight is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Alpaca My Bags!</h1>
              <h2 className="subtitle">Are you ready for your next trip?</h2>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Welcome;
