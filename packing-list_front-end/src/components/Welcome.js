import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <section className="">
          <div className="hero-body">
            <div className="container">
              <img
                src="../../images/alpacamybag.png"
                alt="alpaca and suitcase"
              />
              {/* <h1 className="title">Alpaca My Bags!</h1>
              <h2 className="subtitle">Are you ready for your next trip?</h2> */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Welcome;
